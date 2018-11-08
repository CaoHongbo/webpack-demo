const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  /** 只可以用在开发环境，不要用于生产 */

  devtool: 'eval-source-map', // eval-source-map 比 inline-source-map 重新编译时要快

  /** 本地开发服务器 webpack-dev-server，可以自动重新build重新启动服务器 */
  devServer: {
    contentBase: path.join(__dirname, '/dist'), // 推荐使用绝对路径
    compress: true, // 服务器 gzip 压缩
    open: true, // 打开浏览器
    hot: true // webpack-dev-server 开启热模块替换
  },

  plugins: [new webpack.HotModuleReplacementPlugin()] // webpack 开启热模块替换 这个 plugin 会和 webpack.common.js 的 plugin 合并

  /** 只可以用在开发环境，不要用于生产 */
});
