---
outline: deep
---

# Symbol

> Symbol 是一种特殊的数据类型；
>
> Symbol 的值是唯一的，用来解决命名冲突的问题；
>
> Symbol 值不能与其他数据进行运算，作为对象属性的键值，必须使用Symbol函数生成；
>
> Symbol 定义的对象不能使用for..in循环和Object.keys()方法，但是可以使用Object.getOwnPropertySymbols()和Reflect.ownKeys()方法获取对象的所有键名；

## 一、语法
```js
// 创建一个 Symbol 值
let s = Symbol();
console.log(s , typeof s); // Symbol() typeof Symbol

let s2 = Symbol('foo'); // Symbol(foo)
let s3 = Symbol('foo'); // Symbol(foo)
console.log(s2 === s3); // false

// 创建一个 Symbol 值
let s4 = Symbol.for('foo'); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
let s5 = Symbol.for('foo'); // 从 symbol 注册表中读取键为"foo"的 symbol
console.log(s4 === s5); // true，证明了警告说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol

```
:::warning 警告
Symbol.for(key) 方法会根据给定的键 key，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中

为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```
:::

## 二、Symbol 的应用
```js
const game = {
    name: 'game',
}
game[Symbol.for('score')] = 100;
game[Symbol.for('level')] = 1;
game[Symbol.for('score')] = 66;
console.log(game);  // { name: 'game', [Symbol(score)]: 66, [Symbol(level)]: 1 }
```

## 三、Symbol 静态属性
[学习更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
