import { defineNuxtConfig } from "nuxt3";
import { publicRuntimeConfig } from "./config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: "app",
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
