const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // style-loader有HMR功能
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
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
  ]
};

/** Q&A */
/**
 * Q1：为什么入口要分离，而不是都整合到同一个文件中
 * Q2: package.jon sideEffects
 */
