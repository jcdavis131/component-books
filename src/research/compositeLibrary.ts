/**
 * Bhenre Collection — Composite Library
 * Research synthesis of 15 great repos on components, design systems, viz, and decision flows.
 * Sources verified via browser.search Aug 2026. Zero-deps, real data.
 */

export type CompositeSource = {
  id: string
  repo: string
  stars: number // approx Aug 2026, for ordering
  url: string
  description: string
  patterns: string[]
  categories: string[]
  bestFor: string[]
  license?: string
}

export type CompositeComponent = {
  name: string
  description: string
  repoRef: string // which source inspired
  htmlHint: string // what the plate should include
  cssHint: string // styling pattern from great repos
  platesRef?: { bookId: string; plateId: string }[] // existing Bhenre plates that implement
}

export type CompositeCategory = {
  id: string // matches book id
  title: string
  description: string
  sources: string[] // source ids
  components: CompositeComponent[]
}

export const compositeSources: CompositeSource[] = [
  {
    id: 'shadcn-ui',
    repo: 'shadcn-ui/ui',
    stars: 116606,
    url: 'https://github.com/shadcn-ui/ui',
    description: 'Beautifully designed components built using Radix UI and Tailwind CSS. Copy-paste, not npm install. Own the code.',
    patterns: ['copy-paste over npm', 'radix + tailwind', 'zero runtime bundle', 'accessible by default', 'own the code'],
    categories: ['foundations', 'buttons', 'forms', 'cards', 'navigation', 'overlays'],
    bestFor: ['custom design systems', 'Next.js App Router', 'design control'],
    license: 'MIT'
  },
  {
    id: 'radix-primitives',
    repo: 'radix-ui/primitives',
    stars: 19148,
    url: 'https://github.com/radix-ui/primitives',
    description: 'Unstyled, accessible UI primitives for React. WAI-ARIA, composable, unstyled freedom. Used by Vercel, Supabase.',
    patterns: ['unstyled primitives', 'WAI-ARIA', 'composable', 'Slot API', 'SSR-safe'],
    categories: ['foundations', 'overlays', 'forms', 'navigation'],
    bestFor: ['building your own design system', 'accessibility-first', 'composable'],
    license: 'MIT'
  },
  {
    id: 'headlessui',
    repo: 'tailwindlabs/headlessui',
    stars: 28619,
    url: 'https://github.com/tailwindlabs/headlessui',
    description: 'Completely unstyled, accessible UI components for React, designed to integrate beautifully with Tailwind CSS.',
    patterns: ['unstyled', 'Tailwind-native', 'accessibility', 'minimal API'],
    categories: ['overlays', 'forms', 'navigation'],
    bestFor: ['Tailwind projects', 'minimal components'],
    license: 'MIT'
  },
  {
    id: 'mui',
    repo: 'mui/material-ui',
    stars: 98404,
    url: 'https://github.com/mui/material-ui',
    description: 'Ready-to-use foundational React components. Material Design, enterprise-grade, 50+ components.',
    patterns: ['Material Design', 'theme tokens', 'Sx prop', 'emotion', 'enterprise'],
    categories: ['foundations', 'buttons', 'forms', 'data-display', 'feedback'],
    bestFor: ['enterprise dashboards', 'Material Design', 'advanced components'],
    license: 'MIT'
  },
  {
    id: 'ant-design',
    repo: 'ant-design/ant-design',
    stars: 98359,
    url: 'https://github.com/ant-design/ant-design',
    description: 'An enterprise-class UI design language and React UI library. B2B, tables, forms.',
    patterns: ['enterprise-class', 'design language', 'table-first', 'form-heavy', 'B2B'],
    categories: ['data-display', 'forms', 'navigation', 'feedback'],
    bestFor: ['B2B enterprise', 'data-heavy', 'admin'],
    license: 'MIT'
  },
  {
    id: 'chakra-ui',
    repo: 'chakra-ui/chakra-ui',
    stars: 40438,
    url: 'https://github.com/chakra-ui/chakra-ui',
    description: 'Component system for building SaaS products with speed. Simple, modular, accessible.',
    patterns: ['style props', 'SaaS speed', 'dark mode excellent', 'composition'],
    categories: ['foundations', 'layouts', 'feedback', 'forms'],
    bestFor: ['SaaS products', 'speed', 'existing projects'],
    license: 'MIT'
  },
  {
    id: 'mantine',
    repo: 'mantinedev/mantine',
    stars: 31257,
    url: 'https://github.com/mantinedev/mantine',
    description: 'Fully featured React components library. 100+ components, great DX.',
    patterns: ['100+ components', 'hooks-first', 'rich DX', 'dark mode excellent'],
    categories: ['foundations', 'data-display', 'overlays', 'feedback', 'media'],
    bestFor: ['rich DX', '100+ components', 'hooks'],
    license: 'MIT'
  },
  {
    id: 'daisyui',
    repo: 'saadeghi/daisyui',
    stars: 29600,
    url: 'https://github.com/saadeghi/daisyui',
    description: 'Most popular, free and open-source Tailwind CSS component library. Minimal, built-in themes.',
    patterns: ['Tailwind plugin', 'semantic classNames', 'themes', 'rapid prototyping'],
    categories: ['foundations', 'buttons', 'cards', 'marketing'],
    bestFor: ['rapid prototyping', 'Tailwind', 'themes'],
    license: 'MIT'
  },
  {
    id: 'primer',
    repo: 'primer/react',
    stars: 3876,
    url: 'https://github.com/primer/react',
    description: "GitHub's Primer Design System using React. 23 packages, independently versioned.",
    patterns: ['design system at scale', 'monorepo 23 packages', 'Sass tokens', 'accessibility'],
    categories: ['foundations', 'navigation', 'data-display', 'feedback'],
    bestFor: ['design systems at scale', 'GitHub-like UIs'],
    license: 'MIT'
  },
  {
    id: 'carbon',
    repo: 'carbon-design-system/carbon',
    stars: 8400,
    url: 'https://github.com/carbon-design-system/carbon',
    description: "IBM's open-source design system for products and experiences. React + web components, tokens, icons, grid, motion.",
    patterns: ['IBM Design Language', '16-col grid', 'tokens first', 'web components', 'Sass'],
    categories: ['foundations', 'data-display', 'layouts', 'feedback'],
    bestFor: ['enterprise products', 'IBM ecosystem', '16-col grid'],
    license: 'Apache-2.0'
  },
  {
    id: 'spectrum',
    repo: 'adobe/react-spectrum',
    stars: 9500,
    url: 'https://github.com/adobe/react-spectrum',
    description: "Adobe Spectrum design system. React Spectrum + React Aria + Spectrum tokens. Taxonomy, registry, 179 terms.",
    patterns: ['Spectrum tokens', 'React Aria', 'design-system-registry', 'taxonomy', 'anatomy-terms'],
    categories: ['foundations', 'overlays', 'forms', 'media'],
    bestFor: ['Adobe ecosystem', 'taxonomy', 'design tokens at scale'],
    license: 'Apache-2.0'
  },
  {
    id: 'd3',
    repo: 'd3/d3',
    stars: 111000,
    url: 'https://github.com/d3/d3',
    description: 'Industry-standard toolkit for scales, layouts, DOM/SVG/Canvas manipulation. The bespoke 10%.',
    patterns: ['scales', 'layouts', 'DOM manipulation', 'SVG/Canvas', 'grammar-of-graphics'],
    categories: ['data-display'],
    bestFor: ['bespoke visualizations', 'custom', 'low-level'],
    license: 'ISC'
  },
  {
    id: 'visx',
    repo: 'airbnb/visx',
    stars: 20700,
    url: 'https://github.com/airbnb/visx',
    description: 'D3 primitives in React components. 30+ packages, each 2-5kB gzipped. NOT a charting library — toolkit for BUILDING charts.',
    patterns: ['D3 primitives as React', '30+ packages', '2-5kB each', 'bring your own animation', 'TypeScript native'],
    categories: ['data-display'],
    bestFor: ['custom charts in React', 'maximum control', 'outgrowing Recharts'],
    license: 'MIT'
  },
  {
    id: 'recharts',
    repo: 'recharts/recharts',
    stars: 24000,
    url: 'https://github.com/recharts/recharts',
    description: 'Compositional charting with sensible defaults. Declarative, simplest, covers common 80%. SVG.',
    patterns: ['declarative', 'compositional', 'SVG', '80% use case', 'sensible defaults'],
    categories: ['data-display'],
    bestFor: ['React dashboards', 'straightforward', 'common charts'],
    license: 'MIT'
  },
  {
    id: 'nivo',
    repo: 'plouc/nivo',
    stars: 10400,
    url: 'https://github.com/plouc/nivo',
    description: 'Theme-able SVG/Canvas charts ready to drop into dashboards. Built on D3, server-render support, 9.1K+ docs.',
    patterns: ['D3 + React', 'SVG/Canvas/HTML', 'server-render', 'motion', 'isomorphic'],
    categories: ['data-display'],
    bestFor: ['batteries-included', 'theming', 'SSR'],
    license: 'MIT'
  },
  {
    id: 'decision-wizard',
    repo: 'michaelzive/decision-wizard',
    stars: 120,
    url: 'https://github.com/michaelzive/decision-wizard',
    description: 'Dynamic wizard for Angular that guides users through decision tree of questions — branching, async validations, route summaries, Material UI.',
    patterns: ['decision tree', 'branching logic', 'wizard', 'route summary', 'reactive state'],
    categories: ['layouts', 'overlays', 'feedback'],
    bestFor: ['guided workflows', 'onboarding flows', 'decision engines'],
    license: 'MIT'
  }
]

export const compositeCategories: CompositeCategory[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Tokens as material. Paper → ink → accent. What great repos agree: system fonts, zero-deps, tokens first, own the code.',
    sources: ['shadcn-ui', 'radix-primitives', 'primer', 'carbon', 'spectrum'],
    components: [
      { name: 'Grotesk Sans Stack', description: 'System font stack, brass rule, ivory ground — own the code, no fetch', repoRef: 'shadcn-ui', htmlHint: 'div with --font-sans system-ui', cssHint: 'font-family: var(--sans); letter-spacing: -0.01em', platesRef: [{ bookId: 'foundations', plateId: 'foundations-grotesk-sans' }] },
      { name: 'Mono Stack Tabular', description: 'ui-monospace, tabular-nums, 10px small caps — for tables, KPIs', repoRef: 'primer', htmlHint: 'font-variant-numeric: tabular-nums', cssHint: 'font-family: ui-monospace; tabular-nums', platesRef: [{ bookId: 'foundations', plateId: 'foundations-mono-stack' }] },
      { name: 'Palette Void Glass', description: 'Void #1E2022, brass rim, glass holds over video — Vercel/Linear', repoRef: 'shadcn-ui', htmlHint: 'backdrop-filter: blur(12px)', cssHint: 'background: rgba(30,32,34,0.8); backdrop-blur', platesRef: [{ bookId: 'foundations', plateId: 'foundations-palette-void-glass' }] },
      { name: 'Tokens Brass / Ivory / Ink', description: 'Brass #C9A86A foil, ivory #FFFEFB paper, ink #141210 — letterpress', repoRef: 'carbon', htmlHint: 'CSS vars --paper --ink --brass', cssHint: '--paper:#FFFEFB; --ink:#141210; --brass:#C9A86A' }
    ]
  },
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'If it matters, it has an edge. Great repos: 44px min, ghost only for secondary, radix Slot, focus-visible ring.',
    sources: ['shadcn-ui', 'radix-primitives', 'mui', 'daisyui'],
    components: [
      { name: 'Minimal Pill 44px', description: '44px min, ink on paper, brass hover — no ghost for primary', repoRef: 'shadcn-ui', htmlHint: '<button class="min-h-[44px]">', cssHint: 'min-height:44px; border-radius:999px', platesRef: [{ bookId: 'buttons', plateId: 'buttons-minimal-pill' }] },
      { name: 'Glass Morphism', description: 'Holds over video, neon rim — Vercel/Linear night work', repoRef: 'radix-primitives', htmlHint: 'backdrop-filter blur + brass rim', cssHint: 'backdrop-filter:blur(12px); border:1px solid var(--brass)', platesRef: [{ bookId: 'buttons', plateId: 'buttons-glass-morphism' }] },
      { name: 'Brutal Offset', description: '4px offset, hard shadow, no border-radius — deliberate', repoRef: 'daisyui', htmlHint: 'box-shadow: 4px 4px 0', cssHint: 'box-shadow:4px 4px 0 var(--ink)' },
      { name: 'Command Trigger', description: 'Cmd+K, 28px, mono 10px — triggers palette', repoRef: 'radix-primitives', htmlHint: 'kbd Cmd+K', cssHint: 'font-family:ui-monospace; font-size:10px' }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Forms are conversation. Library card clarity: sections with brass rule, 44px min, label always visible.',
    sources: ['shadcn-ui', 'radix-primitives', 'ant-design', 'mantine'],
    components: [
      { name: 'Form Shell Sections', description: 'Sections with brass rule, generous hit areas — Muji + Braun', repoRef: 'shadcn-ui', htmlHint: 'fieldset + legend brass rule', cssHint: 'border-top:1px solid var(--brass); padding-top:16px', platesRef: [{ bookId: 'forms', plateId: 'forms-form-shell-sections' }] },
      { name: 'Corporate Dense', description: 'Dense when needed, 44px min always — enterprise', repoRef: 'ant-design', htmlHint: 'compact form grid 12-col', cssHint: 'display:grid; grid-template-columns:repeat(12,1fr); gap:12px' },
      { name: 'Field with Validation', description: 'Radix Slot, react-hook-form + zod, focus-visible:ring', repoRef: 'radix-primitives', htmlHint: 'data-slot="form-item"', cssHint: 'focus-visible:ring-[3px] ring-brass/50', platesRef: [{ bookId: 'forms', plateId: 'forms-field-validation' }] }
    ]
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Quiet luxury: hairline, 12px radius, soft diffuse shadow. Content first, chrome last.',
    sources: ['shadcn-ui', 'daisyui', 'mui', 'chakra-ui'],
    components: [
      { name: 'Minimal Border Hairline', description: 'Hairline, 12px, quiet lift — Hay + Muji', repoRef: 'shadcn-ui', htmlHint: 'border:1px solid var(--paper-3)', cssHint: 'border-radius:12px; box-shadow:0 1px 2px rgba(0,0,0,.04)', platesRef: [{ bookId: 'cards', plateId: 'cards-minimal-border' }] },
      { name: 'Glass Frosted', description: 'Frosted depth without fogging — holds over video', repoRef: 'mantine', htmlHint: 'backdrop-blur 12px + brass top edge', cssHint: 'backdrop-filter:blur(12px); border-top:4px solid var(--brass)', platesRef: [{ bookId: 'cards', plateId: 'cards-glass-frosted' }] },
      { name: 'Metric Sparkline Card', description: 'Metric with inline sparkline adjective — Tufte', repoRef: 'recharts', htmlHint: 'stat + svg 60x16 inline', cssHint: 'display:flex; align-items:baseline; gap:10px' },
      { name: 'Editorial Feature', description: 'One idea held completely — 640 prose, brass rule', repoRef: 'daisyui', htmlHint: 'prose 640ch + breakout', cssHint: 'max-width:68ch; margin:0 auto' }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: '44px mono nav, disappears until needed, sticky, brass rule. Command palette for power users.',
    sources: ['shadcn-ui', 'radix-primitives', 'primer', 'headlessui'],
    components: [
      { name: 'Header Minimal 44px', description: '44px sticky, mono, brass rule — disappears until needed', repoRef: 'shadcn-ui', htmlHint: '<header class="sticky top-0 h-[44px]">', cssHint: 'height:44px; position:sticky; top:0; backdrop-blur', platesRef: [{ bookId: 'navigation', plateId: 'navigation-header-minimal' }] },
      { name: 'Command Palette CmdK', description: 'Cmd+K fast, groups, shortcuts — Vercel/Linear', repoRef: 'radix-primitives', htmlHint: 'Dialog + Command primitives', cssHint: 'radix Dialog + Slot API', platesRef: [{ bookId: 'navigation', plateId: 'navigation-command-palette-cmdk' }] },
      { name: 'Sidebar Collapsible', description: '240px rail, collapses to 60px icons, mono 10px labels', repoRef: 'primer', htmlHint: 'nav 240px → 60px', cssHint: 'width:240px; transition:width 180ms ease' },
      { name: 'Tabs Brass Active', description: 'Active brass underline, not fill — quiet luxury', repoRef: 'headlessui', htmlHint: 'tab active brass bottom border', cssHint: 'border-bottom:2px solid var(--brass)' }
    ]
  },
  {
    id: 'data-display',
    title: 'Data Display',
    description: 'Tables are truth. Tufte data-ink ratio, Cleveland & McGill position>length, Few bars beat pie. Great repos converge: tabular-nums, 44px rows, zero-JS bars.',
    sources: ['d3', 'visx', 'recharts', 'nivo', 'ant-design', 'carbon'],
    components: [
      { name: 'Table Dense with Sort', description: '44px rows, tabular numbers, sort visible — Bloomberg density', repoRef: 'ant-design', htmlHint: 'table 44px rows, sticky header', cssHint: 'height:44px; font-variant-numeric:tabular-nums', platesRef: [{ bookId: 'data-display', plateId: 'data-display-table-dense-with-sort' }] },
      { name: 'Stats 4-col KPI', description: '4-col max, trend with number, mono tabular — 30mph signage', repoRef: 'carbon', htmlHint: 'grid 4-col KPI', cssHint: 'display:grid; grid-template-columns:repeat(4,1fr); gap:1px', platesRef: [{ bookId: 'data-display', plateId: 'data-display-stats-4-col' }] },
      { name: 'Bar Chart CSS-only', description: 'Zero JS, 200 bytes, div width % — honest length encoding', repoRef: 'd3', htmlHint: 'div width % bars', cssHint: 'height:8px; border-radius:99px; background:var(--brass)', platesRef: [{ bookId: 'data-display', plateId: 'data-display-bar-chart-css-only' }] },
      { name: 'Sparkline Inline', description: '60x16, no axes, word-sized — Tufte', repoRef: 'visx', htmlHint: 'svg 60x16 path', cssHint: 'fill:none; stroke:var(--brass); stroke-width:1.2', platesRef: [{ bookId: 'data-display', plateId: 'data-display-line-sparkline' }] },
      { name: 'Timeline Vertical', description: 'When did what, brass dot, mono date — Eames', repoRef: 'd3', htmlHint: 'vertical with brass dot', cssHint: 'border-left:1px solid var(--brass); dot 6px brass', platesRef: [{ bookId: 'data-display', plateId: 'data-display-timeline-vertical' }] }
    ]
  },
  {
    id: 'overlays',
    title: 'Overlays',
    description: 'Interruption with manners: focus trap, Esc, return focus. Centered modal, drawer right, command dialog.',
    sources: ['radix-primitives', 'headlessui', 'shadcn-ui', 'mantine'],
    components: [
      { name: 'Modal Centered', description: 'Centered, focus trap, Esc, return focus — Dieter Rams', repoRef: 'radix-primitives', htmlHint: 'Dialog Primitive + Overlay', cssHint: 'position:fixed; inset:0; backdrop-filter:blur(8px)', platesRef: [{ bookId: 'overlays', plateId: 'overlays-modal-centered' }] },
      { name: 'Drawer Right', description: 'Drawer right for tools, not marketing — 360px, brass left edge', repoRef: 'headlessui', htmlHint: 'slide-over 360px', cssHint: 'width:360px; border-left:4px solid var(--brass)' },
      { name: 'Command Dialog', description: 'CmdK dialog, glass depth, groups, shortcuts', repoRef: 'shadcn-ui', htmlHint: 'Dialog + Command', cssHint: 'backdrop-filter:blur(12px); groups with mono 10px' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'SSENSE window display: editorial hero 58/42, feature grid 3 rooms, pricing tier brass middle, proof over promise.',
    sources: ['shadcn-ui', 'daisyui', 'chakra-ui'],
    components: [
      { name: 'Hero Editorial 58/42', description: '58% mockup, 42% prose, serif headline 36ch, mono kicker — window', repoRef: 'shadcn-ui', htmlHint: '58/42 grid hero', cssHint: 'grid-template-columns:1.28fr .72fr', platesRef: [{ bookId: 'marketing', plateId: 'marketing-hero-editorial' }] },
      { name: 'Feature Grid 3', description: 'Three rooms, 16px icons, narrative not decoration', repoRef: 'daisyui', htmlHint: 'grid 3-col features', cssHint: 'gap:24px; icon 16px; brass top edge', platesRef: [{ bookId: 'marketing', plateId: 'marketing-feature-grid-3' }] },
      { name: 'Pricing Tier 3 Brass', description: 'Middle highlighted brass, price visible, no dark pattern', repoRef: 'chakra-ui', htmlHint: '3-tier pricing', cssHint: 'middle: outline 2px solid var(--brass); outline-offset:2px', platesRef: [{ bookId: 'marketing', plateId: 'marketing-pricing-tier-3' }] },
      { name: 'Testimonial Wall', description: 'Real names, real companies, not "trusted by 10k"', repoRef: 'shadcn-ui', htmlHint: 'masonry testimonials', cssHint: 'columns:3; gap:16px' }
    ]
  },
  {
    id: 'layouts',
    title: 'Layouts',
    description: 'Pudding 58/42 map/story, 72vh sticky, 640 prose, breakout 1100. Stack is story.',
    sources: ['carbon', 'primer', 'chakra-ui', 'decision-wizard'],
    components: [
      { name: '58/42 Map Story', description: 'Sticky map 72vh left, prose 640 right — Pudding', repoRef: 'carbon', htmlHint: 'grid 1.15fr/.85fr sticky 72vh', cssHint: 'position:sticky; top:72px; height:72vh', platesRef: [{ bookId: 'layouts', plateId: 'layouts-58-42-map-story' }] },
      { name: 'Centered Prose 640', description: 'Centered 640 where you sit down', repoRef: 'primer', htmlHint: 'max-width:640px margin auto', cssHint: 'max-width:68ch; margin:0 auto', platesRef: [{ bookId: 'layouts', plateId: 'layouts-centered-prose-640' }] },
      { name: 'Breakout 1100', description: 'Step closer, full-bleed moment', repoRef: 'chakra-ui', htmlHint: 'max-width:1100px breakout', cssHint: 'max-width:1100px; margin:0 -40px' },
      { name: 'Data Grid 12', description: '12-col, tight gutters, compact — for dashboards', repoRef: 'carbon', htmlHint: 'grid 12-col', cssHint: 'display:grid; grid-template-columns:repeat(12,1fr); gap:12px' }
    ]
  },
  {
    id: 'media',
    title: 'Media',
    description: 'Work as rooms, not decoration. Masonry, lightbox with manners, aspect ratio.',
    sources: ['mantine', 'spectrum', 'shadcn-ui'],
    components: [
      { name: 'Gallery Masonry', description: 'Masonry, work as rooms — Hay', repoRef: 'mantine', htmlHint: 'columns: 2/3 masonry', cssHint: 'columns:2; gap:16px', platesRef: [{ bookId: 'media', plateId: 'media-gallery-masonry' }] },
      { name: 'Lightbox Manners', description: 'Focus trap, Esc, return focus, brass close', repoRef: 'radix-primitives', htmlHint: 'Dialog Primitive image', cssHint: 'Dialog Overlay + brass close' },
      { name: 'Aspect Ratio 16/9', description: 'Aspect ratio primitive, linen bg while loading', repoRef: 'radix-primitives', htmlHint: 'aspect-ratio 16/9', cssHint: 'aspect-ratio:16/9; background:var(--paper-2)' }
    ]
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Moss for success, terracotta for warn — never red alarm unless alarm. Honest 503, honest empty, skeleton respects grid.',
    sources: ['mui', 'ant-design', 'mantine', 'carbon'],
    components: [
      { name: 'Alert Success Moss', description: 'Moss, not green alarm — quiet', repoRef: 'mui', htmlHint: 'alert moss bg', cssHint: 'background:var(--moss-2); border-left:3px solid var(--moss)', platesRef: [{ bookId: 'feedback', plateId: 'feedback-alert-success' }] },
      { name: 'Skeleton Card Grid', description: 'Same measure as content, no shimmer lie, 140ms snap', repoRef: 'carbon', htmlHint: 'skeleton 320px same as card', cssHint: 'height:10px; background:var(--paper-2); no shimmer', platesRef: [{ bookId: 'feedback', plateId: 'feedback-skeleton-card' }] },
      { name: 'Empty State Spec', description: 'Empty with spec, not lorem — ⁂', repoRef: 'primer', htmlHint: 'empty ⁂ + spec', cssHint: 'font-family:serif; font-style:italic' }
    ]
  },
  {
    id: 'commerce',
    title: 'Commerce',
    description: 'Aritzia till + Apple bag — slim, secure, easy to close. No dark pattern, no surprise total.',
    sources: ['shadcn-ui', 'daisyui', 'chakra-ui'],
    components: [
      { name: 'Product Card Minimal', description: 'Image, name, price, ATC — no dark pattern', repoRef: 'shadcn-ui', htmlHint: 'product image + name + price', cssHint: 'border:1px solid var(--paper-3); border-radius:12px', platesRef: [{ bookId: 'commerce', plateId: 'product-card-minimal' }] },
      { name: 'Cart Line Item 44px', description: 'Qty, price, remove — 44px min, tabular', repoRef: 'daisyui', htmlHint: 'cart row 44px', cssHint: 'min-height:44px; tabular-nums', platesRef: [{ bookId: 'commerce', plateId: 'cart-line-item' }] },
      { name: 'Order Summary Dense', description: 'Subtotal, shipping, tax, total — no surprise', repoRef: 'chakra-ui', htmlHint: 'order summary dense', cssHint: 'font-variant-numeric:tabular-nums' }
    ]
  }
]

export type DecisionMapping = {
  decisionStepId: string
  relevantSources: string[]
  reasoning: string
  recommendedPlates: { bookId: string; plateId: string; why: string }[]
}

export const decisionMappings: DecisionMapping[] = [
  {
    decisionStepId: 'intent',
    relevantSources: ['shadcn-ui', 'carbon', 'primer', 'spectrum'],
    reasoning: 'Intent maps to design system choice: SaaS→carbon/primer (dense truth), marketing→shadcn editorial, store→daisyui commerce, void→spectrum tokens',
    recommendedPlates: [
      { bookId: 'navigation', plateId: 'navigation-header-minimal', why: 'SaaS needs 44px mono sticky like Linear/primer' },
      { bookId: 'marketing', plateId: 'marketing-hero-editorial', why: 'Marketing needs SSENSE 58/42 window like shadcn hero' },
      { bookId: 'commerce', plateId: 'product-card-minimal', why: 'Store needs Aritzia minimal — daisyui rapid prototyping' }
    ]
  },
  {
    decisionStepId: 'density',
    relevantSources: ['carbon', 'primer', 'mantine', 'mui'],
    reasoning: 'Density is posture: carbon 16-col grid tight gutters for compact, primer centered 640 for airy, mantine 100+ components for cozy default',
    recommendedPlates: [
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Compact = carbon dense table 44px' },
      { bookId: 'layouts', plateId: 'layouts-centered-prose-640', why: 'Airy = primer centered prose' },
      { bookId: 'cards', plateId: 'cards-minimal-border', why: 'Cozy = shadcn minimal hairline' }
    ]
  },
  {
    decisionStepId: 'material',
    relevantSources: ['spectrum', 'carbon', 'shadcn-ui', 'primer'],
    reasoning: 'Material = tokens: spectrum taxonomy (anatomy-terms, 179 terms), carbon tokens (colors, type, motion), shadcn own-the-code copy-paste, primer 23 packages independently versioned',
    recommendedPlates: [
      { bookId: 'foundations', plateId: 'foundations-grotesk-sans', why: 'Ivory brass = shadcn own-code' },
      { bookId: 'foundations', plateId: 'foundations-mono-stack', why: 'Stone moss = carbon tokens' },
      { bookId: 'foundations', plateId: 'foundations-palette-void-glass', why: 'Void glass = spectrum tokens' }
    ]
  },
  {
    decisionStepId: 'structure',
    relevantSources: ['carbon', 'decision-wizard', 'primer'],
    reasoning: 'Stack is story: carbon 16-col grid, decision-wizard branching logic, primer docs structure. 58/42 map/story, centered 640, breakout 1100',
    recommendedPlates: [
      { bookId: 'layouts', plateId: 'layouts-58-42-map-story', why: 'Pudding 58/42 — carbon grid' },
      { bookId: 'layouts', plateId: 'layouts-centered-prose-640', why: 'Atelier — primer centered' },
      { bookId: 'layouts', plateId: 'layouts-data-grid-12', why: 'Dashboard — decision-wizard stack' }
    ]
  },
  {
    decisionStepId: 'data-proof',
    relevantSources: ['d3', 'visx', 'recharts', 'nivo', 'ant-design', 'carbon'],
    reasoning: 'Data proof pairs viz best practices: d3 bespoke 10%, visx D3 primitives 30 packages 2-5kB, recharts declarative 80%, nivo SSR, ant table-first, carbon data-display',
    recommendedPlates: [
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Tables are truth — ant + carbon + Tufte' },
      { bookId: 'data-display', plateId: 'data-display-stats-4-col', why: 'Stats 4-col — Vignelli 30mph + carbon' },
      { bookId: 'data-display', plateId: 'data-display-bar-chart-css-only', why: 'Bar CSS-only — d3 scales + visx shape' }
    ]
  },
  {
    decisionStepId: 'interaction',
    relevantSources: ['radix-primitives', 'headlessui', 'shadcn-ui'],
    reasoning: 'Interaction = conversation: radix WAI-ARIA Slot, headless Tailwind-native, shadcn copy-paste focus-visible:ring',
    recommendedPlates: [
      { bookId: 'forms', plateId: 'forms-form-shell-sections', why: 'Form shell — shadcn + radix' },
      { bookId: 'overlays', plateId: 'overlays-modal-centered', why: 'Modal — radix Dialog Primitive' },
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk', why: 'CmdK — radix + shadcn' }
    ]
  },
  {
    decisionStepId: 'compose',
    relevantSources: ['shadcn-ui', 'carbon', 'spectrum', 'daisyui'],
    reasoning: 'Compose & export: shadcn own-the-code, carbon tokens (colors/type/motion), spectrum registry, daisyui themes — all agree tokens first, own code, zero-deps',
    recommendedPlates: [
      { bookId: 'foundations', plateId: 'foundations-grotesk-sans', why: 'Own code, system fonts, 2.59kB HTML' },
      { bookId: 'foundations', plateId: 'foundations-palette-void-glass', why: 'Tokens as material — spectrum + carbon' }
    ]
  }
]

export type VizMapping = {
  practiceId: string
  sources: string[]
  plates: { bookId: string; plateId: string; why: string }[]
  implementation: string // how great repos implement
}

export const vizMappings: VizMapping[] = [
  {
    practiceId: 'tables-are-truth',
    sources: ['ant-design', 'carbon', 'primer'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Bloomberg density + ant table + carbon data-table' }],
    implementation: 'ant Table 44px rows, carbon DataTable sticky header, primer tabular-nums — Tufte data-ink ratio'
  },
  {
    practiceId: 'stats-4-col',
    sources: ['carbon', 'mui', 'chakra-ui'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-stats-4-col', why: 'Vignelli 30mph + carbon stats + mui Card' }],
    implementation: 'carbon Tile 4-col, mui CardContent tabular, chakra Stat — 30mph readable, moss/oxblood not alarm'
  },
  {
    practiceId: 'bar-chart-css-only',
    sources: ['d3', 'visx', 'recharts'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-bar-chart-css-only', why: 'd3 scaleLinear + visx shape Bar + recharts BarChart declarative — but CSS-only 200 bytes' }],
    implementation: 'd3 scaleBand/scaleLinear, visx Bar 2kB, recharts Bar — Cleveland length encoding, Few bars beat pie, but CSS-only for 6 bars'
  },
  {
    practiceId: 'sparkline',
    sources: ['visx', 'd3', 'nivo'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-line-sparkline', why: 'Tufte word-sized + visx sparkline 60x16' }],
    implementation: 'visx LinePath 60x16 no axes, d3 line() stroke brass, nivo small multiples — Tufte Beautiful Evidence'
  },
  {
    practiceId: 'timeline-vertical',
    sources: ['d3', 'visx'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-timeline-vertical', why: 'Eames timeline + d3 axis + visx Axis' }],
    implementation: 'd3 axisLeft mono 10px, visx Axis brass dot 6px, Eames when→what — vertical narrative'
  },
  {
    practiceId: 'kanban',
    sources: ['ant-design', 'carbon', 'primer'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-kanban-column', why: 'Trello + ant + carbon filing cabinet' }],
    implementation: 'ant Card minimal, carbon Tile, primer Box — move cards, not decoration, 44px min'
  },
  {
    practiceId: 'definition-list',
    sources: ['primer', 'carbon', 'spectrum'],
    plates: [{ bookId: 'data-display', plateId: 'data-display-definition-list', why: 'Savile Row spec + primer dl + carbon DefinitionList' }],
    implementation: 'primer definition list mono label 10px, carbon spec, spectrum anatomy-terms — quiet truth'
  },
  {
    practiceId: 'skeleton-respects-grid',
    sources: ['carbon', 'mui', 'mantine', 'primer'],
    plates: [{ bookId: 'feedback', plateId: 'feedback-skeleton-card', why: 'Dieter Rams honest + carbon Skeleton + mui Skeleton + mantine Skeleton' }],
    implementation: 'carbon SkeletonText same measure, mui Skeleton animation="wave" off, mantine Skeleton no shimmer, primer — 140ms snap, no CLS'
  }
]

export const compositeLibrary = {
  sources: compositeSources,
  categories: compositeCategories,
  decisionMappings,
  vizMappings
}

export default compositeLibrary
