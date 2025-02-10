---
outline: deep
---

# rest

> rest 用于获取函数实参，用来代替函数参数的arguments

## 一、语法
```js
// es5获取函数参数
function foo() {
    console.log(arguments);
}
foo(1,2,3,4,5); // [1,2,3,4,5] 不是数组，是个Object

// es6获取函数参数
function foo(...args) {
    console.log(args);
}
foo(1,2,3,4,5); // [1,2,3,4,5] 是数组

// 注意
function foo(a,b,...args) {
    console.log(args);
}
foo(1,2,3,4,5); // [3,4,5]
```
:::warning 警告
rest参数只能是最后一个参数，否则会报错
:::
