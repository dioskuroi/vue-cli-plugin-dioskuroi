const path = require('path')
const fs = require('fs')
const SentryCliPlugin = require('@sentry/webpack-plugin')
const HappyPack = require('happy')

module.exports = {
  assetsDir: 'static',
  chainWebpack(config) {
    const jsRule = config.module.rule('js')
    jsRule.uses.clear()
    jsRule.use('happypack/loader')
      .loader('happypack/loader')
      .options({
        id: 'happybabel'
      })
    if (process.env.NODE_ENV === 'development') {
      const files = fs.readdirSync(path.resolve(__dirname, './dll'))
      files.forEach((file, index) => {
        if (/.*\.dll\.js/.test(file)) {
          config.plugin('AddAssetHtmlWebpackPlugin' + index).use(require('add-asset-html-webpack-plugin'), [{
            filepath: path.resolve(__dirname, 'dll', file)
          }])
        }
        if (/.*-manifest\.json/.test(file)) {
          config.plugin('DllReferencePlugin' + index).use(require('webpack/lib/DllReferencePlugin'), [{
            context: __dirname,
            manifest: path.resolve(__dirname, 'dll', file)
          }])
        }
      })
    }
  },
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      <%_ if (sentry) { _%>
        config.plugins.concat([
            new SentryCliPlugin({
              include: path.join(__dirname, './dist/static/js/'),
              release: process.env.RELEASE_VERSION,
              configFile: 'sentry.properties',
              ignoreFile: '.sentrycliignore',
              ignore: ['node_modules', 'webpack.config.js'],
              urlPrefix: `http://${process.env.IP}`
            })
        ])
      <%_ } _%>
    } else {
      config.plugins.concat([
        new HappyPack({
          id: 'happybabel',
          loaders: ['babel-loader?cacheDirectory'],
          // 开启 4 个线程
          threads: 4
        })
      ])
    }
  }
}