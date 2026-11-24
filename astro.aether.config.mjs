import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Laman Project Aether (aether.isetelsolutions.my). Kod dalam aether/, hasil dalam aether-public/.
// AETHER_BASE dan AETHER_OUT hanya untuk pratonton di bawah laluan lain.
export default defineConfig({
  site: 'https://aether.isetelsolutions.my',
  base: process.env.AETHER_BASE || '/',
  srcDir: './aether/src',
  publicDir: './aether/static',
  outDir: process.env.AETHER_OUT || './aether-public',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
