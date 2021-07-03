import { getToken } from '@/utils/auth'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.toString() // api的base_url
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  (response) => {
    if (response.headers !== 'application/octet-stream') {
      return response.data
    } else {
      /** application/octet-stream
       * code为非200是抛错 可结合自己业务进行修改
       */
      const res = response.data
      if (res.code !== 200) {
        ElMessage({
          message: res.message,
          type: 'error',
          duration: 3 * 1000
        })
        // 401:未登录;
        if (res.code === 401) {
          ElMessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('FedLogOut').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })
        }
        return Promise.reject('error')
      } else {
        return response.data
      }
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
