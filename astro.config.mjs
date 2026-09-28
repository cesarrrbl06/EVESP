// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: "site" es obligatorio para el sitemap y las URLs canónicas.
export default defineConfig({
  site: 'https://evespana.es',
  trailingSlash: 'always',          // URLs consistentes (/coches/) = canónicas limpias
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'always',    // CSS inline: elimina la petición que bloquea el render
  },
  integrations: [
    tailwind({ applyBaseStyles: false }), // los @tailwind se cargan en src/styles/global.css
    sitemap({ filter: (page) => !page.includes('/404') }), // genera /sitemap-index.xml
  ],
});
