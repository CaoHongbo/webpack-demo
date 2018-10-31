// webpack 支持 import/export 写法
import '@babel/polyfill';
import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import axios from 'axios';

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

// babel test
const arr = Array.from([1, 2, 3]);
console.log(arr);
(async () => {
  await axios.get('http://www.baidu.com');
})();
// babel test
