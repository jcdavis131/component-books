export type ThinkingChapter = {
  id: string
  title: string
  subtitle: string
  body: string // HTML, 200-400 words
  principles?: string[]
  examples?: string[]
  lineage?: string
}

export const thinkingChapters: ThinkingChapter[] = [
  {
    id: 'tokens-as-material',
    title: 'Tokens as Material',
    subtitle: 'You choose tokens like cloth in an atelier',
    body: `
      <p>Every design system starts in the wrong place: hex codes. We start with material. In the atelier, you don't pick #C9A86A — you pick brass. You hold it, see how it catches light at 4pm, how it patinas against walnut. Tokens are the same.</p>
      <p>Ivory paper #FFFEFB isn't white — it's warm paper that's been sitting in sun. Ink #141210 isn't black — it's ink that has dried slightly brown at the edge. Brass #C9A86A isn't gold — it's brushed, not polished. When you choose these three, you've chosen a feeling before you've drawn a rectangle.</p>
      <p>Radius is how a corner has been handled. 4px is cut on a guillotine. 12px is tumbled like river stone. 24px is inflated like clay. 999px is a pill that's been in a pocket. Shadow is how light falls: soft is north light through linen, brutal is 4px offset like letterpress type, layered is depth from a shelf with three books stacked.</p>
      <p>We keep three densities because they are postures: compact is a tailor standing at a bench, cozy is sitting at a table, airy is lying on the floor with proofs spread out. Choose density first, then tokens follow.</p>
      <p><em>Practice:</em> Pick paper, then accent, then ink — in that order. Never start with accent. If paper and ink feel right alone, accent is decoration. If they feel wrong, no accent saves them.</p>
    `,
    principles: [
      'Material before color — name it brass, not #C9A86A',
      'Paper → Ink → Accent, in that order',
      'Radius is how the corner was handled, not how round it is',
      'Density is posture: compact (standing), cozy (sitting), airy (floor)'
    ],
    examples: [
      'Clay Atelier: ivory paper, brass accent, 16px tumbled radius, layered linen shadow',
      'Ink & Brass: ink paper, brass foil, 12px cut, soft north light',
      'Void Glass: void paper #1E2022, glass texture, 16px inflated, layered depth'
    ],
    lineage: 'Bauhaus material studies + Japanese joinery + Aesop atelier tables'
  },
  {
    id: 'plates-as-rooms',
    title: 'Plates as Rooms',
    subtitle: 'Each component holds one idea completely',
    body: `
      <p>A plate in a chair book doesn't show a chair leg. It shows a chair, complete, lit well, with air around it. Our plates work the same. A button plate isn't a CSS class — it's a room that holds one idea: "a promise you can press."</p>
      <p>Minimal pill holds "quiet confidence." Brutalist offset holds "museum signage." Clay pressed holds "touch first." Each room has four walls: HTML that is real and keyboardable, CSS that is scoped and honest, tokens that it uses (not invents), and use cases that prove it ships. If a plate needs a fifth wall, it's two plates.</p>
      <p>We keep plates small — 280-400px max — because a room should be crossable in three steps. You should see the whole idea without scrolling. Hover is a gentle lift (2px, 180ms), not a circus. Focus is visible, because the room has a door and you need to know where you are.</p>
      <p>The best plates are boring in isolation and beautiful in a stack. Minimal border card does nothing alone. Put it next to stats 4-col and a dense table and it becomes a system.</p>
    `,
    principles: [
      'One plate = one idea, held completely',
      'Four walls: HTML, CSS, tokens, use cases — nothing hidden',
      'Crossable in three steps: 280-400px, no scroll inside',
      'Boring alone, beautiful in a stack'
    ],
    examples: [
      'cards-minimal-border: hairline, 16px radius, quiet hover lift — holds stats, profiles, pricing',
      'buttons-minimal-pill: 44px, ink on paper, no ghost — holds primary action',
      'navigation-header-minimal: 44px sticky, mono, brass rule — holds wayfinding'
    ],
    lineage: 'Donald Judd boxes + Japanese bento + Italian newsstand'
  },
  {
    id: 'stack-is-story',
    title: 'The Stack is the Story',
    subtitle: 'Order creates narrative — 58/42, then proof',
    body: `
      <p>Every good store has a path: you enter, you see the window, you walk to the back where the good stuff is. Web pages are the same. The stack is the story you tell in order.</p>
      <p>We default to: Foundations (ground) → Marketing (window) → Navigation (map) → Cards (rooms) → Data (truth) → Forms (conversation) → Media (hold) → Commerce (till) → Feedback (manners) → Layouts (shelves). This is a story: "We are this (foundations), we make this (marketing), here's how you move (nav), here's what we hold (cards), here's proof (data), talk to us (forms), see it (media), pay (commerce), we'll tell you how it went (feedback)."</p>
      <p>58/42 is a story too: map/story. 72vh sticky for the thing you orient with, 640px prose for the thing you read. Pudding.cool taught us this: if proximity is similarity, layout is argument. Breakout 1100 is a moment where you step closer. Centered prose 640 is where you sit down.</p>
      <p><em>Practice:</em> Write your stack as a sentence before you pick plates. "We are a quiet atelier that proves with data then asks for money." That sentence tells you which books to open.</p>
    `,
    principles: [
      'Stack as sentence: We are ___, we make ___, here is how you move...',
      'Default: Foundations → Marketing → Navigation → Cards → Data → Forms → Media → Commerce → Feedback → Layouts',
      '58/42 = map/story, 72vh sticky, 640 prose — layout as argument',
      'Write stack sentence first, pick plates second'
    ],
    examples: [
      'SaaS: Foundations → Navigation → Data → Cards → Forms — "We orient, we prove, we act"',
      'Marketing: Marketing hero → Feature grid → Pricing → Testimonial wall — "We promise, we show, we prove, we invite"',
      'Atelier: Centered prose → Masonry → Breakout — "We sit, we see, we step closer"'
    ],
    lineage: 'Pudding 58/42 + 10 Corso Como floor plan + Case Study Houses'
  },
  {
    id: 'provenance-over-novelty',
    title: 'Provenance Over Novelty',
    subtitle: 'Why lineage matters more than new',
    body: `
      <p>New is cheap. Lineage is expensive. Every plate in Bhenre lists where it comes from because good design knows its parents.</p>
      <p>Foundations: Bauhaus color theory + Swiss grid + Japanese joinery. Josef Albers taught that color is relational — paper looks different against ink than against void. We treat tokens the same: always in context, never alone. Buttons: Dieter Rams' Braun + early web pill + Aesop apothecary labels. A button should feel like a well-made lighter — weight, click, no extra parts. Forms: Muji + Swiss corporate + Braun calculator. Filling out a form should feel like filling out a library card — clear, generous, no tricks.</p>
      <p>When you say "this card is bento," you inherit 400 years of how Japanese carpenters handle a corner: softly, with a shadow line. When you say "this nav is Vignelli," you inherit airport signage that works at 30mph. That's more useful than "this is trending on Are.na."</p>
      <p>We grade novelty low on purpose. A design card that looks like nothing else scores low on craft. The best cards look like they've always existed.</p>
    `,
    principles: [
      'Name parents: Bauhaus, Swiss, Japanese, Braun — not "trending"',
      'Provenance is a shortcut to craft decisions already made',
      'New is cheap, lineage is expensive',
      'Best cards feel like they’ve always existed'
    ],
    examples: [
      'navigation-breadcrumbs: Vignelli airport signage • library catalog • museum wayfinding',
      'data-display-table-dense: Edward Tufte • Bloomberg terminal • Japanese train schedule',
      'cards-clay-inflated: Studio pottery • Hay • tactile atelier'
    ],
    lineage: 'Bauhaus + Swiss International + Japanese craft + Ulm'
  },
  {
    id: 'quiet-luxury-vs-decoration',
    title: 'Quiet Luxury vs Decoration',
    subtitle: 'Soft shadows, 44px nav, 24px air — no ornament',
    body: `
      <p>Decoration is adding. Luxury is removing until only the necessary remains, then making the necessary beautiful.</p>
      <p>44px nav is luxury: tall enough for a thumb, short enough to disappear. 24px air is luxury: one measure, everywhere, never broken for decoration. Mono where it helps (provenance, folio, spec) and serif where it matters (opinion, headline) — never both at once for the same job. Brass rules 1px, not 2px. Soft diffuse shadows 0 8px 24px, not hard drops. Tabular numbers where numbers matter.</p>
      <p>We avoid ghost buttons that disappear on hover. If it matters, it has an edge. We avoid toasts that cover work. If it matters, it waits. We avoid loaders that are 200ms of theater — 14px spinner, 140ms snap, done. Quiet luxury is felt in the 140ms, not the 450ms spring.</p>
      <p><em>Test:</em> Cover the design with your hand, then reveal it one second at a time. If you can name the brand from the shadow alone, it's decoration. If you can only feel that it's considered, it's luxury.</p>
    `,
    principles: [
      '44px nav, 24px air, 1px brass rule — one measure, everywhere',
      'Mono where it helps, serif where it matters — never both for same job',
      'If it matters, it has an edge — no ghost buttons',
      'Luxury is felt in 140ms, not 450ms spring'
    ],
    examples: [
      'Quiet: minimal pill, hairline card, soft diffuse, grotesk sans — permanent collection',
      'Decoration: gradient mesh, neon rim, magnetic hover — rare, limited edition',
      'Test: can you name brand from shadow alone? If yes, it’s decoration'
    ],
    lineage: 'The Row + Muji + Dieter Rams — less but better'
  },
  {
    id: 'composing-system-from-plates',
    title: 'Composing a System from Plates',
    subtitle: 'Pick 1 plate per book — coherence over completeness',
    body: `
      <p>You don't need 214 plates. You need 10, one per book, that agree on three things: radius, shadow, and how they handle an edge.</p>
      <p>Start with Foundations: pick a palette (paper-ink-terracotta, or void-glass, or moss-clay) and a shadow (soft, brutal, layered). That choice eliminates 70% of plates instantly — brutal shadow doesn't want 24px radius. Clay wants 16px+.</p>
      <p>Then Buttons: if you picked brutal shadow, pick brutalist offset button (4px, 4px offset, ink border). If you picked soft, pick minimal pill or clay pressed. Buttons set the hand of the system — everything else follows the hand.</p>
      <p>Then Cards: match the hand. Clay hand wants clay inflated card. Brutalist hand wants brutalist shadow card. Minimal hand wants minimal border. Then Navigation: minimal hand wants header minimal (44px sticky). Editorial hand wants table of contents. Then Data: dense table for SaaS, stats 4-col for marketing, definition list for editorial. Then Forms: clay inset for clay hand, brutalist border for brutalist, text minimal for minimal. Then Overlays: modal centered for minimal, drawer right for corporate, bottom sheet for clay, command dialog for void.</p>
      <p><em>Rule:</em> If you can name the hand in one word ("clay," "brutalist," "editorial"), the system is coherent. If you need three words, keep picking.</p>
    `,
    principles: [
      'Start with Foundations: palette + shadow — eliminates 70% of plates',
      'Buttons set the hand — everything follows hand',
      'One word test: if you can name hand in one word, system is coherent',
      'Pick 1 plate per book, 10 total — coherence over completeness'
    ],
    examples: [
      'Clay system: 16px tumbled, layered linen, brass accent → clay pressed button, clay inflated card, clay inset form, bottom sheet',
      'Brutalist system: 4px cut, brutal 4px offset, ink accent → brutalist offset button, brutalist shadow card, brutalist border form',
      'Editorial system: 8px, soft, oxblood accent, ivory paper → editorial outline button, editorial feature card, editorial floating form'
    ],
    lineage: 'Enzo Mari autoprogettazione + Hay curated sets + Aritzia complete looks'
  },
  {
    id: 'applying-to-saas',
    title: 'Applying to SaaS',
    subtitle: 'Header minimal + sidebar + table dense + stats + modal — founder stack',
    body: `
      <p>SaaS is a store where the product is the inventory. The Founder's Stack is: header minimal (44px, mono, brass rule), sidebar collapsible (cozy, remembers open), table dense with sort (tabular numbers, 44px rows), stats 4-col (trend up/down, tabular), command palette (cmdk, fast), form shell sections (for settings), modal centered (for actions), footer minimal.</p>
      <p>Tokens: radius 8-12px (tools are cut, not inflated), shadow soft (north light, not theater), accent brass or ink (never terracotta — too warm for tools), paper ivory or stone (never void — tools happen in day), density compact (standing at bench). The exception is marketing page for same SaaS: there you go airy, 24px radius, editorial hero.</p>
      <p>Data display is the truth. Use CSS-only bar chart and sparkline (zero JS, 200 bytes) over a 200kb chart lib. Use skeleton that respects grid, not shimmer that lies. Use badge count with mono tabular, not pill that shouts.</p>
      <p>Measure: every interactive element 44px minimum, keyboardable, focus visible, 140ms snap. If a founder can use it at 2am with a trackpad, it ships.</p>
    `,
    principles: [
      'Founder Stack: header minimal + sidebar + table dense + stats 4-col + command palette + form shell + modal + footer minimal',
      'SaaS tokens: 8-12px cut, soft shadow, brass/ink accent, ivory/stone paper, compact density',
      'Data is truth: CSS-only charts, skeleton that respects grid, mono tabular',
      '2am test: founder with trackpad, keyboard only — if it works, it ships'
    ],
    examples: [
      'Linear: header minimal, command palette, table dense, stats 4-col, soft shadow, ink accent',
      'Bhenre Atelier: sidebar collapsible, metric card, drawer right, form shell sections, compact',
      'Measure: 44px min, tabular numbers, 140ms snap, focus visible'
    ],
    lineage: 'Linear + Bloomberg terminal + Braun calculator'
  },
  {
    id: 'applying-to-marketing',
    title: 'Applying to Marketing',
    subtitle: 'Hero editorial + feature grid + pricing + testimonial wall — proof, not promise',
    body: `
      <p>Marketing is proof, not promise. SSENSE doesn't say "trusted by 10k" — they show the cloth. Your marketing site should do the same.</p>
      <p>Start with hero editorial (serif headline, 36ch measure, mono kicker, 58/42 with mockup) or hero split (card stack, brass rule). Then feature grid 3 (icons are small, 16px, not 24px) or feature list with connecting line (shows narrative, not features). Then pricing tier 3 with recommended highlight (middle, brass border, "Most chosen" mono pill) + monthly/annual toggle. Then testimonial quote (large editorial serif, 24px, 60ch) + masonry wall (real names, real companies, no "CEO at Startup"). Then logo cloud (mono labels, not just logos — "Type foundry • Est. 2018"). Then CTA banner (terracotta, not ink — warm, not corporate) + newsletter (editorial, not "subscribe"). Then footer mega or minimal depending on how much you have to say.</p>
      <p>Tokens for marketing: radius 12-24px (more air, more breath), shadow layered (depth like linen), accent oxblood or brass (warm, not ink), paper ivory, density airy (lying on floor with proofs). Marketing happens in afternoon light.</p>
      <p>No lorem. No "trusted by 10k" you can't name. If it's in the store, it ships.</p>
    `,
    principles: [
      'Proof over promise: show cloth, not "trusted by"',
      'Marketing stack: hero editorial → feature grid/list → pricing tier + toggle → testimonial quote + wall → logo cloud → CTA + newsletter → footer',
      'Marketing tokens: 12-24px breath, layered linen, oxblood/brass warm, ivory, airy',
      'No lorem — if it’s in the store, it ships'
    ],
    examples: [
      'SSENSE editorial: serif headline, 36ch, mono kicker, 58/42 mockup, brass rule',
      'Aritzia pricing: tier 3, middle highlighted brass, mono "Most chosen", monthly/annual toggle',
      'Pudding: 58/42 map/story, 640 prose, 1100 breakout, 44px mono nav'
    ],
    lineage: 'SSENSE + Aritzia lookbook + Pudding essay + 10 Corso Como window'
  },
  {
    id: 'measurements-and-spec',
    title: 'Measurements and Spec',
    subtitle: 'Props and tokens are spec sheets, not decoration',
    body: `
      <p>In a good workshop, the spec sheet is pinned to the wall. It says: cut, cloth, measure, folio. Props and tokens are the same — they are measurements, not decoration.</p>
      <p>Props are what a plate can do: "variant," "size," "disabled," "loading." If a plate lists "variant: primary | secondary | ghost," that's a cut. You choose it like you choose a sleeve length. Tokens are what a plate is made of: "radius: 12px," "shadow: soft," "accent: #C9A86A." That's cloth.</p>
      <p>We keep props small (2-5 per plate) and tokens smaller (1-3 per plate that matter). The rest is global — paper, ink, 24px air. If a plate needs 10 props, it's two plates. If a plate invents a token no other plate uses, it doesn't stay.</p>
      <p>Use cases are marginalia: "general • editorial • atelier" written in italic mono, like notes in a book's margin. They tell you where this plate has been seen working, not where it could theoretically go.</p>
      <p><em>Practice:</em> Read the spec before the preview. If the spec makes sense ("cut: minimal-pill • cloth: brass foil • folio: 003"), the preview will make sense. If the spec is noise, the plate is noise.</p>
    `,
    principles: [
      'Props = cut, Tokens = cloth, Use cases = marginalia — pinned to wall',
      '2-5 props, 1-3 tokens per plate — rest is global',
      'If plate needs 10 props, it’s two plates',
      'Read spec before preview — if spec makes sense, plate makes sense'
    ],
    examples: [
      'buttons-minimal-pill: props [variant, size, disabled] • tokens [radius 999px, accent brass] • useCases general • atelier',
      'cards-minimal-border: props [hover] • tokens [radius 12px, shadow soft] • useCases stats • profile • pricing',
      'Measurements table: Cut / Cloth / Folio / Spec — garment spec sheet, not feature list'
    ],
    lineage: 'Savile Row spec sheet + Braun instruction manual + Muji packaging'
  },
  {
    id: 'zero-deps-as-feature',
    title: 'Zero-Deps as a Feature',
    subtitle: 'Stdlib only, offline-ready, honest 503',
    body: `
      <p>We ship zero dependencies because dependencies are liabilities you didn't write and can't fix at 2am. Bhenre is stdlib only — no pip, no npm install of a component library that costs more than the product.</p>
      <p>214 plates, all real HTML and scoped CSS, system fonts only. No external fetches. If it is in the store, it works offline. We cache the last build in localStorage with a timestamp so next load is instant, even without network. If a source hasn't updated recently, we don't use it — stale data is worse than no data.</p>
      <p>Honest 503 over fake success: if the map doesn't load, we show "Map offline — cached tiles" not a spinning loader that never stops. If the data isn't real, we show empty state with a spec sheet, not lorem. Published content must use real data, real models, real insights — never mock text.</p>
      <p>This is why the site is 2.59kB HTML, 31kB CSS, 368kB JS (74kB gzipped) for 214 plates. It fits in a pocket. It opens on a train. It doesn't need your design system's permission to exist.</p>
      <p><em>Principle:</em> If you can't build it with what the browser gives you, you don't understand it well enough to sell it.</p>
    `,
    principles: [
      'Zero-deps = liabilities you didn’t write and can’t fix at 2am',
      '214 plates, 2.59kB HTML, 31kB CSS, 368kB JS — fits in pocket, opens on train',
      'Offline-ready: localStorage last-build, cached tiles, honest 503',
      'Real data only — empty state over lorem, spec sheet over mock'
    ],
    examples: [
      'Offline: Map shows "cached tiles" not spinner that never stops',
      'Real: Stats use tabular numbers, real data, no "up and to the right" chart lib',
      'Honest: 503 page is spec sheet — "What we tried, why it failed, what to try next"'
    ],
    lineage: 'Dieter Rams less but better + Muji no-brand + Braun honest'
  }
]

export function getThinkingChapter(id: string): ThinkingChapter | undefined {
  return thinkingChapters.find(c => c.id === id)
}

export function getAllThinkingChapters(): ThinkingChapter[] {
  return thinkingChapters
}
