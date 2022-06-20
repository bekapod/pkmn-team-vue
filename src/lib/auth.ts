import { createAuth0 } from "@auth0/auth0-vue";

export const authInstance = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  redirect_uri: window.location.origin,
  useRefreshTokens: true,
});
