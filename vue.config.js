const path = require('path')

module.exports = {  
  runtimeCompiler: true,  // runtime + compiler 版本
  configureWebpack: {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: '0.0.0.0',
      port: 8888,
      open: true,
      hot: true,
    }
  }
}