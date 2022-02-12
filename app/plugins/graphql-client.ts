import { print } from "graphql/language/printer";
import { defineNuxtPlugin } from "#app";
import { Requester } from "~~/generated";
import { Severity } from "@sentry/vue";

class GraphQLError extends Error {
  errors: string[];

  constructor(message: string, errors: string[]) {
    super(message);
    this.name = "GraphQLError";
    this.errors = errors;
  }
}

export default defineNuxtPlugin(_nuxtApp => {
  const config = useRuntimeConfig();

  const client: Requester = (document, variables, options) => {
    const { $sentry } = useNuxtApp();

    return fetch(config.graphQLEndpoint, {
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
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          throw new GraphQLError(
            "Error while making GraphQL request",
            res.errors,
          );
        }

        return res.data;
      })
      .catch(err => {
        $sentry.captureException(err, {
          level: Severity.Error,
          extra: {
            query: print(document),
            variables,
            errors: err.errors,
          },
        });
        throw err;
      });
  };

  return {
    provide: {
      graphQLClient: client,
    },
  };
});
