export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      sentry: nuxtApp.ssrContext?.sentry,
    },
  };
});
