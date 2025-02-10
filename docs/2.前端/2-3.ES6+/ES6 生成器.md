---
outline: deep
---

# 生成器

> 生成器 是es6 提供的一种异步编程解决方法，语法行为与传统函数完全不同

## 一、说明
> yield 关键字用于暂停和恢复生成器函数
```js
function * generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// 输出: 10

console.log(gen.next().value);
// 输出: 20
```
::: tip 
- 箭头函数不能用来定义生成器函数。
- function 和 * 是两个单独的标记，因此它们可以用空白或换行符分隔。
:::

## 二、描述

function* 声明创建一个 GeneratorFunction 对象。每次调用生成器函数时，它都会返回一个新的 Generator 对象，该对象符合迭代器协议。当迭代器的 next() 方法被调用时，生成器函数的主体会被执行，直到遇到第一个 yield 表达式，该表达式指定了迭代器要返回的值，或者用 yield* 委托给另一个生成器函数。next() 方法返回一个对象，其 value 属性包含了 yield 表达式的值，done 属性是布尔类型，表示生成器是否已经返回了最后一个值。如果 next() 方法带有参数，那么它会恢复生成器函数的执行，并用参数替换暂停执行的 yield 表达式。

在 JavaScript 中，生成器——尤其是与 Promises 结合使用时——是一种非常强大的异步编程工具，它们解决了回调函数存在的一些的问题，如回调地狱和控制反转。然而，通过使用异步函数，我们可以更简单地解决这些问题。

在生成器中执行 return 语句会使生成器结束（即返回的对象的 done 属性将被设置为 true）。如果返回一个值，它将被设置为生成器返回的对象的 value 属性。与 return 语句类似，如果生成器内部抛出错误，生成器也会结束，除非在生成器的代码体内捕获该错误。当生成器结束后，后续 next() 调用不会执行生成器的任何代码，只会返回一个形如 {value: undefined, done: true} 的对象。

function* 声明的行为与 function 声明类似——它们会被提升到其作用域的顶部，并且可以在当前作用域的任何位置被调用，且只能在特定的上下文中被重新声明。

## 三、示例
```js
//1s 后控制台输出 111 2s后输出 222 3s后输出 333
function* gen() {
    
    yield setTimeout(() => {
        console.log(111)
        g.next();
    },1000)

    yield setTimeout(() => {
        console.log(222)
        g.next();
    },1000)

    yield setTimeout(() => {
        console.log(333)
        g.next();
    },1000)
}

let g = gen();
g.next(); // 启动生成器
// 输出: 111 222 333

// 模拟获取：用户数据 订单数据 商品数据
function getUser() {
    setTimeout(() => {
        let data = 'user'
        g.next(data)
    },1000)
}
function getOrder() {
    setTimeout(() => {
        let data = 'order'
        g.next(data)
    },1000)
}
function getProduct() {
    setTimeout(() => {
        let data = 'products'
        g.next(data)
    },1000)
}
function* gen() {
    let user = yield getUser()
    console.log(user)
    let order = yield getOrder()
    console.log(order)
    let product = yield getProduct()
    console.log(product)
}

let g = gen();
g.next()

// 输出: user order products


```

## 更多
[查看MDN更多示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*#%E7%A4%BA%E4%BE%8B)
