# TIAPS website (Next.js)

The TIAPS website, built with Next.js (App Router), TypeScript and Tailwind CSS v4, using
the Phase 9 **"Alabaster & Aged Brass"** design language. It replaces the static HTML
preview in the repository root. The preview is kept as-is for reference.

## Run it locally

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
```

## Where things live

| What | Where |
|---|---|
| Design tokens (colours, fonts, fluid type scale, shadow) | `app/globals.css`, `@theme` block |
| Fonts (Cormorant Garamond, Plus Jakarta Sans, JetBrains Mono) | `app/layout.tsx`, via `next/font` (self-hosted at build) |
| Nav, brand name, contact details, "What we do" pillars | `lib/site.ts` |
| Placeholder content (reports, products, solutions, resources) | `lib/content.ts` (typed; swap for a CMS/API later) |
| Header, footer | `components/Header.tsx`, `components/Footer.tsx` |
| Hero, pill badge, section tag, panels | `components/ui.tsx` |
| Feature grid and cards | `components/cards.tsx` |
| Forms and the Intelligence category filter | `components/forms.tsx` |

## Design tokens

| Token | Value | Use |
|---|---|---|
| `bone` | `#F7F6F0` | Core background |
| `surface` | `#FFFFFF` | Cards, with `shadow-soft` (`0 8px 30px rgb(0 0 0 / 0.02)`) |
| `ink` | `#141412` | Primary text |
| `taupe` | `#78766D` | Secondary text, metadata |
| `forest` | `#162B22` | Primary buttons, high-impact panels |
| `brass` | `#A38A52` | Borders, badges, dot indicators |
| `line` | `#EAE7DF` | Grid dividers, card borders |

Headings use `font-serif` (Cormorant Garamond, light weight with selective italics).
Body and UI use `font-sans` (Plus Jakarta Sans). Section tags such as `01 // SIGNAL` use
`font-mono`. Headline sizes (`text-display`, `text-headline`, `text-title`) are fluid
`clamp()` values that scale down on mobile.

## Layout rules (Phase 9 §2.2)

Page **structure** follows Rejoice's *Front End Sample 2* and *Sample 3* (centred hero with a
metrics bar, editorial feature grid, intelligence "insight" cards, opportunity cards, a
two-column AI section with a preview panel, a centred newsletter panel). Their **styling**
is not used: colours and fonts come only from the Phase 9 tokens below.

- **Hero** (`PageHero`): pill badge with brass dots, light serif headline, `pt-32 pb-24`.
- **Editorial feature grid** (`FeatureGrid`, `.module`): bone modules, fine `line` borders,
  monospaced tags (`01 // SIGNAL`, `02 // ARTIFACT`, `03 // EXECUTION`, `04 // LIBRARY`),
  brass border on hover.
- **Touch targets**: buttons, inputs, nav links, filters and footer links are at least
  48px (`min-h-12`) on mobile.

## Content policy

Everything in `[square brackets]` is placeholder copy. Every page is `noindex` (set in
`app/layout.tsx`) until launch, and the forms confirm on submit but send nothing.

## Deploying

Import the repo into Vercel and set **Root Directory** to `web`. Every push to `main`
then redeploys automatically.
