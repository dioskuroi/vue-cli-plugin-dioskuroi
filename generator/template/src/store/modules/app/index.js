import state from './state.js'
import mutations from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
