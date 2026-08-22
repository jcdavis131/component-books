import type { Book } from '../types.ts'

const bookId = 'forms'

export const book: Book = {
  id: bookId,
  title: 'Forms',
  volume: 3,
  description: 'Inputs, picks, drops, and shells — 25 plates for capturing intent.',
  color: '#F5F1EB',
  accent: '#C17C60',
  intro: 'Forms are conversations. From minimal text to OTP and masked credit cards, every plate is accessible, keyboard-first, and built with zero deps — native where it matters, custom where it delights.',
  plates: [
    {
      id: `${bookId}-text-minimal`,
      name: 'Text Input Minimal',
      style: 'minimal',
      description: 'Clean text input with quiet border and terracotta focus.',
      html: `<div style="padding:20px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <label style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b6b6b;font-weight:600">Email</label>
  <input placeholder="you@studio.co" style="margin-top:8px;width:100%;padding:12px 14px;border:1px solid #E8E0D5;border-radius:10px;font-size:14px;outline:none;transition:border .18s" onfocus="this.style.borderColor='#C17C60';this.style.boxShadow='0 0 0 3px #C17C6033'" onblur="this.style.borderColor='#E8E0D5';this.style.boxShadow='none'"/>
  <div style="margin-top:8px;font-size:11px;color:#8A9A8B;font-family:ui-monospace">ⓘ we never share</div>
</div>`,
      css: `.input-minimal{
  width: 100%; padding: 12px 14px;
  border: 1px solid #E8E0D5; border-radius: 10px;
  font-size: 14px; outline: none;
  transition: border 180ms ease-out;
}
.input-minimal:focus{ border-color: #C17C60; box-shadow: 0 0 0 3px #C17C6033; }`,
      props: ['value', 'placeholder', 'disabled'],
      tokens: [
        { name: '--input-border', value: '#E8E0D5', usage: 'quiet edge' },
        { name: '--input-focus', value: '#C17C60', usage: 'focus ring' },
        { name: '--input-radius', value: '10px', usage: 'soft input' },
      ],
      useCases: ['Login and signup forms', 'Simple filter inputs'],
    },
    {
      id: `${bookId}-editorial-floating`,
      name: 'Editorial Floating Label',
      style: 'editorial',
      description: 'Serif floating label that lifts on focus — editorial polish.',
      html: `<div style="padding:20px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <div style="position:relative">
    <input id="float-a" placeholder=" " style="width:100%;padding:18px 14px 10px;border:1.5px solid #2A2A2A;border-radius:10px;font-size:15px;background:#fff;outline:none"/>
    <label for="float-a" style="position:absolute;left:12px;top:6px;font-family:'Fraunces',Georgia,serif;font-size:12px;font-weight:700;letter-spacing:.04em;background:#F9F6F0;padding:0 6px;color:#2A2A2A">Full Name</label>
  </div>
  <div style="margin-top:10px;font-size:12px;color:#6b6b6b">Jane Doe — appears above when typing</div>
</div>`,
      css: `.float-wrap{ position: relative; }
.float-wrap input{ width:100%; padding:18px 14px 10px; border:1.5px solid #2A2A2A; border-radius:10px; }
.float-wrap label{
  position:absolute; left:12px; top:6px;
  font-family:"Fraunces",Georgia,serif; font-size:12px; font-weight:700;
  background: var(--paper); padding: 0 6px;
}`,
      props: ['label', 'value'],
      tokens: [
        { name: '--float-label', value: 'Fraunces 12px 700', usage: 'editorial label' },
        { name: '--float-border', value: '1.5px solid #2A2A2A', usage: 'ink edge' },
        { name: '--paper', value: '#F9F6F0', usage: 'label cutout bg' },
      ],
      useCases: ['High-end contact forms', 'Checkout name fields'],
    },
    {
      id: `${bookId}-brutalist-border`,
      name: 'Brutalist Border',
      style: 'brutalist',
      description: 'Hard 2px ink border with offset shadow and uppercase label.',
      html: `<div style="padding:20px;background:#F5F1EB;border-radius:10px;max-width:360px">
  <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px">Username_</div>
  <input value="scout-prime" style="width:100%;padding:12px 14px;background:#fff;border:2px solid #2A2A2A;border-radius:6px;box-shadow:4px 4px 0 #2A2A2A;font-family:ui-monospace;font-weight:700;font-size:14px;outline:none"/>
</div>`,
      css: `.input-brutal{
  width:100%; padding:12px 14px; background:#fff;
  border:2px solid #2A2A2A; border-radius:6px;
  box-shadow: 4px 4px 0 #2A2A2A;
  font-family: ui-monospace; font-weight:700;
}`,
      props: ['value', 'uppercase'],
      tokens: [
        { name: '--brutal-input', value: '2px solid #2A2A2A', usage: 'hard edge' },
        { name: '--brutal-shadow', value: '4px 4px 0 #2A2A2A', usage: 'offset' },
        { name: '--mono', value: 'ui-monospace', usage: 'brutal type' },
      ],
      useCases: ['Username handles', 'Tool settings'],
    },
    {
      id: `${bookId}-glass-input`,
      name: 'Glass Input',
      style: 'glass',
      description: 'Frosted glass input for void and media backgrounds.',
      html: `<div style="padding:20px;border-radius:14px;background:#1E2022;max-width:360px;position:relative;overflow:hidden">
  <div style="position:absolute;inset:-20px;background:radial-gradient(300px 180px at 30% 20%,#C17C60aa,transparent),radial-gradient(300px 180px at 80% 80%,#8A9A8B88,transparent)"></div>
  <div style="position:relative">
    <input placeholder="Search the archive…" style="width:100%;padding:12px 14px;border-radius:999px;background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:14px;outline:none" />
    <div style="margin-top:8px;font-size:11px;color:rgba(255,255,255,.7)">⌘K to focus • Esc to clear</div>
  </div>
</div>`,
      css: `.input-glass{
  width:100%; padding:12px 14px; border-radius:999px;
  background: rgba(255,255,255,.12); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.18); color:#fff;
}
.input-glass::placeholder{ color: rgba(255,255,255,.6); }`,
      props: ['placeholder', 'void'],
      tokens: [
        { name: '--glass-bg', value: 'rgba(255,255,255,.12)', usage: 'frosted fill' },
        { name: '--glass-blur', value: 'blur(10px)', usage: 'glass' },
        { name: '--glass-border', value: 'rgba(255,255,255,.18)', usage: 'edge' },
      ],
      useCases: ['Search over hero imagery', 'Dark mode inputs'],
    },
    {
      id: `${bookId}-clay-inset`,
      name: 'Clay Inset',
      style: 'clay',
      description: 'Pressed clay inset — soft inner shadow for tactile input.',
      html: `<div style="padding:20px;background:#F9F6F0;border-radius:12px;max-width:360px">
  <div style="padding:4px;background:#fff;border-radius:14px;box-shadow:inset 0 1px 2px rgba(255,255,255,.9),inset 0 -6px 12px rgba(0,0,0,.06),0 0 0 1px #E8E0D5 inset">
    <input placeholder="Clay pressed input" style="width:100%;padding:12px 14px;background:transparent;border:0;font-size:14px;outline:none"/>
  </div>
  <div style="margin-top:8px;font-size:11px;color:#8A9A8B">inner light + depth</div>
</div>`,
      css: `.clay-inset{
  padding:4px; background:#fff; border-radius:14px;
  box-shadow: inset 0 1px 2px rgba(255,255,255,.9),
              inset 0 -6px 12px rgba(0,0,0,.06),
              inset 0 0 0 1px #E8E0D5;
}
.clay-inset input{ width:100%; background:transparent; border:0; padding:12px 14px; }`,
      props: ['inset', 'pressed'],
      tokens: [
        { name: '--clay-inner', value: 'inset 0 -6px 12px rgba(0,0,0,.06)', usage: 'pressed depth' },
        { name: '--clay-highlight', value: 'inset 0 1px 2px #fff', usage: 'top light' },
        { name: '--clay-radius', value: '14px', usage: 'soft clay' },
      ],
      useCases: ['Playful search', 'Kids education inputs'],
    },
    {
      id: `${bookId}-corporate-dense`,
      name: 'Corporate Dense',
      style: 'corporate',
      description: '6px radius, 10px padding, tight labels — for dashboards.',
      html: `<div style="padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:10px;max-width:360px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
  <div><label style="font-size:11px;font-weight:600;color:#6b6b6b;letter-spacing:.04em;text-transform:uppercase">First</label><input value="Cameron" style="margin-top:4px;width:100%;padding:9px 10px;border:1px solid #D4C4B0;border-radius:6px;font-size:13px;outline:none"/></div>
  <div><label style="font-size:11px;font-weight:600;color:#6b6b6b;letter-spacing:.04em;text-transform:uppercase">Last</label><input value="Davis" style="margin-top:4px;width:100%;padding:9px 10px;border:1px solid #D4C4B0;border-radius:6px;font-size:13px;outline:none"/></div>
  <div style="grid-column:1 / -1"><label style="font-size:11px;font-weight:600;color:#6b6b6b;letter-spacing:.04em;text-transform:uppercase">Role</label><input value="Builder" style="margin-top:4px;width:100%;padding:9px 10px;border:1px solid #D4C4B0;border-radius:6px;font-size:13px;outline:none"/></div>
</div>`,
      css: `.input-dense{
  width:100%; padding:9px 10px; border:1px solid #D4C4B0;
  border-radius:6px; font-size:13px; outline:none;
}
.label-dense{ font-size:11px; font-weight:600; letter-spacing:.04em; text-transform:uppercase; color:#6b6b6b; }`,
      props: ['density', 'label'],
      tokens: [
        { name: '--dense-pad', value: '9px 10px', usage: 'compact' },
        { name: '--dense-radius', value: '6px', usage: 'professional' },
        { name: '--dense-border', value: '#D4C4B0', usage: 'stone edge' },
      ],
      useCases: ['Admin panels', 'Table inline edits'],
    },
    {
      id: `${bookId}-search-cmdk`,
      name: 'Search With Cmdk',
      style: 'minimal',
      description: 'Search + cmdk palette — ⌘K, list, preview, zero-deps.',
      html: `<div style="padding:16px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:380px">
  <div style="display:flex;gap:8px;align-items:center;padding:10px 12px;border:1px solid #E8E0D5;border-radius:10px;background:#F9F6F0"><span style="opacity:.6">⌕</span><input placeholder="Search plates…" style="flex:1;background:transparent;border:0;font-size:13px;outline:none"/><kbd style="padding:2px 6px;border:1px solid #D4C4B0;border-bottom-width:2px;border-radius:6px;font-family:ui-monospace;font-size:10px;background:#fff">⌘K</kbd></div>
  <div style="margin-top:10px;border:1px solid #E8E0D5;border-radius:10px;overflow:hidden">
    <div style="padding:10px 12px;background:#2A2A2A;color:#fff;font-size:13px;display:flex;justify-content:space-between"><span>● Minimal Pill</span><span style="opacity:.6;font-family:ui-monospace;font-size:11px">buttons</span></div>
    <div style="padding:10px 12px;font-size:13px;border-top:1px solid #F5F1EB">○ Editorial Outline</div>
    <div style="padding:10px 12px;font-size:13px;border-top:1px solid #F5F1EB;opacity:.7">○ Brutalist Offset</div>
  </div>
</div>`,
      css: `.cmdk{
  border:1px solid #E8E0D5; border-radius:10px; overflow:hidden;
}
.cmdk-item{ padding:10px 12px; font-size:13px; border-top:1px solid #F5F1EB; }
.cmdk-item[aria-selected="true"]{ background:#2A2A2A; color:#fff; }`,
      props: ['query', 'items', 'selected'],
      tokens: [
        { name: '--cmdk-bg', value: '#F9F6F0', usage: 'search track' },
        { name: '--cmdk-active', value: '#2A2A2A', usage: 'active row' },
        { name: '--cmdk-border', value: '#E8E0D5', usage: 'list edge' },
      ],
      useCases: ['Library search', 'Command palette'],
    },
    {
      id: `${bookId}-textarea-autogrow`,
      name: 'Textarea Auto Grow',
      style: 'minimal',
      description: 'Auto-growing textarea — grows with content, max 160px.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:380px">
  <label style="font-size:12px;font-weight:600;color:#6b6b6b;letter-spacing:.06em;text-transform:uppercase">Notes</label>
  <textarea placeholder="What are we building?" style="margin-top:8px;width:100%;min-height:88px;max-height:160px;padding:12px 14px;border:1px solid #E8E0D5;border-radius:10px;font-size:14px;resize:none;outline:none" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,160)+'px'">Shipping component-books with real plates. Zero deps, Japandi v4, honest tokens.</textarea>
  <div style="margin-top:8px;display:flex;justify-content:space-between;font-size:11px;color:#8A9A8B"><span>auto-grow • Enter for newline</span><span>128/280</span></div>
</div>`,
      css: `.textarea-grow{
  width:100%; min-height:88px; max-height:160px;
  padding:12px 14px; border:1px solid #E8E0D5; border-radius:10px;
  font-size:14px; resize:none; outline:none;
}
.textarea-grow:focus{ border-color:#C17C60; box-shadow:0 0 0 3px #C17C6033; }`,
      props: ['value', 'maxHeight', 'autoGrow'],
      tokens: [
        { name: '--ta-min', value: '88px', usage: 'initial height' },
        { name: '--ta-max', value: '160px', usage: 'cap height' },
        { name: '--ta-focus', value: '#C17C60', usage: 'focus ring' },
      ],
      useCases: ['Feedback and notes', 'Comment threads'],
    },
    {
      id: `${bookId}-select-custom`,
      name: 'Select Custom',
      style: 'minimal',
      description: 'Custom select with chevron, listbox, keyboardable — no native chrome.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:320px">
  <label style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b">Style</label>
  <div style="margin-top:6px;position:relative">
    <button style="width:100%;padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;background:#fff;text-align:left;font-size:14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">Minimal <span>▾</span></button>
    <div style="position:absolute;top:46px;left:0;right:0;background:#fff;border:1px solid #E8E0D5;border-radius:10px;box-shadow:0 8px 24px rgba(42,42,42,.08);overflow:hidden;z-index:2">
      <div style="padding:10px 12px;background:#F9F6F0;font-size:13px;font-weight:600">● Minimal</div>
      <div style="padding:10px 12px;font-size:13px">Editorial</div>
      <div style="padding:10px 12px;font-size:13px">Brutalist</div>
      <div style="padding:10px 12px;font-size:13px">Glass</div>
    </div>
  </div>
</div>`,
      css: `.select-btn{
  width:100%; padding:11px 12px; border:1px solid #E8E0D5; border-radius:10px;
  background:#fff; text-align:left; font-size:14px;
  display:flex; justify-content:space-between; align-items:center;
}
.select-list{ position:absolute; top:46px; left:0; right:0; background:#fff; border:1px solid #E8E0D5; border-radius:10px; box-shadow:0 8px 24px rgba(42,42,42,.08); }`,
      props: ['value', 'options', 'open'],
      tokens: [
        { name: '--select-border', value: '#E8E0D5', usage: 'quiet edge' },
        { name: '--select-shadow', value: '0 8px 24px rgba(42,42,42,.08)', usage: 'dropdown' },
        { name: '--select-active', value: '#F9F6F0', usage: 'active row bg' },
      ],
      useCases: ['Style picker', 'Volume filter'],
    },
    {
      id: `${bookId}-multiselect-pills`,
      name: 'Multi Select Pills',
      style: 'minimal',
      description: 'Pill multi-select — tokens with × to remove, input inline.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:380px">
  <div style="display:flex;flex-wrap:wrap;gap:8px;padding:10px;border:1px solid #E8E0D5;border-radius:10px;background:#F9F6F0">
    <span style="padding:6px 10px;border-radius:999px;background:#2A2A2A;color:#fff;font-size:12px;font-weight:600;display:inline-flex;gap:6px;align-items:center">minimal <button style="background:transparent;border:0;color:#fff;cursor:pointer;padding:0;font-size:12px">✕</button></span>
    <span style="padding:6px 10px;border-radius:999px;background:#C17C60;color:#fff;font-size:12px;font-weight:600;display:inline-flex;gap:6px;align-items:center">terracotta <button style="background:transparent;border:0;color:#fff;cursor:pointer;padding:0">✕</button></span>
    <input placeholder="Add tag…" style="flex:1;min-width:80px;background:transparent;border:0;font-size:13px;outline:none"/>
  </div>
  <div style="margin-top:8px;font-size:11px;color:#8A9A8B">3 tags • Backspace removes</div>
</div>`,
      css: `.pill-multi{
  display:flex; flex-wrap:wrap; gap:8px; padding:10px;
  border:1px solid #E8E0D5; border-radius:10px; background:#F9F6F0;
}
.pill-multi .pill{ padding:6px 10px; border-radius:999px; background:#2A2A2A; color:#fff; font-size:12px; font-weight:600; }
.pill-multi input{ flex:1; min-width:80px; background:transparent; border:0; outline:none; }`,
      props: ['values', 'onRemove', 'onAdd'],
      tokens: [
        { name: '--pill-bg', value: '#2A2A2A', usage: 'selected pill' },
        { name: '--pill-accent', value: '#C17C60', usage: 'alt pill' },
        { name: '--pill-radius', value: '999px', usage: 'pill shape' },
      ],
      useCases: ['Tag editors', 'Filter builders'],
    },
    {
      id: `${bookId}-date-picker-native`,
      name: 'Date Picker Native',
      style: 'minimal',
      description: 'Native date input styled — calendar popover for free.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:320px">
  <label style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b">Due Date</label>
  <input type="date" value="2026-08-31" style="margin-top:6px;width:100%;padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;font-size:14px;background:#fff;outline:none"/>
  <div style="margin-top:8px;font-size:11px;color:#8A9A8B;display:flex;gap:6px"><span style="padding:3px 8px;border-radius:999px;background:#fff;border:1px solid #E8E0D5">Today</span><span style="padding:3px 8px;border-radius:999px;background:#2A2A2A;color:#fff">Aug 31</span></div>
</div>`,
      css: `input[type="date"]{
  width:100%; padding:11px 12px; border:1px solid #E8E0D5; border-radius:10px;
  font-size:14px; background:#fff; outline:none;
}
input[type="date"]:focus{ border-color:#C17C60; box-shadow:0 0 0 3px #C17C6033; }`,
      props: ['value', 'min', 'max'],
      tokens: [
        { name: '--date-border', value: '#E8E0D5', usage: 'quiet edge' },
        { name: '--date-focus', value: '#C17C60', usage: 'focus' },
        { name: '--chip-bg', value: '#fff', usage: 'today chip' },
      ],
      useCases: ['Due dates and milestones', 'Calendar filters'],
    },
    {
      id: `${bookId}-range-slider`,
      name: 'Range Slider',
      style: 'minimal',
      description: 'Range with track, thumb, and value bubble.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:340px">
  <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:10px"><span>Density</span><span style="padding:3px 8px;border-radius:999px;background:#F9F6F0;border:1px solid #E8E0D5;font-family:ui-monospace">64%</span></div>
  <input type="range" min="0" max="100" value="64" style="width:100%;accent-color:#2A2A2A;height:6px"/>
  <div style="margin-top:8px;display:flex;justify-content:space-between;font-size:10px;font-family:ui-monospace;color:#8A9A8B"><span>cozy</span><span>dense</span><span>airy</span></div>
</div>`,
      css: `input[type="range"]{
  width:100%; height:6px; accent-color:#2A2A2A;
  background: #E8E0D5; border-radius: 999px;
}
.range-bubble{ padding:3px 8px; border-radius:999px; background:#F9F6F0; border:1px solid #E8E0D5; font-family:ui-monospace; font-size:12px; }`,
      props: ['value', 'min', 'max', 'step'],
      tokens: [
        { name: '--range-accent', value: '#2A2A2A', usage: 'thumb and track active' },
        { name: '--range-track', value: '#E8E0D5', usage: 'track bg' },
        { name: '--range-height', value: '6px', usage: 'track height' },
      ],
      useCases: ['Density and scale controls', 'Image opacity sliders'],
    },
    {
      id: `${bookId}-toggle-switch`,
      name: 'Toggle Switch',
      style: 'minimal',
      description: '44×28 switch, 140ms snap, accessible.',
      html: `<div style="display:flex;gap:14px;align-items:center;padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px">
  <button role="switch" aria-checked="true" style="width:44px;height:28px;border-radius:999px;background:#2A2A2A;border:0;position:relative;cursor:pointer;transition:background .14s">
    <span style="position:absolute;top:3px;left:19px;width:22px;height:22px;background:#fff;border-radius:999px;box-shadow:0 1px 4px rgba(0,0,0,.2);transition:all .14s cubic-bezier(.4,0,.2,1)"></span>
  </button>
  <button role="switch" aria-checked="false" style="width:44px;height:28px;border-radius:999px;background:#E8E0D5;border:0;position:relative;cursor:pointer">
    <span style="position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:999px;box-shadow:0 1px 4px rgba(0,0,0,.2)"></span>
  </button>
  <div><div style="font-weight:600;font-size:13px">Provenance checks</div><div style="font-size:11px;color:#8A9A8B">real data only</div></div>
</div>`,
      css: `[role="switch"]{
  width:44px; height:28px; border-radius:999px; border:0;
  position:relative; cursor:pointer; transition:background 140ms cubic-bezier(.4,0,.2,1);
}
[role="switch"][aria-checked="true"]{ background:#2A2A2A; }
[role="switch"][aria-checked="false"]{ background:#E8E0D5; }
[role="switch"] span{ position:absolute; top:3px; width:22px; height:22px; background:#fff; border-radius:999px; box-shadow:0 1px 4px rgba(0,0,0,.2); }`,
      props: ['checked', 'onChange', 'label'],
      tokens: [
        { name: '--switch-on', value: '#2A2A2A', usage: 'on bg' },
        { name: '--switch-off', value: '#E8E0D5', usage: 'off bg' },
        { name: '--switch-thumb', value: '22px', usage: 'thumb size' },
      ],
      useCases: ['Feature flags', 'Privacy toggles'],
    },
    {
      id: `${bookId}-checkbox-card`,
      name: 'Checkbox Card',
      style: 'minimal',
      description: 'Card that is a checkbox — whole surface clickable.',
      html: `<div style="display:flex;gap:10px;padding:16px;background:#F9F6F0;border-radius:12px;max-width:420px">
  <label style="flex:1;padding:14px;border:1.5px solid #2A2A2A;border-radius:12px;background:#fff;cursor:pointer;display:flex;gap:12px;align-items:start">
    <input type="checkbox" checked style="margin-top:3px;accent-color:#2A2A2A;width:16px;height:16px"/>
    <span><span style="font-weight:700;font-size:13px">Offline-ready</span><br/><span style="font-size:12px;color:#6b6b6b">PWA + cached plates</span></span>
    <span style="margin-left:auto;width:20px;height:20px;border-radius:999px;background:#2A2A2A;color:#fff;display:grid;place-items:center;font-size:11px">✓</span>
  </label>
  <label style="flex:1;padding:14px;border:1px solid #E8E0D5;border-radius:12px;background:#fff;cursor:pointer;display:flex;gap:12px;align-items:start">
    <input type="checkbox" style="margin-top:3px;width:16px;height:16px"/><span style="font-weight:600;font-size:13px">Zero-deps</span>
  </label>
</div>`,
      css: `.check-card{
  padding:14px; border:1px solid #E8E0D5; border-radius:12px;
  background:#fff; cursor:pointer; display:flex; gap:12px; align-items:start;
}
.check-card:has(input:checked){ border-color:#2A2A2A; border-width:1.5px; }
.check-card input{ accent-color:#2A2A2A; width:16px; height:16px; }`,
      props: ['checked', 'label', 'description'],
      tokens: [
        { name: '--check-active', value: '#2A2A2A', usage: 'checked border' },
        { name: '--check-bg', value: '#fff', usage: 'card bg' },
        { name: '--check-radius', value: '12px', usage: 'card radius' },
      ],
      useCases: ['Feature selection', 'Onboarding steps'],
    },
    {
      id: `${bookId}-radio-group`,
      name: 'Radio Group',
      style: 'minimal',
      description: 'Segmented radio with serif label — one choice, calm.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:340px">
  <div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6b6b6b;margin-bottom:10px">Density</div>
  <div style="display:flex;gap:8px">
    <label style="flex:1;padding:10px;border:1.5px solid #2A2A2A;border-radius:999px;background:#2A2A2A;color:#fff;font-size:13px;font-weight:600;display:flex;gap:8px;align-items:center;cursor:pointer"><input type="radio" name="dens" checked style="accent-color:#fff"/> Cozy</label>
    <label style="flex:1;padding:10px;border:1px solid #E8E0D5;border-radius:999px;background:#fff;font-size:13px;font-weight:600;display:flex;gap:8px;align-items:center;cursor:pointer"><input type="radio" name="dens"/> Airy</label>
    <label style="flex:1;padding:10px;border:1px solid #E8E0D5;border-radius:999px;background:#fff;font-size:13px;font-weight:600;display:flex;gap:8px;align-items:center;cursor:pointer"><input type="radio" name="dens"/> Dense</label>
  </div>
</div>`,
      css: `.radio-pill{
  flex:1; padding:10px; border:1px solid #E8E0D5; border-radius:999px;
  background:#fff; font-size:13px; font-weight:600;
  display:flex; gap:8px; align-items:center; cursor:pointer;
}
.radio-pill:has(input:checked){ border-color:#2A2A2A; background:#2A2A2A; color:#fff; }`,
      props: ['value', 'name', 'options'],
      tokens: [
        { name: '--radio-on', value: '#2A2A2A', usage: 'selected pill' },
        { name: '--radio-off', value: '#fff', usage: 'unselected' },
        { name: '--radio-border', value: '#E8E0D5', usage: 'quiet edge' },
      ],
      useCases: ['Density pickers', 'View mode radios'],
    },
    {
      id: `${bookId}-file-drop`,
      name: 'File Drop',
      style: 'minimal',
      description: 'Drop zone with dashed border, file list, and progress.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:380px">
  <div style="padding:22px;border:1.5px dashed #B8A99A;border-radius:12px;background:#F9F6F0;text-align:center">
    <div style="font-size:20px">⤓</div>
    <div style="font-weight:700;font-size:13px;margin-top:6px">Drop plates here</div>
    <div style="font-size:11px;color:#8A9A8B;margin-top:4px">or click to browse • up to 20 files</div>
    <button style="margin-top:10px;padding:8px 12px;border-radius:999px;background:#2A2A2A;color:#fff;border:0;font-weight:600;font-size:12px;cursor:pointer">Browse</button>
  </div>
  <div style="margin-top:10px;display:flex;gap:8px;align-items:center;padding:8px 10px;border:1px solid #E8E0D5;border-radius:10px;font-size:12px"><span>●</span> tokens.json <span style="margin-left:auto;font-family:ui-monospace">12kb • done</span></div>
</div>`,
      css: `.drop-zone{
  padding:22px; border:1.5px dashed #B8A99A; border-radius:12px;
  background:#F9F6F0; text-align:center;
}
.drop-zone:hover{ border-color:#2A2A2A; background:#fff; }
.file-row{ display:flex; gap:8px; align-items:center; padding:8px 10px; border:1px solid #E8E0D5; border-radius:10px; font-size:12px; }`,
      props: ['accept', 'multiple', 'onDrop'],
      tokens: [
        { name: '--drop-border', value: '1.5px dashed #B8A99A', usage: 'drop affordance' },
        { name: '--drop-bg', value: '#F9F6F0', usage: 'zone bg' },
        { name: '--file-row', value: '#E8E0D5', usage: 'file list edge' },
      ],
      useCases: ['Upload plates and assets', 'Import tokens'],
    },
    {
      id: `${bookId}-otp`,
      name: 'Otp',
      style: 'minimal',
      description: 'One-time pass — 6 boxes, auto-advance, paste fills.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b;margin-bottom:10px">Enter Code</div>
  <div style="display:flex;gap:8px">
    <input value="4" maxlength="1" style="width:42px;height:48px;text-align:center;border:1.5px solid #2A2A2A;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
    <input value="2" maxlength="1" style="width:42px;height:48px;text-align:center;border:1.5px solid #2A2A2A;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
    <input value="9" maxlength="1" style="width:42px;height:48px;text-align:center;border:1.5px solid #2A2A2A;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
    <input value="•" maxlength="1" style="width:42px;height:48px;text-align:center;border:1px solid #E8E0D5;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
    <input maxlength="1" style="width:42px;height:48px;text-align:center;border:1px solid #E8E0D5;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
    <input maxlength="1" style="width:42px;height:48px;text-align:center;border:1px solid #E8E0D5;border-radius:10px;background:#fff;font-weight:800;font-size:18px;outline:none"/>
  </div>
  <div style="margin-top:10px;font-size:11px;color:#8A9A8B">Paste code — fills all boxes • 00:47 resend</div>
</div>`,
      css: `.otp{
  display:flex; gap:8px;
}
.otp input{
  width:42px; height:48px; text-align:center;
  border:1px solid #E8E0D5; border-radius:10px; background:#fff;
  font-weight:800; font-size:18px; outline:none;
}
.otp input:focus{ border-color:#2A2A2A; border-width:1.5px; }`,
      props: ['length', 'value', 'onComplete'],
      tokens: [
        { name: '--otp-size', value: '42px×48px', usage: 'box size' },
        { name: '--otp-border', value: '#E8E0D5', usage: 'quiet edge' },
        { name: '--otp-focus', value: '#2A2A2A', usage: 'active border' },
      ],
      useCases: ['Email verification', '2FA entry'],
    },
    {
      id: `${bookId}-phone-country`,
      name: 'Phone With Country',
      style: 'minimal',
      description: 'Phone input with country picker — flag + code.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <label style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b">Phone</label>
  <div style="margin-top:6px;display:flex;gap:8px">
    <button style="padding:10px 12px;border:1px solid #E8E0D5;border-radius:10px;background:#F9F6F0;font-size:13px;font-weight:600;display:inline-flex;gap:6px;align-items:center;cursor:pointer">🇺🇸 +1 ▾</button>
    <input placeholder="(555) 012-3456" style="flex:1;padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;font-size:14px;outline:none"/>
  </div>
</div>`,
      css: `.phone-field{ display:flex; gap:8px; }
.phone-country{
  padding:10px 12px; border:1px solid #E8E0D5; border-radius:10px;
  background:#F9F6F0; font-size:13px; font-weight:600;
  display:inline-flex; gap:6px; align-items:center;
}
.phone-input{ flex:1; padding:11px 12px; border:1px solid #E8E0D5; border-radius:10px; font-size:14px; }`,
      props: ['country', 'value', 'format'],
      tokens: [
        { name: '--phone-country-bg', value: '#F9F6F0', usage: 'country chip bg' },
        { name: '--phone-border', value: '#E8E0D5', usage: 'quiet edge' },
        { name: '--phone-radius', value: '10px', usage: 'input radius' },
      ],
      useCases: ['Signup with SMS', 'Support contact forms'],
    },
    {
      id: `${bookId}-color-picker`,
      name: 'Color Picker',
      style: 'minimal',
      description: 'Swatch + hex + native color input — keeps tokens honest.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <div style="display:flex;gap:10px;align-items:center">
    <input type="color" value="#C17C60" style="width:44px;height:44px;border-radius:10px;border:1px solid #E8E0D5;padding:2px;background:#fff;cursor:pointer"/>
    <input value="#C17C60" style="flex:1;padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;background:#fff;font-family:ui-monospace;font-size:13px;outline:none"/>
    <div style="width:44px;height:44px;border-radius:10px;background:#C17C60;border:1px solid #E8E0D5"></div>
  </div>
  <div style="margin-top:10px;display:flex;gap:8px">
    <span style="width:28px;height:28px;border-radius:999px;background:#2A2A2A;border:2px solid #fff;box-shadow:0 0 0 1px #E8E0D5"></span>
    <span style="width:28px;height:28px;border-radius:999px;background:#F9F6F0;border:2px solid #fff;box-shadow:0 0 0 1px #E8E0D5"></span>
    <span style="width:28px;height:28px;border-radius:999px;background:#C17C60;border:2px solid #fff;box-shadow:0 0 0 1.5px #2A2A2A"></span>
    <span style="width:28px;height:28px;border-radius:999px;background:#8A9A8B;border:2px solid #fff;box-shadow:0 0 0 1px #E8E0D5"></span>
    <span style="width:28px;height:28px;border-radius:999px;background:#A67B5B;border:2px solid #fff;box-shadow:0 0 0 1px #E8E0D5"></span>
  </div>
</div>`,
      css: `input[type="color"]{
  width:44px; height:44px; border-radius:10px;
  border:1px solid #E8E0D5; padding:2px; background:#fff; cursor:pointer;
}
.swatch{ width:28px; height:28px; border-radius:999px; border:2px solid #fff; box-shadow:0 0 0 1px #E8E0D5; }
.swatch[aria-selected="true"]{ box-shadow:0 0 0 1.5px #2A2A2A; }`,
      props: ['value', 'swatches', 'onChange'],
      tokens: [
        { name: '--swatch-size', value: '28px', usage: 'swatch dot' },
        { name: '--color-preview', value: '44px', usage: 'preview box' },
        { name: '--hex-mono', value: 'ui-monospace 13px', usage: 'hex input' },
      ],
      useCases: ['Theme token editor', 'Brand color pickers'],
    },
    {
      id: `${bookId}-slider-ticks`,
      name: 'Slider With Ticks',
      style: 'minimal',
      description: 'Slider with tick marks and labels — snap to steps.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600"><span>Spacing</span><span style="font-family:ui-monospace">16px</span></div>
  <div style="margin-top:12px;position:relative;padding:0 6px">
    <input type="range" min="0" max="4" value="2" step="1" style="width:100%;accent-color:#2A2A2A"/>
    <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;font-family:ui-monospace;color:#8A9A8B"><span>4</span><span>8</span><span>16</span><span>24</span><span>32</span></div>
    <div style="display:flex;justify-content:space-between;margin-top:2px;padding:0 2px"><span style="width:4px;height:6px;background:#2A2A2A;border-radius:2px"></span><span style="width:4px;height:6px;background:#D4C4B0;border-radius:2px"></span><span style="width:4px;height:10px;background:#2A2A2A;border-radius:2px"></span><span style="width:4px;height:6px;background:#D4C4B0;border-radius:2px"></span><span style="width:4px;height:6px;background:#D4C4B0;border-radius:2px"></span></div>
  </div>
</div>`,
      css: `.ticks{
  display:flex; justify-content:space-between;
  margin-top:6px; font-size:10px; font-family:ui-monospace; color:#8A9A8B;
}
.tick{ width:4px; height:6px; background:#D4C4B0; border-radius:2px; }
.tick--active{ height:10px; background:#2A2A2A; }`,
      props: ['value', 'ticks', 'step'],
      tokens: [
        { name: '--tick-inactive', value: '#D4C4B0', usage: 'unselected tick' },
        { name: '--tick-active', value: '#2A2A2A', usage: 'selected tick' },
        { name: '--tick-h', value: '6px', usage: 'tick height' },
      ],
      useCases: ['Scale pickers', 'Density steppers'],
    },
    {
      id: `${bookId}-number-stepper`,
      name: 'Number Stepper',
      style: 'minimal',
      description: 'Number with ±, clamp, and hold-to-repeat.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:280px">
  <div style="display:inline-flex;border:1px solid #E8E0D5;border-radius:10px;overflow:hidden;background:#fff">
    <button style="padding:10px 12px;border:0;background:#F9F6F0;border-right:1px solid #E8E0D5;font-weight:700;cursor:pointer">−</button>
    <input type="number" value="3" style="width:64px;text-align:center;border:0;font-weight:700;font-size:14px;outline:none"/>
    <button style="padding:10px 12px;border:0;background:#F9F6F0;border-left:1px solid #E8E0D5;font-weight:700;cursor:pointer">＋</button>
  </div>
  <span style="margin-left:10px;font-size:12px;color:#8A9A8B">plates • 1–25</span>
</div>`,
      css: `.stepper{
  display:inline-flex; border:1px solid #E8E0D5; border-radius:10px; overflow:hidden; background:#fff;
}
.stepper button{ padding:10px 12px; border:0; background:#F9F6F0; font-weight:700; cursor:pointer; }
.stepper input{ width:64px; text-align:center; border:0; font-weight:700; font-size:14px; outline:none; }`,
      props: ['value', 'min', 'max', 'step'],
      tokens: [
        { name: '--stepper-bg', value: '#F9F6F0', usage: 'button track' },
        { name: '--stepper-border', value: '#E8E0D5', usage: 'container edge' },
        { name: '--stepper-width', value: '64px', usage: 'input width' },
      ],
      useCases: ['Quantity pickers', 'Page size controls'],
    },
    {
      id: `${bookId}-masked-credit-card`,
      name: 'Masked Credit Card',
      style: 'corporate',
      description: 'Card number masking, brand icon, and expiry / CVC split.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:380px">
  <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px"><div style="width:36px;height:24px;border-radius:4px;background:#2A2A2A;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:800">VISA</div><div style="font-size:11px;color:#8A9A8B;font-family:ui-monospace">• masked • Luhn check</div></div>
  <input placeholder="4242 4242 4242 4242" value="4242 4242 4242 4242" style="width:100%;padding:12px 14px;border:1px solid #E8E0D5;border-radius:10px;font-family:ui-monospace;font-size:14px;letter-spacing:.08em;outline:none"/>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
    <input placeholder="MM / YY" value="12 / 28" style="padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;font-family:ui-monospace;font-size:13px;outline:none"/>
    <input placeholder="CVC" value="•••" style="padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;font-family:ui-monospace;font-size:13px;outline:none"/>
  </div>
</div>`,
      css: `.cc-input{
  width:100%; padding:12px 14px; border:1px solid #E8E0D5; border-radius:10px;
  font-family:ui-monospace; font-size:14px; letter-spacing:.08em; outline:none;
}
.cc-brand{ width:36px; height:24px; border-radius:4px; background:#2A2A2A; color:#fff; display:grid; place-items:center; font-size:10px; font-weight:800; }`,
      props: ['value', 'brand', 'masked'],
      tokens: [
        { name: '--cc-mono', value: 'ui-monospace 14px', usage: 'card number type' },
        { name: '--cc-tracking', value: '.08em', usage: 'card spacing' },
        { name: '--cc-brand-bg', value: '#2A2A2A', usage: 'brand chip' },
      ],
      useCases: ['Checkout payment', 'Billing update'],
    },
    {
      id: `${bookId}-autocomplete`,
      name: 'Autocomplete',
      style: 'minimal',
      description: 'Combobox with filtered suggestions and keyboard nav.',
      html: `<div style="padding:18px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;max-width:360px">
  <input placeholder="Search tokens… e.g. paper" value="pap" style="width:100%;padding:11px 12px;border:1px solid #E8E0D5;border-radius:10px;font-size:14px;background:#fff;outline:none"/>
  <div style="margin-top:8px;background:#fff;border:1px solid #E8E0D5;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(42,42,42,.06)">
    <div style="padding:10px 12px;background:#2A2A2A;color:#fff;font-size:13px;display:flex;justify-content:space-between"><span>● <b>paper</b> — #F9F6F0</span><span style="font-family:ui-monospace;font-size:11px;opacity:.7">--paper</span></div>
    <div style="padding:10px 12px;font-size:13px"><b>paper</b>-2 — #F5F1EB</div>
    <div style="padding:10px 12px;font-size:13px;opacity:.6"><span style="font-family:ui-monospace">--paper</span> is closest match</div>
  </div>
</div>`,
      css: `.ac-list{
  margin-top:8px; background:#fff; border:1px solid #E8E0D5; border-radius:10px;
  overflow:hidden; box-shadow:0 8px 24px rgba(42,42,42,.06);
}
.ac-item{ padding:10px 12px; font-size:13px; }
.ac-item[aria-selected="true"]{ background:#2A2A2A; color:#fff; }`,
      props: ['query', 'options', 'highlight'],
      tokens: [
        { name: '--ac-bg', value: '#fff', usage: 'list bg' },
        { name: '--ac-active', value: '#2A2A2A', usage: 'active suggestion' },
        { name: '--ac-shadow', value: '0 8px 24px rgba(42,42,42,.06)', usage: 'dropdown lift' },
      ],
      useCases: ['Token search', 'Plate search in library'],
    },
    {
      id: `${bookId}-inline-validation`,
      name: 'Inline Validation',
      style: 'minimal',
      description: 'Field with success / error / hint — icon + message.',
      html: `<div style="padding:18px;background:#fff;border:1px solid #E8E0D5;border-radius:12px;max-width:380px;display:grid;gap:12px">
  <div><label style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#2A2A2A">Email ✓</label><input value="cameron@scout.co" style="margin-top:6px;width:100%;padding:11px 12px;border:1.5px solid #8A9A8B;border-radius:10px;font-size:14px;outline:none;background:#F9F6F0"/><div style="margin-top:6px;font-size:11px;color:#3a4a3c;display:flex;gap:6px;align-items:center"><span style="width:16px;height:16px;border-radius:999px;background:#8A9A8B;color:#fff;display:grid;place-items:center;font-size:10px">✓</span> Looks good</div></div>
  <div><label style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#C17C60">Handle ✗</label><input value="scout!" style="margin-top:6px;width:100%;padding:11px 12px;border:1.5px solid #C17C60;border-radius:10px;font-size:14px;outline:none"/><div style="margin-top:6px;font-size:11px;color:#7a3f2e;display:flex;gap:6px;align-items:center"><span style="width:16px;height:16px;border-radius:999px;background:#C17C60;color:#fff;display:grid;place-items:center;font-size:10px">!</span> Only letters, numbers, dash</div></div>
</div>`,
      css: `.field{ display:grid; gap:6px; }
.field input{ width:100%; padding:11px 12px; border:1px solid #E8E0D5; border-radius:10px; font-size:14px; }
.field--ok input{ border-color:#8A9A8B; border-width:1.5px; background:#F9F6F0; }
.field--err input{ border-color:#C17C60; border-width:1.5px; }
.field-msg{ font-size:11px; display:flex; gap:6px; align-items:center; }`,
      props: ['state', 'message', 'value'],
      tokens: [
        { name: '--ok', value: '#8A9A8B', usage: 'success border' },
        { name: '--err', value: '#C17C60', usage: 'error border' },
        { name: '--msg-size', value: '11px', usage: 'hint type' },
      ],
      useCases: ['Signup validation', 'Inline field feedback'],
    },
    {
      id: `${bookId}-form-shell-sections`,
      name: 'Form Shell With Sections',
      style: 'minimal',
      description: 'Full form shell — header, sections, sticky actions.',
      html: `<div style="max-width:420px;background:#fff;border:1px solid #E8E0D5;border-radius:14px;overflow:hidden">
  <div style="padding:16px 18px;border-bottom:1px solid #F5F1EB;background:#F9F6F0;display:flex;justify-content:space-between;align-items:center"><div><div style="font-weight:800;font-size:14px">New Plate</div><div style="font-size:11px;color:#8A9A8B">Volume 3 • Forms</div></div><span style="padding:4px 8px;border-radius:999px;background:#fff;border:1px solid #E8E0D5;font-size:11px;font-family:ui-monospace">draft</span></div>
  <div style="padding:16px 18px;display:grid;gap:14px">
    <div><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b;margin-bottom:6px">Basics</div><input placeholder="Plate name" style="width:100%;padding:10px 12px;border:1px solid #E8E0D5;border-radius:8px;font-size:13px"/></div>
    <div><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b6b6b;margin-bottom:6px">Tokens</div><div style="display:flex;gap:8px"><input placeholder="--radius" style="flex:1;padding:10px 12px;border:1px solid #E8E0D5;border-radius:8px;font-size:12px;font-family:ui-monospace"/><input placeholder="12px" style="width:96px;padding:10px 12px;border:1px solid #E8E0D5;border-radius:8px;font-size:12px;font-family:ui-monospace"/></div></div>
  </div>
  <div style="padding:12px 18px;border-top:1px solid #F5F1EB;background:#F9F6F0;display:flex;justify-content:space-between;align-items:center"><span style="font-size:11px;color:#8A9A8B">⌘+Enter to save</span><div style="display:flex;gap:8px"><button style="padding:9px 12px;border-radius:8px;background:#fff;border:1px solid #E8E0D5;font-weight:600;font-size:12px;cursor:pointer">Cancel</button><button style="padding:9px 14px;border-radius:8px;background:#2A2A2A;color:#fff;border:0;font-weight:700;font-size:12px;cursor:pointer">Save Plate</button></div></div>
</div>`,
      css: `.form-shell{ max-width:420px; background:#fff; border:1px solid #E8E0D5; border-radius:14px; overflow:hidden; }
.form-head{ padding:16px 18px; border-bottom:1px solid #F5F1EB; background:#F9F6F0; display:flex; justify-content:space-between; align-items:center; }
.form-foot{ padding:12px 18px; border-top:1px solid #F5F1EB; background:#F9F6F0; display:flex; justify-content:space-between; align-items:center; }`,
      props: ['sections', 'onSave', 'draft'],
      tokens: [
        { name: '--shell-border', value: '#E8E0D5', usage: 'container edge' },
        { name: '--shell-head', value: '#F9F6F0', usage: 'header bg' },
        { name: '--shell-radius', value: '14px', usage: 'form radius' },
      ],
      useCases: ['New plate creation', 'Settings with grouped sections'],
    },
  ],
}
