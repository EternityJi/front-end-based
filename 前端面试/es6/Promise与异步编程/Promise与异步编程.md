# Promise

为了我们的代码更加具有可读性和可维护性，我们需要将数据请求与数据处理明确的区分开来。

1. Promise是ES6提出来的 异步代码的另外一种写法

异步代码的解决方案
2. Promise是一个构造函数  一个Promise对象内部一般会封装一个异步的操作

```js

// 如何创建一个Promise对象(new 一个Promise  里面放一个异步函数)
//p 是一个异步任务 读a的文件
let p1 = new Promise(function(resolve,reject){
    //里面放一个异步的操作
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
          //失败 调用reject
          reject(err)
        } else {
          resolve(data)
        }
    })
})
let p2 = new Promise(function(resolve,reject){
    //里面放一个异步的操作
    fs.readFile('b.txt','utf-8',(err,data)=>{
        if(err){
          //失败 调用reject
          reject(err)
        } else {
          resolve(data)
        }
    })
})
// axios()
// $confirm()
// 如何使用一个Promise对象
// promise对象的.then返回的还是promise对象
// promise 的结果 不是成功或者失败
p1.then((data)=>{//调用resolve方法
  console.log(data)
  return p2
}).then(data=>{
   console.log(data)
   return readfile('b.txt')
}).then(data=>{
   console.log(data)
   return readfile('c.txt')
}).then(data=>{
  console.log(data)
   return readfile('d.txt')
})catch(err=>{//调用reject方法
   console.log('err')
})

```

## 异步编程的背景

js引擎建立在单线程事件循环的概念上  单线程意味着同一时刻只能执行一段代码
Java与c++ 这种允许同时执行多段不同代码的多线程语言形成了反差

多段代码可以同时访问或者修改状态 维护并保护这些状态就变的很难 (这也是基于多线程的软件中出现bug的常见根源之一)

## js执行代码的步骤

js引擎在同一时刻只能执行一段代码  那些暂时不执行的代码会被放在作业队列中(job queue)中
每当一段代码准备被执行  它就会被添加到作业队列中

当JS引擎结束当前代码的执行后  事件循环就会执行队列中的下一个作业

事件循环（event loop）是js引擎的一个内部处理线程  
能监视代码的执行并管理作业队列
既然是一个队列   作业就会从队列中的第一个开始 依次运行到最后一个

## 事件模型

事件是异步的
执行过程  当触发事件后 会将任务添加到队列的尾部  当其它的前面的所有任务结束之后  才开始执行

## 回调模式

即node.js中的回掉函数  也是异步编程的  当 调用的时候  是放在队列的结尾

回调函数 嵌套回调函数  容易造成回调地狱 

Promise就是为了解决这些问题  

### Promise基础

Promise是为异步操作的结果准备的占位符   函数可以返回一个Promise   而不必要订阅一个事件或向函数传递一个回调参数 

```js
let promise = readFile('example.txt')
会返回一个Promise对象 以表示异步读取操作 
```

then()方法 在所有的Promise上都存在  并且接受两个参数  
参数1: Promise被完成时要调用的函数
参数2: Promise被拒绝时要调用的函数

```js

let Promise = readFile ('example.txt')

Promise.then(function(contents){
  // 完成
  console.log(contents);
},function(err){
  // 拒绝
  console.log(err.message);
});

Promise.then(function(contents){
  // 完成
  console.log(contents);
}

Promise.then(function(contents){
  // 拒绝
  console.log(err.message);
}

这三个then()调用都操作在同一个Promise	上。
第一个调用同时监听了完成与失败；
第二 个调用只监听了完成，错误不会被报告；
第三个则只监听了拒绝，并不报告成功信息。

```

### 什么是promise

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理，让开发者不用再关注于时序和底层的结果。Promise的状态具有不受外界影响和不可逆两个特点。

### （Promise如何解决异步信任问题的）

传统的回调有五大信任问题：

1. 调用回调太早
2. 调用回调过晚（或没有被调用）
3. 调用回调次数过少或过多
4. 未能传递所需的环境和参数
5. 吞掉可能出现的错误和异常


### promise解决上面的问题

1.调用回调过早

对于Promise来说，即使是立即完成的Promise也无法被同步观察到，也就是说一个Promise调用then()的时候，即使这个Promise已经决议了，提供给then的回调也总会被异步调用。

2.调用回调过晚（或没有被调用）

对于一个Promise对象注册的每一个观察回调都是相对独立、互不干预的。而Promise对象调用resolve()和reject()时，每个注册的观察回调也都会被自动调度。所以这些观察回调的任意一个都无法影响或延误对其他回调的调用。

此外，关于回调未调用。正常情况下，没有任何东西可以阻止Promise向你通知它的决议，即使你的JavaScript代码报错了，一会通过异常回调来捕获到。如果Promise永远不被决议的话，Promise本身已提供了竞态的抽象机制来作为解决方案。

3.调用回调次数过少或过多

Promise的定义方式使得它只能被决议一次。即使代码中出现多次决议，这个Promise也会接受第一次决议，并会忽略掉其他任何后续调用。所以任何通过then()注册的回调只会被调用一次。

4.未能传递所需的环境和参数

凡是被决议的值都会传递到观察回调中，如果没有显示的决议值也会传递一个undefined给观察回调。需要注意的是，Promise只允许传一个决议值，其他值将会被默默忽略掉。

5.吞掉可能出现的错误和异常

如果在创建Promise时，存在JavaScript代码错误，会直接导致该Promise的拒绝决议，那么你可以通过reject()来捕获异常，代码中的任何异常都不会吞掉。

以上的回答十分的啰嗦，但是如果上面的五点你都能记住的话，你会了解很多关于Promise的细节问题，也会应对一些面试官的追问，如Promise的then()会不会被重复调用 等。


### Promise是如何捕获异常的？与传统的try/catch相比有什么优势？

传统的try/catch捕获异常方式是无法捕获异步的异常的。

而对于Promise对象来说，构造Promise实例时的代码如果出错，则会被认为是一个拒绝的决议，并会向观察回调中传递异常信息。所以即使是一个异步的请求，Promise也是可以捕获异常的。此外，Promise还可以通过catch回调来捕获回调中的异常。

### Promise中的catch方法

catch()和then()是功能等效的

### 优点  

then()与catch()背后的意图是让你组合使用它们来正确处理异步操作的结果。此系统要 优于事件与回调函数，因为它让操作是成功还是失败变得完全清晰（事件模式倾向于在出错 时不被触发，而在回调函数模式中你必须始终记得检查错误参数）。只需知道若你未给 Promise	附加拒绝处理函数，所有的错误就会静默发生。建议始终附加一个拒绝处理函数， 即使该处理程序只是用于打印错误日志

### 总结

Promise是一个不错异步操作解决方案，他解决了传统的通过回调和事件来解决异步操作的诸多问题，如“竞争”，回调信任度低的问题。ES6中也提供了标准的Promise供大家使用。