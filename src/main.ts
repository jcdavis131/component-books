import { books, booksById } from './books.ts'
import type { View, Plate, Book, DesignTokens } from './types.ts'
import { searchDict, allStyles, dictionary } from './dictionary.ts'
import { createInitialAtelier, tokensToCss, tokensToTailwind, tokensToJson, shufflePicks, assemblePage } from './atelier.ts'
import { curations } from './curations.ts'
import { storeManifesto, getBookEditorial } from './editorial.ts'
import { thinkingChapters, getThinkingChapter } from './designSystemThinking.ts'
import { applicationGuides, getAppGuide } from './applicationGuides.ts'

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
  activeThinking: string | null
  activeGuide: string | null
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
  activeCuration: null,
  activeThinking: null,
  activeGuide: null
}

function syncHash(){
  const raw = location.hash.replace('#/','').replace('#','')
  const [v] = raw.split('?')
  if (['library','reader','dictionary','atelier','thinking'].includes(v)) state.view = v as View
  else if (!location.hash) state.view = 'library'
}
window.addEventListener('hashchange', ()=>{ syncHash(); render() })

function setView(v: View){
  state.view = v
  location.hash = `#/${v}`
  render()
}

// --- cloth & lineage helpers (quiet luxury) ---
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
          ${(['library','thinking','reader','dictionary','atelier'] as View[]).map(v=>`
            <button class="cb-tab ${state.view===v?'active':''}" data-view="${v}">${v}</button>
          `).join('')}
        </div>
      </div>
      <div class="cb-nav-right">
        <span class="cb-count">ivory #FFFEFB • ink #141210 • brass #C9A86A</span>
        <button class="cb-btn" id="shuffle-global" title="Compose new">↻ Compose</button>
      </div>
    </nav>
    <main class="cb-main">
      ${state.view==='library' ? renderLibrary() : ''}
      ${state.view==='thinking' ? renderThinking() : ''}
      ${state.view==='reader' ? renderReader() : ''}
      ${state.view==='dictionary' ? renderDictionary() : ''}
      ${state.view==='atelier' ? renderAtelier() : ''}
    </main>
    <footer style="padding:32px 24px;text-align:center;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;color:var(--stone-2);border-top:1px solid var(--paper-3);max-width:1320px;margin:0 auto;width:100%;display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center">
      <span style="display:flex;align-items:center;gap:10px"><span style="width:20px;height:1px;background:var(--brass);display:inline-block"></span> Bhenre Collection • Est. 2026 • Letterpress-grade • Offline-ready</span>
      <span style="font-family:var(--serif);font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-2)">Set in Iowan Old Style / Palatino • Brass & oxblood & forest • 12 vols • Thinking as product</span>
    </footer>
  `
  attachEvents()
}

function renderLibrary(){
  const manifesto = storeManifesto
  // pick 4 curated sets max for simplicity
  const curatedSets = curations.slice(0,4)
  const thinkingPreview = thinkingChapters.slice(0,3)
  const guidesPreview = applicationGuides.slice(0,3)
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

    <!-- Manifesto — simplified -->
    <div style="display:grid;grid-template-columns:1.15fr .85fr;gap:28px;margin:0 0 28px;padding:22px 22px 20px;background:#fff;border:1px solid var(--paper-3);border-radius:12px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--brass-3), var(--brass), var(--brass-2))"></div>
      <div>
        <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);margin-bottom:10px;font-weight:700">Manifesto — A store, not a gallery</div>
        <div style="font-family:var(--serif-display);font-size:22px;line-height:1.12;letter-spacing:-.01em;margin-bottom:12px;color:var(--ink)">A private library,<br/><i>for interface parts.</i></div>
        <div style="font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--ink-2)">${manifesto.body}</div>
        <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
          <span class="cb-badge" style="background:#141210;color:#FFFEFB;border-color:#141210">⁂ Letterpress</span>
          <span class="cb-badge">Brass foil</span>
          <span class="cb-badge">Walnut & oxblood</span>
          <span class="cb-badge">214 plates</span>
        </div>
      </div>
      <div style="font-family:var(--serif);font-size:12.6px;line-height:1.6;color:var(--ink-2);border-left:1px dashed var(--paper-3);padding-left:22px">
        <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:8px">Principles • How we choose</div>
        ${manifesto.principles.map(p=>`<div style="margin-bottom:8px;display:flex;gap:8px"><span style="color:var(--brass-3)">⁂</span><span>${p}</span></div>`).join('')}
        <div style="margin-top:12px;padding-top:12px;border-top:1px dashed var(--paper-3);font-family:var(--mono);font-size:10px;color:var(--ink-2)">${manifesto.footer}</div>
        <div style="margin-top:12px;display:flex;gap:6px"><button class="cb-btn primary" data-view="thinking" style="font-size:11px">Thinking →</button><button class="cb-btn" data-view="atelier" style="font-size:11px">Atelier</button></div>
      </div>
    </div>

    <!-- Curated Sets — 4 max, quiet -->
    <div style="margin:0 0 32px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;flex-wrap:wrap;gap:12px">
        <div style="display:flex;align-items:baseline;gap:12px">
          <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);font-weight:700">Curated Sets • 4 Editions</div>
          <div style="font-family:var(--serif);font-size:11px;font-style:italic;color:var(--stone-2)">Complete looks, not loose plates</div>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--stone-2)">Click set → loads Atelier</div>
      </div>
      <div class="cb-curations">
        ${curatedSets.map(c=>{
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

    <!-- Design System Thinking — 3 preview -->
    <div style="margin:0 0 36px;padding:22px 22px 18px;background:#fff;border:1px solid var(--paper-3);border-radius:12px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--brass-3), var(--brass), var(--brass-2))"></div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;flex-wrap:wrap;gap:12px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);font-weight:700">Design System Thinking • 10 Chapters • The atelier manual</div>
        <button class="cb-btn" data-view="thinking" style="font-size:10px">Read all →</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
        ${thinkingPreview.map(ch=>`
          <div class="cb-thinking-card" data-thinking="${ch.id}" style="padding:14px 16px;border:1px solid var(--paper-3);border-radius:10px;background:var(--paper-2);cursor:pointer;transition:.18s">
            <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass-3);margin-bottom:6px">${ch.id.replace(/-/g,' • ')}</div>
            <div style="font-family:var(--serif-display);font-size:15px;color:var(--ink);margin-bottom:6px">${ch.title}</div>
            <div style="font-family:var(--serif);font-size:11.5px;color:var(--ink-2);line-height:1.5;font-style:italic;margin-bottom:8px">${ch.subtitle}</div>
            <div style="font-family:var(--serif);font-size:11.8px;line-height:1.55;color:var(--ink-2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">${ch.body.replace(/<[^>]*>/g,'').slice(0,180)}…</div>
            <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">${(ch.principles||[]).slice(0,2).map(p=>`<span class="cb-badge" style="font-size:9px">${p.split('—')[0].trim().slice(0,28)}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:12px;font-family:var(--mono);font-size:10px;color:var(--stone-2);display:flex;justify-content:space-between">
        <span>10 chapters • Tokens as Material, Plates as Rooms, Stack is Story, Provenance, Quiet Luxury, Composing, SaaS, Marketing, Spec, Zero-Deps</span>
        <span style="color:var(--brass-3)">⁂ Atelier manual</span>
      </div>
    </div>

    <!-- Application Guides — 3 preview -->
    <div style="margin:0 0 36px;padding:22px 22px 18px;background:#fff;border:1px solid var(--paper-3);border-radius:12px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--forest), var(--brass), var(--oxblood))"></div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--forest);font-weight:700">Application Guides • 6 Stacks • Real patterns that ship</div>
        <button class="cb-btn" data-view="atelier" style="font-size:10px">Atelier →</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
        ${guidesPreview.map(g=>`
          <div class="cb-guide-card" data-guide="${g.id}" style="padding:14px 16px;border:1px solid var(--paper-3);border-radius:10px;background:var(--paper-2);cursor:pointer">
            <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--forest);margin-bottom:6px">${g.id.replace(/-/g,' • ')}</div>
            <div style="font-family:var(--serif-display);font-size:14px;color:var(--ink);margin-bottom:4px">${g.title}</div>
            <div style="font-family:var(--serif);font-size:11px;font-style:italic;color:var(--stone-2);margin-bottom:8px">${g.subtitle}</div>
            <div style="font-family:var(--serif);font-size:11.5px;line-height:1.5;color:var(--ink-2)">${g.description.slice(0,140)}…</div>
            <div style="margin-top:8px;font-family:var(--mono);font-size:9.5px;color:var(--ink-2)">${g.stack.length} plates • ${g.tokens.accent} • ${g.tokens.radius}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Bookshelf -->
    <div class="cb-hero" style="margin-top:8px">
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
        <div class="row"><span>Chapters</span><span>${thinkingChapters.length}</span></div>
        <div class="row"><span>Guides</span><span>${applicationGuides.length}</span></div>
        <div class="foot">Click any volume to read. Atelier to compose a full suite. Thinking for how to think. Dictionary to search every plate.</div>
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

    <div class="cb-colophon" style="margin-top:22px">
      <div>
        <h5>Colophon</h5>
        <div style="font-family:var(--serif-display);font-size:14px;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em">Bhenre Collection • 12 Volumes • 214 Plates • 10 Chapters • 6 Guides • 2026</div>
        <p style="margin:0 0 10px">Set in Iowan Old Style and Palatino (styled as Canela / Freight Display) with Berkeley Mono for marginalia. Paper is ivory #FFFEFB with warm stone #E8E0D5, brass #C9A86A foil, oxblood #4A1C1C and forest #1B3329 cloth. Shadows are walnut, rules are brass, type is letterpress.</p>
        <p style="margin:0;color:var(--stone-2);font-size:11.5px;font-family:var(--mono)">Printed as code — zero-deps, system fonts only, no external fetches. Each plate is a live specimen, not a mock. Composed in the Atelier, bound in the Library. Thinking is the product.</p>
      </div>
      <div style="border-left:1px dashed var(--paper-3);padding-left:20px">
        <h5>Edition Details</h5>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-family:var(--mono);font-size:11px">
          <span style="color:var(--stone-2)">EDITION</span><span>Second • 2026 • No. 001/500</span>
          <span style="color:var(--stone-2)">BINDING</span><span>Cloth • Brass foil • Deckled shadows</span>
          <span style="color:var(--stone-2)">PAPER</span><span>Ivory #FFFEFB • Stone #E8E0D5</span>
          <span style="color:var(--stone-2)">TYPE</span><span>Iowan Old Style • Palatino • Mono</span>
          <span style="color:var(--stone-2)">THINKING</span><span>10 chapters • 6 guides • atelier manual</span>
        </div>
        <div class="mark" style="margin-top:14px">⁂</div>
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass-3);margin-top:6px">Bhenre Collection • Est. MMXXVI</div>
      </div>
    </div>
  `
}

function renderThinking(){
  const activeId = state.activeThinking || thinkingChapters[0].id
  const active = getThinkingChapter(activeId) || thinkingChapters[0]
  return `
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:20px;flex-wrap:wrap;gap:12px">
      <div class="cb-kicker"><i></i> THINKING • ATELIER MANUAL • ${thinkingChapters.length} CHAPTERS</div>
      <div style="font-family:var(--mono);font-size:10px;color:var(--stone-2)">${thinkingChapters.length} chapters • ${applicationGuides.length} guides • thinking as product</div>
    </div>
    <div class="cb-reader">
      <div class="cb-rail">
        <h3>Thinking — ${thinkingChapters.length} chapters</h3>
        <div style="font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:10px">Atelier manual • quiet luxury</div>
        <div class="cb-plate-list">
          ${thinkingChapters.map(ch=>`
            <div class="cb-plate-item ${ch.id===active.id?'active':''}" data-thinking="${ch.id}">
              <span>${ch.title}</span><small>${ch.id.split('-')[0]}</small>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:16px;padding-top:12px;border-top:1px dashed var(--paper-3)">
          <h3>Application Guides</h3>
          <div class="cb-plate-list">
            ${applicationGuides.map(g=>`
              <div class="cb-plate-item ${state.activeGuide===g.id?'active':''}" data-guide="${g.id}">
                <span>${g.title}</span><small>${g.stack.length} plates</small>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="cb-stage" style="grid-column: span 2">
        <div class="cb-stage-head">
          <div><span class="cb-stage-title">${active.title}</span> <span style="margin-left:8px" class="cb-badge" style="border-color:var(--brass);color:var(--brass-3)">${active.subtitle.slice(0,40)}</span></div>
          <div style="display:flex;gap:6px"><span class="cb-badge">${active.lineage?.split('+')[0] || 'Bhenre Atelier'}</span></div>
        </div>
        <div class="cb-stage-body" style="display:block;padding:32px 36px;background:#fff;min-height:520px">
          <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);margin-bottom:12px">${active.id.replace(/-/g,' • ')} • ${active.subtitle}</div>
          <h2 style="font-family:var(--serif-display);font-size:28px;line-height:1.1;letter-spacing:-.01em;margin:0 0 16px;color:var(--ink)">${active.title}</h2>
          <div style="font-family:var(--serif);font-size:14px;line-height:1.7;color:var(--ink-2);max-width:68ch">
            ${active.body}
          </div>
          ${active.principles ? `
            <div style="margin-top:24px;padding:16px 18px;background:var(--paper-2);border:1px solid var(--paper-3);border-radius:10px">
              <div style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass-3);margin-bottom:8px">Principles</div>
              ${active.principles.map(p=>`<div style="display:flex;gap:8px;margin-bottom:6px;font-family:var(--serif);font-size:12.5px;line-height:1.5"><span style="color:var(--brass-3)">⁂</span><span>${p}</span></div>`).join('')}
            </div>
          ` : ''}
          ${active.examples ? `
            <div style="margin-top:16px">
              <div style="font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--stone-2);margin-bottom:8px">Examples • Real plates that ship</div>
              <div style="display:flex;flex-wrap:wrap;gap:8px">
                ${active.examples.map(ex=>`<span class="cb-badge" style="background:#fff;border-color:var(--paper-3)">${ex}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          ${active.lineage ? `<div style="margin-top:20px;padding-top:12px;border-top:1px dashed var(--paper-3);font-family:var(--mono);font-size:10px;color:var(--stone-2)">Lineage: ${active.lineage}</div>` : ''}
        </div>
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
    </div>` : ''}
    <div class="cb-reader">
      <div class="cb-rail">
        <h3>${book.title} — ${book.plates.length} plates</h3>
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
      </div>
      <div class="cb-stage">
        <div class="cb-stage-head">
          <div><span class="cb-stage-title">${plate.name}</span> <span style="margin-left:8px" class="cb-badge">${plate.style}</span></div>
          <div style="display:flex;gap:6px"><button class="cb-btn" data-copy="html">Copy HTML</button><button class="cb-btn" data-copy="css">Copy CSS</button></div>
        </div>
        <div class="cb-stage-body">
          <div class="cb-stage-live" id="live-root">
            <div class="cb-folio"><span><b>Bhenre Collection</b> • ${book.title} • Vol. ${book.volume}</span><span>Folio ${folioNum} • Plate ${(book.plates.findIndex(p=>p.id===plate.id)+1).toString().padStart(2,'0')} / ${book.plates.length}</span></div>
            ${plate.html}
            <style>${plate.css}</style>
            <div style="margin-top:22px;padding-top:14px;border-top:1px solid var(--paper-3);display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:9.5px;color:var(--stone-2)">
              <span>— ${plate.name} • ${book.title}</span><span>⁂ ${folioNum}</span>
            </div>
          </div>
        </div>
        <div class="cb-code">
          <div class="cb-code-tabs">
            <button class="cb-code-tab ${state.codeTab==='html'?'active':''}" data-code="html">HTML</button>
            <button class="cb-code-tab ${state.codeTab==='css'?'active':''}" data-code="css">CSS</button>
            <button class="cb-code-tab ${state.codeTab==='props'?'active':''}" data-code="props">PROPS</button>
          </div>
          <div id="code-view">${state.codeTab==='html' ? escapeHtml(plate.html) : state.codeTab==='css' ? escapeHtml(plate.css) : escapeHtml((plate.props||[]).join('\n') + '\n\nTokens:\n' + (plate.tokens||[]).map(t=>`${t.name}: ${t.value} // ${t.usage}`).join('\n'))}</div>
        </div>
      </div>
      <div class="cb-inspector">
        <div>
          <h4>Plate • Folio ${folioNum}</h4>
          <div style="font-family:var(--serif-display);font-size:18px;margin-bottom:6px">${plate.name}</div>
          <div style="font-size:13px;color:var(--ink-2);line-height:1.5;font-family:var(--serif)">${plate.description}</div>
          <div class="cb-provenance" style="margin-top:10px">
            <b>Provenance</b><span class="sep"></span><span>${getProvenance(book, plate)}</span>
          </div>
          <div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span style="font-family:var(--mono);font-size:10px;color:var(--stone-2)">Materials</span>
            <div style="display:flex;gap:6px">${getMaterials(book.id).map(m=>`<span class="cb-material-swatch ${m}" title="${m}"></span>`).join('')}</div>
          </div>
        </div>

        <div>
          <h4>Tokens</h4>
          ${(plate.tokens||[]).map(t=>`<div class="cb-token-row"><span>${t.name}</span><span style="color:var(--brass-3)">${t.value}</span></div>`).join('') || '<div style="font-size:12px;color:var(--ink-2)">Uses global • ivory / brass / ink</div>'}
        </div>

        <div>
          <h4>Complete the look</h4>
          <div class="cb-complete-look">
            ${getCompleteLook(book.id).map(({bookId, plate: p})=>`
              <div class="cb-complete-look-item" data-open="${bookId}:${p.id}" title="${p.name}">
                ${p.html.slice(0,120)}
                <small>${booksById[bookId]?.title || bookId}</small>
                <style>${p.css?.slice(0,800) || ''}</style>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="cb-atelier-note">
          ${getAtelierNote(plate)}
        </div>

        <div style="display:flex;gap:8px">
          <button class="cb-btn primary" id="use-in-atelier">Use in Atelier →</button>
          <button class="cb-btn" id="view-dict">Dictionary</button>
        </div>
      </div>
    </div>
  `
}

function renderDictionary(){
  const results = searchDict(state.dictQuery, { style: state.dictStyle || undefined, bookId: state.dictBook || undefined })
  return `
    <div class="cb-dict-head">
      <div class="cb-search"><span style="opacity:.5">⌕</span><input id="dict-search" placeholder="Search 214 plates — try 'glass modal' or 'brutalist button'" value="${escapeAttr(state.dictQuery)}" /><span class="cb-badge">${results.length} results</span></div>
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
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span class="cb-badge">${e.bookTitle}</span><span class="cb-badge">${e.plate.style}</span></div>
            <h4>${e.plate.name}</h4>
            <p>${e.plate.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
    ${results.length>120 ? `<div class="cb-empty">Showing 120 of ${results.length} — refine search</div>` : ''}
  `
}

function renderAtelier(){
  const st = state.atelier
  const pageHtml = assemblePage(st)
  const activeCuration = state.activeCuration ? curations.find(c=>c.id===state.activeCuration) : null
  const activeGuide = state.activeGuide ? getAppGuide(state.activeGuide) : null
  return `
    <div class="cb-kicker" style="margin-bottom:16px"><i></i> ATELIER • COMPOSE • EXPORT ${activeCuration ? `• <span style="color:var(--brass-3)">SET: ${activeCuration.title.toUpperCase()}</span>` : ''} ${activeGuide ? `• <span style="color:var(--forest)">GUIDE: ${activeGuide.title.toUpperCase()}</span>` : ''}</div>
    ${activeCuration ? `<div style="margin:0 0 14px;padding:10px 14px;border:1px solid var(--brass);border-radius:10px;background:var(--paper-2);font-family:var(--mono);font-size:10px;display:flex;justify-content:space-between;align-items:center"><span><b>${activeCuration.title}</b> • ${activeCuration.plates.length} plates • ${activeCuration.description.slice(0,90)}…</span><button class="cb-btn" id="clear-curation">Clear set</button></div>` : ''}
    ${activeGuide ? `<div style="margin:0 0 14px;padding:10px 14px;border:1px solid var(--forest);border-radius:10px;background:var(--paper-2);font-family:var(--mono);font-size:10px;display:flex;justify-content:space-between;align-items:center"><span><b>Guide: ${activeGuide.title}</b> • ${activeGuide.stack.length} plates • ${activeGuide.outcome.slice(0,100)}…</span><div style="display:flex;gap:6px"><button class="cb-btn" id="clear-guide">Clear</button><button class="cb-btn primary" id="load-guide-full">Load full →</button></div></div>` : ''}
    <div class="cb-atelier">
      <div class="cb-atelier-panel">
        <div style="font-family:var(--serif);font-size:18px;display:flex;justify-content:space-between;align-items:baseline"><span>Tokens</span><span style="font-family:var(--mono);font-size:9px;color:var(--stone-2)">${st.stack.length} sections</span></div>
        ${renderTokenField('Radius','radius','select',['8px','12px','16px','24px','999px'], st.tokens.radius)}
        ${renderTokenField('Shadow','shadow','select',['soft','brutal','layered'], st.tokens.shadow)}
        <div class="cb-field"><label>Accent</label><input type="color" id="token-accent" value="${st.tokens.accent}" /></div>
        <div class="cb-field"><label>Paper</label><input type="color" id="token-paper" value="${st.tokens.paper}" /></div>
        <div class="cb-field"><label>Density</label><select id="token-density"><option value="compact" ${st.tokens.density==='compact'?'selected':''}>Compact</option><option value="cozy" ${st.tokens.density==='cozy'?'selected':''}>Cozy</option><option value="airy" ${st.tokens.density==='airy'?'selected':''}>Airy</option></select></div>
        <div style="display:flex;gap:8px"><button class="cb-btn primary" id="atelier-shuffle">Shuffle</button><button class="cb-btn" id="atelier-reset">Reset</button></div>

        <div style="margin-top:14px">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:.10em;text-transform:uppercase;color:var(--brass-3);margin-bottom:8px;font-weight:700">Curated Sets</div>
          <div style="display:grid;gap:6px">
            ${curations.slice(0,4).map(c=>`<button class="cb-btn" data-load-curation="${c.id}" style="justify-content:space-between;display:flex;width:100%;text-align:left;font-size:11px"><span>${c.title.split('—')[0].trim()}</span><span style="color:${c.accent}">• ${c.plates.length}</span></button>`).join('')}
          </div>
        </div>

        <div style="margin-top:14px">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:.10em;text-transform:uppercase;color:var(--forest);margin-bottom:8px;font-weight:700">Guides — Real stacks that ship</div>
          <div style="display:grid;gap:6px">
            ${applicationGuides.slice(0,4).map(g=>`<button class="cb-btn" data-load-guide="${g.id}" style="justify-content:space-between;display:flex;width:100%;text-align:left;font-size:11px"><span>${g.title.split('—')[0].trim().slice(0,18)}</span><span style="color:var(--forest)">${g.stack.length} plates</span></button>`).join('')}
          </div>
        </div>

        <div style="margin-top:12px">
          <div style="font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Stack</div>
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

  document.querySelectorAll('[data-curation]').forEach(el=>{
    el.addEventListener('click',()=>{
      const cid = (el as HTMLElement).dataset.curation!
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

  // thinking
  document.querySelectorAll('[data-thinking]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.activeThinking = (el as HTMLElement).dataset.thinking!
      if (state.view!=='thinking') setView('thinking'); else render()
    })
  })
  document.querySelectorAll('[data-guide]').forEach(el=>{
    el.addEventListener('click',()=>{
      const id = (el as HTMLElement).dataset.guide!
      state.activeGuide = id
      const guide = getAppGuide(id)
      if (!guide) return
      // load guide into atelier for preview
      for (const ref of guide.stack) state.atelier.picks[ref.bookId]=ref.plateId
      const seen = new Set<string>()
      const ordered: string[] = []
      for (const r of guide.stack){ if(!seen.has(r.bookId)){ seen.add(r.bookId); ordered.push(r.bookId) } }
      for (const b of state.atelier.stack){ if(!seen.has(b)) ordered.push(b) }
      state.atelier.stack = ordered
      state.atelier.tokens = { ...guide.tokens }
      if (state.view!=='atelier') setView('atelier'); else render()
    })
  })
  document.querySelectorAll('[data-load-guide]').forEach(el=>{
    el.addEventListener('click',()=>{
      const id = (el as HTMLElement).dataset.loadGuide!
      const guide = getAppGuide(id)
      if (!guide) return
      state.activeGuide = id
      for (const ref of guide.stack) state.atelier.picks[ref.bookId]=ref.plateId
      const seen = new Set<string>()
      const ordered: string[] = []
      for (const r of guide.stack){ if(!seen.has(r.bookId)){ seen.add(r.bookId); ordered.push(r.bookId) } }
      for (const b of state.atelier.stack){ if(!seen.has(b)) ordered.push(b) }
      state.atelier.stack = ordered
      state.atelier.tokens = { ...guide.tokens }
      render()
    })
  })
  document.getElementById('clear-guide')?.addEventListener('click',()=>{ state.activeGuide=null; render() })
  document.getElementById('load-guide-full')?.addEventListener('click',()=>{
    if (!state.activeGuide) return
    const guide = getAppGuide(state.activeGuide)
    if (!guide) return
    for (const ref of guide.stack) state.atelier.picks[ref.bookId]=ref.plateId
    state.atelier.tokens = { ...guide.tokens }
    render()
  })

  document.getElementById('token-radius')?.addEventListener('change',(e)=>{ state.atelier.tokens.radius=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-shadow')?.addEventListener('change',(e)=>{ state.atelier.tokens.shadow=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-accent')?.addEventListener('input',(e)=>{ state.atelier.tokens.accent=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-paper')?.addEventListener('input',(e)=>{ state.atelier.tokens.paper=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-density')?.addEventListener('change',(e)=>{ state.atelier.tokens.density=(e.target as HTMLSelectElement).value as any; render() })
  document.getElementById('atelier-shuffle')?.addEventListener('click',()=>{ state.atelier=shufflePicks(state.atelier); render() })
  document.getElementById('atelier-reset')?.addEventListener('click',()=>{ state.atelier=createInitialAtelier(); state.activeCuration=null; state.activeGuide=null; render() })
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
  localStorage.setItem('cb-last-build', JSON.stringify({ at: new Date().toISOString(), books: books.length, plates: dictionary.length, curations: curations.length, thinking: thinkingChapters.length }))
}catch{}
