---
outline: deep
---

# class

> class 声明创建一个绑定到给定名称的新类。

## 一、class实例化

```js
// ES5
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function(){
    console.log('打电话');
}

// 实例化
let phone = new Phone('华为', 5000);
phone.call(); // 打电话
console.log(phone.brand, phone.price); // 华为 5000

// ES6
class Phone{
    // 构造函数
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    call(){
        console.log('打电话');
    }
}

let phone = new Phone('华为', 5000);
phone.call(); // 打电话
console.log(phone.brand, phone.price); // 华为 5000
```

## 二、class的静态成员和私有字段

> **静态成员**：通过类访问的成员，而不是通过实例访问的成员。
> 
> **私有字段**：通过#声明的成员，只能在类内部访问，不能在类的外部访问。

```js
class Phone{
    // 私有字段
    #color;
    // 静态成员 
    static size = '5.5';
    // 构造函数
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
        this.#color = 'black';
    }

    call(){
        this.#test();
    }

    // 私有方法
    #test(){
        console.log('我是私有方法');
    }
}

console.log(Phone.size); // 5.5
let phone = new Phone('华为', 5000);
console.log(phone.size); // undefined
console.log(phone.#color); // 报错
phone.call(); // 我是私有方法
```

## 三、class的继承

> 继承：子类继承父类的属性和方法，并添加新的属性和方法。

```js
class Phone{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }

    call(){
        console.log('打电话');
    }
}

class SmartPhone extends Phone{
    constructor(brand, price, screenSize){
        // 调用父类的构造函数
        super(brand, price);
        this.screenSize = screenSize;
        this.color = 'white';
    }

    photo(){
        console.log('拍照');
    }
}

let phone = new SmartPhone('华为', 5000, '5.5');

console.log(phone.brand, phone.price, phone.screenSize, phone.color); 
// 华为 5000 5.5 white

phone.call(); // 打电话
phone.photo(); // 拍照

```

## 四、class子类对父类方法的重写

```js
class Phone{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    call(){
        console.log('打电话');
    }
}

class SmartPhone extends Phone{
    constructor(brand, price, screenSize){
        super(brand, price);
        this.screenSize = screenSize;
    }
    // 重写父类的方法
    call(){
        console.log('我可以打电话');
    }
}

let phone = new SmartPhone('华为', 5000, '5.5');
phone.call(); // 我可以打电话
```

## 五、class中的get和set

```js
class Phone{

    get brand(){
        console.log('get brand');
        return 'i love you'
    }
    set brand(value){
        console.log('set brand');
    }
}

let phone = new Phone();
console.log(phone.brand); 
// 第一行输出：get brand
// 第二行输出：i love you

console.log(phone.brand = '华为');
// 输出：set brand

```
