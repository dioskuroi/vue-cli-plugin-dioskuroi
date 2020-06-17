import localStore from '../../../utils/local-store'
import * as types from './mutation-types'

export const saveUserData = async ({ commit }, { token, userInfo }) => {
  try {
    commit(types.SET_TOKEN, token)
    commit(types.SET_USER_INFO, userInfo)
    return await localStore.merge({
      token,
      userInfo
    })
  } catch (error) {
    throw error
  }
}

export const removeUserData = async ({ commit }) => {
  try {
    commit(types.SET_TOKEN, null)
    commit(types.SET_USER_INFO, null)
    return await localStore.merge({
      token: null,
      userInfo: null
    })
  } catch (error) {
    throw error
  }
}
