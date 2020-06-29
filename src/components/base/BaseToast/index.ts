import Vue from 'vue'
import BaseToast from './BaseToast.vue'

interface CreateBaseToastParams {
    el: string;
    message: string;
    type: string;
    duration: number;
  }

const createBaseToast = ({el, message, type, duration}: CreateBaseToastParams) => {
    const ToastConstructor = Vue.extend(BaseToast)
    const toastInstance = new ToastConstructor({
        el: document.createElement(el),
        data() {
            return {
                message,
                type,
                isShow: true,
                isAnimate: true
            }
        }
    })
    document.body.appendChild(toastInstance.$el)

    setTimeout(() => {
        toastInstance.isShow = false
    }, duration)

    setTimeout(() => {
        toastInstance.isAnimate = false
    }, duration - 500)
}


const toastPlugin = {
    install() {
        Vue.prototype.$BaseToast = createBaseToast
    }
}
export default toastPlugin