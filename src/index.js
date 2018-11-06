// webpack 支持 import/export 写法
import '@babel/polyfill';
import _ from 'lodash';
// import axios from 'axios';
import './style.css';
import printMe from './print';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
};

document.body.appendChild(component());

/** 热模块替换 ./print.js改变时不需要重启即可实现热替换，但不能是入口文件且被当前模块引用，否则webpack-dev-server会重新启动服务器，HMR不起作用 */
/** 热模块替换不能用于生产环境  */
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./print.js' /* , () => {} */);
  }
}
