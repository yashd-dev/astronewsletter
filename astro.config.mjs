import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";
import partytown from "@astrojs/partytown";
import sanity from "astro-sanity";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://newsletter.yashd.tech",
  prefetch: {
    prefetchAll: true,
  },
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
    sitemap(),
    compress(),
  ],
});
