---
name: code-guide
description: Coding style and conventions for the pecka Astro site — .astro components, React islands, Tailwind v4, images, and content. Consult when writing or reviewing code.
---

# Code Guide

Style reference for the pecka codebase (Astro 5 + Tailwind v4 + a few React 18
islands). Consult before writing or reviewing any code. ESLint and Prettier are
configured here, so most formatting is enforced — see the `check` skill.

---

## `.astro` first, React only where it earns it

Everything renders as `.astro` unless it needs client-side state or event
handling. There are exactly **three** React islands:

| Island                                | Directive        | Why it's React                         |
| ------------------------------------- | ---------------- | -------------------------------------- |
| `components/Navigation/Navigation.tsx` | `client:load`    | scroll-spy + hamburger drawer          |
| `components/Carousel/Carousel.tsx`     | `client:visible` | `react-responsive-carousel` swipe/state |
| `components/Gallery.tsx`               | `client:visible` | expand toggle + lightbox               |

Each island is mounted from a thin `.astro` wrapper (`Navigation.astro`,
`Pillars.astro`, `Team.astro`, `What.astro`) that does the server-side work —
above all resolving images — and passes plain serialisable props down. **Astro
cannot pass `ImageMetadata`, JSX elements or functions into an island**, so
images cross the boundary as `{ src, srcSet, width, height, alt }` (see
`utils/toCarouselImage.ts`).

Rich markup that has to live inside an island (the Pillars slide bodies) stays
in TSX, using the React mirrors in `components/Typography.tsx`. Those mirrors
and their `.astro` twins share class strings via
`components/typographyClasses.ts` and `components/linkClasses.ts` — if you touch
one, touch the constant, not both copies.

```astro
---
type Props = {
  id?: string
  class?: string
}

const { id, class: className } = Astro.props
---

<section id={id} class:list={['relative py-8', className]}>
  <slot />
</section>
```

- Compose classes with `class:list` (it drops falsy entries); there is no
  `clsx`/`cn` helper and none should be introduced.
- Arrow functions, `type` over `interface`, named exports.
- **Always import via the `@/` alias** — parent-relative imports (`../foo`) are
  an ESLint error. Sibling imports (`./Foo`) are fine.

---

## Styling (Tailwind v4)

Tokens live in `@theme` in `src/styles/global.css`; there is no
`tailwind.config.js`. Brand colours are `brand/yellow/blue/beige/red/clay/brown`
(`bg-brand-first`, `text-brown-first`, and yes, `bg-blue-thirdt` is a typo that
is now load-bearing). Fonts are `font-head` (Amatic SC) and `font-text`
(Montserrat), loaded from Google Fonts in `Layout.astro`.

Breakpoints are custom and rem-based: `sm 20rem, md 40rem, lg 60rem, xl 80rem,
2xl 100rem`. Media queries resolve rem against 16px even though `html` is 18px,
so `md` is 640px and `lg` is 960px — not 720/1080.

The only hand-written CSS is `global.css` (a `.container` override, `::selection`,
`.shape-outside`) and `src/styles/carousel.css`. Keep it that way — no CSS
modules, no CSS-in-JS.

---

## Images

- Section images go through **`components/Img.astro`**, which wraps
  `getImage()` and emits a plain `<img>`. Don't reach for `astro:assets`'
  `<Image>` directly: `Img.astro` reproduces the sizing behaviour the design was
  built against (see `utils/imageDimensions.ts` — EXIF-rotated photos must keep
  their *pre-rotation* box or the gallery mosaic changes shape).
- Gallery photos are collected with `import.meta.glob` in `What.astro` and
  **sorted by filename** — `Gallery.tsx` gives specific indices their own grid
  spans, so the order is load-bearing.
- SVGs are used as images, not inlined as components.
- `public/` holds only what must keep a stable URL: the OG image, icons and the
  web manifest.

---

## Content

All user-facing copy is Czech. Markup-shaped copy lives inline in
`src/sections/*.astro`; list-shaped copy (nav items, team members, articles,
testimonials) lives in `src/data/*.ts`. There is no CMS and no content
collection — don't add one without being asked.

Add a new page section as its own component in `src/sections/` and wire it into
`src/pages/index.astro` rather than inlining markup in the page.

---

## Links

Use `components/Link.astro` (or `Link.tsx` inside an island) for any navigable
link — it branches between an external `<a>` and an internal one via
`utils/isLinkExternal`. `Button.astro`/`Button.tsx` build on it. Don't hand-roll
anchors elsewhere.

---

## Checks

After every task run the **`check`** skill and fix what it flags. There is no
test framework — don't add test files or assume one exists.
