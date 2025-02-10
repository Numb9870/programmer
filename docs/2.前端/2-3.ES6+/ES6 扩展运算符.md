---
outline: deep
---

# 扩展运算符

> 扩展运算符 能将 数组 转换为逗号分隔的 参数序列
> 
> 语法：`...`

## 一、语法
```js

// 数组
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5]

// 函数
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']
function qujing() {
    console.log(arguments);
}
qujing(xiyou) // [Arguments(1)] { '0': [ '唐僧', '孙悟空', '猪八戒', '沙僧' ] }
qujing(...xiyou); // ["唐僧", "孙悟空", "猪八戒", "沙僧"]

```

## 二、扩展运算符的应用

### 1、数组合并
```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

### 2、数组去重
```js
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const newArr = [...new Set(arr)];
console.log(newArr); // [1, 2, 3, 4, 5]
```

### 3、数组克隆
```js
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];
console.log(newArr); // [1, 2, 3, 4, 5]
```

### 4、将伪数组转换为数组
```js
const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
}

const arr = [...obj];
console.log(arr); // ['a', 'b', 'c']

const arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']

const divs = document.querySelectorAll('div');
const arr = [...divs];
console.log(arr); // [div, div, div]
```
