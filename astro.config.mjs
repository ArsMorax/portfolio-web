// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://arsmorax.github.io",
  base: "/portfolio-web",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
