import type { Book } from '../types.ts'
export const book: Book = {
  id: 'data-display',
  title: 'Data Display',
  volume: 6,
  description: 'Dense information made legible — tables, stats, timelines, and visualizations without chart libraries.',
  color: '#F5F1EB',
  accent: '#1E2022',
  intro: 'Data is not decoration. These plates use scale, rhythm, and mono restraint to make numbers and lists feel editorial.',
  plates: [
    {
      id: 'data-display-table-minimal',
      name: 'Table Minimal',
      style: 'minimal',
      description: 'Minimal table with mono headers and subtle row dividers.',
      html: `<table class="tbl-min">
  <thead><tr><th>Plate</th><th>Style</th><th>Tokens</th></tr></thead>
  <tbody>
    <tr><td>Header Minimal</td><td>minimal</td><td>3</td></tr>
    <tr><td>Sidebar Rail</td><td>moss</td><td>2</td></tr>
    <tr><td>Command Palette</td><td>void</td><td>2</td></tr>
  </tbody>
</table>`,
      css: `.tbl-min{width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:12.5px}
.tbl-min th{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B;text-align:left;padding:8px 10px;border-bottom:1px solid #E8E0D5;font-weight:600}
.tbl-min td{padding:10px;border-bottom:1px solid #F5F1EB;color:#2A2A2A}
.tbl-min tr:last-child td{border-bottom:0}`,
      props: ['thead', 'mono headers', 'row dividers'],
      tokens: [
        { name: '--tbl-head', value: '#8A9A8B', usage: 'header label' },
        { name: '--tbl-rule', value: '#E8E0D5', usage: 'border' },
      ],
      useCases: ['Admin table', 'Design tokens list', 'Simple data'],
    },
    {
      id: 'data-display-table-dense-with-sort',
      name: 'Table Dense With Sort',
      style: 'corporate',
      description: 'Dense sortable table with active sort indicator and sticky header.',
      html: `<div class="tbl-dense__wrap">
<table class="tbl-dense">
  <thead><tr><th>Book <span>▲</span></th><th>Plates</th><th>Status</th><th>Updated</th></tr></thead>
  <tbody>
    <tr><td>Navigation</td><td>20</td><td><i class="dot g"></i> Live</td><td>Aug 22</td></tr>
    <tr><td>Data Display</td><td>20</td><td><i class="dot y"></i> WIP</td><td>Aug 22</td></tr>
    <tr><td>Overlays</td><td>15</td><td><i class="dot"></i> Draft</td><td>Aug 21</td></tr>
  </tbody>
</table>
</div>`,
      css: `.tbl-dense__wrap{border:1px solid #E8E0D5;border-radius:12px;overflow:auto;max-height:240px}
.tbl-dense{width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:12px}
.tbl-dense th{position:sticky;top:0;background:#F9F6F0;padding:8px 12px;text-align:left;border-bottom:1px solid #E8E0D5;font-size:10px;letter-spacing:.08em;text-transform:uppercase}
.tbl-dense td{padding:9px 12px;border-bottom:1px solid #F5F1EB}
.tbl-dense .dot{width:6px;height:6px;border-radius:999px;display:inline-block;background:#D4C4B0;margin-right:6px}
.tbl-dense .dot.g{background:#8A9A8B}.dot.y{background:#C17C60}`,
      props: ['sticky header', 'sort ▲', 'status dot'],
      tokens: [
        { name: '--tbl-dense-bg', value: '#F9F6F0', usage: 'sticky header' },
        { name: '--tbl-dot-live', value: '#8A9A8B', usage: 'live status' },
      ],
      useCases: ['Dashboard table', 'Sortable list', 'Admin data grid'],
    },
    {
      id: 'data-display-stats-4-col',
      name: 'Stats 4 Col',
      style: 'minimal',
      description: 'Four-column stats with large numerals and muted labels.',
      html: `<div class="stats-4">
  <div><b>128</b><span>Plates</span><small>Across 8 books</small></div>
  <div><b>12</b><span>Styles</span><small>Zero deps</small></div>
  <div><b>98%</b><span>Contrast</span><small>WCAG AA</small></div>
  <div><b>44px</b><span>Nav</span><small>Sticky mono</small></div>
</div>`,
      css: `.stats-4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;font-family:ui-monospace,monospace}
.stats-4 div{background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:14px 16px}
.stats-4 b{font-size:22px;display:block;letter-spacing:-0.03em;color:#1E2022}
.stats-4 span{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8A9A8B}
.stats-4 small{display:block;margin-top:6px;font-size:11px;color:#B8A99A}`,
      props: ['grid 4-col', 'big numerals', 'meta small'],
      tokens: [
        { name: '--stat-bg', value: '#FFFFFF', usage: 'card' },
        { name: '--stat-muted', value: '#8A9A8B', usage: 'label' },
      ],
      useCases: ['Dashboard KPI', 'Marketing metrics', 'System overview'],
    },
    {
      id: 'data-display-stats-trend-up-down',
      name: 'Stats Trend Up Down',
      style: 'corporate',
      description: 'Trend stats with up/down indicators and sparkline hint.',
      html: `<div class="stats-trend">
  <div class="stats-trend__card up"><label>Plates built <i>↗ +12%</i></label><b>84 → 96</b><span class="bar"><i style="width:72%"></i></span></div>
  <div class="stats-trend__card down"><label>Build time <i>↘ -18%</i></label><b>4.2s → 3.4s</b><span class="bar"><i style="width:42%"></i></span></div>
</div>`,
      css: `.stats-trend{display:grid;grid-template-columns:1fr 1fr;gap:12px;font-family:ui-monospace,monospace}
.stats-trend__card{border:1px solid #E8E0D5;border-radius:12px;padding:14px;background:#fff}
.stats-trend__card label{display:flex;justify-content:space-between;font-size:11px;color:#8A9A8B;margin-bottom:8px}
.stats-trend__card label i{font-style:normal;padding:2px 6px;border-radius:999px;background:#F5F1EB}
.stats-trend__card.up label i{color:#8A9A8B}
.stats-trend__card.down label i{color:#C17C60}
.stats-trend__card b{font-size:16px;display:block}
.stats-trend__card .bar{display:block;height:3px;background:#F5F1EB;border-radius:999px;margin-top:10px}
.stats-trend__card .bar i{display:block;height:100%;background:#1E2022;border-radius:999px}`,
      props: ['trend %', 'bar hint', 'up/down color'],
      tokens: [
        { name: '--trend-up', value: '#8A9A8B', usage: 'positive' },
        { name: '--trend-down', value: '#C17C60', usage: 'negative' },
      ],
      useCases: ['Analytics KPI', 'Performance stats', 'Growth metrics'],
    },
    {
      id: 'data-display-timeline-vertical',
      name: 'Timeline Vertical',
      style: 'editorial',
      description: 'Vertical editorial timeline with dot markers and date column.',
      html: `<ol class="tl-v">
  <li><time>Aug 21</time><div><b>Japandi v4 locked</b><p>Paper #F9F6F0, terracotta, 44px mono nav.</p></div></li>
  <li><time>Aug 20</time><div><b>Vector hoops shipped</b><p>Map-first 58/42, GraphBFF live.</p></div></li>
  <li><time>Aug 19</time><div><b>Factory reboot</b><p>Zero-deps, real data only.</p></div></li>
</ol>`,
      css: `.tl-v{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0;font-family:Georgia,serif;position:relative}
.tl-v::before{content:'';position:absolute;left:64px;top:8px;bottom:8px;width:1px;background:#E8E0D5}
.tl-v li{display:flex;gap:16px;padding:12px 0;position:relative}
.tl-v time{width:48px;flex-shrink:0;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B;text-align:right;padding-top:2px}
.tl-v li::after{content:'';position:absolute;left:60px;top:18px;width:9px;height:9px;border-radius:999px;background:#F9F6F0;border:2px solid #8A9A8B}
.tl-v b{font-size:13.5px;display:block}
.tl-v p{margin:4px 0 0;font-size:12.5px;color:#8A9A8B;font-family:ui-sans-system,sans-serif}`,
      props: ['time column', 'dot marker', 'vertical line'],
      tokens: [
        { name: '--tl-line', value: '#E8E0D5', usage: 'spine' },
        { name: '--tl-dot', value: '#8A9A8B', usage: 'marker' },
      ],
      useCases: ['Changelog', 'Project history', 'Editorial timeline'],
    },
    {
      id: 'data-display-timeline-horizontal',
      name: 'Timeline Horizontal',
      style: 'minimal',
      description: 'Horizontal scrollable timeline with progress fill.',
      html: `<div class="tl-h">
  <div class="tl-h__track"><i style="width:60%"></i></div>
  <div class="tl-h__steps">
    <span class="is-done">Brief <small>Aug 19</small></span>
    <span class="is-active">Build <small>Now</small></span>
    <span>Verify <small>Next</small></span>
    <span>Ship <small>Aug 23</small></span>
  </div>
</div>`,
      css: `.tl-h{padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;font-family:ui-monospace,monospace;font-size:12px}
.tl-h__track{height:4px;background:#F5F1EB;border-radius:999px;position:relative;overflow:hidden}
.tl-h__track i{display:block;height:100%;background:#1E2022;border-radius:999px}
.tl-h__steps{display:flex;justify-content:space-between;margin-top:12px}
.tl-h__steps span{display:flex;flex-direction:column;gap:2px;color:#8A9A8B}
.tl-h__steps .is-done{color:#2A2A2A}
.tl-h__steps .is-active{color:#2A2A2A;font-weight:600}
.tl-h__steps small{font-size:10px;color:#B8A99A}`,
      props: ['track fill', 'horizontal steps', 'small date'],
      tokens: [
        { name: '--tlh-track', value: '#F5F1EB', usage: 'background track' },
        { name: '--tlh-fill', value: '#1E2022', usage: 'progress' },
      ],
      useCases: ['Roadmap', 'Process steps', 'Milestone bar'],
    },
    {
      id: 'data-display-list-with-avatars',
      name: 'List With Avatars',
      style: 'clay',
      description: 'Cozy list with avatar initials, role, and trailing meta.',
      html: `<ul class="list-av">
  <li><i>SC</i><div><b>Scout Prime</b><span>Factory lead — active now</span></div><small>8 vol</small></li>
  <li><i>CM</i><div><b>Cameron</b><span>Editor — 2h ago</span></div><small>12 plates</small></li>
  <li><i>DT</i><div><b>Dottie</b><span>Model runner — queued</span></div><small>3 jobs</small></li>
</ul>`,
      css: `.list-av{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.list-av li{display:flex;align-items:center;gap:12px;padding:10px 12px;background:#fff;border:1px solid #E8E0D5;border-radius:12px}
.list-av li i{width:32px;height:32px;border-radius:999px;display:grid;place-items:center;background:#F5F1EB;border:1px solid #E8E0D5;font-style:normal;font-size:11px;font-family:ui-monospace,monospace}
.list-av li div{flex:1}
.list-av li b{font-size:12.5px;display:block}
.list-av li span{font-size:11.5px;color:#8A9A8B}
.list-av li small{font-family:ui-monospace,monospace;font-size:11px;color:#B8A99A}`,
      props: ['avatar initials', 'role meta', 'trailing small'],
      tokens: [
        { name: '--listav-bg', value: '#FFFFFF', usage: 'row surface' },
        { name: '--listav-avatar', value: '#F5F1EB', usage: 'avatar bg' },
      ],
      useCases: ['Team list', 'Collaborators', 'Recent activity'],
    },
    {
      id: 'data-display-list-with-actions',
      name: 'List With Actions',
      style: 'minimal',
      description: 'Task list with checkboxes, priority, and inline actions.',
      html: `<ul class="list-act">
  <li><input type="checkbox" checked /><div><b>Ship navigation book</b><span>20 plates — done</span></div><button>↗</button></li>
  <li><input type="checkbox" /><div><b>Verify live browser</b><span>Contrast ≥ 4.5:1</span></div><button>Run</button></li>
  <li><input type="checkbox" /><div><b>Cut release</b><span>Tag + deploy</span></div><button>⋯</button></li>
</ul>`,
      css: `.list-act{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:6px;font-family:ui-monospace,monospace;font-size:12.5px}
.list-act li{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;border:1px solid #E8E0D5;border-radius:10px}
.list-act li div{flex:1}
.list-act li b{font-size:12.5px;display:block;font-weight:600}
.list-act li span{font-size:11px;color:#8A9A8B}
.list-act li button{border:1px solid #E8E0D5;background:#F9F6F0;border-radius:8px;padding:4px 10px;font-size:11px}`,
      props: ['checkbox', 'priority', 'inline actions'],
      tokens: [
        { name: '--listact-bg', value: '#FFFFFF', usage: 'row' },
        { name: '--listact-border', value: '#E8E0D5', usage: 'edge' },
      ],
      useCases: ['Todo list', 'Task queue', 'Review checklist'],
    },
    {
      id: 'data-display-empty-state',
      name: 'Empty State',
      style: 'editorial',
      description: 'Editorial empty state with illustration placeholder and actions.',
      html: `<div class="empty">
  <div class="empty__art">◐</div>
  <h4>No plates yet</h4>
  <p>This book is waiting for its first plate. Start with a minimal table.</p>
  <div class="empty__actions"><button class="pri">New plate</button><button>Import</button></div>
</div>`,
      css: `.empty{display:flex;flex-direction:column;align-items:center;text-align:center;padding:32px 24px;background:#F9F6F0;border:1px dashed #D4C4B0;border-radius:16px}
.empty__art{width:48px;height:48px;border-radius:12px;display:grid;place-items:center;background:#fff;border:1px solid #E8E0D5;font-size:22px;margin-bottom:12px}
.empty h4{margin:0;font-family:Georgia,serif;font-size:16px;color:#2A2A2A}
.empty p{margin:8px 0 0;max-width:28ch;font-size:12.5px;color:#8A9A8B;line-height:1.5}
.empty__actions{display:flex;gap:8px;margin-top:16px}
.empty__actions button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
.empty__actions .pri{background:#2A2A2A;color:#fff;border-color:#2A2A2A}`,
      props: ['illustration slot', 'actions', 'dashed border'],
      tokens: [
        { name: '--empty-bg', value: '#F9F6F0', usage: 'container' },
        { name: '--empty-dash', value: '#D4C4B0', usage: 'border' },
      ],
      useCases: ['Zero data', 'First-run', 'Search no results'],
    },
    {
      id: 'data-display-skeleton-loader',
      name: 'Skeleton Loader',
      style: 'minimal',
      description: 'Skeleton loading pattern with shimmer-friendly blocks.',
      html: `<div class="skel">
  <div class="skel__row"><i style="width:40px;height:40px;border-radius:999px"></i><div><i style="width:120px"></i><i style="width:80px"></i></div></div>
  <div class="skel__lines"><i style="width:100%"></i><i style="width:92%"></i><i style="width:78%"></i></div>
</div>`,
      css: `.skel{padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;display:flex;flex-direction:column;gap:16px}
.skel i{display:block;height:10px;background:linear-gradient(90deg,#F5F1EB 25%,#E8E0D5 50%,#F5F1EB 75%);background-size:200% 100%;border-radius:6px;animation:sk 1.4s infinite}
.skel__row{display:flex;gap:12px;align-items:center}
.skel__row div{display:flex;flex-direction:column;gap:8px}
.skel__lines{display:flex;flex-direction:column;gap:8px}
@keyframes sk{0%{background-position:200% 0}100%{background-position:-200% 0}}`,
      props: ['shimmer', 'row + lines', 'animation'],
      tokens: [
        { name: '--skel-base', value: '#F5F1EB', usage: 'base' },
        { name: '--skel-hi', value: '#E8E0D5', usage: 'shimmer highlight' },
      ],
      useCases: ['Loading state', 'Card placeholder', 'Table loading'],
    },
    {
      id: 'data-display-bar-chart-css-only',
      name: 'Bar Chart Css Only',
      style: 'brutalist',
      description: 'CSS-only bar chart with grid lines and mono values.',
      html: `<div class="barc">
  <div class="barc__grid"><span>100</span><span>50</span><span>0</span></div>
  <div class="barc__bars">
    <div><i style="height:72%"></i><label>Nav</label></div>
    <div><i style="height:88%"></i><label>Data</label></div>
    <div><i style="height:64%"></i><label>Over</label></div>
    <div><i style="height:92%"></i><label>Mkt</label></div>
  </div>
</div>`,
      css: `.barc{display:flex;gap:12px;padding:16px;background:#fff;border:2px solid #1E2022;border-radius:0;font-family:ui-monospace,monospace}
.barc__grid{display:flex;flex-direction:column;justify-content:space-between;font-size:10px;color:#8A9A8B;padding:4px 0}
.barc__bars{display:flex;align-items:end;gap:14px;flex:1;height:120px;border-left:2px solid #1E2022;border-bottom:2px solid #1E2022;padding:0 12px}
.barc__bars div{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}
.barc__bars i{display:block;width:100%;background:#1E2022;min-height:8px}
.barc__bars label{font-size:10px}`,
      props: ['css-only', 'grid lines', 'mono labels'],
      tokens: [
        { name: '--barc-ink', value: '#1E2022', usage: 'bars and axes' },
        { name: '--barc-grid', value: '#E8E0D5', usage: 'grid' },
      ],
      useCases: ['Simple analytics', 'No-JS chart', 'Print-friendly'],
    },
    {
      id: 'data-display-line-sparkline',
      name: 'Line Sparkline',
      style: 'minimal',
      description: 'Inline SVG sparkline with area fill and current dot.',
      html: `<div class="spark">
  <span>Plates / week</span>
  <svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,24 Q10,18 20,20 T40,12 T60,14 T80,6 T100,8 L100,32 L0,32 Z" fill="#F5F1EB" />
    <path d="M0,24 Q10,18 20,20 T40,12 T60,14 T80,6 T100,8" fill="none" stroke="#1E2022" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="100" cy="8" r="2.5" fill="#C17C60" />
  </svg>
  <b>+18% ↗</b>
</div>`,
      css: `.spark{display:inline-flex;align-items:center;gap:12px;padding:10px 14px;background:#fff;border:1px solid #E8E0D5;border-radius:999px;font-family:ui-monospace,monospace;font-size:11px}
.spark svg{width:100px;height:32px;display:block}
.spark span{color:#8A9A8B}
.spark b{color:#2A2A2A;font-weight:700}`,
      props: ['svg path', 'area fill', 'current dot'],
      tokens: [
        { name: '--spark-line', value: '#1E2022', usage: 'line' },
        { name: '--spark-fill', value: '#F5F1EB', usage: 'area' },
      ],
      useCases: ['KPI trend', 'Inline metric', 'Dashboard chip'],
    },
    {
      id: 'data-display-progress-radial',
      name: 'Progress Radial',
      style: 'moss',
      description: 'Radial progress with centered value and moss accent.',
      html: `<div class="rad">
  <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="none" stroke="#E8E0D5" stroke-width="3"/><circle cx="18" cy="18" r="14" fill="none" stroke="#8A9A8B" stroke-width="3" stroke-dasharray="88" stroke-dashoffset="22" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
  <div><b>75%</b><span>Verified</span></div>
</div>`,
      css: `.rad{position:relative;width:96px;height:96px;display:grid;place-items:center;font-family:ui-monospace,monospace}
.rad svg{position:absolute;inset:0;width:100%;height:100%}
.rad div{text-align:center}
.rad b{font-size:16px;display:block;color:#2A2A2A}
.rad span{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}`,
      props: ['svg circle', 'dasharray', 'center label'],
      tokens: [
        { name: '--rad-track', value: '#E8E0D5', usage: 'track' },
        { name: '--rad-fill', value: '#8A9A8B', usage: 'progress' },
      ],
      useCases: ['Completion', 'Score', 'Verification progress'],
    },
    {
      id: 'data-display-progress-linear',
      name: 'Progress Linear',
      style: 'minimal',
      description: 'Linear progress with label, percentage, and striped variant.',
      html: `<div class="plin">
  <div class="plin__head"><span>Building plates</span><span>12 / 20</span></div>
  <div class="plin__track"><i style="width:60%"></i></div>
  <div class="plin__track is-striped"><i style="width:42%"></i></div>
</div>`,
      css: `.plin{display:flex;flex-direction:column;gap:8px;width:260px;font-family:ui-monospace,monospace;font-size:11px}
.plin__head{display:flex;justify-content:space-between;color:#8A9A8B}
.plin__track{height:6px;background:#F5F1EB;border-radius:999px;overflow:hidden;border:1px solid #E8E0D5}
.plin__track i{display:block;height:100%;background:#1E2022;border-radius:999px}
.plin__track.is-striped i{background:repeating-linear-gradient(45deg,#1E2022 0 8px,#2A2A2A 8px 16px)}`,
      props: ['track', 'label + value', 'striped variant'],
      tokens: [
        { name: '--plin-track', value: '#F5F1EB', usage: 'background' },
        { name: '--plin-fill', value: '#1E2022', usage: 'fill' },
      ],
      useCases: ['Build progress', 'Upload', 'Onboarding'],
    },
    {
      id: 'data-display-badge-count',
      name: 'Badge Count',
      style: 'playful',
      description: 'Count badges with dot, number, and overflow +9 styles.',
      html: `<div class="badges">
  <span class="badge"><i>Library</i><b>3</b></span>
  <span class="badge"><i>Inbox</i><b class="is-dot"></b></span>
  <span class="badge"><i>Plates</i><b>99+</b></span>
</div>`,
      css: `.badges{display:flex;gap:10px;font-family:ui-monospace,monospace;font-size:12px}
.badge{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;background:#fff;border:1px solid #E8E0D5;border-radius:999px}
.badge i{font-style:normal;color:#8A9A8B}
.badge b{min-width:20px;height:20px;display:grid;place-items:center;background:#1E2022;color:#fff;border-radius:999px;font-size:11px;padding:0 6px}
.badge b.is-dot{width:8px;min-width:8px;height:8px;padding:0;background:#C17C60}`,
      props: ['count', 'dot variant', 'overflow 99+'],
      tokens: [
        { name: '--badge-bg', value: '#FFFFFF', usage: 'pill' },
        { name: '--badge-ink', value: '#1E2022', usage: 'count' },
      ],
      useCases: ['Nav counts', 'Notifications', 'Inbox'],
    },
    {
      id: 'data-display-tag-cloud',
      name: 'Tag Cloud',
      style: 'terracotta',
      description: 'Wrapping tag cloud with terracotta accent and mono sizing.',
      html: `<div class="cloud">
  <a>minimal</a><a class="is-lg">moss</a><a>clay</a><a class="is-active">terracotta</a><a>void</a><a>glass</a><a>editorial</a><a>brutalist</a><a>playful</a>
</div>`,
      css: `.cloud{display:flex;flex-wrap:wrap;gap:8px;max-width:320px}
.cloud a{padding:6px 12px;border-radius:999px;border:1px solid #E8E0D5;background:#fff;font-family:ui-monospace,monospace;font-size:11.5px;color:#2A2A2A;text-decoration:none}
.cloud a.is-lg{font-size:13px;padding:8px 14px}
.cloud a.is-active{background:#C17C60;color:#fff;border-color:#C17C60;font-weight:600}`,
      props: ['wrapping', 'size variant', 'active terracotta'],
      tokens: [
        { name: '--cloud-bg', value: '#FFFFFF', usage: 'tag' },
        { name: '--cloud-active', value: '#C17C60', usage: 'selected' },
      ],
      useCases: ['Style filter', 'Topic cloud', 'Search tags'],
    },
    {
      id: 'data-display-definition-list',
      name: 'Definition List',
      style: 'editorial',
      description: 'Editorial definition list with serif terms and mono descriptions.',
      html: `<dl class="def">
  <div><dt>Plate</dt><dd>A single component specimen with HTML + CSS + tokens. Each plate is zero-deps and copy-paste ready.</dd></div>
  <div><dt>Book</dt><dd>A volume of plates sharing one concern — forms, navigation, data-display, etc.</dd></div>
  <div><dt>Token</dt><dd>Named value linking color, radius, or type to usage.</dd></div>
</dl>`,
      css: `.def{display:flex;flex-direction:column;gap:0;margin:0;font-family:ui-sans-system,sans-serif}
.def div{display:grid;grid-template-columns:96px 1fr;gap:16px;padding:12px 0;border-bottom:1px solid #F5F1EB}
.def dt{font-family:Georgia,serif;font-weight:700;font-size:13px;color:#2A2A2A}
.def dd{margin:0;font-size:12.5px;color:#8A9A8B;line-height:1.5}`,
      props: ['dl dt dd', 'grid columns', 'serif terms'],
      tokens: [
        { name: '--def-term', value: '#2A2A2A', usage: 'term' },
        { name: '--def-desc', value: '#8A9A8B', usage: 'definition' },
      ],
      useCases: ['Glossary', 'Spec sheet', 'Token docs'],
    },
    {
      id: 'data-display-comparison-table',
      name: 'Comparison Table',
      style: 'corporate',
      description: 'Feature comparison with check/x and highlighted recommended column.',
      html: `<table class="cmp">
  <thead><tr><th>Feature</th><th>Free</th><th class="is-rec">Pro — Rec.</th></tr></thead>
  <tbody>
    <tr><td>Plates</td><td>24</td><td class="is-rec">128</td></tr>
    <tr><td>Tokens</td><td>—</td><td class="is-rec">✓ Full</td></tr>
    <tr><td>Zero-deps</td><td>✓</td><td class="is-rec">✓</td></tr>
  </tbody>
</table>`,
      css: `.cmp{width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:12.5px;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}
.cmp th{text-align:left;padding:10px 12px;background:#F9F6F0;border-bottom:1px solid #E8E0D5;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#8A9A8B}
.cmp td{padding:10px 12px;border-bottom:1px solid #F5F1EB}
.cmp .is-rec{background:#1E2022;color:#F9F6F0}
.cmp th.is-rec{background:#2A2A2A;color:#F9F6F0}`,
      props: ['recommended column', 'check/x', 'border-radius table'],
      tokens: [
        { name: '--cmp-rec', value: '#1E2022', usage: 'highlighted column' },
        { name: '--cmp-bg', value: '#F9F6F0', usage: 'header' },
      ],
      useCases: ['Pricing comparison', 'Plan features', 'Tier matrix'],
    },
    {
      id: 'data-display-kanban-column',
      name: 'Kanban Column',
      style: 'clay',
      description: 'Clay kanban column with cards, assignees, and drag affordance.',
      html: `<div class="kan">
  <div class="kan__head"><b>In Build</b><span>3</span></div>
  <div class="kan__card"><p>Ship navigation.ts — 20 plates</p><div class="kan__meta"><i>SC</i><small>High</small></div></div>
  <div class="kan__card"><p>Verify contrast ≥ 8.0</p><div class="kan__meta"><i>CM</i><small>Med</small></div></div>
  <button class="kan__add">+ Add plate</button>
</div>`,
      css: `.kan{width:260px;background:#F5F1EB;border:1px solid #E8E0D5;border-radius:14px;padding:10px;display:flex;flex-direction:column;gap:10px}
.kan__head{display:flex;justify-content:space-between;align-items:center;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B;padding:4px 4px 2px}
.kan__head span{background:#fff;border:1px solid #E8E0D5;border-radius:999px;padding:2px 8px;font-size:10px}
.kan__card{background:#fff;border:1px solid #E8E0D5;border-radius:10px;padding:10px 12px;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.kan__card p{margin:0;font-size:12.5px;color:#2A2A2A}
.kan__meta{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
.kan__meta i{width:20px;height:20px;border-radius:999px;display:grid;place-items:center;background:#F5F1EB;font-style:normal;font-size:10px}
.kan__meta small{font-size:10px;color:#8A9A8B;border:1px solid #E8E0D5;border-radius:999px;padding:2px 6px}
.kan__add{border:1px dashed #D4C4B0;background:transparent;border-radius:10px;padding:8px;font-size:12px;color:#8A9A8B}`,
      props: ['column head', 'card meta', 'add dashed'],
      tokens: [
        { name: '--kan-bg', value: '#F5F1EB', usage: 'column' },
        { name: '--kan-card', value: '#FFFFFF', usage: 'card surface' },
      ],
      useCases: ['Project board', 'Sprint column', 'Pipeline'],
    },
    {
      id: 'data-display-metric-card',
      name: 'Metric Card',
      style: 'terracotta',
      description: 'Single metric card with large value, delta, and mini bar.',
      html: `<div class="metric">
  <label>Plates shipped</label>
  <div class="metric__row"><b>96</b><span class="up">↗ 12%</span></div>
  <div class="metric__bar"><i style="width:74%"></i></div>
  <small>Across 8 books • target 128</small>
</div>`,
      css: `.metric{padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;font-family:ui-monospace,monospace;min-width:220px}
.metric label{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B;display:block;margin-bottom:8px}
.metric__row{display:flex;align-items:baseline;gap:10px}
.metric b{font-size:26px;letter-spacing:-0.03em;color:#1E2022}
.metric .up{font-size:11px;padding:3px 8px;border-radius:999px;background:#F5F1EB;color:#8A9A8B}
.metric__bar{height:4px;background:#F5F1EB;border-radius:999px;margin-top:10px;overflow:hidden}
.metric__bar i{display:block;height:100%;background:#C17C60;border-radius:999px}
.metric small{display:block;margin-top:8px;font-size:11px;color:#B8A99A}`,
      props: ['large value', 'delta pill', 'mini bar'],
      tokens: [
        { name: '--metric-bar', value: '#C17C60', usage: 'progress fill' },
        { name: '--metric-muted', value: '#8A9A8B', usage: 'label' },
      ],
      useCases: ['KPI card', 'Dashboard metric', 'Progress summary'],
    },
  ],
}
