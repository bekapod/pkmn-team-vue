import { defineConfig } from "cypress";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: ".env.test" });

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    experimentalSessionAndOrigin: true,
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
      authDomain: process.env.VITE_AUTH0_DOMAIN,
    },
  },
});
