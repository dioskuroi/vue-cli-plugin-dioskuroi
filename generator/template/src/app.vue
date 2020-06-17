<template>
  <div id="app">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
  </div>
</template>

<style lang="stylus">
body
  font-family Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif
	font-size 14px
	-webkit-font-smoothing antialiased
</style>