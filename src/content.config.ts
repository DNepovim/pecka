import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

/**
 * One entry per edition of the course. The entry id is the filename and
 * becomes the URL segment under `/rocniky/`.
 *
 * `colors` are the two shades that were the site's `brand.first` / `brand.second`
 * while that edition was running — every edition is named after a fruit and
 * repaints the whole site in its colours.
 */
const seasons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/seasons' }),
  schema: ({ image }) =>
    z.object({
      /** Adjective form, e.g. "Višňový". */
      title: z.string(),
      /** The fruit itself, e.g. "višeň" — used in prose. */
      fruit: z.string(),
      /** Human-readable period, e.g. "2023/24". */
      years: z.string(),
      /** Sort key, oldest edition first. */
      order: z.number(),
      /** One-line summary for the overview page. */
      claim: z.string(),
      logo: image(),
      colors: z.object({
        first: z.string(),
        second: z.string(),
      }),
      /** Public Google Photos album with the full set of photos. */
      photosUrl: z.url().optional(),
      gallery: z.array(image()).default([]),
      testimonials: z
        .array(
          z.object({
            name: z.string(),
            fullName: z.string(),
            text: z.string(),
          }),
        )
        .default([]),
      articles: z
        .array(
          z.object({
            title: z.string(),
            author: z.string(),
            text: z.string(),
            link: z.url(),
            label: z.string().optional(),
          }),
        )
        .default([]),
    }),
})

export const collections = { seasons }
