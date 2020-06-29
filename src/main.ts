import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseToast from './components/base/BaseToast'


// 自动化 - 全局引入基础组件 - Vue.component()
import './components/base/BaseButton/index.ts'


// 引入全局基础组件 - 全局button
// import './components/base/BaseButton.ts'

// 1. 全局引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

// 2. 按需引入 element-ui
// import './config/element-ui-splitChunk-config'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(BaseToast)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
