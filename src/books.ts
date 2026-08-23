import type { Book } from './types.ts'
import { book as foundations } from './books/foundations.ts'
import { book as buttons } from './books/buttons.ts'
import { book as forms } from './books/forms.ts'
import { book as cards } from './books/cards.ts'
import { book as navigation } from './books/navigation.ts'
import { book as dataDisplay } from './books/data-display.ts'
import { book as overlays } from './books/overlays.ts'
import { book as marketing } from './books/marketing.ts'
import { book as layouts } from './books/layouts.ts'
import { book as media } from './books/media.ts'
import { book as feedback } from './books/feedback.ts'
import { book as commerce } from './books/commerce.ts'

export const books: Book[] = [
  { ...foundations, volume: 1, id: 'foundations', title: 'Foundations' },
  { ...buttons, volume: 2, id: 'buttons', title: 'Buttons' },
  { ...forms, volume: 3, id: 'forms', title: 'Forms' },
  { ...cards, volume: 4, id: 'cards', title: 'Cards' },
  { ...navigation, volume: 5, id: 'navigation', title: 'Navigation' },
  { ...dataDisplay, volume: 6, id: 'data-display', title: 'Data Display' },
  { ...overlays, volume: 7, id: 'overlays', title: 'Overlays' },
  { ...marketing, volume: 8, id: 'marketing', title: 'Marketing' },
  { ...layouts, volume: 9, id: 'layouts', title: 'Layouts' },
  { ...media, volume: 10, id: 'media', title: 'Media' },
  { ...feedback, volume: 11, id: 'feedback', title: 'Feedback' },
  { ...commerce, volume: 12, id: 'commerce', title: 'Commerce' },
]

export const booksById = Object.fromEntries(books.map(b => [b.id, b])) as Record<string, Book>

// Re-export composite research for provenance linking (minimal touch)
// Plates can reference compositeLibrary via provenance / repoRef
export { compositeLibrary, compositeSources, compositeCategories, decisionMappings, vizMappings } from './research/compositeLibrary.ts'
export type { CompositeSource, CompositeCategory, CompositeComponent } from './research/compositeLibrary.ts'
