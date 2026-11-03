# Markhor Extreme Inc. — Website

One-page website for Markhor Extreme Inc., a Canada-based wholesale Pokémon supplier exporting worldwide.
Buyers contact the business on WhatsApp for bulk deals — there is no checkout, forms or backend.

Live at [markhorextreme.com](https://markhorextreme.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:8050](http://localhost:8050).

## Editing content

- **WhatsApp numbers and site URL:** `lib/site.ts`
- **Page sections, product categories, gallery and export countries:** `app/page.tsx`
- **Title, description and share previews:** `app/layout.tsx` and `app/opengraph-image.tsx`
- **Product images:** add them to `public/` and list them in the `gallery` array in `app/page.tsx`

## Build and deploy

`npm run build` exports a static site to `out/`. It is hosted on Cloudflare Workers
(config in `wrangler.jsonc`), which builds and deploys automatically on every push to `main`.
