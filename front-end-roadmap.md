## Frontend Roadmap
![roadmap](./img/roadmap.png)

> 黄色：推荐

> 灰色：尽可能学习

> 橙色：任选其一

## 详细介绍

+ **了解互联网/万维网**

+ **Learn HTML**
    + 语义化HTML
    + 页面分模块、正确的组织DOM
    + 练习：制作至少5个页面，重点关注结构

+ **Basics of CSS**
    + 学习CSS基础
    + Grid、Flexbox布局
    + 媒体查询和响应式网站
    + 练习：为之前制作的页面加上样式

+ **Basics of Javascript**
    + 学习语法和基本结构
    + DOM API
    + 了解一些概念：劫持、事件冒泡、原型等等
    + XHR
    + ES6新特性和模块化js

+ **练习：写一些响应式页面，同时用js添加一些交互**

+ **了解Web浏览器**
    + 浏览器组成（从输入URL到页面加载的过程？）
    + 浏览器存储
    + 浏览器开发者调试工具的使用   
    
+ **统一资源定位器（URL）**

+ **超文本传输协议（HTTP）**
    + HTTP缓存
    + HTTP常用状态码
    + HTTP报文组成
    + 了解HTTP2.0

+ **CSS 预处理器**
    + **Sass** 
    + **PostCSS**
    + Less
    + Stylus

    CSS预处理器使CSS更加强大，Sass,Less,Stylus,推荐Sass. 但是，PostCSS很受关注，它非常好，你可以单独使用也可以和Sass一起使用它。建议现学Sass，有时间再去学习PostCSS

+ **CSS 框架**
    + **Bootstrap**
    + Materialize CSS
    + Bulma

+ CSS 体系架构
    + **BEM**
    + OOCSSS
    + SMACSS
    + SUITCSS
    + Atomic

    随着应用的增长，CSS开始变得混乱并且难以维护。有很多方式可以帮你更好的管理CSS，并且使其更具有扩展性。例如有OOCSS,SMACSS,SUITCSS,Atomic和BEM。你应该去了解一下他们的差异，推荐BEM。

+ **了解Web动画**

+ **了解Web字体、图标、图像**

+ Github（optional）
    + Github上找些项目：demo页面实现响应式或者优化设计；找出js代码中还能优化的地方，能你所学到的最佳实践来重构它；尝试解决一些open issue
    + **git知识**

+ **包管理**
    + NPM
    + Yarn

+ 练习：在你的应用中下载一些库来使用

+ **构建工具**
    + **NPM Scripts**
    + Gulp
    + **EsLint**
    + **Webpack** (for apps)
    + Rollup (for libraries)
    + Parcel

    这些工具能够帮助你构建和打包JavaScript应用。这部分知识还包含代码风格检测、任务管理器和打包。

    对于任务管理器，以前有不同的选择，包括npm脚本,gulp,grunt等。但是现在，有了webpack帮你处理以前由gulp做的事，npm脚本用来自动化处理webpack胜任的任务。你没有必要学习gulp,但是你可以随时找时间了解一下，看看它能否帮助你开发应用。

    对于代码风格检测，同样的也有几个选择ESLint,JSLint,JSHint和JSCS,但是现在ESLint最流行。
    
    对于模块打包，也有几个不同选择，包括Parcel,Webpack,Rollup,Browserify等。如果你非得选择一个，闭上眼直接选Webpack。Rollup也很常用，但是建议构建第三方库的时候使用; 当涉及到应用的打包，用webpack。所以，现在就去学习webpack吧，愿意的话有空再去看看Rollup.

+ 练习：尝试用Sass和ES6写一个库，发布到Github和npm上
    
+ **js框架学习**
    + **React**
    + Vue
    + Angular

+ 练习：用框架写一个应用

+ **网站性能优化**
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

+ **测试**
    + Jest
    + Mocha
    + Protractor
    + Karma
    + Enzyme

+ 渐进式应用
    + 了解service workers和如何实现一个渐进式应用
    
+ 静态检查
    + TypeScript
    + Flow

    静态类型检查器可以帮助您将类型检查添加到JavaScript。你可以不用学习这些东西，但是静态检查能给你带来超能力，可以花几个小时学习，然后记住。主要由TypeScript和Flow，选一个你喜欢的，推荐TypeScript.

+ **服务端渲染**
    + React - Next.js & After.js
    + Vue - Nuxt.js

    直到现在，你所掌握的技能应该足以让你获得任何“前端工程师”的职位，但是不要局限于此！无论你选用了什么框架，了解一下服务端渲染。取决于你使用了什么框架，有着不同的选择。例如，你决定使用React，最值得留意的就是Next.js和After.js，如果是Vue.js，相应的有Nuxt.js。路线图中可能还有些缺失的地方，但这就是你成为“前端工程师”所需要的全部内容。记住关键是要进可能多的练习。在刚开始的时候会显得有些恐怖，你会觉得自己没有掌握到只是，但是这是正常的，随着时间的推移，你会变得越来越好。如果你遇到困难了，不要忘了去寻求帮助，你会为很多人都愿意帮助你而感到惊讶...
      
+ **Web安全基础**
    + XSS
    + CSRF
    + HTTP/DNS劫持
    + 跨域

+ **其他**
    + Canvas
    + HTML5 API
    + SVG
    + sourcemaps
    + 函数式编程


