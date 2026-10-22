# BigBelief Solutions website

Next.js 15 (App Router) + TypeScript + Tailwind CSS 4. No paid services.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Contact form delivery.** `app/api/contact/route.ts` delivers nothing until you set
   `CONTACT_WEBHOOK_URL` (any endpoint accepting JSON: Formspree, Make, Zapier, Apps Script, Slack webhook).
   Until then the form opens the visitor's email app (mailto) and says so honestly.
2. **Domain.** Set `NEXT_PUBLIC_SITE_URL` (defaults to https://www.bigbeliefsolutions.com) for canonicals and sitemap.
3. **Legal pages** (`/privacy`, `/terms`, `/cookies`) are draft placeholders and are `noindex`. Have them reviewed.
4. **Articles** in `content/data.ts` are flagged `placeholder: true`; they are `noindex` and excluded from the sitemap
   until you set `placeholder: false` with real copy.
5. **Social links / WhatsApp:** fill `site.social` in `content/site.ts`; empty links are hidden automatically.
6. **Team and founder profiles:** placeholders on `/about`.

## Structure

- `content/` all copy and data (products, capabilities, industries, articles), CMS-ready
- `components/` shared UI; `components/product-ui/` mock product interfaces (demo data)
- `app/` routes, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `app/globals.css` design tokens (colors, type scale, spacing, motion, reduced-motion)
