import type { Book } from '../types.ts'

export const book: Book = {
  id: 'media',
  title: 'Media',
  volume: 10,
  description: 'Avatars, galleries, carousels, and rich media primitives — image to lightbox.',
  color: '#E8E0D5',
  accent: '#8A9A8B',
  intro: 'Volume 10 — Japandi v4 media. Stone paper, moss ink. Zero-deps.',
  plates: [
    {
      id: 'avatar-stack',
      name: 'Avatar Stack',
      style: 'minimal',
      description: 'Overlapping avatar stack with +N overflow. Negative margin, white ring.',
      html: `<div class="md-avatars">
  <img class="md-av" src="https://i.pravatar.cc/40?img=1" alt="A"/>
  <img class="md-av" src="https://i.pravatar.cc/40?img=2" alt="B"/>
  <img class="md-av" src="https://i.pravatar.cc/40?img=3" alt="C"/>
  <span class="md-av-more">+5</span>
</div>`,
      css: `.md-avatars{display:flex;align-items:center}.md-av{width:36px;height:36px;border-radius:50%;border:2px solid #fff;margin-left:-8px;object-fit:cover}.md-av:first-child{margin-left:0}.md-av-more{width:36px;height:36px;border-radius:50%;background:#8A9A8B;color:#fff;display:grid;place-items:center;font-size:12px;margin-left:-8px;border:2px solid #fff;font-family:ui-monospace}`,
      props: ['max: 3', 'size: 36', 'overlap: 8', 'overflowLabel: +N'],
      tokens: [
        { name: '--av-size', value: '36px', usage: 'avatar diameter' },
        { name: '--av-ring', value: '#fff', usage: 'stack ring' },
      ],
      useCases: ['collaborators', 'comment threads', 'team lists'],
    },
    {
      id: 'avatar-status',
      name: 'Avatar With Status',
      style: 'minimal',
      description: 'Single avatar with live/offline dot. Positioned bottom-right.',
      html: `<div class="md-av-status">
  <img src="https://i.pravatar.cc/64?img=5" alt="User"/>
  <span class="md-dot online"></span>
</div>`,
      css: `.md-av-status{position:relative;display:inline-block}.md-av-status img{width:48px;height:48px;border-radius:50%;object-fit:cover}.md-dot{position:absolute;bottom:1px;right:1px;width:12px;height:12px;border-radius:50%;border:2px solid #fff;background:#8A9A8B}.md-dot.online{background:#8A9A8B}.md-dot.offline{background:#D4C4B0}`,
      props: ['status: online | offline | busy', 'size: 48'],
      tokens: [
        { name: '--dot-size', value: '12px', usage: 'status dot' },
        { name: '--dot-ring', value: '#fff', usage: 'contrast ring' },
      ],
      useCases: ['presence', 'chat heads', 'user menu'],
    },
    {
      id: 'image-caption',
      name: 'Image With Caption',
      style: 'editorial',
      description: 'Figure with 4/3 image, mono caption. Editorial spacing.',
      html: `<figure class="md-fig">
  <img src="https://picsum.photos/640/480?1" alt="Landscape"/>
  <figcaption>Fig 1 — Dawn over the studio. Shot on paper texture. <span>— 2026</span></figcaption>
</figure>`,
      css: `.md-fig{margin:0;background:#F9F6F0;border-radius:12px;overflow:hidden;border:1px solid #E8E0D5}.md-fig img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}.md-fig figcaption{padding:10px 12px;font-family:ui-monospace;font-size:11px;color:#8A9A8B;line-height:1.5}.md-fig figcaption span{color:#D4C4B0}`,
      props: ['aspect: 4/3', 'caption: string', 'alt: string'],
      tokens: [
        { name: '--fig-radius', value: '12px', usage: 'figure radius' },
        { name: '--fig-caption', value: '#8A9A8B', usage: 'moss ink' },
      ],
      useCases: ['editorial images', 'case studies', 'product detail'],
    },
    {
      id: 'gallery-grid',
      name: 'Gallery Grid',
      style: 'minimal',
      description: '3×2 grid, square crops, hover lift. Zero JS.',
      html: `<div class="md-gallery-grid">
  <img src="https://picsum.photos/300/300?10"/><img src="https://picsum.photos/300/300?11"/>
  <img src="https://picsum.photos/300/300?12"/><img src="https://picsum.photos/300/300?13"/>
  <img src="https://picsum.photos/300/300?14"/><img src="https://picsum.photos/300/300?15"/>
</div>`,
      css: `.md-gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.md-gallery-grid img{aspect-ratio:1;width:100%;object-fit:cover;border-radius:8px;display:block;transition:transform .2s}.md-gallery-grid img:hover{transform:translateY(-2px)}@media(max-width:600px){.md-gallery-grid{grid-template-columns:repeat(2,1fr)}}`,
      props: ['columns: 3', 'gap: 8', 'aspect: 1'],
      tokens: [
        { name: '--gallery-gap', value: '8px', usage: 'grid gap' },
        { name: '--gallery-radius', value: '8px', usage: 'thumb radius' },
      ],
      useCases: ['portfolios', 'product grids', 'user uploads'],
    },
    {
      id: 'gallery-masonry',
      name: 'Gallery Masonry',
      style: 'editorial',
      description: 'CSS columns masonry for images. Mixed heights, no JS.',
      html: `<div class="md-mas">
  <img style="height:180px" src="https://picsum.photos/300/200?20"/>
  <img style="height:260px" src="https://picsum.photos/300/400?21"/>
  <img style="height:200px" src="https://picsum.photos/300/250?22"/>
  <img style="height:220px" src="https://picsum.photos/300/300?23"/>
  <img style="height:160px" src="https://picsum.photos/300/200?24"/>
  <img style="height:240px" src="https://picsum.photos/300/350?25"/>
</div>`,
      css: `.md-mas{columns:3 200px;column-gap:10px}.md-mas img{width:100%;object-fit:cover;border-radius:10px;margin-bottom:10px;display:block;break-inside:avoid;border:1px solid #E8E0D5}`,
      props: ['minCol: 200', 'gap: 10'],
      tokens: [
        { name: '--mas-gap', value: '10px', usage: 'masonry gutter' },
        { name: '--mas-radius', value: '10px', usage: 'image radius' },
      ],
      useCases: ['mood boards', 'inspiration feeds', 'editorial galleries'],
    },
    {
      id: 'carousel-minimal',
      name: 'Carousel Minimal',
      style: 'minimal',
      description: 'Scroll-snap carousel, dot indicators, no JS for MVP. Drag scroll.',
      html: `<div class="md-carousel">
  <div class="md-car-track">
    <div class="md-car-slide">Slide 1</div>
    <div class="md-car-slide">Slide 2</div>
    <div class="md-car-slide">Slide 3</div>
  </div>
  <div class="md-car-dots"><span class="is-on"></span><span></span><span></span></div>
</div>`,
      css: `.md-carousel{overflow:hidden;border-radius:12px;border:1px solid #E8E0D5;background:#F9F6F0}.md-car-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.md-car-track::-webkit-scrollbar{display:none}.md-car-slide{min-width:100%;scroll-snap-align:center;display:grid;place-items:center;height:200px;background:#fff;font-family:ui-monospace}.md-car-dots{display:flex;gap:6px;justify-content:center;padding:10px}.md-car-dots span{width:6px;height:6px;border-radius:50%;background:#D4C4B0}.md-car-dots span.is-on{background:#8A9A8B}`,
      props: ['snap: mandatory', 'dots: boolean', 'autoPlay: false'],
      tokens: [
        { name: '--car-h', value: '200px', usage: 'slide height' },
        { name: '--car-dot-on', value: '#8A9A8B', usage: 'active dot moss' },
      ],
      useCases: ['hero carousels', 'testimonials', 'onboarding slides'],
    },
    {
      id: 'video-poster',
      name: 'Video With Poster',
      style: 'minimal',
      description: 'Video placeholder with poster, centered play, duration badge.',
      html: `<div class="md-video">
  <img src="https://picsum.photos/640/360?30" alt="poster"/>
  <button class="md-play">▶</button>
  <span class="md-dur">2:34</span>
</div>`,
      css: `.md-video{position:relative;border-radius:12px;overflow:hidden;background:#000;aspect-ratio:16/9}.md-video img{width:100%;height:100%;object-fit:cover;display:block}.md-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:48px;height:48px;border-radius:50%;border:0;background:rgba(255,255,255,.9);font-size:18px;display:grid;place-items:center;cursor:pointer}.md-dur{position:absolute;right:10px;bottom:10px;background:rgba(0,0,0,.7);color:#fff;font-family:ui-monospace;font-size:11px;padding:3px 6px;border-radius:6px}`,
      props: ['poster: string', 'duration: string', 'src: string'],
      tokens: [
        { name: '--video-radius', value: '12px', usage: 'container radius' },
        { name: '--play-size', value: '48px', usage: 'play button' },
      ],
      useCases: ['video cards', 'course lessons', 'product demos'],
    },
    {
      id: 'audio-wave',
      name: 'Audio Wave',
      style: 'minimal',
      description: 'CSS-only waveform bars, play button, mono time.',
      html: `<div class="md-audio">
  <button>▶</button>
  <div class="md-wave"><i style="height:40%"></i><i style="height:80%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:60%"></i><i style="height:75%"></i><i style="height:45%"></i><i style="height:85%"></i></div>
  <small>1:24 / 3:42</small>
</div>`,
      css: `.md-audio{display:flex;align-items:center;gap:12px;padding:12px;background:#F5F1EB;border-radius:12px;border:1px solid #E8E0D5}.md-audio button{width:32px;height:32px;border-radius:50%;border:0;background:#2A2A2A;color:#fff;cursor:pointer}.md-wave{display:flex;align-items:center;gap:3px;height:24px;flex:1}.md-wave i{display:block;width:3px;background:#8A9A8B;border-radius:2px}.md-audio small{font-family:ui-monospace;font-size:11px;color:#8A9A8B}`,
      props: ['bars: 8', 'playing: boolean', 'duration: string'],
      tokens: [
        { name: '--wave-bar', value: '#8A9A8B', usage: 'moss bar' },
        { name: '--wave-h', value: '24px', usage: 'wave height' },
      ],
      useCases: ['podcasts', 'voice notes', 'audio messages'],
    },
    {
      id: 'aspect-ratio-box',
      name: 'Aspect Ratio Box',
      style: 'minimal',
      description: 'Utility for 16/9, 4/3, 1/1 with centered content. CSS aspect-ratio.',
      html: `<div class="md-ar-grid">
  <div class="md-ar" style="aspect-ratio:16/9"><span>16 / 9</span></div>
  <div class="md-ar" style="aspect-ratio:4/3"><span>4 / 3</span></div>
  <div class="md-ar" style="aspect-ratio:1"><span>1 / 1</span></div>
</div>`,
      css: `.md-ar-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.md-ar{background:#fff;border:1px dashed #D4C4B0;border-radius:10px;display:grid;place-items:center;font-family:ui-monospace;font-size:12px;color:#8A9A8B}`,
      props: ['ratio: 16/9 | 4/3 | 1/1', 'content: ReactNode'],
      tokens: [
        { name: '--ar-border', value: '#D4C4B0', usage: 'dashed guide' },
        { name: '--ar-bg', value: '#fff', usage: 'box bg' },
      ],
      useCases: ['media placeholders', 'embed wrappers', 'preview frames'],
    },
    {
      id: 'image-comparison',
      name: 'Image Comparison Slider',
      style: 'minimal',
      description: 'Before/after via range input + clip-path. Zero JS drag MVP.',
      html: `<div class="md-compare">
  <img class="md-cmp after" src="https://picsum.photos/400/250?40" alt="after"/>
  <img class="md-cmp before" src="https://picsum.photos/400/250?41" alt="before"/>
  <input type="range" min="0" max="100" value="50"/>
  <span class="md-cmp-handle"></span>
</div>`,
      css: `.md-compare{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:16/10;background:#E8E0D5}.md-compare img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.md-compare .before{clip-path:inset(0 50% 0 0)}.md-compare input{position:absolute;inset:0;width:100%;opacity:0;cursor:ew-resize;z-index:2}.md-cmp-handle{position:absolute;left:50%;top:0;bottom:0;width:2px;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2)}`,
      props: ['value: 0-100', 'before: string', 'after: string'],
      tokens: [
        { name: '--cmp-handle', value: '#fff', usage: 'divider' },
        { name: '--cmp-radius', value: '12px', usage: 'container' },
      ],
      useCases: ['retouch demos', 'renovation before/after', 'filter comparison'],
    },
    {
      id: 'figure-zoom',
      name: 'Figure With Zoom',
      style: 'minimal',
      description: 'Hover zoom, magnify icon. Overflow hidden scale.',
      html: `<figure class="md-zoom">
  <img src="https://picsum.photos/500/320?50" alt="zoomable"/>
  <span class="md-zoom-icon">⤢</span>
</figure>`,
      css: `.md-zoom{position:relative;overflow:hidden;border-radius:12px;margin:0;border:1px solid #E8E0D5}.md-zoom img{width:100%;display:block;transition:transform .5s ease;aspect-ratio:16/10;object-fit:cover}.md-zoom:hover img{transform:scale(1.08)}.md-zoom-icon{position:absolute;right:10px;bottom:10px;background:rgba(255,255,255,.9);width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:12px;backdrop-filter:blur(4px)}`,
      props: ['zoomScale: 1.08', 'icon: string'],
      tokens: [
        { name: '--zoom-scale', value: '1.08', usage: 'hover scale' },
        { name: '--zoom-radius', value: '12px', usage: 'figure radius' },
      ],
      useCases: ['product images', 'maps', 'artwork detail'],
    },
    {
      id: 'lightbox-gallery',
      name: 'Lightbox Gallery',
      style: 'minimal',
      description: 'Grid + lightbox overlay. CSS :target MVP, close via ×.',
      html: `<div class="md-lb">
  <a href="#lb1"><img src="https://picsum.photos/200/200?60"/></a>
  <a href="#lb2"><img src="https://picsum.photos/200/200?61"/></a>
  <a href="#lb3"><img src="https://picsum.photos/200/200?62"/></a>
  <div id="lb1" class="md-lb-over"><a href="#">×</a><img src="https://picsum.photos/800/600?60"/></div>
</div>`,
      css: `.md-lb{display:flex;gap:8px}.md-lb a img{width:80px;height:80px;object-fit:cover;border-radius:8px;border:1px solid #E8E0D5}.md-lb-over{position:fixed;inset:0;background:rgba(30,32,34,.92);display:none;place-items:center;z-index:50;padding:24px}.md-lb-over:target{display:grid}.md-lb-over img{max-width:90vw;max-height:80vh;border-radius:12px}.md-lb-over a{position:absolute;right:20px;top:16px;color:#fff;text-decoration:none;font-size:28px}`,
      props: ['images: string[]', 'useTarget: boolean'],
      tokens: [
        { name: '--lb-bg', value: 'rgba(30,32,34,.92)', usage: 'void overlay' },
        { name: '--lb-thumb', value: '80px', usage: 'thumb size' },
      ],
      useCases: ['photo galleries', 'case study images', 'press kits'],
    },
  ],
}

export default book
