# DeLima House — Customer Information Website (v8)

**This is a separate public, read-only website.** It contains Home, Menu, Product details, Our Story, Community, Locations, Contact, and Privacy. Basket/cart, checkout, ordering, payment, customer order records, and all admin links are removed.

## Local preview
From THIS folder, start `python3 -m http.server 8000`, then open `http://localhost:8000/`. Or upload these contents to a separate static web host.

## Logos
The three uploaded brand artworks were cropped to the artwork and exported with transparent backgrounds: `approved-logo-full.webp`, `approved-logo-symbol.webp`, and `approved-logo-horizontal.webp`. The header uses the horizontal lock-up, footer and story use the stacked one, favicon uses the symbol.

## Real data
`site-config.js` is the only source for products and business information. `products: []` intentionally shows no fictitious prices/items. Edit with verified products, photos, WhatsApp, Instagram and address information ONLY. Offline/demo inventory from the admin website is NOT public.

## Important
The two websites do not synchronize. Admin changes cannot update this public static site without a deliberate publish workflow or secure backend. If there is no verified WhatsApp number, no direct WhatsApp link is shown. Replace concept photos with real verified business photos. Review noindex tags and robots.txt if you want search indexing after launch.

## Edition 08 — Design improvements
- Compact official horizontal logo in the sticky desktop/mobile header; smaller signature logo in footer and story.
- New responsive editorial hero with dedicated full-height photo panel, subtler black-and-gold UI, refined buttons, cards, layouts, icon sizing, and typography.
- All pages load `design-v8.css` after the original stylesheet. Brand icon assets are refined from the user's supplied art (transparent) with no alternate artwork.
- No cart, checkout, ordering or admin links were added.

## V10 update
- Sticky site header stays in view while scrolling; warm gold progress indicator.
- Reduced blue tap feedback; disabled image long-press/context menu where supported. Browser-provided menu UI is not fully controllable by websites.
- New quiet-luxury visual system for categories, featured cards, testimonial cards, location and informational cards.
- Removed testimonial Jeda/Pause control and circular avatars; infinite left-scrolling loop continues.
- Testimonial placeholders remain clearly labelled; replace only with verified permitted reviews.

## V12 refinements
- Removed all orbiting meteor-border animations, preserving the static refined card borders.
- Feature-card icons are in the same flex row as their headings, with descriptions aligned under the heading.
- Closing the mobile menu restores the exact prior scroll position and returns focus without scrolling.
