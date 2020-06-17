<template>
  <section class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginFormRules"
      label-position="left"
      label-width="0px"
      ref="loginForm">
      <h3 class="title">请输入您的信息</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="loginForm.account"
          auto-complete="off"
          placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码" />
      </el-form-item>
      <el-form-item style="width:100%; text-align:center;">
        <el-button type="primary" class="login-button" @click="submit" :loading="loading">登&nbsp;&nbsp;录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
import UserModel from '../model/user'
const userModel = UserModel.getInstance()
export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginFormRules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    async submit () {
      try {
        await this.$refs.loginForm.validate()
      } catch (error) {}
      const param = this.loginForm
      await userModel.login(param)
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
}
</script>

<style lang="stylus">
  .login-container
    padding 0
    margin 0
    width 100%
    height 100%
    background-image linear-gradient(to right , rgb(110, 90, 195), rgb(165, 90, 190))

  .login-form {
    position absolute
    width 22vw
    height 25vw
    border-radius 0.25vw
    box-sizing border-box
    z-index 101
    top 50%
    left 50%
    transform translate(-50%, -50%)
    padding 1vw 2vw 0
    background #fff
    box-shadow 0 0 1.25vw #cac6c6

    .title {
      margin 0.5vw auto 3vw auto
      text-align center
      color #aebac7
      font-size 1.1vw
      font-weight normal
    }
    .remember {
      margin-bottom 1vw
    }
    .el-form-item {
      margin-bottom 3vw
      height 2.5vw
    }
    .el-input {
      width 100%
      font-size 0.9vw
    }
    .el-input__inner {
      width 97%
      height 2.5vw
      line-height 2.5vw
      border-radius 0.4vw
    }

    .el-form-item__error {
      padding-top 0.2vw
    }

    .el-input.check-code {
      .el-input__inner {
        border-radius 0 0.4vw 0.4vw 0
      }
    }

    .el-checkbox__label {
      padding-left 0.5vw
      line-height 1.5
      font-size 0.9vw
    }

    .el-form-item__content {
      line-height 2vw
      font-size 0.9vw
    }

    .el-checkbox__input {
      line-height 0.9vw
      font-size 0.9vw
    }

    .el-input-group__prepend {
      background-color #fff
      border 1px solid #dfe2e5
      border-right none
      border-radius 0.4vw 0 0 0.4vw
    }
  }
  .login-button {
    width 100%
    height 2.7vw
    vertical-align top
    text-align center
    color #fff
    font-size 0.9vw
    line-height 2.7vw
    cursor pointer
    background #409EFF
    box-shadow 0 0 0.5vw #409EFF
    background-size auto 100%
    outline none
    padding 0
    border none
  }

</style>
