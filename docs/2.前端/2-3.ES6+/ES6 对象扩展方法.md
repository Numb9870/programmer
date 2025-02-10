# 对象扩展方法

> 常用的对象扩展方法

## 一、 Object.is() 

> 确定两个值是否为相同值。

```js
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
```

## 二、 Object.assign() 

> 将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```js
let obj = { a: 1 };
Object.assign(obj, { b: 2 }, { c: 3 });
console.log(obj); // { a: 1, b: 2, c: 3 }
```

## 三、 Object.getPrototypeOf() 

> 返回指定对象的原型（内部[[Prototype]]属性的值）。

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true
```


## 四、 Object.setPrototypeOf()

> 可以将一个指定对象的原型（即内部的 [[Prototype]] 属性）设置为另一个对象或者 null

```js
const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"
```

:::danger
由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [[Prototype]] 在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。此外，修改继承的影响是微妙和广泛的，并不仅限于在 Object.setPrototypeOf(...) 语句上的时间花费，而是可能扩展到任何访问已更改 [[Prototype]] 属性的对象的代码。你可以在 [JavaScript 引擎基础知识：优化原型](https://mathiasbynens.be/notes/prototypes) 中了解更多信息。

由于这个特性是语言的一部分，因此引擎开发人员实现该特性的性能（理想情况下）仍然是一个负担。在引擎开发人员解决这个问题之前，如果你担心性能问题，应该避免设置对象的 [[Prototype]] 属性。而是使用 [Object.create()](#object-create) 创建一个具有所需 [[Prototype]] 属性的新对象。
:::

## 五、 Object.keys() 

> 返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.keys(obj)); // ['foo', 'baz']
console.log(Object.keys('foo')); // ['0', '1', '2']
console.log(Object.keys(null)); // []
console.log(Object.keys(undefined)); // []
console.log(Object.keys(true)); // []
console.log(Object.keys(42)); // []
console.log(Object.keys(Symbol('foo'))); // []
console.log(Object.keys(Symbol)); // []
```

## 六、 Object.create() {#object-create}

> 以一个现有对象作为原型，创建一个新对象。

```js
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
```

