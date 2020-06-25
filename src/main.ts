import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1. 全局引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';


// 2. 按需引入 element-ui
// import './config/element-ui-splitChunk-config'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
