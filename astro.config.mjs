// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build
export default defineConfig({
  // OBLIGATORIO: Desbloquea las rutas de servidor (APIs) tanto en local como en producción
  output: 'server',

  // Configuración del adaptador para producción
  adapter: vercel(),

  // Dominio canónico de Apex Web Studios
  site: 'https://apexwebstudios.com',

  // i18n nativo bilingüe original
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  vite: {
    plugins: [tailwindcss()],
    // Corrige el conflicto de compilación local en entornos Windows
    ssr: {
      noExternal: ['@tailwindcss/vite']
    }
  }
});
