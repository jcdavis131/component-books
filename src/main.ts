import { books, booksById } from './books.ts'
import type { View, Plate, Book, DesignTokens } from './types.ts'
import { searchDict, allStyles, dictionary } from './dictionary.ts'
import { createInitialAtelier, tokensToCss, tokensToTailwind, tokensToJson, shufflePicks, getPlate, assemblePage, defaultTokens } from './atelier.ts'

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
}

let state: AppState = {
  view: (location.hash.replace('#/','') as View) || 'library',
  readerBook: 'foundations',
  readerPlate: booksById['foundations']?.plates[0]?.id || 'foundations-placeholder-01',
  dictQuery: '',
  dictStyle: '',
  dictBook: '',
  atelier: createInitialAtelier(),
  codeTab: 'html'
}

// sync view from hash
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

function render(){
  const totalPlates = dictionary.length
  app.innerHTML = `
    <nav class="cb-nav">
      <div class="cb-nav-left">
        <div class="cb-brand"><div class="cb-brand-dot">CB</div><span>Component Books</span><span style="opacity:.5;font-weight:400;margin-left:6px">12 vols / ${totalPlates} plates</span></div>
        <div class="cb-tabs">
          ${(['library','reader','dictionary','atelier'] as View[]).map(v=>`
            <button class="cb-tab ${state.view===v?'active':''}" data-view="${v}">${v}</button>
          `).join('')}
        </div>
      </div>
      <div class="cb-nav-right">
        <span class="cb-count">paper #F9F6F0 • ink #2A2A2A • terracotta #C17C60</span>
        <button class="cb-btn" id="shuffle-global" title="Shuffle atelier">↻ Shuffle</button>
      </div>
    </nav>
    <main class="cb-main">
      ${state.view==='library' ? renderLibrary() : ''}
      ${state.view==='reader' ? renderReader() : ''}
      ${state.view==='dictionary' ? renderDictionary() : ''}
      ${state.view==='atelier' ? renderAtelier() : ''}
    </main>
    <footer style="padding:24px;text-align:center;font-family:var(--mono);font-size:11px;color:var(--ink-2);border-top:1px solid var(--paper-3);max-width:1280px;margin:0 auto;width:100%">
      Built to avoid artifact token limits — real Vite site • Japandi v4 • Offline-ready • <span style="color:var(--terracotta)">Pudding-style editorial</span>
    </footer>
  `
  attachEvents()
}

function renderLibrary(){
  return `
    <div class="cb-hero">
      <div>
        <div class="cb-kicker"><i></i> VOL. 1—12 • COMPENDIUM • 2026</div>
        <h1>Like a chair book,<br/>but for web app parts.</h1>
        <p>12 books, each comprehensive enough for any design dream. Foundations to Commerce. Pick plates, combine into new design systems. Built for zero-deps, real code, no mock data.</p>
      </div>
      <div style="font-family:var(--mono);font-size:11px;line-height:1.6;color:var(--ink-2);background:#fff;border:1px solid var(--paper-3);border-radius:12px;padding:16px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>VOLUMES</span><span>12</span></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>PLATES</span><span>${dictionary.length}</span></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>STYLES</span><span>${allStyles().length}</span></div>
        <div style="display:flex;justify-content:space-between"><span>BUILD</span><span>vite + ts</span></div>
        <div style="margin-top:12px;padding-top:12px;border-top:1px dashed var(--paper-3)">Click any book to read • Atelier to assemble a full site • Dictionary to search every plate</div>
      </div>
    </div>
    <div class="cb-shelf">
      ${books.map(b=>`
        <div class="cb-book" data-book="${b.id}" style="--accent:${b.accent}">
          <div class="cb-book-top" style="background:${b.accent}"></div>
          <div class="cb-book-cover">
            <div class="cb-book-meta"><span>VOL. ${String(b.volume).padStart(2,'0')}</span><span>${b.plates.length} plates</span></div>
            <h3 class="cb-book-title">${b.title}</h3>
            <p class="cb-book-desc">${b.description}</p>
            <div class="cb-book-preview">
              ${b.plates[0] ? b.plates[0].html.slice(0,220) : '<div style="opacity:.5">Empty</div>'}
              <style>${b.plates[0]?.css || ''}</style>
            </div>
          </div>
          <div class="cb-book-foot"><span>${b.id}</span><span class="cb-book-count">${b.plates.length} plates →</span></div>
        </div>
      `).join('')}
    </div>
  `
}

function renderReader(){
  const book = booksById[state.readerBook] || books[0]
  const plate = book.plates.find(p=>p.id===state.readerPlate) || book.plates[0]
  if (!plate) return `<div class="cb-empty">No plates in this volume yet — subagents still writing comprehensive plates.</div>`
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div class="cb-kicker"><i></i> READER • VOL. ${book.volume} • ${book.title.toUpperCase()}</div>
      <div style="display:flex;gap:8px"><button class="cb-btn" id="prev-plate">← Prev</button><button class="cb-btn" id="next-plate">Next →</button></div>
    </div>
    <div class="cb-reader">
      <div class="cb-rail">
        <h3>${book.title} — ${book.plates.length} plates</h3>
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
          <div class="cb-stage-live" id="live-root">${plate.html}<style>${plate.css}</style></div>
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
          <h4>Plate</h4>
          <div style="font-family:var(--serif);font-size:16px;margin-bottom:6px">${plate.name}</div>
          <div style="font-size:12.5px;color:var(--ink-2);line-height:1.5">${plate.description}</div>
        </div>
        <div>
          <h4>Tokens</h4>
          ${(plate.tokens||[]).map(t=>`<div class="cb-token-row"><span>${t.name}</span><span style="color:var(--terracotta)">${t.value}</span></div>`).join('') || '<div style="font-size:12px;color:var(--ink-2)">No tokens — uses global</div>'}
        </div>
        <div>
          <h4>Props</h4>
          <div style="display:flex;flex-wrap:wrap;gap:6px">${(plate.props||[]).map(p=>`<span class="cb-prop">${p}</span>`).join('') || '<span class="cb-badge">none</span>'}</div>
        </div>
        <div>
          <h4>Use cases</h4>
          <div style="font-size:12px;line-height:1.5">${(plate.useCases||[]).join(' • ') || 'general'}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="cb-btn primary" id="use-in-atelier">Use in Atelier</button>
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
  return `
    <div class="cb-kicker" style="margin-bottom:16px"><i></i> ATELIER • COMPOSE • EXPORT</div>
    <div class="cb-atelier">
      <div class="cb-atelier-panel">
        <div style="font-family:var(--serif);font-size:18px">Tokens</div>
        ${renderTokenField('Radius','radius','select',['8px','12px','16px','24px','999px'], st.tokens.radius)}
        ${renderTokenField('Shadow','shadow','select',['soft','brutal','layered'], st.tokens.shadow)}
        <div class="cb-field"><label>Accent</label><input type="color" id="token-accent" value="${st.tokens.accent}" /></div>
        <div class="cb-field"><label>Paper</label><input type="color" id="token-paper" value="${st.tokens.paper}" /></div>
        <div class="cb-field"><label>Density</label><select id="token-density"><option value="compact" ${st.tokens.density==='compact'?'selected':''}>Compact</option><option value="cozy" ${st.tokens.density==='cozy'?'selected':''}>Cozy</option><option value="airy" ${st.tokens.density==='airy'?'selected':''}>Airy</option></select></div>
        <div style="display:flex;gap:8px"><button class="cb-btn primary" id="atelier-shuffle">Shuffle</button><button class="cb-btn" id="atelier-reset">Reset</button></div>
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

  // library
  document.querySelectorAll('[data-book]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.readerBook = (el as HTMLElement).dataset.book!
      state.readerPlate = booksById[state.readerBook]?.plates[0]?.id || ''
      setView('reader')
    })
  })

  // reader
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

  // dictionary
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

  // atelier
  document.getElementById('token-radius')?.addEventListener('change',(e)=>{ state.atelier.tokens.radius=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-shadow')?.addEventListener('change',(e)=>{ state.atelier.tokens.shadow=(e.target as HTMLSelectElement).value; render() })
  document.getElementById('token-accent')?.addEventListener('input',(e)=>{ state.atelier.tokens.accent=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-paper')?.addEventListener('input',(e)=>{ state.atelier.tokens.paper=(e.target as HTMLInputElement).value; render() })
  document.getElementById('token-density')?.addEventListener('change',(e)=>{ state.atelier.tokens.density=(e.target as HTMLSelectElement).value as any; render() })
  document.getElementById('atelier-shuffle')?.addEventListener('click',()=>{ state.atelier=shufflePicks(state.atelier); render() })
  document.getElementById('atelier-reset')?.addEventListener('click',()=>{ state.atelier=createInitialAtelier(); render() })
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

// offline-ready hint: cache in localStorage for instant next load
try{
  localStorage.setItem('cb-last-build', JSON.stringify({ at: new Date().toISOString(), books: books.length, plates: dictionary.length }))
}catch{}
