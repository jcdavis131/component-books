import type { DesignTokens, Book } from './types.ts'
import { booksById } from './books.ts'

export const defaultTokens: DesignTokens = {
  radius: '12px',
  shadow: 'soft',
  accent: '#C9A86A',
  paper: '#FFFEFB',
  ink: '#141210',
  fontSans: 'ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, ui-serif, Georgia, serif',
  fontMono: 'ui-monospace, "Berkeley Mono", "SF Mono", monospace',
  density: 'cozy'
}

export interface AtelierState {
  tokens: DesignTokens
  picks: Record<string, string> // bookId -> plateId
  stack: string[] // ordered bookIds for page assembly
}

export function createInitialAtelier(): AtelierState {
  const picks: Record<string, string> = {}
  const stack = ['foundations','marketing','navigation','cards','data-display','forms','media','commerce','feedback','layouts']
  // default first plate per book
  for (const bookId of Object.keys(booksById)) {
    const b = booksById[bookId]
    if (b.plates[0]) picks[bookId] = b.plates[0].id
  }
  return { tokens: { ...defaultTokens }, picks, stack }
}

export function tokensToCss(t: DesignTokens): string {
  return `:root{
  --radius:${t.radius};
  --shadow:${t.shadow === 'soft' ? '0 1px 2px rgba(30,32,34,.06),0 8px 24px rgba(30,32,34,.08)' : t.shadow === 'brutal' ? '4px 4px 0 var(--ink)' : '0 12px 32px rgba(0,0,0,.12)'};
  --accent:${t.accent};
  --paper:${t.paper};
  --ink:${t.ink};
  --font-sans:${t.fontSans};
  --font-serif:${t.fontSerif};
  --font-mono:${t.fontMono};
  --density:${t.density === 'compact' ? '0.9' : t.density === 'airy' ? '1.2' : '1'};
}`
}

export function tokensToTailwind(t: DesignTokens): string {
  return `// tailwind.config.js extension
module.exports = {
  theme: {
    extend: {
      colors: { accent: "${t.accent}", paper: "${t.paper}", ink: "${t.ink}" },
      borderRadius: { DEFAULT: "${t.radius}" },
      fontFamily: { sans: ["${t.fontSans.split(',')[0]}"], serif: ["${t.fontSerif.split(',')[0]}"], mono: ["${t.fontMono.split(',')[0]}"] }
    }
  }
}`
}

export function tokensToJson(t: DesignTokens): string {
  return JSON.stringify(t, null, 2)
}

export function shufflePicks(state: AtelierState): AtelierState {
  const next: AtelierState = { tokens: { ...state.tokens }, picks: { ...state.picks }, stack: [...state.stack] }
  for (const bookId of Object.keys(booksById)) {
    const b = booksById[bookId]
    if (!b.plates.length) continue
    const idx = Math.floor(Math.random()*b.plates.length)
    next.picks[bookId] = b.plates[idx].id
  }
  // shuffle accent from palette
  const accents = ['#C17C60','#8A9A8B','#2A2A2A','#1E2022','#A67B5B','#D4C4B0']
  next.tokens.accent = accents[Math.floor(Math.random()*accents.length)]
  next.tokens.radius = ['8px','12px','16px','24px','999px'][Math.floor(Math.random()*5)]
  next.tokens.shadow = (['soft','brutal','layered'] as const)[Math.floor(Math.random()*3)]
  return next
}

export function getPlate(bookId: string, plateId: string) {
  const b = booksById[bookId]
  return b?.plates.find(p => p.id === plateId) || b?.plates[0]
}

export function assemblePage(state: AtelierState): string {
  // Build a full page from stack order, using picked plates where possible
  // Foundations sets tokens, marketing provides hero, etc.
  const parts: string[] = []
  parts.push(`<style>${tokensToCss(state.tokens)}\n*{font-family:var(--font-sans)} h1,h2,h3{font-family:var(--font-serif)}</style>`)
  for (const bookId of state.stack) {
    const plate = getPlate(bookId, state.picks[bookId])
    if (!plate) continue
    parts.push(`<section style="padding:24px;border-bottom:1px solid #E8E0D5;background:var(--paper,${state.tokens.paper})"><div style="max-width:1100px;margin:0 auto">${plate.html}<style>${plate.css}</style></div></section>`)
  }
  return parts.join('\n')
}
