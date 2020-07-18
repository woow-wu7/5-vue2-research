// import path from 'path'

module.exports = {  
  runtimeCompiler: true,  // runtime + compiler 版本
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // host: '0.0.0.0',
    port: 8888,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
}