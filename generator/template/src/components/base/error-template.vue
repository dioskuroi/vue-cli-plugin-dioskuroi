<template>
  <section class="error-container">
    <img :src="imgSrc" />
    <el-row class="link-container">
      <router-link class="link" :to="{ path: '/' }">返回首页</router-link>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    type: String
  },
  data () {
    return {
      errorImg: require('../../assets/images/error.png'),
      notFoundImg: require('../../assets/images/404.png')
    }
  },
  computed: {
    imgSrc () {
      return this.type === 'error' ? this.errorImg : this.notFoundImg
    }
  }
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
