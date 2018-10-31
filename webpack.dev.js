const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // 只可以用在开发环境，不要用于生产
  // source map
  devtool: 'inline-source-map',
  // 本地开发服务器 server，可以自动重新build重新启动服务器
  devServer: {
    contentBase: './dist'
  }
  // 只可以用在开发环境，不要用于生产
});
