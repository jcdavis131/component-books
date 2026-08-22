import type { DesignTokens } from './types.ts'

export type DecisionOption = {
  id: string
  label: string
  description: string
  mapsTo: { bookId: string; plateId: string; recommendation: string }[]
  tokens?: Partial<DesignTokens>
  provenance?: string
  avoids?: string
  whenToUse?: string
}

export type DecisionStep = {
  id: string
  title: string
  question: string
  description: string // HTML
  options: DecisionOption[]
  bestPracticeRef?: string
  thinkingRef?: string // id of thinking chapter
}

export const decisionSteps: DecisionStep[] = [
  {
    id: 'intent',
    title: 'Intent',
    question: 'What are you building?',
    description: `
      <p>Every system starts with intent, not components. Name the job and the rest follows.</p>
      <p>We cut for six archetypes — each has a hand, a density, and a proof method. Pick the one that matches how your user arrives: working, browsing, buying, reading, or operating.</p>
    `,
    thinkingRef: 'stack-is-story',
    options: [
      {
        id: 'saas',
        label: 'SaaS Tool',
        description: 'Dashboard, internal tool, founder-led product. User is also builder, at 2am with trackpad.',
        mapsTo: [
          { bookId: 'navigation', plateId: 'navigation-header-minimal', recommendation: '44px sticky, mono, brass rule — disappears until needed' },
          { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', recommendation: 'Dense truth, tabular, sortable' },
          { bookId: 'overlays', plateId: 'overlays-modal-centered', recommendation: 'Interruption with manners' }
        ],
        tokens: { density: 'compact', radius: '8px', shadow: 'soft', accent: '#141210', paper: '#FFFEFB' },
        provenance: 'Linear + Bloomberg + Braun — tools that get out of the way',
        avoids: 'Airy density, 24px inflated radius, terracotta warmth — too soft for tools',
        whenToUse: 'Ops, dashboards, admin, founder tools'
      },
      {
        id: 'marketing',
        label: 'Editorial Marketing',
        description: 'Brand site, SSENSE-like proof. Show cloth, not "trusted by 10k." Serif headline, 36ch, mono kicker.',
        mapsTo: [
          { bookId: 'marketing', plateId: 'marketing-hero-editorial', recommendation: 'Editorial hero, 58/42 with mockup — window display' },
          { bookId: 'marketing', plateId: 'marketing-feature-grid-3', recommendation: 'Three rooms, 16px icons, narrative not decoration' },
          { bookId: 'marketing', plateId: 'marketing-pricing-tier-3', recommendation: 'Price visible, middle highlighted brass' }
        ],
        tokens: { density: 'airy', radius: '12px', shadow: 'soft', accent: '#C9A86A', paper: '#FFFEFB' },
        provenance: 'SSENSE + Pudding + 10 Corso Como — proof over promise',
        avoids: 'Compact density, brutal shadow — too sharp for afternoon light',
        whenToUse: 'Brand, lookbook, portfolio where story is product'
      },
      {
        id: 'store',
        label: 'Design Store / Checkout',
        description: 'Commerce where trust is the product. Aritzia till + Apple bag — slim, secure, easy to close.',
        mapsTo: [
          { bookId: 'commerce', plateId: 'product-card-minimal', recommendation: 'Image, name, price, ATC — no dark pattern' },
          { bookId: 'commerce', plateId: 'cart-line-item', recommendation: '44px min, tabular, keyboardable' },
          { bookId: 'commerce', plateId: 'order-summary', recommendation: 'Dense where needed: subtotal, shipping, tax, total' }
        ],
        tokens: { density: 'cozy', radius: '12px', shadow: 'soft', accent: '#4A1C1C', paper: '#FFFEFB' },
        provenance: 'Aritzia + Dover Street Market + Apple — till as furniture',
        avoids: 'Ghost primary, brutal offset — too sharp for money',
        whenToUse: 'Store, checkout, products that need trust'
      },
      {
        id: 'portfolio',
        label: 'Atelier / Portfolio',
        description: 'Personal, studio, essay. 58/42 map/story, 72vh sticky for orienting, 640 prose for reading.',
        mapsTo: [
          { bookId: 'layouts', plateId: 'layouts-centered-prose-640', recommendation: 'Centered 640 where you sit down' },
          { bookId: 'media', plateId: 'media-gallery-masonry', recommendation: 'Work as rooms, not decoration' },
          { bookId: 'layouts', plateId: 'layouts-breakout-1100', recommendation: 'Step closer, full-bleed moment' }
        ],
        tokens: { density: 'airy', radius: '12px', shadow: 'soft', accent: '#1B3329', paper: '#FFFEFB' },
        provenance: 'Case Study Houses + Hay + Muji — sit, see, step closer',
        avoids: 'Compact, brutal — too dense for reading',
        whenToUse: 'Portfolio, studio, editorial'
      },
      {
        id: 'ops',
        label: 'Ops / Data-Dense',
        description: 'Internal tools that deserve good design. Moss, stone paper, Swiss corporate, tabular everywhere.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', recommendation: 'Bloomberg density, not marketing air' },
          { bookId: 'data-display', plateId: 'data-display-kanban-column', recommendation: 'Move cards, not decoration' },
          { bookId: 'feedback', plateId: 'feedback-skeleton-card', recommendation: 'Skeleton that respects grid' }
        ],
        tokens: { density: 'compact', radius: '8px', shadow: 'soft', accent: '#8A9A8B', paper: '#F5F1EB' },
        provenance: 'Bloomberg + Swiss grid + filing cabinet — built to last',
        avoids: 'Airy, terracotta — too warm for ops',
        whenToUse: 'Admin, archive, power-user tools'
      },
      {
        id: 'void',
        label: 'Void — After Hours',
        description: 'Dark mode done right. Glass on void, neon rim, magnetic hover. Dashboards that feel like night.',
        mapsTo: [
          { bookId: 'cards', plateId: 'cards-glass-frosted', recommendation: 'Frosted depth without fogging' },
          { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk', recommendation: 'Cmdk fast, for night work' },
          { bookId: 'buttons', plateId: 'buttons-glass-morphism', recommendation: 'Holds over video, neon rim' }
        ],
        tokens: { density: 'cozy', radius: '16px', shadow: 'layered', accent: '#8A9A8B', paper: '#1E2022', ink: '#FFFEFB' },
        provenance: 'Vercel + Linear + Apple Vision — glass that holds',
        avoids: 'Terracotta — too warm for void',
        whenToUse: 'Night dashboards, command palettes, hero dark'
      }
    ]
  },
  {
    id: 'density',
    title: 'Posture',
    question: 'How should it sit?',
    description: `
      <p>Density is posture: standing at a bench, sitting at a table, lying on the floor with proofs spread out.</p>
      <p>Choose posture before you choose plates — it eliminates 70% of bad fits. Compact wants cut corners and tabular. Airy wants breath and serif.</p>
    `,
    thinkingRef: 'tokens-as-material',
    options: [
      {
        id: 'compact',
        label: 'Compact — Standing',
        description: 'Bench work. 44px rows, 8px cut, mono tabular, high information density. Founder at 2am.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', recommendation: 'Tight, sortable, 44px min' },
          { bookId: 'buttons', plateId: 'buttons-minimal-pill', recommendation: 'Small, precise, no ghost' },
          { bookId: 'layouts', plateId: 'layouts-data-grid-12', recommendation: '12-col grid, tight gutters' }
        ],
        tokens: { density: 'compact', radius: '8px' },
        provenance: 'Braun calculator + Bloomberg terminal + tailor standing',
        avoids: '24px inflated, airy prose — too loose for dense work',
        whenToUse: 'SaaS, ops, tables, anything where user is power user'
      },
      {
        id: 'cozy',
        label: 'Cozy — Sitting',
        description: 'Table work. 12px tumbled, generous but not loose. Most products live here.',
        mapsTo: [
          { bookId: 'cards', plateId: 'cards-minimal-border', recommendation: 'Hairline, 12px, quiet lift' },
          { bookId: 'forms', plateId: 'forms-form-shell-sections', recommendation: 'Sections with brass rule — library card clarity' },
          { bookId: 'navigation', plateId: 'navigation-header-minimal', recommendation: '44px sticky, disappears' }
        ],
        tokens: { density: 'cozy', radius: '12px' },
        provenance: 'Hay + Muji + Aesop — sitting at table',
        avoids: 'Brutal 4px offset — too sharp for cozy',
        whenToUse: 'Default for most web apps, commerce, marketing'
      },
      {
        id: 'airy',
        label: 'Airy — Floor',
        description: 'Proofs spread out. 16-24px breath, 640px prose, 1100 breakout. Afternoon light.',
        mapsTo: [
          { bookId: 'layouts', plateId: 'layouts-centered-prose-640', recommendation: '640px where you sit down' },
          { bookId: 'marketing', plateId: 'marketing-hero-editorial', recommendation: 'Serif headline, 36ch, mono kicker' },
          { bookId: 'media', plateId: 'media-gallery-masonry', recommendation: 'Masonry, work as rooms' }
        ],
        tokens: { density: 'airy', radius: '16px' },
        provenance: 'Pudding 58/42 + The Row + studio floor — lying with proofs',
        avoids: 'Compact tables, brutal shadows — too sharp for reading',
        whenToUse: 'Marketing, editorial, portfolio, story'
      }
    ]
  },
  {
    id: 'material',
    title: 'Material',
    question: 'What is it made of?',
    description: `
      <p>Tokens are material, not hex codes. Pick paper, then ink, then accent — in that order. If paper and ink feel right alone, accent is decoration.</p>
      <p>Brass is brushed, not polished. Ivory is warm paper in sun. Ink is dried slightly brown at edge. Choose feeling before rectangle.</p>
    `,
    thinkingRef: 'tokens-as-material',
    options: [
      {
        id: 'ivory-brass',
        label: 'Ivory & Brass',
        description: 'Warm paper #FFFEFB, ink #141210, brass #C9A86A foil. Permanent collection, letterpress.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-grotesk-sans', recommendation: 'Grotesk sans, brass rule, ivory ground' },
          { bookId: 'cards', plateId: 'cards-minimal-border', recommendation: 'Hairline, brass hover' }
        ],
        tokens: { paper: '#FFFEFB', ink: '#141210', accent: '#C9A86A', shadow: 'soft' },
        provenance: 'Bauhaus + Japanese joinery + Aesop atelier — paper you want to hold',
        avoids: 'Neon, glass — too cold for ivory',
        whenToUse: 'Default — most products, SaaS, marketing, store'
      },
      {
        id: 'stone-moss',
        label: 'Stone & Moss',
        description: 'Stone paper #F5F1EB, forest #1B3329, moss #8A9A8B. Archive, ops, tools that last.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-mono-stack', recommendation: 'Mono stack, tabular, stone ground' },
          { bookId: 'data-display', plateId: 'data-display-definition-list', recommendation: 'Key/value, stone paper, forest accent' }
        ],
        tokens: { paper: '#F5F1EB', ink: '#141210', accent: '#8A9A8B', shadow: 'soft' },
        provenance: 'Swiss corporate + filing cabinet + forest floor',
        avoids: 'Terracotta — too warm for stone',
        whenToUse: 'Ops, admin, archive, internal tools'
      },
      {
        id: 'ink-foil',
        label: 'Ink & Foil',
        description: 'Ink paper #141210, ivory type, brass foil. Ex Libris, No. 001/500, night.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-palette-void-glass', recommendation: 'Void #1E2022, brass on ink, glass' },
          { bookId: 'cards', plateId: 'cards-glass-frosted', recommendation: 'Frosted on ink, brass rule' }
        ],
        tokens: { paper: '#141210', ink: '#FFFEFB', accent: '#E8D5A8', shadow: 'layered' },
        provenance: 'Letterpress + Ex Libris + brass plate — night edition',
        avoids: 'Oxblood on ink — too heavy',
        whenToUse: 'Dark mode, void dashboards, premium editions'
      },
      {
        id: 'oxblood-clay',
        label: 'Oxblood & Clay',
        description: 'Oxblood #4A1C1C, clay #E8D5A8, ivory. Warm, editorial, Aritzia till.',
        mapsTo: [
          { bookId: 'commerce', plateId: 'product-card-minimal', recommendation: 'Oxblood accent, warm stone' },
          { bookId: 'marketing', plateId: 'marketing-cta-banner', recommendation: 'Terracotta banner, afternoon light' }
        ],
        tokens: { paper: '#FFFEFB', ink: '#141210', accent: '#4A1C1C', shadow: 'soft' },
        provenance: 'Aritzia + Assouline + fired clay — warm hand',
        avoids: 'Void, neon — too cold for clay',
        whenToUse: 'Commerce, editorial, marketing warm'
      },
      {
        id: 'void-glass',
        label: 'Void & Glass',
        description: 'Void #1E2022, glass texture, brass #C9A86A rim. Vercel, Linear, Vision — holds over video.',
        mapsTo: [
          { bookId: 'cards', plateId: 'cards-glass-frosted', recommendation: 'Glass frosted, brass rim, holds over video' },
          { bookId: 'overlays', plateId: 'overlays-command-dialog', recommendation: 'Command dialog, glass depth' }
        ],
        tokens: { paper: '#1E2022', ink: '#FFFEFB', accent: '#C9A86A', shadow: 'layered', radius: '16px' },
        provenance: 'Vercel + Linear + glass that doesn’t fog',
        avoids: 'Oxblood — too warm for void',
        whenToUse: 'Night dashboards, hero dark, command palettes'
      }
    ]
  },
  {
    id: 'structure',
    title: 'Structure',
    question: 'How does it tell the story?',
    description: `
      <p>The stack is the story. Order creates narrative — you write the stack as a sentence before you pick plates.</p>
      <p>58/42 is map/story: 72vh sticky for orienting, 640 prose for reading. Breakout 1100 is stepping closer. Centered 640 is sitting down.</p>
    `,
    thinkingRef: 'stack-is-story',
    options: [
      {
        id: 'dashboard',
        label: 'Dashboard — Orient, Prove, Act',
        description: 'Header minimal → sidebar → stats 4-col → table dense → command palette. Founder stack.',
        mapsTo: [
          { bookId: 'navigation', plateId: 'navigation-header-minimal', recommendation: '44px sticky, mono' },
          { bookId: 'data-display', plateId: 'data-display-stats-4-col', recommendation: 'Truth at glance, 30mph' },
          { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', recommendation: 'Dense, sortable, tabular' }
        ],
        provenance: 'Linear + Bloomberg — orient in 2s, prove in 10, act in 1',
        avoids: 'Hero editorial, masonry — you are working, not browsing',
        whenToUse: 'SaaS, ops, internal tools'
      },
      {
        id: 'editorial-58-42',
        label: 'Editorial 58/42 — Map / Story',
        description: 'Pudding-style: sticky map 72vh, prose 640, breakout 1100. Proximity = similarity, layout = argument.',
        mapsTo: [
          { bookId: 'layouts', plateId: 'layouts-58-42-map-story', recommendation: 'Map left sticky, story right prose' },
          { bookId: 'layouts', plateId: 'layouts-centered-prose-640', recommendation: '640 where you sit' },
          { bookId: 'layouts', plateId: 'layouts-breakout-1100', recommendation: 'Step closer, full-bleed' }
        ],
        provenance: 'Pudding.cool + 10 Corso Como floor plan + Case Study Houses',
        avoids: 'Compact tables — too dense for reading',
        whenToUse: 'Essays, explainers, portfolio, data storytelling'
      },
      {
        id: 'marketing-window',
        label: 'Store Window — Promise → Proof → Invite',
        description: 'Hero editorial → feature grid → pricing tier + toggle → testimonial wall → logo cloud → CTA.',
        mapsTo: [
          { bookId: 'marketing', plateId: 'marketing-hero-editorial', recommendation: 'One strong idea, well lit' },
          { bookId: 'marketing', plateId: 'marketing-feature-grid-3', recommendation: 'Three rooms, small icons' },
          { bookId: 'marketing', plateId: 'marketing-testimonial-wall', recommendation: 'Real names, real companies' }
        ],
        provenance: 'SSENSE + Aritzia lookbook + Dover Street window',
        avoids: 'Dense table — too much truth too early',
        whenToUse: 'Marketing sites, brand, pricing pages'
      },
      {
        id: 'centered-prose',
        label: 'Atelier — Sit, See, Step Closer',
        description: 'Centered prose 640 → masonry → breakout 1100 → editorial feature. Studio visit.',
        mapsTo: [
          { bookId: 'layouts', plateId: 'layouts-centered-prose-640', recommendation: 'Centered 640, generous margins' },
          { bookId: 'media', plateId: 'media-gallery-masonry', recommendation: 'Work as rooms' },
          { bookId: 'cards', plateId: 'cards-editorial-feature', recommendation: 'One idea held completely' }
        ],
        provenance: 'Hay + Muji atelier + personal site',
        avoids: 'Sidebar, command palette — too tool-like for studio',
        whenToUse: 'Portfolio, personal, studio, editorial'
      },
      {
        id: 'commerce-till',
        label: 'Till — Browse → Hold → Pay',
        description: 'Product minimal → cart line item → order summary → shipping estimator → confirm. Slim, secure.',
        mapsTo: [
          { bookId: 'commerce', plateId: 'product-card-minimal', recommendation: 'No dark pattern' },
          { bookId: 'commerce', plateId: 'cart-line-item', recommendation: 'Qty, price, remove — 44px' },
          { bookId: 'commerce', plateId: 'order-summary', recommendation: 'No surprise total' }
        ],
        provenance: 'Aritzia + Apple bag + Dover till',
        avoids: 'Ghost CTA for primary — if it matters, it has edge',
        whenToUse: 'Commerce, checkout, products that need trust'
      }
    ]
  },
  {
    id: 'data-proof',
    title: 'Data & Proof',
    question: 'How do you prove it?',
    description: `
      <p>Data is truth. Use the smallest thing that tells the truth — table before chart, stat before dashboard.</p>
      <p>This step pairs directly with Data Visualization best practices. Each option is a practice: when to use, what it avoids, lineage from Tufte, Cleveland & McGill, Few, Bloomberg.</p>
    `,
    bestPracticeRef: 'data-viz',
    thinkingRef: 'applying-to-saas',
    options: [
      {
        id: 'table-dense',
        label: 'Table Dense — Truth',
        description: 'Tufte truth. 44px rows, tabular numbers, sort, 30mph readable. Use when comparison is the job.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', recommendation: 'Dense with sort, tabular, 44px rows — Bloomberg density' },
          { bookId: 'data-display', plateId: 'data-display-table-minimal', recommendation: 'Minimal for light comparison' }
        ],
        provenance: 'Edward Tufte + Bloomberg terminal + Japanese train schedule — truth in rows',
        avoids: 'Bar chart when exact values matter — table is truth',
        whenToUse: 'SaaS, ops, pricing comparison, any exact-value comparison'
      },
      {
        id: 'stats-4-col',
        label: 'Stats 4-col — At a Glance',
        description: 'KPI row, trend up/down, mono tabular. 30mph readable like airport signage.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-stats-4-col', recommendation: '4-col, trend, tabular — glanceable' },
          { bookId: 'data-display', plateId: 'data-display-stats-trend-up-down', recommendation: 'Up/down with context, not just green' }
        ],
        provenance: 'Vignelli airport + Bloomberg + Linear — 30mph',
        avoids: 'Chart when 4 numbers will do — stats before charts',
        whenToUse: 'Dashboards, marketing metrics, ops overview'
      },
      {
        id: 'bar-chart-css',
        label: 'Bar Chart — CSS-only',
        description: 'Zero JS, 200 bytes, up and to the right. Use when distribution or ranking matters, not exact values.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-bar-chart-css-only', recommendation: 'CSS-only bars, no 200kb lib' },
          { bookId: 'data-display', plateId: 'data-display-stats-4-col', recommendation: 'Pair with stats for exact values' }
        ],
        provenance: 'Cleveland & McGill position/length + Few — bars are honest',
        avoids: 'Pie when comparison is job — bars beat pie for length judgment (Cleveland)',
        whenToUse: 'Ranking, distribution, comparison where shape matters'
      },
      {
        id: 'sparkline',
        label: 'Sparkline — Inline Context',
        description: 'Tufte inline, no axes, context in line. Use inside table, card, metric — not as hero.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-line-sparkline', recommendation: 'Inline, no axes, 60px wide — context' },
          { bookId: 'cards', plateId: 'cards-metric-sparkline', recommendation: 'Metric card with sparkline inline' }
        ],
        provenance: 'Edward Tufte sparkline + Bloomberg inline — word-sized graphic',
        avoids: 'Full chart when inline will do — sparkline is adjective, not noun',
        whenToUse: 'Tables, metric cards, inline trend in prose'
      },
      {
        id: 'timeline',
        label: 'Timeline — When',
        description: 'Vertical timeline: when did what happen, clear hierarchy. Use for history, changelog, process.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-timeline-vertical', recommendation: 'Vertical, when → what, clear hierarchy' },
          { bookId: 'data-display', plateId: 'data-display-timeline-horizontal', recommendation: 'Horizontal when time is compact' }
        ],
        provenance: 'Eames timeline + library catalog + changelog — when matters',
        avoids: 'Table when order is time — timeline shows narrative',
        whenToUse: 'Changelog, history, process, project timeline'
      },
      {
        id: 'kanban',
        label: 'Kanban — Move Cards',
        description: 'Columns, move cards not decoration. Use for status, workflow, prioritization.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-kanban-column', recommendation: 'Column with cards, move, not decoration' }
        ],
        provenance: 'Toyota kanban + Trello + filing cabinet — move, not decorate',
        avoids: 'Table when status is job — kanban shows flow',
        whenToUse: 'Ops, tasks, pipeline, prioritization'
      },
      {
        id: 'definition-list',
        label: 'Definition List — Key / Value',
        description: 'Editorial key/value, mono label, serif value. Use for spec, metadata, profile, quiet truth.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-definition-list', recommendation: 'Key mono 10px, value serif 13px — spec sheet' },
          { bookId: 'cards', plateId: 'cards-profile', recommendation: 'Profile as definition list, not dashboard' }
        ],
        provenance: 'Savile Row spec + Braun manual + Muji packaging — measurements, not decoration',
        avoids: 'Table when only one record — definition list is quieter',
        whenToUse: 'Spec, profile, metadata, single-record truth'
      },
      {
        id: 'skeleton',
        label: 'Skeleton — Respects Grid',
        description: 'Skeleton that respects grid, not shimmer that lies. 140ms snap, not 450ms theater.',
        mapsTo: [
          { bookId: 'data-display', plateId: 'data-display-skeleton-loader', recommendation: 'Skeleton card, respects grid, no shimmer lie' },
          { bookId: 'feedback', plateId: 'feedback-skeleton-card', recommendation: 'Card skeleton, same measure as content' }
        ],
        provenance: 'Dieter Rams — honest, no theater — 140ms snap',
        avoids: 'Shimmer, spinner theater — if it matters, it waits quietly',
        whenToUse: 'Loading, any async — skeleton over spinner'
      }
    ]
  },
  {
    id: 'interaction',
    title: 'Interaction & Exchange',
    question: 'How do you ask and tell?',
    description: `
      <p>Forms are conversation, feedback is manners, overlays are interruption. Each needs 44px minimum, keyboardable, focus visible.</p>
      <p>If it matters, it has an edge — no ghost buttons for primary. If it matters, it waits — no toast covering work.</p>
    `,
    thinkingRef: 'quiet-luxury-vs-decoration',
    options: [
      {
        id: 'forms-shell',
        label: 'Form Shell — Library Card',
        description: 'Sections with brass rule, generous hit areas, clear labels. Filling out should feel like library card.',
        mapsTo: [
          { bookId: 'forms', plateId: 'forms-form-shell-sections', recommendation: 'Sections, brass rule, clear grouping' },
          { bookId: 'forms', plateId: 'forms-corporate-dense', recommendation: 'Dense when needed, but always 44px min' }
        ],
        provenance: 'Muji + Braun calculator + library card — clear, generous, no tricks',
        avoids: 'Ghost inputs, placeholder as label — if it matters, it has edge and label',
        whenToUse: 'Settings, onboarding, any multi-section form'
      },
      {
        id: 'feedback-honest',
        label: 'Feedback — Honest 503',
        description: 'Moss for success, terracotta for warn — never red alarm unless alarm. Honest empty, honest error.',
        mapsTo: [
          { bookId: 'feedback', plateId: 'feedback-alert-success', recommendation: 'Moss, not green alarm' },
          { bookId: 'data-display', plateId: 'data-display-empty-state', recommendation: 'Empty with spec, not lorem' }
        ],
        provenance: 'Braun + Muji + honest 503 page — what we tried, why failed, what next',
        avoids: 'Red alarm for warn, toast covering work, spinner that never stops',
        whenToUse: 'Alerts, empty states, errors, any feedback'
      },
      {
        id: 'overlays-manners',
        label: 'Overlays — With Manners',
        description: 'Centered modal, drawer right, bottom sheet, command dialog — each interruption with focus trap, Esc, return focus.',
        mapsTo: [
          { bookId: 'overlays', plateId: 'overlays-modal-centered', recommendation: 'Centered, focus trap, Esc, return focus' },
          { bookId: 'overlays', plateId: 'overlays-drawer-right', recommendation: 'Drawer right for tools, not marketing' },
          { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk', recommendation: 'Cmdk fast, groups, shortcuts' }
        ],
        provenance: 'Dieter Rams + Linear — interruption that feels like screen sliding, not wall appearing',
        avoids: 'Bottom sheet for desktop tools — use drawer; modal for confirmation — use dialog confirm',
        whenToUse: 'Actions, tools, command, any interruption'
      },
      {
        id: 'commerce-checkout',
        label: 'Checkout — Slim, Secure',
        description: 'Product minimal, cart line item, order summary, shipping estimator. Till as furniture — slim, secure, easy to close.',
        mapsTo: [
          { bookId: 'commerce', plateId: 'cart-line-item', recommendation: 'Qty, price, remove — tabular' },
          { bookId: 'commerce', plateId: 'order-summary', recommendation: 'Subtotal, shipping, tax, total — no surprise' },
          { bookId: 'commerce', plateId: 'shipping-estimator', recommendation: 'Inline, honest, fast — no tricks' }
        ],
        provenance: 'Aritzia till + Apple bag — wallet that closes well',
        avoids: 'Dark patterns, "only 2 left" lie, surprise total',
        whenToUse: 'Commerce, checkout, cart, any money exchange'
      }
    ]
  },
  {
    id: 'compose',
    title: 'Compose & Export',
    question: 'How does it ship?',
    description: `
      <p>You don't need 214 plates. You need 10, one per book, that agree on radius, shadow, and how they handle an edge.</p>
      <p>If you can name the hand in one word — clay, brutalist, editorial — the system is coherent. If you need three words, keep picking. Then export as CSS vars, Tailwind, JSON — fits in pocket, opens on train.</p>
    `,
    thinkingRef: 'composing-system-from-plates',
    options: [
      {
        id: 'export-css',
        label: 'Export — CSS Vars',
        description: 'Tokens as CSS vars, scoped, system fonts only. 2.59kB HTML, 31kB CSS, zero-deps.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-grotesk-sans', recommendation: 'System fonts, no fetch, offline-ready' }
        ],
        provenance: 'Dieter Rams less but better + zero-deps as feature',
        avoids: 'npm install component lib that costs more than product',
        whenToUse: 'Always — this is how Bhenre ships'
      },
      {
        id: 'export-tailwind',
        label: 'Tailwind Extension',
        description: 'Accent, paper, ink, radius, font family as Tailwind extend. Keeps hand consistent.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-grotesk-sans', recommendation: 'Grotesk + mono stack, brass accent' }
        ],
        provenance: 'Tailwind + brass foil — hand preserved',
        avoids: 'Inventing tokens per plate — global hand',
        whenToUse: 'Tailwind projects, teams that already use TW'
      },
      {
        id: 'export-json',
        label: 'JSON Tokens',
        description: 'Design tokens as JSON for Figma, Style Dictionary, any pipeline. Paper → Ink → Accent.',
        mapsTo: [
          { bookId: 'foundations', plateId: 'foundations-grotesk-sans', recommendation: 'Material before color — name it brass' }
        ],
        provenance: 'Material → color — atelier tables',
        avoids: 'Hex codes without material name',
        whenToUse: 'Design → dev handoff, Figma, token pipelines'
      }
    ]
  }
]

export function getDecisionStep(id: string): DecisionStep | undefined {
  return decisionSteps.find(s => s.id === id)
}

export function getAllDecisionSteps(): DecisionStep[] {
  return decisionSteps
}

export function getNextStep(currentId: string): DecisionStep | undefined {
  const idx = decisionSteps.findIndex(s => s.id === currentId)
  if (idx >= 0 && idx < decisionSteps.length - 1) return decisionSteps[idx + 1]
  return undefined
}

export function getPrevStep(currentId: string): DecisionStep | undefined {
  const idx = decisionSteps.findIndex(s => s.id === currentId)
  if (idx > 0) return decisionSteps[idx - 1]
  return undefined
}
