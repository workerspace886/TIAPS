# TIAPS — Website Structure Preview

Static HTML and Tailwind pages that show how the TIAPS website will look. They follow the
approved **TIAPS Design Direction Proposal**. No build step: double-click `index.html` to
open it (an internet connection is needed for the Tailwind CDN and Google Fonts).

## Why HTML and Tailwind

Plain HTML and Tailwind CSS are used here **only for this preview**. The goal is to show
the layout, styling and page structure quickly, without a build step. The final website
will be built on the technology stack set out in the Design Direction Proposal:

| | Final implementation |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Content source | Typed JSON now, swappable for a headless CMS/API later |
| Hosting | Vercel (free tier) |
| Deployment | Git-driven, auto-redeploy on push |
| Fonts | Manrope + Inter, self-hosted |

The colours, typography, components and page layouts in this preview carry over directly
to that build.

## Content policy

This preview contains no proprietary material. All names, reports, products, pricing,
statistics and descriptions are placeholders:

- Text in `[square brackets]` is placeholder copy.
- Cards carry a dashed **Placeholder** tag.
- A ribbon at the top of every page states that the content is placeholder.
- Every page is marked `noindex`.

Approved copy used verbatim from the design mockups: the hero headline, the four
"What we do" pillar descriptions, "We don't simply sell AI. We solve real business
problems.", "Know what's coming next.", and the "Explore Intelligence" /
"See AI Solutions" buttons.

## Pages

| File | Page |
|---|---|
| `index.html` | Home, in the approved wireframe's section order |
| `intelligence.html` / `intelligence-report.html` | Intelligence listing (featured item + category filter) / single-report template |
| `products.html` / `product.html` | Products listing / single-product template |
| `ai-solutions.html` / `solution.html` | AI Solutions (Problem → Solution → Benefits) / single-solution template |
| `newsletter.html`, `resources.html`, `about.html`, `contact.html` | Remaining sections |

## Where things live

- **Colours and fonts:** the `<style type="text/tailwindcss">` block at the top of each
  page. It is identical on every page: Ink `#1A1A18`, Warm White `#FAF9F5`, Cobalt
  `#34518C`, Accent Tint `#EBF0F8`, Muted `#6B6B63`, Surface `#FFFFFF`, Border `#E4E1D8`.
  Headings use Manrope; body text uses Inter.
- **Nav, footer, preview ribbon, brand name, contact details:** `assets/site.js`, which is
  shared by every page. Edit the `SITE` object at the top of it.
- **Cover images:** abstract patterns drawn by `site.js` into `<div data-cover="lines|dots|curve">`.
  They are decorative only. Replace them with real images later.
- **Forms:** newsletter and contact forms show a confirmation message but send nothing.
