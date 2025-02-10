---
outline: deep
---

# Map

> Map 是一种特殊的对象，它实现了一个键值对的集合，其中的键和值可以是任何类型。
> Map也实现了 `Iterable` 接口，因此可以使用 `for...of` 循环进行迭代。

## 一、声明

```js
// 声明map
let m = new Map();

// 添加键值对
m.set('name', 'John');
m.set('change', function () {
    console.log('改名');
});
console.log(m); // Map(2) { 'name' => 'John', 'change' => [Function (anonymous)] }

// 添加对象作为键
let key = {
    school: 'china'
}
m.set(key, ['清华', '北大']);
console.log(m); // Map(3) { 'name' => 'John', 'change' => [Function (anonymous)], { school: 'china' } => [ '清华', '北大' ] }

// 大小
console.log(m.size); // 3

// 获取值
console.log(m.get('name')); // John

// 删除键值对
m.delete('name');
console.log(m); // Map(2) { 'change' => [Function (anonymous)], { school: 'china' } => [ '清华', '北大' ] }
m.delete(key);
console.log(m); // Map(1) { 'change' => [Function (anonymous)] }

// 判断键是否存在
console.log(m.has('name')); // false

// 遍历map
// for...of循环
for (let item of m) {
    console.log(item); // [ 'change', [Function (anonymous)] ] 
}
// for...of循环 解构
for (let [key, value] of m) {
    console.log(key, value); // change [Function (anonymous)]
}

// 清空map
m.clear(); // Map(0) {}

```
