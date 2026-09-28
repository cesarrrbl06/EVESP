// src/config/site.ts — datos únicos del sitio. RELLENA los [CAMPOS] antes de publicar:
// el Aviso Legal (LSSI-CE, art. 10) exige identificar al titular de la web.
export const SITE = {
  name: 'EV España',
  url: 'https://evespana.es',
  email: 'evespanaaa@gmail.com',
  titular: 'Cesar Manuel Robalo Fariñas',
  nif: '60567749D',
  domicilio: 'España',
  registro: '', // Solo si eres sociedad: datos del Registro Mercantil
  actualizado: '28 de septiembre de 2026',
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? 'https://formspree.io/f/TU_ID',
};

export const NAV = [
  { href: '/coches/', label: 'Coches' },
  { href: '/comparativas/', label: 'Comparativas' },
  { href: '/guias/', label: 'Guías' },
  { href: '/calculadoras/', label: 'Calculadoras' },
];
