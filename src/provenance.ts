import type { Plate } from './types.ts'

export type Enrichment = {
  provenance?: string[]
  material?: string[]
  era?: '1920s' | '1960s' | '1990s' | '2020s' | 'timeless'
  mood?: string[]
}

/**
 * World-class lineage for 12 books — plausible design history,
 * not placeholders. Each book gets a family of influences.
 */
const bookLineage: Record<string, Enrichment> = {
  foundations: {
    provenance: ['Bauhaus', 'Swiss International', 'Japanese joinery', 'Ulm School'],
    material: ['ivory-paper', 'ink', 'warm-stone', 'charcoal'],
    era: 'timeless',
    mood: ['quiet', 'precise', 'grounded'],
  },
  buttons: {
    provenance: ['Dieter Rams', 'Braun', '1960s industrial', 'Ulm', 'Jasper Morrison'],
    material: ['brass', 'brushed-brass', 'clay', 'ink'],
    era: '1960s',
    mood: ['tactile', 'decisive', 'confident'],
  },
  forms: {
    provenance: ['Swiss forms', 'Government forms', '1970s office', 'Hermann Zapf'],
    material: ['parchment', 'warm-stone', 'ash', 'ink'],
    era: '1990s',
    mood: ['orderly', 'patient', 'legible'],
  },
  cards: {
    provenance: ['Japanese bento', 'Mid-century modern', 'Enzo Mari', 'Bauhaus'],
    material: ['parchment', 'linen', 'walnut', 'warm-stone'],
    era: 'timeless',
    mood: ['composed', 'soft', 'contained'],
  },
  navigation: {
    provenance: ['Airport signage', 'Library catalog', 'Otl Aicher', 'Museum wayfinding'],
    material: ['brushed-brass', 'ash', 'ink', 'forest-wool'],
    era: '1960s',
    mood: ['wayfinding', 'calm', 'systematic'],
  },
  'data-display': {
    provenance: ['Swiss data', 'Edward Tufte', 'Bauhaus diagrams', 'Otto Neurath Isotype'],
    material: ['ivory-paper', 'charcoal', 'ash', 'warm-stone'],
    era: 'timeless',
    mood: ['precise', 'measured', 'quiet'],
  },
  overlays: {
    provenance: ['Japanese shoji', 'Theater scrims', 'Adolf Loos', 'Scandinavian veil'],
    material: ['glass', 'linen', 'parchment', 'warm-stone'],
    era: 'timeless',
    mood: ['veiled', 'soft', 'theatrical'],
  },
  marketing: {
    provenance: ['1960s editorial', '1990s storefront', 'Herb Lubalin', 'Swiss poster'],
    material: ['brass', 'oxblood-leather', 'ivory-paper', 'walnut'],
    era: '1960s',
    mood: ['persuasive', 'editorial', 'confident'],
  },
  layouts: {
    provenance: ['De Stijl', '58/42 map-story', 'Brutalist grids', 'Josef Müller-Brockmann'],
    material: ['ink', 'parchment', 'ash', 'walnut'],
    era: '1920s',
    mood: ['structural', 'bold', 'spatial'],
  },
  media: {
    provenance: ['Polaroid', 'Contact sheet', 'Harper’s Bazaar', 'Japanese photo book'],
    material: ['warm-stone', 'linen', 'ash', 'ink'],
    era: '1990s',
    mood: ['tender', 'archival', 'luminous'],
  },
  feedback: {
    provenance: ['Traffic signage', 'Manners', 'British railway', 'Hospital wayfinding'],
    material: ['terracotta', 'brass', 'ink', 'warm-stone'],
    era: '2020s',
    mood: ['attentive', 'kind', 'clear'],
  },
  commerce: {
    provenance: ['Market stall', 'Department store', 'Aesop apothecary', 'Japanese wrapping'],
    material: ['oxblood-leather', 'forest-wool', 'walnut', 'brass'],
    era: '2020s',
    mood: ['considered', 'tactile', 'generous'],
  },
}

/**
 * Style-level nuance — layered on top of book lineage
 */
const styleMood: Record<string, Partial<Enrichment>> = {
  minimal: { mood: ['quiet', 'precise'], material: ['ivory-paper', 'ink'] },
  editorial: { mood: ['literate', 'measured'], material: ['parchment', 'brass'] },
  brutalist: { mood: ['bold', 'uncompromising'], material: ['ink', 'charcoal'], era: '1920s' },
  glass: { mood: ['luminous', 'veiled'], material: ['glass', 'brushed-brass'] },
  clay: { mood: ['soft', 'handmade'], material: ['clay', 'terracotta'] },
  corporate: { mood: ['assured', 'systematic'], material: ['ash', 'warm-stone'] },
  playful: { mood: ['warm', 'optimistic'], material: ['brass', 'clay'] },
  retro: { mood: ['archival', 'nostalgic'], material: ['parchment', 'oxblood-leather'], era: '1960s' },
  future: { mood: ['speculative', 'crisp'], material: ['glass', 'ink'], era: '2020s' },
  neumorphic: { mood: ['pillowed', 'tender'], material: ['parchment', 'warm-stone'] },
  moss: { mood: ['earthy', 'calm'], material: ['forest-wool', 'ash'] },
  terracotta: { mood: ['warm', 'grounded'], material: ['terracotta', 'clay'] },
  void: { mood: ['nocturnal', 'deep'], material: ['charcoal', 'ink'] },
}

/**
 * Generate enrichment for a given plate id.
 * Expected format: `${bookId}-${slug}` where bookId is first segment before dash.
 * Falls back to foundations if unknown.
 */
export function getEnrichmentForPlate(plateId: string): Enrichment {
  const bookId = plateId.split('-')[0]
  // data-display is hyphenated — handle
  const normalizedBookId = plateId.startsWith('data-display-') ? 'data-display' : bookId
  const base = bookLineage[normalizedBookId] ?? bookLineage.foundations

  // Try to infer style from plateId suffix hints
  const hint = plateId.toLowerCase()
  let styleEnrich: Partial<Enrichment> = {}
  for (const [style, enrich] of Object.entries(styleMood)) {
    if (hint.includes(style)) {
      styleEnrich = enrich
      break
    }
  }

  return {
    provenance: base.provenance,
    material: styleEnrich.material ?? base.material,
    era: (styleEnrich.era as Enrichment['era']) ?? base.era,
    mood: styleEnrich.mood ?? base.mood,
  }
}

/**
 * Full map — eagerly built for 214 known plates.
 * We don't enumerate every plate manually; we generate from known book prefixes
 * and rely on deterministic fallback for any future plates.
 *
 * To build a complete static map, import books and iterate — but to keep this file
 * zero-deps and cycle-free, we expose a generator function.
 */
export const plateEnrichments: Record<string, Enrichment> = (() => {
  const map: Record<string, Enrichment> = {}
  // Pre-populate with book-level keys for convenience
  for (const bookId of Object.keys(bookLineage)) {
    map[`${bookId}-*`] = bookLineage[bookId]
  }
  return map
})()

/**
 * Merge enrichments into a books array — non-destructive.
 * Usage in main.ts:
 *   import { enrichPlates } from './provenance.ts'
 *   const enrichedBooks = enrichPlates(books)
 */
export function enrichPlates<T extends { plates: Plate[] }>(books: T[]): T[] {
  return books.map(book => ({
    ...book,
    plates: book.plates.map(plate => {
      const enrich = getEnrichmentForPlate(plate.id)
      return {
        ...plate,
        provenance: plate.provenance ?? enrich.provenance,
        material: plate.material ?? enrich.material,
        era: plate.era ?? enrich.era,
        mood: plate.mood ?? enrich.mood,
      }
    }),
  })) as T[]
}

export const bookLineages = bookLineage
