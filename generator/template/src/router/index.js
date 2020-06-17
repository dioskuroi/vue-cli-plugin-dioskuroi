/*
 * @Author: xujun
 * @Date: 2020-06-17 15:13:41
 * @LastEditTime: 2020-06-17 17:11:43
 * @LastEditors: xujun
 * @FilePath: /vue-cli-plugin-dioskuroi/generator/template/src/router/index.js
 * @Description: 
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router