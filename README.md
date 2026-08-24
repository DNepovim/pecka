# Kurz Pecka

Website for **Pecka**, a course for youth workers in the Evangelical Church of
Czech Brethren (ČCE) — <https://www.kurzpecka.cz>.

Single page in Czech (`/`, plus a `/404`), built with [Astro](https://astro.build)
and Tailwind CSS v4, deployed as a static site on Vercel.

## Stack

- **Astro 5** — static output (`dist/`), `astro:assets` for image processing
- **Tailwind CSS v4** — via `@tailwindcss/vite`, design tokens in
  `src/styles/global.css` (`@theme`), no `tailwind.config.js`
- **React 18 islands** — only for the genuinely interactive parts: the
  carousel, the photo gallery + lightbox, and the navigation
- **pnpm** — the lockfile is `pnpm-lock.yaml`; don't use npm or yarn
- ESLint (flat config) + Prettier + knip, TypeScript strict

## Commands

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Dev server at <http://localhost:4321>                |
| `pnpm build`        | Static build into `dist/`                            |
| `pnpm preview`      | Serve the built site locally                         |
| `pnpm check`        | typecheck + lint + format check + knip               |
| `pnpm format:write` | Apply Prettier formatting                            |

## Layout

```
src/
├── components/       shared UI — .astro by default, .tsx only for islands
│   ├── Carousel/     react-responsive-carousel island (styles in src/styles/carousel.css)
│   ├── Navigation/   fixed header island + its .astro wrapper
│   ├── Gallery.tsx   photo grid + yet-another-react-lightbox island
│   └── Typography/   H2, H3, H4, P, Q, C, S
├── data/             copy that isn't markup: nav items, team, articles, testimonials
├── images/           processed at build time by astro:assets
├── layouts/          Layout.astro — <head>, fonts, Umami, meta tags
├── pages/            index.astro, 404.astro
├── sections/         the page sections, top to bottom
├── styles/           global.css (Tailwind + @theme tokens), carousel.css
└── utils/
public/               committed static assets (og image, icons, manifest)
```

All user-facing copy is Czech and lives inline in the section components or in
`src/data/` — there is no CMS or content collection.

## Deployment

Vercel, static. `vercel.json` carries the cache and security headers; the build
is `pnpm build` with `dist` as the output directory.
