原文：[Introduction to commonly used ES6 features](https://zellwk.com/blog/es6/)

**近年来，Javascript已经得到了很大的发展。如果你在2017年学习JavaScript，却还没有接触到ES6，那么你就错过了一种更容易阅读和编写JavaScript的方法。**

如果你还不是JavaScript的高手，不用担心。因为你不需要非常精通JavaScript就可以利用ES6提供给你的额外优点。在这篇文章中，我想向你分享我日常开发中经常使用的8个ES6特性，以此帮助你更快的学会新语法。

## ES6特性列表
首先，ES6是对JavaScript的一次巨大更新。如果你好奇有哪些新特性，这里有一个[新特性大列表](https://github.com/lukehoban/es6features)，感谢[Luke Hoban](https://twitter.com/lukehoban?lang=en)整理。

+ Arrows
+ Classes
+ Enhanced object literals
+ Template strings
+ Destructuring
+ Default + rest + spread
+ Let + const
+ Iterators + for..of
+ Generators
+ Unicode
+ Modules
+ Module loaders
+ Map + set + weakmap + weakset
+ Proxies
+ Symbols
+ Subclassable built-ins
+ Promises
+ Math + number + string + array + object apis
+ Binary and octal literals
+ Reflect api
+ Tail calls

不要让这一大堆功能吓跑你，让你远离ES6。你不需要马上懂得全部内容。接下来，我将与你分享我日常中使用的8个特性。它们是：

1. [Let and const](#let-and-const)
2. Arrow functions
3. Default parameters
4. Destructuring
5. Rest parameter and spread operator
6. Enhanced object literals
7. Template literals
8. Promises

我们将在下面的章节中介绍八个特性。现在，我将介绍前五个特性。 其余的内容我会在接下来的几个星期里加入。

顺便说一下，浏览器对ES6的支持是惊人的。如果您为最新的浏览器(Edge，以及最新版本的FF、Chrome和Safari)编写代码，几乎所有东西都是[直接支持](https://kangax.github.io/compat-table/es6/)的。

如果你想编写ES6，你不需要像Webpack那样的花哨的工具。如果您的浏览器支持不足，您可以使用社区创建的回退方案polyfills。 只要google一下:)

然后，让我们来看第一个特性。

## Let and const
在ES5（旧的JavaScript）中，我们习惯用``var``关键字来声明变量。 在ES6中，这个``var``关键字可以被``let``和``const``两个强大的关键字替代，这两个关键字使开发变得更简单。

#### Let vs var

让我们先谈谈``var``，因为我们比较熟悉``var``。

首先， 我们可以使用关键字``var``来声明变量。变量一声明，就可以在当前作用域中的任何地方使用。

```js
var me = 'Zell'
console.log(me) // Zell
```

在上面的例子中，我声明一个全局变量``me``。这个全局变量``me``也可以用在一个函数中，像这样：

```js
var me = 'Zell'
function sayMe () {
  console.log(me)
}

sayMe() // Zell
```

但是，反过来是不行的。如果我在一个函数中声明一个变量，我不能在函数外部使用它。

```js
function sayMe() {
  var me = 'Zell'
  console.log(me)
}

sayMe() // Zell
console.log(me) // Uncaught ReferenceError: me is not defined
```

所以，我们可以说``var``是**函数作用域**的。这意味着当一个变量用``var``在函数中创建时，**它只存在于函数中**。

如果变量是在函数外部创建的，那么它将存在于外面的作用域。

```js
var me = 'Zell' // global scope

function sayMe () {
  var me = 'Sleepy head' // local scope
  console.log(me)
}

sayMe() // Sleepy head
console.log(me) // Zell
```

另一方面，``let``属于块作用域。这意味着每当用``let``创建变量时，它只存在于它的块中。

等等，什么是代码块？

JavaScript中的一个块是一对花括号中的任何东西。下面是块的例子。

```js
{
  // new scope block
}

if (true) {
  // new scope block
}

while (true) {
  // new scope block
}

function () {
  // new block scope
}
```

块作用域的变量和函数作用域的变量差别是很大的。当你使用函数作用域的变量时，你可以不经意间重写了一个变量。来看这个例子：

```js
var me = 'Zell'

if (true) {
  var me = 'Sleepy head'
}

console.log(me) // 'Sleepy head'
```

上面这个例子中，可以看到在运行完``if``代码块后，``me``变成了``Sleepy head``。这个例子可能不会对你造成任何问题，因为你可以不会声明具有相同名称的变量。

但是``for``循环中使用``var``可能会因为``var``的作用域而变得有些奇怪。考虑下面这个代码，它在打印变量``i``4次，然后再使用``setTimeout``函数延时打印``i``。
```js
for (var i = 1; i < 5; i++) {
  console.log(i)
  setTimeout(function () {
    console.log(i)
  }, 1000)
};
```

![wrong-loop](./images/loop-wrong.png)
> ``i``在``setTimeout``函数中4次打印的都是5

``i``为什么在4次延时函数中都是输入5？事情的真相只有一个，那就是``var``声明的变量是函数作用域的，所以在延时函数运行之前，``i``的值已经通过``for``循环累加到5了。

为了在延迟执行的``setTimeout``函数中能得到正确的``i``值，我们需要创建另外一个函数，名为``logLater``，用它来保证在``setTimeout``函数执行前，里面的要输出的``i``值不会被``for``循环改变

```js
function logLater (i) {
  setTimeout(function () {
    console.log(i)
  })
}

for (var i = 1; i < 5; i++) {
  console.log(i)
  logLater(i)
};
```

![right-loop](./images/loop-right.png)
> ``i``被正确的打印了，1，2，3，4

(顺便提下，这个被称为闭包。``setTimeout``执行的函数中并没有``i``变量，它从外层作用域读到了``i``值)

好消息是，像上面的``for``循环中函数作用域的变量产生怪异行为并不会在使用``let``的时候发生。同样的延时输入的例子可以这样重写，而且它不用写额外的函数就可以输出预期的结果。

```js
for (let i = 1; i < 5; i++) {
  console.log(i)
  setTimeout(function () {
    console.log(i)
  }, 1000)
};
```

![right-loop](./images/loop-right.png)
> ``i``被正确的打印了，1，2，3，4

正如你所看到的，**块作用域**的变量让开发变得更简单，它消除由**函数作用域**变量带来的常见问题。为了使开发变得简单，我建议你从现在开始声明JavaScript变量时使用``let``代替``var``。（ES6已经是新的JavaScript了😎）。

现在我们已经知道了``let``的作用了，让我们继续往前，看下``let``和``const``的不同。

#### LET VS CONST

TO BE CONTINUE...