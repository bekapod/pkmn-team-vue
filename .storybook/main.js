const path = require("path");
const svgLoader = require("vite-svg-loader");

module.exports = {
  stories: ["../app/**/*.stories.ts"],
  staticDirs: ["../app/public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite",
  },
  addons: [
    "@storybook/addon-essentials",
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
  viteFinal(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@/data": path.resolve(__dirname, "../app/data"),
      "@/graphql": path.resolve(__dirname, "../app/graphql"),
      "@/lib": path.resolve(__dirname, "../app/lib"),
      "@/mocks/browser": path.resolve(__dirname, "../app/mocks/browser"),
      ...[
        "sad",
        "search-alt",
        "happy-beaming",
        "meh-blank",
        "bell",
        "trash",
        "x",
        "menu",
      ].reduce((icons, name) => {
        return {
          ...icons,
          [`@/assets/icons/${name}.svg?component`]: path.resolve(
            __dirname,
            `../app/assets/icons/${name}.svg`,
          ),
        };
      }, {}),
    };

    config.plugins = [
      ...config.plugins,
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
    ];
    return config;
  },
};
