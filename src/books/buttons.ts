import type { Book } from '../types.ts'

const bookId = 'buttons'

export const book: Book = {
  id: bookId,
  title: 'Buttons',
  volume: 2,
  description: 'Every button dream — pill, brutalist, glass, clay, neon, and everything between.',
  color: '#C17C60',
  accent: '#1E2022',
  intro: 'Buttons are promises. 25 ways to keep them — from quiet minimal pills to magnetic hover, from 8-bit retro to future neon. All real <button>, all keyboardable, all Japandi v4 at heart.',
  plates: [
    {
      id: `${bookId}-minimal-pill`,
      name: 'Minimal Pill',
      style: 'minimal',
      description: 'The default — soft pill, 44px, ink on paper with terracotta hover.',
      html: `<div style="display:flex;gap:12px;align-items:center;padding:20px;background:#F9F6F0;border-radius:12px;flex-wrap:wrap">
  <button style="padding:12px 22px;border-radius:999px;background:#2A2A2A;color:#F9F6F0;border:0;font-weight:600;font-size:14px;letter-spacing:-.01em;cursor:pointer;transition:all .22s cubic-bezier(.16,1,.3,1)">Continue</button>
  <button style="padding:12px 22px;border-radius:999px;background:#fff;color:#2A2A2A;border:1px solid #E8E0D5;font-weight:600;font-size:14px;cursor:pointer">Cancel</button>
  <button style="padding:12px 22px;border-radius:999px;background:#C17C60;color:#fff;border:0;font-weight:600;font-size:14px;cursor:pointer">Primary</button>
</div>`,
      css: `.btn-pill{
  padding: 12px 22px; border-radius: 999px;
  background: var(--ink); color: var(--paper);
  font-weight: 600; font-size: 14px;
  transition: all 220ms cubic-bezier(.16,1,.3,1);
}
.btn-pill:hover{ transform: translateY(-1px); background: #1E2022; }`,
      props: ['variant', 'size', 'disabled'],
      tokens: [
        { name: '--btn-radius', value: '999px', usage: 'pill shape' },
        { name: '--btn-pad', value: '12px 22px', usage: 'comfortable tap target' },
        { name: '--ink', value: '#2A2A2A', usage: 'primary fill' },
      ],
      useCases: ['Primary CTAs in cards', 'Modal confirm/cancel'],
    },
    {
      id: `${bookId}-editorial-outline`,
      name: 'Editorial Outline',
      style: 'editorial',
      description: 'Hairline ink outline, serif label, editorial hover fill.',
      html: `<div style="display:flex;gap:12px;padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;flex-wrap:wrap">
  <button style="padding:11px 20px;border:1.5px solid #2A2A2A;background:transparent;color:#2A2A2A;border-radius:10px;font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:15px;cursor:pointer;transition:all .22s">Read Essay →</button>
  <button style="padding:11px 20px;border:1.5px solid #2A2A2A;background:#2A2A2A;color:#F9F6F0;border-radius:10px;font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:15px;cursor:pointer">Read Essay →</button>
</div>`,
      css: `.btn-editorial{
  border: 1.5px solid var(--ink); background: transparent;
  font-family: "Fraunces", Georgia, serif; font-weight: 700;
  border-radius: 10px; padding: 11px 20px;
  transition: all 220ms ease-out;
}
.btn-editorial:hover{ background: var(--ink); color: var(--paper); }`,
      props: ['variant', 'filled'],
      tokens: [
        { name: '--hairline', value: '1.5px solid #2A2A2A', usage: 'editorial edge' },
        { name: '--font-serif', value: '"Fraunces", serif', usage: 'label type' },
        { name: '--r-editorial', value: '10px', usage: 'soft but sharp' },
      ],
      useCases: ['Article CTAs', 'Feature links with weight'],
    },
    {
      id: `${bookId}-brutalist-offset`,
      name: 'Brutalist Offset',
      style: 'brutalist',
      description: 'Hard 2px border, 6px offset shadow that slams on press.',
      html: `<div style="display:flex;gap:16px;padding:22px;background:#F5F1EB;border-radius:10px">
  <button style="padding:12px 20px;background:#fff;border:2px solid #2A2A2A;border-radius:6px;box-shadow:6px 6px 0 #2A2A2A;font-weight:800;font-size:14px;letter-spacing:.02em;text-transform:uppercase;cursor:pointer;transition:all .14s cubic-bezier(.4,0,.2,1)">Ship It</button>
  <button style="padding:12px 20px;background:#C17C60;color:#fff;border:2px solid #2A2A2A;border-radius:6px;box-shadow:6px 6px 0 #2A2A2A;font-weight:800;font-size:14px;letter-spacing:.02em;text-transform:uppercase;cursor:pointer">Ship It</button>
</div>`,
      css: `.btn-brutal{
  border: 2px solid #2A2A2A; border-radius: 6px;
  box-shadow: 6px 6px 0 #2A2A2A;
  font-weight: 800; text-transform: uppercase;
  transition: all 140ms cubic-bezier(.4,0,.2,1);
}
.btn-brutal:active{ transform: translate(3px,3px); box-shadow: 3px 3px 0 #2A2A2A; }`,
      props: ['offset', 'ink', 'uppercase'],
      tokens: [
        { name: '--brutal-shadow', value: '6px 6px 0 #2A2A2A', usage: 'offset depth' },
        { name: '--brutal-border', value: '2px solid #2A2A2A', usage: 'hard edge' },
        { name: '--brutal-active', value: 'translate(3px,3px)', usage: 'press slam' },
      ],
      useCases: ['Launch CTAs that punch', 'Marketing hero buttons'],
    },
    {
      id: `${bookId}-glass-morphism`,
      name: 'Glass Morphism',
      style: 'glass',
      description: 'Frosted glass button for void and imagery.',
      html: `<div style="padding:22px;border-radius:14px;background:#1E2022;position:relative;overflow:hidden;display:flex;gap:12px">
  <div style="position:absolute;inset:-20px;background:radial-gradient(400px 200px at 30% 20%,#C17C60aa,transparent),radial-gradient(400px 200px at 80% 80%,#8A9A8B88,transparent)"></div>
  <button style="position:relative;padding:12px 20px;border-radius:999px;background:rgba(255,255,255,.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);color:#fff;font-weight:600;font-size:14px;cursor:pointer">Glass Action</button>
  <button style="position:relative;padding:12px 20px;border-radius:999px;background:#fff;color:#1E2022;border:0;font-weight:700;font-size:14px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.2)">Solid on Void</button>
</div>`,
      css: `.btn-glass{
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px; color: #fff;
}
.btn-glass:hover{ background: rgba(255,255,255,0.18); }`,
      props: ['blur', 'variant', 'void'],
      tokens: [
        { name: '--glass-bg', value: 'rgba(255,255,255,0.12)', usage: 'frosted fill' },
        { name: '--glass-blur', value: 'blur(10px)', usage: 'glass effect' },
        { name: '--void', value: '#1E2022', usage: 'dark canvas' },
      ],
      useCases: ['Buttons over images/video', 'Dark mode CTAs'],
    },
    {
      id: `${bookId}-clay-pressed`,
      name: 'Clay Pressed',
      style: 'clay',
      description: 'Inflated clay that presses in on active — soft and tactile.',
      html: `<div style="display:flex;gap:12px;padding:22px;background:#F9F6F0;border-radius:14px">
  <button style="padding:14px 22px;border-radius:16px;background:#fff;border:0;box-shadow:0 1px 1px rgba(0,0,0,.05),0 6px 16px rgba(0,0,0,.08),0 0 0 1px #E8E0D5 inset;font-weight:700;font-size:14px;color:#2A2A2A;cursor:pointer;transition:all .22s">Inflated</button>
  <button style="padding:14px 22px;border-radius:16px;background:#F5F1EB;border:0;box-shadow:inset 0 1px 2px rgba(255,255,255,.9),inset 0 -6px 12px rgba(0,0,0,.08),0 0 0 1px #D4C4B0 inset;font-weight:700;font-size:14px;color:#2A2A2A;cursor:pointer">Pressed</button>
</div>`,
      css: `.btn-clay{
  background: #fff; border-radius: 16px;
  box-shadow: 0 1px 1px rgba(0,0,0,.05),
              0 6px 16px rgba(0,0,0,.08),
              inset 0 0 0 1px #E8E0D5;
}
.btn-clay:active{
  box-shadow: inset 0 -6px 12px rgba(0,0,0,.08);
  transform: scale(.98);
}`,
      props: ['depth', 'pressed'],
      tokens: [
        { name: '--clay-lift', value: '0 6px 16px rgba(0,0,0,.08)', usage: 'inflated lift' },
        { name: '--clay-inset', value: 'inset 0 -6px 12px rgba(0,0,0,.08)', usage: 'pressed state' },
        { name: '--clay-radius', value: '16px', usage: 'soft clay corner' },
      ],
      useCases: ['Tactile primary actions', 'Kids/education UI'],
    },
    {
      id: `${bookId}-corporate-solid`,
      name: 'Corporate Solid',
      style: 'corporate',
      description: 'Dense, trustable, 4px radius — for dashboards and tools.',
      html: `<div style="display:flex;gap:10px;padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:10px;align-items:center">
  <button style="padding:10px 16px;background:#2A2A2A;color:#fff;border:0;border-radius:6px;font-weight:600;font-size:13px;letter-spacing:-.01em;cursor:pointer">Save Changes</button>
  <button style="padding:10px 16px;background:#fff;color:#2A2A2A;border:1px solid #D4C4B0;border-radius:6px;font-weight:600;font-size:13px;cursor:pointer">Cancel</button>
  <span style="margin-left:8px;font-size:12px;color:#6b6b6b;font-family:ui-monospace">ⓘ auto-saves in 2s</span>
</div>`,
      css: `.btn-corp{
  padding: 10px 16px; border-radius: 6px;
  background: #2A2A2A; color: #fff;
  font-weight: 600; font-size: 13px;
  border: 0; letter-spacing: -0.01em;
}`,
      props: ['variant', 'size', 'loading'],
      tokens: [
        { name: '--corp-radius', value: '6px', usage: 'tight professional' },
        { name: '--corp-pad', value: '10px 16px', usage: 'dense toolbar' },
        { name: '--corp-ink', value: '#2A2A2A', usage: 'trust ink' },
      ],
      useCases: ['Admin save/cancel', 'Data table actions'],
    },
    {
      id: `${bookId}-playful-bouncy`,
      name: 'Playful Bouncy',
      style: 'playful',
      description: 'Spring pop, 20px radius, emoji-friendly and joyful.',
      html: `<div style="display:flex;gap:12px;padding:22px;background:#F9F6F0;border-radius:14px;align-items:center">
  <button style="padding:12px 20px;background:#C17C60;color:#fff;border:0;border-radius:20px;font-weight:800;font-size:15px;cursor:pointer;transform:rotate(-1deg);box-shadow:0 6px 16px rgba(193,124,96,.35);transition:transform .45s cubic-bezier(.34,1.56,.64,1)">✨ Make Magic</button>
  <button style="padding:12px 20px;background:#fff;border:2px solid #E8E0D5;border-radius:20px;font-weight:700;font-size:14px;cursor:pointer;transform:rotate(1deg)">🎨 Paint</button>
</div>`,
      css: `.btn-bounce{
  border-radius: 20px; background: #C17C60; color: #fff;
  font-weight: 800; transform: rotate(-1deg);
  transition: transform 450ms cubic-bezier(.34,1.56,.64,1);
}
.btn-bounce:hover{ transform: rotate(0deg) scale(1.04); }`,
      props: ['rotate', 'spring'],
      tokens: [
        { name: '--bounce-radius', value: '20px', usage: 'playful soft' },
        { name: '--ease-spring', value: 'cubic-bezier(.34,1.56,.64,1)', usage: 'bouncy pop' },
        { name: '--bounce-shadow', value: '0 6px 16px rgba(193,124,96,.35)', usage: 'joyful lift' },
      ],
      useCases: ['Kids products and who-e.com', 'Empty-state CTAs'],
    },
    {
      id: `${bookId}-retro-8bit`,
      name: 'Retro 8bit',
      style: 'retro',
      description: 'Pixel corners, hard shadow, press steps down 2px.',
      html: `<div style="display:flex;gap:14px;padding:20px;background:#F5F1EB;border-radius:8px;image-rendering:pixelated">
  <button style="padding:10px 16px;background:#fff;border:3px solid #2A2A2A;border-radius:0;box-shadow:4px 4px 0 #2A2A2A;font-family:ui-monospace;font-weight:800;font-size:12px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer">Start_</button>
  <button style="padding:10px 16px;background:#2A2A2A;color:#F9F6F0;border:3px solid #2A2A2A;border-radius:0;box-shadow:4px 4px 0 #C17C60;font-family:ui-monospace;font-weight:800;font-size:12px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer">Continue</button>
</div>`,
      css: `.btn-retro{
  border: 3px solid #2A2A2A; border-radius: 0;
  box-shadow: 4px 4px 0 #2A2A2A;
  font-family: ui-monospace; font-weight: 800;
  text-transform: uppercase; letter-spacing: .06em;
}
.btn-retro:active{ transform: translate(2px,2px); box-shadow: 2px 2px 0 #2A2A2A; }`,
      props: ['pixel', 'pressed'],
      tokens: [
        { name: '--retro-border', value: '3px solid #2A2A2A', usage: 'pixel edge' },
        { name: '--retro-shadow', value: '4px 4px 0 #2A2A2A', usage: 'hard pixel shadow' },
        { name: '--retro-press', value: 'translate(2px,2px)', usage: 'step down' },
      ],
      useCases: ['Game UI and who-e', 'Easter egg buttons'],
    },
    {
      id: `${bookId}-future-neon`,
      name: 'Future Neon',
      style: 'future',
      description: 'Void base, neon rim, glow on hover — cyber editorial.',
      html: `<div style="display:flex;gap:12px;padding:22px;background:#1E2022;border-radius:14px">
  <button style="padding:11px 18px;background:#1E2022;color:#F9F6F0;border:1px solid #C17C60;border-radius:999px;font-weight:700;font-size:13px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;box-shadow:0 0 0 1px #C17C6033,0 0 20px #C17C6044,0 0 0 1px #fff0 inset;transition:all .22s">◐ NEON</button>
  <button style="padding:11px 18px;background:#F9F6F0;color:#1E2022;border:0;border-radius:999px;font-weight:800;font-size:13px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;box-shadow:0 0 24px rgba(249,246,240,.4)">BEAM</button>
</div>`,
      css: `.btn-neon{
  background: #1E2022; color: #F9F6F0;
  border: 1px solid #C17C60; border-radius: 999px;
  box-shadow: 0 0 0 1px #C17C6033, 0 0 20px #C17C6044;
  text-transform: uppercase; letter-spacing: .04em;
}
.btn-neon:hover{ box-shadow: 0 0 0 1px #C17C60, 0 0 32px #C17C6088; }`,
      props: ['glow', 'void'],
      tokens: [
        { name: '--neon', value: '#C17C60', usage: 'rim and glow' },
        { name: '--neon-glow', value: '0 0 20px #C17C6044', usage: 'outer glow' },
        { name: '--void', value: '#1E2022', usage: 'future base' },
      ],
      useCases: ['Feature launch badges', 'Dark hero CTAs'],
    },
    {
      id: `${bookId}-neumorphic`,
      name: 'Neumorphic',
      style: 'neumorphic',
      description: 'Soft extruded paper with inset press — tactile neumorphism.',
      html: `<div style="display:flex;gap:12px;padding:22px;background:#F5F1EB;border-radius:14px">
  <button style="padding:12px 20px;background:#F5F1EB;border:0;border-radius:14px;box-shadow:6px 6px 12px #D4C4B0,-6px -6px 12px #ffffff;font-weight:700;font-size:13px;color:#2A2A2A;cursor:pointer">Extruded</button>
  <button style="padding:12px 20px;background:#F5F1EB;border:0;border-radius:14px;box-shadow:inset 4px 4px 8px #D4C4B0,inset -4px -4px 8px #ffffff;font-weight:700;font-size:13px;color:#6b6b6b;cursor:pointer">Pressed</button>
</div>`,
      css: `.btn-neu{
  background: #F5F1EB; border-radius: 14px;
  box-shadow: 6px 6px 12px #D4C4B0, -6px -6px 12px #ffffff;
  color: #2A2A2A; font-weight: 700;
}
.btn-neu:active{
  box-shadow: inset 4px 4px 8px #D4C4B0, inset -4px -4px 8px #fff;
}`,
      props: ['depth', 'pressed'],
      tokens: [
        { name: '--neu-light', value: '#ffffff', usage: 'highlight' },
        { name: '--neu-dark', value: '#D4C4B0', usage: 'shadow' },
        { name: '--neu-bg', value: '#F5F1EB', usage: 'paper' },
      ],
      useCases: ['Soft settings UI', 'Calculator-style tools'],
    },
    {
      id: `${bookId}-icon-only`,
      name: 'Icon Only',
      style: 'minimal',
      description: 'Square icon buttons — 40px, accessible labels, tooltip-ready.',
      html: `<div style="display:flex;gap:10px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;align-items:center">
  <button aria-label="Search" style="width:40px;height:40px;border-radius:10px;background:#2A2A2A;color:#fff;border:0;display:grid;place-items:center;cursor:pointer">⌕</button>
  <button aria-label="Favorite" style="width:40px;height:40px;border-radius:10px;background:#fff;border:1px solid #E8E0D5;display:grid;place-items:center;cursor:pointer">♡</button>
  <button aria-label="More" style="width:40px;height:40px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;display:grid;place-items:center;cursor:pointer">⋯</button>
  <button aria-label="Close" style="width:36px;height:36px;border-radius:999px;background:#1E2022;color:#fff;border:0;display:grid;place-items:center;cursor:pointer;font-size:14px">✕</button>
</div>`,
      css: `.btn-icon{
  width: 40px; height: 40px; border-radius: 10px;
  display: grid; place-items: center;
  background: var(--ink); color: #fff; border: 0;
}
.btn-icon--ghost{ background: #fff; border: 1px solid var(--stone); }`,
      props: ['size', 'shape', 'aria-label'],
      tokens: [
        { name: '--icon-size', value: '40px', usage: 'tap target' },
        { name: '--icon-radius', value: '10px', usage: 'soft square' },
        { name: '--icon-pill', value: '999px', usage: 'round variant' },
      ],
      useCases: ['Toolbars and cards', 'Close and overflow actions'],
    },
    {
      id: `${bookId}-loading`,
      name: 'Loading',
      style: 'minimal',
      description: 'Button that holds — spinner, dots, and progress built in.',
      html: `<div style="display:flex;gap:12px;padding:20px;background:#F9F6F0;border-radius:12px;align-items:center;flex-wrap:wrap">
  <button disabled style="padding:12px 18px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:14px;display:inline-flex;gap:10px;align-items:center;opacity:.9;cursor:wait">
    <span style="width:14px;height:14px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:999px;display:inline-block;animation:spin .8s linear infinite"></span> Saving
  </button>
  <button disabled style="padding:12px 18px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:14px;display:inline-flex;gap:8px;align-items:center;cursor:wait">
    Loading <span style="display:inline-flex;gap:3px"><span style="width:4px;height:4px;background:#2A2A2A;border-radius:999px;animation:bounce 1s infinite"></span><span style="width:4px;height:4px;background:#2A2A2A;border-radius:999px;animation:bounce 1s .15s infinite"></span><span style="width:4px;height:4px;background:#2A2A2A;border-radius:999px;animation:bounce 1s .3s infinite"></span></span>
  </button>
  <style>@keyframes spin{to{transform:rotate(360deg)}}@keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.6}40%{transform:translateY(-3px);opacity:1}}</style>
</div>`,
      css: `.btn-loading{
  display: inline-flex; gap: 10px; align-items: center;
  cursor: wait; opacity: .9;
}
.btn-loading .spin{
  width: 14px; height: 14px; border: 2px solid rgba(255,255,255,.35);
  border-top-color: #fff; border-radius: 999px; animation: spin .8s linear infinite;
}`,
      props: ['loading', 'disabled'],
      tokens: [
        { name: '--spin-size', value: '14px', usage: 'loader' },
        { name: '--spin-border', value: '2px solid rgba(255,255,255,.35)', usage: 'track' },
        { name: '--loading-opacity', value: '0.9', usage: 'disabled feel' },
      ],
      useCases: ['Form submit pending', 'Async actions with feedback'],
    },
    {
      id: `${bookId}-split`,
      name: 'Split',
      style: 'corporate',
      description: 'Primary + dropdown chevron — one promise, two paths.',
      html: `<div style="display:flex;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <div style="display:inline-flex;border-radius:8px;overflow:hidden;border:1px solid #2A2A2A">
    <button style="padding:10px 16px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:13px;cursor:pointer;border-right:1px solid #3a3a3a">Publish</button>
    <button aria-label="More publish options" style="padding:10px 10px;background:#2A2A2A;color:#fff;border:0;cursor:pointer">▾</button>
  </div>
  <div style="margin-left:12px;display:inline-flex;border-radius:999px;overflow:hidden;border:1px solid #E8E0D5">
    <button style="padding:10px 16px;background:#fff;border:0;font-weight:600;font-size:13px;cursor:pointer">Export</button>
    <button aria-label="Export options" style="padding:10px 12px;background:#F9F6F0;border:0;border-left:1px solid #E8E0D5;cursor:pointer">▾</button>
  </div>
</div>`,
      css: `.btn-split{ display: inline-flex; border-radius: 8px; overflow: hidden; border: 1px solid var(--ink); }
.btn-split > button{ padding: 10px 16px; font-weight: 600; font-size: 13px; }
.btn-split > button + button{ border-left: 1px solid rgba(255,255,255,.15); }`,
      props: ['variant', 'split'],
      tokens: [
        { name: '--split-border', value: '1px solid #2A2A2A', usage: 'unified edge' },
        { name: '--split-divider', value: '1px solid rgba(255,255,255,.15)', usage: 'inner line' },
        { name: '--split-radius', value: '8px', usage: 'container radius' },
      ],
      useCases: ['Publish with options', 'Export / download variants'],
    },
    {
      id: `${bookId}-ghost`,
      name: 'Ghost',
      style: 'minimal',
      description: 'Zero chrome until hover — calm secondary.',
      html: `<div style="display:flex;gap:10px;padding:18px;background:#F9F6F0;border-radius:12px;align-items:center">
  <button style="padding:10px 14px;background:transparent;border:0;color:#2A2A2A;font-weight:600;font-size:14px;border-radius:8px;cursor:pointer;transition:background .18s">Cancel</button>
  <button style="padding:10px 14px;background:#fff;border:0;color:#2A2A2A;font-weight:600;font-size:14px;border-radius:8px;box-shadow:0 0 0 1px #E8E0D5 inset;cursor:pointer">Ghost Hover</button>
  <span style="font-size:12px;color:#8A9A8B">ghost → hover: paper</span>
</div>`,
      css: `.btn-ghost{
  background: transparent; border: 0; color: var(--ink);
  padding: 10px 14px; border-radius: 8px; font-weight: 600;
  transition: background 180ms ease-out;
}
.btn-ghost:hover{ background: #fff; box-shadow: 0 0 0 1px var(--stone) inset; }`,
      props: ['variant', 'hover'],
      tokens: [
        { name: '--ghost-hover', value: '#fff', usage: 'hover fill' },
        { name: '--ghost-inset', value: '0 0 0 1px #E8E0D5 inset', usage: 'hover ring' },
        { name: '--ghost-pad', value: '10px 14px', usage: 'compact' },
      ],
      useCases: ['Secondary actions in toolbars', 'Table row actions'],
    },
    {
      id: `${bookId}-link`,
      name: 'Link',
      style: 'minimal',
      description: 'Looks like a link, acts like a button — with proper underline motion.',
      html: `<div style="display:flex;gap:16px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;align-items:center;flex-wrap:wrap">
  <button style="background:transparent;border:0;padding:0;color:#2A2A2A;font-weight:600;font-size:14px;cursor:pointer;text-decoration:underline;text-decoration-thickness:1.5px;text-underline-offset:4px;text-decoration-color:#D4C4B0">View details</button>
  <button style="background:transparent;border:0;padding:0;color:#C17C60;font-weight:700;font-size:14px;cursor:pointer;display:inline-flex;gap:6px;align-items:center">Explore <span style="transition:transform .18s">→</span></button>
  <button style="background:transparent;border:0;padding:2px 6px;color:#6b6b6b;font-size:13px;cursor:pointer;border-radius:6px">Dismiss</button>
</div>`,
      css: `.btn-link{
  background: transparent; border: 0; padding: 0;
  color: var(--ink); font-weight: 600;
  text-decoration: underline; text-underline-offset: 4px;
  text-decoration-thickness: 1.5px; text-decoration-color: var(--stone);
}
.btn-link:hover{ text-decoration-color: var(--ink); }`,
      props: ['underline', 'color'],
      tokens: [
        { name: '--link-offset', value: '4px', usage: 'underline offset' },
        { name: '--link-thick', value: '1.5px', usage: 'underline weight' },
        { name: '--link-stone', value: '#D4C4B0', usage: 'calm underline' },
      ],
      useCases: ['Inline actions in text', 'Tertiary dismiss'],
    },
    {
      id: `${bookId}-floating-action`,
      name: 'Floating Action',
      style: 'clay',
      description: 'Big round FAB — 56px, lifted, for primary creation.',
      html: `<div style="display:flex;gap:12px;padding:24px;background:#F9F6F0;border-radius:14px;align-items:center;justify-content:space-between">
  <div style="width:280px;height:86px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;position:relative">
    <button aria-label="New" style="position:absolute;right:12px;bottom:12px;width:56px;height:56px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;box-shadow:0 6px 16px rgba(42,42,42,.25),0 1px 3px rgba(0,0,0,.1);font-size:22px;cursor:pointer;display:grid;place-items:center">＋</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px">
    <button style="width:48px;height:48px;border-radius:999px;background:#C17C60;color:#fff;border:0;box-shadow:0 6px 16px rgba(193,124,96,.35);font-size:18px;cursor:pointer">✦</button>
    <button style="width:44px;height:44px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;box-shadow:0 4px 12px rgba(0,0,0,.08);cursor:pointer">↗</button>
  </div>
</div>`,
      css: `.btn-fab{
  width: 56px; height: 56px; border-radius: 999px;
  background: var(--ink); color: #fff; border: 0;
  box-shadow: 0 6px 16px rgba(42,42,42,.25), 0 1px 3px rgba(0,0,0,.1);
  display: grid; place-items: center; font-size: 22px;
}`,
      props: ['size', 'elevation'],
      tokens: [
        { name: '--fab-size', value: '56px', usage: 'FAB diameter' },
        { name: '--fab-shadow', value: '0 6px 16px rgba(42,42,42,.25)', usage: 'FAB lift' },
        { name: '--fab-sm', value: '44px', usage: 'small FAB' },
      ],
      useCases: ['New / create primary', 'Chat / help affordance'],
    },
    {
      id: `${bookId}-segmented`,
      name: 'Segmented',
      style: 'minimal',
      description: 'Pill group where one choice is active — for filters and modes.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <div style="display:inline-flex;padding:4px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:999px;gap:4px">
    <button style="padding:8px 14px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:13px;cursor:pointer">All</button>
    <button style="padding:8px 14px;border-radius:999px;background:transparent;border:0;font-weight:600;font-size:13px;color:#6b6b6b;cursor:pointer">Pills</button>
    <button style="padding:8px 14px;border-radius:999px;background:transparent;border:0;font-weight:600;font-size:13px;color:#6b6b6b;cursor:pointer">Cards</button>
  </div>
  <div style="margin-left:12px;display:inline-flex;padding:3px;background:#1E2022;border-radius:10px;gap:3px;vertical-align:middle">
    <button style="padding:7px 12px;border-radius:7px;background:#fff;color:#1E2022;border:0;font-weight:700;font-size:12px;cursor:pointer">Grid</button>
    <button style="padding:7px 12px;border-radius:7px;background:transparent;color:#B8A99A;border:0;font-weight:600;font-size:12px;cursor:pointer">List</button>
  </div>
</div>`,
      css: `.segmented{
  display: inline-flex; padding: 4px; gap: 4px;
  background: var(--paper); border: 1px solid var(--stone);
  border-radius: 999px;
}
.segmented button{ padding: 8px 14px; border-radius: 999px; font-weight: 600; font-size: 13px; }
.segmented button[aria-selected="true"]{ background: var(--ink); color: #fff; }`,
      props: ['value', 'onChange', 'size'],
      tokens: [
        { name: '--seg-bg', value: '#F9F6F0', usage: 'track' },
        { name: '--seg-active', value: '#2A2A2A', usage: 'active fill' },
        { name: '--seg-pad', value: '4px', usage: 'track padding' },
      ],
      useCases: ['View toggles grid/list', 'Filter pills for books'],
    },
    {
      id: `${bookId}-social`,
      name: 'Social',
      style: 'minimal',
      description: 'Brand-aware social logins — Apple, Google, X with proper contrast.',
      html: `<div style="display:flex;gap:10px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;flex-wrap:wrap">
  <button style="padding:10px 14px;border-radius:10px;background:#000;color:#fff;border:1px solid #000;font-weight:600;font-size:13px;display:inline-flex;gap:8px;align-items:center;cursor:pointer"> Continue with Apple</button>
  <button style="padding:10px 14px;border-radius:10px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:13px;display:inline-flex;gap:8px;align-items:center;cursor:pointer"><span style="width:16px;height:16px;border-radius:999px;background:conic-gradient(from 0deg,#EA4335,#FBBC05,#34A853,#4285F4,#EA4335)"></span> Continue with Google</button>
  <button style="padding:10px 14px;border-radius:10px;background:#1E2022;color:#fff;border:0;font-weight:600;font-size:13px;cursor:pointer">Continue with X</button>
</div>`,
      css: `.btn-social{
  padding: 10px 14px; border-radius: 10px;
  font-weight: 600; font-size: 13px;
  display: inline-flex; gap: 8px; align-items: center;
  border: 1px solid var(--stone);
}
.btn-social--apple{ background: #000; color: #fff; border-color: #000; }`,
      props: ['provider', 'variant'],
      tokens: [
        { name: '--apple-bg', value: '#000', usage: 'Apple button' },
        { name: '--google-border', value: '#E8E0D5', usage: 'Google outline' },
        { name: '--social-radius', value: '10px', usage: 'social shape' },
      ],
      useCases: ['Sign-in wall', 'Share actions'],
    },
    {
      id: `${bookId}-gradient-mesh`,
      name: 'Gradient Mesh',
      style: 'terracotta',
      description: 'Mesh gradient fill that shifts on hover — terracotta to moss.',
      html: `<div style="display:flex;gap:12px;padding:20px;background:#F9F6F0;border-radius:12px">
  <button style="padding:12px 20px;border-radius:999px;border:0;color:#fff;font-weight:700;font-size:14px;cursor:pointer;background:radial-gradient(120% 120% at 20% 20%,#F9F6F0 0%,#C17C60 40%,#A67B5B 70%,#8A9A8B 100%);box-shadow:0 6px 18px rgba(193,124,96,.35);transition:filter .22s">Mesh CTA</button>
  <button style="padding:12px 20px;border-radius:12px;border:0;color:#1E2022;font-weight:700;font-size:14px;cursor:pointer;background:linear-gradient(100deg,#F9F6F0,#E8E0D5,#D4C4B0);border:1px solid #E8E0D5">Stone Mesh</button>
</div>`,
      css: `.btn-mesh{
  background: radial-gradient(120% 120% at 20% 20%, #F9F6F0 0%, #C17C60 40%, #A67B5B 70%, #8A9A8B 100%);
  border-radius: 999px; color: #fff; font-weight: 700;
  box-shadow: 0 6px 18px rgba(193,124,96,.35);
  transition: filter 220ms ease-out;
}
.btn-mesh:hover{ filter: brightness(1.06) saturate(1.05); }`,
      props: ['mesh', 'hover'],
      tokens: [
        { name: '--mesh-1', value: '#C17C60', usage: 'warm core' },
        { name: '--mesh-2', value: '#A67B5B', usage: 'clay mid' },
        { name: '--mesh-3', value: '#8A9A8B', usage: 'moss edge' },
      ],
      useCases: ['Feature launch CTAs', 'Premium upgrade buttons'],
    },
    {
      id: `${bookId}-dotted`,
      name: 'Dotted',
      style: 'minimal',
      description: 'Dashed/dotted affordance for drop, add, or empty states.',
      html: `<div style="display:flex;gap:12px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <button style="padding:11px 16px;border-radius:10px;background:#fff;border:1.5px dashed #B8A99A;color:#2A2A2A;font-weight:600;font-size:13px;cursor:pointer">＋ Add Plate</button>
  <button style="padding:11px 16px;border-radius:999px;background:#F9F6F0;border:1.5px dotted #D4C4B0;color:#6b6b6b;font-weight:600;font-size:13px;cursor:pointer">＋ New Token</button>
  <button style="padding:10px 14px;border-radius:8px;background:#fff;border:1px dashed #2A2A2A;color:#2A2A2A;font-weight:700;font-size:12px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer">Drop Here</button>
</div>`,
      css: `.btn-dotted{
  background: #fff; border: 1.5px dashed #B8A99A;
  border-radius: 10px; padding: 11px 16px;
  font-weight: 600; font-size: 13px;
}
.btn-dotted:hover{ border-color: var(--ink); background: var(--paper); }`,
      props: ['dashed', 'dotted', 'label'],
      tokens: [
        { name: '--dotted-border', value: '1.5px dashed #B8A99A', usage: 'empty affordance' },
        { name: '--dotted-bg', value: '#fff', usage: 'drop zone' },
        { name: '--dotted-hover', value: '#F9F6F0', usage: 'hover paper' },
      ],
      useCases: ['Add plate/token', 'Drop zones and empty states'],
    },
    {
      id: `${bookId}-kbd-style`,
      name: 'Kbd Style',
      style: 'minimal',
      description: 'Keyboard key aesthetic — 2px bottom edge that presses.',
      html: `<div style="display:flex;gap:10px;padding:18px;background:#F5F1EB;border-radius:12px;align-items:center">
  <button style="padding:8px 12px;background:#fff;border:1px solid #D4C4B0;border-bottom-width:3px;border-radius:8px;font-family:ui-monospace;font-weight:700;font-size:12px;color:#2A2A2A;cursor:pointer;box-shadow:0 1px 0 #fff inset">⌘ K</button>
  <button style="padding:8px 12px;background:#2A2A2A;color:#F9F6F0;border:1px solid #2A2A2A;border-bottom-width:3px;border-bottom-color:#000;border-radius:8px;font-family:ui-monospace;font-weight:700;font-size:12px;cursor:pointer">↵ Enter</button>
  <button style="padding:8px 12px;background:#fff;border:1px solid #E8E0D5;border-bottom-width:3px;border-radius:8px;font-family:ui-monospace;font-size:12px;cursor:pointer">Esc</button>
</div>`,
      css: `.btn-kbd{
  background: #fff; border: 1px solid #D4C4B0;
  border-bottom-width: 3px; border-radius: 8px;
  font-family: ui-monospace; font-weight: 700; font-size: 12px;
  box-shadow: inset 0 1px 0 #fff;
}
.btn-kbd:active{ transform: translateY(1px); border-bottom-width: 1px; }`,
      props: ['kbd', 'size'],
      tokens: [
        { name: '--kbd-border', value: '1px solid #D4C4B0', usage: 'key edge' },
        { name: '--kbd-bottom', value: '3px', usage: 'press depth' },
        { name: '--kbd-radius', value: '8px', usage: 'key radius' },
      ],
      useCases: ['Command palette triggers', 'Shortcuts legend buttons'],
    },
    {
      id: `${bookId}-toggle`,
      name: 'Toggle',
      style: 'minimal',
      description: 'Button that toggles pressed state — aria-pressed, check morph.',
      html: `<div style="display:flex;gap:10px;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;align-items:center">
  <button aria-pressed="true" style="padding:9px 14px;border-radius:999px;background:#2A2A2A;color:#fff;border:1px solid #2A2A2A;font-weight:600;font-size:13px;display:inline-flex;gap:7px;align-items:center;cursor:pointer"><span style="width:14px;height:14px;border-radius:999px;background:#fff;display:grid;place-items:center;color:#2A2A2A;font-size:10px">✓</span> Following</button>
  <button aria-pressed="false" style="padding:9px 14px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:13px;color:#2A2A2A;cursor:pointer">Follow</button>
  <button aria-pressed="false" style="padding:8px 12px;border-radius:8px;background:#F9F6F0;border:1px solid #E8E0D5;font-weight:600;font-size:12px;cursor:pointer">♡ 24</button>
</div>`,
      css: `.btn-toggle[aria-pressed="true"]{
  background: var(--ink); color: #fff; border-color: var(--ink);
}
.btn-toggle{
  padding: 9px 14px; border-radius: 999px;
  background: #fff; border: 1px solid var(--stone);
  font-weight: 600; font-size: 13px;
}`,
      props: ['pressed', 'onToggle'],
      tokens: [
        { name: '--toggle-on', value: '#2A2A2A', usage: 'pressed fill' },
        { name: '--toggle-off', value: '#fff', usage: 'unpressed' },
        { name: '--toggle-border', value: '#E8E0D5', usage: 'off border' },
      ],
      useCases: ['Follow / save toggles', 'Like counters'],
    },
    {
      id: `${bookId}-arrow-slide`,
      name: 'Arrow Slide',
      style: 'editorial',
      description: 'Text that reveals arrow on hover — editorial forward motion.',
      html: `<div style="display:flex;gap:12px;padding:20px;background:#F9F6F0;border-radius:12px;flex-wrap:wrap">
  <button style="padding:12px 18px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:14px;display:inline-flex;gap:10px;align-items:center;cursor:pointer;group:arrow">Shop the Edit <span style="width:20px;height:20px;border-radius:999px;background:#fff;color:#2A2A2A;display:grid;place-items:center;font-size:12px;transition:transform .22s">→</span></button>
  <button style="padding:11px 16px;border-radius:10px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:14px;display:inline-flex;gap:8px;align-items:center;cursor:pointer">Explore <span>↗</span></button>
</div>`,
      css: `.btn-arrow{
  display: inline-flex; gap: 10px; align-items: center;
  padding: 12px 18px; border-radius: 999px;
  background: var(--ink); color: #fff; font-weight: 600;
}
.btn-arrow span{ transition: transform 220ms cubic-bezier(.16,1,.3,1); }
.btn-arrow:hover span{ transform: translateX(3px); }`,
      props: ['arrow', 'label'],
      tokens: [
        { name: '--arrow-nudge', value: 'translateX(3px)', usage: 'hover slide' },
        { name: '--arrow-bg', value: '#fff', usage: 'arrow chip' },
        { name: '--arrow-ink', value: '#2A2A2A', usage: 'arrow color' },
      ],
      useCases: ['Shop and explore CTAs', 'Next step affordance'],
    },
    {
      id: `${bookId}-magnetic-hover`,
      name: 'Magnetic Hover',
      style: 'future',
      description: 'Hover lifts with spotlight that follows — feels magnetic.',
      html: `<div style="padding:20px;background:#1E2022;border-radius:14px;display:flex;gap:12px">
  <button style="padding:12px 20px;border-radius:999px;background:#2A2A2A;color:#fff;border:1px solid #3a3a3a;font-weight:700;font-size:14px;cursor:pointer;position:relative;overflow:hidden;transition:transform .22s">
    <span style="position:absolute;inset:-40px;background:radial-gradient(200px 100px at 30% 50%,rgba(193,124,96,.35),transparent 70%);pointer-events:none"></span>
    <span style="position:relative">Magnetic</span>
  </button>
  <button style="padding:12px 20px;border-radius:999px;background:#fff;color:#1E2022;border:0;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:transform .22s">Hover Lift ↗</button>
</div>`,
      css: `.btn-magnetic{
  position: relative; overflow: hidden;
  background: var(--ink-2); color: #fff;
  border: 1px solid #3a3a3a; border-radius: 999px;
  transition: transform 220ms cubic-bezier(.16,1,.3,1);
}
.btn-magnetic::before{
  content:""; position:absolute; inset:-40px;
  background: radial-gradient(200px 100px at var(--mx,30%) 50%, rgba(193,124,96,.35), transparent 70%);
}
.btn-magnetic:hover{ transform: translateY(-1px) scale(1.02); }`,
      props: ['magnetic', 'spotlight'],
      tokens: [
        { name: '--mx', value: '30%', usage: 'spotlight x (set via JS)' },
        { name: '--magnetic-glow', value: 'rgba(193,124,96,.35)', usage: 'hover aura' },
        { name: '--magnetic-lift', value: 'translateY(-1px) scale(1.02)', usage: 'lift' },
      ],
      useCases: ['Premium hover delight', 'Feature hero CTAs'],
    },
    {
      id: `${bookId}-duotone`,
      name: 'Duotone',
      style: 'terracotta',
      description: 'Two-tone split — ink + terracotta for layered promise.',
      html: `<div style="display:flex;gap:12px;padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;align-items:center">
  <button style="display:inline-flex;border-radius:10px;overflow:hidden;border:1px solid #2A2A2A;cursor:pointer">
    <span style="padding:10px 14px;background:#2A2A2A;color:#fff;font-weight:700;font-size:13px">Buy</span>
    <span style="padding:10px 14px;background:#C17C60;color:#fff;font-weight:700;font-size:13px">$24</span>
  </button>
  <button style="display:inline-flex;border-radius:999px;overflow:hidden;border:1px solid #E8E0D5;cursor:pointer">
    <span style="padding:10px 14px;background:#fff;font-weight:600;font-size:13px">Code</span>
    <span style="padding:10px 14px;background:#F9F6F0;border-left:1px solid #E8E0D5;font-weight:600;font-size:13px">⌘C</span>
  </button>
</div>`,
      css: `.btn-duo{
  display: inline-flex; border-radius: 10px; overflow: hidden;
  border: 1px solid var(--ink);
}
.btn-duo > span:first-child{ background: var(--ink); color: #fff; padding: 10px 14px; font-weight: 700; }
.btn-duo > span:last-child{ background: var(--terracotta); color: #fff; padding: 10px 14px; font-weight: 700; }`,
      props: ['left', 'right'],
      tokens: [
        { name: '--duo-ink', value: '#2A2A2A', usage: 'primary side' },
        { name: '--duo-accent', value: '#C17C60', usage: 'price/meta side' },
        { name: '--duo-radius', value: '10px', usage: 'container' },
      ],
      useCases: ['Buy + price', 'Action + shortcut hint'],
    },
  ],
}
