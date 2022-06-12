import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        default: () => import("@/views/Index/IndexView.vue"),
        PageTitle: () => import("@/views/Index/IndexPageTitle.vue"),
        HeaderAction: () => import("@/components/TeamCreator.vue"),
      },
    },
    {
      path: "/team/:id",
      name: "team",
      components: {
        default: () => import("@/views/Team/TeamView.vue"),
        PageTitle: () => import("@/views/Team/TeamPageTitle.vue"),
        HeaderAction: () => import("@/views/Team/TeamActions.vue"),
      },
      props: true,
    },
  ],
  strict: true,
});

export default router;
