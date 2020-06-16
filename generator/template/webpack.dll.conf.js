/*
 * @Author: xujun
 * @Date: 2020-06-16 15:55:26
 * @LastEditTime: 2020-06-16 16:10:51
 * @LastEditors: xujun
 * @FilePath: /vue-cli-plugin-dioskuroi/generator/template/webpack.dll.conf.js
 * @Description: webpack dll 配置文件
 */ 

const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    // 想统一打包的类库
    vendor: ['vue', 'vuex', 'vue-router', 'axios']
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]-[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]-[hash]',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dll', '[name]-manifest.json')
    })
  ]
}