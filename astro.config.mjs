import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output: Vercel serves it as-is, no adapter needed.
// When you get a custom domain, add:  site: 'https://your-domain.dev'
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
