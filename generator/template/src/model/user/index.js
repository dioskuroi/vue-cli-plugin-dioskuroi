import { login, logout } from '../../api/user'
import { createNamespacedHelpers } from 'vuex'
import { errorHandler, single } from '../../utils/decorator'

const { mapActions } = createNamespacedHelpers('app')
const { saveUserData, removeUserData } = mapActions(['saveUserData', 'removeUserData'])

@single
class UserModel {
  userInfo = null

  @errorHandler()
  async login (param) {
    const result = await login(param)
    const { userInfo, token } = result
    this.userInfo = userInfo
    saveUserData({ userInfo, token })
  }

  @errorHandler()
  async logout (param) {
    await logout(param)
    this.userInfo = null
    removeUserData()
    return true
  }
}

export default UserModel
