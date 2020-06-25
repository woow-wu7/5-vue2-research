const vueRouterRoute = [
  {
    path: '/vue-router',
    name: 'VueRouter',
    component: () => import(/* webpackChunkName: "VueRouter" */ '../views/VueRouter.vue'),
    selectName: 'vue路由'
  }, 
]

export default vueRouterRoute