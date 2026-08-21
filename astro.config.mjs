import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://wix-site-host.com',
  integrations: [react(), sitemap()],
  security: { checkOrigin: false },
  image: { domains: ['://wixstatic.com'] },
  output: 'server'
});