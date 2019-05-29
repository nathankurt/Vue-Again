import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      //meta: { title: "Nate Kurt" }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      //meta: { title: "About" }
    },
    {
      path: "/spartahack",
      name: "spartahack",
      //meta: { title: "SpartaHack" },
      component: () => import("./views/SpartaHack.vue")
    },
    {
      path: "/protips",
      name: "protips",
      component: () => import("./views/pro-tips.vue"),
      //meta: { title: "Pro-Tips" }
    },
    {
      path: "/github",
      name: "github",
      meta: { title: "Nate's GitHub" },
      //component: () => import("./views/GitHub.vue")
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   next();
// });

export default router;
