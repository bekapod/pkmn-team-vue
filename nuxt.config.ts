import { defineNuxtConfig } from "nuxt3";
import { resolve } from "path";
import svgLoader from "vite-svg-loader";
import { publicRuntimeConfig } from "./app/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: "app",
  nitro: {
    preset: resolve(__dirname, "preset"),
  },
  modules: ["@formkit/nuxt"],
  buildModules: ["@pinia/nuxt"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    plugins: [
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
  },
  render: {
    csp: true,
  },
  publicRuntimeConfig,
  css: ["@/assets/css/main.css"],
  meta: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        media: "print",
        onload: "this.media='all'",
      },
    ],
  },
});
