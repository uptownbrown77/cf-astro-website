import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import wix from '@wix/astro';
import wixPages from '@wix/astro-pages';
import react from '@astrojs/react';
import cloudProviderFetchAdapter from '@wix/cloud-provider-fetch-adapter';

const isBuild = process.argv[2] === 'build';

export default defineConfig({
  site: 'https://mpihj3-custos-fid-6b052a81-bsbrown77.wix-site-host.com',
  integrations: [wix(), wixPages(), react(), sitemap()],
  security: { checkOrigin: false },
  ...(isBuild && { adapter: cloudProviderFetchAdapter({}) }),
  image: { domains: ['static.wixstatic.com'] },
  output: 'server'
});
