---
outline: deep
---

# Promise

> Promise 的出现最重要的是为了统一js中的异步实现方案。

> Promise 语法上 Promise 是一个构造函数用来封装异步操作并可以获取其成功或失败的结果。

## 一、实例化Promise对象

```js
// Promise构造函数接收一个函数作为参数，该函数的两个参数分别是resolve和reject
const p = new Promise((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
        // 异步操作失败，调用reject方法
        if(err) reject('数据库连接失败');
        // 异步操作成功，调用resolve方法
        resolve('数据库中的数据');
    },1000)
})

// then方法用来获取异步操作的结果
p.then(res => {
    console.log(res) // 数据库中的数据
}, err => {
    console.log(err) // 数据库连接失败
})

// catch方法用来获取异步操作失败的结果
p.catch(err => {
    console.log(err) // 数据库连接失败
})
```
