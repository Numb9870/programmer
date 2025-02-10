---
outline: deep
---

# 解构赋值 

> 解构赋值 是一种语法，用于从数组或对象中提取值，并赋值给变量

## 一、数组的解构
```js
const arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);
```

控制台输出：

```
1 2 3
```

## 二、对象的解构
```js
const obj = { name: '张三', age: 18, sex: '男' };
let { name, age, sex } = obj;
console.log(name, age, sex);
```

控制台输出：

```
张三 18 男
```
