import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    // meta: { requiresTransition: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    // meta: { requiresTransition: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
