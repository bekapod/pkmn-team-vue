/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:testing-library/vue",
    "plugin:jest-dom/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["testing-library", "jest-dom", "import"],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/schema-recommended",
    },
  ],
};
