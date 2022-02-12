export {};

declare global {
  const SENTRY_DSN: string;
  const SENTRY_ENABLE_DEBUG: boolean;
  const SENTRY_ENVIRONMENT: string;
  const SENTRY_CLIENT_ID: string;
  const SENTRY_CLIENT_SECRET: string;
}
