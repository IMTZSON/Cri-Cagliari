import { z, defineCollection } from 'astro:content';

const notizieCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),   // Cambiato da titolo a title
    date: z.date(),      // Cambiato da data a date
    categoria: z.string().default('News'),
    estratto: z.string(),
    immagine: z.string().optional(),
    autore: z.string().default('Comitato di Cagliari'),
    bozza: z.boolean().default(false),
  }),
});

export const collections = {
  notizie: notizieCollection,
};