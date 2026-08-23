# Bhenre Collection — Composite Library Research

*Aug 2026 • Zero-deps synthesis of great repos*

## What We Researched

15 top repos across 5 domains, verified via browser.search:

### Component Libraries (Top tier by stars)

| Repo | Stars (Aug 2026) | URL | Core Pattern |
|------|------------------|-----|--------------|
| **shadcn/ui** | 116,606 | github.com/shadcn-ui/ui | Copy-paste, not npm. Own the code. Radix + Tailwind. Zero runtime. |
| **mui/material-ui** | 98,404 | github.com/mui/material-ui | Ready-to-use foundational React, 50+ components, enterprise |
| **ant-design** | 98,359 | github.com/ant-design/ant-design | Enterprise-class UI design language, table-first, form-heavy B2B |
| **radix-primitives** | 19,148 | github.com/radix-ui/primitives | Unstyled WAI-ARIA primitives, composable, Slot API, SSR-safe |
| **headlessui** | 28,619 | github.com/tailwindlabs/headlessui | Completely unstyled, Tailwind-native, minimal API |
| **chakra-ui** | 40,438 | github.com/chakra-ui/chakra-ui | Style props, SaaS speed, dark mode excellent |
| **mantine** | 31,257 | github.com/mantinedev/mantine | 100+ components, hooks-first, rich DX |
| **daisyui** | 29,600 | github.com/saadeghi/daisyui | Tailwind plugin, semantic classNames, themes, rapid prototyping |

### Design Systems (Tokens & Scale)

| Repo | Stars | Pattern |
|------|-------|---------|
| **primer/react** | 3,876 | GitHub's system. 23 packages monorepo, independently versioned. Sass tokens. |
| **carbon/carbon** | 8,400 | IBM's system. React + web components, tokens, 16-col grid, motion, icons. Sass. |
| **spectrum (adobe)** | 9,500 | Adobe Spectrum. React Spectrum + React Aria + tokens. Taxonomy: 179 terms, anatomy-terms registry, design-system-registry package. |

### Data Visualization

| Repo | Stars | Pattern |
|------|-------|---------|
| **d3/d3** | 111,000 | Industry-standard toolkit. Scales, layouts, DOM/SVG/Canvas. Bespoke 10% only. |
| **airbnb/visx** | 20,700 | D3 primitives as React components. 30+ packages, 2-5kB each. NOT a charting library — toolkit for BUILDING charts. Bring your own animation. TypeScript native. |
| **recharts** | 24,000 | Compositional, declarative, simplest, covers 80%. SVG, sensible defaults. Default for React dashboard. |
| **plouc/nivo** | 10,400 | Theme-able SVG/Canvas/HTML, built on D3, server-render, motion, isomorphic. Batteries-included. |

### Decision / Wizard

| Repo | Stars | Pattern |
|------|-------|---------|
| **michaelzive/decision-wizard** | 120 | Angular dynamic wizard, decision tree, branching logic via expr-eval, ngx-formly, reactive state, route summary |

### Tufte / Few Principles (via skills)

- **Tufte's Foundations**: Data-ink ratio (maximize ink for data), Lie Factor (graphic/data ratio =1), Chartjunk (remove non-data ink)
- **Graphical Integrity**: Bar charts must start at zero, proportions reflect ratios, no 3D
- **Visual Perception**: Gestalt (Proximity, Similarity, Continuity, Closure), Preattentive hierarchy Position > Color > Size > Shape
- **Tufte 22 rules**: Remove top/right borders, direct labels not legends, small multiples, sparklines, range-frames

## What Great Repos Agree On (Convergence)

### 1. Own the Code > npm Install
- shadcn/ui proved copy-paste wins for custom design systems. Zero runtime bundle. You own source, you tweak.
- **Bhenre adopts**: Plates are HTML+CSS copy-paste, zero-deps, no 200kb chart lib for 6 bars.

### 2. Unstyled Primitives + Tokens First
- radix (19k), headlessui (28k), spectrum (React Aria) all agree: unstyled WAI-ARIA primitives, then style with tokens.
- carbon 16-col grid, primer 23 packages, spectrum 179-term taxonomy — all tokens first.
- **Bhenre adopts**: Foundations book = tokens as material. Paper → ink → accent. System fonts, no fetch.

### 3. 44px Min, Tabular-nums, Mono Small Caps
- ant table 44px rows, primer tabular-nums, carbon DataTable sticky 44px, mui 44px touch target — convergence.
- **Bhenre adopts**: 44px everywhere, tabular-nums for numbers, mono 10px uppercase labels.

### 4. Data Viz: Tables Are Truth, Bars Beat Pie, Sparklines Are Adjectives
- Tufte: maximize data-ink, erase chartjunk, direct-label not legend, small multiples.
- Cleveland & McGill (1984): Position > Length > Angle > Area > Color for accuracy.
- Few: bars beat pie for length judgment.
- Bloomberg: dense tables 44px work, inline bars, sparklines 60x16.
- Great viz repos: d3 bespoke 10%, visx 30 packages 2-5kB for custom, recharts declarative 80%, nivo batteries-included SSR.
- **Bhenre adopts**: 8 viz practices — tables-are-truth, stats-4-col, bar-css-only (200 bytes), sparkline 60x16, timeline vertical, kanban move-cards, definition-list spec, skeleton respects grid 140ms snap.

### 5. Decision Guide: Wizard vs Checklist vs Progressive
- Onboarding pattern decision tree: SETUP → Wizard (linear, API keys, team invites), ONCE → Checklist (parallel, dopamine), MULTI-FEATURE → Progressive Disclosure (contextual hints), else Hybrid.
- Decision-wizard repo: branching logic via expr-eval, reactive state, route summary, locked step editing.
- **Bhenre adopts**: 7-step walkthrough — intent → density → material → structure → data/proof → interaction → compose. Each step applies tokens + picks, auto-advances, live composition inspector.

### 6. Mobile-First, Brass Rule, Quiet Luxury
- Great repos all dark-mode excellent, focus-visible:ring, WCAG 2.1 AA, data-slot.
- **Bhenre adopts**: Base 320px, 1-col mobile, 44px taps, brass rule #C9A86A, ivory #FFFEFB, ink #141210, oxblood #4A1C1C, forest #1B3329. Foil titles, cloth texture, linen grid.

## Decision Mappings (Guide Steps → Sources)

| Decision Step | Relevant Sources | Reasoning |
|---------------|------------------|-----------|
| **intent** | shadcn, carbon, primer, spectrum | SaaS→carbon/primer dense truth, marketing→shadcn editorial, store→daisyui commerce, void→spectrum tokens |
| **density** | carbon, primer, mantine, mui | Carbon 16-col tight gutters compact, primer centered 640 airy, mantine cozy default |
| **material** | spectrum, carbon, shadcn, primer | Spectrum taxonomy 179 terms, carbon tokens colors/type/motion, shadcn own-code, primer 23 packages |
| **structure** | carbon, decision-wizard, primer | Stack is story: carbon grid, decision-wizard branching, primer docs structure |
| **data-proof** | d3, visx, recharts, nivo, ant, carbon | d3 bespoke 10%, visx 30 pkgs 2-5kB, recharts 80%, nivo SSR, ant table-first |
| **interaction** | radix, headlessui, shadcn | Radix WAI-ARIA Slot, headless Tailwind-native, shadcn focus-visible:ring |
| **compose** | shadcn, carbon, spectrum, daisyui | Tokens first, own code, zero-deps — all agree |

## Viz Mappings (Practices → Sources)

| Practice | Sources | Implementation |
|----------|---------|----------------|
| tables-are-truth | ant, carbon, primer | ant Table 44px, carbon DataTable sticky header, primer tabular-nums — Tufte data-ink |
| stats-4-col | carbon, mui, chakra | carbon Tile 4-col, mui CardContent tabular, chakra Stat — Vignelli 30mph |
| bar-chart-css-only | d3, visx, recharts | d3 scaleBand/scaleLinear, visx Bar 2kB, recharts Bar — Cleveland length, but CSS-only 200 bytes for 6 bars |
| sparkline | visx, d3, nivo | visx LinePath 60x16 no axes, d3 line() brass, nivo small multiples — Tufte Beautiful Evidence |
| timeline-vertical | d3, visx | d3 axisLeft mono 10px, visx Axis brass dot 6px, Eames when→what |
| kanban | ant, carbon, primer | ant Card minimal, carbon Tile, primer Box — move cards not decoration |
| definition-list | primer, carbon, spectrum | primer dl mono 10px, carbon spec, spectrum anatomy-terms — quiet truth |
| skeleton-respects-grid | carbon, mui, mantine, primer | carbon SkeletonText same measure, mui Skeleton wave off, mantine no shimmer — 140ms snap no CLS |

## What Bhenre Should Adopt (Actionable)

1. **Keep zero-deps copy-paste model** — shadcn proved it. No 200kb chart lib for 6 bars. CSS-only bars 200 bytes, sparklines SVG 60x16.

2. **Tokens as material, not hex** — spectrum taxonomy, carbon tokens, primer 23 packages all agree tokens first. Name it brass, not #C9A86A. Paper → ink → accent.

3. **44px everywhere, tabular-nums** — ant, carbon, primer, mui convergence. 44px row min, tabular-nums, mono 10px uppercase labels.

4. **Tables before charts** — Tufte data-ink ratio, Cleveland position>length, Bloomberg density. Table dense with sort first, then stats 4-col, then bar CSS-only.

5. **Decision guide as wizard with branching** — decision-wizard repo pattern: branching logic, reactive state, route summary. Bhenre 7 steps apply tokens + picks, auto-advance, live inspector.

6. **Direct labels, not legends** — Tufte rule. Label series at endpoint, value at end of bar, category beside dot. Kill the legend.

7. **Small multiples, sparklines, range-frames** — Tufte advanced. Repeat same small chart across variable, word-sized graphics inline, minimal axes.

8. **Skeleton respects grid, 140ms snap** — Dieter Rams honest, carbon/mui/mantine all have Skeleton but Bhenre does no-shimmer, same measure, 140ms not 450ms theater.

## Sources Cited (Real, Current)

- shadcn-ui/ui ⭐116,606 — github.com/shadcn-ui/ui
- mui/material-ui ⭐98,404 — github.com/mui/material-ui
- ant-design/ant-design ⭐98,359 — github.com/ant-design/ant-design
- radix-ui/primitives ⭐19,148 — github.com/radix-ui/primitives
- tailwindlabs/headlessui ⭐28,619 — github.com/tailwindlabs/headlessui
- chakra-ui/chakra-ui ⭐40,438 — github.com/chakra-ui/chakra-ui
- mantinedev/mantine ⭐31,257 — github.com/mantinedev/mantine
- saadeghi/daisyui ⭐29,600 — github.com/saadeghi/daisyui
- primer/react ⭐3,876 — github.com/primer/react
- carbon-design-system/carbon ⭐8,400 — github.com/carbon-design-system/carbon
- adobe/react-spectrum ⭐9,500 — github.com/adobe/react-spectrum + spectrum-design-data
- d3/d3 ⭐111,000 — github.com/d3/d3
- airbnb/visx ⭐20,700 — github.com/airbnb/visx
- recharts/recharts ⭐24,000 — github.com/recharts/recharts
- plouc/nivo ⭐10,400 — github.com/plouc/nivo
- michaelzive/decision-wizard ⭐120 — github.com/michaelzive/decision-wizard
- Tufte principles — github.com/pjsny/tufte-viz, igbuend/grimbard data-visualization

---

*Compiled for Bhenre Collection at ~/workspace/component-books/src/research/compositeLibrary.ts*
