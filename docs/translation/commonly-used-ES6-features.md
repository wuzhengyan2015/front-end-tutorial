# 常用的ES6特性

原文：[Introduction to commonly used ES6 features](https://zellwk.com/blog/es6/)

**近年来，Javascript已经得到了很大的发展。如果你在2017年学习JavaScript，却还没有接触到ES6，那么你就错过了一种更容易阅读和编写JavaScript的方法。**

如果你还不是JavaScript的高手，不用担心。因为你不需要非常精通JavaScript就可以使用ES6中很棒的新特性。在这篇文章中，我想向你分享我日常开发中经常使用的8个ES6特性，以此帮助你更快的学会新语法。

## ES6特性列表
首先，ES6是对JavaScript的一次巨大更新。如果你好奇有哪些新特性，这里有一个[新特性大列表](https://github.com/lukehoban/es6features)，感谢[Luke Hoban](https://twitter.com/lukehoban?lang=en)整理。

+ 箭头函数
+ 类
+ 对象字面量提升
+ 模板字符串
+ 解构
+ 默认参数 + 剩余语法 + 扩展运算
+ Let + const
+ Iterators（遍历器） + for..of
+ Generators
+ Unicode
+ 模块
+ 模块加载
+ Map + set + weakmap + weakset
+ Proxies
+ Symbols
+ 内置对象可继承
+ Promises
+ Math + number + string + array + object apis
+ 二进制和八进制字面量
+ Reflect api
+ 尾调用

不要让这一大堆功能吓跑你，让你远离ES6。你不需要马上懂得全部内容。接下来，我将与你分享我日常中使用的8个特性。它们是：

1. [Let and const](#let-and-const)
2. [箭头函数](#箭头函数)
3. [默认参数](#默认参数)
4. [解构](#解构)
5. [剩余参数和扩展运算](#剩余参数和扩展运算)
6. [对象字面量提升](#对象字面量提升)
7. [模板字符串](#模板字符串)
8. [Promises](https://zellwk.com/blog/js-promises)

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

另一方面，``let``属于块级作用域。这意味着每当用``let``创建变量时，它只存在于它的块中。

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

块级作用域的变量和函数作用域的变量差别是很大的。当你使用函数作用域的变量时，你可能不经意间重写了一个变量。来看这个例子：

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

好消息是，像上面的``for``循环中函数作用域的变量产生怪异行为并不会在使用``let``的时候发生。同样的延时打印的例子可以这样重写，而且它不用写额外的函数就可以输出预期的结果。

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

正如你所看到的，**块级作用域**的变量让开发变得更简单，它消除由**函数作用域**变量带来的常见问题。为了使开发变得简单，我建议你从现在开始声明JavaScript变量时使用``let``代替``var``。（ES6已经是新的JavaScript了😎）。

现在我们已经知道了``let``的作用了，让我们继续往前，看下``let``和``const``的不同。

#### LET VS CONST

``const``和``let``一样也是块级作用域变量。不同之处是``const``一旦声明了就不能重新赋值。

```js
const name = 'Zell'
name = 'Sleepy head' // TypeError: Assignment to constant variable.

let name1 = 'Zell'
name1 = 'Sleepy head'
console.log(name1) // 'Sleepy head'
```

因为``const``不能被重新赋值，所有它适合用来声明常量。

假设在我的网站上有一个按钮用来触发一个弹窗。我确定这个按钮只会有一个，而且它不会改变。这个情况下，就可以使用``const``。

```js
const modalLauncher = document.querySelector('.jsModalLauncher')
```

当声明变量时，只要可以我总是喜欢使用``const``, 因为这样我能得到额外的提示--这个变量不会被重新赋值。

接下来，我们继续讨论箭头函数。

## 箭头函数

箭头函数由箭头（=>）表示，在ES6代码中随处可见。它是匿名函数的简写方式。它们可以用在任何有关键字``function``的地方。例如：

```js
let array = [1,7,98,5,4,2]

// ES5 way
var moreThan20 = array.filter(function (num) {
  return num > 20
})

// ES6 way
let moreThan20 = array.filter(num => num > 20)
```

箭头函数相当酷。它们可以用来缩短代码，减少隐藏错误的空间。它们也能帮助你写出便于理解的代码，只要你熟悉了这个语法。

让我们深入探讨箭头功能的细节，以便你学会识别和使用它们。

#### 箭头函数的本质

首先，让我们讨论下创建函数。在JavaScript中，你可能习惯用这种方式创建函数：

```js
function namedFunction() {
  // Do something
}

// using the function
namedFunction()
```

还有第二种创建函数的方式。你可以创建一个匿名函数，然后把它赋值给一个变量。为了创建匿名函数，我们去掉了函数声明的函数名称。

```js
var namedFunction = function() {
  // Do something
}
```

第三种创建函数的方式是把它直接当做另外一个函数或者方法的参数来创建。这种是匿名函数中最常见的。 这是一个例子：

```js
// Using an anonymous function in a callback
button.addEventListener('click', function() {
  // Do something
})
```

因为ES6箭头函数是匿名函数的简写，所以你可以在任何地方用箭头函数替换匿名函数。

就像这样：

```js
// Normal Function
const namedFunction = function (arg1, arg2) { /* do your stuff */}

// Arrow Function
const namedFunction2 = (arg1, arg2) => {/* do your stuff */}

// Normal function in a callback
button.addEventListener('click', function () {
  // Do something
})

// Arrow function in a callback
button.addEventListener('click', () => {
  // Do something
})
```

是不是看上去差不多？基本上你只要移除``function``然后在稍微不同的地方用``=>``替换。

但是箭头函数有什么不一样的地方呢？难道我们只是用``=>``替换``function``?

实际上，我们不是仅仅用``=>``替换``function``。一个箭头函数的语法可以根据以下两个因素而变化:  
  1. 需要的**参数个数**
  2. 是否想要**隐式返回**。

第一个因素是传给箭头函数的参数个数。如果只有一个参数，你可以省略参数部分的括号。如果不需要参数，你可以用下划线（``_``）来代替括号（``()``）。

下面的箭头函数都是有效的：
```js
const zeroArgs = () => {/* do something */}
const zeroWithUnderscore = _ => {/* do something */}
const oneArg = arg1 => {/* do something */}
const oneArgWithParenthesis = (arg1) => {/* do something */}
const manyArgs = (arg1, arg2) => {/* do something */}
```

箭头函数语法的第二个因素是你是否需要隐式返回。如果函数主体就一行代码，而且没包裹在花括号中，箭头函数会自动用``return``把这行代码结果返回。

所以，下面两个是一样的。
```js
const sum1 = (num1, num2) => num1 + num2
const sum2 = (num1, num2) => { return num1 + num2 }
```

这两个因素就是你可以写出更简短的代码的原因，就像之前上边写到的``moreThan20``

```js
let array = [1,7,98,5,4,2]

// ES5 way
var moreThan20 = array.filter(function (num) {
  return num > 20
})

// ES6 way
let moreThan20 = array.filter(num => num > 20)
```

综上所述，箭头函数相当酷。它只要花一点时间习惯下，所以多尝试下，你会很快地在各个地方使用到它。

但是在你喜欢上箭头函数之前，我会向你介绍下箭头函数另外一个可以会让你困惑的特性--``lexical this``。

#### The LEXICAL THIS

``this``是唯一一个值会根据它的调用方式而变化的关键字。在浏览器中，当它在任何函数之外调用时，``this``默认指向``Window``。

```js
console.log(this) // Window
```

![image](./images/window.png)
> 浏览器中``this``默认指向``window``对象

当``this``在一个普通的函数中被调用时， 它会指向全局对象。在浏览器中，``this``就是指向``Window``。

```js
function hello () {
  console.log(this)
}

hello() // Window
```

在普通函数调用中，JavaScript总是把``this``指向window对象。这也解释了为什么``setTimeout``执行的函数中``this``总是指向``Window``。

当``this``在对象方法中被调用到，``this``就会指向对象本身：

```js
let o = {
  sayThis: function() {
    console.log(this)
  }
}

o.sayThis() // o
```

![image](./images/object.png)
> ``this``会指向调用方法的那个对象

当函数以**构造函数**的形式调用时，``this``指向**新构建的对象**。

```js
function Person (age) {
  this.age = age
}

let greg = new Person(22)
let thomas = new Person(24)

console.log(greg) // this.age = 22
console.log(thomas) // this.age = 24
```

![image](./images/constructor.png)
> 使用``new``或者``Object.craete()``创建对象时，``this``指向新创建的对象

``this``使用在事件监听函数中的时候，它会指向触发事件的元素

```js
let button = document.querySelector('button')

button.addEventListener('click', function() {
  console.log(this) // button
})
```

正如你看到的上述所有情况，``this``的值在函数调用时指定。每个函数都定义它自己的``this``值。

在箭头函数中，无论函数是怎么调用的，``this``不会绑定到一个新的值。``this``总是指向代码所处环境的``this``值。（顺便提一下，``lexical`` 在 ``lexical scope``中也出现，``lexical scope``指词法作用域，也可以说是静态作用域，我想这就是``lexical this``的由来， 静态分析时就确定下来了，而不是动态的）

好的，这边可以会有些疑惑，让我们看一些实例。

首先，你永远不要用箭头函数来定义对象的方法，因为这样方法中的``this``值就不在指向你的对象了。

```js
let o = {
  // Don't do this
  notThis: () => {
    console.log(this) // Window
    this.objectThis() // Uncaught TypeError: this.objectThis is not a function
  },
  // Do this
  objectThis: function () {
    console.log(this) // o
  }
  // Or this, which is a new shorthand
  objectThis2 () {
    console.log(this) // o
  }
}
```

第二，你*可能不会*像用箭头函数来创建事件监听函数，因为这样函数中的``this``指就不会再指向监听的元素了。

然而，你总是可以通过``event.currentTarget``来获取到正确的``this``值。这也是我说可能不会的原因。

```js
button.addEventListener('click', function () {
  console.log(this) // button
})

button.addEventListener('click', e => {
  console.log(this) // Window
  console.log(event.currentTarget) // button
})
```

第三，在``this``值在你不期望的情况下发生改变的地方，你可能也会使用``lexical this``。例子就是延时函数，使用箭头函数后你就``that``或者``self``来保存``this``。

```js
let o = {
  // Old way
  oldDoSthAfterThree: function () {
    let that = this
    setTimeout(function () {
      console.log(this) // Window
      console.log(that) // o
    })
  },
  // Arrow function way
  doSthAfterThree: function () {
    setTimeout(() => {
      console.log(this) // o
    }, 3000)
  }
}
```

如果你需要在一段时间之后添加或删除一个类，这个用例下箭头函数尤其有用:

```js
let o = {
  button: document.querySelector('button')
  endAnimation: function () {
    this.button.classList.add('is-closing')
    setTimeout(() => {
      this.button.classList.remove('is-closing')
      this.button.classList.remove('is-open')
    }, 3000)
  }
}
```

最后，在箭头函数可以让你代码更整洁的地方尽管使用它，就像上面提过的``moreThan20``

```js
let array = [1,7,98,5,4,2]
let moreThan20 = array.filter(num => num > 20)
```

让我们继续。

## 默认参数

默认参数在ES6中@#$%^&*()_+...，好吧，就是当我们定义函数时，允许我们指定参数默认值。让我们看个例子，你就知道它真的很有用。

```js
function announcePlayer (firstName, lastName, teamName) {
  console.log(firstName + ' ' + lastName + ', ' + teamName)
}

announcePlayer('Stephen', 'Curry', 'Golden State Warriors')
// Stephen Curry, Golden State Warriors
```

第一眼看上去，代码没有问题。但是如果我们要声明一个和任何球队都无关的球员呢？

如果我们不传``teamName``，当前代码就有点尴尬了。

```js
announcePlayer('Zell', 'Liew')
// Zell Liew, undefined
```

我确定undefined不是一个球队 😉。

如果球员是自由球员，把他声明为``Zell Liew, unaffiliated``比``Zell Liew, undefined``会更清晰些，是吧？

为了让``announcePlayer``能输出``Zell Liew, unaffiliated``，一种方法是把``unaffiliated``字符串作为``teamName``传入函数。

ES5中，我们可以这样重构下代码：

```js
function announcePlayer (firstName, lastName, teamName) {
  if (!teamName) {
    teamName = 'unaffiliated'
  }
  console.log(firstName + ' ' + lastName + ', ' + teamName)
}

announcePlayer('Zell', 'Liew')
// Zell Liew, unaffiliated

announcePlayer('Stephen', 'Curry', 'Golden State Warriors')
// Stephen Curry, Golden State Warriors
```

或者，如果你对三元运算符比较熟悉，你可以选择一个精简的版本：

```js
function announcePlayer (firstName, lastName, teamName) {
  var team = teamName ? teamName : 'unaffiliated'
  console.log(firstName + ' ' + lastName + ', ' + team)
}
```

在ES6中，当我们定义参数的时候，我们可以添加等号``=``来设置默认参数。如果我们设置了默认参数，在没传入参数的情况下ES6会自动赋值默认参数。

所以，在下面的代码中，当``teamName``为``undefiend``的时候，它会默认设置成``unaffiliated``:

```js
const announcePlayer = (firstName, lastName, teamName = 'unaffiliated') => {
  console.log(firstName + ' ' + lastName + ', ' + teamName)
}

announcePlayer('Zell', 'Liew')
// Zell Liew, unaffiliated

announcePlayer('Stephen', 'Curry', 'Golden State Warriors')
// Stephen Curry, Golden State Warriors
```

相当酷，不是吗？:)

还有一点。如果你想调用默认值，你可以手动传入``undefined``。当你的需要的默认值不是最后一个参数时，手动传入``undefined``可以帮到你。

```js
announcePlayer('Zell', 'Liew', undefined)
// Zell Liew, unaffiliated
```

这就是你需要了解的默认参数。 这很简单，非常有用:)

## 解构

解构是一种能**便捷地从数组和对象中取值的方式**。数组解构和对象解构存在一些细微的差别，所以让我们分别讨论它们。

#### 对象解构

首先你有下面这个对象：

```js
const Zell = {
  firstName: 'Zell',
  lastName: 'Liew'
}
```

为了获取到``firstName``和``lastName``的值，你要创建两个变量，然后一个个赋值，像这样：

```js
let firstName = Zell.firstName // Zell
let lastName = Zell.lastName // Liew
```

用上解构的话，你可以用一行代码创建并赋值这些变量。下面展示如何解构对象：

```js
let { firstName, lastName } = Zell

console.log(firstName) // Zell
console.log(lastName) // Liew
```

看到了没？声明变量时通过添加``花括号``（``{}``），我们告诉JavaScript创建前述的变量，然后把``Zell.firstName``赋值给``firstName``，把``Zell.lastName``赋值给``lastName``。

这就是底层所做的事：

```js
// What you write
let { firstName, lastName } = Zell

// ES6 does this automatically
let firstName = Zell.firstName
let lastName = Zell.lastName
```

现在，如果一个变量名已经被使用了，我们不能再次声明（尤其当你使用``let``或者``const``的时候）。

下面赋值将会失败：

```js
let name = 'Zell Liew'
let course = {
  name: 'JS Fundamentals for Frontend Developers'
  // ... other properties
}

let { name } = course // Uncaught SyntaxError: Identifier 'name' has already been declared
```

如果你碰到了上述情况，你可以使用**带分号（``:``）的解构来重命名变量**

在下面这个例子中， 我创建了一个变量``courseName``并把``course.name``的值赋值给了它。

```js
let { name: courseName } = course

console.log(courseName) // JS Fundamentals for Frontend Developers

// What ES6 does under the hood:
let courseName = course.name
```

还要提到一点。

不要担心解构一个不存在对象的中变量，它会返回``undefined``。

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}

let { package } = course

console.log(package) // undefined
```

等下，这不是全部，还记得默认参数吗?

你也可以为你的解构变量写默认参数，语法和你定义函数时一样。

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}

let { package = 'full course' } = course

console.log(package) // full course
```

你甚至可以在提供默认参数的情况下重命名变量。只要结合两者。一开始这看上去有的滑稽，但是只要你经常使用你会很快习惯：

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}

let { package: packageName = 'full course' } = course

console.log(packageName) // full course
```

这就是解构对象的全部内容了，让我们继续来看下解构数组😄。

#### 解构数组

解构数组和解构对象类似。我们使用**方括号**（``[]``）代替花括号（``{}``）。

当你使用解构数组时，

+ 你的第一个变量对应的就是数组第一个元素
+ 你的第二个变量对应的就是数组第二个元素
+ 类似向下。。。

```js
let [one, two] = [1, 2, 3, 4, 5]
console.log(one) // 1
console.log(two) // 2
```

有可能你解构的变量数超出了数组的长度。这种情况发生时，额外的解构变量会是``undefined``。

```js
let [one, two, three] = [1, 2]
console.log(one) // 1
console.log(two) // 2
console.log(three) // undefined
```

当解构数组时，我们通常只解构我们需要的变量。如果你想要获取数组剩余的部分，你可以使用剩余操作符（``...``），像这样:

```js
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...rest] = scores

console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
console.log(rest) // [90, 87, 85]
```

我们会在下个部分来讨论剩余操作符。现在，让我们讨论下数组解构的能力 - 变量交换。

#### 使用解构数组来交换变量值

假设你有两个变量，``a``和``b``。

```js
let a = 2
let b = 3
```

你想要交换这两个变量值，``a = 3``、``b = 2``。在ES5中，你临时的变量来完成交换：

```js
let a = 2
let b = 3
let temp

// swapping
temp = a // temp is now 2
a = b // a is now 3
b = temp // b is now 2
```

尽管它是有效的，逻辑有点模糊和令人困惑，尤其还引入了第三个变量。

现在来看下ES6是怎么使用解构数组来完成变量值交换的：

```js
let a = 2
let b = 3; // semicolon required because next line begins with a square bracket

// Swapping with destructured arrays
[a, b] = [b, a]

console.log(a) // 3
console.log(b) // 2
```

💥💥💥. 相比于之前的变量交换方法，简单多了！ :)

接下里，让我们讨论下解构对象和数组在函数中运用。

#### 在声明函数时使用解构对象和数组

解构最棒的地方就是你可以在任何地方使用它。正如字面意思，你甚至可以在函数中使用解构对象和数组。

假设我们有一个函数接受一个数组，里面存着成绩分数，然后返回一个前三分数的对象。这个函数类似我们解构数组时所作的。

```js
// 注: 你不需要箭头函数就能使用其他ES6特性。
function topThree (scores) {
  let [first, second, third] = scores
  return {
    first: first,
    second: second,
    third: third
  }
}
```

另外一种写这个函数的方法是当声明函数时就解构数组。这样，你可以少写一行代码。同时，我们也知道我们接受了一个数组参数。

```js
function topThree ([first, second, third]) {
  return {
    first: first,
    second: second,
    third: third
  }
}
```

超级酷，不是吗？😄

现在，给你一个快速的小测验。因为我们可以把默认参数和解构结合一起使用，所以下面代码怎么解释？

```js
function sayMyName ({
  firstName = 'Zell',
  lastName = 'Liew'
} = {}) {
 console.log(firstName + ' ' + lastName)
}
```

这是一个棘手的问题。 我们将几个特性组合在一起。

首先，我们可以看到的是这个函数接受一个对象参数，这个参数是可选的，当值是``undefined``时有个默认值``{}``。

其次，我们尝试从对象中解构``firstName``和``lastName``变量。如果变量存在，就使用它。

最后，如果``firstName``和``lastName``在所给的对象中未定义，我们分别设置它们为``Zell``和``Liew``。

所以，函数会产生下面的结果：

```js
sayMyName() // Zell Liew
sayMyName({firstName: 'Zell'}) // Zell Liew
sayMyName({firstName: 'Vincy', lastName: 'Zhang'}) // Vincy Zhang
```

将解构和默认参数结合在一起相当酷，我喜欢。

接下里，让我们看下剩余和扩展运算。

## 剩余参数和扩展运算

剩余参数和扩展运算符看起来很像。它们都是使用三个点（``...``）。

它们的不同点取决它们被用来做什么。这就是它们命名不一样的原因。那么，让我们分别看一下剩余参数和扩展操作符。

#### 剩余参数

简单解释下，剩余参数意味着将其余的东西打包成一个数组。它把逗号分隔的一系列参数转换成数组。

让我们看下剩余参数的实际操作。想象下我们有一个函数，``add``，用于对所有参数求和。

```js
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // 55
```

在ES5中，当我们不知道函数参数个数时，我们依靠``arguments``变量来处理。``arguments``变量是类数组的``Symbol``。

```js
function sum () {
  console.log(arguments)
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

![arguments](./images/arguments.png)
> Arguments是个``Symbol``，不是数组

参数求和的一个方法是使用``Array.prototype.slice.call(arguments)``把参数转换成数组，然后使用数组方法``forEach``或``reduce``来循环。

你确定你自己会使用``forEach``来求和，所以我们看下``reduce``：

```js
// ES5 way
function sum () {
  let argsArray = Array.prototype.slice.call(arguments)
  return argsArray.reduce(function(sum, current) {
    return sum + current
  }, 0)
}
```

使用ES6的剩余参数语法，我们可以**直接把所有逗号分隔的参数打包成一个数组**。

```js
// ES6 way
const sum = (...args) => args.reduce((sum, current) => sum + current, 0)

// ES6 way if we didn't shortcut it with so many arrow functions
function sum (...args) {
  return args.reduce((sum, current) => sum + current, 0)
}
```

有没有更简洁了？

现在，我们简要看下我们在解构章节碰到的剩余参数语法。在那里，我们尝试从分数数组中解构成前三的分数。

```js
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third] = scores

console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
```

如果我们想要其他剩余的分数，我们可以使用剩余参数来把其他分数打包成一个数组。

```js
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores

console.log(restOfScores) // [90, 97, 95]
```

如果你还是有一些疑惑，你只要记住这点：**剩余参数会把所有东西打包进一个数组**。它出现在函数参数和解构数组中。

接着，我们继续来看扩展运算。

#### 扩展运算符

扩展运算符和剩余参数行为上正好是相反的。简单地说，它接受一个数组并将它(如jam)传到一个逗号分隔的参数列表中。

```js
let array = ['one', 'two', 'three']

// These two are exactly the same
console.log(...array) // one two three
console.log('one', 'two', 'three') // one two three
```

扩展运算符经常用于连接数组，这种形式比较容易阅读和理解。

例如，你想把下面的数组组合在一起：

```js
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']
```

ES5连接数组使用的是``Array.concat``方法。你可以链式调用``Array.concat``来连接数组，就像这样：

```js
// ES5 way
let combinedArray = array1.concat(array2).concat(array3)
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
```

ES6有了扩展运算符，你可以把这些数组全部展开到一个新数组中，只要习惯了这样方式更容易阅读。

```js
// ES6 way
let combinedArray = [...array1, ...array2, ...array3]
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
```

扩展运算符也可以用来在不改变原数组的情况从数组中删除值。这里常用在Redux中。如果你感兴趣的话，强烈推荐你看[Dan Abramove的视频](https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)

这就是扩展运算符的全部内容了。

## 对象字面量提升

从你开始写JavaScript开始，Objects应该对你来说应该是相对的熟悉。以防你不了解它们，它们看起来是这样的:

```js
const anObject = {
  property1: 'value1',
  property2: 'value2',
  property3: 'value3',
}
```

ES6对象字面量扩展带来了三个你会喜欢的提升。它们是：

+ 属性值简写
+ 方法简写
+ 计算的对象属性名

让我们分别看下他们，我保证会很快的 :)

#### 属性值简写
 
你有没有注意到，有时把变量赋值给对象属性时，它们名字是一样的。看上去就像这样:

```js
const fullName = 'Zell Liew'

const Zell = {
  fullName: fullName
}
```

好吧，你难道不希望你可以用更短的方式写这个吗?因为这个属性(``fullName``)和值(``fullName``)就是一样的。

(Oh 你被宠坏了 😝).

好消息是，你可以的! :)

ES6对象字面扩展就有属性简写。这意味着你可以只写变量，当你变量名和属性名一样的时候。ES6来处理帮你处理。

下面就是它的样子：

```js
const fullName = 'Zell Liew'

// ES6 way
const Zell = {
  fullName
}

// Underneath the hood, ES6 does this:
const Zell = {
  fullName: fullName
}
```

很整齐，呃？ 现在，我们要写的代码少了，我们可以更快打完代码开心地回家了。

![dancing](./images/dancing.gif)
> Wheeeee! Happy! :)

当我跳舞的时候，请继续走下去，以达到更简短的效果。 我很快就会加入你。

#### 方法简写

方法是与对象属性关联的函数。 他们只是因为它们的功能而被特意命名:)

这是一个方法的例子：

```js
const anObject = {
  aMethod: function () { console.log("I'm a method!~~")}
}
```

使用ES6，我们可以更简洁地来写方法。我们可以在方法声明时移除``: function``，它还是可以正常运行。

```js
const anObject = {
  // ES6 way
  aShorthandMethod (arg1, arg2) {},

  // ES5 way
  aLonghandMethod: function (arg1, arg2) {},
}
```

有了这个提升，对象都可以使用这种简写方式，所以不要再使用箭头函数来定义方法了。因为你会破坏``this``上下文（如果你忘了为什么的话可以回头看下箭头函数章节）

```js
const dontDoThis = {
  // Noooo. Don't do this
  arrowFunction: () => {}
}
```

这就是对象方法的简写。让我们继续来看下最后一个提升。

#### 计算的对象属性名

有时你创建对象时需要一个动态的属性名。在以前，你要创建对象，然后在把你的属性名加上去，像这样：

```js
// ES5
const newPropertyName = 'smile'

// Create an object first
const anObject = { aProperty: 'a value' }

// Then assign the property
anObject[newPropertyName] = ':D'

// Adding a slightly different property and assigning it
anObject['bigger ' + newPropertyName] = 'XD'

// Result
// {
//   aProperty: 'a value',
//   'bigger smile': 'XD'
//   smile: ':D',
// }
```

在ES6中，你不需要在使用这个迂回的方式了。你可以在创建对象时直接定义动态的属性名。关键一点是你要用方括号把属性名围起来。

```js
const newPropertyName = 'smile'

// ES6 way.
const anObject = {
  aProperty: 'a value',
  // Dynamic property names!
  [newPropertyName]: ':D',
  ['bigger ' + newPropertyName]: 'XD',
}

// Result
// {
//   aProperty: 'a value',
//   'bigger smile': 'XD'
//   smile: ':D',
// }
```

很棒，不是吗？

这就是对象字面量提升的所有内容了。我是不是说过会很快的？ :)

让我们继续看另外一个我超喜欢的很棒的特性：模板字符串

## 模板字符串

在JavaScript中处理字符串是非常笨拙的。当我们之前在默认参数章节创建``announcePlayer``函数时，你可能自己已经体会到了。那里，我们创建空字符串，来把它们连接在一起。

```js
function announcePlayer (firstName, lastName, teamName) {
  console.log(firstName + ' ' + lastName + ', ' + teamName)
}
```

在ES6中，有了模板字符串，这个问题不会出现了。

为了创建模板字符串，你要用倒引号（`` ` ``）来包裹字符串。在倒引号中，你可以访问一个特殊的占位符(``${}``)，里面可以正常使用JavaScript。

这里就是它实际的样子：

```js
const firstName = 'Zell'
const lastName = 'Liew'
const teamName = 'unaffiliated'

const theString = `${firstName} ${lastName}, ${teamName}`

console.log(theString)
// Zell Liew, unaffiliated
```

看到了吗？我们用模板字符串把所有东西组合在了一起！在模板字符串中，英文也是正常的。几乎像在使用模板引擎 :)

模板字符串中最棒的部分是我们可以用它轻松的创建多行字符串。这是可行的：
```js
const multi = `One upon a time,
In a land far far away,
there lived a witich,
who could change night into day`
```
![multiline](./images/multiline.png)
> 多行字符串正常工作

一个窍门是使用模板字符串在JavaScript中创建HTML元素，如果需要的话。（注：这可以不是最好的创建方式，但是仍然把一个个创建好）

```js
const container = document.createElement('div')
const aListOfItems =
  `<ul>
    <li>Point number one</li>
    <li>Point number two</li>
    <li>Point number three</li>
    <li>Point number four</li>
  </ul>`

container.innerHTML = aListOfItems

document.body.append(container)
```

模板字符串的另外一个特性叫标签模板。“标签”指的就是函数，可以操作紧跟在后面的模板字符串，如果你想要替换任何字符串的话。

这就是它的样子：

```js
const animal = 'lamb'

// This a tag
const tagFunction = () => {
  // Do something here
}

// This tagFunction allows you to manipulate the template literal.
const string = tagFunction `Mary had a little ${animal}`
```

说实话，尽管标签函数看上去很酷，但是我还实际使用过它们。如果你想要了解更多，我建议你读[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

这就是模板字符串。

## 总结

Woo! 这几乎是我经常使用的所有很棒的ES6特性。ES6真是棒极了，它绝对值得花点时间去学习，同时你也可以理解别人在写什么了。