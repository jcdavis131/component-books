import type { Book } from '../types.ts'

export const book: Book = {
  id: 'commerce',
  title: 'Commerce',
  volume: 12,
  description: 'Product cards, cart, checkout, and merchandising controls.',
  color: '#F9F6F0',
  accent: '#C17C60',
  intro: 'Volume 12 — Japandi v4 commerce. Paper store, terracotta buy.',
  plates: [
    {
      id: 'product-card-minimal',
      name: 'Product Card Minimal',
      style: 'minimal',
      description: 'Clean product card: image, name, price, mono meta. Hover lift.',
      html: `<div class="cm-card">
  <img src="https://picsum.photos/300/300?70" alt="Product"/>
  <div class="cm-body">
    <h4>Studio Chair — Oak</h4>
    <small>By Scout Atelier</small>
    <span>$248</span>
  </div>
</div>`,
      css: `.cm-card{background:#fff;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden;transition:transform .2s,box-shadow .2s}.cm-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(42,42,42,.08)}.cm-card img{width:100%;aspect-ratio:1;object-fit:cover;display:block}.cm-body{padding:12px}.cm-body h4{margin:0 0 4px;font-size:14px;font-weight:600}.cm-body small{font-family:ui-monospace;font-size:11px;color:#8A9A8B;display:block}.cm-body span{font-family:ui-monospace;font-size:13px;color:#2A2A2A;margin-top:8px;display:block}`,
      props: ['name: string', 'price: number', 'image: string', 'brand: string'],
      tokens: [
        { name: '--cm-radius', value: '12px', usage: 'card radius' },
        { name: '--cm-shadow', value: '0 8px 24px rgba(42,42,42,.08)', usage: 'hover shadow' },
      ],
      useCases: ['product grids', 'collection pages', 'search results'],
    },
    {
      id: 'product-card-quick-add',
      name: 'Product Card With Quick Add',
      style: 'minimal',
      description: 'Card with hover quick-add button. Terracotta CTA.',
      html: `<div class="cm-card cm-qa">
  <img src="https://picsum.photos/300/300?71" alt="Product"/>
  <button class="cm-qa-btn">+ Quick add</button>
  <div class="cm-body"><h4>Linen Throw</h4><span>$86</span></div>
</div>`,
      css: `.cm-qa{position:relative}.cm-qa-btn{position:absolute;left:50%;top:48%;transform:translate(-50%,10px);opacity:0;background:#C17C60;color:#fff;border:0;padding:8px 14px;border-radius:999px;font-size:12px;cursor:pointer;transition:all .2s}.cm-qa:hover .cm-qa-btn{opacity:1;transform:translate(-50%,0)}.cm-qa .cm-body{padding:12px}`,
      props: ['quickAdd: boolean', 'onAdd: function'],
      tokens: [
        { name: '--qa-bg', value: '#C17C60', usage: 'terracotta CTA' },
        { name: '--qa-radius', value: '999px', usage: 'pill' },
      ],
      useCases: ['quick shop', 'cartless browse', 'featured products'],
    },
    {
      id: 'cart-line-item',
      name: 'Cart Line Item',
      style: 'minimal',
      description: 'Cart row: thumb, title, variant, qty, price, remove.',
      html: `<div class="cm-line">
  <img src="https://picsum.photos/80/80?72" alt="thumb"/>
  <div class="cm-line-info"><strong>Studio Chair</strong><small>Oak / Natural</small>
    <div class="cm-line-qty"><button>-</button><span>1</span><button>+</button></div>
  </div>
  <div class="cm-line-price">$248 <button>×</button></div>
</div>`,
      css: `.cm-line{display:flex;gap:12px;padding:12px;background:#fff;border:1px solid #E8E0D5;border-radius:10px}.cm-line img{width:64px;height:64px;border-radius:8px;object-fit:cover}.cm-line-info{flex:1;display:flex;flex-direction:column;gap:4px}.cm-line-info small{font-family:ui-monospace;font-size:11px;color:#8A9A8B}.cm-line-qty{display:flex;gap:6px;align-items:center;margin-top:6px}.cm-line-qty button{width:22px;height:22px;border:1px solid #E8E0D5;background:#F9F6F0;border-radius:6px;cursor:pointer}.cm-line-price{font-family:ui-monospace;font-size:13px;display:flex;flex-direction:column;align-items:flex-end;gap:8px}.cm-line-price button{border:0;background:0 0;cursor:pointer;opacity:.5}`,
      props: ['qty: number', 'variant: string', 'onRemove: function'],
      tokens: [
        { name: '--line-thumb', value: '64px', usage: 'thumb size' },
        { name: '--line-radius', value: '10px', usage: 'row radius' },
      ],
      useCases: ['cart drawer', 'checkout review', 'order summary'],
    },
    {
      id: 'cart-summary',
      name: 'Cart Summary',
      style: 'minimal',
      description: 'Subtotal, shipping, tax, total. Sticky checkout CTA.',
      html: `<div class="cm-sum">
  <div class="cm-sum-row"><span>Subtotal</span><span>$334</span></div>
  <div class="cm-sum-row"><span>Shipping</span><span>Free</span></div>
  <div class="cm-sum-row"><span>Tax</span><span>$26.72</span></div>
  <div class="cm-sum-total"><span>Total</span><span>$360.72</span></div>
  <button class="cm-checkout">Checkout →</button>
  <small>Free returns within 30 days</small>
</div>`,
      css: `.cm-sum{background:#F5F1EB;padding:16px;border-radius:12px;border:1px solid #E8E0D5;display:flex;flex-direction:column;gap:10px}.cm-sum-row{display:flex;justify-content:space-between;font-size:13px;color:#2A2A2A}.cm-sum-row span:last-child{font-family:ui-monospace}.cm-sum-total{display:flex;justify-content:space-between;font-weight:700;border-top:1px solid #E8E0D5;padding-top:10px}.cm-checkout{background:#2A2A2A;color:#F9F6F0;border:0;padding:12px;border-radius:8px;cursor:pointer;margin-top:4px}.cm-sum small{font-family:ui-monospace;font-size:11px;color:#8A9A8B;text-align:center}`,
      props: ['subtotal: number', 'shipping: string', 'tax: number', 'total: number'],
      tokens: [
        { name: '--sum-bg', value: '#F5F1EB', usage: 'stone summary' },
        { name: '--sum-cta', value: '#2A2A2A', usage: 'ink CTA' },
      ],
      useCases: ['cart page', 'drawer footer', 'mini-cart'],
    },
    {
      id: 'checkout-steps',
      name: 'Checkout Steps',
      style: 'minimal',
      description: 'Mono step tracker: Information → Shipping → Payment. Active underline.',
      html: `<div class="cm-steps">
  <span class="is-active">01 Information</span><i>→</i>
  <span>02 Shipping</span><i>→</i>
  <span>03 Payment</span>
</div>`,
      css: `.cm-steps{display:flex;gap:12px;align-items:center;font-family:ui-monospace;font-size:11px;padding:12px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:10px}.cm-steps span{opacity:.5;padding-bottom:2px;border-bottom:2px solid transparent}.cm-steps span.is-active{opacity:1;border-color:#2A2A2A;color:#2A2A2A}.cm-steps i{color:#D4C4B0;font-style:normal}`,
      props: ['current: 1|2|3', 'labels: string[]'],
      tokens: [
        { name: '--steps-active', value: '#2A2A2A', usage: 'ink underline' },
        { name: '--steps-gap', value: '12px', usage: 'step gap' },
      ],
      useCases: ['checkout', 'multi-step forms', 'onboarding'],
    },
    {
      id: 'price-discount',
      name: 'Price With Discount',
      style: 'minimal',
      description: 'Original struck, sale terracotta, badge % off.',
      html: `<div class="cm-price">
  <span class="cm-sale">$124</span>
  <span class="cm-orig">$248</span>
  <span class="cm-badge">-50%</span>
</div>`,
      css: `.cm-price{display:flex;align-items:center;gap:8px;font-family:ui-monospace}.cm-sale{color:#C17C60;font-weight:700;font-size:16px}.cm-orig{color:#8A9A8B;text-decoration:line-through;font-size:13px}.cm-badge{background:#C17C60;color:#fff;padding:2px 6px;border-radius:999px;font-size:10px}`,
      props: ['sale: number', 'original: number', 'percent: number'],
      tokens: [
        { name: '--sale-color', value: '#C17C60', usage: 'terracotta sale' },
        { name: '--orig-color', value: '#8A9A8B', usage: 'moss muted' },
      ],
      useCases: ['sale badges', 'collection cards', 'PDP pricing'],
    },
    {
      id: 'quantity-selector',
      name: 'Quantity Selector',
      style: 'minimal',
      description: 'Pill qty stepper: – count +. Mono, 36px tall.',
      html: `<div class="cm-qty"><button>-</button><span>2</span><button>+</button></div>`,
      css: `.cm-qty{display:inline-flex;align-items:center;border:1px solid #E8E0D5;border-radius:999px;overflow:hidden;background:#fff}.cm-qty button{width:36px;height:36px;border:0;background:#F9F6F0;cursor:pointer;font-size:14px}.cm-qty span{width:36px;text-align:center;font-family:ui-monospace;font-size:13px}`,
      props: ['value: number', 'min: 1', 'max: 10', 'onChange: function'],
      tokens: [
        { name: '--qty-h', value: '36px', usage: 'control height' },
        { name: '--qty-bg', value: '#F9F6F0', usage: 'paper button' },
      ],
      useCases: ['PDP qty', 'cart lines', 'bulk add'],
    },
    {
      id: 'filter-sidebar',
      name: 'Filter Sidebar',
      style: 'minimal',
      description: 'Left filter rail with checkboxes, price range, color swatches.',
      html: `<aside class="cm-filter">
  <h4>Filters</h4>
  <div><strong>Material</strong><label><input type="checkbox"/> Oak</label><label><input type="checkbox"/> Walnut</label></div>
  <div><strong>Price</strong><input type="range"/></div>
  <div><strong>Color</strong><span class="cm-swatch" style="background:#8A9A8B"></span><span class="cm-swatch" style="background:#C17C60"></span></div>
</aside>`,
      css: `.cm-filter{width:200px;padding:16px;background:#F9F6F0;border:1px solid #E8E0D5;border-radius:12px;display:flex;flex-direction:column;gap:16px}.cm-filter h4{margin:0;font-size:13px;font-family:ui-monospace}.cm-filter div{display:flex;flex-direction:column;gap:6px;font-size:13px}.cm-filter label{display:flex;gap:6px;align-items:center}.cm-swatch{width:18px;height:18px;border-radius:50%;display:inline-block;border:1px solid #fff;box-shadow:0 0 0 1px #E8E0D5}`,
      props: ['filters: Filter[]', 'onChange: function'],
      tokens: [
        { name: '--filter-w', value: '200px', usage: 'rail width' },
        { name: '--swatch-size', value: '18px', usage: 'color dot' },
      ],
      useCases: ['collection filters', 'search refinement', 'catalog'],
    },
    {
      id: 'sort-dropdown',
      name: 'Sort Dropdown',
      style: 'minimal',
      description: 'Mono sort select, native <select> styled, chevron.',
      html: `<label class="cm-sort">Sort
  <select><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest</option></select>
</label>`,
      css: `.cm-sort{display:inline-flex;gap:8px;align-items:center;font-family:ui-monospace;font-size:12px;background:#fff;border:1px solid #E8E0D5;padding:8px 10px;border-radius:8px}.cm-sort select{border:0;background:0 0;font-family:ui-monospace;font-size:12px;outline:0;cursor:pointer}`,
      props: ['value: string', 'options: string[]'],
      tokens: [
        { name: '--sort-bg', value: '#fff', usage: 'dropdown bg' },
        { name: '--sort-border', value: '#E8E0D5', usage: 'stone border' },
      ],
      useCases: ['collection sort', 'search sort', 'order history'],
    },
    {
      id: 'wishlist-button',
      name: 'Wishlist Button',
      style: 'minimal',
      description: 'Heart toggle, outline → filled terracotta. Count optional.',
      html: `<button class="cm-wish" aria-pressed="false">♡ <span>12</span></button>`,
      css: `.cm-wish{display:inline-flex;gap:6px;align-items:center;padding:8px 12px;border:1px solid #E8E0D5;background:#fff;border-radius:999px;font-family:ui-monospace;font-size:12px;cursor:pointer;transition:all .2s}.cm-wish[aria-pressed="true"]{background:#C17C60;color:#fff;border-color:#C17C60}.cm-wish span{opacity:.7}`,
      props: ['active: boolean', 'count: number', 'onToggle: function'],
      tokens: [
        { name: '--wish-active', value: '#C17C60', usage: 'terracotta active' },
        { name: '--wish-radius', value: '999px', usage: 'pill' },
      ],
      useCases: ['wishlist', 'save for later', 'favorites'],
    },
    {
      id: 'order-summary',
      name: 'Order Summary',
      style: 'minimal',
      description: 'Compact receipt: lines, total, status badge. For email + account.',
      html: `<div class="cm-order">
  <header><strong>#SC-1842</strong><span class="cm-status">Paid</span></header>
  <div class="cm-order-lines"><div><span>Studio Chair ×1</span><span>$248</span></div><div><span>Shipping</span><span>Free</span></div></div>
  <footer><span>Total</span><span>$248</span></footer>
</div>`,
      css: `.cm-order{background:#fff;border:1px solid #E8E0D5;border-radius:12px;overflow:hidden}.cm-order header{display:flex;justify-content:space-between;padding:12px 14px;background:#F5F1EB;border-bottom:1px solid #E8E0D5;font-family:ui-monospace;font-size:12px}.cm-status{background:#8A9A8B;color:#fff;padding:2px 6px;border-radius:999px;font-size:10px}.cm-order-lines{padding:10px 14px;display:flex;flex-direction:column;gap:8px;font-size:13px}.cm-order-lines div{display:flex;justify-content:space-between}.cm-order-lines div span:last-child{font-family:ui-monospace}.cm-order footer{display:flex;justify-content:space-between;padding:12px 14px;border-top:1px solid #E8E0D5;font-weight:700;background:#F9F6F0}`,
      props: ['orderId: string', 'status: Paid|Shipped', 'lines: Line[]'],
      tokens: [
        { name: '--order-bg', value: '#fff', usage: 'receipt bg' },
        { name: '--order-header', value: '#F5F1EB', usage: 'stone header' },
      ],
      useCases: ['order confirmation', 'account history', 'email receipts'],
    },
    {
      id: 'shipping-estimator',
      name: 'Shipping Estimator',
      style: 'minimal',
      description: 'Zip + country estimator with result. Mono inputs.',
      html: `<div class="cm-ship">
  <label>Country<select><option>US</option><option>EU</option></select></label>
  <label>Zip<input placeholder="90210"/></label>
  <button>Estimate</button>
  <p>Free shipping — arrives in 3-5 days</p>
</div>`,
      css: `.cm-ship{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:end;background:#F9F6F0;padding:14px;border:1px solid #E8E0D5;border-radius:10px}.cm-ship label{display:flex;flex-direction:column;gap:4px;font-family:ui-monospace;font-size:11px}.cm-ship select,.cm-ship input{padding:8px;border:1px solid #D4C4B0;border-radius:6px;background:#fff}.cm-ship button{height:36px;padding:0 12px;background:#2A2A2A;color:#F9F6F0;border:0;border-radius:6px;font-size:12px;cursor:pointer}.cm-ship p{grid-column:1/-1;margin:6px 0 0;font-size:12px;color:#8A9A8B}`,
      props: ['country: string', 'zip: string', 'onEstimate: function'],
      tokens: [
        { name: '--ship-bg', value: '#F9F6F0', usage: 'estimator bg' },
        { name: '--ship-cta', value: '#2A2A2A', usage: 'ink button' },
      ],
      useCases: ['cart shipping', 'PDP delivery check', 'checkout helper'],
    },
  ],
}

export default book
