# EV España (evespana.es)

Astro 4 (SSG) + Tailwind 3 + TypeScript. Sin dependencias de pago. JS solo en la calculadora (vanilla) y el filtro de coches.

## Puesta en marcha
```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run check      # tipos (astro check)
```

## Despliegue
**Cloudflare Pages:** conecta el repo → Framework: Astro · Build command: `npm run build` · Output: `dist` · Node 18.20+ (variable `NODE_VERSION=20`). Añade `PUBLIC_ADSENSE_CLIENT` y `PUBLIC_FORM_ENDPOINT`. Las cabeceras están en `public/_headers`.
**Vercel:** importa el repo (detecta Astro). Las cabeceras están en `vercel.json`.

## Antes de publicar (imprescindible)
1. Rellena `src/config/site.ts` (titular, NIF, domicilio, correo). El Aviso legal lo exige (LSSI-CE art. 10).
2. Sustituye los coches y guías de ejemplo (`src/content/`) por **datos y textos propios verificados**.
3. Ajusta `metodologia.astro` a lo que realmente haces: no declares pruebas que no realizas.
4. Configura el formulario (Formspree/Web3Forms) en `PUBLIC_FORM_ENDPOINT` y comprueba que el correo existe.
5. Reemplaza el ID en `public/ads.txt` (`pub-0000000000000000`).
6. Añade `public/og-default.png` propio si quieres otra imagen social (hay una de ejemplo).

## Lista para AdSense
- Contenido original y útil: apunta a 15–20 guías de 800–1.500 palabras antes de solicitar la revisión.
- Páginas legales, contacto y metodología enlazadas en el footer (hecho). Sitio con dominio propio y HTTPS.
- Navegación sin enlaces rotos (todas las rutas del menú existen) y `sitemap-index.xml` en Search Console.
- **CMP:** para tráfico del EEE/Reino Unido, Google exige un banner de consentimiento certificado (TCF). Instálalo antes de servir anuncios; el script de AdSense de `Layout.astro` se carga tras la primera interacción, enlázalo a la aceptación del CMP.
- Usa `AdSlot.astro` con IDs de bloque reales; reserva altura para evitar CLS.

## Lighthouse
CSS inline, fuente Inter autoalojada (`@fontsource-variable/inter`, sin peticiones a Google Fonts), sin imágenes en el hero, HTML semántico y contrastes AA. Nota: el verde `#16A34A` no alcanza contraste AA como texto sobre blanco, por eso el texto usa `datos-oscuro` (#166534). Al activar anuncios, la puntuación de Performance bajará: mídela con y sin AdSense.
