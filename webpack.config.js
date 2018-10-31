const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    // 每次 build 前清理 dist 文件夹，此举可以把之前冗余的文件或没用的文件删除
    new CleanWebpackPlugin(['dist']),
    // 根据依赖和entry/output，一键式配置 index.html 文件，这样以后就不用担心手动配置和文件改名、扩展等种种问题
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  // 只可以用在开发环境，不要用于生产
  // source map
  devtool: 'inline-source-map',
  // 本地开发服务器 server，可以自动重新build重新启动服务器
  devServer: {
    contentBase: './dist'
  }
  // 只可以用在开发环境，不要用于生产
};

/** Q&A */
/**
 * Q1：为什么入口要分离，而不是都整合到同一个文件中
 */
