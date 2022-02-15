import { defineNuxtPlugin } from "#app";
import { client } from "../lib/graphql-client";

export default defineNuxtPlugin(_nuxtApp => {
  return {
    provide: {
      graphQLClient: client,
    },
  };
});
