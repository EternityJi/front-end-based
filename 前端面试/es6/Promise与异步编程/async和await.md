# async 和 await

在async 和 await之下  再无回调

## 用法

async： 用来修饰一个函数  修饰的函数是异步函数(不会阻塞代码的执行)
await:   只能在async函数中使用  等待的是promise对象

1. await会暂停async函数的执行
2. 直到await等待的promise执行完成  直接把promise成功的结果返回

## 优点

1. 代码结构更清晰 更利于维护



