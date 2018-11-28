# Webpack4 Demo

#### install
```shell
$ npm install --save-dev webpack
$ npm install --save-dev webpack-cli
```

#### Babel

- Babel 版本：v7
- Babel v7 版本 @babel/preset-stage-0 不推荐使用，使用@babel/preset-env 即可
- Babel 只转换 JS 的句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码，这个时候就需要@babel/polyfill

```shell
$ npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader
$ npm install --save @babel/polyfill
```

#### 生产环境构建

- 使用 webpack-merge 拆解出共同的配置，并合并不同环境的配置

```shell
$ npm install --save-dev webpack-merge
```

- 配置文件里面的 `mode` 可以指定 `process.env.NODE_ENV`，所以 `/src` 文件夹下面的文件和第三方 lib 可以根据 mode 指定的环境来执行，但是 wepack 里面的配置文件不可用
- webpack4 自动配置了 DefinePlugin

#### tree shaking

- Use ES2015 module syntax (i.e. import and export).
- Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of popular Babel preset @babel/preset-env - see documentation for more details).
- Add a "sideEffects" property to your project's package.json file.
- webpack4 mode 设置成 production 自动使用 UglifyJSPlugin 进行 minification and tree shaking.

#### webpack CLI

- --watch 观察者模式
- --colors 显示颜色
- --progress 显示进度
- --optimize-minimize 启用 UglifyJSPlugin
- --define process.env.NODE_ENV="'production'" 设置环境变量 等同于 -p

#### Q&A

- 生产环境 CSS 压缩 https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
- 动态导入(dynamic imports)
- Prefetching/Preloading modules
- bundle 分析(bundle analysis)
- 懒加载

#### LESS
```sell
$ npm install less
$ npm install --save-dev less-loader style-loader css-loader
```