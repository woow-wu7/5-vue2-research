const vuexRoute = [
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "Vuex" */ '../views/Vuex.vue'),
    selectName: 'vuex'
  }, 
]

export default vuexRoute