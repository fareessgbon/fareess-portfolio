import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://fareess.ca',
  integrations: [mdx()],
  devToolbar: { enabled: false },
  server: { port: Number(process.env.PORT) || 4321 },
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});
