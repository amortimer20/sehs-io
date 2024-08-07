import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false
  },
  integrations: [react()],
  site: 'https://sehs.io'
});