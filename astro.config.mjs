// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Questa riga dice ad Astro di usare il plugin di Tailwind per Vite
  vite: {
    plugins: [tailwindcss()]
  }
});