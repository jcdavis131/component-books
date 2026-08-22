import type { Book } from '../types.ts'

export const book: Book = {
  id: 'layouts',
  title: 'Layouts',
  volume: 9,
  description: 'Foundational page architectures — dashboards, shells, and content frames for every app surface.',
  color: '#F9F6F0',
  accent: '#2A2A2A',
  intro: 'Volume 9 — Japandi v4 layouts. Zero-deps, paper/ink, 58/42 split first.',
  plates: [
    {
      id: 'dashboard-58-42',
      name: 'Dashboard 58/42 Map/Story',
      style: 'minimal',
      description: 'Signature 58/42 split: map/visual sticky left, narrative scroll right. Japandi v4 flagship ratio.',
      html: `<div class="ly-5842">
  <div class="ly-5842-map">
    <div class="ly-5842-map-inner">[ Map / Visual — sticky 72vh ]</div>
  </div>
  <div class="ly-5842-story">
    <h2>Story Panel</h2>
    <p>Scrolling narrative, controls, and insight cards live here.</p>
    <div class="ly-card">Metric</div>
  </div>
</div>`,
      css: `.ly-5842{display:grid;grid-template-columns:58% 42%;min-height:72vh;gap:0}.ly-5842-map{position:sticky;top:0;height:72vh;background:#E8E0D5;display:grid;place-items:center}.ly-5842-story{padding:24px;background:#F9F6F0}@media(max-width:900px){.ly-5842{grid-template-columns:1fr}.ly-5842-map{position:relative;height:48vh}}`,
      props: ['stickyMap: boolean', 'ratio: 58/42 | 60/40', 'gap: number'],
      tokens: [
        { name: '--ly-map-bg', value: '#E8E0D5', usage: 'map panel paper' },
        { name: '--ly-story-pad', value: '24px', usage: 'story padding' },
        { name: '--ly-sticky-h', value: '72vh', usage: 'sticky height' },
      ],
      useCases: ['analytics dashboards', 'embedding maps', 'editorial explorers'],
    },
    {
      id: 'dashboard-3col',
      name: 'Dashboard 3-Col',
      style: 'minimal',
      description: 'Nav, main, and insight rail. Balanced density for operator tools.',
      html: `<div class="ly-3col">
  <nav class="ly-3col-nav">Nav</nav>
  <main class="ly-3col-main">
    <h3>Main Content</h3>
    <div class="ly-grid">Cards</div>
  </main>
  <aside class="ly-3col-rail">Insights</aside>
</div>`,
      css: `.ly-3col{display:grid;grid-template-columns:220px 1fr 280px;min-height:100vh;background:#F9F6F0}.ly-3col-nav{border-right:1px solid #E8E0D5;padding:20px}.ly-3col-main{padding:24px}.ly-3col-rail{border-left:1px solid #E8E0D5;padding:20px;background:#F5F1EB}@media(max-width:1100px){.ly-3col{grid-template-columns:1fr}.ly-3col-nav,.ly-3col-rail{display:none}}`,
      props: ['navWidth: 220', 'railWidth: 280', 'collapsible: boolean'],
      tokens: [
        { name: '--ly-nav-w', value: '220px', usage: 'nav width' },
        { name: '--ly-rail-w', value: '280px', usage: 'rail width' },
      ],
      useCases: ['admin analytics', 'ops consoles', 'CRM detail views'],
    },
    {
      id: 'admin-shell',
      name: 'Admin Shell Sidebar Header Content',
      style: 'corporate',
      description: 'Classic sidebar + header + content with soft Japandi tokens. Sticky nav, scroll content.',
      html: `<div class="ly-admin">
  <aside class="ly-admin-side">
    <div class="ly-admin-logo">○ Scout</div>
    <a class="is-active">Dashboard</a><a>Orders</a><a>Settings</a>
  </aside>
  <div class="ly-admin-main">
    <header class="ly-admin-head"><span>Admin</span><span class="ly-dot">●</span></header>
    <section class="ly-admin-content">Content scrolls here</section>
  </div>
</div>`,
      css: `.ly-admin{display:grid;grid-template-columns:240px 1fr;min-height:100vh;background:#F9F6F0}.ly-admin-side{padding:20px;background:#2A2A2A;color:#F9F6F0;display:flex;flex-direction:column;gap:12px}.ly-admin-side a{opacity:.7;padding:8px 12px;border-radius:8px}.ly-admin-side a.is-active{background:#3a3a3a;opacity:1}.ly-admin-head{height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #E8E0D5;background:#F5F1EB;position:sticky;top:0}.ly-admin-content{padding:24px}`,
      props: ['sidebarCollapsed: boolean', 'headerSticky: boolean'],
      tokens: [
        { name: '--admin-sidebar', value: '#2A2A2A', usage: 'sidebar void' },
        { name: '--admin-header-h', value: '44px', usage: 'mono nav height' },
      ],
      useCases: ['admin panels', 'SaaS backoffices', 'internal tools'],
    },
    {
      id: 'auth-centered',
      name: 'Auth Centered Card',
      style: 'minimal',
      description: 'Centered auth card on paper. Soft shadow, moss accent, focused flow.',
      html: `<div class="ly-auth-c">
  <form class="ly-auth-card">
    <h2>Welcome back</h2>
    <p class="muted">Sign in to your workspace</p>
    <label>Email<input type="email" placeholder="you@studio.co"/></label>
    <label>Password<input type="password" placeholder="••••••••"/></label>
    <button>Continue</button>
  </form>
</div>`,
      css: `.ly-auth-c{min-height:80vh;display:grid;place-items:center;background:#F9F6F0;padding:24px}.ly-auth-card{width:100%;max-width:360px;background:#fff;padding:28px;border-radius:16px;box-shadow:0 8px 32px rgba(42,42,42,.08);display:flex;flex-direction:column;gap:14px}.ly-auth-card input{width:100%;padding:10px 12px;border:1px solid #D4C4B0;border-radius:8px;margin-top:6px}.ly-auth-card button{background:#2A2A2A;color:#F9F6F0;border:0;padding:10px;border-radius:8px}.muted{color:#8A9A8B;font-size:13px}`,
      props: ['maxWidth: 360', 'onSubmit: function'],
      tokens: [
        { name: '--auth-radius', value: '16px', usage: 'card radius' },
        { name: '--auth-shadow', value: '0 8px 32px rgba(42,42,42,.08)', usage: 'soft diffuse' },
      ],
      useCases: ['login', 'signup', 'password reset'],
    },
    {
      id: 'auth-split',
      name: 'Auth Split',
      style: 'editorial',
      description: 'Editorial split: brand story left, form right. Balanced 50/50.',
      html: `<div class="ly-auth-split">
  <div class="ly-auth-brand">
    <h1>Form follows feeling.</h1>
    <p>Japandi v4 — paper, ink, quiet craft.</p>
  </div>
  <div class="ly-auth-form">
    <form>
      <h2>Create account</h2>
      <input placeholder="Work email"/>
      <input placeholder="Password" type="password"/>
      <button>Start building</button>
    </form>
  </div>
</div>`,
      css: `.ly-auth-split{display:grid;grid-template-columns:1fr 1fr;min-height:80vh;border-radius:16px;overflow:hidden;background:#F9F6F0;border:1px solid #E8E0D5}.ly-auth-brand{background:#2A2A2A;color:#F9F6F0;padding:40px;display:flex;flex-direction:column;justify-content:center}.ly-auth-form{padding:40px;display:grid;place-items:center}.ly-auth-form form{display:flex;flex-direction:column;gap:12px;width:100%;max-width:320px}.ly-auth-form input{padding:10px 12px;border:1px solid #D4C4B0;border-radius:8px}.ly-auth-form button{background:#C17C60;color:#fff;border:0;padding:10px;border-radius:8px}`,
      props: ['brandContent: ReactNode', 'reverse: boolean'],
      tokens: [
        { name: '--split-bg', value: '#2A2A2A', usage: 'brand panel' },
        { name: '--split-accent', value: '#C17C60', usage: 'CTA' },
      ],
      useCases: ['marketing auth', 'onboarding', 'waitlist + form'],
    },
    {
      id: 'settings-tabs',
      name: 'Settings Tabs',
      style: 'minimal',
      description: 'Horizontal tabs for settings groups. Mono label, underline active state.',
      html: `<div class="ly-set-tabs">
  <div class="ly-tabs-head">
    <button class="is-active">General</button><button>Team</button><button>Billing</button><button>Security</button>
  </div>
  <div class="ly-tabs-body">General settings panel content</div>
</div>`,
      css: `.ly-set-tabs{background:#fff;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}.ly-tabs-head{display:flex;gap:0;border-bottom:1px solid #E8E0D5;background:#F5F1EB}.ly-tabs-head button{padding:12px 16px;border:0;background:0 0;border-bottom:2px solid transparent;font-family:ui-monospace;font-size:12px;cursor:pointer}.ly-tabs-head button.is-active{border-color:#2A2A2A;color:#2A2A2A}.ly-tabs-body{padding:20px}`,
      props: ['activeTab: string', 'onChange: (id)=>void'],
      tokens: [
        { name: '--tab-mono', value: 'ui-monospace', usage: 'label font' },
        { name: '--tab-active', value: '#2A2A2A', usage: 'ink underline' },
      ],
      useCases: ['settings pages', 'profile tabs', 'config panels'],
    },
    {
      id: 'settings-sidebar',
      name: 'Settings Sidebar',
      style: 'minimal',
      description: 'Left nav list + detail. Common for account/settings IA.',
      html: `<div class="ly-set-side">
  <aside>
    <strong>Settings</strong>
    <a class="is-active">Profile</a><a>Notifications</a><a>API Keys</a><a>Workspace</a>
  </aside>
  <section>Profile details form lives here</section>
</div>`,
      css: `.ly-set-side{display:grid;grid-template-columns:180px 1fr;gap:24px;background:#F9F6F0;padding:20px;border-radius:12px;border:1px solid #E8E0D5}.ly-set-side aside{display:flex;flex-direction:column;gap:8px}.ly-set-side aside a{padding:8px 10px;border-radius:8px;cursor:pointer;font-size:14px}.ly-set-side aside a.is-active{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.06)}.ly-set-side section{background:#fff;border-radius:12px;padding:20px;border:1px solid #E8E0D5}`,
      props: ['navItems: string[]', 'activeId: string'],
      tokens: [
        { name: '--set-nav-w', value: '180px', usage: 'nav column' },
        { name: '--set-card-bg', value: '#fff', usage: 'detail card' },
      ],
      useCases: ['account settings', 'workspace config', 'user prefs'],
    },
    {
      id: 'blank-canvas-grid',
      name: 'Blank Canvas With Grid',
      style: 'minimal',
      description: 'Dotted grid canvas, centered hint. For whiteboard/builder empty states.',
      html: `<div class="ly-canvas">
  <div class="ly-canvas-dot"></div>
  <div class="ly-canvas-hint">
    <span>○</span>
    <p>Drop components here</p>
    <small>Press / to browse</small>
  </div>
</div>`,
      css: `.ly-canvas{min-height:60vh;background:#F9F6F0;background-image:radial-gradient(#D4C4B0 1px,transparent 1px);background-size:22px 22px;border:1px dashed #D4C4B0;border-radius:12px;display:grid;place-items:center;position:relative}.ly-canvas-hint{background:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,.06);text-align:center}`,
      props: ['gridSize: 22', 'showHint: boolean'],
      tokens: [
        { name: '--canvas-dot', value: '#D4C4B0', usage: 'grid dot' },
        { name: '--canvas-bg', value: '#F9F6F0', usage: 'paper' },
      ],
      useCases: ['builder canvas', 'whiteboard', 'flow editors'],
    },
    {
      id: 'page-sticky-header',
      name: 'Page With Sticky Header',
      style: 'minimal',
      description: 'Article/doc layout with 44px sticky mono nav. Content max 72ch.',
      html: `<div class="ly-sticky-page">
  <header>DOC / Page Title — 44px mono sticky</header>
  <article>
    <h1>Headline lives here</h1>
    <p>Prose flows with comfortable measure. Sticky header stays visible while you scroll for actions.</p>
    <p>Second paragraph with links and context.</p>
  </article>
</div>`,
      css: `.ly-sticky-page{background:#F9F6F0}.ly-sticky-page header{position:sticky;top:0;height:44px;display:flex;align-items:center;padding:0 20px;background:rgba(249,246,240,.9);backdrop-filter:blur(8px);border-bottom:1px solid #E8E0D5;font-family:ui-monospace;font-size:12px;z-index:2}.ly-sticky-page article{max-width:72ch;margin:0 auto;padding:32px 20px;line-height:1.7}`,
      props: ['headerHeight: 44', 'maxWidth: 72ch'],
      tokens: [
        { name: '--sticky-h', value: '44px', usage: 'mono nav' },
        { name: '--prose-w', value: '72ch', usage: 'readability' },
      ],
      useCases: ['docs', 'blogs', 'legal pages'],
    },
    {
      id: 'holy-grail',
      name: 'Holy Grail',
      style: 'minimal',
      description: 'Header, footer, left nav, main, right aside. Classic full layout.',
      html: `<div class="ly-hg">
  <header>Header</header>
  <div class="ly-hg-body">
    <nav>Left</nav>
    <main>Main content — flexible center</main>
    <aside>Right</aside>
  </div>
  <footer>Footer</footer>
</div>`,
      css: `.ly-hg{display:flex;flex-direction:column;min-height:60vh;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}.ly-hg header,.ly-hg footer{padding:12px 16px;background:#F5F1EB;border-bottom:1px solid #E8E0D5}.ly-hg footer{border-top:1px solid #E8E0D5;border-bottom:0}.ly-hg-body{display:grid;grid-template-columns:160px 1fr 160px;flex:1}.ly-hg-body nav,.ly-hg-body aside{padding:16px;border-right:1px solid #E8E0D5}.ly-hg-body aside{border-left:1px solid #E8E0D5;border-right:0}.ly-hg-body main{padding:16px}`,
      props: ['leftWidth: 160', 'rightWidth: 160', 'header: ReactNode'],
      tokens: [
        { name: '--hg-border', value: '#E8E0D5', usage: 'dividers' },
        { name: '--hg-side-w', value: '160px', usage: 'side columns' },
      ],
      useCases: ['classic web apps', 'docs with toc', 'marketing + app shell'],
    },
    {
      id: 'masonry-grid',
      name: 'Masonry Grid',
      style: 'editorial',
      description: 'CSS columns masonry. Editorial rhythm, no JS.',
      html: `<div class="ly-masonry">
  <div class="ly-m" style="height:120px">Card A</div>
  <div class="ly-m" style="height:180px">Card B tall</div>
  <div class="ly-m" style="height:100px">Card C</div>
  <div class="ly-m" style="height:160px">Card D</div>
  <div class="ly-m" style="height:140px">Card E</div>
  <div class="ly-m" style="height:110px">Card F</div>
</div>`,
      css: `.ly-masonry{columns:3 220px;column-gap:16px}.ly-m{background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:16px;margin-bottom:16px;break-inside:avoid;display:grid;place-items:center;color:#2A2A2A}@media(max-width:700px){.ly-masonry{columns:1}}`,
      props: ['columns: 3', 'gap: 16', 'minColWidth: 220'],
      tokens: [
        { name: '--masonry-gap', value: '16px', usage: 'gutter' },
        { name: '--masonry-col', value: '220px', usage: 'min column' },
      ],
      useCases: ['inspiration boards', 'image feeds', 'testimonial walls'],
    },
    {
      id: 'centered-prose-640',
      name: 'Centered Prose 640',
      style: 'editorial',
      description: 'Prose centered at 640px — optimal reading. Serif headings, mono captions.',
      html: `<div class="ly-prose-640">
  <h1>The quiet frame</h1>
  <p class="lede">A 640px column is wide enough to breathe, narrow enough to focus.</p>
  <p>Body copy in 17px with 1.7 line height. Links underline softly. Mono labels for metadata.</p>
  <small>— Caption in mono 12px</small>
</div>`,
      css: `.ly-prose-640{max-width:640px;margin:0 auto;padding:32px 20px;line-height:1.7;background:#F9F6F0;color:#2A2A2A}.ly-prose-640 h1{font-family:Georgia,serif;font-weight:600;letter-spacing:-.02em}.ly-prose-640 .lede{font-size:18px;color:#8A9A8B}.ly-prose-640 small{font-family:ui-monospace;font-size:12px;color:#8A9A8B}`,
      props: ['maxWidth: 640', 'fontScale: 17/1.7'],
      tokens: [
        { name: '--prose-640', value: '640px', usage: 'measure' },
        { name: '--prose-lh', value: '1.7', usage: 'line height' },
      ],
      useCases: ['essays', 'blog posts', 'changelogs'],
    },
    {
      id: 'breakout-1100',
      name: 'Breakout 1100',
      style: 'editorial',
      description: '640px prose with 1100px breakout. For wide tables, maps, and hero visuals.',
      html: `<div class="ly-breakout">
  <div class="ly-breakout-prose">
    <h2>Prose stays narrow</h2>
    <p>But this next block breaks out to 1100px for a map or chart.</p>
  </div>
  <div class="ly-breakout-wide">[ Wide 1100 — map / table / chart ]</div>
  <div class="ly-breakout-prose"><p>Back to 640 for reading.</p></div>
</div>`,
      css: `.ly-breakout{background:#F9F6F0;padding:24px}.ly-breakout-prose{max-width:640px;margin:0 auto;line-height:1.7}.ly-breakout-wide{max-width:1100px;margin:24px auto;background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:24px;display:grid;place-items:center;min-height:200px}`,
      props: ['proseWidth: 640', 'breakoutWidth: 1100'],
      tokens: [
        { name: '--breakout-w', value: '1100px', usage: 'wide breakout' },
        { name: '--prose-w', value: '640px', usage: 'narrow prose' },
      ],
      useCases: ['data essays', 'Pudding-style stories', 'wide visuals in longform'],
    },
    {
      id: 'split-editor-preview',
      name: 'Split Editor Preview',
      style: 'minimal',
      description: 'Left editor (mono), right preview. Sync scroll optional.',
      html: `<div class="ly-split-ep">
  <div class="ly-ep-edit">
    <div class="ly-ep-bar">editor — mono</div>
    <pre># Hello
Content in markdown</pre>
  </div>
  <div class="ly-ep-prev">
    <div class="ly-ep-bar">preview</div>
    <div><h1>Hello</h1><p>Rendered preview.</p></div>
  </div>
</div>`,
      css: `.ly-split-ep{display:grid;grid-template-columns:1fr 1fr;min-height:50vh;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;background:#fff}.ly-ep-bar{font-family:ui-monospace;font-size:11px;padding:8px 12px;background:#F5F1EB;border-bottom:1px solid #E8E0D5}.ly-ep-edit pre{padding:16px;font-family:ui-monospace;font-size:13px;margin:0}.ly-ep-prev{padding:0 16px 16px;border-left:1px solid #E8E0D5}@media(max-width:800px){.ly-split-ep{grid-template-columns:1fr}}`,
      props: ['syncScroll: boolean', 'defaultSplit: 50'],
      tokens: [
        { name: '--ep-bar-bg', value: '#F5F1EB', usage: 'toolbar' },
        { name: '--ep-mono', value: 'ui-monospace', usage: 'editor font' },
      ],
      useCases: ['markdown editors', 'email builders', 'code preview'],
    },
    {
      id: 'workspace-resizable',
      name: 'Workspace With Resizable Panels',
      style: 'minimal',
      description: 'Three resizable panels via CSS resize + flex. No JS drag needed for MVP.',
      html: `<div class="ly-ws">
  <div class="ly-ws-panel" style="min-width:160px">Files
    <div class="ly-ws-handle"></div>
  </div>
  <div class="ly-ws-panel ly-ws-main">Editor — main
    <div class="ly-ws-handle"></div>
  </div>
  <div class="ly-ws-panel">Preview</div>
</div>`,
      css: `.ly-ws{display:flex;min-height:50vh;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}.ly-ws-panel{flex:1;padding:16px;position:relative;border-right:1px solid #E8E0D5;overflow:auto;resize:horizontal;min-width:120px}.ly-ws-panel:last-child{border-right:0;resize:none}.ly-ws-main{flex:1.6;background:#fff}.ly-ws-handle{position:absolute;top:0;right:0;width:6px;height:100%;cursor:col-resize;background:linear-gradient(to right,transparent,#E8E0D5)}`,
      props: ['panels: 3', 'resizable: boolean', 'minWidth: 120'],
      tokens: [
        { name: '--ws-border', value: '#E8E0D5', usage: 'panel dividers' },
        { name: '--ws-handle', value: '6px', usage: 'drag handle' },
      ],
      useCases: ['IDEs', 'design tools', 'data workbenches'],
    },
  ],
}

export default book
