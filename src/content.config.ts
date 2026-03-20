import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- IL NUOVO MOTORE DI RICERCA DI ASTRO 6

// Definiamo lo schema e DICIAMO AD ASTRO DOVE CERCARE I FILE
const notizieCollection = defineCollection({
  // Il "loader" dice ad Astro 6 di prendere tutti i file .md in quella cartella
  loader: glob({ pattern: "**/*.md", base: "./src/content/notizie" }),
  
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categoria: z.string().default('News'),
    estratto: z.string(),
    immagine: z.string().optional(),
    autore: z.string().default('Comitato di Cagliari'),
    bozza: z.boolean().default(false),
  }),
});

// Esportiamo la collezione per renderla disponibile in tutto il sito
export const collections = {
  notizie: notizieCollection,
};