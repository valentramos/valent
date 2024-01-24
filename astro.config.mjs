import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown()],
  site: 'https://valentramos.com',
  // output: 'server',
  output: 'static',
  // base: 'valent-astro',
});