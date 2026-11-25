# SHIFT.GH — premium streetwear catalogue

A no-framework static storefront for GitHub Pages. The repository began without an existing storefront or product assets, so the site is built as a fresh static implementation. Work is on `redesign/shift-premium-store-v2`.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. No build step, package manager, external SDK, API key, payment provider, or server is required for catalogue browsing.

## Frontend features

- Responsive editorial homepage, collections, category sorting and product search.
- 70 distinct catalogue selections in `assets/js/products.js`, including 50 shirts.
- Product details with selectable options and a body-build presentation explainer. Fit previews are illustrative, not measurements or fit guarantees.
- Product-only SVG illustrations are explicitly marked illustrative placeholders, not actual inventory photography. Replace with genuine product images before sale.
- Cart quantities, subtotal and count; cart and wishlist preference persistence use browser localStorage only.
- Checkout order enquiry prepares selected product/size/colour/quantity, customer-provided details and subtotal for the configured WhatsApp link. Opening WhatsApp is not an order acceptance or confirmation. Delivery is not configured and must be confirmed by SHIFT.
- Official WhatsApp, Instagram, TikTok and Facebook URLs supplied by the owner are linked in the footer; WhatsApp enquiry entry points are included.
- Account interface explains that secure login and order history require backend authentication. No frontend-only password handling is used.
- Rating figures are demonstration data and are not represented as verified or genuine customer feedback.

## Configuration and production dependencies

The checkout is an enquiry flow only; no online payments or Mobile Money processing is part of this storefront. Replace `hello@shift.gh` with the business's verified support address if needed. The WhatsApp link provided is used as supplied; `wa.me` share URLs prepare messages without inventing a phone number.

To accept real orders and protect personal information, integrate a trusted backend that securely handles customer data, order persistence, inventory, delivery fees, account authentication and review moderation. The static site does not persist or send order form data to a backend. Do not collect sensitive information until that secure service is connected. localStorage is only for non-sensitive cart/wishlist convenience on that device.

Before launch, supply genuine, properly licensed product-only photography, verify catalogue descriptions/prices/stock/size availability with SHIFT, configure delivery rates and support contacts, and test the WhatsApp workflow on supported devices. Placeholder catalogue content and prices are not confirmation of current inventory.

## GitHub Pages deployment

In repository Settings → Pages, select the deployment branch `redesign/shift-premium-store-v2` and its root directory, or merge the branch into the chosen deployment branch. This is plain HTML/CSS/JS and needs no build pipeline. Relative asset paths support Pages project-site paths.

## Quality notes

There is no automated browser test harness or package/test setup in this repository. Check the full order-enquiry flow, responsive layouts, keyboard interactions, and official social links in desktop and mobile browsers before production. No credentials or payment integrations are included.