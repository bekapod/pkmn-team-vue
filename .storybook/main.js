const { mergeConfig } = require("vite");
const svgLoader = require("vite-svg-loader");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
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
      resolve: {
        alias: {
          ...(config.resolve.alias ?? {}),
          "@/components": path.resolve(__dirname, "../src/components"),
          "@/data": path.resolve(__dirname, "../src/data"),
          "@/formkit.config": path.resolve(
            __dirname,
            "../src/formkit.config.ts"
          ),
          "@/graphql": path.resolve(__dirname, "../src/graphql"),
          "@/lib": path.resolve(__dirname, "../src/lib"),
          "@/mocks/handlers": path.resolve(__dirname, "../src/mocks/handlers"),
          "@/stores": path.resolve(__dirname, "../src/stores"),
          ...[
            "sad",
            "search-alt",
            "happy-beaming",
            "meh-blank",
            "bell",
            "trash",
            "x",
            "menu",
            "pencil",
            "user-circle",
            "loading-alt",
            "check",
          ].reduce((icons, name) => {
            return {
              ...icons,
              [`@/assets/icons/${name}.svg`]: path.resolve(
                __dirname,
                `../src/assets/icons/${name}.svg`
              ),
            };
          }, {}),
        },
      },
    });
  },
};
