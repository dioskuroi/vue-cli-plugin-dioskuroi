<template>
  <section class="error-container" functional>
    <img src="../assets/error.png" />
    <el-row class="link-container">
      <router-link class="link" :to="{ path: '/' }">返回首页</router-link>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style lang="stylus">
  .error-container
    background #e9f0f5
    text-align center
    height 100%

    .link-container
      text-align center
      margin-top 30px

    .link
      color #409EFF
</style>