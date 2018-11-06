const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  /** 只可以用在开发环境，不要用于生产 */

  devtool: 'inline-source-map', // source map

  /** 本地开发服务器 webpack-dev-server，可以自动重新build重新启动服务器 */
  devServer: {
    contentBase: './dist',
    hot: true // webpack-dev-server 开启热模块替换
  },

  plugins: [new webpack.HotModuleReplacementPlugin()] // webpack 开启热模块替换 这个 plugin 会和 webpack.common.js 的 plugin 合并

  /** 只可以用在开发环境，不要用于生产 */
});
