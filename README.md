# Component Books — 12-Volume Compendium

Build any site from the suite of books of components. 214 plates across 12 books, each comprehensive enough for any design dream.

Live:
- https://component-books-20gs9k06c-cams-projects-c5c4c5f6.vercel.app (Vercel auto-deploy)
- https://slasso.com (custom domain — add in Vercel dashboard)

## Books (12)

1. **foundations** — 18 plates (typography, palettes, spacing, radius, shadows, motion)
2. **buttons** — 25 plates (pill → duotone)
3. **forms** — 25 plates (minimal input → form shell)
4. **cards** — 20 plates (minimal border → dashboard widget)
5. **navigation** — 20 plates (header minimal, mega, sidebar, tabs, command palette, breadcrumbs, stepper, etc)
6. **data-display** — 20 plates (table minimal, dense sort, stats, timeline, charts CSS-only)
7. **overlays** — 15 plates (modal, drawer, bottom sheet, popover, toast, lightbox, etc)
8. **marketing** — 20 plates (hero editorial/split/mockup, features, pricing, testimonials, footer, FAQ)
9. **layouts** — 15 plates (58/42 map/story → resizable workspace)
10. **media** — 12 plates (avatar stack → lightbox gallery)
11. **feedback** — 12 plates (alerts, empties, skeletons, confetti)
12. **commerce** — 12 plates (product minimal → shipping estimator)

Each plate: `id`, `name`, `style`, `description`, real `html` + scoped `css`, `props`, `tokens`, `useCases`.

## App Views

- **Library** — bookshelf grid 12 covers with live preview
- **Reader** — rail + stage live/spec/code + inspector tokens/props/useCases
- **Dictionary** — searchable index, filters by book/style
- **Atelier** — token editor (radius/shadow/accent/paper/density), stack reorder, picks per book, live assembled page, export CSS vars/Tailwind/JSON, copy HTML, shuffle

## Dev

```bash
npm install
npm run dev      # localhost:5173
npm run build    # dist/
npm run typecheck
```

## Deploy

Vercel native GitHub integration auto-deploys on push to `main`.

- Framework: Vite, Build: `vite build`, Output: `dist`
- Custom domain: add `slasso.com` in Vercel → Project → Settings → Domains
  - Vercel will show DNS: `A @ 76.76.21.21` or `CNAME www cname.vercel-dns.com`
  - Current DNS for slasso.com: 216.150.1.193, 216.150.16.129 (parking) — needs update to Vercel

GitHub Pages fallback workflow also included (optional).

