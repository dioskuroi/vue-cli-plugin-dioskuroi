const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    // 想统一打包的类库
    vue: ['vue/dist/vue.runtime.esm.js', 'vuex', 'vue-router'],
    vendor: ['axios', 'element-ui', 'lodash']
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]_library',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dll', '[name]-manifest.json')
    })
  ]
}
