import axios from 'axios'
import { Message } from 'element-ui'
import { code } from '../config'
// 设置全局axios默认值
axios.defaults.timeout = 2400000 // 6000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 创建一个axios实例
const instance = axios.create()

export function initInterceptors (router, store) {
  const errorHandler = {
    [code.ERR_OK] (response) {
      console.log(response)
    },
    [code.ERR_AUTH] () {
      Message({
        message: '登录状态过期或被他人异地登录，请重新登录',
        type: 'error'
      })
      router.replace('/login')
    },
    default () {
      router.push('/error')
    }
  }

  // request拦截器
  instance.interceptors.request.use(
    config => {
      // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
      const { token } = store.state.app
      if (token) {
        config.headers.Authorization = `${token}`
      }
      // 解决 IE 默认缓存 GET 请求
      if (config.method === 'get') {
        if (config.params) {
          config.params.timeStamp = Date.now()
        } else {
          config.params = { timeStamp: Date.now() }
        }
      }

      return config
    },
    err => {
      return Promise.reject(err)
    }
  )

  // respone拦截器
  instance.interceptors.response.use(
    response => {
      // json 格式直接返回 data 中的数据
      if (response.headers['content-type'].includes('application/json')) {
        if (response.data.code === code.ERR_OK) {
          return { ...response.data, headers: response.headers }
        } else {
          return Promise.reject(response)
        }
      } else {
        return response
      }
    },
    ({ response }) => {
      // 默认除了2XX之外的都是错误的，就会走这里
      if (response) {
        if (location.href.includes('/login')) return Promise.reject(response)

        errorHandler[response.status]?.() ?? errorHandler.default()
      }
      return Promise.reject(response)
    }
  )
}

export default instance
