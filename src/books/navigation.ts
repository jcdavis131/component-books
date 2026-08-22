import type { Book } from '../types.ts'
export const book: Book = {
  id: 'navigation',
  title: 'Navigation',
  volume: 5,
  description: 'Wayfinding systems that orient, move, and anchor — from minimal headers to command palettes.',
  color: '#F9F6F0',
  accent: '#8A9A8B',
  intro: 'Navigation is architecture made visible. These plates treat movement as material — density, hierarchy, and affordance before decoration.',
  plates: [
    {
      id: 'navigation-header-minimal',
      name: 'Header Minimal',
      style: 'minimal',
      description: 'A restrained 44px sticky header with wordmark and quiet nav links.',
      html: `<header class="nav-h-min">
  <a class="nav-h-min__mark" href="/">atelier</a>
  <nav class="nav-h-min__links" aria-label="Primary">
    <a href="/books">Books</a>
    <a href="/plates">Plates</a>
    <a href="/about">About</a>
  </nav>
  <button class="nav-h-min__cta">Index</button>
</header>`,
      css: `.nav-h-min{display:flex;align-items:center;justify-content:space-between;height:44px;padding:0 20px;background:#F9F6F0;border-bottom:1px solid #E8E0D5;position:sticky;top:0;z-index:20;font-family:ui-monospace,monospace}
.nav-h-min__mark{font-weight:700;letter-spacing:-0.02em;text-decoration:none;color:#2A2A2A}
.nav-h-min__links{display:flex;gap:20px;font-size:12px}
.nav-h-min__links a{text-decoration:none;color:#8A9A8B}
.nav-h-min__cta{border:1px solid #2A2A2A;border-radius:999px;padding:4px 12px;background:#fff;font-size:12px}`,
      props: ['sticky', 'height: 44px', 'aria-label'],
      tokens: [
        { name: '--nav-bg', value: '#F9F6F0', usage: 'paper background' },
        { name: '--nav-ink', value: '#2A2A2A', usage: 'primary text' },
        { name: '--nav-rule', value: '#E8E0D5', usage: 'divider' },
      ],
      useCases: ['Site header', 'Docs landing', 'Minimal product nav'],
    },
    {
      id: 'navigation-header-mega',
      name: 'Header Mega',
      style: 'corporate',
      description: 'Full-bleed mega menu with grouped sections and featured callout.',
      html: `<header class="nav-h-mega">
  <div class="nav-h-mega__bar">
    <a class="nav-h-mega__mark" href="/">atelier — vol.05</a>
    <button class="nav-h-mega__trigger" aria-expanded="true">Browse <span>⌄</span></button>
  </div>
  <div class="nav-h-mega__panel">
    <div class="nav-h-mega__cols">
      <section><h4>Books</h4><a>Forms</a><a>Navigation</a><a>Data</a></section>
      <section><h4>Systems</h4><a>Tokens</a><a>Layout</a><a>Motion</a></section>
      <section class="nav-h-mega__feat"><h4>New</h4><p>Volume 5 drops with 20 plates. Map-first navigation.</p><a class="link">Read intro →</a></section>
    </div>
  </div>
</header>`,
      css: `.nav-h-mega{border-bottom:1px solid #D4C4B0;background:#F9F6F0;font-family:ui-sans-system,sans-serif}
.nav-h-mega__bar{display:flex;justify-content:space-between;align-items:center;height:56px;padding:0 24px}
.nav-h-mega__panel{border-top:1px solid #E8E0D5;padding:24px;background:#fff}
.nav-h-mega__cols{display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:24px}
.nav-h-mega__cols h4{font-size:11px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 12px;color:#8A9A8B}
.nav-h-mega__feat{background:#F5F1EB;padding:16px;border-radius:12px}`,
      props: ['aria-expanded', 'grouped sections', 'featured slot'],
      tokens: [
        { name: '--mega-bg', value: '#F9F6F0', usage: 'header paper' },
        { name: '--mega-panel', value: '#FFFFFF', usage: 'dropdown surface' },
        { name: '--mega-muted', value: '#8A9A8B', usage: 'section labels' },
      ],
      useCases: ['E-commerce nav', 'Design system docs', 'Marketing site'],
    },
    {
      id: 'navigation-sidebar-collapsible',
      name: 'Sidebar Collapsible',
      style: 'clay',
      description: 'Cozy collapsible sidebar with nested groups and memory of open state.',
      html: `<aside class="nav-sb-col" aria-label="Sidebar">
  <button class="nav-sb-col__toggle" aria-expanded="true">☰ Library</button>
  <div class="nav-sb-col__group">
    <h5>Volumes</h5>
    <a class="is-active">05 Navigation</a>
    <a>06 Data Display</a>
    <a>07 Overlays</a>
  </div>
  <div class="nav-sb-col__group">
    <h5>Tools</h5>
    <a>Tokens</a>
    <a>Atelier</a>
  </div>
</aside>`,
      css: `.nav-sb-col{width:240px;background:#F5F1EB;border-right:1px solid #E8E0D5;padding:16px;display:flex;flex-direction:column;gap:16px;border-radius:0 12px 12px 0}
.nav-sb-col__toggle{font-family:ui-monospace,monospace;font-size:12px;border:1px solid #D4C4B0;background:#fff;padding:8px 12px;border-radius:8px;text-align:left}
.nav-sb-col__group h5{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B;margin:0 0 8px}
.nav-sb-col__group a{display:block;padding:6px 10px;border-radius:8px;font-size:13px;color:#2A2A2A;text-decoration:none}
.nav-sb-col__group a.is-active{background:#2A2A2A;color:#F9F6F0}`,
      props: ['aria-expanded', 'active state', 'nested groups'],
      tokens: [
        { name: '--sb-bg', value: '#F5F1EB', usage: 'sidebar surface' },
        { name: '--sb-active', value: '#2A2A2A', usage: 'selected item' },
      ],
      useCases: ['Admin shell', 'Documentation', 'File browser'],
    },
    {
      id: 'navigation-sidebar-icon-rail',
      name: 'Sidebar Icon Rail',
      style: 'moss',
      description: 'Compact 56px icon rail with tooltip labels and active indicator.',
      html: `<aside class="nav-rail" aria-label="Icon rail">
  <button class="nav-rail__btn is-active" aria-label="Library" title="Library">◧</button>
  <button class="nav-rail__btn" aria-label="Search" title="Search">⌕</button>
  <button class="nav-rail__btn" aria-label="Atelier" title="Atelier">✦</button>
  <button class="nav-rail__btn" aria-label="Settings" title="Settings">⚙</button>
  <div class="nav-rail__dot"></div>
</aside>`,
      css: `.nav-rail{width:56px;display:flex;flex-direction:column;align-items:center;gap:12px;padding:16px 0;background:#1E2022;border-radius:12px}
.nav-rail__btn{width:36px;height:36px;border-radius:10px;border:0;background:#2A2A2A;color:#8A9A8B;display:grid;place-items:center;font-size:16px}
.nav-rail__btn.is-active{background:#F9F6F0;color:#1E2022;box-shadow:0 2px 12px rgba(0,0,0,.2)}
.nav-rail__dot{width:4px;height:4px;border-radius:999px;background:#8A9A8B;margin-top:auto}`,
      props: ['aria-label', 'title tooltip', 'active indicator'],
      tokens: [
        { name: '--rail-bg', value: '#1E2022', usage: 'void background' },
        { name: '--rail-active', value: '#F9F6F0', usage: 'active surface' },
      ],
      useCases: ['Tool rail', 'Figma-like app', 'Compact admin'],
    },
    {
      id: 'navigation-breadcrumbs',
      name: 'Breadcrumbs',
      style: 'editorial',
      description: 'Editorial breadcrumbs with slash separator and current page emphasis.',
      html: `<nav class="crumbs" aria-label="Breadcrumb">
  <a href="/">Library</a><span>/</span>
  <a href="/vol5">Vol. 05</a><span>/</span>
  <a href="/vol5/nav">Navigation</a><span>/</span>
  <span aria-current="page">Breadcrumbs</span>
</nav>`,
      css: `.crumbs{display:flex;align-items:center;gap:8px;font-family:Georgia,serif;font-size:13px;color:#8A9A8B}
.crumbs a{text-decoration:none;color:#8A9A8B;border-bottom:1px dotted transparent}
.crumbs a:hover{color:#2A2A2A;border-bottom-color:#C17C60}
.crumbs [aria-current]{color:#2A2A2A;font-weight:600}`,
      props: ['aria-label', 'aria-current', 'separator'],
      tokens: [
        { name: '--crumb-muted', value: '#8A9A8B', usage: 'inactive links' },
        { name: '--crumb-accent', value: '#C17C60', usage: 'hover underline' },
      ],
      useCases: ['Docs hierarchy', 'E-commerce category', 'Knowledge base'],
    },
    {
      id: 'navigation-pagination-numbers',
      name: 'Pagination Numbers',
      style: 'minimal',
      description: 'Numbered pagination with ellipsis, previous/next, and current page.',
      html: `<nav class="pg-num" aria-label="Pagination">
  <button disabled>←</button>
  <a class="is-active" aria-current="page">1</a>
  <a>2</a><a>3</a><span>…</span><a>12</a>
  <button>→</button>
</nav>`,
      css: `.pg-num{display:inline-flex;align-items:center;gap:6px;font-family:ui-monospace,monospace;font-size:13px}
.pg-num a,.pg-num button{width:32px;height:32px;display:grid;place-items:center;border:1px solid #E8E0D5;border-radius:8px;background:#fff;color:#2A2A2A}
.pg-num a.is-active{background:#2A2A2A;color:#fff;border-color:#2A2A2A}
.pg-num button:disabled{opacity:.4;pointer-events:none}`,
      props: ['aria-current', 'disabled prev', 'ellipsis'],
      tokens: [
        { name: '--pg-border', value: '#E8E0D5', usage: 'page border' },
        { name: '--pg-active', value: '#2A2A2A', usage: 'current page' },
      ],
      useCases: ['Search results', 'Archive pages', 'Table pagination'],
    },
    {
      id: 'navigation-pagination-load-more',
      name: 'Pagination Load More',
      style: 'clay',
      description: 'Progressive load more with count and soft clay button.',
      html: `<div class="pg-more">
  <div class="pg-more__meta">Showing 24 of 128 plates</div>
  <div class="pg-more__bar"><i style="width:18%"></i></div>
  <button class="pg-more__btn">Load 12 more — ↧</button>
</div>`,
      css: `.pg-more{display:flex;flex-direction:column;gap:10px;align-items:center;padding:20px;background:#F9F6F0;border-radius:16px;border:1px solid #E8E0D5}
.pg-more__meta{font-size:12px;color:#8A9A8B;font-family:ui-monospace,monospace}
.pg-more__bar{width:200px;height:4px;background:#E8E0D5;border-radius:999px;overflow:hidden}
.pg-more__bar i{display:block;height:100%;background:#8A9A8B;border-radius:999px}
.pg-more__btn{border:0;background:#fff;padding:10px 18px;border-radius:999px;box-shadow:0 2px 10px rgba(0,0,0,.06),inset 0 -1px 0 #E8E0D5;font-size:13px}`,
      props: ['progress', 'count label', 'batch size'],
      tokens: [
        { name: '--more-bg', value: '#F9F6F0', usage: 'container' },
        { name: '--more-track', value: '#E8E0D5', usage: 'progress track' },
      ],
      useCases: ['Infinite scroll fallback', 'Gallery', 'Feed'],
    },
    {
      id: 'navigation-tabs-underline',
      name: 'Tabs Underline',
      style: 'minimal',
      description: 'Underline tabs with sliding ink indicator and editorial spacing.',
      html: `<div class="tabs-u" role="tablist">
  <button role="tab" aria-selected="true">Plates</button>
  <button role="tab" aria-selected="false">Tokens</button>
  <button role="tab" aria-selected="false">Usage</button>
  <i class="tabs-u__ink"></i>
</div>`,
      css: `.tabs-u{position:relative;display:inline-flex;gap:24px;border-bottom:1px solid #E8E0D5;font-family:ui-monospace,monospace;font-size:13px}
.tabs-u button{padding:10px 2px 12px;border:0;background:transparent;color:#8A9A8B;cursor:pointer}
.tabs-u [aria-selected="true"]{color:#2A2A2A;font-weight:600}
.tabs-u__ink{position:absolute;left:0;bottom:-1px;width:48px;height:2px;background:#2A2A2A;border-radius:2px;transition:transform .22s ease}`,
      props: ['role=tablist', 'aria-selected', 'ink indicator'],
      tokens: [
        { name: '--tab-rule', value: '#E8E0D5', usage: 'baseline' },
        { name: '--tab-ink', value: '#2A2A2A', usage: 'active line' },
      ],
      useCases: ['Detail panels', 'Settings sections', 'Content switcher'],
    },
    {
      id: 'navigation-tabs-pills',
      name: 'Tabs Pills',
      style: 'playful',
      description: 'Pill tabs with soft shadow and bouncy active state.',
      html: `<div class="tabs-p" role="tablist">
  <button role="tab" aria-selected="true">All</button>
  <button role="tab" aria-selected="false">Minimal</button>
  <button role="tab" aria-selected="false">Moss</button>
  <button role="tab" aria-selected="false">Void</button>
</div>`,
      css: `.tabs-p{display:inline-flex;gap:6px;padding:6px;background:#F5F1EB;border-radius:999px;border:1px solid #E8E0D5}
.tabs-p button{border:0;padding:8px 14px;border-radius:999px;background:transparent;font-size:13px;color:#8A9A8B;cursor:pointer}
.tabs-p [aria-selected="true"]{background:#fff;color:#2A2A2A;box-shadow:0 2px 8px rgba(0,0,0,.08);font-weight:600}`,
      props: ['pill group', 'aria-selected', 'shadow active'],
      tokens: [
        { name: '--pill-bg', value: '#F5F1EB', usage: 'group background' },
        { name: '--pill-active', value: '#FFFFFF', usage: 'selected pill' },
      ],
      useCases: ['Filters', 'Style switcher', 'Category tabs'],
    },
    {
      id: 'navigation-segmented-control',
      name: 'Segmented Control',
      style: 'neumorphic',
      description: 'Three-way segmented control with sliding thumb and mono labels.',
      html: `<div class="seg" role="group" aria-label="View density">
  <button class="is-active">Cozy</button>
  <button>Compact</button>
  <button>Airy</button>
  <span class="seg__thumb" style="--i:0"></span>
</div>`,
      css: `.seg{position:relative;display:inline-grid;grid-template-columns:repeat(3,1fr);padding:4px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:10px;font-family:ui-monospace,monospace;font-size:12px}
.seg button{position:relative;z-index:1;border:0;background:transparent;padding:8px 14px;color:#8A9A8B}
.seg button.is-active{color:#2A2A2A}
.seg__thumb{position:absolute;top:4px;left:4px;width:calc((100% - 8px)/3);height:calc(100% - 8px);background:#fff;border-radius:8px;box-shadow:0 1px 6px rgba(0,0,0,.08);transform:translateX(calc(var(--i)*100%));transition:transform .2s}`,
      props: ['role=group', '--i thumb index', 'active class'],
      tokens: [
        { name: '--seg-bg', value: '#F9F6F0', usage: 'track' },
        { name: '--seg-thumb', value: '#FFFFFF', usage: 'selected surface' },
      ],
      useCases: ['Density toggle', 'View mode', 'Pricing interval'],
    },
    {
      id: 'navigation-bottom-nav',
      name: 'Bottom Nav',
      style: 'glass',
      description: 'Glass bottom navigation for mobile with safe-area padding.',
      html: `<nav class="bnav" aria-label="Mobile">
  <a class="is-active"><span>◧</span><small>Library</small></a>
  <a><span>⌕</span><small>Search</small></a>
  <a><span>✦</span><small>Atelier</small></a>
  <a><span>☺</span><small>You</small></a>
</nav>`,
      css: `.bnav{display:flex;justify-content:space-around;align-items:center;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:rgba(249,246,240,.86);backdrop-filter:blur(12px);border:1px solid #E8E0D5;border-radius:16px}
.bnav a{display:flex;flex-direction:column;align-items:center;gap:2px;text-decoration:none;color:#8A9A8B;font-size:11px;font-family:ui-monospace,monospace}
.bnav a.is-active{color:#2A2A2A}
.bnav a span{font-size:18px}`,
      props: ['safe-area-inset', 'backdrop-filter', 'active state'],
      tokens: [
        { name: '--bnav-glass', value: 'rgba(249,246,240,.86)', usage: 'glass fill' },
        { name: '--bnav-border', value: '#E8E0D5', usage: 'edge' },
      ],
      useCases: ['Mobile app', 'PWA nav', 'Bottom tab bar'],
    },
    {
      id: 'navigation-command-palette-cmdk',
      name: 'Command Palette Cmdk',
      style: 'void',
      description: 'Command palette with search, groups, and keyboard hints.',
      html: `<div class="cmdk" role="dialog" aria-label="Command palette">
  <div class="cmdk__search"><span>⌕</span><input placeholder="Jump to plate, book, token…" /></div>
  <div class="cmdk__group"><h5>Recent</h5><a><b>⌘</b> Open Navigation Book</a><a><b>⌘</b> Go to Atelier</a></div>
  <div class="cmdk__group"><h5>Commands</h5><a>Copy CSS <kbd>↵</kbd></a><a>Toggle theme <kbd>T</kbd></a></div>
</div>`,
      css: `.cmdk{width:480px;max-width:100%;background:#1E2022;color:#F9F6F0;border-radius:16px;border:1px solid #2A2A2A;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.4);font-family:ui-monospace,monospace}
.cmdk__search{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #2A2A2A}
.cmdk__search input{flex:1;background:transparent;border:0;color:#F9F6F0;outline:0;font-size:13px}
.cmdk__group{padding:12px 8px}
.cmdk__group h5{margin:0 8px 6px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.cmdk__group a{display:flex;justify-content:space-between;padding:8px 10px;border-radius:8px;color:#D4C4B0;text-decoration:none}
.cmdk__group a:hover{background:#2A2A2A;color:#fff}`,
      props: ['role=dialog', 'input autofocus', 'kbd hints'],
      tokens: [
        { name: '--cmdk-bg', value: '#1E2022', usage: 'void surface' },
        { name: '--cmdk-muted', value: '#8A9A8B', usage: 'group label' },
      ],
      useCases: ['Power user nav', 'Spotlight', 'Docs quick jump'],
    },
    {
      id: 'navigation-dropdown-menu',
      name: 'Dropdown Menu',
      style: 'corporate',
      description: 'Dropdown menu with icons, shortcuts, and destructive action.',
      html: `<div class="dd">
  <button class="dd__trigger">Actions ▾</button>
  <div class="dd__menu" role="menu">
    <button role="menuitem">⎘ Duplicate <span>⌘D</span></button>
    <button role="menuitem">↗ Export CSS <span>⌘E</span></button>
    <hr />
    <button role="menuitem" class="is-danger">⌫ Delete plate</button>
  </div>
</div>`,
      css: `.dd{position:relative;display:inline-block;font-family:ui-sans-system,sans-serif}
.dd__trigger{border:1px solid #E8E0D5;background:#fff;padding:8px 14px;border-radius:10px;font-size:13px}
.dd__menu{position:absolute;top:calc(100% + 8px);left:0;min-width:200px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.12);padding:6px;display:flex;flex-direction:column}
.dd__menu button{display:flex;justify-content:space-between;gap:16px;border:0;background:transparent;padding:8px 10px;border-radius:8px;font-size:13px;text-align:left}
.dd__menu button:hover{background:#F9F6F0}
.dd__menu hr{border:0;border-top:1px solid #F5F1EB;margin:6px 0}
.dd__menu .is-danger{color:#C17C60}`,
      props: ['role=menu', 'keyboard shortcuts', 'destructive style'],
      tokens: [
        { name: '--dd-bg', value: '#FFFFFF', usage: 'menu surface' },
        { name: '--dd-border', value: '#E8E0D5', usage: 'edge' },
      ],
      useCases: ['Card actions', 'Editor toolbar', 'Row menu'],
    },
    {
      id: 'navigation-context-menu',
      name: 'Context Menu',
      style: 'minimal',
      description: 'Right-click context menu with subtle shadow and groupings.',
      html: `<div class="ctx" role="menu" aria-label="Context">
  <button role="menuitem">Open in new tab</button>
  <button role="menuitem">Copy plate link</button>
  <button role="menuitem">Copy HTML</button>
  <hr />
  <button role="menuitem">Inspect tokens</button>
</div>`,
      css: `.ctx{min-width:200px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:6px;box-shadow:0 16px 40px rgba(0,0,0,.14);font-family:ui-monospace,monospace;font-size:12.5px}
.ctx button{width:100%;border:0;background:transparent;text-align:left;padding:8px 10px;border-radius:8px;color:#2A2A2A}
.ctx button:hover{background:#F9F6F0}
.ctx hr{border:0;border-top:1px solid #F5F1EB;margin:6px 0}`,
      props: ['role=menu', 'right-click trigger', 'group separator'],
      tokens: [
        { name: '--ctx-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--ctx-hover', value: '#F9F6F0', usage: 'hover' },
      ],
      useCases: ['Canvas right-click', 'File explorer', 'Plate actions'],
    },
    {
      id: 'navigation-stepper-horizontal',
      name: 'Stepper Horizontal',
      style: 'corporate',
      description: 'Horizontal stepper with completed, current, and upcoming steps.',
      html: `<ol class="step-h" aria-label="Progress">
  <li class="is-done"><i>✓</i><span>Sources</span></li>
  <li class="is-current"><i>2</i><span>Tokens</span></li>
  <li><i>3</i><span>Plates</span></li>
  <li><i>4</i><span>Ship</span></li>
</ol>`,
      css: `.step-h{display:flex;gap:0;list-style:none;padding:0;margin:0;font-family:ui-monospace,monospace;font-size:12px;counter-reset:step}
.step-h li{flex:1;display:flex;align-items:center;gap:10px;position:relative;padding:10px 12px;color:#8A9A8B;border-bottom:2px solid #E8E0D5}
.step-h li.is-done{color:#2A2A2A;border-bottom-color:#8A9A8B}
.step-h li.is-current{color:#2A2A2A;border-bottom-color:#2A2A2A;font-weight:600}
.step-h li i{width:22px;height:22px;display:grid;place-items:center;border-radius:999px;background:#F5F1EB;border:1px solid #E8E0D5;font-style:normal;font-size:11px}`,
      props: ['ol semantics', 'is-done', 'is-current'],
      tokens: [
        { name: '--step-rule', value: '#E8E0D5', usage: 'track' },
        { name: '--step-active', value: '#2A2A2A', usage: 'current' },
      ],
      useCases: ['Onboarding', 'Checkout flow', 'Multi-step form'],
    },
    {
      id: 'navigation-stepper-vertical',
      name: 'Stepper Vertical',
      style: 'moss',
      description: 'Vertical stepper with connector line and descriptive copy.',
      html: `<ol class="step-v">
  <li class="is-done"><i>✓</i><div><b>Briefed</b><p>Goals locked, tokens picked.</p></div></li>
  <li class="is-current"><i>2</i><div><b>Building plates</b><p>20 components in progress.</p></div></li>
  <li><i>3</i><div><b>Verifying</b><p>Contrast + live check.</p></div></li>
</ol>`,
      css: `.step-v{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0;position:relative}
.step-v li{display:flex;gap:12px;padding:12px 0;position:relative}
.step-v li::before{content:'';position:absolute;left:11px;top:36px;bottom:-6px;width:1px;background:#E8E0D5}
.step-v li:last-child::before{display:none}
.step-v li i{width:22px;height:22px;border-radius:999px;display:grid;place-items:center;background:#F5F1EB;border:1px solid #D4C4B0;font-size:11px;font-style:normal;flex-shrink:0}
.step-v li.is-done i{background:#8A9A8B;color:#fff;border-color:#8A9A8B}
.step-v li.is-current i{background:#2A2A2A;color:#fff}
.step-v b{font-size:13px;display:block}
.step-v p{margin:2px 0 0;font-size:12px;color:#8A9A8B}`,
      props: ['vertical flow', 'connector line', 'descriptive copy'],
      tokens: [
        { name: '--stepv-line', value: '#E8E0D5', usage: 'connector' },
        { name: '--stepv-moss', value: '#8A9A8B', usage: 'done accent' },
      ],
      useCases: ['Setup wizard', 'Timeline progress', 'Build steps'],
    },
    {
      id: 'navigation-anchor-nav',
      name: 'Anchor Nav',
      style: 'editorial',
      description: 'In-page anchor navigation that highlights current section.',
      html: `<nav class="anchor" aria-label="On this page">
  <a href="#intro" class="is-active">Intro</a>
  <a href="#tokens">Tokens</a>
  <a href="#plates">Plates</a>
  <a href="#usage">Usage</a>
</nav>`,
      css: `.anchor{display:flex;gap:16px;padding:10px 14px;background:#fff;border:1px solid #E8E0D5;border-radius:999px;font-family:ui-monospace,monospace;font-size:12px;position:sticky;top:56px}
.anchor a{text-decoration:none;color:#8A9A8B;padding:4px 10px;border-radius:999px}
.anchor a.is-active{background:#2A2A2A;color:#fff}
.anchor a:hover{color:#2A2A2A}`,
      props: ['sticky', 'hash links', 'active via scroll'],
      tokens: [
        { name: '--anchor-bg', value: '#FFFFFF', usage: 'pill container' },
        { name: '--anchor-active', value: '#2A2A2A', usage: 'current' },
      ],
      useCases: ['Long-form docs', 'Article sections', 'Spec pages'],
    },
    {
      id: 'navigation-table-of-contents',
      name: 'Table Of Contents',
      style: 'minimal',
      description: 'Right-rail table of contents with depth indentation and active marker.',
      html: `<nav class="toc" aria-label="Table of contents">
  <h5>On this page</h5>
  <a class="is-active" href="#overview">Overview</a>
  <a href="#api">API — Book</a>
  <a class="is-child" href="#api-plate">↳ Plate</a>
  <a href="#tokens">Design Tokens</a>
  <a href="#a11y">Accessibility</a>
</nav>`,
      css: `.toc{width:200px;padding:12px 0;font-family:ui-monospace,monospace;font-size:12px;display:flex;flex-direction:column;gap:2px}
.toc h5{margin:0 0 8px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8A9A8B}
.toc a{text-decoration:none;color:#8A9A8B;padding:6px 10px;border-left:2px solid transparent}
.toc a.is-active{color:#2A2A2A;border-left-color:#2A2A2A;background:#F9F6F0}
.toc a.is-child{padding-left:22px;font-size:11.5px}`,
      props: ['depth indentation', 'active marker', 'sticky rail'],
      tokens: [
        { name: '--toc-rule', value: '#E8E0D5', usage: 'inactive marker' },
        { name: '--toc-active', value: '#2A2A2A', usage: 'active' },
      ],
      useCases: ['Docs TOC', 'Reading progress', 'API reference'],
    },
    {
      id: 'navigation-skip-links',
      name: 'Skip Links',
      style: 'minimal',
      description: 'Accessible skip links that appear on focus for keyboard users.',
      html: `<div class="skip">
  <a href="#main">Skip to content</a>
  <a href="#toc">Skip to table of contents</a>
</div>
<main id="main" tabindex="-1">Main content landmark</main>`,
      css: `.skip{position:absolute;top:0;left:0;z-index:50;display:flex;gap:8px;padding:6px}
.skip a{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;background:#2A2A2A;color:#fff;padding:8px 12px;border-radius:8px;font-family:ui-monospace,monospace;font-size:12px}
.skip a:focus{position:static;width:auto;height:auto;left:auto}
#main{margin-top:40px;padding:16px;border:1px dashed #E8E0D5;border-radius:10px;color:#8A9A8B}`,
      props: ['visually hidden', 'focus-visible', 'landmark target'],
      tokens: [
        { name: '--skip-bg', value: '#2A2A2A', usage: 'focus surface' },
        { name: '--skip-ink', value: '#FFFFFF', usage: 'focus text' },
      ],
      useCases: ['A11y compliance', 'Keyboard navigation', 'WCAG'],
    },
    {
      id: 'navigation-back-to-top',
      name: 'Back To Top',
      style: 'clay',
      description: 'Clay back-to-top button that appears after scrolling with progress ring.',
      html: `<button class="btt" aria-label="Back to top">
  <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="14" fill="none" stroke="#E8E0D5" stroke-width="3"/><circle cx="18" cy="18" r="14" fill="none" stroke="#8A9A8B" stroke-width="3" stroke-dasharray="88" stroke-dashoffset="26" /></svg>
  <span>↑</span>
</button>`,
      css: `.btt{position:fixed;right:20px;bottom:20px;width:44px;height:44px;border-radius:999px;border:1px solid #E8E0D5;background:#fff;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.12);cursor:pointer}
.btt svg{position:absolute;inset:0;width:44px;height:44px;transform:rotate(-90deg)}
.btt span{position:relative;z-index:1;font-size:14px;color:#2A2A2A}`,
      props: ['fixed position', 'scroll progress', 'aria-label'],
      tokens: [
        { name: '--btt-bg', value: '#FFFFFF', usage: 'button surface' },
        { name: '--btt-track', value: '#E8E0D5', usage: 'progress track' },
      ],
      useCases: ['Long articles', 'Documentation', 'Infinite lists'],
    },
  ],
}
