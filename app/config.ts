export const publicRuntimeConfig = {
  graphQLEndpoint:
    process.env.GRAPHQL_ENDPOINT ?? "http://localhost:4000/graphql",
  cloudinaryBasePath:
    "https://res.cloudinary.com/difh5qveq/image/upload/f_auto/v1644257162/",
  sentryDsn: process.env.SENTRY_DSN,
  sentryTracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE,
  sentryEnableDebug: process.env.SENTRY_ENABLE_DEBUG,
  environment: process.env.ENVIRONMENT,
};
