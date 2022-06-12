import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          "removeDimensions",
          "convertStyleToAttrs",
          {
            name: "convertColors",
            params: { currentColor: "rgba(0, 0, 0, 1)" },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup-test-env.ts"],
  },
});
