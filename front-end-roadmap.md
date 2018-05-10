# Frontend Roadmap
![roadmap](./img/roadmap.png)

> 黄色：推荐

> 灰色：尽可能学习

> 橙色：任选其一

## 详细介绍

### 了解互联网/万维网

### 学习 HTML

+ 语义化HTML
+ 页面分模块、正确的组织DOM
+ 练习：制作至少5个页面，重点关注结构

### CSS 基础

+ 学习 CSS 基础
+ Grid、Flexbox 布局
+ 媒体查询和响应式网站
+ CSS 预处理器：Sass、PostCSS、Less、Stylus
+ CSS 框架：Bootstrap、Materialize CSS、Bulma

### JavaScript 基础

+ 学习语法和基本结构
+ DOM API
+ 了解一些概念：劫持、事件冒泡、原型等等
+ XHR
+ ES6新特性和模块化js

+ **练习：写一些响应式页面，同时用js添加一些交互**

### 了解 Web 浏览器

+ 浏览器组成（从输入URL到页面加载的过程？)
+ 浏览器存储（Cookie/Service Worker/loaclstorage）
+ 浏览器开发者调试工具的使用

### 统一资源定位器（URL)

### 超文本传输协议（HTTP）

+ HTTP缓存
+ HTTP常用状态码
+ HTTP报文组成
+ 了解HTTP2.0

### 前端代码规范

+ html规范
+ css规范
    + BEM
    + OOCSSS, SMACSS, SUITCSS, Atomic
+ js规范
    + ESlint

随着应用的增长，CSS 开始变得混乱并且难以维护。有很多方式可以帮你更好地管理 CSS，并且让它的扩展性更强。例如有OOCSS、SMACSS、SUITCSS、Atomic和BEM。你应该去了解一下他们的差异，推荐 BEM。

对于代码风格检测，也有一些选择：ESLint、JSLint、JSHint 和 JSCS，但是现在 ESLint 最流行。

### 了解Web动画

### 了解Web字体、图标、图像

### 数据结构和算法基础

### Git

+ Git 知识
+ Github 上找些项目，为它们的 demo 页面实现响应式，或者优化设计；找出 js 代码中还能优化的地方，运用你所学到的最佳实践来重构它；尝试解决一些 open issue。

### 包管理

+ NPM
+ Yarn
+ 练习：在你的应用中下载一些库来使用

### 构建工具

+ **NPM Scripts**
+ Gulp
+ **Webpack** (用来构建应用)
+ Rollup (用来构建库)
+ Parcel
+ 练习：尝试用 Sass 和 ES6 写一个库，发布到 Github 和 npm 上

这些工具能够帮助你构建和打包 JavaScript 应用。这部分知识还包含代码风格检测、任务管理器和打包。

在以前，任务管理器有很多种选择，包括 npm 脚本、gulp、grunt 等。但是现在，Webpack 就能帮你处理以前由 gulp 做的事，npm 脚本用来自动化处理 Webpack 胜任的任务。你没有必要学习 gulp，但是你可以随时找时间了解一下，看看它能否帮助你开发应用。

对于模块打包，也有几个不同选择，包括 Parcel、Webpack、Rollup、Browserify 等。如果你非得选择一个，闭上眼直接选 Webpack。Rollup 也很常用，但是建议构建第三方库的时候使用; 当涉及到应用的打包时，就用 Webpack。所以，现在就开始学习 Webpack 吧，愿意的话等有空再去看看 Rollup。


### js 框架学习

+ **React**
+ Vue
+ Angular
+ 练习：用框架写一个应用

### 网站性能优化

+ 桌面浏览器前端优化策略
    + 网络加载类
    + 页面渲染类
+ 移动端浏览器前端优化策略
    + 网络加载类
    + 缓存类
    + 图片类
    + 脚本类
    + 渲染类
    + 架构协议类

### 测试

+ Jest
+ Mocha
+ Protractor
+ Karma
+ Enzyme

### 静态类型检查器

+ TypeScript
+ Flow

静态类型检查器可以给 JavaScript 增加类型检查功能。这些不是必需学习的内容，但是静态类型检查能给你带来强大的能力，只要花几个小时学习，然后你就能上手了。TypeScript 和 Flow 是目前的主流选择，选一个你喜欢的，推荐 TypeScript。

### 其他

+ Canvas
+ HTML5 API
+ SVG
+ sourcemaps
+ 函数式编程
+ 渐进式应用（PWA）：了解 service workers 和如何实现一个渐进式应用
+ 服务端渲染
    + React - Next.js & After.js
    + Vue - Nuxt.js
