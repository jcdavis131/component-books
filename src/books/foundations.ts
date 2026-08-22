import type { Book } from '../types.ts'

const bookId = 'foundations'

export const book: Book = {
  id: bookId,
  title: 'Foundations',
  volume: 1,
  description: 'Tokens, type, color, space, and motion — the atomic layer of Japandi v4.',
  color: '#F9F6F0',
  accent: '#2A2A2A',
  intro: 'Foundations are decisions, not defaults. Paper, ink, terracotta, and void — scaled on 4 and 8, softened with 8/12/16, shadowed with intent, and moved like a hinge, not a bounce. Every plate here is a visual contract.',
  plates: [
    {
      id: `${bookId}-editorial-serif`,
      name: 'Editorial Serif',
      style: 'editorial',
      description: 'High-contrast serif stack for long-form, quotes, and chapter heads.',
      html: `<div style="font-family:'Fraunces','Iowan Old Style',Georgia,serif;line-height:1.1;padding:24px;background:#F9F6F0;color:#2A2A2A;border-radius:12px">
  <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.6;margin-bottom:12px">Editorial — 12 / 18 / 32 / 56</div>
  <div style="font-size:56px;font-weight:800;letter-spacing:-.02em;line-height:.95">Whisper &<br/>Weight</div>
  <div style="font-size:18px;line-height:1.6;margin-top:16px;max-width:36ch;opacity:.9">Serif holds opinion. Tight leading, loose tracking at small, -2% at display. Use for pull quotes and volume titles.</div>
  <div style="margin-top:12px;font-size:14px;font-style:italic;opacity:.7">Fraunces → Newsreader → Georgia → serif</div>
</div>`,
      css: `.plate-serifs{
  font-family: "Fraunces", "Newsreader", Georgia, serif;
  --text-xs: 0.75rem; --text-sm: 0.875rem;
  --text-h2: 2rem; --text-display: 3.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}`,
      props: ['scale', 'weight', 'leading'],
      tokens: [
        { name: '--font-serif', value: '"Fraunces", Georgia, serif', usage: 'headlines and pull quotes' },
        { name: '--text-display', value: 'clamp(2.5rem,6vw,3.5rem)', usage: 'volume titles' },
        { name: '--leading-tight', value: '1.05', usage: 'display lines' },
      ],
      useCases: ['Chapter openers in reader view', 'Pull-quote plates for editorial cards'],
    },
    {
      id: `${bookId}-grotesk-sans`,
      name: 'Grotesk Sans',
      style: 'minimal',
      description: 'Neutral sans for UI, labels, and dense data.',
      html: `<div style="font-family:'General Sans','Inter',system-ui,sans-serif;padding:24px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;color:#2A2A2A">
  <div style="display:flex;gap:16px;align-items:baseline;flex-wrap:wrap">
    <span style="font-size:48px;font-weight:700;letter-spacing:-.03em">Grotesk</span>
    <span style="font-size:14px;letter-spacing:.12em;text-transform:uppercase;opacity:.6">400 · 500 · 600 · 700</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:16px;font-size:13px">
    <div style="padding:10px;background:#F9F6F0;border-radius:8px"><b>12</b><br/>label</div>
    <div style="padding:10px;background:#F9F6F0;border-radius:8px"><b>14</b><br/>ui</div>
    <div style="padding:10px;background:#F9F6F0;border-radius:8px"><b>16</b><br/>body</div>
    <div style="padding:10px;background:#F9F6F0;border-radius:8px"><b>20</b><br/>lead</div>
  </div>
</div>`,
      css: `.plate-sans{
  font-family: "General Sans", Inter, system-ui, sans-serif;
  font-weight: 500; letter-spacing: -0.01em;
  --text-ui: 0.875rem; --text-body: 1rem;
  -webkit-font-smoothing: antialiased;
}`,
      props: ['weight', 'tracking', 'smoothing'],
      tokens: [
        { name: '--font-sans', value: '"General Sans", Inter, system-ui', usage: 'UI and labels' },
        { name: '--text-ui', value: '0.875rem', usage: 'buttons and chips' },
        { name: '--tracking-ui', value: '-0.01em', usage: 'tight UI labels' },
      ],
      useCases: ['Button and form labels', 'Navigation and metadata'],
    },
    {
      id: `${bookId}-mono-stack`,
      name: 'Mono Stack',
      style: 'minimal',
      description: 'Code, tokens, and provenance — tabular numbers and crisp edges.',
      html: `<div style="font-family:'JetBrains Mono','IBM Plex Mono',ui-monospace,monospace;padding:20px;background:#1E2022;color:#F9F6F0;border-radius:12px">
  <div style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.7;margin-bottom:12px"><span>MONO / TABULAR</span><span>400 500</span></div>
  <div style="font-size:13px;line-height:1.7">
    <div><span style="opacity:.5">--paper:</span> #F9F6F0 <span style="opacity:.5">/* bg */</span></div>
    <div><span style="opacity:.5">--ink:</span>   #2A2A2A <span style="opacity:.5">/* text */</span></div>
    <div><span style="opacity:.5">--radius:</span> 12px  <span style="opacity:.5">/* soft */</span></div>
  </div>
  <div style="margin-top:12px;display:flex;gap:8px;font-variant-numeric:tabular-nums">
    <span style="padding:4px 8px;background:#2A2A2A;border-radius:6px">012345</span>
    <span style="padding:4px 8px;background:#2A2A2A;border-radius:6px">89.4% ✓</span>
  </div>
</div>`,
      css: `.plate-mono{
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem; line-height: 1.6;
  letter-spacing: -0.01em;
}`,
      props: ['variant', 'tabular'],
      tokens: [
        { name: '--font-mono', value: '"JetBrains Mono", monospace', usage: 'code and tokens' },
        { name: '--text-mono', value: '0.8125rem', usage: 'inline token display' },
        { name: '--mono-bg', value: '#1E2022', usage: 'dark code blocks' },
      ],
      useCases: ['Token previews and props tables', 'Provenance hashes and IDs'],
    },
    {
      id: `${bookId}-fluid-clamp`,
      name: 'Fluid Clamp',
      style: 'minimal',
      description: 'One scale that stretches from mobile to desk without breakpoints.',
      html: `<div style="padding:22px;background:#F5F1EB;border-radius:16px;border:1px solid #E8E0D5;color:#2A2A2A">
  <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.6;margin-bottom:10px">fluid — clamp(14px, 1vw + 12px, 20px)</div>
  <div style="font-size:clamp(1.5rem,4vw + 1rem,3rem);font-weight:800;line-height:.95;letter-spacing:-.03em">Scales with<br/>viewport</div>
  <div style="margin-top:12px;height:8px;border-radius:99px;background:linear-gradient(90deg,#2A2A2A,#C17C60,#F9F6F0);"></div>
  <div style="margin-top:10px;display:flex;justify-content:space-between;font-size:11px;font-family:ui-monospace,monospace;opacity:.7"><span>320px → 14px</span><span>1280px → 20px</span></div>
</div>`,
      css: `.plate-fluid{
  font-size: clamp(0.875rem, 1vw + 0.75rem, 1.25rem);
  --fluid-h1: clamp(1.75rem, 4vw + 1rem, 3rem);
  --fluid-body: clamp(0.875rem, 0.4vw + 0.8rem, 1rem);
  line-height: 1.35;
}`,
      props: ['min', 'preferred', 'max'],
      tokens: [
        { name: '--fluid-h1', value: 'clamp(1.75rem, 4vw + 1rem, 3rem)', usage: 'responsive headings' },
        { name: '--fluid-body', value: 'clamp(0.875rem, 0.4vw + 0.8rem, 1rem)', usage: 'body that grows with viewport' },
        { name: '--vw-unit', value: '1vw', usage: 'fluid interpolation factor' },
      ],
      useCases: ['Hero headings across breakpoints', 'Body copy that never jumps'],
    },
    {
      id: `${bookId}-palette-paper-ink-terracotta`,
      name: 'Paper Ink Terracotta',
      style: 'terracotta',
      description: 'Japandi core — warm paper, soft ink, fired accent.',
      html: `<div style="display:grid;grid-template-columns:1.4fr .9fr .7fr;gap:10px">
  <div style="background:#F9F6F0;border:1px solid #E8E0D5;border-radius:14px;padding:16px"><div style="width:100%;height:54px;border-radius:10px;background:#F9F6F0;border:1px dashed #D4C4B0"></div><div style="margin-top:10px;font-family:ui-monospace;font-size:12px">#F9F6F0 — paper</div></div>
  <div style="background:#2A2A2A;color:#F9F6F0;border-radius:14px;padding:16px"><div style="height:54px;border-radius:10px;background:#2A2A2A;border:1px solid #3a3a3a"></div><div style="margin-top:10px;font-family:ui-monospace;font-size:12px">#2A2A2A — ink</div></div>
  <div style="background:#C17C60;color:#fff;border-radius:14px;padding:16px"><div style="height:54px;border-radius:10px;background:#C17C60"></div><div style="margin-top:10px;font-family:ui-monospace;font-size:12px">#C17C60 — terracotta</div></div>
</div>`,
      css: `:root{
  --paper: #F9F6F0; --paper-2: #F5F1EB;
  --ink: #2A2A2A; --ink-2: #1E2022;
  --terracotta: #C17C60; --terracotta-ink: #7a3f2e;
}`,
      props: ['paper', 'ink', 'accent'],
      tokens: [
        { name: '--paper', value: '#F9F6F0', usage: 'page background' },
        { name: '--ink', value: '#2A2A2A', usage: 'primary text' },
        { name: '--terracotta', value: '#C17C60', usage: 'accent and CTAs' },
      ],
      useCases: ['Default page and card backgrounds', 'Primary button and link accents'],
    },
    {
      id: `${bookId}-palette-void-glass`,
      name: 'Void Glass',
      style: 'void',
      description: 'Dark void with frosted glass for depth and overlay.',
      html: `<div style="background:#1E2022;border-radius:16px;padding:18px;position:relative;overflow:hidden">
  <div style="position:absolute;inset:-20px;background:radial-gradient(600px 300px at 20% 10%,#C17C6033,transparent),radial-gradient(500px 300px at 80% 90%,#8A9A8B33,transparent)"></div>
  <div style="position:relative;display:flex;gap:12px">
    <div style="flex:1;padding:16px;border-radius:14px;background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);color:#F9F6F0">
      <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.7">GLASS</div>
      <div style="margin-top:8px;font-weight:600">rgba(255,255,255,.08) + blur(12px)</div>
    </div>
    <div style="width:96px;border-radius:12px;background:#2A2A2A;border:1px solid #3a3a3a;display:grid;place-items:center;color:#F9F6F0;font-family:ui-monospace;font-size:11px">#1E2022 void</div>
  </div>
</div>`,
      css: `.void-glass{
  background: #1E2022;
  --glass: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
}`,
      props: ['blur', 'opacity', 'void'],
      tokens: [
        { name: '--void', value: '#1E2022', usage: 'dark mode base' },
        { name: '--glass', value: 'rgba(255,255,255,0.08)', usage: 'frosted overlay fill' },
        { name: '--glass-border', value: 'rgba(255,255,255,0.12)', usage: 'glass edge' },
      ],
      useCases: ['Dark mode cards and modals', 'Navigation over media'],
    },
    {
      id: `${bookId}-palette-moss-clay`,
      name: 'Moss Clay',
      style: 'moss',
      description: 'Muted earth secondary palette for tags, charts, and calm states.',
      html: `<div style="display:flex;gap:10px;flex-wrap:wrap">
  <div style="min-width:120px;flex:1;padding:14px;border-radius:12px;background:#8A9A8B;color:#fff"><div style="font-size:12px;opacity:.9">MOSS</div><div style="font-family:ui-monospace;font-size:12px;margin-top:6px">#8A9A8B</div></div>
  <div style="min-width:120px;flex:1;padding:14px;border-radius:12px;background:#A67B5B;color:#fff"><div style="font-size:12px;opacity:.9">CLAY</div><div style="font-family:ui-monospace;font-size:12px;margin-top:6px">#A67B5B</div></div>
  <div style="min-width:120px;flex:1;padding:14px;border-radius:12px;background:#D4C4B0;color:#2A2A2A;border:1px solid #E8E0D5"><div style="font-size:12px">STONE</div><div style="font-family:ui-monospace;font-size:12px;margin-top:6px">#D4C4B0</div></div>
  <div style="min-width:120px;flex:1;padding:14px;border-radius:12px;background:#F5F1EB;color:#2A2A2A;border:1px solid #E8E0D5"><div style="font-size:12px">STONE-2</div><div style="font-family:ui-monospace;font-size:12px;margin-top:6px">#F5F1EB</div></div>
</div>`,
      css: `:root{
  --moss: #8A9A8B; --moss-ink: #3a4a3c;
  --clay: #A67B5B; --stone: #D4C4B0;
  --stone-2: #F5F1EB;
}`,
      props: ['moss', 'clay', 'stone'],
      tokens: [
        { name: '--moss', value: '#8A9A8B', usage: 'secondary and success tint' },
        { name: '--clay', value: '#A67B5B', usage: 'warm secondary accent' },
        { name: '--stone', value: '#D4C4B0', usage: 'borders and dividers' },
      ],
      useCases: ['Tag and badge hues', 'Chart series with low chroma'],
    },
    {
      id: `${bookId}-palette-monochrome`,
      name: 'Monochrome',
      style: 'minimal',
      description: 'Ink scale for hierarchy without color.',
      html: `<div style="background:#fff;border:1px solid #E8E0D5;border-radius:14px;padding:16px">
  <div style="display:flex;gap:8px;align-items:end">
    <div style="flex:1"><div style="height:44px;border-radius:8px;background:#2A2A2A"></div><div style="font-family:ui-monospace;font-size:11px;margin-top:6px;text-align:center">900 #2A2A2A</div></div>
    <div style="flex:1"><div style="height:36px;border-radius:8px;background:#6b6b6b"></div><div style="font-family:ui-monospace;font-size:11px;margin-top:6px;text-align:center">600 #6b6b6b</div></div>
    <div style="flex:1"><div style="height:28px;border-radius:8px;background:#B8A99A"></div><div style="font-family:ui-monospace;font-size:11px;margin-top:6px;text-align:center">300 #B8A99A</div></div>
    <div style="flex:1"><div style="height:20px;border-radius:8px;background:#E8E0D5;border:1px solid #D4C4B0"></div><div style="font-family:ui-monospace;font-size:11px;margin-top:6px;text-align:center">100 #E8E0D5</div></div>
  </div>
</div>`,
      css: `:root{
  --ink-900: #2A2A2A; --ink-600: #6b6b6b;
  --ink-300: #B8A99A; --ink-100: #E8E0D5;
  --ink-0: #FFFFFF;
}`,
      props: ['ink', 'contrast', 'muted'],
      tokens: [
        { name: '--ink-900', value: '#2A2A2A', usage: 'headings' },
        { name: '--ink-600', value: '#6b6b6b', usage: 'secondary text' },
        { name: '--ink-100', value: '#E8E0D5', usage: 'hairline borders' },
      ],
      useCases: ['Text hierarchy without hue', 'Disabled and placeholder states'],
    },
    {
      id: `${bookId}-spacing-4`,
      name: 'Spacing 4px Base',
      style: 'minimal',
      description: 'Dense UI — 4px steps for toolbars and data-dense layouts.',
      html: `<div style="display:flex;gap:8px;align-items:end;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <div style="text-align:center"><div style="width:32px;height:4px;background:#2A2A2A;border-radius:2px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">4</div></div>
  <div style="text-align:center"><div style="width:32px;height:8px;background:#C17C60;border-radius:2px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">8</div></div>
  <div style="text-align:center"><div style="width:32px;height:12px;background:#2A2A2A;border-radius:2px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">12</div></div>
  <div style="text-align:center"><div style="width:32px;height:16px;background:#2A2A2A;border-radius:2px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">16</div></div>
  <div style="text-align:center"><div style="width:32px;height:24px;background:#8A9A8B;border-radius:2px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">24</div></div>
  <div style="text-align:center"><div style="width:32px;height:32px;background:#2A2A2A;border-radius:4px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">32</div></div>
</div>`,
      css: `:root{ --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px;}
.dense{ padding: var(--space-2) var(--space-3); gap: var(--space-2); }`,
      props: ['scale', 'density'],
      tokens: [
        { name: '--space-1', value: '4px', usage: 'micro gaps' },
        { name: '--space-4', value: '16px', usage: 'card padding in dense UI' },
        { name: '--space-8', value: '32px', usage: 'section gaps' },
      ],
      useCases: ['Toolbar groups and tables', 'Dense form layouts'],
    },
    {
      id: `${bookId}-spacing-8`,
      name: 'Spacing 8px Base',
      style: 'editorial',
      description: 'Airy editorial rhythm — 8px steps for breathing room.',
      html: `<div style="display:flex;gap:12px;align-items:end;padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px">
  <div style="text-align:center"><div style="width:36px;height:8px;background:#2A2A2A;border-radius:3px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">8</div></div>
  <div style="text-align:center"><div style="width:36px;height:16px;background:#C17C60;border-radius:3px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">16</div></div>
  <div style="text-align:center"><div style="width:36px;height:24px;background:#2A2A2A;border-radius:3px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">24</div></div>
  <div style="text-align:center"><div style="width:36px;height:32px;background:#2A2A2A;border-radius:4px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">32</div></div>
  <div style="text-align:center"><div style="width:36px;height:48px;background:#8A9A8B;border-radius:4px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">48</div></div>
  <div style="text-align:center"><div style="width:36px;height:64px;background:#2A2A2A;border-radius:6px"></div><div style="font-family:ui-monospace;font-size:10px;margin-top:6px">64</div></div>
</div>`,
      css: `:root{ --s-1: 8px; --s-2: 16px; --s-3: 24px; --s-4: 32px; --s-6: 48px; --s-8: 64px;}
.airy{ padding: var(--s-4); gap: var(--s-3); margin-block: var(--s-6); }`,
      props: ['scale', 'density'],
      tokens: [
        { name: '--s-2', value: '16px', usage: 'text block spacing' },
        { name: '--s-4', value: '32px', usage: 'card padding editorial' },
        { name: '--s-8', value: '64px', usage: 'section breathing room' },
      ],
      useCases: ['Marketing and editorial pages', 'Feature cards with generous padding'],
    },
    {
      id: `${bookId}-radius-soft`,
      name: 'Radius Soft',
      style: 'minimal',
      description: 'Japandi soft — 8, 12, 16 with 20–24 for hero.',
      html: `<div style="display:flex;gap:12px;align-items:center;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <div style="width:64px;height:64px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:8px;display:grid;place-items:center;font-family:ui-monospace;font-size:12px">8</div>
  <div style="width:72px;height:72px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;display:grid;place-items:center;font-family:ui-monospace;font-size:12px">12</div>
  <div style="width:80px;height:80px;background:#2A2A2A;color:#fff;border-radius:16px;display:grid;place-items:center;font-family:ui-monospace;font-size:12px">16</div>
  <div style="width:96px;height:64px;background:#C17C60;color:#fff;border-radius:20px;display:grid;place-items:center;font-family:ui-monospace;font-size:12px">20</div>
</div>`,
      css: `:root{ --r-sm: 8px; --r-md: 12px; --r-lg: 16px; --r-xl: 20px; --r-2xl: 24px;}
.card{ border-radius: var(--r-lg); }
.hero{ border-radius: var(--r-2xl); }`,
      props: ['radius', 'variant'],
      tokens: [
        { name: '--r-md', value: '12px', usage: 'buttons and inputs' },
        { name: '--r-lg', value: '16px', usage: 'cards' },
        { name: '--r-2xl', value: '24px', usage: 'hero and modals' },
      ],
      useCases: ['Cards and buttons', 'Modals and hero wells'],
    },
    {
      id: `${bookId}-radius-pill-sharp`,
      name: 'Pill Sharp Mix',
      style: 'editorial',
      description: 'Pill for actions, 4px sharp for tags and editorial kinks.',
      html: `<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:16px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px">
  <div style="padding:10px 18px;background:#2A2A2A;color:#fff;border-radius:999px;font-size:13px;font-weight:600">pill 999</div>
  <div style="padding:8px 12px;background:#fff;border:1px solid #2A2A2A;border-radius:4px;font-family:ui-monospace;font-size:12px">sharp 4</div>
  <div style="padding:8px 12px;background:#fff;border:1px solid #E8E0D5;border-radius:0 12px 0 12px;font-size:12px">notch 0/12</div>
  <div style="padding:8px 14px;background:#C17C60;color:#fff;border-radius:8px 999px 999px 8px;font-size:12px">pill→8</div>
</div>`,
      css: `.pill{ border-radius: 999px; }
.sharp{ border-radius: 4px; }
.notch{ border-radius: 0 12px 0 12px; }
.mixed{ border-radius: 8px 999px 999px 8px; }`,
      props: ['radius', 'shape'],
      tokens: [
        { name: '--r-pill', value: '999px', usage: 'actions and chips' },
        { name: '--r-sharp', value: '4px', usage: 'tags and kbd' },
        { name: '--r-notch', value: '0 12px 0 12px', usage: 'editorial flourish' },
      ],
      useCases: ['Pill buttons and filter chips', 'Sharp tags that contrast soft cards'],
    },
    {
      id: `${bookId}-shadow-soft-diffuse`,
      name: 'Soft Diffuse',
      style: 'minimal',
      description: 'Breathy shadow — 0 8 24 and 0 16 48 for lift without harshness.',
      html: `<div style="display:flex;gap:20px;padding:24px;background:#F9F6F0;border-radius:16px">
  <div style="width:110px;height:76px;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(42,42,42,.06),0 8px 24px rgba(42,42,42,.06);display:grid;place-items:center;font-size:11px;font-family:ui-monospace">8/24</div>
  <div style="width:110px;height:76px;background:#fff;border-radius:12px;box-shadow:0 4px 12px rgba(42,42,42,.08),0 16px 48px rgba(42,42,42,.08);display:grid;place-items:center;font-size:11px;font-family:ui-monospace">16/48</div>
  <div style="width:110px;height:76px;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.06),0 12px 32px rgba(42,42,42,.1);display:grid;place-items:center;font-size:11px;font-family:ui-monospace">1/32</div>
</div>`,
      css: `:root{
  --shadow-sm: 0 2px 8px rgba(42,42,42,.06), 0 8px 24px rgba(42,42,42,.06);
  --shadow-md: 0 4px 12px rgba(42,42,42,.08), 0 16px 48px rgba(42,42,42,.08);
  --shadow-lg: 0 12px 32px rgba(42,42,42,.10);
}`,
      props: ['elevation', 'blur'],
      tokens: [
        { name: '--shadow-sm', value: '0 2px 8px / 0 8px 24px', usage: 'cards at rest' },
        { name: '--shadow-md', value: '0 4px 12px / 0 16px 48px', usage: 'hover lift' },
        { name: '--shadow-lg', value: '0 12px 32px', usage: 'modals' },
      ],
      useCases: ['Card rest and hover', 'Dropdowns and popovers'],
    },
    {
      id: `${bookId}-shadow-crisp-brutalist`,
      name: 'Crisp Brutalist',
      style: 'brutalist',
      description: 'Hard offset shadows — 4px and 8px solid ink.',
      html: `<div style="display:flex;gap:18px;padding:22px;background:#F5F1EB;border-radius:12px">
  <div style="width:108px;height:72px;background:#fff;border:2px solid #2A2A2A;box-shadow:4px 4px 0 #2A2A2A;border-radius:4px;display:grid;place-items:center;font-family:ui-monospace;font-size:11px;font-weight:700">4px #2A2A2A</div>
  <div style="width:108px;height:72px;background:#C17C60;color:#fff;border:2px solid #2A2A2A;box-shadow:8px 8px 0 #2A2A2A;border-radius:6px;display:grid;place-items:center;font-family:ui-monospace;font-size:11px;font-weight:700">8px offset</div>
  <div style="width:108px;height:72px;background:#fff;border:2px solid #2A2A2A;box-shadow:6px 6px 0 #1E2022, 0 0 0 2px #fff inset;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700">double</div>
</div>`,
      css: `.brutal-sm{ border:2px solid #2A2A2A; box-shadow: 4px 4px 0 #2A2A2A; }
.brutal-md{ border:2px solid #2A2A2A; box-shadow: 8px 8px 0 #2A2A2A; }
.brutal-clay{ box-shadow: 6px 6px 0 #1E2022; }`,
      props: ['offset', 'ink'],
      tokens: [
        { name: '--brutal-4', value: '4px 4px 0 #2A2A2A', usage: 'small brutalist cards' },
        { name: '--brutal-8', value: '8px 8px 0 #2A2A2A', usage: 'CTA and hero' },
        { name: '--brutal-border', value: '2px solid #2A2A2A', usage: 'hard edge' },
      ],
      useCases: ['Brutalist CTA buttons', 'Feature callouts that punch'],
    },
    {
      id: `${bookId}-shadow-layered-depth`,
      name: 'Layered Depth',
      style: 'clay',
      description: 'Stacked shadows for inflated clay and pressed depth.',
      html: `<div style="display:flex;gap:18px;padding:22px;background:#F9F6F0;border-radius:14px">
  <div style="width:112px;height:78px;background:#fff;border-radius:16px;box-shadow:0 1px 1px rgba(0,0,0,.05),0 6px 12px rgba(0,0,0,.06),0 24px 36px rgba(42,42,42,.08);display:grid;place-items:center;font-family:ui-monospace;font-size:11px">clay lift</div>
  <div style="width:112px;height:78px;background:#fff;border-radius:16px;box-shadow:inset 0 1px 2px rgba(255,255,255,.8),inset 0 -6px 12px rgba(0,0,0,.06),0 10px 24px rgba(42,42,42,.12);display:grid;place-items:center;font-family:ui-monospace;font-size:11px">pressed</div>
  <div style="width:112px;height:78px;background:#F5F1EB;border-radius:16px;box-shadow:0 0 0 1px #E8E0D5 inset,0 2px 8px rgba(0,0,0,.06),0 16px 32px rgba(0,0,0,.08);display:grid;place-items:center;font-family:ui-monospace;font-size:11px">inset+lift</div>
</div>`,
      css: `.clay-lift{
  box-shadow: 0 1px 1px rgba(0,0,0,.05),
              0 6px 12px rgba(0,0,0,.06),
              0 24px 36px rgba(42,42,42,.08);
}
.clay-pressed{
  box-shadow: inset 0 1px 2px #fff, inset 0 -6px 12px rgba(0,0,0,.06);
}`,
      props: ['depth', 'inset'],
      tokens: [
        { name: '--clay-shadow', value: '0 6px 12px / 0 24px 36px', usage: 'inflated cards' },
        { name: '--pressed-shadow', value: 'inset 0 -6px 12px rgba(0,0,0,.06)', usage: 'pressed buttons' },
        { name: '--inset-ring', value: '0 0 0 1px #E8E0D5 inset', usage: 'subtle inner stroke' },
      ],
      useCases: ['Clay cards and FABs', 'Pressed toggle states'],
    },
    {
      id: `${bookId}-motion-spring`,
      name: 'Spring Motion',
      style: 'playful',
      description: 'Poppy spring for playful UI — 450ms, overshoot 1.1.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;display:flex;gap:12px;align-items:center">
  <div style="width:56px;height:56px;border-radius:14px;background:#2A2A2A;color:#fff;display:grid;place-items:center;animation:found-spring 1.2s cubic-bezier(.34,1.56,.64,1) infinite alternate">↗</div>
  <div><div style="font-weight:700;font-size:14px">spring(450, overshoot .1)</div><div style="font-family:ui-monospace;font-size:11px;opacity:.7;margin-top:4px">cubic-bezier(.34,1.56,.64,1) • 450ms</div><div style="margin-top:8px;height:6px;width:140px;background:#F5F1EB;border-radius:99px;overflow:hidden"><div style="height:100%;width:72%;background:#C17C60;border-radius:99px;animation:found-w 1.2s ease-in-out infinite alternate"></div></div></div>
  <style>@keyframes found-spring{0%{transform:scale(.92) translateY(2px)}100%{transform:scale(1.06) translateY(-2px)}}@keyframes found-w{0%{width:28%}100%{width:82%}}</style>
</div>`,
      css: `:root{
  --ease-spring: cubic-bezier(.34,1.56,.64,1);
  --dur-spring: 450ms;
}
.spring{ transition: transform var(--dur-spring) var(--ease-spring); }`,
      props: ['duration', 'easing', 'overshoot'],
      tokens: [
        { name: '--ease-spring', value: 'cubic-bezier(.34,1.56,.64,1)', usage: 'playful pop' },
        { name: '--dur-spring', value: '450ms', usage: 'spring duration' },
        { name: '--spring-scale', value: '1.04', usage: 'hover scale with spring' },
      ],
      useCases: ['Playful buttons and toggles', 'Card entrance with overshoot'],
    },
    {
      id: `${bookId}-motion-ease-out`,
      name: 'Ease Out',
      style: 'minimal',
      description: 'Japandi default — 220ms ease-out for calm, confident motion.',
      html: `<div style="display:flex;gap:14px;align-items:center;padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px">
  <div style="flex:1">
    <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.6">DEFAULT</div>
    <div style="font-weight:700;margin-top:4px">ease-out 220ms</div>
    <div style="margin-top:10px;display:flex;gap:6px">
      <div style="height:8px;flex:1;background:#2A2A2A;border-radius:99px"></div>
      <div style="height:8px;flex:.6;background:#B8A99A;border-radius:99px"></div>
      <div style="height:8px;flex:.3;background:#E8E0D5;border-radius:99px"></div>
    </div>
  </div>
  <div style="width:88px;height:56px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;display:grid;place-items:center;font-family:ui-monospace;font-size:11px;transition:all .22s ease-out">hover →</div>
</div>`,
      css: `:root{
  --ease-default: cubic-bezier(.16,1,.3,1);
  --dur-default: 220ms;
  --dur-slow: 320ms;
}
.smooth{ transition: all var(--dur-default) var(--ease-default); }`,
      props: ['duration', 'easing'],
      tokens: [
        { name: '--ease-default', value: 'cubic-bezier(.16,1,.3,1)', usage: 'calm ease-out' },
        { name: '--dur-default', value: '220ms', usage: 'default motion' },
        { name: '--dur-slow', value: '320ms', usage: 'modal and sheet' },
      ],
      useCases: ['Hover and focus transitions', 'Dropdowns and tooltips'],
    },
    {
      id: `${bookId}-motion-snappy`,
      name: 'Snappy',
      style: 'corporate',
      description: 'Snappy 140ms for keyboard, switches, and dense tools.',
      html: `<div style="display:flex;gap:12px;align-items:center;padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <div style="display:flex;gap:8px">
    <div style="width:44px;height:28px;background:#2A2A2A;border-radius:999px;position:relative"><div style="position:absolute;top:3px;left:18px;width:22px;height:22px;background:#fff;border-radius:999px;transition:all .14s cubic-bezier(.4,0,.2,1)"></div></div>
    <div style="width:44px;height:28px;background:#E8E0D5;border-radius:999px;position:relative"><div style="position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:999px;box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div>
  </div>
  <div><div style="font-weight:700;font-size:13px">140ms • linear(ish)</div><div style="font-family:ui-monospace;font-size:11px;opacity:.7;margin-top:3px">cubic-bezier(.4,0,.2,1) — no overshoot</div></div>
  <div style="margin-left:auto;display:flex;gap:6px"><kbd style="padding:4px 8px;border:1px solid #E8E0D5;border-bottom-width:2px;border-radius:6px;font-family:ui-monospace;font-size:11px;background:#F9F6F0">Tab</kbd><kbd style="padding:4px 8px;border:1px solid #2A2A2A;border-bottom-width:2px;border-radius:6px;font-family:ui-monospace;font-size:11px;background:#2A2A2A;color:#fff">↩</kbd></div>
</div>`,
      css: `:root{
  --ease-snappy: cubic-bezier(.4,0,.2,1);
  --dur-fast: 140ms;
}
.snappy{ transition: all var(--dur-fast) var(--ease-snappy); }
.kbd:active{ transform: translateY(1px); }`,
      props: ['duration', 'easing', 'instant'],
      tokens: [
        { name: '--dur-fast', value: '140ms', usage: 'switches and checkboxes' },
        { name: '--ease-snappy', value: 'cubic-bezier(.4,0,.2,1)', usage: 'tool-like snap' },
        { name: '--focus-ring', value: '0 0 0 3px #C17C60/30', usage: 'keyboard focus' },
      ],
      useCases: ['Toggle switches and checkboxes', 'Keyboard navigation feedback'],
    },
  ],
}
