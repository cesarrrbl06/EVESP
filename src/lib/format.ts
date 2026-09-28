// src/lib/format.ts — formato es-ES y cálculos compartidos
const eurFmt = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
export const eur = (n: number) => eurFmt.format(n);
export const num = (n: number, decimals = 0) =>
  new Intl.NumberFormat('es-ES', { maximumFractionDigits: decimals, minimumFractionDigits: decimals }).format(n);
/** Consumo real (kWh/100 km) = capacidad neta / autonomía real * 100 */
export const consumo100 = (kwh: number, km: number) => (kwh / km) * 100;
/** Diferencia porcentual entre WLTP y autonomía real */
export const gapWltp = (wltp: number, real: number) => Math.round((1 - real / wltp) * 100);
export const fechaLarga = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
