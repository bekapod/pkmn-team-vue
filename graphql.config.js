/* eslint-env node */
require("dotenv/config");

/**
 * @type {import('graphql-config').IGraphQLConfig}
 */
module.exports = {
  projects: {
    default: {
      schema: "http://localhost:4000/graphql",
      documents: "**/*.graphql",
      extensions: {
        codegen: {
          generates: {
            "./src/graphql/index.ts": {
              plugins: [
                "@graphql-codegen/typescript",
                "@graphql-codegen/typescript-operations",
                "@graphql-codegen/typescript-generic-sdk",
              ],
            },
          },
        },
      },
    },
  },
};
