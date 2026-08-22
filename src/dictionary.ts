import type { Book, Plate } from './types.ts'
import { books } from './books.ts'

export interface DictEntry {
  bookId: string
  bookTitle: string
  volume: number
  plate: Plate
}

export const dictionary: DictEntry[] = books.flatMap(b =>
  b.plates.map(p => ({
    bookId: b.id,
    bookTitle: b.title,
    volume: b.volume,
    plate: p
  }))
)

export function searchDict(q: string, filters: { style?: string, bookId?: string } = {}) {
  const query = q.trim().toLowerCase()
  return dictionary.filter(entry => {
    if (filters.style && entry.plate.style !== filters.style) return false
    if (filters.bookId && entry.bookId !== filters.bookId) return false
    if (!query) return true
    const hay = `${entry.plate.name} ${entry.plate.description} ${entry.plate.style} ${entry.bookTitle} ${entry.plate.useCases?.join(' ')}`.toLowerCase()
    return hay.includes(query)
  })
}

export function allStyles(): string[] {
  return [...new Set(dictionary.map(d => d.plate.style))].sort()
}
