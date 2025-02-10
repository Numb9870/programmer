---
outline: deep
---

# 对象简化 

> 对象简化 用来简化对象的声明和操作

## 一、示例
```js
let name = 'zhangsan'
let change = function () {
    console.log('更名')
}

const obj = {
    name:name, // [!code --]
    name, // [!code ++]
    change:change, // [!code --]
    change, // [!code ++]
    getAge:function () { // [!code --]
        return 18; // [!code --]
    }, // [!code --]
    getName() { // [!code ++]
        return this.name // [!code ++]
    } // [!code ++]
}
console.log(obj)
```