/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./e2e/tsconfig.json",
  },
  extends: ["plugin:cypress/recommended"],
  rules: {
    "testing-library/await-async-query": "off",
    "testing-library/prefer-screen-queries": "off",
    "@typescript-eslint/no-namespace": "off",
  },
};
