// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build
export default defineConfig({
  // OBLIGATORIO: Habilita el modo servidor para que las rutas API funcionen
  output: 'server',

  // Configuración del adaptador para producción (Vercel)
  adapter: vercel(),

  // Dominio canónico de tu agencia
  site: 'https://apexwebstudios.com',

  // Configuración bilingüe corregida para APIs
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // Evita que /api/send-email devuelva 404
      redirectToDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()],
    // Corrige conflictos de compilación en Windows
    ssr: {
      noExternal: ['@tailwindcss/vite']
    }
  }
});
