import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@components/*": "src/components/*",
        "@layouts/*": "src/layouts/*",
        "@lib/*": "src/lib/*",
        "@pages/*": "src/pages/*"
      }
    }
  },
  output: "server",
  adapter: vercel()
});