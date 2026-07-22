# SEO Plan — Areeb Usman Landing Page

## Context

This is a single-page Next.js 16 (App Router) site pitching Areeb Usman's freelance WordPress development services. It's used primarily for **cold outreach** — links sent directly to prospects via email, WhatsApp, and LinkedIn — rather than relied on for organic search traffic as the primary channel.

Before this plan, the site had no SEO infrastructure: only a bare `title`/`description` in `layout.tsx`, no Open Graph or Twitter card tags (pasted links showed no preview image), no `metadataBase`/canonical URL, no `robots.txt`/`sitemap.xml`, and no structured data. This despite strong underlying content: real named case studies, a clean single-`<h1>` heading hierarchy, and `next/image` used throughout. Favicons (`favicon.ico`, `icon.svg`, `apple-icon.png`) were already correctly wired via Next.js's `app/`-folder file convention and needed no changes.

## Decisions

- **Domain**: not chosen yet. Centralized as `siteConfig.siteUrl` in `src/lib/site-config.ts` — a one-line swap once the real domain is registered. Every absolute URL in the app (metadataBase, canonical, OG image URLs, sitemap `loc`, robots sitemap ref, JSON-LD `@id`/`url` fields) derives from this single constant.
- **Indexing**: allowed. The page can still pick up branded searches ("Areeb Usman WordPress developer") at no cost, so `robots.ts` allows all crawlers rather than blocking indexing.
- **OG image**: generated programmatically via Next.js's `ImageResponse` API (`src/app/opengraph-image.tsx`), branded with the site's real Tailwind color tokens, instead of an externally designed asset.

## What was implemented

1. **`src/lib/site-config.ts`** — added `siteUrl` (placeholder domain, swap when real domain is chosen), `title`, `description` (hoisted out of `layout.tsx` so metadata and JSON-LD share one source), and a hand-curated `keywords` list drawn from real service/niche terms.
2. **`src/app/layout.tsx`** — full `Metadata` rewrite: `metadataBase`, title template, description, keywords, authors, `alternates.canonical`, `openGraph`, `twitter` (summary_large_image), and `robots` (index/follow, with googleBot large-image-preview allowed). Added a separate `viewport` export with `themeColor` matching `--color-ink`. Deliberately did **not** set `openGraph.images`/`twitter.images` manually — the file-convention OG image (below) supplies those automatically, avoiding duplicate/conflicting tags.
3. **`src/app/opengraph-image.tsx`** — a 1200×630 branded image generated with `next/og`'s `ImageResponse`, using the real Hero headline and the site's actual brand colors (`--color-ink`, `--color-signal`, `--color-on-signal`). No separate `twitter-image.tsx` — Next.js falls back to the OG image for Twitter cards automatically.
4. **`src/app/robots.ts`** — allow-all rule, pointing to the sitemap.
5. **`src/app/sitemap.ts`** — single homepage entry. In-page anchors (`#work`, `#about`, etc.) and inline case-study cards are not separate crawlable routes, so they're intentionally excluded.
6. **JSON-LD in `src/app/page.tsx`** — a `@graph` combining `ProfessionalService` (with `makesOffer` mapped from real `services.ts` data), `Person`, and `WebSite`. Deliberately excludes `Review`/`AggregateRating` (no numeric ratings exist in `testimonials.ts` — fabricating them would violate Google's structured-data policy) and `sameAs` (no social profile URLs exist in the codebase yet).
7. **Housekeeping (not strictly SEO)** — skipped `manifest.ts` (no ranking benefit for a one-off pitch page). Flagged, but did not delete, unused assets: `public/clients/*.jpg` (superseded by `public/case-studies/*.png`) and the default `create-next-app` boilerplate SVGs — both have zero references in `src/` and are candidates for a separate cleanup pass.

## Follow-ups

- **Swap `siteConfig.siteUrl`** to the real production domain once it's registered — this is the only place it needs to change.
- Once live on a public domain, verify social previews with the Twitter Card Validator and Facebook Sharing Debugger (can't be fully verified on localhost).
- Consider adding `sameAs` social profile links to the JSON-LD once real profile URLs exist.
- Optional cleanup: delete the unreferenced `public/clients/*.jpg` and boilerplate SVGs flagged above.
