import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SystemType',
    component: () => import(/* webpackChunkName: "SystemType" */ '../views/SystemType.vue'),
    children: [
      {
        path: '/vue-router',
        name: 'VueRouter',
        component: () => import(/* webpackChunkName: "VueRouter" */ '../views/VueRouter.vue')
      }, {
        path: '/split-chunk',
        name: 'SplitChunk',
        component: () => import(/* webpackChunkName: "SplitChunk" */ '../views/SplitChunk.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
