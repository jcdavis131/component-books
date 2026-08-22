export type VizPractice = {
  id: string
  title: string
  subtitle: string
  rule: string
  why: string
  lineage: string
  doList: string[]
  dontList: string[]
  pairedPlates: { bookId: string; plateId: string; why: string }[]
  exampleHtml?: string
  exampleCss?: string
}

export const vizPractices: VizPractice[] = [
  {
    id: 'tables-are-truth',
    title: 'Tables are Truth',
    subtitle: 'Tufte • 44px rows • tabular numbers • sort',
    rule: 'When exact values matter for comparison, use a dense table — not a chart.',
    why: 'Position along a common scale is the most accurate visual judgment (Cleveland & McGill). A table gives you exact values, sortable, 30mph readable like a train schedule. Bloomberg proves density works when rows are 44px min, mono tabular, and sort is visible.',
    lineage: 'Edward Tufte • Cleveland & McGill 1984 • Bloomberg terminal • Japanese train schedule • Swiss grid',
    doList: [
      '44px row minimum — thumb target, keyboardable',
      'Tabular numbers (font-variant-numeric: tabular-nums) — columns align',
      'Sort affordance visible — arrow, not hidden hover',
      'Sticky header 44px, mono small caps — provenance: Vignelli airport signage',
      'Zebra optional — use hairline rules instead of heavy stripes',
      'Empty state with spec — not lorem'
    ],
    dontList: [
      'Bar chart when exact values are the job — table is truth',
      'Center-aligned numbers — right-align numeric, left-align text',
      'Ghost sort — if sortable, show it',
      'Truncating without tooltip — if it matters, it shows'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Dense with sort, tabular, 44px rows — Bloomberg density' },
      { bookId: 'data-display', plateId: 'data-display-table-minimal', why: 'Minimal for light comparison — hairline, not stripes' }
    ],
    exampleHtml: `<table style="width:100%;border-collapse:collapse;font-family:ui-monospace;font-size:12px">
  <thead><tr style="border-bottom:1px solid #E8E0D5;text-transform:uppercase;letter-spacing:.08em;font-size:10px;color:#9C958A"><th style="text-align:left;padding:8px 12px">Account</th><th style="text-align:right;padding:8px 12px">Balance</th><th style="text-align:right;padding:8px 12px">↕ Change</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px dashed #F6F0E8"><td style="padding:10px 12px">Operations • USD</td><td style="text-align:right;padding:10px 12px;font-variant-numeric:tabular-nums">$48,291.00</td><td style="text-align:right;padding:10px 12px;font-variant-numeric:tabular-nums;color:#2E5A45">+2.4%</td></tr>
    <tr><td style="padding:10px 12px">Reserve • USD</td><td style="text-align:right;padding:10px 12px;font-variant-numeric:tabular-nums">$12,104.50</td><td style="text-align:right;padding:10px 12px;font-variant-numeric:tabular-nums;color:#7A3A2F">-0.8%</td></tr>
  </tbody>
</table>`,
    exampleCss: `td{font-variant-numeric:tabular-nums} th{font-family:ui-monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase} tr{height:44px}`
  },
  {
    id: 'stats-4-col',
    title: 'Stats 4-col — At a Glance',
    subtitle: 'Trend • 30mph • mono tabular • glanceable',
    rule: 'Four KPIs, trend up/down, mono tabular — readable at 30mph like airport signage.',
    why: 'Vignelli taught that signage must work at 30mph. Stats are signage for data. Four columns is max before comparison breaks — more than four, use a table. Trend is context, not decoration: up with value, down with reason.',
    lineage: 'Massimo Vignelli airport signage • Bloomberg KPI row • Linear dashboard • Cleveland & McGill position',
    doList: [
      '4 columns max — more = table',
      'Label mono 10px uppercase, value 22px serif display or mono 18px tabular',
      'Trend with number: +12% not just ↑ — context over icon',
      'Tabular numbers everywhere — columns align when scanning',
      'Color for meaning: moss for up good, oxblood for down warn — not green/red alarm unless alarm'
    ],
    dontList: [
      '6+ KPIs in row — becomes noise, use table',
      'Trend icon alone — ↑ means nothing without +12%',
      'Centered stats — left-align for scan',
      'Chart when 4 numbers will do'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-stats-4-col', why: '4-col, trend, tabular — truth at glance' },
      { bookId: 'data-display', plateId: 'data-display-stats-trend-up-down', why: 'Up/down with context, mono tabular' }
    ],
    exampleHtml: `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#E8E0D5;border:1px solid #E8E0D5;border-radius:10px;overflow:hidden;font-family:ui-monospace">
  <div style="background:#FFFEFB;padding:12px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Revenue</div><div style="font-size:18px;font-variant-numeric:tabular-nums;margin-top:4px">$48.2k</div><div style="font-size:11px;color:#2E5A45;margin-top:2px">+12% vs last</div></div>
  <div style="background:#FFFEFB;padding:12px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Active</div><div style="font-size:18px;font-variant-numeric:tabular-nums;margin-top:4px">1,284</div><div style="font-size:11px;color:#2E5A45;margin-top:2px">+4.1%</div></div>
  <div style="background:#FFFEFB;padding:12px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Churn</div><div style="font-size:18px;font-variant-numeric:tabular-nums;margin-top:4px">2.4%</div><div style="font-size:11px;color:#7A3A2F;margin-top:2px">+0.3%</div></div>
  <div style="background:#FFFEFB;padding:12px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">NPS</div><div style="font-size:18px;font-variant-numeric:tabular-nums;margin-top:4px">62</div><div style="font-size:11px;color:#9C958A;margin-top:2px">— same</div></div>
</div>`,
    exampleCss: `.kpi{font-variant-numeric:tabular-nums} .label{font-size:10px;letter-spacing:.1em;text-transform:uppercase}`
  },
  {
    id: 'bar-chart-css-only',
    title: 'Bar Chart — CSS-only',
    subtitle: 'Zero JS • 200 bytes • up and to the right',
    rule: 'Bars encode length (Cleveland 2nd most accurate). Use when ranking or distribution matters — not exact values.',
    why: 'Cleveland & McGill: position > length > angle > area > color. Bars use length — honest, 200 bytes, zero JS. Pair with table or stats for exact values. Bloomberg uses CSS-only bars inside tables for density.',
    lineage: 'William Cleveland & Robert McGill 1984 (position/length) • Stephen Few — bars beat pie • Bloomberg inline bars • Tufte — minimal ink',
    doList: [
      'Horizontal bars for ranking — label left, bar right, value at end tabular',
      'Single hue, brass or ink — not rainbow (color is low accuracy)',
      'Zero JS — div width % — fits in pocket',
      'Label 12px, value tabular 11px at end of bar',
      'Max 7-10 bars — more = table'
    ],
    dontList: [
      'Pie when comparison is job — bars beat pie for length judgment (Cleveland)',
      'Vertical bars when labels are long — horizontal reads',
      'Rainbow bars — one hue, value is length not color',
      'Chart lib for 6 bars — 200 bytes CSS, not 200kb JS'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-bar-chart-css-only', why: 'CSS-only bars, zero JS, 200 bytes — honest' },
      { bookId: 'data-display', plateId: 'data-display-stats-4-col', why: 'Pair with stats for exact values — bars show shape' }
    ],
    exampleHtml: `<div style="display:flex;flex-direction:column;gap:8px;font-family:ui-monospace;font-size:12px;max-width:360px">
  <div style="display:grid;grid-template-columns:88px 1fr 48px;gap:8px;align-items:center"><span>Enterprise</span><div style="height:8px;background:#E8E0D5;border-radius:99px;overflow:hidden"><div style="width:84%;height:100%;background:#C9A86A"></div></div><span style="text-align:right;font-variant-numeric:tabular-nums">84%</span></div>
  <div style="display:grid;grid-template-columns:88px 1fr 48px;gap:8px;align-items:center"><span>Pro</span><div style="height:8px;background:#E8E0D5;border-radius:99px;overflow:hidden"><div style="width:52%;height:100%;background:#C9A86A"></div></div><span style="text-align:right;font-variant-numeric:tabular-nums">52%</span></div>
  <div style="display:grid;grid-template-columns:88px 1fr 48px;gap:8px;align-items:center"><span>Starter</span><div style="height:8px;background:#E8E0D5;border-radius:99px;overflow:hidden"><div style="width:22%;height:100%;background:#C9A86A"></div></div><span style="text-align:right;font-variant-numeric:tabular-nums">22%</span></div>
</div>`,
    exampleCss: `.bar{height:8px;background:#E8E0D5;border-radius:99px;overflow:hidden} .fill{height:100%;background:#C9A86A}`
  },
  {
    id: 'sparkline',
    title: 'Sparkline — Inline Context',
    subtitle: 'Tufte inline • no axes • word-sized',
    rule: 'Sparkline is adjective, not noun — inline, no axes, 60px wide, context for a number.',
    why: 'Tufte: word-sized graphic that lives in line with text or table. No axes, no legend — context is the number it sits next to. Bloomberg puts sparklines inside table cells for trend without leaving row. Use inside table, metric card, prose — not as hero.',
    lineage: 'Edward Tufte — Beautiful Evidence (sparkline) • Bloomberg inline trend • word-sized graphic',
    doList: [
      'Inline with number — $48.2k + sparkline — adjective',
      '60px wide, 16px tall — word-sized',
      'No axes, no grid, no tooltip — context is the number',
      'Single stroke, brass or ink — not area fill',
      'SVG or CSS clip — zero JS, inline'
    ],
    dontList: [
      'Full chart when inline will do — sparkline is context, not hero',
      'Axes, grid, legend — too much for 60px',
      'Area fill — stroke only, minimal ink',
      'Standalone chart titled "Trend" — lives next to number'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-line-sparkline', why: 'Inline, no axes, 60px — Tufte word-sized' },
      { bookId: 'cards', plateId: 'cards-metric-sparkline', why: 'Metric card with sparkline inline — adjective' }
    ],
    exampleHtml: `<div style="display:flex;align-items:baseline;gap:10px;font-family:ui-monospace">
  <span style="font-size:18px;font-variant-numeric:tabular-nums">$48.2k</span>
  <svg width="60" height="16" viewBox="0 0 60 16" style="overflow:visible"><path d="M0 12 L10 10 L20 11 L30 6 L40 8 L50 3 L60 5" fill="none" stroke="#C9A86A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span style="font-size:11px;color:#2E5A45">+12%</span>
</div>`,
    exampleCss: `svg{overflow:visible} path{fill:none;stroke:#C9A86A;stroke-width:1.2;stroke-linecap:round}`
  },
  {
    id: 'timeline-vertical',
    title: 'Timeline Vertical — When',
    subtitle: 'When did what • clear hierarchy • changelog',
    rule: 'Vertical when time is narrative — when did what happen, clear hierarchy, mono date, serif what.',
    why: 'Eames timeline: time as story, not axis. Vertical reads as narrative — top is past, bottom is present. Use mono 10px for when, serif 13px for what, brass dot for mark. Horizontal when time is compact and comparative.',
    lineage: 'Charles & Ray Eames timeline • library catalog • changelog • case study — when matters',
    doList: [
      'Vertical for narrative — mono date 10px uppercase, title 13px serif',
      'Brass dot 6px with ring — mark, not decoration',
      'Hairline 1px brass rule connecting — continuity',
      'Left-align, 24px gap between items — breath',
      'One sentence what — not paragraph'
    ],
    dontList: [
      'Table when order is time — timeline shows narrative',
      'Horizontal when story is long — vertical reads',
      'Dots without rule — needs continuity',
      'Paragraph per item — one sentence'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-timeline-vertical', why: 'Vertical, when → what, brass dot, clear hierarchy' },
      { bookId: 'data-display', plateId: 'data-display-timeline-horizontal', why: 'Horizontal when time is compact — comparative' }
    ],
    exampleHtml: `<div style="position:relative;padding-left:24px;font-family:ui-monospace;font-size:12px;display:flex;flex-direction:column;gap:16px">
  <div style="position:absolute;left:4px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,#C9A86A,transparent)"></div>
  <div style="position:relative"><div style="position:absolute;left:-20px;top:4px;width:6px;height:6px;border-radius:50%;background:#C9A86A;border:1px solid #8A6B3E"></div><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">2026-08-20</div><div style="font-family:Iowan Old Style,serif;font-size:13px;margin-top:2px">Shipped bhenre.com — 214 plates live</div></div>
  <div style="position:relative"><div style="position:absolute;left:-20px;top:4px;width:6px;height:6px;border-radius:50%;background:#FFFEFB;border:1px solid #C9A86A"></div><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">2026-08-19</div><div style="font-family:Iowan Old Style,serif;font-size:13px;margin-top:2px">Tokens as material — ivory, brass, ink</div></div>
</div>`,
    exampleCss: `.dot{width:6px;height:6px;border-radius:50%;background:#C9A86A;border:1px solid #8A6B3E}`
  },
  {
    id: 'kanban',
    title: 'Kanban — Move Cards, Not Decoration',
    subtitle: 'Columns • move • filing cabinet',
    rule: 'Kanban shows status, not data — columns, move cards, filing cabinet logic.',
    why: 'Toyota kanban: visual signal for flow. Columns are status, cards are work, move is progress. No decoration — card is minimal border, 12px radius, quiet lift. Use for tasks, pipeline, prioritization — not for exact values.',
    lineage: 'Toyota Production System — kanban • Trello • filing cabinet • ops',
    doList: [
      '3-4 columns max — Todo, Doing, Done or custom',
      'Card minimal border, 12px radius, hairline — not decoration',
      'Column header mono 10px uppercase, count tabular',
      'Move is the interaction — drag or ↑↓, not edit',
      'Empty column shows spec — not blank'
    ],
    dontList: [
      'Table when status is job — kanban shows flow',
      'More than 4 columns — becomes unreadable',
      'Card with chart inside — card is title + assignee + tag, not dashboard',
      'Decoration — no gradient mesh, no neon rim'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-kanban-column', why: 'Column with cards, move, not decoration — filing cabinet' }
    ],
    exampleHtml: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-family:ui-monospace;font-size:11px">
  <div style="background:#F8F2E9;border:1px solid #E8E0D5;border-radius:10px;padding:8px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A;margin-bottom:8px">Todo • 2</div><div style="background:#FFFEFB;border:1px solid #E8E0D5;border-radius:8px;padding:8px;margin-bottom:6px">Ship decision guide</div><div style="background:#FFFEFB;border:1px solid #E8E0D5;border-radius:8px;padding:8px">Add viz practices</div></div>
  <div style="background:#F8F2E9;border:1px solid #E8E0D5;border-radius:10px;padding:8px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A;margin-bottom:8px">Doing • 1</div><div style="background:#FFFEFB;border:1px solid #C9A86A;border-radius:8px;padding:8px">Thinking view polish</div></div>
  <div style="background:#F8F2E9;border:1px solid #E8E0D5;border-radius:10px;padding:8px"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A;margin-bottom:8px">Done • 1</div><div style="background:#FFFEFB;border:1px solid #E8E0D5;border-radius:8px;padding:8px;opacity:.6">Tokens as material</div></div>
</div>`,
    exampleCss: `.column{background:#F8F2E9;border:1px solid #E8E0D5;border-radius:10px;padding:8px}`
  },
  {
    id: 'definition-list',
    title: 'Definition List — Key / Value',
    subtitle: 'Spec sheet • mono label • serif value',
    rule: 'One record, many attributes — use definition list, not table. Mono 10px label, serif 13px value.',
    why: 'Savile Row spec sheet: cut, cloth, measure, folio — measurements, not decoration. Definition list is quietest truth for single record. Use for profile, metadata, spec, product details. Table when many records, definition list when one.',
    lineage: 'Savile Row spec sheet • Braun instruction manual • Muji packaging • editorial marginalia',
    doList: [
      'Label mono 10px uppercase, letter-spacing .1em, color stone-2',
      'Value serif 13px, color ink-2 — quiet hierarchy',
      'Row dashed hairline — not solid rule',
      '24px air between groups — not 12px',
      'One column — not two'
    ],
    dontList: [
      'Table when only one record — definition list is quieter',
      'Two-column definition list — one column reads',
      'Bold label — mono small caps, not bold',
      'Value as mono — serif for value, mono for label'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-definition-list', why: 'Key mono 10px, value serif 13px — spec sheet' },
      { bookId: 'cards', plateId: 'cards-profile', why: 'Profile as definition list, not dashboard' }
    ],
    exampleHtml: `<dl style="margin:0;font-family:ui-monospace;font-size:11px;display:flex;flex-direction:column;gap:0">
  <div style="display:grid;grid-template-columns:88px 1fr;gap:12px;padding:8px 0;border-bottom:1px dashed #E8E0D5"><dt style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Cut</dt><dd style="margin:0;font-family:Iowan Old Style,serif;font-size:13px;color:#5A554E">Minimal pill • 44px • ink on paper</dd></div>
  <div style="display:grid;grid-template-columns:88px 1fr;gap:12px;padding:8px 0;border-bottom:1px dashed #E8E0D5"><dt style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Cloth</dt><dd style="margin:0;font-family:Iowan Old Style,serif;font-size:13px;color:#5A554E">Brass foil • ivory paper • soft north light</dd></div>
  <div style="display:grid;grid-template-columns:88px 1fr;gap:12px;padding:8px 0"><dt style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A">Folio</dt><dd style="margin:0;font-family:Iowan Old Style,serif;font-size:13px;color:#5A554E">003 • Vol. I • Ed. I / 2026</dd></div>
</dl>`,
    exampleCss: `dt{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#9C958A} dd{font-family:Iowan Old Style,serif;font-size:13px}`
  },
  {
    id: 'skeleton-respects-grid',
    title: 'Skeleton that Respects Grid',
    subtitle: 'Not shimmer that lies • 140ms snap',
    rule: 'Skeleton must respect grid — same measure as content, no shimmer that lies, 140ms snap.',
    why: 'Dieter Rams: honest, no theater. Shimmer lies about progress — it moves but doesn’t know. Skeleton that respects grid shows measure (640 prose, 12px card, 44px row) so user sees structure before content. 140ms snap, not 450ms theater — luxury is felt in 140ms.',
    lineage: 'Dieter Rams less but better • Muji honest • Bloomberg — no theater • 140ms luxury',
    doList: [
      'Same measure as content — 640 prose skeleton is 640, not full-bleed',
      'Hairline border, paper-2 fill — not gray block',
      'No shimmer — static, quiet, honest',
      '140ms snap to content — not 450ms spring',
      'Preserves layout shift — no CLS'
    ],
    dontList: [
      'Shimmer that lies — moves but doesn’t know progress',
      'Spinner theater — 200ms theater for 100ms fetch',
      'Gray blocks full-bleed — must respect measure',
      'Skeleton that doesn’t match content measure — causes CLS',
      'Loader covering work — if it matters, it waits quietly'
    ],
    pairedPlates: [
      { bookId: 'data-display', plateId: 'data-display-skeleton-loader', why: 'Skeleton card, respects grid, no shimmer lie' },
      { bookId: 'feedback', plateId: 'feedback-skeleton-card', why: 'Card skeleton, same measure as content — honest' }
    ],
    exampleHtml: `<div style="display:flex;flex-direction:column;gap:8px;max-width:320px">
  <div style="height:14px;background:#F8F2E9;border:1px solid #E8E0D5;border-radius:6px;width:68%"></div>
  <div style="height:10px;background:#F8F2E9;border:1px solid #E8E0D5;border-radius:6px;width:92%"></div>
  <div style="height:10px;background:#F8F2E9;border:1px solid #E8E0D5;border-radius:6px;width:78%"></div>
  <div style="height:72px;background:#FFFEFB;border:1px solid #E8E0D5;border-radius:10px;margin-top:8px"></div>
</div>`,
    exampleCss: `.skeleton{height:10px;background:#F8F2E9;border:1px solid #E8E0D5;border-radius:6px}`
  }
]

export function getPractice(id: string): VizPractice | undefined {
  return vizPractices.find(p => p.id === id)
}

export function getAllPractices(): VizPractice[] {
  return vizPractices
}

export const allPractices = vizPractices
