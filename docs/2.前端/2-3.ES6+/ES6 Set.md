---
outline: deep
---

# Set

> Set 是一个特殊的数组，它不允许有重复的值。 Set 也实现了 `Iterator` 接口，因此可以使用 `for...of` 循环进行迭代。

## 一、声明

```js
const set = new Set([1, 2]);
// 添加元素
set.add(3);
set.add(4);
console.log(set); // Set(4) {1, 2, 3, 4}
console.log(set.size); // 4

// 删除元素
set.delete(3);
console.log(set); // Set(3) {1, 2, 4}

// 判断元素是否存在
console.log(set.has(1)); // true

// 遍历元素
for (const item of set) {
    console.log(item); // 1, 2, 4
}

// 清空元素
set.clear();
console.log(set); // Set(0) {}

```

## 二、实践
```js
// 去重
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
const set = new Set(arr);
console.log(set); // Set(10) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

// 交集
const arr2 = [3, 4, 5, 6, 20];
let result = new Set(arr.filter((item) => arr2.includes(item)));
console.log(result); // Set(4) {3, 4, 5, 6}

// 并集
result = new Set([...arr, ...arr2]);
console.log(result); // Set(11) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20}

// 差集
result = new Set(arr.filter((item) => !arr2.includes(item)));
console.log(result); // Set(6) {1, 2, 7, 8, 9, 10}

```
