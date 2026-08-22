import type { Plate } from './types.ts'
import { booksById } from './books.ts'

export type CurationPlateRef = { bookId: string; plateId: string }

export type Curation = {
  id: string
  title: string
  subtitle: string
  description: string
  plates: CurationPlateRef[]
  accent: string
  season?: string
  edition?: string
}

export const curations: Curation[] = [
  {
    id: 'new-arrivals-autumn-26',
    title: 'New Arrivals — Autumn ’26',
    subtitle: 'Just unboxed from the atelier',
    description:
      'Eight plates that arrived last. Sharper focus states, softer clay, and a command palette that finally feels fast. Each one built for production in the last cycle — zero-deps, verified live, and cut to fit the permanent collection without shouting.',
    accent: '#C9A86A',
    season: 'AW26',
    edition: '001',
    plates: [
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk' },
      { bookId: 'overlays', plateId: 'overlays-command-dialog' },
      { bookId: 'forms', plateId: 'forms-search-cmdk' },
      { bookId: 'buttons', plateId: 'buttons-magnetic-hover' },
      { bookId: 'cards', plateId: 'cards-interactive-hover-lift' },
      { bookId: 'data-display', plateId: 'data-display-bar-chart-css-only' },
      { bookId: 'marketing', plateId: 'marketing-hero-with-mockup' },
      { bookId: 'foundations', plateId: 'foundations-motion-spring' },
    ],
  },
  {
    id: 'permanent-collection',
    title: 'Essentials — The Permanent Collection',
    subtitle: 'The plates we return to',
    description:
      'Ten quiet standards. The kind you reach for without thinking — minimal pill, hairline card, grotesk sans, soft diffuse shadow. No novelty, no seasonal dye. These are the white oxfords of the store: they make everything else look intentional.',
    accent: '#141210',
    season: 'Permanent',
    edition: 'Archive',
    plates: [
      { bookId: 'foundations', plateId: 'foundations-grotesk-sans' },
      { bookId: 'foundations', plateId: 'foundations-mono-stack' },
      { bookId: 'foundations', plateId: 'foundations-palette-paper-ink-terracotta' },
      { bookId: 'foundations', plateId: 'foundations-shadow-soft-diffuse' },
      { bookId: 'foundations', plateId: 'foundations-spacing-8' },
      { bookId: 'buttons', plateId: 'buttons-minimal-pill' },
      { bookId: 'cards', plateId: 'cards-minimal-border' },
      { bookId: 'forms', plateId: 'forms-text-minimal' },
      { bookId: 'navigation', plateId: 'navigation-header-minimal' },
      { bookId: 'marketing', plateId: 'marketing-footer-minimal' },
    ],
  },
  {
    id: 'staff-picks-atelier',
    title: 'Staff Picks — Atelier Favorites',
    subtitle: 'From the worktable',
    description:
      'Six favorites from the people who build here. Chosen not for novelty but for how they feel under the hand — the pressed clay inset, the editorial floating label that lifts like a letterpress proof, the glass card that holds over video without fogging.',
    accent: '#8A6B3E',
    season: 'Staff',
    edition: 'Atelier',
    plates: [
      { bookId: 'forms', plateId: 'forms-clay-inset' },
      { bookId: 'forms', plateId: 'forms-editorial-floating' },
      { bookId: 'cards', plateId: 'cards-glass-frosted' },
      { bookId: 'buttons', plateId: 'buttons-clay-pressed' },
      { bookId: 'overlays', plateId: 'overlays-hover-card' },
      { bookId: 'data-display', plateId: 'data-display-metric-card' },
    ],
  },
  {
    id: 'rare-limited-editions',
    title: 'Rare — Limited Editions',
    subtitle: 'Experimental, small run',
    description:
      'Five plates that take a risk. Neon rim on void, retro pixel corners, gradient mesh that shifts on hover. Editioned, not permanent. For projects that want a signature — one plate that says you were here.',
    accent: '#4A1C1C',
    season: 'Rare',
    edition: 'LE 05',
    plates: [
      { bookId: 'buttons', plateId: 'buttons-future-neon' },
      { bookId: 'buttons', plateId: 'buttons-retro-8bit' },
      { bookId: 'buttons', plateId: 'buttons-gradient-mesh' },
      { bookId: 'overlays', plateId: 'overlays-lightbox' },
      { bookId: 'marketing', plateId: 'marketing-before-after-slider' },
    ],
  },
  {
    id: 'soft-tactile',
    title: 'Soft / Tactile',
    subtitle: 'Touch first',
    description:
      'Clay, paper, neumorphic, and pressed depth. These plates are for hands, not eyes — inflated buttons, inset inputs, layered shadows that catch light like linen. If your product should feel held, start here.',
    accent: '#E8D5A8',
    season: 'Texture',
    edition: 'Soft',
    plates: [
      { bookId: 'buttons', plateId: 'buttons-clay-pressed' },
      { bookId: 'buttons', plateId: 'buttons-neumorphic' },
      { bookId: 'cards', plateId: 'cards-clay-inflated' },
      { bookId: 'forms', plateId: 'forms-clay-inset' },
      { bookId: 'overlays', plateId: 'overlays-modal-bottom-sheet' },
      { bookId: 'foundations', plateId: 'foundations-shadow-layered-depth' },
      { bookId: 'foundations', plateId: 'foundations-radius-soft' },
    ],
  },
  {
    id: 'sharp-editorial',
    title: 'Sharp / Editorial',
    subtitle: 'Cut, not decorated',
    description:
      'Minimal, brutalist, future, editorial. Hairline rules, ink borders, serif headlines with a 4px kink. For when the content is the design. No softness added where sharpness is the point.',
    accent: '#1B3329',
    season: 'Editorial',
    edition: 'Sharp',
    plates: [
      { bookId: 'foundations', plateId: 'foundations-editorial-serif' },
      { bookId: 'foundations', plateId: 'foundations-shadow-crisp-brutalist' },
      { bookId: 'buttons', plateId: 'buttons-editorial-outline' },
      { bookId: 'buttons', plateId: 'buttons-brutalist-offset' },
      { bookId: 'cards', plateId: 'cards-editorial-feature' },
      { bookId: 'cards', plateId: 'cards-brutalist-shadow' },
      { bookId: 'marketing', plateId: 'marketing-hero-editorial' },
      { bookId: 'navigation', plateId: 'navigation-breadcrumbs' },
    ],
  },
  {
    id: 'founders-stack',
    title: 'Complete System — Founders Stack',
    subtitle: 'One cart, full store',
    description:
      'A full SaaS in seven plates. Header, form shell, data table, metric card, command palette, pricing tier, footer. Chosen to work together — same radii, same shadow, same density. Copy the set and you have a product. No assembly required.',
    accent: '#C17C60',
    season: 'System',
    edition: '001 / Full Set',
    plates: [
      { bookId: 'navigation', plateId: 'navigation-header-minimal' },
      { bookId: 'forms', plateId: 'forms-form-shell-sections' },
      { bookId: 'data-display', plateId: 'data-display-table-dense-with-sort' },
      { bookId: 'data-display', plateId: 'data-display-stats-4-col' },
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk' },
      { bookId: 'marketing', plateId: 'marketing-pricing-tier-3' },
      { bookId: 'marketing', plateId: 'marketing-footer-mega' },
    ],
  },
  {
    id: 'void-after-hours',
    title: 'Void — After Hours',
    subtitle: 'Dark mode, done right',
    description:
      'Six plates for when the lights go down. Glass on void, neon rims, magnetic hover that follows the cursor. Built for dashboards, command palettes, and hero sections that need to feel like night.',
    accent: '#2A2E33',
    season: 'Noir',
    edition: 'Void',
    plates: [
      { bookId: 'foundations', plateId: 'foundations-palette-void-glass' },
      { bookId: 'buttons', plateId: 'buttons-glass-morphism' },
      { bookId: 'navigation', plateId: 'navigation-command-palette-cmdk' },
      { bookId: 'navigation', plateId: 'navigation-sidebar-icon-rail' },
      { bookId: 'buttons', plateId: 'buttons-future-neon' },
      { bookId: 'buttons', plateId: 'buttons-magnetic-hover' },
    ],
  },
]

export function getCurationById(id: string): Curation | undefined {
  return curations.find(c => c.id === id)
}

export function getPlatesForCuration(curationId: string): Array<{ bookId: string; plateId: string; plate?: Plate }> {
  const c = getCurationById(curationId)
  if (!c) return []
  return c.plates.map(ref => {
    const book = booksById[ref.bookId]
    const plate = book?.plates.find(p => p.id === ref.plateId)
    return { ...ref, plate }
  })
}

export function getAllCurationPlateIds(): Set<string> {
  const set = new Set<string>()
  for (const c of curations) {
    for (const p of c.plates) set.add(`${p.bookId}:${p.plateId}`)
  }
  return set
}
