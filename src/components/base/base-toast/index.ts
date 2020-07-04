import Vue from 'vue'
import BaseToast from './BaseToast.vue'


const loadToast = (params: any) => {
  const ToastConstructor = Vue.extend(BaseToast)
  const toastInstance = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return params
    }
  })
  document.body.appendChild(toastInstance.$el)
}

// vue插件
// Vue.use()的参数可以是一个 函数 或者 具有install方法的对象
  // 参数是一个函数：自身会做为install函数
  // 参数是一个对象：必须就有install方法
export default {
  install(Vue: any) {
    Vue.prototype.$BaseToast = loadToast
  }
}