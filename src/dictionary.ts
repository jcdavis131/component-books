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

export function searchDict(q: string, filters: { style?: string, bookId?: string, repo?: string } = {}) {
  const query = q.trim().toLowerCase()
  return dictionary.filter(entry => {
    if (filters.style && entry.plate.style !== filters.style) return false
    if (filters.bookId && entry.bookId !== filters.bookId) return false
    if (filters.repo) {
      // repo filter handled externally via composite mapping, but keep for future
      const hayRepo = `${entry.plate.provenance?.join(' ')}`.toLowerCase()
      if (!hayRepo.includes(filters.repo.toLowerCase())) {
        // allow pass if repo not in provenance — external filter will prune
      }
    }
    if (!query) return true
    const hay = `${entry.plate.name} ${entry.plate.description} ${entry.plate.style} ${entry.bookTitle} ${entry.plate.useCases?.join(' ')} ${entry.plate.props?.join(' ')} ${entry.plate.tokens?.map(t=>`${t.name} ${t.value} ${t.usage}`).join(' ')} ${entry.plate.provenance?.join(' ')}`.toLowerCase()
    return hay.includes(query)
  })
}

export function allStyles(): string[] {
  return [...new Set(dictionary.map(d => d.plate.style))].sort()
}

export function getPlateLineage(bookId: string, plateId: string, compositeCategories: any[]): string[] {
  const refs: string[] = []
  for (const cat of compositeCategories) {
    for (const comp of cat.components || []) {
      const match = comp.platesRef?.some((r:any)=> r.bookId===bookId && r.plateId===plateId)
      if (match && comp.repoRef) refs.push(comp.repoRef)
    }
  }
  return [...new Set(refs)]
}
