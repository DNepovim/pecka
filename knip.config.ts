import type { KnipConfig } from 'knip'

export default {
  astro: {
    config: ['astro.config.{js,cjs,mjs,ts,mts}'],
    entry: ['src/pages/**/*.{astro,ts}', '!src/pages/**/_*', '!src/pages/**/_*/**'],
    project: ['src/**/*'],
  },
  // `sharp` is the image backend `astro:assets` loads at build time; nothing
  // imports it directly. `eslint-plugin-jsx-a11y` is pulled in through
  // `eslint-plugin-astro`'s flat config.
  ignoreDependencies: ['sharp', 'eslint-plugin-jsx-a11y'],
} satisfies KnipConfig
