import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // in kBs
    outDir: "dist",
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.JPG",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.svg",
    ],
  },
});
