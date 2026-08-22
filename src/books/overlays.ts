import type { Book } from '../types.ts'
export const book: Book = {
  id: 'overlays',
  title: 'Overlays',
  volume: 7,
  description: 'Layers above the page — modals, popovers, toasts, and guidance that respects focus.',
  color: '#E8E0D5',
  accent: '#C17C60',
  intro: 'Overlays are interruptions with manners. Each plate handles focus trapping, escape, and backdrop with zero deps.',
  plates: [
    {
      id: 'overlays-modal-centered',
      name: 'Modal Centered',
      style: 'minimal',
      description: 'Centered modal with backdrop, close affordance, and focus trap.',
      html: `<div class="ovl-backdrop" aria-hidden="true"></div>
<div class="modal-c" role="dialog" aria-modal="true" aria-label="Plate details">
  <div class="modal-c__head"><h4>Navigation — Header Minimal</h4><button aria-label="Close">✕</button></div>
  <p>A 44px sticky header with paper background and mono nav. Built for docs landing.</p>
  <div class="modal-c__foot"><button>Cancel</button><button class="pri">Copy code</button></div>
</div>`,
      css: `.ovl-backdrop{position:fixed;inset:0;background:rgba(30,32,34,.36);backdrop-filter:blur(6px)}
.modal-c{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:440px;max-width:calc(100% - 32px);background:#fff;border:1px solid #E8E0D5;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.22);padding:16px;font-family:ui-sans-system,sans-serif}
.modal-c__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.modal-c__head h4{margin:0;font-size:13px}
.modal-c__head button{border:0;background:#F9F6F0;width:28px;height:28px;border-radius:999px}
.modal-c p{font-size:12.5px;color:#8A9A8B;line-height:1.5;margin:0}
.modal-c__foot{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}
.modal-c__foot button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
.modal-c__foot .pri{background:#1E2022;color:#fff;border-color:#1E2022}`,
      props: ['role=dialog', 'aria-modal', 'backdrop'],
      tokens: [
        { name: '--modal-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--modal-backdrop', value: 'rgba(30,32,34,.36)', usage: 'overlay' },
      ],
      useCases: ['Detail view', 'Confirm action', 'Code preview'],
    },
    {
      id: 'overlays-modal-drawer-right',
      name: 'Modal Drawer Right',
      style: 'clay',
      description: 'Right drawer with handle, scrollable body, and clay shadow.',
      html: `<div class="drawer-backdrop"></div>
<aside class="drawer-r" role="dialog" aria-modal="true" aria-label="Atelier">
  <div class="drawer-r__handle"></div>
  <div class="drawer-r__head"><h4>Atelier — Inspect</h4><button>✕</button></div>
  <div class="drawer-r__body"><p>Tokens, props, and live CSS. Edit and copy without leaving context.</p><code>color: #8A9A8B</code></div>
  <div class="drawer-r__foot"><button>Reset</button><button class="pri">Apply</button></div>
</aside>`,
      css: `.drawer-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.18)}
.drawer-r{position:fixed;top:0;right:0;bottom:0;width:360px;max-width:88vw;background:#F9F6F0;border-left:1px solid #E8E0D5;box-shadow:-12px 0 40px rgba(0,0,0,.12);padding:14px;display:flex;flex-direction:column;gap:12px;border-radius:16px 0 0 16px}
.drawer-r__handle{width:32px;height:4px;border-radius:999px;background:#E8E0D5;align-self:center}
.drawer-r__head{display:flex;justify-content:space-between;align-items:center}
.drawer-r__head h4{margin:0;font-size:12.5px;font-family:ui-monospace,monospace}
.drawer-r__body{flex:1;overflow:auto;background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:12px;font-size:12.5px;color:#8A9A8B}
.drawer-r__foot{display:flex;justify-content:flex-end;gap:8px}
.drawer-r__foot button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 12px;font-size:12px}
.drawer-r__foot .pri{background:#2A2A2A;color:#fff}`,
      props: ['right drawer', 'handle', 'scroll body'],
      tokens: [
        { name: '--drawer-bg', value: '#F9F6F0', usage: 'paper' },
        { name: '--drawer-shadow', value: '-12px 0 40px rgba(0,0,0,.12)', usage: 'elevation' },
      ],
      useCases: ['Inspector', 'Filters', 'Cart drawer'],
    },
    {
      id: 'overlays-modal-bottom-sheet',
      name: 'Modal Bottom Sheet',
      style: 'moss',
      description: 'Mobile bottom sheet with drag handle and snap points.',
      html: `<div class="sheet-backdrop"></div>
<div class="sheet" role="dialog" aria-modal="true">
  <div class="sheet__handle"></div>
  <h4>Volume 5 — Navigation</h4>
  <p>20 plates for wayfinding. Includes header, sidebar, tabs, and command palette.</p>
  <div class="sheet__actions"><button class="pri">Open book</button><button>Share</button></div>
</div>`,
      css: `.sheet-backdrop{position:fixed;inset:0;background:rgba(30,32,34,.28)}
.sheet{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #E8E0D5;border-radius:20px 20px 0 0;padding:14px 18px 24px;box-shadow:0 -12px 40px rgba(0,0,0,.14)}
.sheet__handle{width:36px;height:4px;background:#E8E0D5;border-radius:999px;margin:0 auto 12px}
.sheet h4{margin:0 0 6px;font-size:14px;font-family:ui-monospace,monospace}
.sheet p{margin:0;font-size:12.5px;color:#8A9A8B;line-height:1.5;max-width:36ch}
.sheet__actions{display:flex;gap:8px;margin-top:14px}
.sheet__actions button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:10px 16px;font-size:13px;flex:1}
.sheet__actions .pri{background:#8A9A8B;color:#fff;border-color:#8A9A8B}`,
      props: ['bottom sheet', 'drag handle', 'snap'],
      tokens: [
        { name: '--sheet-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--sheet-handle', value: '#E8E0D5', usage: 'affordance' },
      ],
      useCases: ['Mobile details', 'Share sheet', 'Action sheet'],
    },
    {
      id: 'overlays-popover',
      name: 'Popover',
      style: 'minimal',
      description: 'Anchored popover with arrow and compact actions.',
      html: `<div class="pop">
  <div class="pop__arrow"></div>
  <h5>Plate tokens</h5>
  <p>3 tokens — paper, ink, rule. Click to copy values.</p>
  <div class="pop__actions"><button>Copy all</button><button>Inspect</button></div>
</div>`,
      css: `.pop{position:relative;width:240px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:12px;box-shadow:0 12px 32px rgba(0,0,0,.12);font-family:ui-monospace,monospace;font-size:11.5px}
.pop__arrow{position:absolute;top:-6px;left:24px;width:12px;height:12px;background:#fff;border-left:1px solid #E8E0D5;border-top:1px solid #E8E0D5;transform:rotate(45deg)}
.pop h5{margin:0 0 6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#2A2A2A}
.pop p{margin:0;color:#8A9A8B;line-height:1.4}
.pop__actions{display:flex;gap:6px;margin-top:10px}
.pop__actions button{border:1px solid #E8E0D5;background:#F9F6F0;border-radius:999px;padding:6px 10px;font-size:11px}`,
      props: ['arrow', 'anchored', 'actions'],
      tokens: [
        { name: '--pop-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--pop-shadow', value: '0 12px 32px rgba(0,0,0,.12)', usage: 'elevation' },
      ],
      useCases: ['Info popover', 'Token preview', 'Help tip'],
    },
    {
      id: 'overlays-tooltip',
      name: 'Tooltip',
      style: 'void',
      description: 'Minimal tooltip with void background and mono type.',
      html: `<div class="tt-wrap">
  <button>Hover me</button>
  <span class="tt" role="tooltip">Copy CSS — ⌘C</span>
</div>`,
      css: `.tt-wrap{position:relative;display:inline-block}
.tt-wrap button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
.tt{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%);background:#1E2022;color:#F9F6F0;padding:6px 10px;border-radius:8px;font-family:ui-monospace,monospace;font-size:11px;white-space:nowrap;pointer-events:none}
.tt::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#1E2022}`,
      props: ['role=tooltip', 'void bg', 'arrow via ::after'],
      tokens: [
        { name: '--tt-bg', value: '#1E2022', usage: 'tooltip surface' },
        { name: '--tt-ink', value: '#F9F6F0', usage: 'text' },
      ],
      useCases: ['Icon label', 'Shortcut hint', 'A11y description'],
    },
    {
      id: 'overlays-toast-stack',
      name: 'Toast Stack',
      style: 'minimal',
      description: 'Stacked toasts with auto-dismiss and action button.',
      html: `<div class="toasts" aria-live="polite">
  <div class="toast"><span>✓</span><div><b>Copied CSS</b><small>Navigation — header minimal</small></div><button>✕</button></div>
  <div class="toast"><span>◐</span><div><b>Building plates</b><small>12 / 20 — in progress</small></div><button>✕</button></div>
</div>`,
      css: `.toasts{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:60}
.toast{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.12);min-width:260px;font-family:ui-monospace,monospace;font-size:11.5px}
.toast span{width:24px;height:24px;border-radius:999px;display:grid;place-items:center;background:#F5F1EB;border:1px solid #E8E0D5}
.toast div{flex:1}
.toast b{display:block;font-size:11.5px}
.toast small{color:#8A9A8B}
.toast button{border:0;background:transparent;color:#8A9A8B}`,
      props: ['aria-live', 'stack', 'dismiss'],
      tokens: [
        { name: '--toast-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--toast-shadow', value: '0 8px 24px rgba(0,0,0,.12)', usage: 'elevation' },
      ],
      useCases: ['Feedback', 'Copy confirm', 'Build status'],
    },
    {
      id: 'overlays-dialog-confirm',
      name: 'Dialog Confirm',
      style: 'brutalist',
      description: 'Brutalist confirm dialog with strong border and hard shadow.',
      html: `<div class="confirm" role="alertdialog" aria-modal="true" aria-label="Confirm delete">
  <h4>Delete plate?</h4>
  <p>This removes navigation-header-mega and its tokens. Undo available for 5s.</p>
  <div class="confirm__actions"><button>Cancel</button><button class="is-danger">Delete — ⌫</button></div>
</div>`,
      css: `.confirm{width:360px;background:#fff;border:2px solid #1E2022;padding:16px;box-shadow:6px 6px 0 #1E2022;font-family:ui-monospace,monospace}
.confirm h4{margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:.06em}
.confirm p{margin:0;font-size:12px;color:#2A2A2A;line-height:1.5}
.confirm__actions{display:flex;justify-content:flex-end;gap:8px;margin-top:14px}
.confirm__actions button{border:2px solid #1E2022;background:#fff;padding:8px 12px;font-size:12px;font-weight:600}
.confirm__actions .is-danger{background:#C17C60;color:#fff}`,
      props: ['role=alertdialog', 'hard shadow', 'danger action'],
      tokens: [
        { name: '--confirm-ink', value: '#1E2022', usage: 'border + shadow' },
        { name: '--confirm-danger', value: '#C17C60', usage: 'destructive' },
      ],
      useCases: ['Destructive confirm', 'Irreversible action', 'Brutalist UI'],
    },
    {
      id: 'overlays-command-dialog',
      name: 'Command Dialog',
      style: 'void',
      description: 'Command dialog with input, results, and footer hints.',
      html: `<div class="cmd-dlg" role="dialog" aria-modal="true">
  <div class="cmd-dlg__input"><span>⌕</span><input placeholder="Search plates, tokens, books…" /></div>
  <div class="cmd-dlg__list"><a class="is-active"><span>→</span> Open Navigation Book <small>Vol 5</small></a><a><span>→</span> Copy HTML <small>⌘C</small></a></div>
  <div class="cmd-dlg__foot"><span><kbd>↑↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span><span><kbd>Esc</kbd> Close</span></div>
</div>`,
      css: `.cmd-dlg{width:520px;max-width:100%;background:#1E2022;color:#F9F6F0;border-radius:14px;border:1px solid #2A2A2A;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.4);font-family:ui-monospace,monospace}
.cmd-dlg__input{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #2A2A2A}
.cmd-dlg__input input{flex:1;background:transparent;border:0;color:#fff;outline:0;font-size:13px}
.cmd-dlg__list{padding:8px;display:flex;flex-direction:column;gap:2px}
.cmd-dlg__list a{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:8px;color:#B8A99A;text-decoration:none;font-size:12.5px}
.cmd-dlg__list a.is-active{background:#2A2A2A;color:#fff}
.cmd-dlg__foot{display:flex;gap:12px;padding:10px 12px;border-top:1px solid #2A2A2A;font-size:10px;color:#8A9A8B}
.cmd-dlg__foot kbd{border:1px solid #3a3a3a;border-bottom-width:2px;padding:2px 6px;border-radius:4px;background:#2A2A2A}`,
      props: ['kbd hints', 'active result', 'footer'],
      tokens: [
        { name: '--cmddlg-bg', value: '#1E2022', usage: 'void surface' },
        { name: '--cmddlg-active', value: '#2A2A2A', usage: 'selected row' },
      ],
      useCases: ['Command palette', 'Quick search', 'Spotlight'],
    },
    {
      id: 'overlays-dropdown-with-search',
      name: 'Dropdown With Search',
      style: 'corporate',
      description: 'Searchable dropdown with checkbox multi-select.',
      html: `<div class="dd-search">
  <div class="dd-search__input"><span>⌕</span><input placeholder="Filter styles…" value="m" /></div>
  <div class="dd-search__list">
    <label><input type="checkbox" checked /> minimal <small>12 plates</small></label>
    <label><input type="checkbox" /> moss <small>8</small></label>
    <label><input type="checkbox" checked /> clay <small>6</small></label>
    <label><input type="checkbox" /> terracotta <small>9</small></label>
  </div>
  <div class="dd-search__foot"><span>2 selected</span><button>Apply</button></div>
</div>`,
      css: `.dd-search{width:260px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.12);overflow:hidden;font-family:ui-monospace,monospace;font-size:12px}
.dd-search__input{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #E8E0D5}
.dd-search__input input{flex:1;border:0;outline:0;font-size:12px}
.dd-search__list{display:flex;flex-direction:column;padding:6px;max-height:160px;overflow:auto}
.dd-search__list label{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer}
.dd-search__list label:hover{background:#F9F6F0}
.dd-search__list small{margin-left:auto;color:#8A9A8B}
.dd-search__foot{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-top:1px solid #F5F1EB}
.dd-search__foot button{border:0;background:#1E2022;color:#fff;border-radius:999px;padding:6px 12px;font-size:11px}`,
      props: ['search input', 'checkbox', 'foot count'],
      tokens: [
        { name: '--dds-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--dds-hover', value: '#F9F6F0', usage: 'row hover' },
      ],
      useCases: ['Multi-select filter', 'Style picker', 'Tag select'],
    },
    {
      id: 'overlays-hover-card',
      name: 'Hover Card',
      style: 'editorial',
      description: 'Hover card with avatar, bio, and link preview.',
      html: `<div class="hover-card">
  <div class="hover-card__head"><i>SC</i><div><b>Scout Prime</b><span>Factory lead — component-books</span></div></div>
  <p>Building Japandi v4 plates. 8 books, 155 plates, zero deps. Focus: taste + verify.</p>
  <a href="#">View profile — ↗</a>
</div>`,
      css: `.hover-card{width:280px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;padding:12px;box-shadow:0 16px 40px rgba(0,0,0,.14)}
.hover-card__head{display:flex;gap:10px;align-items:center;margin-bottom:8px}
.hover-card__head i{width:36px;height:36px;border-radius:999px;display:grid;place-items:center;background:#F5F1EB;border:1px solid #E8E0D5;font-style:normal;font-family:ui-monospace,monospace;font-size:11px}
.hover-card__head b{font-size:12.5px;display:block}
.hover-card__head span{font-size:11px;color:#8A9A8B}
.hover-card p{margin:0;font-size:12px;color:#2A2A2A;line-height:1.5}
.hover-card a{display:inline-block;margin-top:10px;font-size:11px;color:#C17C60;text-decoration:none;border-bottom:1px dotted #C17C60}`,
      props: ['avatar', 'bio', 'link preview'],
      tokens: [
        { name: '--hoverc-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--hoverc-link', value: '#C17C60', usage: 'terracotta link' },
      ],
      useCases: ['User preview', 'Link unfurl', 'Profile hover'],
    },
    {
      id: 'overlays-lightbox',
      name: 'Lightbox',
      style: 'void',
      description: 'Lightbox with image, caption, and prev/next controls.',
      html: `<div class="lb-backdrop"></div>
<div class="lb" role="dialog" aria-label="Image">
  <button class="lb__nav is-prev" aria-label="Previous">‹</button>
  <figure><div class="lb__img">◐ Plate preview</div><figcaption>navigation-header-minimal — 44px sticky, paper #F9F6F0</figcaption></figure>
  <button class="lb__nav is-next" aria-label="Next">›</button>
  <button class="lb__close" aria-label="Close">✕</button>
</div>`,
      css: `.lb-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.72)}
.lb{position:fixed;inset:0;display:grid;place-items:center;padding:24px}
.lb figure{margin:0;background:#fff;border-radius:12px;overflow:hidden;max-width:640px;width:100%;box-shadow:0 24px 64px rgba(0,0,0,.4)}
.lb__img{aspect-ratio:16/9;display:grid;place-items:center;background:#F9F6F0;color:#8A9A8B;font-family:ui-monospace,monospace;font-size:13px}
.lb figure figcaption{padding:10px 12px;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B;border-top:1px solid #E8E0D5}
.lb__nav{position:fixed;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:999px;border:1px solid #fff;color:#fff;background:rgba(0,0,0,.3);display:grid;place-items:center}
.lb__nav.is-prev{left:16px}.lb__nav.is-next{right:16px}
.lb__close{position:fixed;top:16px;right:16px;width:32px;height:32px;border-radius:999px;border:1px solid #fff;background:rgba(0,0,0,.3);color:#fff}`,
      props: ['backdrop', 'prev/next', 'figcaption'],
      tokens: [
        { name: '--lb-backdrop', value: 'rgba(0,0,0,.72)', usage: 'scrim' },
        { name: '--lb-bg', value: '#FFFFFF', usage: 'image container' },
      ],
      useCases: ['Image gallery', 'Plate preview', 'Media viewer'],
    },
    {
      id: 'overlays-alert-banner-top',
      name: 'Alert Banner Top',
      style: 'terracotta',
      description: 'Top sticky alert banner with icon and dismiss.',
      html: `<div class="alert-top" role="alert">
  <span class="alert-top__icon">⚑</span>
  <p><b>Heads up —</b> Volume 5 API changed: Book.volume is now required. Migrate your imports.</p>
  <button aria-label="Dismiss">✕</button>
</div>`,
      css: `.alert-top{display:flex;align-items:center;gap:12px;padding:10px 16px;background:#C17C60;color:#fff;border-radius:0 0 12px 12px;font-family:ui-monospace,monospace;font-size:12.5px;position:sticky;top:0;z-index:30}
.alert-top__icon{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;background:rgba(255,255,255,.22)}
.alert-top p{margin:0;flex:1}
.alert-top b{font-weight:700}
.alert-top button{border:0;background:rgba(255,255,255,.2);width:28px;height:28px;border-radius:999px;color:#fff}`,
      props: ['role=alert', 'sticky top', 'dismiss'],
      tokens: [
        { name: '--alert-bg', value: '#C17C60', usage: 'terracotta banner' },
        { name: '--alert-ink', value: '#FFFFFF', usage: 'text' },
      ],
      useCases: ['Breaking change', 'Maintenance', 'Deprecation'],
    },
    {
      id: 'overlays-coach-mark',
      name: 'Coach Mark',
      style: 'playful',
      description: 'Coach mark with spotlight cutout and next step CTA.',
      html: `<div class="coach">
  <div class="coach__spot"></div>
  <div class="coach__card">
    <span>1 of 3</span>
    <h5>Copy any plate</h5>
    <p>Click the code block to copy HTML + CSS. Paste into your Vite app — zero deps.</p>
    <div class="coach__actions"><button>Skip</button><button class="pri">Next — Tab switch</button></div>
  </div>
</div>`,
      css: `.coach{position:relative;width:360px;height:200px;background:#1E2022;border-radius:16px;overflow:hidden}
.coach__spot{position:absolute;left:24px;top:24px;width:120px;height:36px;background:#fff;border-radius:10px;box-shadow:0 0 0 999px rgba(30,32,34,.72)}
.coach__card{position:absolute;left:16px;right:16px;bottom:16px;background:#fff;border-radius:12px;padding:12px;font-family:ui-monospace,monospace;font-size:11.5px}
.coach__card span{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.coach__card h5{margin:6px 0 4px;font-size:12.5px}
.coach__card p{margin:0;color:#8A9A8B;line-height:1.4}
.coach__actions{display:flex;justify-content:space-between;margin-top:10px}
.coach__actions button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:6px 10px;font-size:11px}
.coach__actions .pri{background:#1E2022;color:#fff;border-color:#1E2022}`,
      props: ['spotlight', 'step count', 'next CTA'],
      tokens: [
        { name: '--coach-spot', value: '#FFFFFF', usage: 'highlight' },
        { name: '--coach-scrim', value: 'rgba(30,32,34,.72)', usage: 'overlay' },
      ],
      useCases: ['Onboarding tour', 'Feature intro', 'Empty state guide'],
    },
    {
      id: 'overlays-context-sheet',
      name: 'Context Sheet',
      style: 'clay',
      description: 'Context sheet with icon grid and destructive zone.',
      html: `<div class="ctx-sheet">
  <div class="ctx-sheet__grid"><button>⎘ Copy</button><button>↗ Export</button><button>♡ Save</button><button>⚑ Flag</button></div>
  <hr />
  <button class="ctx-sheet__danger">⌫ Delete plate</button>
</div>`,
      css: `.ctx-sheet{width:240px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:16px;padding:8px;box-shadow:0 16px 40px rgba(0,0,0,.14)}
.ctx-sheet__grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.ctx-sheet__grid button{border:1px solid #E8E0D5;background:#fff;border-radius:10px;padding:10px;font-size:12px;font-family:ui-monospace,monospace}
.ctx-sheet hr{border:0;border-top:1px solid #E8E0D5;margin:8px 0}
.ctx-sheet__danger{width:100%;border:0;background:#fff;color:#C17C60;border:1px solid #E8E0D5;border-radius:10px;padding:10px;font-size:12px}`,
      props: ['icon grid', 'danger zone', 'sheet radius'],
      tokens: [
        { name: '--ctxs-bg', value: '#F9F6F0', usage: 'sheet paper' },
        { name: '--ctxs-danger', value: '#C17C60', usage: 'destructive' },
      ],
      useCases: ['Mobile actions', 'Long-press menu', 'Card options'],
    },
    {
      id: 'overlays-nested-modal',
      name: 'Nested Modal',
      style: 'glass',
      description: 'Nested modal stack with parent dimming and breadcrumb.',
      html: `<div class="nested-backdrop"></div>
<div class="nested-parent"><p>Parent — Plate settings</p><div class="nested-child" role="dialog" aria-modal="true"><div class="nested-child__crumb">Settings › Tokens</div><h5>Edit token — --nav-bg</h5><input value="#F9F6F0" /><div class="nested-child__foot"><button>Cancel</button><button class="pri">Save</button></div></div></div>`,
      css: `.nested-backdrop{position:fixed;inset:0;background:rgba(30,32,34,.24);backdrop-filter:blur(4px)}
.nested-parent{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:480px;max-width:calc(100% - 24px);background:rgba(255,255,255,.86);backdrop-filter:blur(12px);border:1px solid #E8E0D5;border-radius:16px;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,.18)}
.nested-parent p{margin:0 0 12px;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B}
.nested-child{background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:12px;box-shadow:0 12px 32px rgba(0,0,0,.14)}
.nested-child__crumb{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#8A9A8B;margin-bottom:8px}
.nested-child h5{margin:0 0 8px;font-size:12.5px}
.nested-child input{width:100%;border:1px solid #E8E0D5;border-radius:8px;padding:8px 10px;font-family:ui-monospace,monospace;font-size:12px}
.nested-child__foot{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}
.nested-child__foot button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:6px 12px;font-size:11px}
.nested-child__foot .pri{background:#1E2022;color:#fff}`,
      props: ['nested stack', 'parent dim', 'breadcrumb'],
      tokens: [
        { name: '--nested-glass', value: 'rgba(255,255,255,.86)', usage: 'glass parent' },
        { name: '--nested-child', value: '#FFFFFF', usage: 'child surface' },
      ],
      useCases: ['Token edit inside settings', 'Nested confirm', 'Stacked dialogs'],
    },
  ],
}
