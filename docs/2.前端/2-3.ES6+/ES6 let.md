---
outline: deep
---

# let

> let 用来声明变量

## 一、语法

```js
let a;
let b,c,d;
let a = 1;
let f = 2, g = 'hello', h = [];
```

## 二、变量不能重复声明 
```js
let start = '猪八戒';
let start = '呆子';
```

::: danger 报错
报错：Uncaught SyntaxError: Identifier 'start' has already been declared
:::

## 三、块级作用域
```js
if (true) {
    let a = 1;
}
console.log(a);
```
::: danger 报错
报错：Uncaught ReferenceError: a is not defined
:::

## 四、不存在变量提升
```js
console.log(song);
let song = 1;
```
::: danger 报错
报错：Uncaught ReferenceError:Cannot access 'song' before initialization
:::

## 五、不影响作用域链
```js
{
    let school = "北京大学"
    function fn(){
        console.log(school);
    }
    fn()
}
```

控制台输出：

```
：北京大学
```
