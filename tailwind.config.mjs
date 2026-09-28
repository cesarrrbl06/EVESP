// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primario: { DEFAULT: '#2563EB', oscuro: '#1D4ED8' }, // Azul primario
        carbon: '#111827',                                    // Negro carbón
        neutro: '#F3F4F6',                                    // Gris neutro
        // Verde datos. #16A34A sirve para fondos/barras; para TEXTO pequeño usa
        // "datos-oscuro" (contraste AA >= 4.5:1 sobre blanco, exigido por Lighthouse).
        datos: { DEFAULT: '#16A34A', oscuro: '#166534' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
