---
outline: deep
---

# Iterator

> Iterator 是一种机制，用来遍历对象。

## 一、说明
```js
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧', '白骨精'];

// 使用 for...in 遍历数组
for (let i in xiyou) {
    console.log(i); // 输出：0 1 2 3 4
}
// 使用 for...of 遍历数组
for (let v of xiyou) {
    console.log(v); // 输出：唐僧 孙悟空 猪八戒 沙僧 白骨精
}
```
::: info iterator运行机制
1. 创建迭代器对象

通过调用一个可迭代对象（如数组、Map、Set等）的\[Symbol.iterator\]()方法来创建迭代器对象。

1. 调用 next() 方法

每次调用迭代器对象的next()方法，它会返回一个包含value和done属性的对象。
value：当前迭代项的值。
done：布尔值，表示迭代是否完成。如果迭代未完成，则为false；如果迭代完成，则为true。

3. 迭代过程

当done为false时，表示还有数据可以迭代，value会返回下一个迭代项的值。
当done为true时，表示迭代已经结束，此时value通常为undefined。

4. 遍历结束

当done为true后，再次调用next()不会改变其状态，依旧返回{ value: undefined, done: true }。

```js
let arr = ['a', 'b', 'c'];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```
:::

:::warning 注意
需要自定义遍历数据的时候，要想到使用迭代器。
:::

## 二、自定义遍历对象

**改造前**

```js
// 创建一个对象
const team = {
    name: "LOL",
    members: ["Jinx", "Vayne", "Lucian", "Kayn", "Yasuo"],
}

for(let v of team){
    console.log(v);
}
```

**报错**

```js
Uncaught TypeError: team is not iterable
```

**改造后**

```js
const team = {
    name: "LOL",
    members: ["Jinx", "Vayne", "Lucian", "Kayn", "Yasuo"],
    [Symbol.iterator](){
        // 索引变量
        let index = 0;
        return {
            next:() => {
                // 判断索引是否小于数组长度
                if(index < this.members.length){
                    return {
                        value: this.members[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for(let v of team){
    console.log(v); // Jinx Vayne Lucian Kayn Yasuo
}
```


