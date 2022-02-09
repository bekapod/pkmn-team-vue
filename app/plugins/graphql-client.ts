import { print } from "graphql/language/printer";
import { defineNuxtPlugin } from "#app";
import { Requester } from "~~/generated";

export default defineNuxtPlugin(_nuxtApp => {
  const config = useRuntimeConfig();

  const client: Requester = (document, variables, options) => {
    return fetch(config.graphQLEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      body: JSON.stringify({
        //query: print(document),
        query: document,
        variables,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          throw res.errors;
        }

        return res.data;
      });
  };

  return {
    provide: {
      graphQLClient: client,
    },
  };
});
