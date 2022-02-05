module.exports = {
  stories: ["../app/**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
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
};
