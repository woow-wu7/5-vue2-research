import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule from './modules/login'
import ElUi from './modules/el-ui'

Vue.use(Vuex)

const cancelFns: any[] = []

export default new Vuex.Store({
  state: {
    cancelFns
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LoginModule,
    ElUi,
  }
})
