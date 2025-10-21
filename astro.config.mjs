// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4269
  },

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [svelte()]
});