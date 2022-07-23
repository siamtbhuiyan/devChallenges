import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      strategies: "generateSW", // default
      includeAssets: ["images/*.png"],
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "assets/*.png"],
      },
      manifest: {
        name: "Country Quiz",
        short_name: "Country Quiz",
        start_url: "/?home=true",
        icons: [
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "#000000",
        background_color: "#FFFFFF",
        display: "fullscreen",
        orientation: "portrait",
      },
    }),
  ],
});
