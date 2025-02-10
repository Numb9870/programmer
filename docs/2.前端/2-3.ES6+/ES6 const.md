---
outline: deep
---

# const

> const 用来声明常量

## 一、语法
```js
const NAME = 'zhangsan';
const PI = 3.14;
const ARR = [1, 2, 3];
const OBJ = { name: 'zhangsan' };
const FN = function () {
    console.log('hello world');
}
```
::: info 注意
常量一般使用大写
:::


## 二、一定要赋初始值
```js
const name;
```
:::danger 报错
Uncaught SyntaxError: Missing initializer in const declaration
:::

## 三、不能被重新赋值
```
const name = 'zhangsan';
name = 'lisi';
```
:::danger 报错
Uncaught TypeError: Assignment to constant variable.
:::

## 四、块级作用域
```js
if (true) {
    const name = 'zhangsan';
}
console.log(name);
```
:::danger 报错
Uncaught ReferenceError: name is not defined
:::

## 五、对于数组和对象，不算对常量的修改
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```
:::info 注意
地址指针不变，所以可以修改
:::

```js
const obj = { name: 'zhangsan' };
obj = 1 // [!code error]
console.log(obj);
```

:::danger 报错
Uncaught TypeError: Assignment to constant variable.
:::

