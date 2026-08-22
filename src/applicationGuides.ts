import type { DesignTokens } from './types.ts'

export type AppGuide = {
  id: string
  title: string
  subtitle: string
  description: string
  stack: { bookId: string; plateId: string; why: string }[]
  tokens: DesignTokens
  outcome: string // what you get, 1-2 sentences
  whenToUse: string
  avoid?: string
}

export const applicationGuides: AppGuide[] = [
  {
    id: 'founders-saas-stack',
    title: 'Founder\'s SaaS Stack',
    subtitle: 'Header minimal + sidebar + table dense + stats + modal — 2am usable',
    description: 'A complete dashboard that works at 2am with a trackpad. Built for founders who need to orient, prove, act — without decoration. This is the permanent collection for tools.',
    stack: [
      { bookId: 'foundations', plateId: 'foundations-grotesk-sans', why: 'Grotesk sans + mono stack — Swiss corporate, not editorial. Paper #FFFEFB, ink #141210, brass accent only where action matters.' },
      { bookId: 'navigation', plateId: 'navigation-header-minimal', why: '44px sticky, mono, brass rule — disappears until you need it. No hamburger hiding the store.' },
      { bookId: 'navigation', plateId: 'navigation-sidebar-collapsible', why: 'Cozy, remembers open state, 56px icon rail when collapsed — built for long sessions.' },
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Dense with sort, tabular numbers, 44px rows — Bloomberg terminal density, not marketing air.' },
      { bookId: 'data-display', plateId: 'data-display-stats-4-col', why: '4-col with trend up/down, mono tabular — truth at a glance, 30mph readable.' },
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk', why: 'Cmdk fast, groups, shortcuts — for power users who type, not click.' },
      { bookId: 'forms', plateId: 'forms-form-shell-sections', why: 'Settings grouped with brass rule between sections — library card clarity, no tricks.' },
      { bookId: 'overlays', plateId: 'overlays-modal-centered', why: 'Centered modal, focus trap, Esc, return focus — interruption with manners.' },
      { bookId: 'marketing', plateId: 'marketing-footer-minimal', why: 'Minimal footer — you are already inside, no need to sell again.' },
    ],
    tokens: {
      radius: '8px',
      shadow: 'soft',
      accent: '#141210',
      paper: '#FFFEFB',
      ink: '#141210',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'compact'
    },
    outcome: 'A dashboard that orients in 2 seconds, proves in 10, acts in 1. Compact density, 8px cut, ink accent, tabular numbers everywhere.',
    whenToUse: 'Internal tools, dashboards, ops, founder-led SaaS where user is also builder.',
    avoid: 'Avoid airy density, 24px radius, terracotta accent — too warm for tools. Avoid editorial hero — you are not selling, you are working.'
  },
  {
    id: 'editorial-marketing-site',
    title: 'Editorial Marketing Site',
    subtitle: 'Hero editorial + feature grid + pricing + testimonial wall — SSENSE proof',
    description: 'Marketing as proof, not promise. Like SSENSE: show the cloth, not "trusted by 10k." Serif headline, 36ch measure, mono kicker, 58/42 with mockup.',
    stack: [
      { bookId: 'foundations', plateId: 'foundations-editorial-serif', why: 'High-contrast serif for headline — opinion, not UI. 36ch measure, 1.15 line-height.' },
      { bookId: 'marketing', plateId: 'marketing-hero-editorial', why: 'Editorial hero with serif headline, mono kicker, 58/42 split with browser mockup — window display, one strong idea well lit.' },
      { bookId: 'marketing', plateId: 'marketing-feature-grid-3', why: 'Three-up with small 16px icons, not 24px — features as rooms, not decoration.' },
      { bookId: 'marketing', plateId: 'marketing-pricing-tier-3', why: 'Three-tier, middle highlighted brass border, "Most chosen" mono pill, monthly/annual toggle — price visible, no tricks.' },
      { bookId: 'marketing', plateId: 'marketing-testimonial-wall', why: 'Masonry wall, real names, real companies, serif quote 24px — proof, not promise.' },
      { bookId: 'marketing', plateId: 'marketing-logo-cloud', why: 'Mono labels, not just logos — "Type foundry • Est. 2018" — provenance over novelty.' },
      { bookId: 'marketing', plateId: 'marketing-cta-banner', why: 'Terracotta banner, warm not ink — afternoon light, not corporate.' },
      { bookId: 'marketing', plateId: 'marketing-footer-mega', why: 'Mega when you have something to say, minimal when you don’t — honest footer.' },
    ],
    tokens: {
      radius: '12px',
      shadow: 'soft',
      accent: '#C9A86A',
      paper: '#FFFEFB',
      ink: '#141210',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'airy'
    },
    outcome: 'A marketing site that reads like a store window — one strong idea, well lit, with price visible. Serif headline, brass rule, ivory paper, airy density.',
    whenToUse: 'Brand sites, SSENSE-like product, editorial, lookbook, portfolio where story matters.',
    avoid: 'Avoid compact density — too dense for reading. Avoid brutal shadow — too sharp for afternoon light.'
  },
  {
    id: 'design-store-checkout',
    title: 'Design Store Checkout',
    subtitle: 'Product minimal + cart + shipping + order — Aritzia till',
    description: 'Commerce where the store has to be most careful. Aritzia checkout + Apple Store bag + Dover Street Market till — slim, secure, easy to close. Dense where it needs to be (price, shipping, tax), airy where it can be (product story).',
    stack: [
      { bookId: 'commerce', plateId: 'commerce-product-card-minimal', why: 'Minimal product card — image, name, price, ATC — no dark patterns, no "only 2 left" lie.' },
      { bookId: 'commerce', plateId: 'commerce-cart-line-item', why: 'Line item with qty selector, price, remove — 44px minimum, keyboardable, tabular numbers.' },
      { bookId: 'commerce', plateId: 'commerce-order-summary', why: 'Order summary dense where needed — subtotal, shipping, tax, total — mono tabular, no surprise.' },
      { bookId: 'commerce', plateId: 'commerce-shipping-estimator', why: 'Shipping estimator inline, not modal — honest, fast, no tricks.' },
      { bookId: 'forms', plateId: 'forms-select-custom', why: 'Custom select for shipping, but native where it matters (date, file, color).' },
      { bookId: 'overlays', plateId: 'overlays-dialog-confirm', why: 'Confirm dialog for destructive actions — focus trap, Esc, return focus, honest.' },
      { bookId: 'feedback', plateId: 'feedback-alert-success', why: 'Moss for success, terracotta for warn — never red alarm unless alarm.' },
      { bookId: 'marketing', plateId: 'marketing-footer-minimal', why: 'Minimal footer — you already bought, no need to sell again.' },
    ],
    tokens: {
      radius: '12px',
      shadow: 'soft',
      accent: '#4A1C1C',
      paper: '#FFFEFB',
      ink: '#141210',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'cozy'
    },
    outcome: 'A checkout that feels like a well-made wallet — slim, secure, easy to close. Oxblood leather accent, ivory paper, cozy density, no dark patterns.',
    whenToUse: 'Commerce, design stores, Aritzia-like checkout, products that need trust.',
    avoid: 'Avoid ghost buttons for primary action — if it matters, it has edge. Avoid brutal shadow — too sharp for money.'
  },
  {
    id: 'data-dense-ops',
    title: 'Data Dense Ops',
    subtitle: 'Table dense + stats + timeline + kanban — internal tools that deserve good design',
    description: 'Internal tools that deserve good design. Moss #8A9A8B, dense forms, Swiss corporate — for ops, admin, archive. Dense where needed, airy where can be.',
    stack: [
      { bookId: 'foundations', plateId: 'foundations-mono-stack', why: 'Mono stack for dense data — tabular numbers, 44px rows, no decoration.' },
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort', why: 'Dense with sort, tabular, 44px rows — Bloomberg density, not marketing air.' },
      { bookId: 'data-display', plateId: 'data-display-stats-4-col', why: '4-col stats with trend — truth at glance, 30mph readable.' },
      { bookId: 'data-display', plateId: 'data-display-timeline-vertical', why: 'Vertical timeline — when did what happen, clear hierarchy.' },
      { bookId: 'data-display', plateId: 'data-display-kanban-board', why: 'Kanban columns — move cards, not decoration.' },
      { bookId: 'forms', plateId: 'forms-corporate-dense', why: 'Corporate dense forms — library card clarity, generous hit areas.' },
      { bookId: 'navigation', plateId: 'navigation-sidebar-icon-rail', why: 'Icon rail 56px when collapsed, collapsible when expanded — long sessions.' },
      { bookId: 'feedback', plateId: 'feedback-skeleton-card', why: 'Skeleton that respects grid, not shimmer that lies.' },
    ],
    tokens: {
      radius: '8px',
      shadow: 'soft',
      accent: '#8A9A8B',
      paper: '#F5F1EB',
      ink: '#141210',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'compact'
    },
    outcome: 'An ops tool that feels like a well-made filing cabinet — dense, precise, built to last. Moss accent, stone paper, compact, tabular everywhere.',
    whenToUse: 'Ops, admin, archive, internal tools where user is power user, 2am usable.',
    avoid: 'Avoid airy density — too loose for dense data. Avoid terracotta — too warm for ops.'
  },
  {
    id: 'portfolio-atelier-site',
    title: 'Portfolio / Atelier Site',
    subtitle: 'Centered prose + masonry + breakout — sit, see, step closer',
    description: 'For personal sites, ateliers, studios. 58/42 is a story: map/story, 72vh sticky for orienting, 640px prose for reading, 1100 breakout for stepping closer. Centered prose is where you sit down.',
    stack: [
      { bookId: 'layouts', plateId: 'layouts-centered-prose-640', why: 'Centered prose 640px — where you sit down, generous margins, 36ch measure.' },
      { bookId: 'marketing', plateId: 'marketing-hero-editorial', why: 'Editorial hero with serif headline — opinion, not UI.' },
      { bookId: 'media', plateId: 'media-gallery-masonry', why: 'Masonry grid — work as rooms, not decoration.' },
      { bookId: 'layouts', plateId: 'layouts-breakout-1100', why: 'Breakout 1100 — moment where you step closer, full-bleed.' },
      { bookId: 'cards', plateId: 'cards-editorial-feature', why: 'Editorial feature card — one idea held completely, hairline, 16px radius.' },
      { bookId: 'navigation', plateId: 'navigation-table-of-contents', why: 'Table of contents with depth — orient, move, anchor without chrome.' },
      { bookId: 'marketing', plateId: 'marketing-footer-minimal', why: 'Minimal footer — you already inside, no need to sell.' },
    ],
    tokens: {
      radius: '12px',
      shadow: 'soft',
      accent: '#1B3329',
      paper: '#FFFEFB',
      ink: '#141210',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'airy'
    },
    outcome: 'A portfolio that feels like a studio visit — sit, see, step closer. Forest wool accent, ivory paper, airy density, serif where it matters.',
    whenToUse: 'Portfolio, atelier, personal, studio, editorial where story is the product.',
    avoid: 'Avoid compact density — too dense for reading. Avoid brutal shadow — too sharp for afternoon light in studio.'
  },
  {
    id: 'void-after-hours',
    title: 'Void — After Hours',
    subtitle: 'Glass on void, neon rims, magnetic hover — dashboards that feel like night',
    description: 'Dark mode done right. Glass on void, neon rims, magnetic hover that follows cursor. For dashboards, command palettes, hero sections that need to feel like night. Vercel, Linear, Apple Vision — glass that holds over video without fogging.',
    stack: [
      { bookId: 'foundations', plateId: 'foundations-palette-void-glass', why: 'Void palette #1E2022, glass texture, brass on ink — night.' },
      { bookId: 'buttons', plateId: 'buttons-glass-morphism', why: 'Glass morphism button — holds over video, neon rim catches light.' },
      { bookId: 'cards', plateId: 'cards-glass-frosted', why: 'Frosted glass card — depth without fogging, brass rule.' },
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk', why: 'Command palette cmdk fast, groups, shortcuts — night work.' },
      { bookId: 'overlays', plateId: 'overlays-command-dialog', why: 'Command dialog — interruption that feels like a screen sliding, not wall appearing.' },
      { bookId: 'data-display', plateId: 'data-display-bar-chart-css-only', why: 'Bar chart CSS-only — zero JS, 200 bytes, up and to right without 200kb lib.' },
      { bookId: 'marketing', plateId: 'marketing-stats-bar', why: 'Void stats bar — proof at night, mono tabular, brass accent.' },
    ],
    tokens: {
      radius: '16px',
      shadow: 'layered',
      accent: '#8A9A8B',
      paper: '#1E2022',
      ink: '#FFFEFB',
      fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
      fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
      density: 'cozy'
    },
    outcome: 'A dark system that feels like night in a good way — glass that holds, neon that catches, brass on void. Cozy density, 16px inflated, layered depth.',
    whenToUse: 'Dark mode, dashboards that happen at night, command palettes, hero sections that need night energy.',
    avoid: 'Avoid terracotta — too warm for void. Avoid compact density — night needs air, not bench.'
  }
]

export function getAppGuide(id: string): AppGuide | undefined {
  return applicationGuides.find(g => g.id === id)
}

export function getAllAppGuides(): AppGuide[] {
  return applicationGuides
}
