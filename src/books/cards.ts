import type { Book } from '../types.ts'

const bookId = 'cards'

export const book: Book = {
  id: bookId,
  title: 'Cards',
  volume: 4,
  description: 'From minimal borders to dashboard widgets — cards that hold, sell, and tell.',
  color: '#E8E0D5',
  accent: '#2A2A2A',
  intro: 'Cards are rooms. Minimal, editorial, brutalist, glass, clay — plus stats, pricing, product, and dashboards. Every plate is a self-contained story with real HTML and honest tokens.',
  plates: [
    {
      id: `${bookId}-minimal-border`,
      name: 'Minimal Border',
      style: 'minimal',
      description: 'Hairline border, 16px radius, quiet hover lift.',
      html: `<div style="max-width:320px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:16px;transition:all .22s">
  <div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8A9A8B;font-weight:700">Plate</div>
  <div style="margin-top:8px;font-weight:800;font-size:16px;color:#2A2A2A;letter-spacing:-.01em">Minimal Border</div>
  <div style="margin-top:6px;font-size:13px;line-height:1.5;color:#6b6b6b">The default card. Paper on paper, soft edge, no shadow until hover.</div>
  <div style="margin-top:12px;display:flex;gap:8px"><span style="padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">minimal</span><span style="padding:4px 8px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;font-size:11px">16px</span></div>
</div>`,
      css: `.card-minimal{
  max-width:320px; padding:18px; background:#fff;
  border:1px solid #E8E0D5; border-radius:16px;
  transition: all 220ms cubic-bezier(.16,1,.3,1);
}
.card-minimal:hover{ border-color:#D4C4B0; transform: translateY(-1px); }`,
      props: ['hover', 'radius'],
      tokens: [
        { name: '--card-border', value: '#E8E0D5', usage: 'hairline edge' },
        { name: '--card-radius', value: '16px', usage: 'soft corner' },
        { name: '--card-pad', value: '18px', usage: 'comfortable padding' },
      ],
      useCases: ['Library grid cards', 'Default content containers'],
    },
    {
      id: `${bookId}-editorial-feature`,
      name: 'Editorial Feature',
      style: 'editorial',
      description: 'Big serif, rule line, pull-quote energy for hero features.',
      html: `<div style="max-width:380px;background:#F9F6F0;border:1px solid #2A2A2A;border-radius:14px;overflow:hidden">
  <div style="padding:20px">
    <div style="font-family:'Fraunces',Georgia,serif;font-size:28px;font-weight:800;line-height:.95;letter-spacing:-.02em;color:#2A2A2A">Design is<br/>how it <span style="text-decoration:underline;text-decoration-color:#C17C60;text-decoration-thickness:3px;text-underline-offset:6px">holds</span></div>
    <div style="margin-top:12px;height:1px;background:#2A2A2A;opacity:.9"></div>
    <div style="margin-top:12px;font-size:13px;line-height:1.6;color:#2A2A2A;max-width:32ch">A feature card that reads like a magazine spread. Rule, serif, and one sharp underline.</div>
  </div>
  <div style="padding:12px 20px;background:#2A2A2A;color:#F9F6F0;display:flex;justify-content:space-between;align-items:center;font-size:12px"><span style="font-weight:700">Read the essay</span><span>→</span></div>
</div>`,
      css: `.card-editorial{
  max-width:380px; background:#F9F6F0; border:1px solid #2A2A2A; border-radius:14px; overflow:hidden;
}
.card-editorial h2{
  font-family:"Fraunces",Georgia,serif; font-size:28px; font-weight:800;
  line-height:.95; letter-spacing:-.02em;
}
.card-editorial .rule{ height:1px; background:#2A2A2A; }`,
      props: ['serif', 'rule'],
      tokens: [
        { name: '--editorial-ink', value: '#2A2A2A', usage: 'rule and border' },
        { name: '--editorial-underline', value: '#C17C60', usage: 'accent underline' },
        { name: '--editorial-serif', value: '"Fraunces", serif', usage: 'headline' },
      ],
      useCases: ['Volume openers', 'Featured essay cards'],
    },
    {
      id: `${bookId}-brutalist-shadow`,
      name: 'Brutalist Shadow',
      style: 'brutalist',
      description: 'Hard 2px border, 8px offset, punchy and loud.',
      html: `<div style="max-width:300px;padding:16px;background:#fff;border:2px solid #2A2A2A;border-radius:8px;box-shadow:8px 8px 0 #2A2A2A">
  <div style="display:inline-block;padding:4px 8px;background:#C17C60;color:#fff;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;border-radius:4px">New Drop</div>
  <div style="margin-top:10px;font-weight:900;font-size:18px;letter-spacing:-.01em;text-transform:uppercase">Brutal Card</div>
  <div style="margin-top:6px;font-size:13px;line-height:1.4">Hard edge, hard shadow, no blur. For when minimal is too quiet.</div>
  <button style="margin-top:12px;padding:10px 14px;background:#2A2A2A;color:#fff;border:0;border-radius:6px;font-weight:800;font-size:12px;text-transform:uppercase;cursor:pointer">Take It →</button>
</div>`,
      css: `.card-brutal{
  max-width:300px; padding:16px; background:#fff;
  border:2px solid #2A2A2A; border-radius:8px;
  box-shadow: 8px 8px 0 #2A2A2A;
}
.card-brutal .tag{ padding:4px 8px; background:#C17C60; color:#fff; font-size:11px; font-weight:800; text-transform:uppercase; border-radius:4px; }`,
      props: ['offset', 'ink'],
      tokens: [
        { name: '--brutal-border', value: '2px solid #2A2A2A', usage: 'hard edge' },
        { name: '--brutal-shadow', value: '8px 8px 0 #2A2A2A', usage: 'offset' },
        { name: '--brutal-radius', value: '8px', usage: 'tight corner' },
      ],
      useCases: ['Loud feature callouts', 'Drop announcements'],
    },
    {
      id: `${bookId}-glass-frosted`,
      name: 'Glass Frosted',
      style: 'glass',
      description: 'Frosted glass card for void and imagery — blur + border.',
      html: `<div style="max-width:340px;border-radius:16px;background:#1E2022;padding:14px;position:relative;overflow:hidden">
  <div style="position:absolute;inset:-20px;background:radial-gradient(400px 200px at 30% 20%,#C17C60aa,transparent),radial-gradient(400px 200px at 80% 80%,#8A9A8B88,transparent)"></div>
  <div style="position:relative;padding:16px;border-radius:14px;background:rgba(255,255,255,.10);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.16);color:#F9F6F0">
    <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8">Now Playing</div>
    <div style="margin-top:8px;font-weight:800;font-size:16px">Glass Frosted</div>
    <div style="margin-top:6px;font-size:12px;opacity:.9;line-height:1.5">Frosted on void. Works over video, maps, and noisy imagery.</div>
    <div style="margin-top:12px;display:flex;gap:8px"><button style="padding:8px 12px;border-radius:999px;background:#fff;color:#1E2022;border:0;font-weight:700;font-size:12px;cursor:pointer">Play</button><button style="padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);color:#fff;font-weight:600;font-size:12px;cursor:pointer">Queue</button></div>
  </div>
</div>`,
      css: `.card-glass{
  max-width:340px; border-radius:16px; background:#1E2022; padding:14px; position:relative; overflow:hidden;
}
.card-glass .inner{
  padding:16px; border-radius:14px;
  background: rgba(255,255,255,.10); backdrop-filter: blur(12px);
  border:1px solid rgba(255,255,255,.16); color:#F9F6F0;
}`,
      props: ['blur', 'void'],
      tokens: [
        { name: '--glass-bg', value: 'rgba(255,255,255,.10)', usage: 'frosted fill' },
        { name: '--glass-blur', value: 'blur(12px)', usage: 'blur' },
        { name: '--glass-border', value: 'rgba(255,255,255,.16)', usage: 'edge' },
      ],
      useCases: ['Cards over media/hero', 'Dark mode panels'],
    },
    {
      id: `${bookId}-clay-inflated`,
      name: 'Clay Inflated',
      style: 'clay',
      description: 'Inflated clay with layered shadows — soft, squishy, joyful.',
      html: `<div style="max-width:320px;padding:20px;background:#fff;border-radius:20px;box-shadow:0 1px 1px rgba(0,0,0,.04),0 8px 20px rgba(0,0,0,.06),0 24px 40px rgba(42,42,42,.08),0 0 0 1px #F5F1EB inset">
  <div style="width:44px;height:44px;border-radius:14px;background:#C17C60;display:grid;place-items:center;color:#fff;font-size:20px">✦</div>
  <div style="margin-top:12px;font-weight:800;font-size:16px;color:#2A2A2A">Clay Inflated</div>
  <div style="margin-top:6px;font-size:13px;line-height:1.5;color:#6b6b6b">Puffy shadow stack, inner highlight. Feels pressable even when it is not.</div>
  <button style="margin-top:14px;padding:10px 14px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:700;font-size:12px;cursor:pointer">Squish me</button>
</div>`,
      css: `.card-clay{
  max-width:320px; padding:20px; background:#fff; border-radius:20px;
  box-shadow: 0 1px 1px rgba(0,0,0,.04), 0 8px 20px rgba(0,0,0,.06), 0 24px 40px rgba(42,42,42,.08), inset 0 0 0 1px #F5F1EB;
}
.card-clay .icon{ width:44px; height:44px; border-radius:14px; background:#C17C60; display:grid; place-items:center; color:#fff; }`,
      props: ['inflated', 'radius'],
      tokens: [
        { name: '--clay-lift', value: '0 8px 20px / 0 24px 40px', usage: 'inflated lift' },
        { name: '--clay-radius', value: '20px', usage: 'puffy corner' },
        { name: '--clay-inset', value: '0 0 0 1px #F5F1EB inset', usage: 'inner stroke' },
      ],
      useCases: ['Playful feature cards', 'Kids/education UI'],
    },
    {
      id: `${bookId}-stats-card`,
      name: 'Stats Card',
      style: 'minimal',
      description: 'Metric + delta + spark — for dashboards.',
      html: `<div style="max-width:300px;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:14px">
  <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A9A8B">Plates Shipped</span><span style="padding:3px 8px;border-radius:999px;background:#8A9A8B;color:#fff;font-size:11px;font-weight:700">▲ 12%</span></div>
  <div style="margin-top:10px;font-size:32px;font-weight:800;letter-spacing:-.02em;color:#2A2A2A">88</div>
  <div style="margin-top:6px;height:32px;display:flex;align-items:end;gap:3px"><span style="flex:1;height:10px;background:#F5F1EB;border-radius:3px"></span><span style="flex:1;height:18px;background:#D4C4B0;border-radius:3px"></span><span style="flex:1;height:14px;background:#D4C4B0;border-radius:3px"></span><span style="flex:1;height:28px;background:#2A2A2A;border-radius:3px"></span><span style="flex:1;height:22px;background:#C17C60;border-radius:3px"></span><span style="flex:1;height:32px;background:#2A2A2A;border-radius:3px"></span></div>
  <div style="margin-top:8px;font-size:11px;color:#6b6b6b">Across 4 volumes • real data only</div>
</div>`,
      css: `.card-stats{ max-width:300px; padding:16px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; }
.card-stats .value{ font-size:32px; font-weight:800; letter-spacing:-.02em; }
.card-stats .delta{ padding:3px 8px; border-radius:999px; background:#8A9A8B; color:#fff; font-size:11px; font-weight:700; }
.card-stats .bars{ height:32px; display:flex; align-items:end; gap:3px; }`,
      props: ['value', 'delta', 'trend'],
      tokens: [
        { name: '--stats-value', value: '32px 800', usage: 'metric size' },
        { name: '--delta-bg', value: '#8A9A8B', usage: 'positive delta' },
        { name: '--bar-active', value: '#2A2A2A', usage: 'latest bar' },
      ],
      useCases: ['Dashboard metrics', 'Volume progress'],
    },
    {
      id: `${bookId}-profile`,
      name: 'Profile',
      style: 'minimal',
      description: 'Avatar, name, role, and actions — compact identity.',
      html: `<div style="max-width:300px;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:16px;display:flex;gap:14px;align-items:center">
  <div style="width:48px;height:48px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;display:grid;place-items:center;font-weight:800;color:#2A2A2A">SC</div>
  <div style="flex:1"><div style="font-weight:800;font-size:14px;color:#2A2A2A">Scout Prime</div><div style="font-size:12px;color:#6b6b6b">Pair programmer • always-on</div><div style="margin-top:6px;display:flex;gap:6px"><span style="padding:3px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">4 books</span><span style="padding:3px 8px;border-radius:999px;background:#2A2A2A;color:#fff;font-size:11px">online</span></div></div>
  <button style="width:32px;height:32px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;display:grid;place-items:center;cursor:pointer">↗</button>
</div>`,
      css: `.card-profile{
  max-width:300px; padding:16px; background:#fff;
  border:1px solid #E8E0D5; border-radius:16px;
  display:flex; gap:14px; align-items:center;
}
.card-profile .avatar{ width:48px; height:48px; border-radius:999px; background:#F9F6F0; border:1px solid #E8E0D5; display:grid; place-items:center; font-weight:800; }`,
      props: ['name', 'role', 'online'],
      tokens: [
        { name: '--avatar-size', value: '48px', usage: 'avatar' },
        { name: '--profile-radius', value: '16px', usage: 'card radius' },
        { name: '--online-bg', value: '#2A2A2A', usage: 'status chip' },
      ],
      useCases: ['Author bylines', 'Team roster cards'],
    },
    {
      id: `${bookId}-pricing`,
      name: 'Pricing',
      style: 'corporate',
      description: 'Plan, price, features, and CTA — trustworthy and dense.',
      html: `<div style="max-width:300px;padding:20px;background:#fff;border:1.5px solid #2A2A2A;border-radius:14px">
  <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6b6b6b">Starter</div>
  <div style="margin-top:8px;display:flex;align-items:baseline;gap:6px"><span style="font-size:32px;font-weight:900;letter-spacing:-.02em">$0</span><span style="font-size:12px;color:#6b6b6b">/ forever</span><span style="margin-left:auto;padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px;font-weight:700">Free</span></div>
  <div style="margin-top:12px;display:grid;gap:8px;font-size:13px"><div>✓ Zero-deps plates</div><div>✓ Japandi v4 tokens</div><div>✓ Vite static</div><div style="opacity:.6">— No sync, no edge</div></div>
  <button style="margin-top:16px;width:100%;padding:12px;border-radius:10px;background:#2A2A2A;color:#fff;border:0;font-weight:700;font-size:13px;cursor:pointer">Start Building</button>
</div>`,
      css: `.card-pricing{
  max-width:300px; padding:20px; background:#fff;
  border:1.5px solid #2A2A2A; border-radius:14px;
}
.card-pricing .price{ font-size:32px; font-weight:900; letter-spacing:-.02em; }
.card-pricing .cta{ width:100%; padding:12px; border-radius:10px; background:#2A2A2A; color:#fff; border:0; font-weight:700; }`,
      props: ['plan', 'price', 'features'],
      tokens: [
        { name: '--pricing-border', value: '1.5px solid #2A2A2A', usage: 'plan edge' },
        { name: '--pricing-price', value: '32px 900', usage: 'price type' },
        { name: '--pricing-cta', value: '#2A2A2A', usage: 'primary action' },
      ],
      useCases: ['Plan comparison', 'Feature tiers'],
    },
    {
      id: `${bookId}-testimonial`,
      name: 'Testimonial',
      style: 'editorial',
      description: 'Quote, avatar, and context — social proof with serif.',
      html: `<div style="max-width:360px;padding:20px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:14px">
  <div style="font-family:'Fraunces',Georgia,serif;font-size:18px;line-height:1.35;color:#2A2A2A">“Component Books finally made our design system <span style="background:#E8E0D5;padding:2px 6px;border-radius:6px">shippable</span>. Zero deps, real HTML.”</div>
  <div style="margin-top:14px;display:flex;gap:10px;align-items:center"><div style="width:36px;height:36px;border-radius:999px;background:#2A2A2A;color:#fff;display:grid;place-items:center;font-weight:800;font-size:12px">CD</div><div><div style="font-weight:700;font-size:13px">Cameron D.</div><div style="font-size:11px;color:#6b6b6b">Builder • Scout stack</div></div><div style="margin-left:auto;font-size:11px;color:#8A9A8B">★★★★★</div></div>
</div>`,
      css: `.card-quote{
  max-width:360px; padding:20px; background:#F9F6F0; border:1px solid #E8E0D5; border-radius:14px;
}
.card-quote q{ font-family:"Fraunces",Georgia,serif; font-size:18px; line-height:1.35; }
.card-quote .mark{ background:#E8E0D5; padding:2px 6px; border-radius:6px; }`,
      props: ['quote', 'author', 'rating'],
      tokens: [
        { name: '--quote-serif', value: '"Fraunces", Georgia, serif', usage: 'quote type' },
        { name: '--quote-mark', value: '#E8E0D5', usage: 'highlight' },
        { name: '--quote-bg', value: '#F9F6F0', usage: 'card bg' },
      ],
      useCases: ['Testimonial walls', 'Social proof in marketing'],
    },
    {
      id: `${bookId}-image-cover`,
      name: 'Image Cover',
      style: 'minimal',
      description: '16:10 cover with gradient scrim and text overlay.',
      html: `<div style="max-width:340px;border-radius:16px;overflow:hidden;background:#fff;border:1px solid #E8E0D5">
  <div style="height:180px;background:linear-gradient(120deg,#F9F6F0,#E8E0D5 40%,#D4C4B0 70%,#C17C60 100%);position:relative">
    <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(42,42,42,.55),transparent 60%)"></div>
    <div style="position:absolute;left:14px;bottom:12px;right:14px;color:#fff"><div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.9">Volume 04 • Cards</div><div style="margin-top:4px;font-weight:800;font-size:18px;line-height:1.1">Image Cover</div></div>
    <div style="position:absolute;top:12px;right:12px;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.9);font-size:11px;font-weight:700;color:#2A2A2A">16:10</div>
  </div>
  <div style="padding:14px 16px"><div style="font-size:13px;line-height:1.5;color:#6b6b6b">Cover cards for library — imagery does the talking, scrim keeps text legible.</div><div style="margin-top:10px;display:flex;gap:8px"><span style="padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">paper</span><span style="padding:4px 8px;border-radius:999px;background:#2A2A2A;color:#fff;font-size:11px">ink</span></div></div>
</div>`,
      css: `.card-cover{ max-width:340px; border-radius:16px; overflow:hidden; background:#fff; border:1px solid #E8E0D5; }
.card-cover .media{ height:180px; background: linear-gradient(120deg,#F9F6F0,#E8E0D5 40%,#D4C4B0 70%,#C17C60); position:relative; }
.card-cover .scrim{ position:absolute; inset:0; background: linear-gradient(0deg, rgba(42,42,42,.55), transparent 60%); }`,
      props: ['src', 'aspect', 'scrim'],
      tokens: [
        { name: '--cover-h', value: '180px', usage: 'media height' },
        { name: '--cover-scrim', value: 'rgba(42,42,42,.55)', usage: 'legibility gradient' },
        { name: '--cover-radius', value: '16px', usage: 'card radius' },
      ],
      useCases: ['Library cover grid', 'Marketing feature cards'],
    },
    {
      id: `${bookId}-horizontal`,
      name: 'Horizontal',
      style: 'minimal',
      description: 'Side-by-side media + content — for lists and feeds.',
      html: `<div style="max-width:400px;display:flex;gap:14px;padding:12px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;align-items:center">
  <div style="width:96px;height:72px;border-radius:10px;background:#F5F1EB;border:1px solid #E8E0D5;display:grid;place-items:center;font-size:11px;font-family:ui-monospace">96×72</div>
  <div style="flex:1"><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A9A8B">Book 02 • Buttons</div><div style="margin-top:2px;font-weight:800;font-size:14px;color:#2A2A2A">Horizontal Card</div><div style="margin-top:4px;font-size:12px;color:#6b6b6b;line-height:1.4">Great for lists, search results, and dense feeds.</div></div>
  <button style="width:32px;height:32px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;display:grid;place-items:center;cursor:pointer">→</button>
</div>`,
      css: `.card-h{
  max-width:400px; display:flex; gap:14px; padding:12px;
  background:#fff; border:1px solid #E8E0D5; border-radius:14px; align-items:center;
}
.card-h .thumb{ width:96px; height:72px; border-radius:10px; background:#F5F1EB; border:1px solid #E8E0D5; }`,
      props: ['thumb', 'title', 'meta'],
      tokens: [
        { name: '--h-thumb', value: '96px×72px', usage: 'thumbnail size' },
        { name: '--h-radius', value: '14px', usage: 'card radius' },
        { name: '--h-gap', value: '14px', usage: 'media/content gap' },
      ],
      useCases: ['Search results', 'List views in dictionary'],
    },
    {
      id: `${bookId}-interactive-hover-lift`,
      name: 'Interactive Hover Lift',
      style: 'minimal',
      description: 'Card that lifts on hover — shadow, border, and arrow slide.',
      html: `<div style="max-width:320px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:16px;transition:all .22s cubic-bezier(.16,1,.3,1);cursor:pointer" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 24px rgba(42,42,42,.08),0 16px 40px rgba(42,42,42,.06)';this.style.borderColor='#D4C4B0'" onmouseleave="this.style.transform='none';this.style.boxShadow='none';this.style.borderColor='#E8E0D5'">
  <div style="display:flex;justify-content:space-between;align-items:center"><span style="padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">hover lift</span><span style="width:28px;height:28px;border-radius:999px;background:#2A2A2A;color:#fff;display:grid;place-items:center;transition:transform .22s">↗</span></div>
  <div style="margin-top:12px;font-weight:800;font-size:15px">Interactive Hover Lift</div>
  <div style="margin-top:6px;font-size:13px;color:#6b6b6b">Feels alive — no JS required, pure CSS transform + shadow.</div>
</div>`,
      css: `.card-lift{
  max-width:320px; padding:18px; background:#fff;
  border:1px solid #E8E0D5; border-radius:16px;
  transition: all 220ms cubic-bezier(.16,1,.3,1); cursor:pointer;
}
.card-lift:hover{ transform: translateY(-3px); box-shadow: 0 8px 24px rgba(42,42,42,.08), 0 16px 40px rgba(42,42,42,.06); border-color:#D4C4B0; }
.card-lift:hover .arrow{ transform: translate(2px,-2px); }`,
      props: ['lift', 'arrow'],
      tokens: [
        { name: '--lift-y', value: '-3px', usage: 'hover translate' },
        { name: '--lift-shadow', value: '0 8px 24px / 0 16px 40px', usage: 'hover depth' },
        { name: '--lift-border', value: '#D4C4B0', usage: 'hover edge' },
      ],
      useCases: ['Clickable library cards', 'Product grid hovers'],
    },
    {
      id: `${bookId}-list-row`,
      name: 'List Row',
      style: 'minimal',
      description: 'Dense row card — title, meta, and right actions.',
      html: `<div style="max-width:420px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden">
  <div style="display:flex;gap:12px;align-items:center;padding:12px 14px;border-bottom:1px solid #F5F1EB"><span style="width:32px;height:32px;border-radius:8px;background:#F9F6F0;border:1px solid #E8E0D5;display:grid;place-items:center;font-weight:700;font-size:12px">F</span><div style="flex:1"><div style="font-weight:700;font-size:13px">foundations.ts</div><div style="font-size:11px;color:#8A9A8B">18 plates • updated 2m ago</div></div><span style="padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">v1</span><button style="width:28px;height:28px;border-radius:8px;background:#fff;border:1px solid #E8E0D5;cursor:pointer">⋯</button></div>
  <div style="display:flex;gap:12px;align-items:center;padding:12px 14px"><span style="width:32px;height:32px;border-radius:8px;background:#2A2A2A;color:#fff;display:grid;place-items:center;font-weight:700;font-size:12px">B</span><div style="flex:1"><div style="font-weight:700;font-size:13px">buttons.ts</div><div style="font-size:11px;color:#8A9A8B">25 plates • shipping now</div></div><span style="padding:4px 8px;border-radius:999px;background:#C17C60;color:#fff;font-size:11px;font-weight:700">live</span></div>
</div>`,
      css: `.list-row{
  display:flex; gap:12px; align-items:center; padding:12px 14px;
  border-bottom:1px solid #F5F1EB;
}
.list-row .icon{ width:32px; height:32px; border-radius:8px; background:#F9F6F0; border:1px solid #E8E0D5; display:grid; place-items:center; font-weight:700; font-size:12px; }`,
      props: ['title', 'meta', 'status'],
      tokens: [
        { name: '--row-pad', value: '12px 14px', usage: 'row padding' },
        { name: '--row-icon', value: '32px', usage: 'icon size' },
        { name: '--row-divider', value: '#F5F1EB', usage: 'row divider' },
      ],
      useCases: ['File lists', 'Recent plates'],
    },
    {
      id: `${bookId}-metric-sparkline`,
      name: 'Metric Sparkline',
      style: 'minimal',
      description: 'Metric + inline SVG sparkline — zero-deps chart.',
      html: `<div style="max-width:300px;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:14px">
  <div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A9A8B">Verifier Score</div>
  <div style="margin-top:8px;display:flex;align-items:end;justify-content:space-between"><div style="font-size:28px;font-weight:900;letter-spacing:-.02em">8.7</div><div style="font-size:11px;color:#8A9A8B">/ 10 • last 12 runs</div></div>
  <svg viewBox="0 0 120 32" width="100%" height="36" style="margin-top:10px;display:block"><path d="M0 24 C 10 22, 20 26, 30 18 S 50 8, 60 14 S 80 22, 90 10 S 110 6, 120 4" fill="none" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round"/><circle cx="120" cy="4" r="3" fill="#C17C60"/></svg>
  <div style="margin-top:8px;display:flex;gap:6px"><span style="padding:3px 8px;border-radius:999px;background:#8A9A8B;color:#fff;font-size:11px;font-weight:700">▲ +0.4</span><span style="font-size:11px;color:#6b6b6b">construct validity pass</span></div>
</div>`,
      css: `.card-spark{ max-width:300px; padding:16px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; }
.card-spark .value{ font-size:28px; font-weight:900; letter-spacing:-.02em; }
.card-spark svg{ width:100%; height:36px; display:block; margin-top:10px; }
.card-spark path{ fill:none; stroke:#2A2A2A; stroke-width:1.6; stroke-linecap:round; }`,
      props: ['value', 'sparkline', 'delta'],
      tokens: [
        { name: '--spark-stroke', value: '#2A2A2A', usage: 'line color' },
        { name: '--spark-dot', value: '#C17C60', usage: 'latest point' },
        { name: '--spark-h', value: '36px', usage: 'chart height' },
      ],
      useCases: ['Quality metrics', 'Run history mini charts'],
    },
    {
      id: `${bookId}-notification-card`,
      name: 'Notification Card',
      style: 'minimal',
      description: 'Inline notification — icon, title, and dismiss.',
      html: `<div style="max-width:380px;padding:14px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;display:flex;gap:12px;align-items:start">
  <div style="width:32px;height:32px;border-radius:999px;background:#2A2A2A;color:#fff;display:grid;place-items:center;font-size:14px">✦</div>
  <div style="flex:1"><div style="font-weight:700;font-size:13px;color:#2A2A2A">4 books shipped</div><div style="margin-top:3px;font-size:12px;line-height:1.4;color:#6b6b6b">Foundations, Buttons, Forms, Cards — all valid TS, zero-deps, Japandi v4.</div><div style="margin-top:8px;display:flex;gap:8px"><button style="padding:6px 10px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:11px;cursor:pointer">View Books</button><button style="padding:6px 10px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:11px;cursor:pointer">Dismiss</button></div></div>
  <button aria-label="Dismiss" style="width:28px;height:28px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;display:grid;place-items:center;cursor:pointer;font-size:12px">✕</button>
</div>`,
      css: `.card-notif{
  max-width:380px; padding:14px; background:#F9F6F0;
  border:1px solid #E8E0D5; border-radius:12px;
  display:flex; gap:12px; align-items:start;
}
.card-notif .icon{ width:32px; height:32px; border-radius:999px; background:#2A2A2A; color:#fff; display:grid; place-items:center; }`,
      props: ['title', 'body', 'dismissible'],
      tokens: [
        { name: '--notif-bg', value: '#F9F6F0', usage: 'notice bg' },
        { name: '--notif-border', value: '#E8E0D5', usage: 'notice edge' },
        { name: '--notif-icon', value: '#2A2A2A', usage: 'icon bg' },
      ],
      useCases: ['Build success notices', 'Inline feature announcements'],
    },
    {
      id: `${bookId}-product`,
      name: 'Product',
      style: 'minimal',
      description: 'Product with price, badge, and ATC — clean commerce.',
      html: `<div style="max-width:280px;background:#fff;border:1px solid #E8E0D5;border-radius:16px;overflow:hidden">
  <div style="height:160px;background:linear-gradient(130deg,#F9F6F0,#E8E0D5);display:grid;place-items:center;position:relative"><span style="font-family:'Fraunces',Georgia,serif;font-size:28px;font-weight:800;color:#2A2A2A">BOOK</span><span style="position:absolute;top:10px;left:10px;padding:4px 8px;border-radius:999px;background:#2A2A2A;color:#fff;font-size:11px;font-weight:700">New</span><span style="position:absolute;top:10px;right:10px;width:32px;height:32px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;display:grid;place-items:center;cursor:pointer">♡</span></div>
  <div style="padding:14px"><div style="font-weight:800;font-size:14px">Component Books Vol. 1–4</div><div style="margin-top:2px;font-size:12px;color:#8A9A8B">Zero-deps • Vite • Japandi v4</div><div style="margin-top:10px;display:flex;justify-content:space-between;align-items:center"><span style="font-weight:800;font-size:15px">$24</span><button style="padding:8px 12px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:700;font-size:12px;cursor:pointer">Add to Cart</button></div></div>
</div>`,
      css: `.card-product{ max-width:280px; background:#fff; border:1px solid #E8E0D5; border-radius:16px; overflow:hidden; }
.card-product .media{ height:160px; background: linear-gradient(130deg,#F9F6F0,#E8E0D5); display:grid; place-items:center; position:relative; }
.card-product .price{ font-weight:800; font-size:15px; }`,
      props: ['title', 'price', 'badge'],
      tokens: [
        { name: '--product-media', value: '160px', usage: 'media height' },
        { name: '--product-radius', value: '16px', usage: 'card radius' },
        { name: '--product-badge', value: '#2A2A2A', usage: 'new badge' },
      ],
      useCases: ['Shop and marketplace', 'Library merch'],
    },
    {
      id: `${bookId}-article`,
      name: 'Article',
      style: 'editorial',
      description: 'Article with kicker, serif title, meta, and reading time.',
      html: `<div style="max-width:360px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:14px">
  <div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C17C60;font-weight:800">Design Systems • Essay</div>
  <div style="margin-top:8px;font-family:'Fraunces',Georgia,serif;font-size:20px;font-weight:800;line-height:1.05;letter-spacing:-.01em;color:#2A2A2A">Why zero-deps<br/>is a feature, not a flex</div>
  <div style="margin-top:10px;font-size:13px;line-height:1.5;color:#6b6b6b">No pip, no torch, no synthetic data. Real sources, real pipelines, honest 503 over fake success.</div>
  <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#8A9A8B"><span>5 min • by Scout</span><span style="padding:4px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5">Read →</span></div>
</div>`,
      css: `.card-article{
  max-width:360px; padding:18px; background:#fff; border:1px solid #E8E0D5; border-radius:14px;
}
.card-article .kicker{ font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#C17C60; font-weight:800; }
.card-article h3{ font-family:"Fraunces",Georgia,serif; font-size:20px; font-weight:800; line-height:1.05; }`,
      props: ['kicker', 'title', 'readingTime'],
      tokens: [
        { name: '--kicker', value: '#C17C60', usage: 'kicker color' },
        { name: '--article-serif', value: '"Fraunces", serif', usage: 'title' },
        { name: '--article-meta', value: '#8A9A8B', usage: 'meta type' },
      ],
      useCases: ['Blog and essay feeds', 'Docs changelogs'],
    },
    {
      id: `${bookId}-comparison`,
      name: 'Comparison',
      style: 'minimal',
      description: 'Side-by-side comparison — check / ×, calm and scannable.',
      html: `<div style="max-width:380px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;overflow:hidden">
  <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:12px 14px;background:#F9F6F0;border-right:1px solid #E8E0D5;font-weight:700;font-size:12px">Before</div><div style="padding:12px 14px;background:#2A2A2A;color:#fff;font-weight:700;font-size:12px">After • Japandi v4</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;font-size:13px"><div style="padding:12px 14px;border-right:1px solid #F5F1EB;border-bottom:1px solid #F5F1EB"><span style="color:#8A9A8B">✗</span> 12 deps</div><div style="padding:12px 14px;border-bottom:1px solid #F5F1EB"><span style="color:#8A9A8B">✓</span> 0 deps</div><div style="padding:12px 14px;border-right:1px solid #F5F1EB;border-bottom:1px solid #F5F1EB"><span style="color:#8A9A8B">✗</span> mock data</div><div style="padding:12px 14px;border-bottom:1px solid #F5F1EB"><span style="color:#2A2A2A">✓</span> real plates</div><div style="padding:12px 14px;border-right:1px solid #F5F1EB"><span style="color:#8A9A8B">✗</span> vague tokens</div><div style="padding:12px 14px"><span style="color:#2A2A2A">✓</span> 3 token examples</div></div>
</div>`,
      css: `.card-compare{ max-width:380px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; overflow:hidden; }
.card-compare .head{ display:grid; grid-template-columns:1fr 1fr; }
.card-compare .head div{ padding:12px 14px; font-weight:700; font-size:12px; }
.card-compare .row{ display:grid; grid-template-columns:1fr 1fr; font-size:13px; }
.card-compare .row div{ padding:12px 14px; border-bottom:1px solid #F5F1EB; }`,
      props: ['before', 'after'],
      tokens: [
        { name: '--compare-before', value: '#F9F6F0', usage: 'before header' },
        { name: '--compare-after', value: '#2A2A2A', usage: 'after header' },
        { name: '--compare-divider', value: '#F5F1EB', usage: 'row divider' },
      ],
      useCases: ['Migration comparisons', 'Plan differences'],
    },
    {
      id: `${bookId}-calendar`,
      name: 'Calendar',
      style: 'minimal',
      description: 'Mini calendar with selected day and event dots.',
      html: `<div style="max-width:300px;padding:14px;background:#fff;border:1px solid #E8E0D5;border-radius:14px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span style="font-weight:800;font-size:13px">August 2026</span><div style="display:flex;gap:6px"><button style="width:28px;height:28px;border-radius:8px;background:#F9F6F0;border:1px solid #E8E0D5;cursor:pointer">‹</button><button style="width:28px;height:28px;border-radius:8px;background:#F9F6F0;border:1px solid #E8E0D5;cursor:pointer">›</button></div></div>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;font-size:11px;text-align:center;color:#8A9A8B"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div>
  <div style="margin-top:6px;display:grid;grid-template-columns:repeat(7,1fr);gap:4px;font-size:12px;text-align:center">
    <span style="padding:6px"></span><span style="padding:6px"></span><span style="padding:6px"></span><span style="padding:6px"></span><span style="padding:6px"></span><span style="padding:6px;color:#8A9A8B">1</span><span style="padding:6px;color:#8A9A8B">2</span>
    <span style="padding:6px">3</span><span style="padding:6px">4</span><span style="padding:6px">5</span><span style="padding:6px">6</span><span style="padding:6px">7</span><span style="padding:6px">8</span><span style="padding:6px">9</span>
    <span style="padding:6px">10</span><span style="padding:6px">11</span><span style="padding:6px">12</span><span style="padding:6px">13</span><span style="padding:6px">14</span><span style="padding:6px">15</span><span style="padding:6px">16</span>
    <span style="padding:6px">17</span><span style="padding:6px">18</span><span style="padding:6px">19</span><span style="padding:6px">20</span><span style="padding:6px">21</span><span style="padding:6px;background:#2A2A2A;color:#fff;border-radius:8px;font-weight:700">22</span><span style="padding:6px;position:relative">23<span style="position:absolute;left:50%;bottom:2px;width:4px;height:4px;background:#C17C60;border-radius:999px;transform:translateX(-50%)"></span></span>
  </div>
  <div style="margin-top:10px;padding:8px 10px;border-radius:10px;background:#F9F6F0;border:1px solid #E8E0D5;font-size:11px">● Ship component-books • today 11:28</div>
</div>`,
      css: `.card-cal{ max-width:300px; padding:14px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; }
.card-cal .grid{ display:grid; grid-template-columns:repeat(7,1fr); gap:4px; font-size:12px; text-align:center; }
.card-cal .today{ padding:6px; background:#2A2A2A; color:#fff; border-radius:8px; font-weight:700; }
.card-cal .dot{ position:absolute; left:50%; bottom:2px; width:4px; height:4px; background:#C17C60; border-radius:999px; transform:translateX(-50%); }`,
      props: ['month', 'selected', 'events'],
      tokens: [
        { name: '--cal-today', value: '#2A2A2A', usage: 'today fill' },
        { name: '--cal-dot', value: '#C17C60', usage: 'event dot' },
        { name: '--cal-radius', value: '8px', usage: 'day radius' },
      ],
      useCases: ['Due date pickers', 'Event sidebars'],
    },
    {
      id: `${bookId}-dashboard-widget`,
      name: 'Dashboard Widget',
      style: 'minimal',
      description: 'Widget shell — header, tabs, and dense content.',
      html: `<div style="max-width:360px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;overflow:hidden">
  <div style="padding:12px 14px;border-bottom:1px solid #F5F1EB;display:flex;justify-content:space-between;align-items:center"><span style="font-weight:800;font-size:13px">Build Status</span><span style="padding:3px 8px;border-radius:999px;background:#8A9A8B;color:#fff;font-size:11px;font-weight:700">● live</span></div>
  <div style="padding:8px 12px;display:flex;gap:6px;border-bottom:1px solid #F5F1EB"><button style="padding:6px 10px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:11px;cursor:pointer">Overview</button><button style="padding:6px 10px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-weight:600;font-size:11px;cursor:pointer">Logs</button><button style="padding:6px 10px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-weight:600;font-size:11px;cursor:pointer">Tokens</button></div>
  <div style="padding:12px 14px;display:grid;gap:8px;font-size:12px"><div style="display:flex;justify-content:space-between"><span>Verifier</span><span style="font-family:ui-monospace;font-weight:700">≥8.0 ✓ 8.7</span></div><div style="display:flex;justify-content:space-between"><span>Plates</span><span style="font-family:ui-monospace;font-weight:700">88 / 88</span></div><div style="display:flex;justify-content:space-between"><span>Zero-deps</span><span style="font-weight:700;color:#3a4a3c">pass</span></div><div style="height:6px;border-radius:999px;background:#F5F1EB;overflow:hidden"><div style="height:100%;width:92%;background:#2A2A2A;border-radius:999px"></div></div></div>
</div>`,
      css: `.widget{
  max-width:360px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; overflow:hidden;
}
.widget-head{ padding:12px 14px; border-bottom:1px solid #F5F1EB; display:flex; justify-content:space-between; align-items:center; }
.widget-tabs{ padding:8px 12px; display:flex; gap:6px; border-bottom:1px solid #F5F1EB; }
.widget-body{ padding:12px 14px; display:grid; gap:8px; font-size:12px; }`,
      props: ['title', 'status', 'tabs'],
      tokens: [
        { name: '--widget-border', value: '#E8E0D5', usage: 'shell edge' },
        { name: '--widget-head', value: '#F5F1EB', usage: 'divider' },
        { name: '--widget-live', value: '#8A9A8B', usage: 'live chip' },
      ],
      useCases: ['Build dashboards', 'Goal widgets'],
    },
  ],
}
