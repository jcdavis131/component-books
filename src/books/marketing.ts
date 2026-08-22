import type { Book } from '../types.ts'
export const book: Book = {
  id: 'marketing',
  title: 'Marketing',
  volume: 8,
  description: 'Go-to-market plates — heroes, features, pricing, and social proof with Japandi restraint.',
  color: '#F9F6F0',
  accent: '#A67B5B',
  intro: 'Marketing is proof, not promise. These plates lead with typography, space, and real numbers over decoration.',
  plates: [
    {
      id: 'marketing-hero-editorial',
      name: 'Hero Editorial',
      style: 'editorial',
      description: 'Editorial hero with serif headline, sub, and quiet CTA row.',
      html: `<section class="hero-ed">
  <span>Vol. 08 — Marketing</span>
  <h1>Component books<br/>for teams that ship.</h1>
  <p>8 volumes, 155 plates, zero deps. Paper #F9F6F0, mono nav, real code you can copy.</p>
  <div class="hero-ed__cta"><button class="pri">Open library</button><button>Read intro — 2 min</button><small>Free, no sign-up</small></div>
</section>`,
      css: `.hero-ed{padding:32px 24px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:16px}
.hero-ed span{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8A9A8B}
.hero-ed h1{margin:12px 0 0;font-family:Georgia,serif;font-size:32px;line-height:.95;letter-spacing:-0.03em;color:#1E2022}
.hero-ed p{margin:12px 0 0;max-width:36ch;font-size:13px;color:#8A9A8B;line-height:1.5}
.hero-ed__cta{display:flex;align-items:center;gap:10px;margin-top:18px;flex-wrap:wrap}
.hero-ed__cta button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:10px 16px;font-size:13px}
.hero-ed__cta .pri{background:#1E2022;color:#fff;border-color:#1E2022}
.hero-ed__cta small{font-family:ui-monospace,monospace;font-size:11px;color:#B8A99A}`,
      props: ['serif headline', 'mono kicker', 'cta row'],
      tokens: [
        { name: '--hero-paper', value: '#F9F6F0', usage: 'background' },
        { name: '--hero-ink', value: '#1E2022', usage: 'headline' },
      ],
      useCases: ['Landing hero', 'Docs intro', 'Book launch'],
    },
    {
      id: 'marketing-hero-split',
      name: 'Hero Split',
      style: 'minimal',
      description: 'Split hero with copy left and card stack right.',
      html: `<section class="hero-split">
  <div class="hero-split__copy"><span>Zero-deps • Vite • TS</span><h2>Copy, paste, ship. No install.</h2><p>Real HTML + 4-12 lines CSS per plate. Verified live in browser.</p><div class="hero-split__cta"><button class="pri">Browse 155 plates</button><button>How it works</button></div></div>
  <div class="hero-split__stack"><div class="card">navigation-header-minimal</div><div class="card is-2">data-display-table-dense</div><div class="card is-3">overlays-command-dialog</div></div>
</section>`,
      css: `.hero-split{display:grid;grid-template-columns:1.1fr .9fr;gap:20px;padding:24px;background:#fff;border:1px solid #E8E0D5;border-radius:16px}
.hero-split__copy span{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.hero-split__copy h2{margin:10px 0 0;font-size:22px;letter-spacing:-0.02em;line-height:1.05;color:#1E2022}
.hero-split__copy p{margin:8px 0 0;font-size:12.5px;color:#8A9A8B;line-height:1.5}
.hero-split__cta{display:flex;gap:8px;margin-top:14px}
.hero-split__cta button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
.hero-split__cta .pri{background:#1E2022;color:#fff}
.hero-split__stack{display:flex;flex-direction:column;gap:8px}
.hero-split__stack .card{padding:12px 14px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;font-family:ui-monospace,monospace;font-size:11px;color:#2A2A2A}
.hero-split__stack .card.is-2{transform:rotate(-1deg)}.card.is-3{transform:rotate(1deg);background:#F5F1EB}`,
      props: ['split layout', 'card stack', 'cta row'],
      tokens: [
        { name: '--split-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--split-card', value: '#F9F6F0', usage: 'stack card' },
      ],
      useCases: ['SaaS hero', 'Feature launch', 'Library promo'],
    },
    {
      id: 'marketing-hero-with-mockup',
      name: 'Hero With Mockup',
      style: 'glass',
      description: 'Hero with browser mockup and floating tokens.',
      html: `<section class="hero-mock">
  <div class="hero-mock__copy"><h2>Maps central. Pudding-style.</h2><p>58/42 map/story, 72vh sticky, mono nav. Real embedding maps, not lorem.</p><button>Open hoops.dumbmodel.com — ↗</button></div>
  <div class="hero-mock__browser"><div class="hero-mock__bar"><i></i><i></i><i></i><span>component-books — Vite</span></div><div class="hero-mock__screen"><div class="dot-grid"></div><span>◐ 20,719 × 128-d</span></div><div class="hero-mock__float">--paper: #F9F6F0</div></div>
</section>`,
      css: `.hero-mock{display:grid;grid-template-columns:1fr 1.2fr;gap:20px;padding:20px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:16px;align-items:center}
.hero-mock__copy h2{margin:0;font-size:20px;letter-spacing:-0.02em;color:#1E2022}
.hero-mock__copy p{margin:8px 0 12px;font-size:12.5px;color:#8A9A8B;line-height:1.5}
.hero-mock__copy button{border:1px solid #1E2022;background:#1E2022;color:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
.hero-mock__browser{position:relative;background:#fff;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,.12)}
.hero-mock__bar{display:flex;align-items:center;gap:6px;padding:8px 12px;border-bottom:1px solid #E8E0D5;font-family:ui-monospace,monospace;font-size:10px;color:#8A9A8B}
.hero-mock__bar i{width:8px;height:8px;border-radius:999px;background:#E8E0D5;display:inline-block}
.hero-mock__screen{aspect-ratio:16/9;display:grid;place-items:center;background:radial-gradient(#E8E0D5 1px,transparent 1px);background-size:16px 16px;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B}
.hero-mock__float{position:absolute;right:12px;bottom:12px;background:#1E2022;color:#F9F6F0;padding:6px 10px;border-radius:999px;font-family:ui-monospace,monospace;font-size:10px}`,
      props: ['browser chrome', 'dot grid', 'floating token'],
      tokens: [
        { name: '--mock-bg', value: '#F9F6F0', usage: 'hero paper' },
        { name: '--mock-browser', value: '#FFFFFF', usage: 'browser surface' },
      ],
      useCases: ['Product hero', 'Demo landing', 'Portfolio'],
    },
    {
      id: 'marketing-feature-grid-3',
      name: 'Feature Grid 3',
      style: 'minimal',
      description: 'Three-up feature grid with icon, title, and concise description.',
      html: `<div class="feat-3">
  <div><i>◧</i><b>Zero-deps</b><p>No pip, no torch. Stdlib + Vite only. Real code ships.</p></div>
  <div><i>◐</i><b>Map-first</b><p>Embedding maps central. Proximity = similarity. Pudding-style.</p></div>
  <div><i>✦</i><b>Verified live</b><p>Browser check before ship. Contrast, real data, honest 503.</p></div>
</div>`,
      css: `.feat-3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.feat-3 div{background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:16px}
.feat-3 i{width:32px;height:32px;border-radius:8px;display:grid;place-items:center;background:#F9F6F0;border:1px solid #E8E0D5;font-style:normal;margin-bottom:10px}
.feat-3 b{display:block;font-size:12.5px;margin-bottom:6px;color:#1E2022}
.feat-3 p{margin:0;font-size:11.5px;color:#8A9A8B;line-height:1.5}`,
      props: ['3-col grid', 'icon box', 'concise copy'],
      tokens: [
        { name: '--feat-bg', value: '#FFFFFF', usage: 'card' },
        { name: '--feat-icon', value: '#F9F6F0', usage: 'icon surface' },
      ],
      useCases: ['Feature list', 'Why us', 'Benefits'],
    },
    {
      id: 'marketing-feature-list-with-icons',
      name: 'Feature List With Icons',
      style: 'moss',
      description: 'Vertical feature list with large icons and connecting line.',
      html: `<div class="feat-list">
  <div><i>◧</i><div><b>Design tokens</b><p>Paper, ink, terracotta, moss — 12 styles, shared radii.</p></div></div>
  <div><i>◎</i><div><b>Atelier inspector</b><p>Copy HTML/CSS, edit tokens live, no context loss.</p></div></div>
  <div><i>✦</i><div><b>Factory mind</b><p>Sources → pipelines → features → product. One bend ripples.</p></div></div>
</div>`,
      css: `.feat-list{display:flex;flex-direction:column;gap:0;position:relative;padding-left:4px}
.feat-list::before{content:'';position:absolute;left:15px;top:12px;bottom:12px;width:1px;background:#E8E0D5}
.feat-list div{display:flex;gap:12px;padding:12px 0;position:relative}
.feat-list i{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;background:#8A9A8B;color:#fff;font-style:normal;flex-shrink:0;z-index:1}
.feat-list b{font-size:12.5px;display:block}
.feat-list p{margin:4px 0 0;font-size:11.5px;color:#8A9A8B;line-height:1.4;max-width:32ch}`,
      props: ['vertical list', 'connector line', 'icon circle'],
      tokens: [
        { name: '--featlist-icon', value: '#8A9A8B', usage: 'moss accent' },
        { name: '--featlist-line', value: '#E8E0D5', usage: 'spine' },
      ],
      useCases: ['Feature walkthrough', 'Steps', 'Process list'],
    },
    {
      id: 'marketing-pricing-tier-3',
      name: 'Pricing Tier 3',
      style: 'corporate',
      description: 'Three-tier pricing with recommended highlight and feature checks.',
      html: `<div class="price-3">
  <div><h4>Free</h4><b>$0</b><span>1 book, 12 plates</span><ul><li>✓ Copy HTML/CSS</li><li>✓ Japandi v4</li><li>— Tokens API</li></ul><button>Start</button></div>
  <div class="is-rec"><span class="pill">Recommended</span><h4>Pro</h4><b>$19</b><small>/mo</small><span>8 books, 155 plates</span><ul><li>✓ All styles</li><li>✓ Token JSON</li><li>✓ Live verifier</li></ul><button class="pri">Go Pro</button></div>
  <div><h4>Team</h4><b>$49</b><small>/mo</small><span>Unlimited</span><ul><li>✓ Figma sync</li><li>✓ Private books</li><li>✓ SSO</li></ul><button>Talk to us</button></div>
</div>`,
      css: `.price-3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;font-family:ui-monospace,monospace;font-size:12px}
.price-3 div{background:#fff;border:1px solid #E8E0D5;border-radius:14px;padding:16px;display:flex;flex-direction:column}
.price-3 div.is-rec{background:#1E2022;color:#F9F6F0;border-color:#1E2022;transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.18)}
.price-3 h4{margin:0 0 4px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.price-3 b{font-size:22px}
.price-3 small{color:#8A9A8B;margin-left:4px}
.price-3 ul{list-style:none;padding:0;margin:12px 0;flex:1;display:flex;flex-direction:column;gap:6px}
.price-3 button{border:1px solid #E8E0D5;background:#fff;border-radius:999px;padding:8px 12px;font-size:12px;margin-top:8px}
.price-3 .pri{background:#F9F6F0;color:#1E2022}
.price-3 .pill{font-size:10px;background:#C17C60;color:#fff;padding:3px 8px;border-radius:999px;align-self:flex-start;margin-bottom:8px}`,
      props: ['3-tier', 'recommended', 'feature list'],
      tokens: [
        { name: '--price-rec', value: '#1E2022', usage: 'recommended surface' },
        { name: '--price-pill', value: '#C17C60', usage: 'badge' },
      ],
      useCases: ['SaaS pricing', 'Plan selection', 'Monetization'],
    },
    {
      id: 'marketing-pricing-toggle-monthly-annual',
      name: 'Pricing Toggle Monthly Annual',
      style: 'minimal',
      description: 'Pricing toggle with monthly/annual switch and savings badge.',
      html: `<div class="price-tog">
  <div class="price-tog__switch"><button class="is-active">Monthly</button><button>Annual <small>— Save 20%</small></button></div>
  <div class="price-tog__card"><h4>Pro</h4><div class="price"><b>$19</b><span>/mo</span><i>$15/mo if annual</i></div><button class="pri">Start Pro</button></div>
</div>`,
      css: `.price-tog{display:flex;flex-direction:column;gap:12px;align-items:flex-start;font-family:ui-monospace,monospace}
.price-tog__switch{display:inline-flex;padding:4px;background:#F5F1EB;border:1px solid #E8E0D5;border-radius:999px;gap:4px}
.price-tog__switch button{border:0;background:transparent;padding:8px 14px;border-radius:999px;font-size:12px;color:#8A9A8B}
.price-tog__switch .is-active{background:#fff;color:#2A2A2A;box-shadow:0 1px 6px rgba(0,0,0,.08)}
.price-tog__switch small{color:#8A9A8B;margin-left:4px}
.price-tog__card{background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:16px;min-width:240px}
.price-tog__card h4{margin:0 0 8px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.price-tog__card .price{display:flex;align-items:baseline;gap:6px}
.price-tog__card b{font-size:20px}.price-tog__card i{font-style:normal;font-size:11px;color:#8A9A8B;margin-left:8px}
.price-tog__card .pri{margin-top:12px;border:0;background:#1E2022;color:#fff;border-radius:999px;padding:8px 14px;font-size:12px;width:100%}`,
      props: ['toggle', 'save badge', 'annual math'],
      tokens: [
        { name: '--tog-bg', value: '#F5F1EB', usage: 'switch track' },
        { name: '--tog-active', value: '#FFFFFF', usage: 'selected' },
      ],
      useCases: ['Subscription toggle', 'Billing', 'SaaS'],
    },
    {
      id: 'marketing-testimonial-quote',
      name: 'Testimonial Quote',
      style: 'editorial',
      description: 'Large editorial quote with attribution and subtle rule.',
      html: `<blockquote class="quote">
  <span>“</span>
  <p>We replaced our component library with these plates. Zero deps, real copy-paste, and the Japandi tokens finally made our docs feel like a product.”</p>
  <footer><i>SC</i><div><b>Cameron — Factory lead</b><small>component-books, Aug 2026</small></div></footer>
</blockquote>`,
      css: `.quote{position:relative;padding:20px 24px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:16px;font-family:Georgia,serif}
.quote span{position:absolute;left:16px;top:10px;font-size:28px;color:#D4C4B0}
.quote p{margin:0 0 16px;font-size:15px;line-height:1.45;color:#1E2022;max-width:42ch}
.quote footer{display:flex;gap:10px;align-items:center;border-top:1px solid #E8E0D5;padding-top:12px}
.quote footer i{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;background:#fff;border:1px solid #E8E0D5;font-style:normal;font-family:ui-monospace,monospace;font-size:11px}
.quote footer b{font-family:ui-monospace,monospace;font-size:11.5px;display:block}
.quote footer small{font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B}`,
      props: ['blockquote', 'attribution', 'rule'],
      tokens: [
        { name: '--quote-paper', value: '#F9F6F0', usage: 'background' },
        { name: '--quote-rule', value: '#E8E0D5', usage: 'divider' },
      ],
      useCases: ['Social proof', 'Landing testimonial', 'Case study'],
    },
    {
      id: 'marketing-testimonial-wall',
      name: 'Testimonial Wall',
      style: 'clay',
      description: 'Masonry-style testimonial wall with varied card sizes.',
      html: `<div class="wall">
  <div><p>“The only component site that feels editorial.”</p><small>— Alex, Design</small></div>
  <div class="is-lg"><p>“We ship plates as our design system now. Tokens map straight to Figma.”</p><small>— Maya, PM</small></div>
  <div><p>“Verifier ≥8.0 actually means something.”</p><small>— Jordan, Eng</small></div>
  <div><p>“Copy-paste that respects contrast.”</p><small>— Priya</small></div>
</div>`,
      css: `.wall{columns:2;gap:12px}
.wall div{break-inside:avoid;background:#fff;border:1px solid #E8E0D5;border-radius:12px;padding:12px 14px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.wall div.is-lg{padding:16px}
.wall p{margin:0;font-size:12.5px;line-height:1.4;color:#2A2A2A}
.wall small{display:block;margin-top:8px;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B}`,
      props: ['masonry columns', 'varied sizes', 'clay shadow'],
      tokens: [
        { name: '--wall-bg', value: '#FFFFFF', usage: 'card' },
        { name: '--wall-border', value: '#E8E0D5', usage: 'edge' },
      ],
      useCases: ['Testimonial grid', 'Social proof wall', 'Press'],
    },
    {
      id: 'marketing-logo-cloud',
      name: 'Logo Cloud',
      style: 'minimal',
      description: 'Logo cloud with mono labels and muted opacity.',
      html: `<div class="logos">
  <span>Trusted by teams building map-first products</span>
  <div class="logos__row"><i>◧ atelier</i><i>◐ hoops</i><i>✦ dottie</i><i>◎ vector</i><i>⬙ factory</i></div>
</div>`,
      css: `.logos{display:flex;flex-direction:column;gap:12px;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;text-align:center}
.logos span{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.logos__row{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;opacity:.8}
.logos__row i{font-style:normal;font-family:ui-monospace,monospace;font-size:12px;color:#2A2A2A;border:1px solid #E8E0D5;padding:6px 12px;border-radius:999px;background:#F9F6F0}`,
      props: ['mono labels', 'muted', 'wrap row'],
      tokens: [
        { name: '--logo-bg', value: '#F9F6F0', usage: 'logo pill' },
        { name: '--logo-muted', value: '#8A9A8B', usage: 'kicker' },
      ],
      useCases: ['Social proof', 'Customer logos', 'Press bar'],
    },
    {
      id: 'marketing-cta-banner',
      name: 'Cta Banner',
      style: 'terracotta',
      description: 'Terracotta CTA banner with headline, copy, and action.',
      html: `<div class="cta-b">
  <div><h3>Start with Navigation — 20 plates, zero deps.</h3><p>Copy the header, sidebar, and command palette in 2 minutes.</p></div>
  <button>Open Book 5 — ↗</button>
</div>`,
      css: `.cta-b{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 24px;background:#C17C60;color:#fff;border-radius:14px}
.cta-b h3{margin:0;font-size:16px;letter-spacing:-0.01em;line-height:1.2;max-width:26ch}
.cta-b p{margin:6px 0 0;font-size:12.5px;opacity:.9;line-height:1.4;max-width:36ch}
.cta-b button{flex-shrink:0;border:0;background:#fff;color:#C17C60;border-radius:999px;padding:10px 16px;font-size:13px;font-weight:600}`,
      props: ['terracotta', 'flex row', 'action'],
      tokens: [
        { name: '--cta-bg', value: '#C17C60', usage: 'banner' },
        { name: '--cta-ink', value: '#FFFFFF', usage: 'text' },
      ],
      useCases: ['Conversion banner', 'Book launch', 'Newsletter CTA'],
    },
    {
      id: 'marketing-cta-with-input',
      name: 'Cta With Input',
      style: 'minimal',
      description: 'CTA with email input and inline validation.',
      html: `<div class="cta-in">
  <div><h4>Get new plates weekly</h4><p>One email, 3 plates, no spam. Unsubscribe anytime.</p></div>
  <form class="cta-in__form" onsubmit="return false"><input placeholder="you@factory.co" /><button>Join →</button></form>
  <small>Free — we never share your email.</small>
</div>`,
      css: `.cta-in{padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;display:flex;flex-direction:column;gap:10px}
.cta-in h4{margin:0;font-size:13px;color:#1E2022}
.cta-in p{margin:0;font-size:12px;color:#8A9A8B}
.cta-in__form{display:flex;gap:8px;margin-top:6px}
.cta-in__form input{flex:1;border:1px solid #E8E0D5;border-radius:999px;padding:10px 14px;font-size:12.5px;font-family:ui-monospace,monospace}
.cta-in__form button{border:0;background:#1E2022;color:#fff;border-radius:999px;padding:10px 16px;font-size:12.5px}
.cta-in small{font-family:ui-monospace,monospace;font-size:11px;color:#B8A99A}`,
      props: ['input + button', 'inline form', 'privacy small'],
      tokens: [
        { name: '--ctain-bg', value: '#FFFFFF', usage: 'surface' },
        { name: '--ctain-ink', value: '#1E2022', usage: 'primary' },
      ],
      useCases: ['Newsletter signup', 'Waitlist', 'Lead capture'],
    },
    {
      id: 'marketing-footer-minimal',
      name: 'Footer Minimal',
      style: 'minimal',
      description: 'Minimal footer with wordmark, links, and copyright.',
      html: `<footer class="foot-min">
  <a class="foot-min__mark" href="/">atelier</a>
  <nav><a>Books</a><a>Tokens</a><a>Atelier</a><a>GitHub</a></nav>
  <small>© 2026 Atelier — Zero-deps, real data.</small>
</footer>`,
      css: `.foot-min{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;font-family:ui-monospace,monospace;font-size:11.5px;flex-wrap:wrap}
.foot-min__mark{font-weight:700;text-decoration:none;color:#2A2A2A}
.foot-min nav{display:flex;gap:14px}
.foot-min nav a{text-decoration:none;color:#8A9A8B}
.foot-min small{color:#B8A99A}`,
      props: ['wordmark', 'nav links', 'copyright'],
      tokens: [
        { name: '--footmin-bg', value: '#F9F6F0', usage: 'paper' },
        { name: '--footmin-muted', value: '#8A9A8B', usage: 'links' },
      ],
      useCases: ['Site footer', 'Docs footer', 'Minimal landing'],
    },
    {
      id: 'marketing-footer-mega',
      name: 'Footer Mega',
      style: 'void',
      description: 'Mega footer with 4 columns, newsletter, and void background.',
      html: `<footer class="foot-mega">
  <div class="foot-mega__grid">
    <div><b>atelier</b><p>Component books for teams that ship. Japandi v4, zero-deps.</p></div>
    <div><h5>Books</h5><a>Foundations</a><a>Forms</a><a>Navigation</a><a>Data</a></div>
    <div><h5>Systems</h5><a>Tokens</a><a>Verifier</a><a>Factory</a></div>
    <div><h5>Join</h5><p>Get 3 plates / week.</p><div class="join"><input placeholder="email" /><button>→</button></div></div>
  </div>
  <div class="foot-mega__bottom"><small>© 2026 Atelier</small><small>Paper #F9F6F0 • Ink #2A2A2A • Terracotta #C17C60</small></div>
</footer>`,
      css: `.foot-mega{background:#1E2022;color:#F9F6F0;border-radius:16px;padding:20px;font-family:ui-monospace,monospace;font-size:11.5px}
.foot-mega__grid{display:grid;grid-template-columns:1.2fr 1fr 1fr 1.2fr;gap:16px}
.foot-mega h5{margin:0 0 8px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B}
.foot-mega a{display:block;color:#D4C4B0;text-decoration:none;margin-bottom:6px}
.foot-mega p{margin:0;color:#8A9A8B;line-height:1.4}
.foot-mega .join{display:flex;gap:6px;margin-top:8px}
.foot-mega .join input{flex:1;background:#2A2A2A;border:1px solid #3a3a3a;border-radius:999px;padding:8px 10px;color:#fff;font-size:11px}
.foot-mega .join button{width:32px;height:32px;border-radius:999px;border:0;background:#F9F6F0;color:#1E2022}
.foot-mega__bottom{display:flex;justify-content:space-between;margin-top:16px;padding-top:12px;border-top:1px solid #2A2A2A;color:#8A9A8B}`,
      props: ['4-col grid', 'newsletter input', 'void bg'],
      tokens: [
        { name: '--footmega-bg', value: '#1E2022', usage: 'void surface' },
        { name: '--footmega-muted', value: '#8A9A8B', usage: 'labels' },
      ],
      useCases: ['Marketing footer', 'Docs mega footer', 'SaaS footer'],
    },
    {
      id: 'marketing-newsletter',
      name: 'Newsletter',
      style: 'editorial',
      description: 'Editorial newsletter card with serif headline and benefits.',
      html: `<div class="nl">
  <span>Weekly plates — free</span>
  <h3>The Atelier Dispatch</h3>
  <ul><li>3 new plates with HTML + CSS</li><li>1 token drop + migration note</li><li>Verifier tips + live check</li></ul>
  <div class="nl__form"><input placeholder="you@atelier.co" /><button>Subscribe — 2 sec</button></div>
</div>`,
      css: `.nl{padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:16px;max-width:320px}
.nl span{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8A9A8B}
.nl h3{margin:8px 0 10px;font-family:Georgia,serif;font-size:18px;color:#1E2022}
.nl ul{margin:0 0 12px;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px}
.nl ul li{font-size:12px;color:#2A2A2A;position:relative;padding-left:16px}
.nl ul li::before{content:'—';position:absolute;left:0;color:#C17C60}
.nl__form{display:flex;gap:8px}
.nl__form input{flex:1;border:1px solid #E8E0D5;border-radius:999px;padding:10px 12px;font-size:12px}
.nl__form button{border:0;background:#1E2022;color:#fff;border-radius:999px;padding:10px 14px;font-size:12px}`,
      props: ['benefits list', 'serif headline', 'inline form'],
      tokens: [
        { name: '--nl-bg', value: '#FFFFFF', usage: 'card' },
        { name: '--nl-accent', value: '#C17C60', usage: 'dash' },
      ],
      useCases: ['Newsletter signup', 'Blog sidebar', 'Launch list'],
    },
    {
      id: 'marketing-comparison',
      name: 'Comparison',
      style: 'minimal',
      description: 'Comparison table for features vs alternatives with emphasis.',
      html: `<table class="m-cmp">
  <thead><tr><th></th><th>Component Books</th><th>Others</th></tr></thead>
  <tbody>
    <tr><td>Deps</td><td><b>Zero</b> — stdlib only</td><td>3-12 deps, 200kb+</td></tr>
    <tr><td>Data</td><td><b>Real</b> — no lorem</td><td>Lorem, mock JSON</td></tr>
    <tr><td>Verify</td><td><b>Live browser</b></td><td>Screenshot only</td></tr>
  </tbody>
</table>`,
      css: `.m-cmp{width:100%;border-collapse:collapse;font-family:ui-monospace,monospace;font-size:12px;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}
.m-cmp th{text-align:left;padding:10px 12px;background:#F9F6F0;border-bottom:1px solid #E8E0D5;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#8A9A8B}
.m-cmp td{padding:10px 12px;border-bottom:1px solid #F5F1EB}
.m-cmp b{color:#1E2022}
.m-cmp td:nth-child(2){background:#fff;font-weight:500}
.m-cmp th:nth-child(2){background:#fff;color:#1E2022}`,
      props: ['comparison', 'emphasis column', 'real vs mock'],
      tokens: [
        { name: '--mcmp-bg', value: '#F9F6F0', usage: 'header' },
        { name: '--mcmp-hi', value: '#FFFFFF', usage: 'our column' },
      ],
      useCases: ['Competitive comparison', 'Why us', 'Landing section'],
    },
    {
      id: 'marketing-faq-accordion',
      name: 'Faq Accordion',
      style: 'minimal',
      description: 'FAQ accordion with mono questions and editorial answers.',
      html: `<div class="faq">
  <details open><summary>Zero-deps really? <span>—</span></summary><p>Yes. Stdlib + Vite only. No torch, no pip, no synthetic data. If blocked we 503 honest.</p></details>
  <details><summary>How do I verify? <span>+</span></summary><p>Open in real browser, check contrast, copy CSS, paste. Verifier ≥8.0 before ship.</p></details>
  <details><summary>Can I use in production? <span>+</span></summary><p>MIT. Copy-paste, no attribution needed. Tokens map to your design system.</p></details>
</div>`,
      css: `.faq{display:flex;flex-direction:column;gap:0;max-width:440px;font-family:ui-monospace,monospace;font-size:12.5px}
.faq details{border-bottom:1px solid #E8E0D5;padding:12px 0}
.faq summary{list-style:none;display:flex;justify-content:space-between;cursor:pointer;color:#2A2A2A;font-weight:600}
.faq summary::-webkit-details-marker{display:none}
.faq p{margin:8px 0 0;color:#8A9A8B;line-height:1.5;max-width:38ch}
.faq span{color:#8A9A8B}`,
      props: ['details/summary', 'open state', 'mono + editorial'],
      tokens: [
        { name: '--faq-rule', value: '#E8E0D5', usage: 'divider' },
        { name: '--faq-muted', value: '#8A9A8B', usage: 'answer' },
      ],
      useCases: ['FAQ section', 'Help', 'Docs Q&A'],
    },
    {
      id: 'marketing-press-quote',
      name: 'Press Quote',
      style: 'editorial',
      description: 'Press quote with outlet mark and pull quote styling.',
      html: `<div class="press">
  <div class="press__mark">The Pudding × Atelier</div>
  <blockquote>“A map-first component library that treats embedding proximity as the real interface. Taste over chrome.”</blockquote>
  <div class="press__attr"><span>— Editorial review, Aug 2026</span><a>Read review — ↗</a></div>
</div>`,
      css: `.press{padding:20px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:16px}
.press__mark{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8A9A8B;margin-bottom:12px}
.press blockquote{margin:0;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#1E2022;letter-spacing:-0.01em}
.press__attr{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-family:ui-monospace,monospace;font-size:11px;color:#8A9A8B}
.press__attr a{text-decoration:none;color:#A67B5B;border-bottom:1px dotted #A67B5B}`,
      props: ['pull quote', 'outlet mark', 'attribution'],
      tokens: [
        { name: '--press-paper', value: '#F9F6F0', usage: 'background' },
        { name: '--press-ink', value: '#1E2022', usage: 'quote' },
      ],
      useCases: ['Press section', 'Landing credibility', 'Homepage'],
    },
    {
      id: 'marketing-before-after-slider',
      name: 'Before After Slider',
      style: 'minimal',
      description: 'Before/after slider with draggable divider and labels.',
      html: `<div class="ba">
  <div class="ba__before"><span>Before — Chrome + fake loaders</span><div class="ba__mock is-dim">✕ Double toggles ✕ Dashboard chrome</div></div>
  <div class="ba__after" style="--pos:58%"><span>After — Paper + map-first</span><div class="ba__mock">◐ 58/42 map/story • 72vh sticky • 44px mono</div></div>
  <div class="ba__handle" style="--pos:58%"><i></i></div>
  <input type="range" min="0" max="100" value="58" aria-label="Before after" />
</div>`,
      css: `.ba{position:relative;width:100%;max-width:520px;height:180px;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;background:#fff;font-family:ui-monospace,monospace;font-size:11px}
.ba__before,.ba__after{position:absolute;inset:0;padding:12px}
.ba__after{clip-path:inset(0 0 0 var(--pos));background:#F9F6F0;border-left:2px solid #1E2022}
.ba__before span,.ba__after span{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#8A9A8B;display:block;margin-bottom:8px}
.ba__mock{padding:12px;background:#fff;border:1px solid #E8E0D5;border-radius:10px}
.ba__mock.is-dim{opacity:.5;text-decoration:line-through}
.ba__handle{position:absolute;top:0;bottom:0;left:var(--pos);width:2px;background:#1E2022;display:grid;place-items:center}
.ba__handle i{width:24px;height:24px;border-radius:999px;background:#1E2022;border:2px solid #fff;display:block}
.ba input{position:absolute;inset:0;opacity:0;cursor:ew-resize}`,
      props: ['--pos', 'clip-path', 'range input'],
      tokens: [
        { name: '--ba-after', value: '#F9F6F0', usage: 'after background' },
        { name: '--ba-divider', value: '#1E2022', usage: 'handle' },
      ],
      useCases: ['Redesign reveal', 'Before/after', 'Migration story'],
    },
    {
      id: 'marketing-stats-bar',
      name: 'Stats Bar',
      style: 'void',
      description: 'Void stats bar with mono metrics and terracotta accent.',
      html: `<div class="stats-bar">
  <div><b>155</b><span>Plates</span></div>
  <div><b>8</b><span>Books</span></div>
  <div><b>12</b><span>Styles</span></div>
  <div><b>0</b><span>Deps</span></div>
  <button>Open library — ↗</button>
</div>`,
      css: `.stats-bar{display:flex;align-items:center;gap:20px;padding:14px 18px;background:#1E2022;color:#F9F6F0;border-radius:12px;font-family:ui-monospace,monospace;font-size:11px}
.stats-bar div{display:flex;flex-direction:column;gap:2px}
.stats-bar b{font-size:18px;color:#fff}
.stats-bar span{color:#8A9A8B;font-size:10px;letter-spacing:.1em;text-transform:uppercase}
.stats-bar button{margin-left:auto;border:0;background:#F9F6F0;color:#1E2022;border-radius:999px;padding:8px 14px;font-size:12px}`,
      props: ['void bg', 'mono metrics', 'cta'],
      tokens: [
        { name: '--statsbar-bg', value: '#1E2022', usage: 'void surface' },
        { name: '--statsbar-accent', value: '#C17C60', usage: 'highlight' },
      ],
      useCases: ['Proof bar', 'Landing metrics', 'Header stats'],
    },
  ],
}
