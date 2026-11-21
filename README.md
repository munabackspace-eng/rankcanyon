# RankCanyon

Marketing website for **RankCanyon**, a full-funnel Amazon growth agency (PPC, DSP, listing optimization, creative, account management).

It's a static-first site: no database, no auth, no API routes. Every page is prerendered at build time and can be served from a CDN.

## Tech stack

| Concern   | Choice                                                                                   |
| --------- | ---------------------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, **Cache Components** + Partial Prefetching)           |
| Language  | TypeScript (strict)                                                                      |
| Styling   | Tailwind CSS v4: design tokens in CSS variables, theme in `tailwind.config.ts`           |
| Fonts     | `next/font/google`: Plus Jakarta Sans (`"Plus Jakarta Sans", Roboto, Arial, sans-serif`) |
| Icons     | `lucide-react` (brand/social icons are inline SVGs)                                      |
| Motion    | `framer-motion` (`LazyMotion` + `m`, respects `prefers-reduced-motion`)                  |
| Utilities | `clsx` + `tailwind-merge` via `cn()`                                                     |
| Quality   | ESLint (flat config, `next/core-web-vitals` + TS) + Prettier (Tailwind class sorting)    |

## Getting started

Requirements: Node.js ≥ 20.9 and npm.

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

| Script                 | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack)             |
| `npm run build`        | Production build (prerenders every page)     |
| `npm run start`        | Serve the production build                   |
| `npm run lint`         | ESLint                                       |
| `npm run lint:fix`     | ESLint with auto-fix                         |
| `npm run format`       | Prettier write (also sorts Tailwind classes) |
| `npm run format:check` | Prettier check (for CI)                      |
| `npm run typecheck`    | `tsc --noEmit`                               |

> [!NOTE]
> `next/font/google` downloads fonts at build/dev time, so builds need network access to `fonts.googleapis.com`. For fully offline builds, switch to `next/font/local` and put the font files in `src/app/fonts/`.

## Environment variables

| Variable               | Purpose                                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (no trailing slash). Used for `metadataBase`, canonical URLs, Open Graph, sitemap and robots. Defaults to `https://www.rankcanyon.com`. |

## Project structure

```
rankcanyon/
├── public/
│   ├── favicon.ico, icon.svg       # Placeholder brand icons
│   ├── images/                     # case-studies/, blog/, team/ (empty placeholders)
│   └── og/                         # Static Open Graph images (optional overrides)
├── src/
│   ├── app/
│   │   ├── (marketing)/            # Route group for all public pages (doesn't affect URLs)
│   │   │   ├── layout.tsx          # <main> wrapper + `ensureStatic = "navigation"`
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── about/
│   │   │   ├── services/           # page.tsx (index) + [slug]/ (detail, loading.tsx)
│   │   │   ├── case-studies/
│   │   │   ├── blog/               # page.tsx (index) + [slug]/ (post, loading.tsx)
│   │   │   ├── contact/
│   │   │   ├── pricing/
│   │   │   └── privacy/, terms/
│   │   ├── layout.tsx              # Root layout: metadata, fonts, Header/Footer, JSON-LD
│   │   ├── not-found.tsx, error.tsx, loading.tsx
│   │   ├── sitemap.ts, robots.ts, manifest.ts
│   │   ├── opengraph-image.tsx     # Default OG image generated at build time
│   │   └── globals.css             # Tailwind import, design tokens, base styles
│   ├── components/
│   │   ├── layout/                 # Header (+ HeaderShell, DesktopNav, MobileNav), Footer, Container
│   │   ├── ui/                     # Primitives: Button, Section, SectionHeading, Badge, Card, IconBadge, StarRating
│   │   ├── sections/               # Page sections: Hero, TrustBar, ServicesGrid, Process, CaseStudiesTeaser, Testimonials, FaqSection, FinalCta
│   │   └── shared/                 # Cross-cutting: PageHero, Breadcrumbs, JsonLd, Reveal, MotionProvider, Logo, PostCard, ContactForm…
│   ├── data/                       # All static content (services, nav, case studies, blog posts, pricing…)
│   ├── hooks/                      # useScrolled, useLockBodyScroll
│   ├── lib/                        # utils (cn, formatDate), constants (site/contact), seo (metadata + JSON-LD)
│   └── types/                      # Shared content types
├── tailwind.config.ts              # Theme (colors → CSS vars, fonts, shadows, animations)
├── next.config.ts
└── eslint.config.mjs, .prettierrc.json, tsconfig.json
```

### Conventions

- **Server Components by default.** `"use client"` is only used for interactive leaves: `HeaderShell` (scroll state), `DesktopNav` (dropdown), `MobileNav`, `TestimonialCarousel`, `ContactForm`, `Reveal`, `MotionProvider`, and `error.tsx`. Client components get plain serializable props. They never import `src/data`, so content stays out of the JS bundle.
- **Content lives in `src/data/`.** Pages and sections read typed data (`src/types`). To add a service or blog post, add an entry to `services.ts` / `blog-posts.ts`. Routes, nav, footer and sitemap update automatically.
- **Composition over configuration.** Pages are assembled from `sections/*` components. Most sections take optional props, so you can override copy without forking.
- **One `<h1>` per page.** Rendered by `Hero`, `PageHero` or the blog post header; sections use `<h2>`/`<h3>`.
- **Imports** use the `@/` alias (→ `src/`).

## Rendering model

This project uses Next.js 16 **Cache Components** (`cacheComponents: true`):

- Every page is static, and `(marketing)/layout.tsx` exports `ensureStatic = "navigation"`. **The build fails** if a marketing page starts using request-time data (`cookies()`, `headers()`, uncached fetches, `new Date()` at render…). If you need dynamic data later, cache it with `"use cache"` or move it into a `<Suspense>` boundary outside this layout.
- Dynamic routes (`/services/[slug]`, `/blog/[slug]`) use `generateStaticParams()` to prerender every slug. Their `loading.tsx` gives client navigations an instant placeholder while the prerendered page loads.
- The copyright year and sitemap dates come from `SITE` constants instead of `new Date()`, so nothing depends on request time.

## SEO

- `metadataBase` and the title template (`%s | RankCanyon`) are set in `src/app/layout.tsx`.
- Every page exports unique metadata built with `buildMetadata()` (`src/lib/seo.ts`): title, description, canonical URL, Open Graph and Twitter card.
- Structured data (JSON-LD): Organization + WebSite (site-wide), BreadcrumbList (interior pages), Service, BlogPosting and FAQPage.
- `sitemap.xml`, `robots.txt` and `manifest.webmanifest` are generated from `src/app/*.ts`.
- The default OG image comes from `src/app/opengraph-image.tsx`. To override it for one page, pass `image: "/og/your-image.png"` to `buildMetadata()`.
- Semantic landmarks, a skip link, a logical heading hierarchy, ARIA on interactive widgets, and keyboard support (Escape closes menus, visible focus rings).

## Performance notes

- The hero headline is server-rendered with no entrance animation so text paints immediately, and hero showcase cards use `next/image` with responsive `sizes` and zero CLS.
- `framer-motion` is loaded through `LazyMotion` with the small `domAnimation` feature set. Scroll reveals only run below the fold.
- The FAQ uses native `<details>`/`<summary>` (zero JS).
- `next/image` is configured for AVIF/WebP. `PostCover` already switches to `next/image` once a post has a `coverImage`.

## Rebranding checklist

1. **Colors:** edit the CSS variables in `src/app/globals.css` (`--navy-*`, `--brand-*`, semantic tokens). Class names stay the same.
2. **Fonts:** swap the `next/font` import in `src/app/layout.tsx` (keep the `--font-sans` variable).
3. **Logo:** replace `src/components/shared/Logo.tsx`, `public/icon.svg` and `public/favicon.ico`.
4. **Copy and contact details:** `src/lib/constants.ts` and the files in `src/data/`.
5. **Imagery:** add assets under `public/images/` and render them with `next/image`.

## Not included yet (by design)

- **Form submission.** `ContactForm` validates on the client and shows a success state, but it doesn't send anything. To make it live, wire it to a Server Action or an email provider.
- No CMS, database, authentication or analytics. Add them when needed.
# rankcanyon
