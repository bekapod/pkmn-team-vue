require("dotenv/config");

module.exports = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: "**/*.graphql",
  extensions: {
    codegen: {
      generates: {
        "./generated.ts": {
          plugins: [
            "@graphql-codegen/typescript",
            "@graphql-codegen/typescript-operations",
            "@graphql-codegen/typescript-generic-sdk",
          ],
        },
      },
    },
  },
};
