import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pact-safety.org",
  vite: { plugins: [tailwindcss()] },
});
