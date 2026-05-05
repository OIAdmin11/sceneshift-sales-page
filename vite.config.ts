import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // Mark CSS-in-JS / browser-only deps as noExternal where needed.
    // The SEO pages import only React + react-router-dom + the data layer,
    // so the default external behavior works.
    noExternal: [],
  },
});
