import { print } from "graphql/language/printer";
import type { Requester } from "@/graphql";

class GraphQLError extends Error {
  errors: string[];

  constructor(message: string, errors: string[]) {
    super(message);
    this.name = "GraphQLError";
    this.errors = errors;
  }
}

export const client: Requester = (document, variables, options) => {
  return fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        throw new GraphQLError(
          "Error while making GraphQL request",
          res.errors
        );
      }

      return res.data;
    });
};
