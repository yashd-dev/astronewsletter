import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";
import partytown from "@astrojs/partytown";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    astroImageTools,
    partytown(),
    sanity({
      projectId: "cql3n56o",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
  ],
});
