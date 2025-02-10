---
outline: deep
---

# 箭头函数 

> 箭头函数 的语法和普通函数的语法差不多，但是没有函数声明的函数表达式，并且没有函数名。

## 为什么需要箭头函数？

> 为了消除函数二义性

:::details 二义性

function a() {}

1. 指令序列

    a()

2. 构造器

    new a()
:::

## 一、声明
```js
let fn1 = function (a,b) {return a + b;}
let fn2 = (a,b) => {return a + b;}

// 调用
const a = fn1(1,2) // 3
const b = fn2(1,2) // 3
```

## 二、this

> **箭头函数的 this 始终指向函数声明时所在作用域下的this，this是静态的。**

```js
window.name = '清华'
const school = {
    name: '北大',
}

function getName() {
    console.log(this.name)
}

const getName2 = () => {
    console.log(this.name)
}

// 直接调用 this 指向 window
getName() // 清华
getName2() // 清华

// call 方法调用
getName.call(school) // 北大
getName2.call(school) // 清华
```

## 三、不能作为构造实例化对象
```js
const Person = (name,age) => {
    this.name = name
    this.age = age
}
const person = new Person('张三',18)
console.log(person)
```
:::danger 报错
Uncaught TypeError: Person is not a constructor
:::

## 四、不能使用arguments变量
```js
const fn = () => {
    console.log(arguments)
}
fn(1,2,3)
```
:::danger 报错
Uncaught ReferenceError: arguments is not defined
:::

## 五、箭头函数简写
```js
// 箭头函数的参数有多个时，不能省略小括号
const fn = (a,b) => a + b
console.log(fn(1,2)) // 3

// 箭头函数的参数只有一个时，可以省略小括号
const fn2 = a => a
console.log(fn2(1)) // 1

// 箭头函数的函数体只有一条语句时，可以省略大括号和return
const fn3 = () => 1
console.log(fn3()) // 1

// 箭头函数的函数体有多条语句时，不能省略大括号和return
const fn4 = a => {
    console.log(a)
    return a
}
console.log(fn4(1)) // 1
```