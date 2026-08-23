import type { AtelierState } from './atelier.ts'
import type { DesignTokens } from './types.ts'

export type DesignCard = {
  id: string
  name: string
  description: string
  tokens: DesignTokens
  picks: Record<string, string>
  stack: string[]
  author: 'atelier' | 'curator' | 'guide' | 'swarm'
  createdAt: string
  accent?: string
  edition?: string
  rarity?: 'common' | 'uncommon' | 'rare' | 'archival'
}

const STORAGE_KEY = 'cb-design-cards'

export function generateDesignCardFromAtelier(atelier: AtelierState, nameHint?: string): DesignCard {
  const now = new Date().toISOString()
  const id = `card-${now.slice(0,10)}-${Math.random().toString(36).slice(2,6)}`
  return {
    id,
    name: nameHint || `Bhenre System • ${atelier.tokens.accent} • ${atelier.stack.length} sections`,
    description: `Composed from ${Object.keys(atelier.picks).length} picks, ${atelier.stack.length} sections in stack. Radius ${atelier.tokens.radius}, shadow ${atelier.tokens.shadow}, density ${atelier.tokens.density}. Accent ${atelier.tokens.accent} on ${atelier.tokens.paper}.`,
    tokens: { ...atelier.tokens },
    picks: { ...atelier.picks },
    stack: [...atelier.stack],
    author: 'atelier',
    createdAt: now,
    accent: atelier.tokens.accent,
    edition: `Autumn ’26 • ${now.slice(0,7)}`,
    rarity: 'uncommon'
  }
}

// alias for task spec
export const generateCardFromAtelier = generateDesignCardFromAtelier

export function designCardToSharePayload(card: DesignCard): string {
  try {
    const payload = {
      t: card.tokens,
      p: card.picks,
      s: card.stack,
      n: card.name,
      e: card.edition
    }
    const json = JSON.stringify(payload)
    return btoa(encodeURIComponent(json))
  } catch {
    return ''
  }
}

export function sharePayloadToDesignCard(b64: string): Partial<DesignCard> | null {
  try {
    const json = decodeURIComponent(atob(b64))
    const obj = JSON.parse(json)
    if (!obj || !obj.t) return null
    return {
      tokens: obj.t,
      picks: obj.p,
      stack: obj.s,
      name: obj.n,
      edition: obj.e
    } as any
  } catch {
    return null
  }
}

// Share via URL helpers
export function encodeAtelier(atelier: AtelierState): string {
  return designCardToSharePayload({
    tokens: atelier.tokens,
    picks: atelier.picks,
    stack: atelier.stack,
    name: `Bhenre`,
    description: '',
    id: 'tmp',
    author: 'atelier',
    createdAt: new Date().toISOString()
  } as DesignCard)
}

export function decodeAtelier(str: string): Partial<AtelierState> | null {
  const dc = sharePayloadToDesignCard(str)
  if (!dc) return null
  return {
    tokens: dc.tokens as DesignTokens,
    picks: dc.picks as Record<string,string>,
    stack: dc.stack as string[]
  }
}

// Persistence
export function saveDesignCards(cards: DesignCard[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards.slice(0, 20)))
  } catch {}
}

export function loadDesignCards(): DesignCard[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export function saveDesignCard(card: DesignCard): void {
  const existing = loadDesignCards()
  const filtered = existing.filter(c => c.id !== card.id)
  filtered.unshift(card)
  saveDesignCards(filtered.slice(0, 20))
}

export function deleteDesignCard(id: string): void {
  const existing = loadDesignCards()
  saveDesignCards(existing.filter(c => c.id !== id))
}
