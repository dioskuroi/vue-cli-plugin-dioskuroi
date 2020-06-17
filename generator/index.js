/*
 * @Author: xujun
 * @Date: 2020-06-16 09:18:00
 * @LastEditTime: 2020-06-17 11:47:13
 * @LastEditors: xujun
 * @FilePath: /vue-cli-plugin-dioskuroi/generator/index.js
 * @Description: generator
 */ 

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      test: 'vue-cli-service test',
      'build:dll': 'webpack --config webpack.dll.conf.js'
    },
    dependencies: {
      "@sentry/browser": "^5.5.0",
      "@sentry/integrations": "^5.5.0",
      "axios": "^0.19.2",
      "localForage": "1.7.4"
    },
    devDependencies: {
      "@sentry/cli": "^1.47.1",
      "@sentry/webpack-plugin": "^1.8.0",
      "sentry-cli-binary": "^1.25.0",
      "happypack": "^5.0.1",
      "add-asset-html-webpack-plugin": "^3.1.3",
      "babel-plugin-transform-decorators": "^6.24.1",
      "@babel/plugin-proposal-optional-chaining": "^7.10.1"
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template', { doesCompile: true, ...options })
  if (options.sentry) {
    api.render('./template-sentry', options)
  }
}