// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.auroralabs.example/',

  // Bilingual routing: Spanish at the root (/), English under /en/.
  // Mirrors the convention used across the other Aurora/Turingh sites.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      // Single dark theme, matching the hero code panel
      // (see src/components/home/Hero.astro).
      theme: 'catppuccin-mocha',
    },
  },

  integrations: [sitemap()],
});