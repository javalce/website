import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      subsets: ['latin'],
      cssVariable: '--font-sans',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      subsets: ['latin'],
      cssVariable: '--font-mono',
    },
  ],
});
