/**
 * 动态导入
 */

// 实现代码分离
// 生成 vendors~lodash.bundle.js
// 也可以使用 await/async
// 必须把这个文件放入到 entry
// 安装 @babel/plugin-syntax-dynamic-import

import(/* webpackChunkName: "lodash" */ 'lodash').then((_) => {
  console.log(_.join('webpack dynamic import'));
});