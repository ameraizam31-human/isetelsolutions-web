import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Susun atur repo:
//   static/    fail yang disalin terus (pautan/, _headers, media/)
//   public/    hasil binaan, inilah yang dihidang Cloudflare Pages
//   functions/ Pages Functions (/api/chat)
export default defineConfig({
  site: 'https://isetelsolutions.my',
  publicDir: './static',
  outDir: './public',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
