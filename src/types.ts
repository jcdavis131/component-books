export type StyleTag =
  | 'minimal'
  | 'editorial'
  | 'brutalist'
  | 'glass'
  | 'clay'
  | 'corporate'
  | 'playful'
  | 'retro'
  | 'future'
  | 'neumorphic'
  | 'moss'
  | 'terracotta'
  | 'void'

export interface PlateToken {
  name: string
  value: string
  usage: string
}

export interface Plate {
  id: string
  name: string
  style: StyleTag
  description: string
  html: string
  css: string
  props?: string[]
  tokens?: PlateToken[]
  useCases?: string[]
  a11y?: string
  provenance?: string[]
  material?: string[]
  era?: '1920s' | '1960s' | '1990s' | '2020s' | 'timeless'
  mood?: string[]
  repoRef?: string[]
  lineage?: string
}

export interface Book {
  id: string
  title: string
  volume: number
  description: string
  color: string
  accent: string
  plates: Plate[]
  intro?: string
}

export interface DesignTokens {
  radius: string
  shadow: string
  accent: string
  paper: string
  ink: string
  fontSans: string
  fontSerif: string
  fontMono: string
  density: 'compact' | 'cozy' | 'airy'
}

export type View = 'guide' | 'catalogue' | 'studio' | 'library' | 'reader' | 'dictionary' | 'atelier' | 'thinking'

