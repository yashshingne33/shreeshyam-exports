# Shree Shyam Exports — Website

React + Vite + Tailwind build, generated from
`Shree_Shyam_Exports_Website_Development_Brief.xlsx`.

## What's built

Every page in the **Sitemap** sheet (P01–P16) is implemented and wired up
in `src/App.jsx`:

| Page | Route | Notes |
|---|---|---|
| Home | `/` | All sections merged into **one file**, `src/pages/Home.jsx`, in Outline order |
| Products | `/products/` | Catalogue + comparison table |
| Product detail | `/products/:slug/` | Shared template — shell charcoal, briquettes, hookah cubes, hexagonal (conditional) |
| Quality | `/quality/` | Process, testing/documents, sourcing |
| Packaging & Private Label | `/packaging-private-label/` | Pack options + private-label process |
| Export & Ordering | `/export-ordering/` | Order journey, shipping/documents, FAQ |
| About | `/about/` | Company story & operating model |
| Request a Quote | `/request-a-quote/` | Full RFQ form (see below) |
| FAQ | `/faq/` | Accordion, from the FAQ sheet |
| Privacy Policy | `/privacy-policy/` | |
| Website Terms | `/terms/` | |
| Thank You | `/thank-you/` | Post-submission confirmation |
| Buyer Guides | `/guides/` | Conditional "coming later" page, per Sitemap policy |
| 404 | any unmatched route | |

## The RFQ form (P11)

`src/components/RfqForm.jsx` implements the full RFQ sheet field set:
enquiry type, contact details, product multi-select, application, grade,
quantity (with "not sure" option), destination, packaging, timing, trade
term, message, privacy acknowledgement, and a hidden honeypot field for
spam.

**Important — this is a static front-end build with no server.** There is
no backend, database or email API wired up (that's the RFQ sheet's
F20–F22, a backend integration step). On submit, the form:

1. Validates every field client-side with inline error messages.
2. Saves a local copy to `localStorage` (`sse_rfq_submissions`) so nothing
   is lost if you want to inspect test submissions.
3. Opens the visitor's email client via a pre-filled `mailto:` link
   addressed to `COMPANY.email`, then shows the Thank You page.

To make this fully automated (server-side delivery, spam filtering,
CRM/email integration, retries), connect a form backend (e.g. a serverless
function, Formspree, or your CRM's API) in `handleSubmit()`.

## Design tokens (from the Design sheet)

- Palette: charcoal `#202421`, ivory `#F7F5EF`, forest `#284D3C`, brass
  `#AF9560` — see `tailwind.config.js`.
- Type: Cormorant Garamond (display) + Inter (body), loaded from Google
  Fonts for preview — **swap to self-hosted woff2 files** before launch,
  per the Design sheet's licence note.
- Layout: 1200px max content width, desktop designed near 1440px, mobile
  near 390px.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Before you launch — placeholders to replace

- **Contact details** in `src/data/site.js` (`COMPANY` object) — email,
  phone/WhatsApp, address are realistic placeholders, marked
  `UPDATE BEFORE LAUNCH`.
- **Photography** — only `hero-new3.png`, `coconut6.jpg`, `hero2.png` and
  `coconut8.png` from your uploaded assets are used across the site.
  Swap in approved product/factory photography (Assets sheet A02–A09) once
  available.
- **Specification figures** — every number on product pages is framed as
  "Typical" / "Indicative, confirmed per batch" rather than a hard claim,
  per the brief's Claims policy. Replace with real, dated spec-sheet
  values once approved.
- **Fonts** — self-host the Cormorant Garamond / Inter woff2 files instead
  of the Google Fonts CDN link in `index.html`, per the Design sheet.
- **RFQ delivery** — see "The RFQ form" above.

## Folder structure

```
src/
  data/
    site.js        Company info, nav links, FAQ, ordering steps
    products.js     Product catalogue (specs, packaging, FAQs)
  components/
    layout/         Header, Footer
    Breadcrumbs.jsx, PageHero.jsx, FaqAccordion.jsx, RfqForm.jsx
    Logo.jsx, SealBadge.jsx, SectionHeading.jsx, FloatingContact.jsx
  pages/
    Home.jsx        All homepage sections in a single file
    Products.jsx, ProductDetail.jsx, Quality.jsx, Packaging.jsx,
    ExportOrdering.jsx, About.jsx, RequestQuote.jsx, FAQ.jsx,
    Privacy.jsx, Terms.jsx, ThankYou.jsx, Guides.jsx, NotFound.jsx
  styles/
    index.css
  App.jsx
  main.jsx
```
