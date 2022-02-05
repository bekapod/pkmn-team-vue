module.exports = {
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:testing-library/vue",
    "plugin:jest-dom/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "testing-library", "jest-dom"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        json: "always",
      },
    ],
    "vue/max-attributes-per-line": "off",
  },
  settings: {
    "import/parser": "@typescript-eslint/parser",
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
};
