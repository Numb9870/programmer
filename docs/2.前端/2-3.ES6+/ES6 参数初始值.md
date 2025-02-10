---
outline: deep
---

# 形参初始值 

> 形参初始值 允许给函数的参数设置默认值

## 一、形参初始值
```js
function add(x, y = 0) {
    return x + y;
}
console.log(add(1)); // 1
console.log(add(1, 2)); // 3
```
:::warning 注意：
形参初始值只能出现在形参列表的最后面（潜规则）
:::

## 二、与结构赋值结合
```js
function connect({ host = 'localhost', port = 3306, user, password }) {
    console.log(host, port, user, password);
}
connect({ user: 'root', password: '123456' });
```
