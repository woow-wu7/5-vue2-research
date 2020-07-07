import axios from 'axios'


const baseURL = 'http://p.3.cn'
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
  return config
}, error => {
  return Promise.reject(error);
})


axiosInstance.interceptors.response.use(response => {
  return response
  console.log(response, 'response')
}, error => {
  return Promise.reject(error)
})

export default axiosInstance