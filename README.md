# Webpack Demo

#### Babel

- Babel 版本：v7
- Babel v7 版本 @babel/preset-stage-0 不推荐使用，使用@babel/preset-env 即可
- Babel 只转换JS的句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码，这个时候就需要@babel/polyfill

```shell
$ npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader
$ npm install --save @babel/polyfill
```
