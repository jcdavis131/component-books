import { books, booksById } from './books.ts'
import type { View, Plate, Book, DesignTokens } from './types.ts'
import { searchDict, allStyles, dictionary } from './dictionary.ts'
import { createInitialAtelier, tokensToCss, tokensToTailwind, tokensToJson, shufflePicks, assemblePage } from './atelier.ts'
import { curations } from './curations.ts'
import { storeManifesto, getBookEditorial } from './editorial.ts'

const app = document.getElementById('app')!

type AppState = {
  view: View
  readerBook: string
  readerPlate: string
  dictQuery: string
  dictStyle: string
  dictBook: string
  atelier: ReturnType<typeof createInitialAtelier>
  codeTab: 'html' | 'css' | 'props'
  activeCuration: string | null
}

let state: AppState = {
  view: (location.hash.replace('#/','') as View) || 'library',
  readerBook: 'foundations',
  readerPlate: booksById['foundations']?.plates[0]?.id || 'foundations-placeholder-01',
  dictQuery: '',
  dictStyle: '',
  dictBook: '',
  atelier: createInitialAtelier(),
  codeTab: 'html',
  activeCuration: null
}

function syncHash(){
  const h = location.hash.replace('#/','').replace('#','') as View
  if (['library','reader','dictionary','atelier'].includes(h)) state.view = h
  else if (!location.hash) state.view = 'library'
}
window.addEventListener('hashchange', ()=>{ syncHash(); render() })

function setView(v: View){
  state.view = v
  location.hash = `#/${v}`
  render()
}

const clothMap: Record<string,string> = {
  'foundations': '#F6F0E8',
  'buttons': '#C9A86A',
  'forms': '#E8E0D5',
  'cards': '#4A1C1C',
  'navigation': '#1B3329',
  'data-display': '#DED5C5',
  'overlays': '#2A241E',
  'marketing': '#E8D5A8',
  'layouts': '#CBBFAD',
  'media': '#2E5A45',
  'feedback': '#7A3A2F',
  'commerce': '#141210',
}
function clothOf(b: Book): string { return clothMap[b.id] || b.accent || '#E8E0D5' }
function isDarkCloth(hex: string): boolean {
  const h = hex.replace('#',''); const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), bl=parseInt(h.slice(4,6),16);
  return (r*0.299 + g*0.587 + bl*0.114) < 110;
}

const provenanceByStyle: Record<string,string> = {
  'minimal': 'Bauhaus • Japanese joinery • Swiss',
  'editorial': 'Editorial • Swiss • Garamond',
  'brutalist': 'Brutalist • Bauhaus • Concrete',
  'glass': 'Glassmorphism • Swiss • Light',
  'clay': 'Clay • Japanese • Wabi-sabi',
  'corporate': 'Corporate • Swiss • Grid',
  'playful': 'Playful • Memphis • Pop',
  'retro': 'Retro • Bauhaus • Letterpress',
  'future': 'Future • Constructivist • Mono',
  'neumorphic': 'Neumorphic • Soft • Tactile',
  'moss': 'Moss • Forest • Organic',
  'terracotta': 'Terracotta • Clay • Earth',
  'void': 'Void • Ink • Noir',
}
function getProvenance(book?: Book, plate?: Plate): string {
  const s = plate?.style || 'minimal'
  return provenanceByStyle[s] || `Atelier • ${book?.title || 'Foundations'} • ${s}`
}

const materialByBook: Record<string, string[]> = {
  'foundations': ['linen','stone','brass'],
  'buttons': ['brass','ink','stone'],
  'forms': ['linen','stone','clay'],
  'cards': ['oxblood','brass','stone'],
  'navigation': ['forest','brass','stone'],
  'data-display': ['stone','brass','ink'],
  'overlays': ['ink','stone','brass'],
  'marketing': ['stone','brass','linen'],
  'layouts': ['stone','linen','brass'],
  'media': ['forest','stone','clay'],
  'feedback': ['oxblood','brass','stone'],
  'commerce': ['ink','brass','stone'],
}
function getMaterials(bookId: string): string[] { return materialByBook[bookId] || ['linen','stone','brass'] }

const atelierNotesByStyle: Record<string,string> = {
  'minimal': 'Cut with generous white space — lets the content breathe.',
  'editorial': 'Set like a magazine folio — quiet hierarchy, generous margins.',
  'brutalist': 'Raw edge, honest material — no ornament, pure structure.',
  'glass': 'Light on linen — translucency as depth, not decoration.',
  'clay': 'Soft press, tactile — rounded as a river stone.',
  'corporate': 'Grid-aligned, measured — built for scale.',
  'playful': 'A touch of joy — precise but not precious.',
  'retro': 'Letterpress memory — ink on ivory, slightly imperfect.',
  'future': 'Mono and edge — tomorrow cut today.',
  'neumorphic': 'Soft shadow, quiet lift — light from the north.',
  'moss': 'Forest floor, damp earth — organic, not ornamental.',
  'terracotta': 'Fired clay, warm hand — earth as pigment.',
  'void': 'Ink field — all type reversed, light as foil.',
}
function getAtelierNote(plate?: Plate): string { return atelierNotesByStyle[plate?.style || 'minimal'] || 'Made for the long read — quiet, considered, lasting.' }

const pairMap: Record<string,string[]> = {
  'foundations': ['buttons','cards','layouts'],
  'buttons': ['forms','cards','navigation'],
  'forms': ['buttons','feedback','overlays'],
  'cards': ['buttons','data-display','media'],
  'navigation': ['layouts','overlays','buttons'],
  'data-display': ['cards','feedback','navigation'],
  'overlays': ['forms','navigation','feedback'],
  'marketing': ['layouts','media','commerce'],
  'layouts': ['navigation','cards','marketing'],
  'media': ['cards','marketing','data-display'],
  'feedback': ['forms','overlays','data-display'],
  'commerce': ['marketing','cards','forms'],
}
function getCompleteLook(bookId: string): { bookId: string, plate: Plate }[] {
  const ids = pairMap[bookId] || ['buttons','forms','cards']
  return ids.slice(0,3).map(id=>{
    const b = booksById[id]
    const p = b?.plates?.[0]
    return p ? { bookId: id, plate: p } : null
  }).filter(Boolean) as { bookId: string, plate: Plate }[]
}

const staffPicks = new Set(['buttons','cards','marketing'])
const newArrivals = new Set(['commerce','media','feedback'])

function render(){
  const totalPlates = dictionary.length
  app.innerHTML = `
    <nav class="cb-nav">
      <div class="cb-nav-left">
        <div class="cb-brand"><div class="cb-brand-dot">B</div><span>Bhenre Collection</span><span>12 vols / ${totalPlates} plates</span></div>
        <div class="cb-tabs">
          ${(['library','reader','dictionary','atelier'] as View[]).map(v=>`
            <button class="cb-tab ${state.view===v?'active':''}" data-view="${v}">${v}</button>
          `).join('')}
        </div>
      </div>
      <div class="cb-nav-right">
        <span class="cb-count">ivory #FFFEFB • ink #141210 • brass #C9A86A</span>
        <button class="cb-btn" id="shuffle-global" title="Shuffle atelier">↻ Compose</button>
      </div>
    </nav>
    <main class="cb-main">
      ${state.view==='library' ? renderLibrary() : ''}
      ${state.view==='reader' ? renderReader() : ''}
      ${state.view==='dictionary' ? renderDictionary() : ''}
      ${state.view==='atelier' ? renderAtelier() : ''}
    </main>
    <footer style="padding:32px 24px;text-align:center;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;color:var(--stone-2);border-top:1px solid var(--paper-3);max-width:1320px;margin:0 auto;width:100%;display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center">
      <span style="display:flex;align-items:center;gap:10px"><span style="width:20px;height:1px;background:var(--brass);display:inline-block"></span> Bhenre Collection • Est. 2026 • Letterpress-grade • Offline-ready</span>
      <span style="font-family:var(--serif);font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-2)">Set in Iowan Old Style / Palatino • Brass & oxblood & forest • 12 vols</span>
    </footer>
  `
  attachEvents()
}

function renderLibrary(){
  const manifesto = storeManifesto
  return `
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;padding:10px 0 18px;border-bottom:1px solid var(--paper-3);margin-bottom:22px">
      <div style="font-family:var(--serif-display);font-size:13px;letter-spacing:.02em;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap">
        <span style="font-weight:400">Bhenre</span>
        <span style="font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--stone-2)">Design Store for the Web — Autumn '26</span>
        <span class="cb-store-badge">No. ${String(dictionary.length).padStart(3,'0')} / 500</span>
      </div>
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:.10em;text-transform:uppercase;color:var(--stone-2);display:flex;gap:16px">
        <span>Ivory • Brass • Oxblood</span><span>•</span><span>12 Vols • ${dictionary.length} Plates</span>
      </div>
    </div>

    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin-bottom:18px">
      <div class="cb-brass-plate"><b>Bhenre Collection</b> • Est. 2026 • Rare Book Room • 12 Vols • ${dictionary.length} Plates • Edition I</div>
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);display:flex;gap:12px;align-items:center">
        <span>⁂ Ex Libris Bhenre</span><span style="width:1px;height:10px;background:var(--paper-3);display:inline-block"></span><span>No. ${String(dictionary.length).padStart(3,'0')} / 500</span>
      </div>
    </div>

    <!-- Manifesto from editorial.ts — world class store -->
    <div style="display:grid;grid-template-columns:1.15fr .9fr .9fr;gap:28px;margin:0 0 28px;padding:22px 22px 20px;background:#fff;border:1px solid var(--paper-3);border-radius:12px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--brass-3), var(--brass), var(--brass-2))"></div>
      <div>
        <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);margin-bottom:10px;font-weight:700">Manifesto — ${manifesto.title.split('—')[1] || 'Autumn 26'}</div>
        <div style="font-family:var(--serif-display);font-size:19px;line-height:1.15;letter-spacing:-.01em;margin-bottom:10px;color:var(--ink)">A store, not a gallery.</div>
        <div style="font-family:var(--serif);font-size:12.8px;line-height:1.6;color:var(--ink-2)">${manifesto.body}</div>
        <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">${manifesto.principles.slice(0,2).map(p=>`<span class="cb-store-badge">${p.split('—')[0].trim()}</span>`).join('')}</div>
      </div>
      <div style="font-family:var(--serif);font-size:12.4px;line-height:1.6;color:var(--ink-2);border-left:1px dashed var(--paper-3);padding-left:20px">
        <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:8px">Materials • All cloth</div>
        Twelve cloths, brass foil, ivory paper, walnut shadow. Linen for Forms, brass for Buttons, oxblood for Cards, forest for Navigation. Each volume bound to its use — you can feel it before you read it.
        <div style="margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--ink-2);line-height:1.5">${manifesto.footer}</div>
      </div>
      <div style="font-family:var(--serif);font-size:12.4px;line-height:1.6;color:var(--ink-2);border-left:1px dashed var(--paper-3);padding-left:20px">
        <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:8px">Curation • Staff picks</div>
        Autumn '26 selects Buttons, Cards, Marketing as staff picks — the workhorses. New in: Commerce, Media, Feedback. Everything else is permanent collection, always available, never discounted.
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap"><span class="cb-store-badge">Staff Pick • Buttons</span><span class="cb-store-badge">Staff Pick • Cards</span><span class="cb-store-badge new">New • Commerce</span></div>
        <div style="margin-top:12px;display:flex;gap:6px"><button class="cb-btn primary" data-view="atelier" style="font-size:10px">Atelier →</button><button class="cb-btn" data-view="dictionary" style="font-size:10px">Dictionary</button></div>
      </div>
    </div>

    <!-- Curations — world class merchandising -->
    <div style="margin:0 0 32px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;flex-wrap:wrap;gap:12px">
        <div style="display:flex;align-items:baseline;gap:12px">
          <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);font-weight:700">Curated Sets • ${curations.length} Editions</div>
          <div style="font-family:var(--serif);font-size:11px;font-style:italic;color:var(--stone-2)">Merchandised like Dover Street Market — complete looks, not loose plates</div>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--stone-2)">Click set → loads Atelier with those picks</div>
      </div>
      <div class="cb-curations">
        ${curations.map(c=>{
          const accent = c.accent
          return `
          <div class="cb-curation" data-curation="${c.id}" style="--c-accent:${accent}">
            <div class="cb-curation-top" style="background: linear-gradient(90deg, ${accent}, var(--brass), var(--brass-2))"></div>
            <div class="cb-curation-head">
              <span class="cb-badge" style="border-color:${accent};color:${accent}">${c.season || 'Set'} • ${c.edition || ''}</span>
              <span class="cb-badge">${c.plates.length} plates</span>
            </div>
            <div class="cb-curation-title">${c.title}</div>
            <div class="cb-curation-subtitle">${c.subtitle}</div>
            <div class="cb-curation-desc">${c.description}</div>
            <div class="cb-curation-plates">
              ${c.plates.slice(0,5).map(ref=>{
                const b = booksById[ref.bookId]
                const pl = b?.plates.find(p=>p.id===ref.plateId)
                return pl ? `<div class="cb-curation-plate-mini" title="${pl.name}">${pl.html.slice(0,80)}<style>${pl.css.slice(0,400)}</style></div>` : ''
              }).join('')}
              ${c.plates.length>5 ? `<div class="cb-curation-more">+${c.plates.length-5}</div>` : ''}
            </div>
            <div class="cb-curation-foot"><span>Shop set →</span><span style="color:${accent}">⁂</span></div>
          </div>
          `
        }).join('')}
      </div>
    </div>

    <div class="cb-hero">
      <div>
        <div class="cb-kicker"><i></i> VOL. I—XII • COMPENDIUM • MMXXVI <em style="margin-left:8px;color:var(--brass-3)">Clothbound • Foil • Letterpress</em></div>
        <h1>A private library,<br/><i>for interface parts.</i></h1>
        <p>Twelve clothbound volumes, each cut to accommodate any design dream. Foundations to Commerce — picked, bound, and composed in the Atelier. Set in Iowan Old Style, brass rules, walnut shelves. Zero-deps, real code, no mock data. For the high-brow builder.</p>
        <div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap">
          <span class="cb-badge" style="background:#141210;color:#FFFEFB;border-color:#141210">⁂ Letterpress sheet</span>
          <span class="cb-badge">Brass foil titles</span>
          <span class="cb-badge">Walnut & oxblood cloth</span>
          <span class="cb-badge">Deckled edge shadows</span>
        </div>
      </div>
      <div class="cb-shelf-meta">
        <div style="font-family:var(--serif-display);font-size:15px;color:var(--ink);margin-bottom:10px;letter-spacing:-.01em">Shelf Card • Bhenre Collection</div>
        <div class="row"><span>Volumes</span><span>12</span></div>
        <div class="row"><span>Plates</span><span>${dictionary.length}</span></div>
        <div class="row"><span>Styles</span><span>${allStyles().length}</span></div>
        <div class="row"><span>Composition</span><span>ivory / ink / brass</span></div>
        <div class="row"><span>Binding</span><span>cloth • foil • brass</span></div>
        <div class="foot">Click any volume to read. Atelier to compose a full suite. Dictionary to search every plate. Each plate is set as a letterpress proof — generous margins, running heads, folio numbers.</div>
        <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
          <span style="font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass-3);border:1px solid var(--paper-3);padding:3px 8px;border-radius:99px;background:var(--paper-2)">Ex Libris</span>
          <span style="font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-2);border:1px solid var(--paper-3);padding:3px 8px;border-radius:99px">Ed. I / 2026</span>
          <span style="font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-2);border:1px solid var(--paper-3);padding:3px 8px;border-radius:99px">Bhenre • No. 001</span>
        </div>
      </div>
    </div>

    <div class="cb-shelf">
      ${books.map(b=>{
        const cloth = clothOf(b);
        const dark = isDarkCloth(cloth);
        const foilClass = dark ? '' : 'foil';
        const isStaff = staffPicks.has(b.id)
        const isNew = newArrivals.has(b.id)
        const editorial = getBookEditorial(b.id)
        return `
        <div class="cb-book" data-book="${b.id}" style="--accent:${cloth}; --cloth:${cloth}">
          <div class="cb-book-top" style="background: linear-gradient(90deg, ${cloth}, var(--brass), var(--brass-2))"></div>
          <div class="cb-spine"><div class="cb-spine-dot"></div><div class="cb-spine-text">VOL. ${String(b.volume).padStart(2,'0')} — ${b.id.toUpperCase()} — BHENRE</div><div class="cb-spine-dot" style="opacity:.6"></div></div>
          <div class="cb-exlibris" title="Ex Libris • Brass foil">⁂</div>
          ${isStaff ? `<div class="cb-staff-pick">Staff Pick</div>` : isNew ? `<div class="cb-staff-pick new">New • Autumn '26</div>` : ''}
          <div class="cb-book-cover">
            <div class="cb-book-meta"><span>VOL. ${String(b.volume).padStart(2,'0')} • ED. I</span><span>${b.plates.length} plates</span></div>
            <h3 class="cb-book-title ${foilClass}" style="${dark ? `color:#FFFEFB` : ''}">${b.title}</h3>
            <p class="cb-book-desc" style="${dark ? `color:rgba(255,254,251,.72)` : ''}">${b.description}</p>
            ${editorial ? `<div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:${dark?'rgba(255,254,251,.55)':'var(--stone-2)'};margin-top:6px;line-height:1.4">${editorial.lineage.split('+')[0].trim()} • ${editorial.subtitle.split('—')[1]?.trim() || ''}</div>` : ''}
            <div class="cb-book-preview">
              ${b.plates[0] ? b.plates[0].html.slice(0,220) : '<div style="opacity:.5">Empty</div>'}
              <style>${b.plates[0]?.css || ''}</style>
            </div>
          </div>
          <div class="cb-book-foot"><span style="display:flex;align-items:center;gap:6px"><span style="width:6px;height:6px;border-radius:50%;background:${cloth};border:1px solid var(--brass-3);display:inline-block"></span>${b.id} • cloth ${cloth}</span><span class="cb-book-count">${b.plates.length} plates →</span></div>
        </div>
      `}).join('')}
    </div>

    <!-- Book didactics — world class editorial -->
    <div style="margin:36px 0 0;padding:22px 22px 18px;background:#fff;border:1px solid var(--paper-3);border-radius:12px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--brass-3), var(--brass), var(--brass-2))"></div>
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);font-weight:700;margin-bottom:12px">Volume Didactics • 12 Vols • The Row notes</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px">
        ${books.map(b=>{
          const ed = getBookEditorial(b.id)
          if(!ed) return ''
          return `
          <div style="padding:12px 14px;border:1px solid var(--paper-3);border-radius:10px;background:var(--paper-2);display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2)">VOL. ${String(b.volume).padStart(2,'0')} • ${b.id}</span><span class="cb-store-badge">${clothOf(b)}</span></div>
            <div style="font-family:var(--serif-display);font-size:14px;color:var(--ink)">${ed.title} — ${ed.subtitle.split('—')[1]?.trim() || ''}</div>
            <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;color:var(--brass-3);text-transform:uppercase">${ed.lineage.slice(0,84)}…</div>
            <div style="font-family:var(--serif);font-size:11.8px;line-height:1.55;color:var(--ink-2)">${ed.body.slice(0,220)}…</div>
            <div style="font-family:var(--mono);font-size:9px;color:var(--stone-2);border-top:1px dashed var(--paper-3);padding-top:8px;margin-top:4px">${ed.colophon || ''}</div>
          </div>
          `
        }).join('')}
      </div>
    </div>

    <div class="cb-colophon" style="margin-top:22px">
      <div>
        <h5>Colophon</h5>
        <div style="font-family:var(--serif-display);font-size:14px;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em">Bhenre Collection • 12 Volumes • 214 Plates • 2026</div>
        <p style="margin:0 0 10px">Set in Iowan Old Style and Palatino (styled as Canela / Freight Display) with Berkeley Mono for marginalia. Paper is ivory #FFFEFB with warm stone #E8E0D5, brass #C9A86A foil, oxblood #4A1C1C and forest #1B3329 cloth. Shadows are walnut, rules are brass, type is letterpress.</p>
        <p style="margin:0;color:var(--stone-2);font-size:11.5px;font-family:var(--mono)">Printed as code — zero-deps, system fonts only, no external fetches. Each plate is a live specimen, not a mock. Composed in the Atelier, bound in the Library.</p>
      </div>
      <div style="border-left:1px dashed var(--paper-3);padding-left:20px">
        <h5>Edition Details</h5>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-family:var(--mono);font-size:11px">
          <span style="color:var(--stone-2)">EDITION</span><span>First • 2026 • No. 001/500</span>
          <span style="color:var(--stone-2)">BINDING</span><span>Cloth • Brass foil • Deckled shadows</span>
          <span style="color:var(--stone-2)">PAPER</span><span>Ivory #FFFEFB • Stone #E8E0D5</span>
          <span style="color:var(--stone-2)">TYPE</span><span>Iowan Old Style • Palatino • Mono</span>
          <span style="color:var(--stone-2)">MARKS</span><span>⁂ Ex Libris • Brass plate • Folio</span>
        </div>
        <div class="mark" style="margin-top:14px">⁂</div>
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass-3);margin-top:6px">Bhenre Collection • Est. MMXXVI</div>
      </div>
    </div>
  `
}

function renderReader(){
  const book = booksById[state.readerBook] || books[0]
  const plate = book.plates.find(p=>p.id===state.readerPlate) || book.plates[0]
  if (!plate) return `<div class="cb-empty">No plates in this volume yet — subagents still writing comprehensive plates.</div>`
  const folioNum = (book.volume*100 + (book.plates.findIndex(p=>p.id===plate.id)+1)).toString().padStart(3,'0')
  const editorial = getBookEditorial(book.id)
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <div class="cb-kicker" style="margin:0"><i></i> READER • VOL. ${String(book.volume).padStart(2,'0')} • ${book.title.toUpperCase()} • FOLIO ${folioNum}</div>
        <div class="cb-brass-plate" style="padding:6px 12px;font-size:9px"><b>${book.title}</b> • ${plate.name} • Ed. I</div>
      </div>
      <div style="display:flex;gap:8px"><button class="cb-btn" id="prev-plate">← Prev</button><button class="cb-btn" id="next-plate">Next →</button></div>
    </div>
    ${editorial ? `
    <div style="margin:0 0 16px;padding:12px 14px;background:var(--paper-2);border:1px solid var(--paper-3);border-radius:10px;display:flex;gap:16px;flex-wrap:wrap;font-family:var(--serif);font-size:11.8px;line-height:1.5;color:var(--ink-2)">
      <span style="font-family:var(--mono);font-size:9.5px;letter-spacing:.10em;text-transform:uppercase;color:var(--brass-3)">${editorial.subtitle}</span>
      <span style="color:var(--stone-2)">•</span>
      <span style="font-style:italic">${editorial.lineage}</span>
      <span style="margin-left:auto;font-family:var(--mono);font-size:9px;color:var(--stone-2)">${editorial.colophon || ''}</span>
    </div>` : ''}
    <div class="cb-reader">
      <div class="cb-rail">
        <h3>${book.title} — ${book.plates.length} plates • <span style="color:var(--brass-3)">⁂ ${clothOf(book)}</span></h3>
        <div style="font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:10px;display:flex;justify-content:space-between">
          <span>Card Cat. • Vol. ${book.volume}</span><span>Ed. I • 2026</span>
        </div>
        <div class="cb-plate-list">
          ${book.plates.map(p=>`
            <div class="cb-plate-item ${p.id===plate.id?'active':''}" data-plate="${p.id}">
              <span>${p.name}</span><small>${p.style}</small>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--paper-3);font-family:var(--mono);font-size:9.5px;color:var(--stone-2);display:flex;justify-content:space-between">
          <span>⁂ Ex Libris</span><span>${book.id} • ${clothOf(book)}</span>
        </div>
      </div>
      <div class="cb-stage">
        <div class="cb-stage-head">
          <div><span class="cb-stage-title">${plate.name}</span> <span style="margin-left:8px" class="cb-badge" style="border-color:var(--brass);color:var(--brass-3)">${plate.style} • foil</span></div>
          <div style="display:flex;gap:6px"><button class="cb-btn" data-copy="html">Copy HTML</button><button class="cb-btn" data-copy="css">Copy CSS</button></div>
        </div>
        <div class="cb-stage-body">
          <div class="cb-stage-live" id="live-root">
            <div class="cb-folio"><span><b>Bhenre Collection</b> • ${book.title} • Vol. ${book.volume}</span><span>Folio ${folioNum} • Plate ${(book.plates.findIndex(p=>p.id===plate.id)+1).toString().padStart(2,'0')} / ${book.plates.length}</span></div>
            <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);margin-bottom:12px;display:flex;gap:8px;align-items:center">
              <span>⁂</span><span>${plate.id}</span><span style="width:12px;height:1px;background:var(--paper-3);display:inline-block"></span><span>${plate.style}</span>
            </div>
            ${plate.html}
            <style>${plate.css}</style>
            <div style="margin-top:22px;padding-top:14px;border-top:1px solid var(--paper-3);display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:9.5px;color:var(--stone-2)">
              <span>— ${plate.name} • ${book.title} • set in letterpress</span><span>⁂ ${folioNum}</span>
            </div>
          </div>
        </div>
        <div class="cb-code">
          <div class="cb-code-tabs">
            <button class="cb-code-tab ${state.codeTab==='html'?'active':''}" data-code="html">HTML • proof</button>
            <button class="cb-code-tab ${state.codeTab==='css'?'active':''}" data-code="css">CSS • spec</button>
            <button class="cb-code-tab ${state.codeTab==='props'?'active':''}" data-code="props">PROPS • colophon</button>
          </div>
          <div id="code-view">${state.codeTab==='html' ? escapeHtml(plate.html) : state.codeTab==='css' ? escapeHtml(plate.css) : escapeHtml((plate.props||[]).join('\n') + '\n\nTokens:\n' + (plate.tokens||[]).map(t=>`${t.name}: ${t.value} // ${t.usage}`).join('\n'))}</div>
        </div>
      </div>
      <div class="cb-inspector">
        <div>
          <h4>Plate • Folio ${folioNum}</h4>
          <div style="font-family:var(--serif-display);font-size:18px;margin-bottom:6px;letter-spacing:-.01em">${plate.name}</div>
          <div class="cb-dropcap" style="font-size:13px;color:var(--ink-2);line-height:1.55;font-family:var(--serif)">${plate.description}</div>
          <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="cb-badge" style="border-color:var(--brass);color:var(--brass-3)">⁂ ${plate.style}</span>
            <span class="cb-badge">${book.title}</span>
            <span class="cb-badge" style="background:var(--ink);color:var(--ivory);border-color:var(--ink)">${clothOf(book)} cloth</span>
            <span class="cb-store-badge">Ed. I • No. ${folioNum}</span>
          </div>
          <div class="cb-provenance" style="margin-top:10px">
            <b>Provenance</b><span class="sep"></span><span>${getProvenance(book, plate)}</span>
          </div>
          <div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <span style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2)">Materials</span>
            <div style="display:flex;gap:8px;align-items:center">
              ${getMaterials(book.id).map(m=>`<span class="cb-material-swatch ${m}" title="${m} — ${book.title} cloth"></span>`).join('')}
              <span style="font-family:var(--mono);font-size:10px;color:var(--ink-2);margin-left:4px">${getMaterials(book.id).join(' • ')}</span>
            </div>
          </div>
        </div>

        <div>
          <h4>Measurements • Spec sheet</h4>
          <table class="cb-measure">
            <tr><td>Cut</td><td>${plate.style} • ${book.title} • Vol. ${book.volume}</td></tr>
            <tr><td>Cloth</td><td>${clothOf(book)} • brass foil • deckled</td></tr>
            <tr><td>Folio</td><td>${folioNum} • Plate ${(book.plates.findIndex(p=>p.id===plate.id)+1).toString().padStart(2,'0')} / ${book.plates.length}</td></tr>
            ${(plate.props||[]).slice(0,4).map(p=>`<tr><td>${p}</td><td>— measured to spec • atelier cut</td></tr>`).join('')}
            ${(!plate.props || plate.props.length===0) ? `<tr><td>Measure</td><td>default • atelier standard • ivory / brass / ink</td></tr>` : ''}
          </table>
        </div>

        <div>
          <h4>Tokens • Brass rule</h4>
          ${(plate.tokens||[]).map(t=>`<div class="cb-token-row"><span>${t.name}</span><span style="color:var(--brass-3)">${t.value}</span></div>`).join('') || '<div style="font-size:12px;color:var(--ink-2)">No tokens — uses global • ivory / brass / ink</div>'}
        </div>

        <div>
          <h4>Complete the look</h4>
          <div class="cb-complete-look">
            ${getCompleteLook(book.id).map(({bookId, plate: p})=>`
              <div class="cb-complete-look-item" data-open="${bookId}:${p.id}" title="${p.name} — ${bookId}">
                ${p.html.slice(0,120)}
                <small>${booksById[bookId]?.title || bookId}</small>
                <style>${p.css?.slice(0,800) || ''}</style>
              </div>
            `).join('')}
          </div>
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--stone-2);margin-top:6px;line-height:1.5">Pairs well with — merchandised like a $400 sweater. Click to try on.</div>
        </div>

        <div class="cb-atelier-note">
          ${getAtelierNote(plate)}
          <div style="margin-top:8px;font-family:var(--mono);font-style:normal;font-size:9px;color:var(--stone-2);letter-spacing:.08em">Cloth ${clothOf(book)} • ${plate.style} • Folio ${folioNum} • Bhenre Atelier</div>
        </div>

        <div>
          <h4>Use cases • Marginalia</h4>
          <div style="font-size:12px;line-height:1.55;font-family:var(--serif);font-style:italic">${(plate.useCases||[]).join(' • ') || 'general • editorial • atelier'}</div>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="cb-btn primary" id="use-in-atelier">Use in Atelier →</button>
          <button class="cb-btn" id="view-dict">Dictionary</button>
        </div>

        <div style="margin-top:4px;padding:10px 12px;background:var(--paper-2);border:1px dashed var(--paper-3);border-radius:8px;font-family:var(--mono);font-size:10px;color:var(--ink-2);line-height:1.5">
          <div style="color:var(--brass-3);font-weight:700;letter-spacing:.10em;margin-bottom:4px">EDITION NOTE</div>
          First Edition • 2026 • Bhenre Collection • No. 001<br/>Cloth ${clothOf(book)} • Brass foil • Folio ${folioNum}<br/>⁂ Ex Libris • ${getProvenance(book, plate)}
        </div>
      </div>
    </div>
  `
}

function renderDictionary(){
  const results = searchDict(state.dictQuery, { style: state.dictStyle || undefined, bookId: state.dictBook || undefined })
  return `
    <div class="cb-dict-head">
      <div class="cb-search"><span style="opacity:.5">⌕</span><input id="dict-search" placeholder="Search 214 plates — try 'glass modal' or 'brutalist button' or 'pricing'" value="${escapeAttr(state.dictQuery)}" /><span class="cb-badge">${results.length} results</span></div>
      <div class="cb-filters">
        <select class="cb-filter" id="dict-book"><option value="">All books</option>${books.map(b=>`<option value="${b.id}" ${state.dictBook===b.id?'selected':''}>${b.title}</option>`).join('')}</select>
        <select class="cb-filter" id="dict-style"><option value="">All styles</option>${allStyles().map(s=>`<option value="${s}" ${state.dictStyle===s?'selected':''}>${s}</option>`).join('')}</select>
        <button class="cb-btn" id="dict-clear">Clear</button>
      </div>
    </div>
    <div class="cb-grid">
      ${results.slice(0,120).map(e=>`
        <div class="cb-plate-card" data-open="${e.bookId}:${e.plate.id}">
          <div class="cb-plate-card-preview">${e.plate.html.slice(0,240)}<style>${e.plate.css}</style></div>
          <div class="cb-plate-card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span class="cb-badge">${e.bookTitle}</span><span class="cb-badge" style="background:var(--paper)">${e.plate.style}</span></div>
            <h4>${e.plate.name}</h4>
            <p>${e.plate.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
    ${results.length>120 ? `<div class="cb-empty">Showing 120 of ${results.length} — refine search to see more</div>` : ''}
  `
}

function renderAtelier(){
  const st = state.atelier
  const pageHtml = assemblePage(st)
  const activeCuration = state.activeCuration ? curations.find(c=>c.id===state.activeCuration) : null
  return `
    <div class="cb-kicker" style="margin-bottom:16px"><i></i> ATELIER • COMPOSE • EXPORT ${activeCuration ? `• <span style="color:var(--brass-3)">SET: ${activeCuration.title.toUpperCase()}</span>` : ''}</div>
    ${activeCuration ? `<div style="margin:0 0 14px;padding:10px 14px;border:1px solid var(--brass);border-radius:10px;background:var(--paper-2);font-family:var(--mono);font-size:10px;display:flex;justify-content:space-between;align-items:center"><span><b>${activeCuration.title}</b> • ${activeCuration.plates.length} plates • ${activeCuration.accent} • ${activeCuration.description.slice(0,90)}…</span><button class="cb-btn" id="clear-curation">Clear set</button></div>` : ''}
    <div class="cb-atelier">
      <div class="cb-atelier-panel">
        <div style="font-family:var(--serif);font-size:18px;display:flex;justify-content:space-between;align-items:baseline"><span>Tokens</span><span style="font-family:var(--mono);font-size:9px;color:var(--stone-2)">${curations.length} curated sets</span></div>
        ${renderTokenField('Radius','radius','select',['8px','12px','16px','24px','999px'], st.tokens.radius)}
        ${renderTokenField('Shadow','shadow','select',['soft','brutal','layered'], st.tokens.shadow)}
        <div class="cb-field"><label>Accent</label><input type="color" id="token-accent" value="${st.tokens.accent}" /></div>
        <div class="cb-field"><label>Paper</label><input type="color" id="token-paper" value="${st.tokens.paper}" /></div>
        <div class="cb-field"><label>Density</label><select id="token-density"><option value="compact" ${st.tokens.density==='compact'?'selected':''}>Compact</option><option value="cozy" ${st.tokens.density==='cozy'?'selected':''}>Cozy</option><option value="airy" ${st.tokens.density==='airy'?'selected':''}>Airy</option></select></div>
        <div style="display:flex;gap:8px"><button class="cb-btn primary" id="atelier-shuffle">Shuffle</button><button class="cb-btn" id="atelier-reset">Reset</button></div>

        <div style="margin-top:14px">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:.10em;text-transform:uppercase;color:var(--brass-3);margin-bottom:8px;font-weight:700">Curated Sets — Quick Load</div>
          <div style="display:grid;gap:6px">
            ${curations.map(c=>`<button class="cb-btn" data-load-curation="${c.id}" style="justify-content:space-between;display:flex;width:100%;text-align:left;font-size:11px"><span>${c.title.split('—')[0].trim()}</span><span style="color:${c.accent}">• ${c.plates.length}</span></button>`).join('')}
          </div>
        </div>

        <div style="margin-top:12px">
          <div style="font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Stack (drag order soon — now pick order)</div>
          <div class="cb-stack">
            ${st.stack.map((bookId,i)=>`
              <div style="display:flex;gap:8px;align-items:center;background:var(--paper-2);border:1px solid var(--paper-3);border-radius:8px;padding:6px 8px;font-size:12px">
                <span style="font-family:var(--mono);font-size:10px">${i+1}</span>
                <span style="flex:1">${booksById[bookId]?.title || bookId}</span>
                <button class="cb-btn" data-move-up="${bookId}" style="padding:2px 6px">↑</button>
                <button class="cb-btn" data-move-down="${bookId}" style="padding:2px 6px">↓</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="cb-atelier-preview">
        <div class="cb-atelier-preview-head"><span>LIVE PAGE • ${st.stack.length} sections • ${Object.keys(st.picks).length} picks</span><div style="display:flex;gap:6px"><button class="cb-btn" id="copy-page-html">Copy HTML</button><button class="cb-btn primary" id="open-preview-new">Open Preview</button></div></div>
        <div class="cb-atelier-page" id="atelier-page">${pageHtml}</div>
      </div>

      <div class="cb-atelier-panel">
        <div style="font-family:var(--serif);font-size:18px">Picks per book</div>
        <div class="cb-stack">
          ${books.map(b=>{
            const pickId = st.picks[b.id]
            const pick = b.plates.find(p=>p.id===pickId) || b.plates[0]
            return `
              <div class="cb-field">
                <label>${b.title} (${b.plates.length})</label>
                <select data-pick="${b.id}">
                  ${b.plates.map(p=>`<option value="${p.id}" ${p.id===pick?.id?'selected':''}>${p.name} — ${p.style}</option>`).join('')}
                </select>
                <div style="margin-top:6px;padding:8px;background:var(--paper-2);border:1px solid var(--paper-3);border-radius:8px;min-height:64px;display:grid;place-items:center;overflow:hidden">${pick ? pick.html.slice(0,180) : '—'}<style>${pick?.css||''}</style></div>
              </div>
            `
          }).join('')}
        </div>

        <div style="margin-top:12px">
          <div style="font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px">Export</div>
          <div style="display:flex;gap:6px;margin-bottom:8px">
            <button class="cb-btn primary" data-export="css">CSS vars</button>
            <button class="cb-btn" data-export="tailwind">Tailwind</button>
            <button class="cb-btn" data-export="json">JSON</button>
          </div>
          <div class="cb-token-export" id="token-export">${escapeHtml(tokensToCss(st.tokens))}</div>
        </div>
      </div>
    </div>
  `
}

function renderTokenField(label:string, key:keyof DesignTokens, type:'select'|'color', opts:string[], val:string){
  if (type==='select'){
    return `<div class="cb-field"><label>${label}</label><select id="token-${key}">${opts.map(o=>`<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}</select></div>`
  }
  return ''
}

function attachEvents(){
  document.querySelectorAll('[data-view]').forEach(el=>{
    el.addEventListener('click',()=> setView((el as HTMLElement).dataset.view as View))
  })
  document.getElementById('shuffle-global')?.addEventListener('click',()=>{
    state.atelier = shufflePicks(state.atelier)
    if (state.view!=='atelier') setView('atelier'); else render()
  })

  document.querySelectorAll('[data-book]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.readerBook = (el as HTMLElement).dataset.book!
      state.readerPlate = booksById[state.readerBook]?.plates[0]?.id || ''
      setView('reader')
    })
  })

  document.querySelectorAll('[data-plate]').forEach(el=>{
    el.addEventListener('click',()=>{ state.readerPlate=(el as HTMLElement).dataset.plate!; render() })
  })
  document.getElementById('prev-plate')?.addEventListener('click',()=>{
    const book = booksById[state.readerBook]; if(!book) return
    const idx = book.plates.findIndex(p=>p.id===state.readerPlate)
    state.readerPlate = book.plates[(idx-1+book.plates.length)%book.plates.length].id; render()
  })
  document.getElementById('next-plate')?.addEventListener('click',()=>{
    const book = booksById[state.readerBook]; if(!book) return
    const idx = book.plates.findIndex(p=>p.id===state.readerPlate)
    state.readerPlate = book.plates[(idx+1)%book.plates.length].id; render()
  })
  document.querySelectorAll('[data-code]').forEach(el=>{
    el.addEventListener('click',()=>{ state.codeTab = (el as HTMLElement).dataset.code as any; render() })
  })
  document.querySelectorAll('[data-copy]').forEach(el=>{
    el.addEventListener('click',async()=>{
      const plate = booksById[state.readerBook]?.plates.find(p=>p.id===state.readerPlate)
      if(!plate) return
      const kind = (el as HTMLElement).dataset.copy as 'html'|'css'
      await navigator.clipboard.writeText(kind==='html'?plate.html:plate.css)
      const orig = (el as HTMLElement).textContent; (el as HTMLElement).textContent='Copied!'; setTimeout(()=>{(el as HTMLElement).textContent=orig!},900)
    })
  })
  document.getElementById('use-in-atelier')?.addEventListener('click',()=>{
    state.atelier.picks[state.readerBook]=state.readerPlate
    setView('atelier')
  })
  document.getElementById('view-dict')?.addEventListener('click',()=> setView('dictionary'))

  document.getElementById('dict-search')?.addEventListener('input',(e)=>{ state.dictQuery=(e.target as HTMLInputElement).value; render() })
  document.getElementById('dict-book')?.addEventListener('change',(e)=>{ state.dictBook=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('dict-style')?.addEventListener('change',(e)=>{ state.dictStyle=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('dict-clear')?.addEventListener('click',()=>{ state.dictQuery=''; state.dictBook=''; state.dictStyle=''; render() })
  document.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click',()=>{
      const [bookId, plateId] = (el as HTMLElement).dataset.open!.split(':')
      state.readerBook=bookId; state.readerPlate=plateId; setView('reader')
    })
  })

  // curations
  document.querySelectorAll('[data-curation]').forEach(el=>{
    el.addEventListener('click',()=>{
      const cid = (el as HTMLElement).dataset.curation!
      const cur = curations.find(c=>c.id===cid)
      if(!cur) return
      state.activeCuration = cid
      // load picks into atelier
      for (const ref of cur.plates){
        state.atelier.picks[ref.bookId]=ref.plateId
      }
      // also set stack order by unique bookIds in curation order
      const seen = new Set<string>()
      const ordered: string[] = []
      for (const r of cur.plates){ if(!seen.has(r.bookId)){ seen.add(r.bookId); ordered.push(r.bookId) } }
      // keep other stack items after
      for (const b of state.atelier.stack){ if(!seen.has(b)) ordered.push(b) }
      state.atelier.stack = ordered
      state.atelier.tokens.accent = cur.accent
      setView('atelier')
    })
  })
  document.querySelectorAll('[data-load-curation]').forEach(el=>{
    el.addEventListener('click',()=>{
      const cid = (el as HTMLElement).dataset.loadCuration!
      const cur = curations.find(c=>c.id===cid)
      if(!cur) return
      state.activeCuration = cid
      for (const ref of cur.plates) state.atelier.picks[ref.bookId]=ref.plateId
      const seen = new Set<string>()
      const ordered: string[] = []
      for (const r of cur.plates){ if(!seen.has(r.bookId)){ seen.add(r.bookId); ordered.push(r.bookId) } }
      for (const b of state.atelier.stack){ if(!seen.has(b)) ordered.push(b) }
      state.atelier.stack = ordered
      state.atelier.tokens.accent = cur.accent
      render()
    })
  })
  document.getElementById('clear-curation')?.addEventListener('click',()=>{ state.activeCuration=null; render() })

  document.getElementById('token-radius')?.addEventListener('change',(e)=>{ state.atelier.tokens.radius=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-shadow')?.addEventListener('change',(e)=>{ state.atelier.tokens.shadow=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-accent')?.addEventListener('input',(e)=>{ state.atelier.tokens.accent=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-paper')?.addEventListener('input',(e)=>{ state.atelier.tokens.paper=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-density')?.addEventListener('change',(e)=>{ state.atelier.tokens.density=(e.target as HTMLSelectElement).value as any; render() })
  document.getElementById('atelier-shuffle')?.addEventListener('click',()=>{ state.atelier=shufflePicks(state.atelier); render() })
  document.getElementById('atelier-reset')?.addEventListener('click',()=>{ state.atelier=createInitialAtelier(); state.activeCuration=null; render() })
  document.querySelectorAll('[data-pick]').forEach(el=>{
    el.addEventListener('change',()=>{ const bookId=(el as HTMLElement).dataset.pick||(el as HTMLElement).getAttribute('data-pick')!; state.atelier.picks[bookId]=(el as HTMLSelectElement).value; render() })
  })
  document.querySelectorAll('[data-move-up]').forEach(el=>{
    el.addEventListener('click',()=>{ const id=(el as HTMLElement).dataset.moveUp!; const idx=state.atelier.stack.indexOf(id); if(idx>0){ const s=[...state.atelier.stack]; [s[idx-1],s[idx]]=[s[idx],s[idx-1]]; state.atelier.stack=s; render() } })
  })
  document.querySelectorAll('[data-move-down]').forEach(el=>{
    el.addEventListener('click',()=>{ const id=(el as HTMLElement).dataset.moveDown!; const idx=state.atelier.stack.indexOf(id); if(idx>=0&&idx<state.atelier.stack.length-1){ const s=[...state.atelier.stack]; [s[idx],s[idx+1]]=[s[idx+1],s[idx]]; state.atelier.stack=s; render() } })
  })
  document.querySelectorAll('[data-export]').forEach(el=>{
    el.addEventListener('click',()=>{
      const kind=(el as HTMLElement).dataset.export!
      const expEl=document.getElementById('token-export')
      if(!expEl) return
      if(kind==='css') expEl.textContent=tokensToCss(state.atelier.tokens)
      if(kind==='tailwind') expEl.textContent=tokensToTailwind(state.atelier.tokens)
      if(kind==='json') expEl.textContent=tokensToJson(state.atelier.tokens)
    })
  })
  document.getElementById('copy-page-html')?.addEventListener('click',async()=>{
    const html = (document.getElementById('atelier-page') as HTMLElement).innerHTML
    await navigator.clipboard.writeText(html); const b=document.getElementById('copy-page-html') as HTMLButtonElement; const o=b.textContent; b.textContent='Copied!'; setTimeout(()=>b.textContent=o,900)
  })
  document.getElementById('open-preview-new')?.addEventListener('click',()=>{
    const html = (document.getElementById('atelier-page') as HTMLElement).innerHTML
    const w = window.open('','_blank'); if(!w) return; w.document.write(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Atelier Preview</title><style>body{margin:0;font-family:system-ui}</style>${html}`); w.document.close()
  })
}

function escapeHtml(s:string){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }
function escapeAttr(s:string){ return s.replace(/"/g,'&quot;').replace(/</g,'&lt;') }

syncHash()
render()

try{
  localStorage.setItem('cb-last-build', JSON.stringify({ at: new Date().toISOString(), books: books.length, plates: dictionary.length, curations: curations.length }))
}catch{}
