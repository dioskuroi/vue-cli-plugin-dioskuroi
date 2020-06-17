import * as types from './mutation-types'

export default {
  [types.SET_TOKEN](state, token) {
    state.token = token
  },
  [types.SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  }
}