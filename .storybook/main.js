const path = require("path");

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
    };
    return config;
  },
};
