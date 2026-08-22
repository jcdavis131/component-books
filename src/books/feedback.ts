import type { Book } from '../types.ts'

export const book: Book = {
  id: 'feedback',
  title: 'Feedback',
  volume: 11,
  description: 'Alerts, empties, skeletons, loaders, and delight moments.',
  color: '#F5F1EB',
  accent: '#C17C60',
  intro: 'Volume 11 — Japandi v4 feedback. Terracotta accent on stone paper. Calm but clear.',
  plates: [
    {
      id: 'alert-info',
      name: 'Alert Info',
      style: 'minimal',
      description: 'Info variant — moss icon, stone bg, left accent.',
      html: `<div class="fb-alert fb-info">
  <span class="fb-ic">◐</span>
  <div><strong>Heads up</strong><p>Your workspace is using 80% of seats. Invite management in settings.</p></div>
  <button>×</button>
</div>`,
      css: `.fb-alert{display:flex;gap:12px;padding:14px 16px;border-radius:10px;border:1px solid #E8E0D5;background:#F9F6F0;align-items:flex-start}.fb-info{border-left:3px solid #8A9A8B}.fb-ic{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#E8E0D5;font-size:12px}.fb-alert strong{font-size:13px}.fb-alert p{margin:4px 0 0;font-size:12px;color:#8A9A8B}.fb-alert button{margin-left:auto;border:0;background:0 0;cursor:pointer;opacity:.5}`,
      props: ['dismissible: boolean', 'icon: string', 'variant: info'],
      tokens: [
        { name: '--fb-info-accent', value: '#8A9A8B', usage: 'moss accent' },
        { name: '--fb-bg', value: '#F9F6F0', usage: 'paper bg' },
      ],
      useCases: ['info notices', 'onboarding tips', 'feature hints'],
    },
    {
      id: 'alert-warn',
      name: 'Alert Warn',
      style: 'minimal',
      description: 'Warn variant — clay accent, soft warning.',
      html: `<div class="fb-alert fb-warn">
  <span class="fb-ic">⚑</span>
  <div><strong>Check storage</strong><p>Large files may slow your canvas. Archive old versions?</p></div>
  <button>×</button>
</div>`,
      css: `.fb-warn{border-left:3px solid #C17C60}.fb-warn .fb-ic{background:#E8E0D5;color:#A67B5B}`,
      props: ['dismissible: boolean', 'variant: warn'],
      tokens: [
        { name: '--fb-warn', value: '#C17C60', usage: 'terracotta warn' },
        { name: '--fb-warn-bg', value: '#F5F1EB', usage: 'stone bg' },
      ],
      useCases: ['limits', 'slow performance', 'pending actions'],
    },
    {
      id: 'alert-error',
      name: 'Alert Error',
      style: 'minimal',
      description: 'Error variant — stronger border, void ink fallback.',
      html: `<div class="fb-alert fb-error">
  <span class="fb-ic">✕</span>
  <div><strong>Upload failed</strong><p>We could not save your file. Try again or check connection.</p></div>
  <button>×</button>
</div>`,
      css: `.fb-error{border-left:3px solid #A67B5B;background:#fff8f5}.fb-error .fb-ic{background:#F5D6CB;color:#A67B5B}`,
      props: ['variant: error', 'action: string'],
      tokens: [
        { name: '--fb-error', value: '#A67B5B', usage: 'clay error' },
        { name: '--fb-error-bg', value: '#fff8f5', usage: 'error wash' },
      ],
      useCases: ['failed actions', 'validation errors', 'system faults'],
    },
    {
      id: 'alert-success',
      name: 'Alert Success',
      style: 'minimal',
      description: 'Success variant — moss green, calm confirmation.',
      html: `<div class="fb-alert fb-success">
  <span class="fb-ic">✓</span>
  <div><strong>Saved</strong><p>Your changes are live. Share link copied to clipboard.</p></div>
  <button>×</button>
</div>`,
      css: `.fb-success{border-left:3px solid #8A9A8B;background:#f4f6f3}.fb-success .fb-ic{background:#DDE6D8;color:#6B8A6A}`,
      props: ['variant: success', 'autoDismiss: 4000'],
      tokens: [
        { name: '--fb-success', value: '#8A9A8B', usage: 'moss success' },
        { name: '--fb-success-bg', value: '#f4f6f3', usage: 'success wash' },
      ],
      useCases: ['save confirm', 'invite sent', 'publish done'],
    },
    {
      id: 'empty-illustration',
      name: 'Empty State Illustration CSS-Only',
      style: 'playful',
      description: 'CSS-only empty — stacked paper, circle, mono label. No images.',
      html: `<div class="fb-empty">
  <div class="fb-empty-art">
    <div class="fb-paper"></div><div class="fb-paper two"></div>
    <div class="fb-circle"></div>
  </div>
  <h4>Nothing here yet</h4>
  <p>Start by adding your first component. It takes 30 seconds.</p>
  <button>Add component</button>
</div>`,
      css: `.fb-empty{text-align:center;padding:32px 20px;background:#F9F6F0;border:1px dashed #E8E0D5;border-radius:12px}.fb-empty-art{position:relative;width:80px;height:60px;margin:0 auto 16px}.fb-paper{position:absolute;width:60px;height:44px;background:#fff;border:1px solid #E8E0D5;border-radius:8px;left:10px;top:8px;transform:rotate(-4deg)}.fb-paper.two{transform:rotate(3deg);background:#F5F1EB}.fb-circle{position:absolute;width:28px;height:28px;border-radius:50%;background:#C17C60;right:6px;top:2px;border:3px solid #F9F6F0}.fb-empty h4{margin:8px 0 6px;font-size:15px}.fb-empty p{color:#8A9A8B;font-size:13px;max-width:240px;margin:0 auto 12px}.fb-empty button{background:#2A2A2A;color:#F9F6F0;border:0;padding:8px 14px;border-radius:8px;font-size:13px;cursor:pointer}`,
      props: ['title: string', 'cta: string'],
      tokens: [
        { name: '--empty-paper', value: '#fff', usage: 'card paper' },
        { name: '--empty-accent', value: '#C17C60', usage: 'terracotta dot' },
      ],
      useCases: ['first-run empty', 'no results', 'cleared inbox'],
    },
    {
      id: 'skeleton-text',
      name: 'Skeleton Text',
      style: 'minimal',
      description: 'Animated shimmer lines for loading prose. Rounded bars.',
      html: `<div class="fb-skel-text">
  <div class="fb-line w-80"></div>
  <div class="fb-line w-100"></div>
  <div class="fb-line w-90"></div>
  <div class="fb-line w-60"></div>
</div>`,
      css: `.fb-skel-text{display:flex;flex-direction:column;gap:10px}.fb-line{height:10px;border-radius:6px;background:linear-gradient(90deg,#E8E0D5 25%,#F5F1EB 50%,#E8E0D5 75%);background-size:200% 100%;animation:fb-shim 1.2s infinite}.fb-line.w-80{width:80%}.fb-line.w-100{width:100%}.fb-line.w-90{width:90%}.fb-line.w-60{width:60%}@keyframes fb-shim{0%{background-position:200% 0}100%{background-position:-200% 0}}`,
      props: ['lines: 4', 'animate: boolean'],
      tokens: [
        { name: '--skel-base', value: '#E8E0D5', usage: 'stone base' },
        { name: '--skel-shimmer', value: '#F5F1EB', usage: 'shimmer' },
      ],
      useCases: ['article loading', 'comment placeholders', 'search results'],
    },
    {
      id: 'skeleton-card',
      name: 'Skeleton Card',
      style: 'minimal',
      description: 'Card-shaped skeleton with image block and two lines.',
      html: `<div class="fb-skel-card">
  <div class="fb-skel-img"></div>
  <div class="fb-skel-body">
    <div class="fb-line w-60"></div><div class="fb-line w-90"></div>
  </div>
</div>`,
      css: `.fb-skel-card{border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;background:#fff}.fb-skel-img{height:120px;background:linear-gradient(90deg,#E8E0D5 25%,#F5F1EB 50%,#E8E0D5 75%);background-size:200% 100%;animation:fb-shim 1.2s infinite}.fb-skel-body{padding:12px;display:flex;flex-direction:column;gap:10px}`,
      props: ['imageHeight: 120', 'lines: 2'],
      tokens: [
        { name: '--skel-card-bg', value: '#fff', usage: 'card bg' },
        { name: '--skel-img-h', value: '120px', usage: 'image block' },
      ],
      useCases: ['feed loading', 'product grid', 'gallery'],
    },
    {
      id: 'loader-spinner',
      name: 'Loader Spinner',
      style: 'minimal',
      description: 'Single element spinner, border-top accent. 0.8s spin.',
      html: `<div class="fb-spin" aria-label="Loading"></div>`,
      css: `.fb-spin{width:28px;height:28px;border:2px solid #E8E0D5;border-top-color:#C17C60;border-radius:50%;animation:fb-spin .8s linear infinite}@keyframes fb-spin{to{transform:rotate(360deg)}}`,
      props: ['size: 28', 'color: #C17C60'],
      tokens: [
        { name: '--spin-track', value: '#E8E0D5', usage: 'track' },
        { name: '--spin-accent', value: '#C17C60', usage: 'terracotta' },
      ],
      useCases: ['button loading', 'page fetch', 'form submit'],
    },
    {
      id: 'loader-dots',
      name: 'Loader Dots',
      style: 'minimal',
      description: 'Three dots bounce stagger. Calm, not flashy.',
      html: `<div class="fb-dots"><span></span><span></span><span></span></div>`,
      css: `.fb-dots{display:flex;gap:6px;align-items:center}.fb-dots span{width:6px;height:6px;border-radius:50%;background:#C17C60;animation:fb-bounce .9s infinite alternate}.fb-dots span:nth-child(2){animation-delay:.15s}.fb-dots span:nth-child(3){animation-delay:.3s}@keyframes fb-bounce{from{transform:translateY(0);opacity:.6}to{transform:translateY(-4px);opacity:1}}`,
      props: ['count: 3', 'size: 6'],
      tokens: [
        { name: '--dot-accent', value: '#C17C60', usage: 'terracotta dot' },
        { name: '--dot-gap', value: '6px', usage: 'dot spacing' },
      ],
      useCases: ['typing indicator', 'inline waiting', 'chat'],
    },
    {
      id: 'loader-bar',
      name: 'Loader Bar',
      style: 'minimal',
      description: 'Progress bar with indeterminate shimmer option.',
      html: `<div class="fb-bar"><div class="fb-bar-fill" style="width:62%"></div></div>`,
      css: `.fb-bar{height:6px;background:#E8E0D5;border-radius:999px;overflow:hidden}.fb-bar-fill{height:100%;background:linear-gradient(90deg,#C17C60,#A67B5B);border-radius:999px;transition:width .4s ease}`,
      props: ['value: 0-100', 'indeterminate: boolean'],
      tokens: [
        { name: '--bar-track', value: '#E8E0D5', usage: 'track' },
        { name: '--bar-fill', value: '#C17C60', usage: 'terracotta fill' },
      ],
      useCases: ['upload progress', 'onboarding steps', 'file import'],
    },
    {
      id: 'inline-help',
      name: 'Inline Help',
      style: 'minimal',
      description: 'Small ? that reveals tooltip on hover/focus. Mono help text.',
      html: `<span class="fb-help">?
  <span class="fb-tip">We use 640px for reading. 1100px for breakouts.</span>
</span>`,
      css: `.fb-help{position:relative;display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#E8E0D5;color:#2A2A2A;font-family:ui-monospace;font-size:11px;cursor:help}.fb-tip{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%);background:#2A2A2A;color:#F9F6F0;padding:8px 10px;border-radius:8px;font-size:11px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s}.fb-help:hover .fb-tip,.fb-help:focus-within .fb-tip{opacity:1}`,
      props: ['text: string', 'placement: top'],
      tokens: [
        { name: '--help-bg', value: '#E8E0D5', usage: 'trigger bg' },
        { name: '--tip-bg', value: '#2A2A2A', usage: 'tooltip void' },
      ],
      useCases: ['form hints', 'explain metrics', 'docs inline'],
    },
    {
      id: 'offline-banner',
      name: 'Offline Banner',
      style: 'minimal',
      description: 'Sticky top banner when offline. Void bg, paper text.',
      html: `<div class="fb-offline">● Offline — changes will sync when back online <button>Dismiss</button></div>`,
      css: `.fb-offline{position:sticky;top:0;z-index:30;display:flex;align-items:center;gap:12px;padding:8px 14px;background:#1E2022;color:#F9F6F0;font-family:ui-monospace;font-size:12px;border-radius:0 0 8px 8px}.fb-offline button{margin-left:auto;background:#2A2A2A;color:#F9F6F0;border:1px solid #3a3a3a;padding:4px 8px;border-radius:6px;cursor:pointer}`,
      props: ['offline: boolean', 'dismissible: boolean'],
      tokens: [
        { name: '--offline-bg', value: '#1E2022', usage: 'void banner' },
        { name: '--offline-text', value: '#F9F6F0', usage: 'paper text' },
      ],
      useCases: ['offline apps', 'sync status', 'PWA install'],
    },
    {
      id: 'copy-feedback',
      name: 'Copy Feedback',
      style: 'minimal',
      description: 'Button that shows Copied! with check. Self-resets after 2s (JS-enhanced).',
      html: `<button class="fb-copy" onclick="this.textContent='✓ Copied!';setTimeout(()=>this.textContent='Copy link',2000)">Copy link</button>`,
      css: `.fb-copy{padding:8px 12px;border-radius:8px;border:1px solid #E8E0D5;background:#fff;font-family:ui-monospace;font-size:12px;cursor:pointer;transition:all .2s}.fb-copy:active{transform:scale(.98)}`,
      props: ['text: string', 'timeout: 2000'],
      tokens: [
        { name: '--copy-border', value: '#E8E0D5', usage: 'stone border' },
        { name: '--copy-bg', value: '#fff', usage: 'paper' },
      ],
      useCases: ['share links', 'copy code', 'API keys'],
    },
    {
      id: 'confetti-success',
      name: 'Confetti Success',
      style: 'playful',
      description: 'CSS-only confetti burst for success. 12 pieces, keyframe fall.',
      html: `<div class="fb-confetti">
  <div class="fb-conf">Success!</div>
  <i style="--x:10%;--d:.2s;--c:#C17C60"></i><i style="--x:25%;--d:.1s;--c:#8A9A8B"></i>
  <i style="--x:40%;--d:.3s;--c:#D4C4B0"></i><i style="--x:60%;--d:.15s;--c:#A67B5B"></i>
  <i style="--x:75%;--d:.25s;--c:#C17C60"></i><i style="--x:90%;--d:.05s;--c:#8A9A8B"></i>
</div>`,
      css: `.fb-confetti{position:relative;padding:32px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;text-align:center}.fb-conf{font-family:Georgia,serif;font-size:20px;color:#2A2A2A}.fb-confetti i{position:absolute;top:-10px;left:var(--x);width:6px;height:10px;background:var(--c);display:block;animation:fb-conf 1.1s var(--d) ease-out forwards;border-radius:2px}@keyframes fb-conf{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(80px) rotate(180deg);opacity:0}}`,
      props: ['pieces: 6', 'colors: terracotta/moss'],
      tokens: [
        { name: '--conf-c1', value: '#C17C60', usage: 'terracotta' },
        { name: '--conf-c2', value: '#8A9A8B', usage: 'moss' },
      ],
      useCases: ['purchase success', 'form complete', 'onboarding done'],
    },
  ],
}

export default book
