# Zeal Energy Systems and Recyclers — Website v2

A fast, frontend-only rebuild of the Zeal Energy website using **React 18 + Vite**. No backend or server is needed. Quote requests, contact messages and recycling pickups are sent through **WhatsApp** or **email**.

## Quick start

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build
```

Requires Node.js 18 or newer.

## Deploying

Upload the `dist` folder to any static host. Routing config for single-page apps is already included:

- **Netlify:** `public/_redirects` is copied into the build automatically.
- **Vercel:** `vercel.json` handles routing and long-term caching of assets.
- **Apache / cPanel:** add an `.htaccess` that rewrites unknown paths to `/index.html`.

## Editing content

All content lives in plain JavaScript files. Edit them and every page updates.

| What | File |
| --- | --- |
| Phone, WhatsApp number, email, address, hours, social links, headline stats, brands, FAQ | `src/data/site.js` |
| Products and categories | `src/data/products.js` |
| Services | `src/data/services.js` |
| Photos (Pexels IDs and local fallbacks) | `src/data/images.js` |

- **WhatsApp number:** `site.whatsapp` in `src/data/site.js`, in international format without `+` (currently `255692897243`).
- **Social icons:** fill in the URLs under `site.socials`. Empty ones stay hidden.
- **Adding a product:** copy an existing entry in `products.js`, give it a unique `slug`, and use either a local image (`/img/products/...webp`) or a Pexels photo.
- **Sitemap:** update `public/sitemap.xml` when you add products or services.

## Features

- **Request a quote:** a quote list (basket) on every product, a four-step quote form with validation, saved drafts, review screen, and sending by WhatsApp or email with a reference number.
- **WhatsApp integration:** a floating chat widget with preset topics, plus "Ask on WhatsApp" buttons on every product and service, pre-filled with the item name.
- **Catalogue:** search, category and brand filters, sorting, grid or list view, shareable filter URLs, and product pages with specifications and datasheet requests.
- **Site search:** press `Ctrl + K` (or `⌘ + K`) or use the search icon to find products and services from anywhere.
- **Pages:** Home, Products, Product detail, Services, Service detail, Recycling (with pickup form), About, Contact (with map), Request a quote, FAQ, Privacy, Terms, and 404.
- **SEO:** per-page titles and descriptions, Open Graph image for link previews, local business structured data, sitemap and robots.txt. Old URLs `/about-us` and `/services-and-installations` still work.
- **Accessibility:** keyboard navigation, visible focus, skip link, labelled forms, and support for reduced-motion preferences.

## Performance

- **Smaller downloads:** Create React App, MUI, Redux, axios, moment and two carousel libraries were removed in favour of lightweight code.
- **Fast first paint:**
  - Every page is a separate chunk, and links preload their page on hover or tap.
  - A branded splash screen paints before JavaScript loads, and pages show skeletons instead of blank screens.
  - The hero image and font are preloaded.
- **Images:**
  - Local images were converted to WebP and resized, cutting them from 4.4 MB to about 0.6 MB.
  - Photos are served at the right size for each screen and lazy-loaded.
  - Each photo has a local fallback, so the page never shows a broken image.
- **Fonts:** the self-hosted Archivo variable font is a single 50 KB file.

## Image credits

See `CREDITS.md`. Stock photos are from Pexels and free for commercial use.

## Connecting a form service later (optional)

To receive form submissions directly in an inbox instead of through WhatsApp or the visitor's email app, wire the `send` functions in `src/pages/Quote.jsx`, `Contact.jsx` and `Recycling.jsx` to a service such as Formspree, EmailJS or Web3Forms.
