import { books, booksById } from './books.ts'
import type { Plate, Book, DesignTokens } from './types.ts'
import type { View as OldView } from './types.ts'
import { searchDict, allStyles, dictionary } from './dictionary.ts'
import { createInitialAtelier, tokensToCss, tokensToTailwind, tokensToJson, shufflePicks, assemblePage } from './atelier.ts'
import { curations } from './curations.ts'
import { storeManifesto, getBookEditorial } from './editorial.ts'
import { thinkingChapters, getThinkingChapter } from './designSystemThinking.ts'
import { applicationGuides, getAppGuide } from './applicationGuides.ts'
import { decisionSteps, getDecisionStep, getNextStep, getPrevStep } from './decisionGuide.ts'
import { vizPractices, getPractice } from './dataVizBestPractices.ts'

const app = document.getElementById('app')!

export type View = 'guide' | 'catalogue' | 'studio'
// legacy compat
type LegacyView = OldView | View
const LEGACY_MAP: Record<string, View> = {
  'library': 'catalogue',
  'reader': 'catalogue',
  'dictionary': 'catalogue',
  'atelier': 'studio',
  'thinking': 'guide',
  'guide': 'guide',
  'catalogue': 'catalogue',
  'studio': 'studio',
}

type AppState = {
  view: View
  // catalogue state
  catalogueBook: string
  cataloguePlate: string | null
  dictQuery: string
  dictStyle: string
  dictBook: string
  atelier: ReturnType<typeof createInitialAtelier>
  codeTab: 'html' | 'css' | 'props'
  activeCuration: string | null
  activeThinking: string | null
  activeGuide: string | null
  activeDecisionStep: string
  decisionAnswers: Record<string,string>
  thinkingMode: 'guide' | 'chapter' | 'viz'
  activeViz: string | null
}

function loadDecision(): { step: string, answers: Record<string,string> } {
  try{
    const raw = localStorage.getItem('cb-decision')
    if(raw){ const j=JSON.parse(raw); return { step: j.step || decisionSteps[0].id, answers: j.answers||{} } }
  }catch{}
  return { step: decisionSteps[0].id, answers: {} }
}

let _d = loadDecision()

function parseView(): View {
  const raw = location.hash.replace('#/','').replace('#','').split('?')[0].trim()
  if (!raw) return 'guide'
  if (LEGACY_MAP[raw]) return LEGACY_MAP[raw]
  return 'guide'
}

let state: AppState = {
  view: parseView(),
  catalogueBook: 'foundations',
  cataloguePlate: booksById['foundations']?.plates[0]?.id || null,
  dictQuery: '',
  dictStyle: '',
  dictBook: '',
  atelier: createInitialAtelier(),
  codeTab: 'html',
  activeCuration: null,
  activeThinking: null,
  activeGuide: null,
  activeDecisionStep: _d.step,
  decisionAnswers: _d.answers,
  thinkingMode: 'guide',
  activeViz: null
}

function saveDecision(){
  try{ localStorage.setItem('cb-decision', JSON.stringify({ step: state.activeDecisionStep, answers: state.decisionAnswers })) }catch{}
}

function syncHash(){
  const raw = location.hash.replace('#/','').replace('#','').split('?')[0]
  const mapped = LEGACY_MAP[raw]
  if (mapped) state.view = mapped
  else if (!raw) state.view = 'guide'
}
window.addEventListener('hashchange', ()=>{ syncHash(); render() })

function setView(v: View){
  state.view = v
  location.hash = `#/${v}`
  render()
}

// --- cloth & lineage helpers ---
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
          <button class="cb-tab ${state.view==='guide'?'active':''}" data-view="guide">Guide</button>
          <button class="cb-tab ${state.view==='catalogue'?'active':''}" data-view="catalogue">Catalogue</button>
          <button class="cb-tab ${state.view==='studio'?'active':''}" data-view="studio">Studio</button>
        </div>
      </div>
      <div class="cb-nav-right">
        <span class="cb-count">${state.view==='guide'?'Start → Browse → Build': state.view==='catalogue'?'214 plates • 12 vols':'Compose • Export'}</span>
        <button class="cb-btn" id="shuffle-global" title="Compose new">↻ Compose</button>
      </div>
    </nav>
    <main class="cb-main">
      ${state.view==='guide' ? renderGuide() : ''}
      ${state.view==='catalogue' ? renderCatalogue() : ''}
      ${state.view==='studio' ? renderStudio() : ''}
    </main>
    <footer style="padding:32px 24px;text-align:center;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;color:var(--stone-2);border-top:1px solid var(--paper-3);max-width:1320px;margin:0 auto;width:100%;display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center">
      <span style="display:flex;align-items:center;gap:10px"><span style="width:20px;height:1px;background:var(--brass);display:inline-block"></span> Bhenre Collection • Est. 2026 • Guide → Catalogue → Studio</span>
      <span style="font-family:var(--serif);font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-2)">Set in Iowan Old Style / Palatino • Brass & oxblood & forest • 12 vols • Thinking as product</span>
    </footer>
  `
  attachEvents()
}

// ---------- GUIDE (main walkthrough + thinking + viz) ----------
function renderGuide(){
  const activeId = state.activeThinking || thinkingChapters[0].id
  const active = getThinkingChapter(activeId) || thinkingChapters[0]
  const step = getDecisionStep(state.activeDecisionStep) || decisionSteps[0]
  const stepIdx = decisionSteps.findIndex(s=>s.id===state.activeDecisionStep)
  const totalSteps = decisionSteps.length
  const nextStep = getNextStep(state.activeDecisionStep)
  const prevStep = getPrevStep(state.activeDecisionStep)
  const answeredCount = Object.keys(state.decisionAnswers).length
  const isGuide = state.thinkingMode === 'guide'
  const isChapter = state.thinkingMode === 'chapter'
  const isViz = state.thinkingMode === 'viz'
  const activeViz = state.activeViz ? getPractice(state.activeViz) : null

  if(isChapter){
    const chIdx = thinkingChapters.findIndex(c=>c.id===active.id)
    const nextCh = chIdx >=0 && chIdx < thinkingChapters.length-1 ? thinkingChapters[chIdx+1] : null
    const prevCh = chIdx >0 ? thinkingChapters[chIdx-1] : null
    return `
    <div class="cb-decision-top">
      <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px">
        <div class="cb-kicker"><i></i> GUIDE • MANUAL • ${active.id.replace(/-/g,' • ').toUpperCase()}</div>
        <div style="display:flex;gap:8px"><button class="cb-btn" id="back-to-guide">← Guide</button><button class="cb-btn" data-view="studio">Studio →</button></div>
      </div>
    </div>
    <div class="cb-reader cb-thinking-reader">
      <div class="cb-rail cb-decision-rail">
        <h3>Decision Steps</h3>
        <div class="cb-step-list">
          ${decisionSteps.map((s,i)=>{
            const done = !!state.decisionAnswers[s.id]
            return `<div class="cb-step ${done?'done':''}" data-decision-step="${s.id}">
              <span class="cb-step-dot">${done?'✓':i+1}</span><span class="cb-step-label">${s.title}</span>
            </div>`
          }).join('')}
        </div>
        <div style="margin-top:16px;padding-top:12px;border-top:1px dashed var(--paper-3)">
          <h3>Manual — ${thinkingChapters.length} ch</h3>
          <div class="cb-plate-list">
            ${thinkingChapters.map(ch=>`
              <div class="cb-plate-item ${ch.id===active.id?'active':''}" data-thinking="${ch.id}">
                <span>${ch.title}</span><small>${ch.id.split('-')[0].slice(0,4)}</small>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="cb-stage cb-thinking-stage" style="grid-column: span 2">
        <div class="cb-stage-head">
          <div><span class="cb-stage-title">${active.title}</span> <span class="cb-badge" style="margin-left:8px;border-color:var(--brass);color:var(--brass-3)">${active.subtitle.slice(0,42)}</span></div>
          <div style="display:flex;gap:6px"><span class="cb-badge">${active.lineage?.split('+')[0] || 'Bhenre Atelier'}</span><span class="cb-badge">${chIdx+1} / ${thinkingChapters.length}</span></div>
        </div>
        <div class="cb-stage-body cb-prose-body">
          <div style="max-width:68ch;margin:0 auto;width:100%">
            <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-3);margin-bottom:12px">${active.id.replace(/-/g,' • ')} • ${active.subtitle}</div>
            <h1 style="font-family:var(--serif-display);font-size:32px;line-height:1.05;letter-spacing:-.015em;margin:0 0 10px;color:var(--ink)">${active.title}</h1>
            <div class="cb-prose">${active.body}</div>
            ${active.principles ? `<div class="cb-principles"><div class="cb-principles-head">Principles</div>${active.principles.map(p=>`<div class="cb-principle"><span class="cb-principle-mark">⁂</span><span>${p}</span></div>`).join('')}</div>` : ''}
            ${active.lineage ? `<div class="cb-lineage">Lineage: ${active.lineage}</div>` : ''}
            <div style="margin-top:28px;padding-top:16px;border-top:1px solid var(--paper-3);display:flex;justify-content:space-between;gap:12px"><div style="display:flex;gap:8px">${prevCh?`<button class="cb-btn" data-thinking="${prevCh.id}">← ${prevCh.title.split(' ')[0]}</button>`:''}${nextCh?`<button class="cb-btn primary" data-thinking="${nextCh.id}">${nextCh.title.split(' ').slice(0,3).join(' ')} →</button>`:''}</div><button class="cb-btn" id="back-to-guide">Guide →</button></div>
          </div>
        </div>
      </div>
    </div>`
  }

  if(isViz && activeViz){
    return `
    <div class="cb-decision-top">
      <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px">
        <div class="cb-kicker"><i></i> GUIDE • DATA VIZ • ${activeViz.title.toUpperCase()}</div>
        <div style="display:flex;gap:8px"><button class="cb-btn" id="back-to-guide">← Guide</button><span class="cb-badge" style="border-color:var(--forest);color:var(--forest)">${activeViz.lineage.split('•')[0].trim()}</span></div>
      </div>
    </div>
    <div class="cb-reader">
      <div class="cb-rail cb-decision-rail">
        <h3>Decision Steps</h3>
        <div class="cb-step-list">${decisionSteps.map((s,i)=>{const done=!!state.decisionAnswers[s.id];return `<div class="cb-step ${done?'done':''}" data-decision-step="${s.id}"><span class="cb-step-dot">${done?'✓':i+1}</span><span class="cb-step-label">${s.title}</span></div>`}).join('')}</div>
        <div style="margin-top:14px"><h3>Data Viz • 8</h3><div class="cb-plate-list">${vizPractices.map(v=>`<div class="cb-plate-item ${v.id===activeViz.id?'active':''}" data-viz="${v.id}"><span>${v.title.split('—')[0].trim()}</span><small>viz</small></div>`).join('')}</div></div>
      </div>
      <div class="cb-stage" style="grid-column: span 2">
        <div class="cb-stage-head"><div><span class="cb-stage-title">${activeViz.title}</span><span class="cb-badge" style="margin-left:8px">${activeViz.subtitle}</span></div><span class="cb-badge" style="background:var(--forest);color:#fff;border-color:var(--forest)">Best Practice</span></div>
        <div class="cb-stage-body cb-prose-body"><div style="max-width:72ch;margin:0 auto;width:100%">
          <div style="font-family:var(--serif-display);font-size:20px;line-height:1.25;color:var(--ink);margin-bottom:12px">${activeViz.rule}</div>
          <div style="font-family:var(--serif);font-size:13.5px;line-height:1.6;color:var(--ink-2);margin-bottom:18px">${activeViz.why}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:0 0 18px"><div class="cb-do-dont do"><div class="cb-do-dont-head">Do</div>${activeViz.doList.map(d=>`<div class="cb-do-item">✓ ${d}</div>`).join('')}</div><div class="cb-do-dont dont"><div class="cb-do-dont-head">Don't</div>${activeViz.dontList.map(d=>`<div class="cb-dont-item">✕ ${d}</div>`).join('')}</div></div>
          ${activeViz.exampleHtml?`<div class="cb-viz-example"><div style="padding:14px;background:#FFFEFB;border:1px solid var(--paper-3);border-radius:10px;margin-top:8px">${activeViz.exampleHtml}<style>${activeViz.exampleCss||''}</style></div></div>`:''}
          <div class="cb-lineage">Lineage: ${activeViz.lineage}</div>
        </div></div>
      </div>
    </div>`
  }

  const selectedOptId = state.decisionAnswers[step.id]
  const selectedOpt = step.options.find(o=>o.id===selectedOptId)
  const isDataStep = step.id==='data-proof'
  return `
    <div class="cb-decision-top">
      <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px">
        <div class="cb-kicker"><i></i> GUIDE • ${totalSteps} STEPS • ${answeredCount}/${totalSteps} CHOSEN — Start here → Browse → Build</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--stone-2);display:flex;gap:10px;align-items:center"><span>Step ${stepIdx+1} / ${totalSteps}</span><button class="cb-btn" id="reset-decision" style="font-size:10px">Reset</button><button class="cb-btn primary" data-view="catalogue" style="font-size:10px">Catalogue →</button></div>
      </div>
    </div>

    <div class="cb-decision">
      <div class="cb-decision-rail">
        <div class="cb-decision-progress">
          <div class="cb-progress-bar"><div class="cb-progress-fill" style="width:${((stepIdx+1)/totalSteps*100)}%"></div></div>
          <div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--stone-2);margin-top:6px;display:flex;justify-content:space-between"><span>${step.title}</span><span>${Math.round((stepIdx+1)/totalSteps*100)}%</span></div>
        </div>
        <div class="cb-step-list" style="margin-top:14px">
          ${decisionSteps.map((s,i)=>{
            const done = !!state.decisionAnswers[s.id]
            const cur = s.id===step.id
            return `<div class="cb-step ${cur?'active':''} ${done?'done':''}" data-decision-step="${s.id}">
              <span class="cb-step-dot">${done?'✓':i+1}</span>
              <div class="cb-step-main"><span class="cb-step-label">${s.title}</span><span class="cb-step-q">${s.question}</span></div>
            </div>`
          }).join('')}
        </div>
        <div style="margin-top:18px;padding-top:12px;border-top:1px dashed var(--paper-3)">
          <h3>Manual • 10 ch</h3>
          <div class="cb-plate-list">
            ${thinkingChapters.slice(0,6).map(ch=>`<div class="cb-plate-item" data-thinking="${ch.id}"><span>${ch.title}</span><small>ch</small></div>`).join('')}
          </div>
          <button class="cb-btn" id="show-all-thinking" style="margin-top:8px;width:100%;font-size:10px">All ${thinkingChapters.length} →</button>
        </div>
        <div style="margin-top:14px">
          <h3>Data Viz • 8</h3>
          <div class="cb-plate-list">
            ${vizPractices.slice(0,5).map(v=>`<div class="cb-plate-item" data-viz="${v.id}"><span>${v.title.split('—')[0].trim()}</span><small>viz</small></div>`).join('')}
          </div>
        </div>
      </div>

      <div class="cb-decision-center">
        <div class="cb-decision-step-card">
          <div class="cb-decision-step-head">
            <div><span class="cb-decision-step-num">Step ${stepIdx+1} • ${step.id.replace(/-/g,' • ').toUpperCase()}</span><h2>${step.question}</h2><div style="font-family:var(--serif);font-size:13px;line-height:1.55;color:var(--ink-2);margin-top:8px;max-width:62ch">${step.description}</div></div>
            ${step.thinkingRef?`<button class="cb-btn" data-thinking="${step.thinkingRef}" style="align-self:flex-start;font-size:10px">Read →</button>`:''}
          </div>
          <div class="cb-options">
            ${step.options.map(opt=>{
              const activeOpt = opt.id===selectedOptId
              const plate = opt.mapsTo[0] ? booksById[opt.mapsTo[0].bookId]?.plates.find(p=>p.id===opt.mapsTo[0].plateId) : null
              return `<div class="cb-option-card ${activeOpt?'active':''}" data-decision-option="${step.id}:${opt.id}">
                <div class="cb-option-top"><span class="cb-badge" style="${activeOpt?'background:var(--ink);color:#fff;border-color:var(--ink)':''}">${opt.label}</span>${activeOpt?'<span class="cb-badge" style="background:var(--brass);color:#fff;border-color:var(--brass)">Selected</span>':''}</div>
                <div class="cb-option-desc">${opt.description}</div>
                ${opt.provenance?`<div class="cb-option-provenance">⁂ ${opt.provenance}</div>`:''}
                ${plate?`<div class="cb-option-preview">${plate.html.slice(0,120)}<style>${plate.css.slice(0,500)}</style></div>`:''}
              </div>`
            }).join('')}
          </div>
          ${isDataStep?`<div class="cb-viz-callout"><div class="cb-kicker" style="color:var(--forest)"><i></i> Pairs with Data Viz • 8 Practices</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;margin-top:10px">${vizPractices.map(v=>`<div class="cb-viz-mini" data-viz="${v.id}"><div style="font-family:var(--serif-display);font-size:13px;color:var(--ink)">${v.title}</div><div style="font-family:var(--serif);font-size:11px;color:var(--ink-2)">${v.rule.slice(0,90)}…</div></div>`).join('')}</div></div>`:''}
          <div class="cb-decision-nav">
            <div style="display:flex;gap:8px">${prevStep?`<button class="cb-btn" data-decision-nav="prev">← ${prevStep.title}</button>`:''}${nextStep?`<button class="cb-btn primary" data-decision-nav="next">${selectedOptId?'Next: '+nextStep.title:'Skip → '+nextStep.title}</button>`:`<button class="cb-btn primary" id="finish-decision">Studio →</button>`}</div>
            <div style="font-family:var(--mono);font-size:10px;color:var(--stone-2)">${answeredCount} chosen</div>
          </div>
        </div>
      </div>

      <div class="cb-decision-inspector">
        <div class="cb-inspector-card">
          <h4>Live Composition</h4>
          <div class="cb-live-stack">
            ${decisionSteps.map(s=>{
              const ans = state.decisionAnswers[s.id]
              const opt = s.options.find(o=>o.id===ans)
              if(!ans || !opt) return `<div class="cb-live-row muted"><span>${s.title}</span><span style="color:var(--stone-2)">—</span></div>`
              return `<div class="cb-live-row"><span>${s.title}</span><span style="font-weight:600">${opt.label}</span></div>`
            }).join('')}
          </div>
          <div style="margin-top:12px;display:flex;gap:6px"><button class="cb-btn primary" id="apply-to-atelier" style="flex:1">Use in Studio</button><button class="cb-btn" id="reset-decision-2">Reset</button></div>
        </div>
        <div class="cb-inspector-card" style="margin-top:12px">
          <h4>Tokens</h4>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${['paper','ink','accent'].map(k=>{
              const val = (()=>{
                for(let i=stepIdx;i>=0;i--){ const s=decisionSteps[i]; const a=state.decisionAnswers[s.id]; const o=s.options.find(x=>x.id===a); if(o?.tokens && (o.tokens as any)[k]) return (o.tokens as any)[k] }
                return k==='paper'?'#FFFEFB':k==='ink'?'#141210':'#C9A86A'
              })()
              return `<div style="text-align:center"><div style="width:24px;height:24px;border-radius:50%;background:${val};border:1px solid var(--paper-3);margin:0 auto"></div><div style="font-family:var(--mono);font-size:9px;color:var(--stone-2)">${k}</div></div>`
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `
}

// ---------- CATALOGUE (merged Library + Reader + Dictionary) ----------
function renderCatalogue(){
  const results = searchDict(state.dictQuery, { style: state.dictStyle || undefined, bookId: state.dictBook || undefined })
  const activeBook = booksById[state.catalogueBook] || books[0]
  const activePlate = state.cataloguePlate ? activeBook.plates.find(p=>p.id===state.cataloguePlate) || activeBook.plates[0] : activeBook.plates[0]
  const total = dictionary.length
  const manifesto = storeManifesto

  return `
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;padding:10px 0 16px;border-bottom:1px solid var(--paper-3);margin-bottom:18px">
      <div class="cb-kicker"><i></i> CATALOGUE • ${total} PLATES • 12 VOLS • Clothbound • Browse all → pick → build</div>
      <div style="font-family:var(--mono);font-size:10px;color:var(--stone-2)">Click plate → reader opens below • Double-click → Studio</div>
    </div>

    <!-- Books grid - clothbound aesthetic simpler -->
    <div class="cb-shelf" style="margin-bottom:18px">
      ${books.map(b=>{
        const cloth = clothOf(b);
        const dark = isDarkCloth(cloth);
        const active = b.id===state.catalogueBook
        const isStaff = staffPicks.has(b.id)
        return `<div class="cb-book ${active?'active':''}" data-catalogue-book="${b.id}" style="--accent:${cloth}; --cloth:${cloth}; cursor:pointer; ${active?'outline:2px solid var(--brass);outline-offset:2px':''}">
          <div class="cb-book-top" style="background: linear-gradient(90deg, ${cloth}, var(--brass), var(--brass-2))"></div>
          ${isStaff?`<div class="cb-staff-pick" style="position:absolute;top:8px;right:8px;font-size:9px">Staff</div>`:''}
          <div class="cb-book-cover" style="padding:12px 14px">
            <div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:${dark?'rgba(255,254,251,.6)':'var(--stone-2)'}">VOL. ${String(b.volume).padStart(2,'0')} • ${b.plates.length}</div>
            <h3 class="cb-book-title ${dark?'':'foil'}" style="font-size:16px;margin:4px 0 6px;${dark?'color:#FFFEFB':''}">${b.title}</h3>
            <div style="font-family:var(--serif);font-size:11px;color:${dark?'rgba(255,254,251,.7)':'var(--ink-2)'};line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${b.description.slice(0,88)}…</div>
          </div>
        </div>`
      }).join('')}
    </div>

    <!-- Search + Filters -->
    <div class="cb-dict-head" style="margin-bottom:14px">
      <div class="cb-search"><span style="opacity:.5">⌕</span><input id="dict-search" placeholder="Search ${total} plates — 'glass modal', 'brutalist button'" value="${escapeAttr(state.dictQuery)}" /><span class="cb-badge">${results.length}</span></div>
      <div class="cb-filters">
        <select class="cb-filter" id="dict-book"><option value="">All books</option>${books.map(b=>`<option value="${b.id}" ${state.dictBook===b.id?'selected':''}>${b.title}</option>`).join('')}</select>
        <select class="cb-filter" id="dict-style"><option value="">All styles</option>${allStyles().map(s=>`<option value="${s}" ${state.dictStyle===s?'selected':''}>${s}</option>`).join('')}</select>
        <button class="cb-btn" id="dict-clear">Clear</button>
      </div>
    </div>

    <!-- Inline Reader if plate selected -->
    ${activePlate ? `
    <div class="cb-reader" style="margin-bottom:18px;border:1px solid var(--paper-3);border-radius:12px;overflow:hidden;background:#fff">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--paper-2);border-bottom:1px solid var(--paper-3);flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px"><span class="cb-badge" style="background:var(--ink);color:#fff">${activeBook.title}</span><span style="font-family:var(--serif-display);font-size:15px">${activePlate.name}</span><span class="cb-badge">${activePlate.style}</span></div>
        <div style="display:flex;gap:6px"><button class="cb-btn" data-copy="html">Copy HTML</button><button class="cb-btn" data-copy="css">Copy CSS</button><button class="cb-btn primary" id="use-in-atelier">Studio →</button><button class="cb-btn" id="close-reader">✕</button></div>
      </div>
      <div style="display:grid;grid-template-columns:220px 1fr 280px;gap:0;min-height:360px">
        <div style="border-right:1px solid var(--paper-3);padding:10px;overflow:auto;max-height:460px">
          <div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--stone-2);margin-bottom:8px">${activeBook.title} • ${activeBook.plates.length}</div>
          ${activeBook.plates.map(p=>`<div class="cb-plate-item ${p.id===activePlate.id?'active':''}" data-plate="${p.id}" style="font-size:12px;padding:6px 8px"><span>${p.name}</span><small>${p.style}</small></div>`).join('')}
        </div>
        <div style="padding:16px;background:#FFFEFB;overflow:auto">
          <div class="cb-folio" style="margin-bottom:12px"><span><b>Bhenre</b> • ${activeBook.title}</span><span>Folio ${(activeBook.volume*100+activeBook.plates.findIndex(pp=>pp.id===activePlate.id)+1).toString().padStart(3,'0')}</span></div>
          <div>${activePlate.html}<style>${activePlate.css}</style></div>
          <div class="cb-code" style="margin-top:14px"><div class="cb-code-tabs"><button class="cb-code-tab ${state.codeTab==='html'?'active':''}" data-code="html">HTML</button><button class="cb-code-tab ${state.codeTab==='css'?'active':''}" data-code="css">CSS</button><button class="cb-code-tab ${state.codeTab==='props'?'active':''}" data-code="props">PROPS</button></div><div id="code-view" style="font-size:11px;max-height:160px;overflow:auto">${state.codeTab==='html'?escapeHtml(activePlate.html):state.codeTab==='css'?escapeHtml(activePlate.css):escapeHtml((activePlate.props||[]).join('\n'))}</div></div>
        </div>
        <div style="border-left:1px solid var(--paper-3);padding:12px;background:var(--paper-2);display:flex;flex-direction:column;gap:12px">
          <div><div style="font-family:var(--serif-display);font-size:14px">${activePlate.name}</div><div style="font-family:var(--serif);font-size:12px;color:var(--ink-2);margin-top:4px;line-height:1.5">${activePlate.description}</div></div>
          <div><div style="font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--stone-2)">Provenance</div><div style="font-family:var(--mono);font-size:11px">${getProvenance(activeBook, activePlate)}</div></div>
          <div><div style="font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--stone-2)">Materials</div><div style="display:flex;gap:6px;margin-top:4px">${getMaterials(activeBook.id).map(m=>`<span class="cb-material-swatch ${m}"></span>`).join('')}</div></div>
          <div class="cb-atelier-note" style="font-size:11px">${getAtelierNote(activePlate)}</div>
        </div>
      </div>
    </div>` : ''}

    <!-- Plate grid -->
    <div class="cb-grid">
      ${results.slice(0,120).map(e=>`
        <div class="cb-plate-card" data-open="${e.bookId}:${e.plate.id}" style="${state.cataloguePlate===e.plate.id && e.bookId===state.catalogueBook?'outline:2px solid var(--brass)':''}">
          <div class="cb-plate-card-preview">${e.plate.html.slice(0,220)}<style>${e.plate.css}</style></div>
          <div class="cb-plate-card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span class="cb-badge">${e.bookTitle}</span><span class="cb-badge">${e.plate.style}</span></div>
            <h4>${e.plate.name}</h4>
            <p>${e.plate.description.slice(0,90)}…</p>
          </div>
        </div>
      `).join('')}
    </div>
    ${results.length>120 ? `<div class="cb-empty">Showing 120 of ${results.length} — refine search</div>` : ''}
  `
}

// ---------- STUDIO (formerly Atelier) ----------
function renderStudio(){
  const st = state.atelier
  const pageHtml = assemblePage(st)
  const activeCuration = state.activeCuration ? curations.find(c=>c.id===state.activeCuration) : null
  const activeGuide = state.activeGuide ? getAppGuide(state.activeGuide) : null
  return `
    <div class="cb-kicker" style="margin-bottom:16px"><i></i> STUDIO • COMPOSE • EXPORT ${activeCuration ? `• <span style="color:var(--brass-3)">SET: ${activeCuration.title.toUpperCase()}</span>` : ''} ${activeGuide ? `• <span style="color:var(--forest)">GUIDE: ${activeGuide.title.toUpperCase()}</span>` : ''}</div>
    ${activeCuration ? `<div style="margin:0 0 14px;padding:10px 14px;border:1px solid var(--brass);border-radius:10px;background:var(--paper-2);font-family:var(--mono);font-size:10px;display:flex;justify-content:space-between;align-items:center"><span><b>${activeCuration.title}</b> • ${activeCuration.plates.length} plates</span><button class="cb-btn" id="clear-curation">Clear set</button></div>` : ''}
    ${activeGuide ? `<div style="margin:0 0 14px;padding:10px 14px;border:1px solid var(--forest);border-radius:10px;background:var(--paper-2);font-family:var(--mono);font-size:10px;display:flex;justify-content:space-between;align-items:center"><span><b>Guide: ${activeGuide.title}</b> • ${activeGuide.stack.length} plates</span><div style="display:flex;gap:6px"><button class="cb-btn" id="clear-guide">Clear</button><button class="cb-btn primary" id="load-guide-full">Load full →</button></div></div>` : ''}
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
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:.10em;text-transform:uppercase;color:var(--forest);margin-bottom:8px;font-weight:700">Guides</div>
          <div style="display:grid;gap:6px">
            ${applicationGuides.slice(0,4).map(g=>`<button class="cb-btn" data-load-guide="${g.id}" style="justify-content:space-between;display:flex;width:100%;text-align:left;font-size:11px"><span>${g.title.split('—')[0].trim().slice(0,18)}</span><span style="color:var(--forest)">${g.stack.length}</span></button>`).join('')}
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
    if (state.view!=='studio') setView('studio'); else render()
  })

  // Catalogue events
  document.querySelectorAll('[data-catalogue-book]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.catalogueBook = (el as HTMLElement).dataset.catalogueBook!
      state.cataloguePlate = booksById[state.catalogueBook]?.plates[0]?.id || null
      render()
    })
  })
  document.querySelectorAll('[data-plate]').forEach(el=>{
    el.addEventListener('click',()=>{ state.cataloguePlate=(el as HTMLElement).dataset.plate!; render() })
  })
  document.getElementById('close-reader')?.addEventListener('click',()=>{ state.cataloguePlate=null; render() })
  document.querySelectorAll('[data-code]').forEach(el=>{
    el.addEventListener('click',()=>{ state.codeTab = (el as HTMLElement).dataset.code as any; render() })
  })
  document.querySelectorAll('[data-copy]').forEach(el=>{
    el.addEventListener('click',async()=>{
      const plate = booksById[state.catalogueBook]?.plates.find(p=>p.id===state.cataloguePlate)
      if(!plate) return
      const kind = (el as HTMLElement).dataset.copy as 'html'|'css'
      await navigator.clipboard.writeText(kind==='html'?plate.html:plate.css)
      const orig = (el as HTMLElement).textContent; (el as HTMLElement).textContent='Copied!'; setTimeout(()=>{(el as HTMLElement).textContent=orig!},900)
    })
  })
  document.getElementById('use-in-atelier')?.addEventListener('click',()=>{
    if(state.cataloguePlate) state.atelier.picks[state.catalogueBook]=state.cataloguePlate
    setView('studio')
  })
  document.getElementById('dict-search')?.addEventListener('input',(e)=>{ state.dictQuery=(e.target as HTMLInputElement).value; render() })
  document.getElementById('dict-book')?.addEventListener('change',(e)=>{ state.dictBook=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('dict-style')?.addEventListener('change',(e)=>{ state.dictStyle=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('dict-clear')?.addEventListener('click',()=>{ state.dictQuery=''; state.dictBook=''; state.dictStyle=''; render() })
  document.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click',()=>{
      const [bookId, plateId] = (el as HTMLElement).dataset.open!.split(':')
      state.catalogueBook=bookId; state.cataloguePlate=plateId; if(state.view!=='catalogue') setView('catalogue'); else render()
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
      setView('studio')
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

  // Guide thinking
  document.querySelectorAll('[data-thinking]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.activeThinking = (el as HTMLElement).dataset.thinking!
      state.thinkingMode = 'chapter'
      if (state.view!=='guide') setView('guide'); else render()
    })
  })
  document.getElementById('show-all-thinking')?.addEventListener('click',()=>{
    state.thinkingMode='chapter'; state.activeThinking=thinkingChapters[0].id; render()
  })
  document.getElementById('back-to-guide')?.addEventListener('click',()=>{ state.thinkingMode='guide'; state.activeViz=null; render() })
  document.querySelectorAll('[data-viz]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.activeViz=(el as HTMLElement).dataset.viz!
      state.thinkingMode='viz'
      if(state.view!=='guide') setView('guide'); else render()
    })
  })

  // decision steps
  document.querySelectorAll('[data-decision-step]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.activeDecisionStep=(el as HTMLElement).dataset.decisionStep!
      state.thinkingMode='guide'
      saveDecision(); render()
    })
  })
  document.querySelectorAll('[data-decision-option]').forEach(el=>{
    el.addEventListener('click',()=>{
      const [stepId, optId] = (el as HTMLElement).dataset.decisionOption!.split(':')
      state.decisionAnswers[stepId]=optId
      const opt = getDecisionStep(stepId)?.options.find(o=>o.id===optId)
      if(opt){
        // apply tokens and picks
        if(opt.tokens){
          state.atelier.tokens = { ...state.atelier.tokens, ...opt.tokens } as any
        }
        for(const m of opt.mapsTo){
          state.atelier.picks[m.bookId]=m.plateId
          if(!state.atelier.stack.includes(m.bookId)) state.atelier.stack=[...state.atelier.stack, m.bookId]
        }
      }
      // auto advance
      const next = getNextStep(stepId)
      if(next) state.activeDecisionStep=next.id
      saveDecision(); render()
    })
  })
  document.querySelectorAll('[data-decision-nav]').forEach(el=>{
    el.addEventListener('click',()=>{
      const dir=(el as HTMLElement).dataset.decisionNav
      if(dir==='next'){ const n=getNextStep(state.activeDecisionStep); if(n){ state.activeDecisionStep=n.id; saveDecision(); render() } }
      if(dir==='prev'){ const p=getPrevStep(state.activeDecisionStep); if(p){ state.activeDecisionStep=p.id; saveDecision(); render() } }
    })
  })
  document.getElementById('reset-decision')?.addEventListener('click',()=>{ state.decisionAnswers={}; state.activeDecisionStep=decisionSteps[0].id; saveDecision(); render() })
  document.getElementById('reset-decision-2')?.addEventListener('click',()=>{ state.decisionAnswers={}; state.activeDecisionStep=decisionSteps[0].id; saveDecision(); render() })
  document.getElementById('finish-decision')?.addEventListener('click',()=> setView('studio'))
  document.getElementById('apply-to-atelier')?.addEventListener('click',()=> setView('studio'))

  document.querySelectorAll('[data-guide]').forEach(el=>{
    el.addEventListener('click',()=>{
      const id = (el as HTMLElement).dataset.guide!
      state.activeGuide = id
      const guide = getAppGuide(id)
      if (!guide) return
      for (const ref of guide.stack) state.atelier.picks[ref.bookId]=ref.plateId
      const seen = new Set<string>()
      const ordered: string[] = []
      for (const r of guide.stack){ if(!seen.has(r.bookId)){ seen.add(r.bookId); ordered.push(r.bookId) } }
      for (const b of state.atelier.stack){ if(!seen.has(b)) ordered.push(b) }
      state.atelier.stack = ordered
      state.atelier.tokens = { ...guide.tokens }
      setView('studio')
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
    const w = window.open('','_blank'); if(!w) return; w.document.write(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Studio Preview</title><style>body{margin:0;font-family:system-ui}</style>${html}`); w.document.close()
  })
}

function escapeHtml(s:string){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }
function escapeAttr(s:string){ return s.replace(/"/g,'&quot;').replace(/</g,'&lt;') }

syncHash()
render()

try{
  localStorage.setItem('cb-last-build', JSON.stringify({ at: new Date().toISOString(), books: books.length, plates: dictionary.length, curations: curations.length, thinking: thinkingChapters.length }))
}catch{}
