## HTML
html是前端三大板斧中最基础的部分，如果把前端比喻成一个人，那么html就是人的骨架。你可以通过阅读以下文章，来一步步写出一副坚实的骨架：
### 1.基础篇
* [基础教程](http://www.w3school.com.cn/html/index.asp)
* [HTML5 火狐文档](http://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)

&emsp;&emsp;通过此教程，你可以通过阅读+**实践**的方式快速地掌握HTML的基础知识以及HTML5提供的新特性。
&emsp;&emsp;实践是检验真理的唯一标准，此时你可以选择一个你经常浏览或者感兴趣的网页（比如中规中矩类型的门户网站：[QQ门户](http://note.youdao.com/)）。根据你所学习的知识来写出其中你感兴趣的部分的HTML结构（如果你同样也具备css的相关基础知识，也可以为其加上css样式）。
&emsp;&emsp;完成之后，通过F12开发者工具查看网页的源码。你会发现，有些地方使用的HMLT标签（或是css样式）并不与你想象的一样,比如一些图标并没有使用`img`标签，竟然是通过css`background-image`属性设置背景图片来展示的：
![image](https://note.youdao.com/yws/public/resource/55ab4b990aff44a03650bb2d7b9c5506/xmlnote/77D19F303642401390643E8E33C03877/1413)
&emsp;&emsp;继续书写，你会发现不少与你想法不同的地方出现：
* 并不是所有的按钮都使用`<button>`标签，他有可能是一个`<a>`。
* 很多下拉列表并不是使用`<select>`标签来完成的，取而代之的是`<div>` + `<ul>`的组合
* 有些图标竟然不是图片，它有可能是个经过`base64`编码后的一长串乱七八糟字符，还有可能是个字体？！

&emsp;&emsp;因为标签是死的，但是方案是活的，我们可以在不同的情境下使用符合情境的最佳的实践方案来实现，达到美观与性能的完美结合。这里面涉及到一些性能优化以及兼容性的问题。
&emsp;&emsp;当你在看到一个网站，可以通过其UI**大致**判断并书写出其HTML结构的时候（哪怕你会有上面的一系列疑问）。说明你对一些常用的HTML标签有了一定的了解，接下来除了更多的实践之外，你需要了解一些其他内容：

### 2.进阶篇
* [HTML编码规范](https://www.cnblogs.com/xiaocaiyuxiaoniao/p/7839386.html)
* [HTML语义化](https://www.jianshu.com/p/6bc1fc059b51)
* [阮一峰-html教程](https://github.com/wangdoc/html-tutorial)

### 3.推荐书籍
* Head First HTML与CSS（第2版）

### 4.总结
HTML的学习贵在实践，只有在不断的开发过程中才能真正了解运用其精髓。