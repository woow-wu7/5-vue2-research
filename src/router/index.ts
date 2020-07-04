import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getRoutesModule } from '../utils'

Vue.use(VueRouter)



export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout.vue'),
    children: getRoutesModule()
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
