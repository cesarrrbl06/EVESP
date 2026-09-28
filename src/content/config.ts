// src/content/config.ts — Content Collections (Astro 4)
import { defineCollection, z } from 'astro:content';

const coches = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                       // "5 E-Tech 52 kWh"
    // slug: en Astro 4 es un campo reservado; se genera del nombre del archivo (byd-dolphin.md → /coches/byd-dolphin/)
    brand: z.string(),
    priceCash: z.number().positive(),        // € al contado (PVP con IVA)
    batteryKwh: z.number().positive(),       // capacidad NETA utilizable
    wltpKm: z.number().positive(),           // autonomía homologada
    realAutonomyKm: z.number().positive(),   // autonomía real medida/estimada (ver /metodologia/)
    chargingCostHome: z.number().positive(), // € por cada 100 km cargando en casa
    image: z.string().default('/img/coche-placeholder.svg'),
    description: z.string().max(160),        // también sirve de meta description
  }),
});

const guias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    category: z.enum(['Costes', 'Carga', 'Compra', 'Tecnología', 'Ahorro']),
    author: z.string().default('Redacción EV España'),
  }),
});

export const collections = { coches, guias };
