import { Message } from 'element-ui'

export const single = (Target) => {
  Target.instance = null
  Target.getInstance = function (...args) {
    if (!Target.instance) {
      Target.instance = new Target(...args)
    }
    return Target.instance
  }
}

export const errorHandler = (handler) => {
  return function (Target, name, descriptor) {
    const raw = descriptor.value
    descriptor.value = async function (...args) {
      try {
        const result = await raw.call(this, ...args)
        return result
      } catch (error) {
        const code = error?.data?.code
        if (code) {
          // 后端报错处理逻辑
          handler?.() ??
            Message({
              type: 'error',
              message: error.data.message
            })
        } else {
          // 自身 js 函数执行报错
          throw error
        }
      }
    }
    return descriptor
  }
}
