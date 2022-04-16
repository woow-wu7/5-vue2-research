import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { getRoutesModule } from "../utils";
import store from "../store";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/login.vue"),
  },
  {
    path: "/home",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/Layout.vue"),
    children: getRoutesModule(),
  },
  {
    path: "/keep-alive",
    name: "KeepAlive",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/KeepAlive.vue"),
    children: getRoutesModule(),
  },
  {
    path: "/directive",
    name: "Directive",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/Directive.vue"),
    children: getRoutesModule(),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(store.state.cancelFns, "store.state.cancelFns");
  store.state.cancelFns.forEach((cancel) => {
    console.log(cancel, "22266");
    cancel("取消");
  });
  store.state.cancelFns.length = 0;
  next();
});

export default router;
