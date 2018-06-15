## ES6技巧

### Let and const

+ 块级作用域

```js
for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
};
```

+ 块级作用域好处
  + 不在需要立即执行的函数表达式(IIFE)
  + 循环体中的闭包不再有问题
  + 防止重复声明变量

### 箭头函数和lexical this

+ 一行代码
```js
// Find max value
const max = (arr) => Math.max(...arr);

// Sum array
const sum = (arr) => arr.reduce((a, b) => (a + b), 0)
```

### 默认参数

+ 设置必须的函数参数
```js
const required = () => {thrownewError('Missing parameter')};
//The below function will trow an error if either "a" or "b" is missing.
const add = (a = required(), b = required()) => a + b;
add(1, 2) //3
add(1) // Error: Missing parameter.
```

+ 表达式
```js
function bar( x = 2, y = x + 4, z = foo(x)) {
    console.log([ x, y, z ]);
}
bar();  // [ 2, 6, 8 ]
bar( 1, 2, 3 ); //[ 1, 2, 3 ] 
bar( 10, undefined, 3 );  // [ 10, 14, 3 ]
```

### 解构

+ 交换数组
```js
[a, b] = [b, a]
```

+ 函数传参
```js
// ES6
function initialize({controls = {}, models = {}, reducers = {}, actors = []}) {
    // ...
}
// ES5
function initialize(options) {
    var controls = options.controls || {};
    var models = options.models || {};
    var reducers = options.reducers || {};
    var actors = options.actors || {};
}
```

### 剩余参数语法和扩展运算符

+ 数组合并
```js
const one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']
// Old way #1
const result = one.concat(two, three)
// Old way #2
const result = [].concat(one, two, three)
// New
const result = [...one, ...two, ...three]
```

+ 数组复制
```js
const arr = [ ...oldArr ]
```

+ 函数参数
```js
// 当你不知道函数参数个数时。
function foo(...args) {
    console.log(args)
    // 继续传递的话 func(...args)
} 
foo( 'car', 54, 'tree')
```

+ compose
```js
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

### 对象的扩展运算符(ES2018)

+ 移除不想要的属性
```js
let {_internal, tooBig, ...cleanObject} = {el1: '1', _internal:"secret", tooBig:{}, el2: '2', el3: '3'};
console.log(cleanObject);
```
+ 合并对象
```js
let object1 = { a:1, b:2,c:3 }
let object2 = { b:30, c:40, d:50}
let merged = {…object1, …object2} 
```

### 对象字面量扩展语法

+ 属性名简写
```js
const foo = 1
const bar = {a: 2}
const obj = {foo, bar}
```

+ 方法简写
```js
const obj = {
    //Before
    foo: function(){
        return 'foo';
    },

    //After
    bar () {
        return 'bar';
    }
}
```

+ 动态属性名
```js
const prefix = "pre-"
const obj2= {
 [prefix + "test"]: "dynamic"   
}
```


### 模板字符串

+ 定义多行字符串
+ 在字符串中嵌入变量
```js
var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';
var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';
var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;
```

### Set

+ 去重
```js
const arr1 = [1, 2, 3]
const arr2 = [2, 3, 4]
Array.from(new Set([...arr1, ...arr2]]))
```

### Promise
+ 原理：初始``pending``状态，``resolve()``后状态成``fulfilled``，``reject()``后状态成``rejected``

### Async/Await (ES8)
```js
const [user, account] = await Promise.all([
  fetch('/user'),
  fetch('/account')
])
```
### Class
+ Class在语法上更加贴合面向对象的写法
+ Class实现继承更加易读，易理解，对初学者更加友好
+ 本质还是语法糖，使用prototype

### 新方法

+ Object.assign
```js
// merge
Object.assign(o1, o2)

//copy
let copy = Object.assign({}, o1, o2)
```

+ String.repeat()

+ String. startsWith(), endsWith() and includes()

+ Number.isNaN() and Number.isFinite()

+ Math.sign() 

+ Array.fill()