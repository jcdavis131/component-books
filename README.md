# Component Books — 12-Volume Compendium

> Like a chair book, but for web app parts. 12 books, 214 plates, every design dream has a home.

A **real Vite static site** built to avoid artifact token limits. GitHub-ready, Vercel-ready, offline-ready. Zero-deps runtime, Japandi v4 tokens, Pudding-style editorial.

## Volumes

1. **Foundations** — typography scales, palettes, spacing, radius, shadows, motion (18 plates)
2. **Buttons** — 25 archetypes: pill, outline, brutalist, glass, clay, corporate, playful, retro, future, neumorphic, icon, loading, split, ghost, link, FAB, segmented, social, gradient, dotted, kbd, toggle, arrow slide, magnetic, duotone
3. **Forms** — 25 plates: minimal input, floating label, brutalist, glass, clay, corporate dense, search cmdk, textarea, select, multi-select pills, date, range, toggle switch, checkbox card, radio, file drop, OTP, phone country, color picker, slider ticks, number stepper, credit card, autocomplete, inline validation, form shell
4. **Cards** — 20 surfaces: minimal border, editorial feature, brutalist shadow, glass, clay inflated, stats, profile, pricing, testimonial, image cover, horizontal, hover lift, list row, metric sparkline, notification, product, article, comparison, calendar, dashboard widget
5. **Navigation** — 20 wayfinding: header minimal/mega, sidebar collapsible/icon rail, breadcrumbs, pagination numbers/load-more, tabs underline/pills, segmented, bottom nav, command palette, dropdown, context menu, stepper h/v, anchor nav, TOC, skip links, back-to-top
6. **Data Display** — 20 plates: tables minimal/dense, stats 4-col/trend, timelines v/h, lists avatars/actions, empty, skeleton, bar chart CSS-only, sparkline, radial/linear progress, badge count, tag cloud, definition list, comparison table, kanban column
7. **Overlays** — 15: modal centered, drawer right, bottom sheet, popover, tooltip, toast stack, dialog confirm, command dialog, dropdown search, hover card, lightbox, alert banner, coach mark, context sheet, nested modal
8. **Marketing** — 20: heroes editorial/split/mockup/void, feature grid/list, pricing tier 3/toggle, testimonial quote/wall, logo cloud, CTA banner/input, footer minimal/mega, newsletter, comparison, FAQ accordion, press quote, before/after slider
9. **Layouts** — 15: dashboard 58/42 map/story (Japandi flagship), 3-col, admin shell, auth centered/split, settings tabs/sidebar, blank canvas grid, sticky header page, holy grail, masonry, centered prose 640, breakout 1100, split editor/preview, resizable workspace
10. **Media** — 12: avatar stack/status, image caption, gallery grid/masonry, carousel, video poster, audio wave, aspect ratio, image comparison slider, figure zoom, lightbox gallery
11. **Feedback** — 12: alerts info/warn/error/success, empty CSS-only, skeleton text/card, spinner/dots/bar, inline help, offline banner, copy feedback, confetti success
12. **Commerce** — 12: product minimal/quick-add, cart line/summary, checkout steps, price discount, qty selector, filter sidebar, sort dropdown, wishlist, order summary, shipping estimator

**Total: ~214 plates** — each plate is real HTML + scoped CSS, not a screenshot.

## App Views

- **Library** — bookshelf grid of 12 books as covers with live preview. Click to read.
- **Reader** — rail list of plates + stage with live/spec/code + inspector with tokens/props/use-cases. Prev/next, copy HTML/CSS, use in Atelier.
- **Dictionary** — searchable index of all plates. Filter by book, style, query. 120 max shown, refine to see more.
- **Atelier** — the playground:
  - Token editor: radius, shadow, accent, paper, density
  - Stack editor: reorder sections (↑/↓) for page assembly
  - Picks per book: choose one plate per family, live preview thumb
  - Live page: assembles full page from stack order, using picked plates + tokens
  - Export: CSS vars / Tailwind config / JSON + copy page HTML + open preview in new tab + shuffle

## Tokens — Japandi v4

- Paper #F9F6F0, Paper-2 #F5F1EB, Paper-3 #E8E0D5
- Stone #D4C4B0, Stone-2 #B8A99A
- Ink #2A2A2A, Ink-2 #4A4A4A
- Terracotta #C17C60, Clay #A67B5B, Moss #8A9A8B
- Void #1E2022
- Radius: sm 8, md 12, lg 16, xl 24, pill 999
- Shadows: soft diffuse (sm/md/lg), crisp brutalist (4px offset), layered depth (colored glow)
- Motion: spring 300ms cubic-bezier(0.34,1.56,0.64,1), ease-out 180ms, snappy 120ms
- Nav: 44px mono, sticky, paper blur
- Grid: 1280 max, prose 640, breakout 1100, 58/42 map/story 72vh sticky

Typography: Instrument Serif / Newsreader fallback → system serif; system sans; JetBrains Mono fallback → system mono. No external fonts required — offline-ready.

## Stack

- Vite 5 + TypeScript 5 — static, zero-deps runtime
- ES modules, no framework
- Modular IIFEs via TS modules, not bundled framework
- `src/books/` — 12 TS files exporting `Book`
- `src/types.ts` — Plate/Book/DesignTokens
- `src/dictionary.ts` — searchable index
- `src/atelier.ts` — playground logic + token export + shuffle + assemble
- `src/main.ts` — app shell, router (hash #/library etc), 4 views, events
- `src/styles.css` — Japandi v4 editorial system
- `index.html` — entry, critical tokens inline for FOUC-less

## Run

```bash
# install (bun or npm)
bun install
# or
npm install

# dev — http://localhost:5173
bun run dev
# or
npm run dev

# build — static dist/
bun run build
# or
npm run build

# preview built
bun run preview
```

## Deploy

### Vercel (recommended)

- Connect GitHub repo → Import → Framework: Vite → Build: `vite build` → Output: `dist`
- Or via CLI: `vercel --prod`

### GitHub Pages

- Build locally, push `dist/` or set Pages to GitHub Actions:
  ```yaml
  # .github/workflows/deploy.yml
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
  - run: npm ci && npm run build
  - uses: peaceiris/actions-gh-pages@v4
    with: { github_token: ${{ secrets.GITHUB_TOKEN }}, publish_dir: ./dist }
  ```

### Netlify / Cloudflare Pages

- Build command: `vite build` — Publish: `dist`

## Structure

```
component-books/
├── index.html
├── vite.config.ts
├── package.json
├── src/
│   ├── main.ts
│   ├── styles.css
│   ├── types.ts
│   ├── books.ts          # aggregates 12 volumes
│   ├── dictionary.ts     # searchable index
│   ├── atelier.ts        # playground + export
│   └── books/
│       ├── foundations.ts  (18 plates)
│       ├── buttons.ts      (25)
│       ├── forms.ts        (25)
│       ├── cards.ts        (20)
│       ├── navigation.ts   (20)
│       ├── data-display.ts (20)
│       ├── overlays.ts     (15)
│       ├── marketing.ts    (20)
│       ├── layouts.ts      (15)
│       ├── media.ts        (12)
│       ├── feedback.ts     (12)
│       └── commerce.ts     (12)
└── dist/                 # built static site
```

## Why not artifact builder?

Artifact builder hit token caps at ~38 plates. This repo is the escape hatch: real files on disk, GitHub-tracked, Vercel-deployable, no token limits. 214 plates, production-grade, Pudding-style editorial, offline-ready.

## License

MIT — build any site from the suite.
