# let

1.let声明的变量只在当前的作用域有效

```javascript

{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1

```

2.不存在变量提升

```javascript

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

```

3.不允许重复声明

```javascript

let a = 10;
let a = 1;//报错 Identifier 'a' has already been declared

```

## const

const声明一个只读的常量。常量：值不可以改变的量

```javascript

const PI = 3.1415;
PI = 3; //报错

```

const声明的量不可以改变
const声明的变量必须赋值
如果const声明了一个对象  仅仅保证地址不变

const obj = {name:'zs'};
obj.age = 18;//正确
obj = {};//报错

其它用法和let一样
1.只能在当前代码块中使用
2.不会提升
3.不能重复

## let和const的使用场景

1.如果声明的变量不需要改变  那么使用const
2如果声明的变量需要改变  那么使用let
3.学了const和let之后  尽量别用var


