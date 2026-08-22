export type BookEditorial = {
  bookId: string
  title: string
  subtitle: string
  lineage: string
  body: string
  colophon?: string
}

export type StoreManifesto = {
  title: string
  body: string
  principles: string[]
  footer: string
}

export const storeManifesto: StoreManifesto = {
  title: 'Bhenre — A Design Store for the Web',
  body: 'Bhenre is a bookstore for interfaces. Twelve volumes, 214 plates, each cut and sewn by hand in code. We treat components the way 10 Corso Como treats clothing — not as trends, but as goods with provenance, material, and a long shelf life. Every plate here is real HTML and scoped CSS, zero dependencies, verified in a real browser. No lorem, no mock, no synthetic data. If it is in the store, it ships. If it does not ship, it is not here.',
  principles: [
    'Material first — paper, ink, brass, stone. Tokens you can hold.',
    'Provenance over novelty — every plate lists its tokens, props, and use cases.',
    'Quiet luxury — soft shadows, 44px nav, 58/42 map/story, mono where it helps, serif where it matters.',
    'Zero-deps as a feature — stdlib only, offline-ready, honest 503 over fake success.',
  ],
  footer: 'Est. 2026 • Rare Book Room • Bhenre Collection No. 001 / 500',
}

export const bookEditorials: Record<string, BookEditorial> = {
  foundations: {
    bookId: 'foundations',
    title: 'Foundations',
    subtitle: 'Vol. 01 — The ground the store stands on',
    lineage:
      'Bauhaus color theory + Swiss grid + Japanese joinery. Josef Albers taught that color is relational; this book treats paper, ink, terracotta and void the same way — always in context, never alone.',
    body: 'Foundations are decisions, not defaults. This volume holds the contracts everything else signs: type scales that stretch without breaking (fluid clamp), spacing on 4 and 8, radii softened to 8/12/16/24, shadows that lift without shouting, and motion timed to feel like a hinge, not a bounce. We keep three type stacks — editorial serif for opinion, grotesk sans for UI, mono for provenance — and we never add a fourth without removing one. The palette is Japandi v4 at its core: warm paper #F9F6F0, soft ink #2A2A2A, fired terracotta #C17C60, void #1E2022, with moss, clay, and stone as secondary earths. Every token here appears in at least three plates elsewhere. If it does not travel, it does not stay.',
    colophon: 'Set in Instrument Serif, General Sans, JetBrains Mono. Paper #FFFEFB, ink #141210. Printed on soft diffuse shadow.',
  },
  buttons: {
    bookId: 'buttons',
    title: 'Buttons',
    subtitle: 'Vol. 02 — Promises you can press',
    lineage:
      'Dieter Rams’ Braun + early web pill buttons + Aesop apothecary labels. A button should feel like a well-made lighter — weight, click, and no extra parts.',
    body: 'Buttons are promises kept in public. This book collects twenty-five ways to keep them, from the quiet minimal pill (our default, 44px, ink on paper) to magnetic hover that follows the cursor like a compass needle. Each plate is a real <button>, keyboardable, 44px minimum, with focus visible and a 140–450ms motion curve that matches its personality — snappy for tools, springy for play, ease-out for calm. We avoid ghost buttons that disappear on hover; if it matters, it has an edge. If it is secondary, it is still tappable. No div pretending to be a button. Ever.',
    colophon: '25 plates. 9 styles. All <button>. No synthetic hover.',
  },
  forms: {
    bookId: 'forms',
    title: 'Forms',
    subtitle: 'Vol. 03 — Conversations, not fields',
    lineage:
      'Muji forms + Swiss corporate + Braun calculator. A good form feels like filling out a library card — clear labels, generous hit areas, and no tricks.',
    body: 'Forms are conversations where the user does most of the talking. This volume treats every input as a turn-taking device: minimal text with terracotta focus, editorial floating labels that lift like a letterpress proof, brutalist borders with offset shadows for handles, glass inputs for over imagery, and clay insets that press when you type. We keep validation inline and honest — success is moss, error is terracotta, never red that shouts. Native where it matters (date, file, color), custom where it delights (multiselect pills, OTP, command-k search). Every plate is accessible, keyboard-first, and built with zero dependencies. If a screen reader cannot use it, it is not a plate.',
    colophon: '25 plates. Real <input>, <select>, <textarea>. No third-party form lib.',
  },
  cards: {
    bookId: 'cards',
    title: 'Cards',
    subtitle: 'Vol. 04 — Rooms for ideas',
    lineage:
      'Donald Judd boxes + Japanese bento + Italian newsstand. A card should hold one idea completely, like a bento holds lunch.',
    body: 'Cards are rooms. Small, bounded, with a door. This book holds twenty — from minimal border (hairline, 16px radius, quiet hover lift) to glass frosted that holds over video without fogging, from clay inflated that feels squishy even when it is not, to brutalist shadow that punches. We include working rooms, not just pretty ones: stats with sparkline, profile with avatar and status, pricing with trustworthy density, testimonial with serif quote, product with price and ATC. Each card is a self-contained story with real HTML and honest tokens — border, radius, pad, shadow, nothing hidden.',
    colophon: '20 plates. Max-width 320–400px. No layout shift on hover.',
  },
  navigation: {
    bookId: 'navigation',
    title: 'Navigation',
    subtitle: 'Vol. 05 — Wayfinding as material',
    lineage:
      'Wayfinding signage (Massimo Vignelli) + Dover Street Market floor plan + command-line. Movement is material — density, hierarchy, and affordance before decoration.',
    body: 'Navigation is architecture made visible. This volume treats movement as a material choice: how dense should the shelf feel? How quickly can a hand find the book? We hold twenty systems — minimal 44px sticky header, full-bleed mega menu with grouped sections, cozy collapsible sidebar with memory of open state, compact 56px icon rail with tooltip labels, editorial breadcrumbs with slash separator, numbered pagination with ellipsis, soft clay load-more with progress, underline tabs with sliding ink indicator, pill tabs with bouncy active state, segmented control with sliding thumb, glass bottom nav for mobile with safe-area padding, command palette with search and groups, dropdown with shortcuts, context menu, horizontal and vertical steppers, anchor nav, table of contents with depth, skip links, and back-to-top with progress ring. Each one orients, moves, and anchors without adding chrome.',
    colophon: '20 plates. All aria-labeled. No hamburger that hides the store.',
  },
  'data-display': {
    bookId: 'data-display',
    title: 'Data Display',
    subtitle: 'Vol. 06 — Tables, stats, and the truth',
    lineage:
      'Edward Tufte + Bloomberg terminal + Japanese train schedule. Data should be dense, not decorated. If you can read it from across the room, it is right.',
    body: 'Data display is where taste meets proof. This volume holds twenty plates for when the product has to tell the truth: minimal and dense tables with sort, 4-col and trend stats, vertical and horizontal timelines, lists with avatars and actions, empty states that do not apologize, skeleton loaders that respect the grid, bar charts and sparklines built in CSS only (zero JS), radial and linear progress, badge counts, tag clouds, definition lists, comparison tables, kanban columns, and metric cards. All zero-deps. All tabular numbers where numbers matter. No chart library that costs 200kb to say “up and to the right.”',
    colophon: '20 plates. Tabular-nums, mono where needed, no synthetic data.',
  },
  overlays: {
    bookId: 'overlays',
    title: 'Overlays',
    subtitle: 'Vol. 07 — Interruptions with manners',
    lineage:
      'Shoji screens + Aritzia fitting room + Apple Sheets. An overlay should feel like a screen sliding, not a wall appearing.',
    body: 'Overlays are interruptions. Good ones apologize by being easy to dismiss. This volume holds fifteen — centered modal, right drawer, bottom sheet, popover, tooltip, toast stack, confirm dialog, command dialog, dropdown with search, hover card, lightbox, alert banner, coach mark, context sheet, nested modal. Each one traps focus correctly, closes on Esc, returns focus to trigger, and respects safe-area on mobile. Shadows are soft diffuse (0 8px 24px) not hard drop. No overlay that cannot be dismissed with a keyboard. No toast that covers the work.',
    colophon: '15 plates. Focus trap, Esc, return focus. No body-scroll lock bugs.',
  },
  marketing: {
    bookId: 'marketing',
    title: 'Marketing',
    subtitle: 'Vol. 08 — Proof, not promise',
    lineage:
      'SSENSE editorial + Aritzia lookbook + Pudding essay. Marketing should read like a store window — one strong idea, well lit, with price visible.',
    body: 'Marketing is proof, not promise. These twenty plates lead with typography, space, and real numbers over decoration: editorial hero with serif headline, split hero with card stack, hero with browser mockup and floating tokens, three-up feature grid, vertical feature list with connecting line, three-tier pricing with recommended highlight, monthly/annual toggle, large editorial quote, masonry testimonial wall, logo cloud with mono labels, terracotta CTA banner, CTA with email input, minimal and mega footers, editorial newsletter, comparison table, FAQ accordion, press quote, before/after slider with draggable divider, void stats bar. Each one is built to avoid artifact token limits — real Vite, no lorem, no “trusted by 10k” that cannot be named.',
    colophon: '20 plates. Mono kicker, serif headline, 36ch measure.',
  },
  layouts: {
    bookId: 'layouts',
    title: 'Layouts',
    subtitle: 'Vol. 09 — The shelves themselves',
    lineage:
      'Case Study Houses + 10 Corso Como floor plan + 58/42 map/story. The shelf is the design. If the grid is right, the plates look right.',
    body: 'Layouts are the shelves the other books sit on. This volume holds fifteen — from the Pudding-style 58/42 map/story (72vh sticky, 44px mono nav, prose 640 / breakout 1100) to holy grail, centered prose, dashboard 58/42, 3-col dashboard, masonry grid, breakout 1100, admin shell, blank canvas grid, and resizable workspace. Each layout is a full page shell, not a component. It includes nav, main, and footer with correct sticky, safe-area, and overflow handling. We keep one air — 24px — and we do not break it for decoration. If the content does not fit the shelf, we change the content, not the shelf.',
    colophon: '15 plates. 24px air. 58/42 where maps are central.',
  },
  media: {
    bookId: 'media',
    title: 'Media',
    subtitle: 'Vol. 10 — Images that hold',
    lineage:
      'Haworth store display + Aritzia gallery + Polaroid. Media should feel held, not displayed. Like a print in a hand, not a file in a folder.',
    body: 'Media is where the web touches the real world. Twelve plates — avatar stack, status, aspect ratio box, image with caption, figure zoom, carousel minimal, gallery grid, masonry, lightbox gallery, audio wave, video with safe chrome, filter sidebar for the archive. Each one treats images as objects with weight, not as decoration. Aspect ratios are locked (1:1, 16:10, 4:3, 3:2), captions are close and small, zoom is gentle (1.04, not 1.2), and no layout shift on load. We use CSS-only where possible, no lightbox lib that costs more than the images.',
    colophon: '12 plates. Aspect-ratio locked, no CLS, no external gallery.',
  },
  feedback: {
    bookId: 'feedback',
    title: 'Feedback',
    subtitle: 'Vol. 11 — The store talks back',
    lineage:
      'Muji instruction + Braun Dieter Rams + Japanese train chime. Feedback should be felt, not read. A soft chime, a gentle nudge, not a shout.',
    body: 'Feedback is how the store talks back. Twelve plates — inline help, alert info/success/warn/error, toast stack, offline banner, loader spinner/dots/bar, confetti success, copy feedback, empty illustration, blank canvas grid, and inline validation. Each one is quiet, confident, and dismissible. Alerts use moss for success, terracotta for warning, ink for info — never red that feels like an alarm unless it is an alarm. Loaders are 14px, 140ms snap, tabular numbers where time matters. Confetti is CSS only, 12 pieces, not 200. If the user did something right, we tell them softly. If they did something wrong, we tell them kindly and show how to fix it.',
    colophon: '12 plates. 14px spinner, moss/terracotta, CSS confetti.',
  },
  commerce: {
    bookId: 'commerce',
    title: 'Commerce',
    subtitle: 'Vol. 12 — The till',
    lineage:
      'Aritzia checkout + Apple Store bag + Dover Street Market till. Commerce should feel like a well-made wallet — slim, secure, and easy to close.',
    body: 'Commerce is where the store has to be most careful. Twelve plates — product minimal, product with gallery, cart line item, cart summary, checkout steps, masked credit card with brand icon, shipping estimator, order summary, auth centered and split, admin shell for orders, and filter sidebar for the archive. Each one is dense where it needs to be (price, shipping, tax), airy where it can be (product story), and never tricksy. No dark patterns, no “only 2 left” that lies. Real HTML, real forms, honest tokens. If it touches money, it gets the best type and the most testing.',
    colophon: '12 plates. Real forms, masked card, no dark patterns.',
  },
}

export function getBookEditorial(bookId: string): BookEditorial | undefined {
  return bookEditorials[bookId]
}

export function getAllBookEditorials(): BookEditorial[] {
  return Object.values(bookEditorials)
}
