## Javascript阶段学习

简要地把Javascirpt学习分成了四个阶段。

### 第一阶段

这个阶段的重点是**熟悉JavaScript语法**。

1. 学习变量声明
2. 学习基本数据类型，string, number, boolean, null, undefined
3. 学习引用数据类型，Array, Object, Function
4. 学习``if...else...``语句
5. 学习比较对象
6. 学习使用``for``循环

相关资源

+ [Udacity – Intro to JavaScript](https://cn.udacity.com/course/intro-to-javascript--ud803?ck_subscriber_id=207848717)
+ [You don’t know JS – Up and going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md?ck_subscriber_id=207848717#you-dont-know-js-up--going)
+ [Code Academy – Learn JavaScript](https://www.codecademy.com/learn/learn-javascript?ck_subscriber_id=207848717)

自测问题

1. JavaScript中五个基本数据类型都是那些？（如果你考虑ES6的话是六个）
2. JavaScript中你要怎么声明变量、对变量赋值？
3. ``const, let, var`` 这三个命令有什么不同？
4. 下面的每个操作符都是什么用？
```js
+, -, *, /, %
```
5. 下面的每个比较操作符都有什么用？
```js
===, !==, >, >=, <, <=
```
6. 如何使用条件语句？
```js
if
if else
else
```
7. 怎么使用``for``循环？
8. 什么是数组？  
    如何把向数组添加元素？  
    如何获取数组元素的值？ 
    怎么删除数组中的值？   
    怎么遍历数组？
9. 什么是对象？  
    如何向对象添加属性？   
    如何从对象中获取某个属性？  
    怎么删除对象的某个属性？   
    怎么遍历对象，获取每个值？   
    对象的方法指的是什么？   
    怎么定义方法？  
    怎么调用方法？  
10. 什么是函数
    如何定义函数？   
    怎么调用函数？    
    怎么向函数传参？    
    函数中的``return``有什么用？

### 第二阶段

这个阶段的重点是**熟悉DOM**

在学习DOM之前，你还要了解一些JavaScript基础知识。

1. 作用域和闭包
2. 异步JavaScript
3. 用回调来写异步JavaScript

熟悉了上面三个知识点后，就可以开始学习DOM

1. 选取元素
2. 添加或删除元素类名
3. 添加或删除属性
4. 添加或删除元素
5. DOM事件绑定
6. DOM事件类型及使用场景

相关资源

+ [You don’t know JS – scopes and closures](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures?ck_subscriber_id=207848717)
+ [What is a callback](https://zellwk.com/blog/callbacks/?ck_subscriber_id=207848717)
+ [Altering the DOM with JavaScript](https://zellwk.com/blog/js-in-dom/?ck_subscriber_id=207848717)
+ [JavaScript 30 by Wes Bos ](https://zellwk.com/blog/js-in-dom/?ck_subscriber_id=207848717)

+ [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events?ck_subscriber_id=207848717)
+ [MDN Element API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element?ck_subscriber_id=207848717)

自测问题

1. 什么是作用域？
    1. 为什么尽可能不要使用全局变量？
    2. 什么是闭包？
    3. 为什么要使用闭包？

2.  什么是回调?
    1. 怎么使用回调？
    2. 怎么写回调？
    3. 怎么写能接受回调函数作为参数的函数？
    4. ``setTimeout``是接受回调函数为参数的函数吗？

3. 异步JavaScript
    1. JavaScript中，什么是异步，什么是同步？
    2. 怎么写异步的JavaScript？
    3. 什么是事件循环？
    4. 事件循环的原理？
 
 4. DOM
    1. 什么是Element?
    2. 什么是Node?
    3. 如何选择一个DOM元素？
    4. 如何选择多个DOM元素？
    5. 如何遍历多个DOM元素？
    6. 如何选择父元素、相邻元素、子元素？
    7. 如何添加、移除，检查类名？
    8. 什么时候需要添加类名？
    9. 如何添加、移除，检查属性？
    10. 什么时候需要添加属性？
    11. 怎么创建HTML元素？
    12. 怎么把元素插入到其他元素的前面或后面？
    13. 怎么元素的样式？
    14. 我们是否应该用JavaScript改变样式，为什么？
    15. 怎么获取元素的内容？

5. 事件
    1. 怎么添加事件监听？
    2. 为什么要添加事件监听？
    3. 怎么移除事件监听？
    4. 什么时候要移除事件监听？为什么
    5. 常用鼠标事件、键盘事件、表单事件
    6. 怎么从``event``对象中获取值

### 第三阶段

这个阶段的重点是**不断地打代码，构建东西**

在不断的构建东西的过程中，把下面几点包含进去：

1. 面向对象编程(OOP)
2. 函数式编程思想(FP)
3. AJAX
4. JavaScript最佳实践

面向对象编程和函数式编程在JavaScript中都很流行。为了更好的学习JavaScript，你两者都需要知道。

OOP是围绕对象来编程的，你需要知道一些概念:

1. [this in JavaScript](https://zellwk.com/blog/this/?ck_subscriber_id=207848717)
2. [JavaScript prototypes](https://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/?ck_subscriber_id=207848717)
3. [The Module](https://addyosmani.com/resources/essentialjsdesignpatterns/book/?ck_subscriber_id=207848717#modulepatternjavascript) and [Factory](https://addyosmani.com/resources/essentialjsdesignpatterns/book/?ck_subscriber_id=207848717#factorypatternjavascript) patterns for creating objects

函数式编程主要是围绕函数来编程，你需要知道下面几点：

1. [Reduce side effects](https://davidwalsh.name/preventing-sideeffects-javascript?ck_subscriber_id=207848717)
2. [Write pure functions](https://alistapart.com/article/making-your-javascript-pure?ck_subscriber_id=207848717)
3. [Write immutable code](https://slemgrim.com/mutate-or-not-to-mutate/?ck_subscriber_id=207848717)

关于AJAX下面一些文章还不错:

1. [Using Fetch](https://css-tricks.com/using-fetch/?ck_subscriber_id=207848717)
2. [JavaScript Promises](https://zellwk.com/blog/js-promises/?ck_subscriber_id=207848717)
3. Reading APIs

自测问题

1. OOP
    1. ``this``在不同的上下文中是如何变化的？有多少种上下文情况？
    2. 什么是原型？
    3. 怎么创建对象？
    4. 什么是模块化？怎么使用？
    5. 什么是工厂模式？ 怎么使用？

2. FP
    1. 什么是持久化不可变数据？
    2. 数组的什么方法是不可变的？
    3. 什么是纯函数？
    4. 函数有多少种调用方式？
    5. 什么是副作用？
    6. 写纯函数时怎么处理副作用？

3. AJAX
    1. 什么是Promise
    2. 怎么串联Promise
    3. 使用Promise时怎么捕获错误？
    4. 怎么使用``Fetch``API？
    5. 什么是CRUD ?
    6. 怎么使用Github的API获取自己仓库列表?

4. 最佳实践
    1. 为什么要避免使用全局变量 ?
    2. 什么要使用 === 代替 == ?
    3. 怎么使用三元操作符写出更精简的代码？
    4. 怎么使用ES6写出精简的代码？
    5. 什么是事件捕获和事件冒泡？
    6. 什么是事件代理？
    7. 怎么移除事件监听？什么时候移除？

### 第四阶段

这个阶段你可以学习一些新的东西了。

1. 你可以学习一个前端框架（React、Vue、Angular）
2. 你可以学习Node建一个后端
3. 你可以深入学习JavaScript
