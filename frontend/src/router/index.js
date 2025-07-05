import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import { useAuthStore } from "../store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.path === "/home" && !auth.isAuthenticated) {
    next("/login");
  } else if (to.path === "/login" && auth.isAuthenticated) {
    next("/home");
  } else {
    next();
  }
});

export default router;
