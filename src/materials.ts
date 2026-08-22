export type MaterialTexture = 'paper' | 'linen' | 'clay' | 'brass' | 'glass' | 'stone'

export interface Material {
  id: string
  name: string
  description: string
  hex?: string
  texture: MaterialTexture
  usage: string[]
  warmth: number // 0 cool to 10 warm
}

export const materials: Material[] = [
  {
    id: 'ivory-paper',
    name: 'Ivory Paper',
    description: 'Cold-pressed, 120gsm with a whisper of tooth — like turning the first page of a library book that has never been opened.',
    hex: '#FFFEFB',
    texture: 'paper',
    usage: ['page background', 'letterpress sheets', 'reading stage'],
    warmth: 8,
  },
  {
    id: 'warm-stone',
    name: 'Warm Stone',
    description: 'Tumbled limestone, sun-held and chalky to the touch, softens every edge it borders.',
    hex: '#E8E0D5',
    texture: 'stone',
    usage: ['borders', 'cards', 'divider rules'],
    warmth: 7,
  },
  {
    id: 'ink',
    name: 'Ink',
    description: 'Japanese sumi ground fresh — dense, matte, absolute. It holds a line without wavering.',
    hex: '#141210',
    texture: 'paper',
    usage: ['type', 'void backgrounds', 'active states'],
    warmth: 2,
  },
  {
    id: 'brass',
    name: 'Brass',
    description: 'Polished then left to patina. Warm to the hand, it catches light like a bookmark left in sun.',
    hex: '#C9A86A',
    texture: 'brass',
    usage: ['accent', 'foil titles', 'focus rings', 'top edges'],
    warmth: 9,
  },
  {
    id: 'brushed-brass',
    name: 'Brushed Brass',
    description: 'A quieter brass, drawn with a wire brush until it glows rather than shines — the hardware on a card catalog.',
    hex: '#E8D5A8',
    texture: 'brass',
    usage: ['subtle highlights', 'ghost buttons', 'card catalog rails'],
    warmth: 8,
  },
  {
    id: 'oxblood-leather',
    name: 'Oxblood Leather',
    description: 'Vegetable-tanned, hand-dyed, with a bloom that deepens each time you open it. The smell of a bindery at dusk.',
    hex: '#4A1C1C',
    texture: 'clay',
    usage: ['commerce', 'primary actions', 'rare editions'],
    warmth: 9,
  },
  {
    id: 'forest-wool',
    name: 'Forest Wool',
    description: 'Loden cloth, dense and quiet, cut from the same bolt as a hunting jacket that never needed mending.',
    hex: '#1B3329',
    texture: 'linen',
    usage: ['navigation', 'layouts', 'secondary cloth'],
    warmth: 5,
  },
  {
    id: 'clay',
    name: 'Fired Clay',
    description: 'Terracotta left in the kiln a minute longer — earthen, grounded, slightly dusty like a pottery studio shelf.',
    hex: '#C17C60',
    texture: 'clay',
    usage: ['buttons', 'tags', 'warm accents'],
    warmth: 8,
  },
  {
    id: 'glass',
    name: 'Optical Glass',
    description: 'Not frosted, but clarified — a thin lens that bends light without coloring it, for overlays and scrim.',
    hex: '#F5F1EB',
    texture: 'glass',
    usage: ['overlays', 'modals', 'glassmorphism'],
    warmth: 3,
  },
  {
    id: 'ash',
    name: 'Ash',
    description: 'Pale wood, sanded to 320 grit and oiled once. The underside of a Noguchi stool.',
    hex: '#D4C4B0',
    texture: 'stone',
    usage: ['secondary borders', 'empty states', 'skeleton'],
    warmth: 6,
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    description: 'Not black, but black’s older cousin — soft, smudged, the residue of a life-drawing class.',
    hex: '#2A2A2A',
    texture: 'stone',
    usage: ['void-2', 'code blocks', 'deep shadows'],
    warmth: 2,
  },
  {
    id: 'parchment',
    name: 'Parchment',
    description: 'Vellum made modern — translucent, slightly curled at the edge, holding a watermark you only see when held to light.',
    hex: '#F9F6F0',
    texture: 'paper',
    usage: ['cards', 'paper-2', 'atelier linen'],
    warmth: 7,
  },
  {
    id: 'walnut',
    name: 'Walnut',
    description: 'American black walnut, book-matched and finished with a hand-rubbed oil that darkens where palms have rested.',
    hex: '#3C2415',
    texture: 'stone',
    usage: ['shelving', 'book spines', 'atelier table'],
    warmth: 8,
  },
  {
    id: 'linen',
    name: 'Raw Linen',
    description: 'Belgian flax, loom-state, with slubs that catch shadow — the cloth that wraps a first edition before it goes into a slipcase.',
    hex: '#F5F1EB',
    texture: 'linen',
    usage: ['atelier background', 'book cloth', 'marketing split'],
    warmth: 7,
  },
  {
    id: 'terracotta',
    name: 'Terracotta Wash',
    description: 'A glaze mixed from iron oxide and river clay, wiped back to let the paper show through — warm without insisting.',
    hex: '#A67B5B',
    texture: 'clay',
    usage: ['moss/clay palette', 'secondary CTA', 'feedback warnings'],
    warmth: 8,
  },
]

export const materialsById = Object.fromEntries(materials.map(m => [m.id, m])) as Record<string, Material>
