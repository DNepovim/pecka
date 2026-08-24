// @ts-check
import { resolve } from 'path'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.kurzpecka.cz',
  output: 'static',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { '@': resolve('./src') } },
  },
})
