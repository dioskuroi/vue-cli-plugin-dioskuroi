const fs = require('fs')
const path = require('path')

module.exports = {
  assetsDir: 'static',
  chainWebpack (config) {
    const jsRule = config.module.rule('js')
    jsRule.uses.clear()
    jsRule.use('happypack')
      .loader('happypack/loader')
      .options({
        id: 'happybabel'
      })
    const files = fs.readdirSync(path.resolve(__dirname, './dll'))
    files.forEach((file, index) => {
      if (/.*\.dll.js/.test(file)) {
        config.plugin('AddAssetHtmlWebpackPlugin' + index).use(require('add-asset-html-webpack-plugin'), [{
          filepath: path.resolve(__dirname, 'dll', file)
        }])
      }
      if (/.*\.manifest.json/.test(file)) {
        config.plugin('DllReferencePlugin' + index).use(require('webpack/lib/DllReferencePlugin'), [{
          context: __dirname,
          manifest: path.resolve(__dirname, 'dll', file)
        }])
      }
    })
    // config.plugin('AddAssetHtmlWebpackPlugin').use(require('add-asset-html-webpack-plugin'), [{
    //   filepath: path.resolve(__dirname, 'dll', 'vendor.dll.js')
    // }])
    // config.plugin('DllReferencePlugin').use(require('webpack/lib/DllReferencePlugin'), [{
    //   context: __dirname,
    //   manifest: path.resolve(__dirname, 'dll', 'vendor-manifest.json')
    // }])
    config.plugin('happyPack').use(require('happypack'), [{
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory'],
      // 开启 4 个线程
      threads: 4
    }])

    if (process.env.NODE_ENV === 'production') {
      config.plugin('sentryCliPlugin').use(require('@sentry/webpack-plugin'), [{
        include: path.join(__dirname, './dist/static/js/'),
        release: process.env.RELEASE_VERSION,
        configFile: 'sentry.properties',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
        urlPrefix: `http://${process.env.IP}`
      }])
    }
  }
}
