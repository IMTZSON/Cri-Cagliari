import { z, defineCollection } from 'astro:content';

// Definiamo lo schema (la struttura) che ogni notizia DEVE avere
const notizieCollection = defineCollection({
  type: 'content', // Usiamo 'content' per i file Markdown (.md)
  schema: z.object({
    titolo: z.string(),
    data: z.date(),
    categoria: z.string().default('News'),
    estratto: z.string(),
    immagine: z.string().optional(),
    autore: z.string().default('Comitato di Cagliari'),
    bozza: z.boolean().default(false), // Se true, non verrà pubblicata
  }),
});

// Esportiamo la collezione per renderla disponibile in tutto il sito
export const collections = {
  notizie: notizieCollection, // Senza apici se preferisci, oppure 'notizie'
};