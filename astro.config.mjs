// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico (placeholder hasta tener el real): lo usan las
  // etiquetas hreflang y, más adelante, el sitemap.
  site: 'https://apexwebstudios.com',

  // i18n nativo: "/" = inglés (defecto, sin prefijo), "/es/" = español
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
