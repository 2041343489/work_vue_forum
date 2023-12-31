import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: () => import('@/views/home/index.vue')
    },
    {
      path: "/write",
      component: () => import('@/views/writeArticle/index.vue')
    },
  ],
});

export default router;
