import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "GetTask" */ "../views/Home.vue"),
  },
  {
    path: "*",
    name: "NoMatch",
    component: () =>
      import(/* webpackChunkName: "NoMatch" */ "../views/NoMatch.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
