import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

const baseURL = ''
const headers = {
  'Content-Type': 'application/json',
  //  'Access-Control-Allow-Origin': '*' 
}

const axiosInstance = axios.create({
  baseURL,
  headers,
  timeout: 9000,
})


axiosInstance.interceptors.request.use(config => {
  config.headers.token = 'token'

  config.cancelToken = new axios.CancelToken(cancel => {
    store.state.cancelFns.push(cancel)
  })
  // 用于路由跳转，取消之前的请求
  // 还需要在 router.beforeEach()钩子中执行canel函数
  return config
}, error => {
  return Promise.reject(error);
})


axiosInstance.interceptors.response.use(response => {
  const { config, status, statusText } = response
  if (status === 200) {
    if (config && config.method === 'post') {
      Message({
        message: statusText,
        type: 'success'
      });
    }
  } else {
    Message({
      message: '请求失败',
      type: 'error'
    });
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default axiosInstance