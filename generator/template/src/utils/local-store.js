import localforage from 'localforage'
import { isObject } from './validate'

const prototype = Object.getPrototypeOf(localforage)

prototype.merge = async (data) => {
  if (!isObject(data)) {
    throw new TypeError('param 0 must be an object')
  }
  const promises = Object.keys(data).map(key => prototype.setItem(key, data[key]))
  return Promise.all(promises)
}

const localStore = localforage.createInstance({
  name: 'app'
})

export default localStore