# BOM

BOM:浏览器对象模型  提供了一套操作浏览器功能的工具

BOM
window(onload open/close  setTimeOut(setInterVal) history location screen)

DOM
document=>获取元素方法=>style属性=>节点操作=>注册事件

BOM包含的内容很多，但是很多东西都不太常用，在BOM中需要掌握的大知识点就一个，那就是定时器 。还有一些其他小知识点

## window

1.window对象是一个全局对象 也可以说是javascript中的顶级对象
2.像document,alert().console.log()这些都是window的属性  其实BOM中基本所有的属性和方法都是属性window的
3.所有定义在全局作用域中的变量,函数都会变成window对象的属性和方法。
4.window对象下的属性和方法调用的时候可以省略window

## window.onload(★★)

window.onload事件会在窗体加载完成后执行  通常我们会称之为入口函数

window.onload = function(){
    //里面的代码会在‘窗体加载完成后执行’
    //‘窗体加载’完成包括文档树(DOM html)的加载 还有图片 文件的加载完成
}

如果有图片加载 那么代码一定要写到window.onload里面   否则会出现图片没有加载完成 获取到的高度和宽度不对的情况

浏览器会对页面的加载做优化  在加载图片的时候  图片的引入会延迟

```javascript
<img src="./01.png" alt="">

window.onload = function () {

  var img = document.querySelector('img');
  console.log(img.width);
  console.log(img.height);

}

//1.img也不能写在script的后面
//2.要写在window.onload的里面
```

## window.open和window.close(了解)

1.window.open()打开一个窗口
//语法：window.open(url, [name], [features]);
//参数1：需要载入的url地址
//参数2：新窗口的名称或者targt属性
//_blank:如果指定为_blank,表示在新的窗口打开
//参数3：窗口的属性，指定窗口的大小
//返回值：会返回刚刚创建的那个窗口，用于关闭
//示例：
var newWin = window.open("http://www.baidu.com","_blank", "width=300,height=300");

//参数配置：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open

2.window.close()关闭窗口

newWin.close()；//newWin是刚刚创建的那个窗口
window.close();//把当前窗口给关闭了

## 延时器与定时器(★★★)

1.setTimeout(延时器)
设置延时器:
// 语法: setTimeOut(callback,time)
// 参数1: 回调函数, 时间到了就会执行
// 参数2: 延时的时间  毫秒为单位 1s = 1000毫秒
// 返回 : 定时器的id,用于清除
var timer = setTimeOut(function(){
//1秒后将执行的代码。
}, 1000);

清除延时器
//语法 : clearTimeOut(timeerId)
//参数 : 定时器id
// 示例 :
clearTimeOut(timer) ; // 清除上面定义的定时器

2.setInterval 定时器
setInterval 方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间间隔。  (每隔一段时间执行一段代码)

定时器除非清除，否则会一直执行下去。

设置定时器:

// 语法 :var timerId = setInterval（func,dealy）;
// 参数1 ： 重复执行的函数
// 参数2 : 每次间隔的毫秒数
// 返回 : 定时器的id,  用于清除
// 示例 : 
var timer = setInterval(function(){
  //重复执行的代码
},1000);

清除定时器:
//语法 : clearInterval(intervalId);
//参数 : 定时器id
// 示例 :
clearInterval(timerId) // 清除上面的定时器

案例:
    短信验证码案例
    电子案例:

## location对象

location对象也是一个window的一个属性
location其实对应的就是浏览器的地址栏

常用的属性和方法
 location.href:控制地址栏的地址
 location其实对应的就是浏览器中的地址栏

案例:注册成功  3秒后跳转到首页
location.reload();让页面重新加载
location.reload();刷新

http://www.xmg.com:8080/index.html?id=666&psd=123#xxx  

- location.hash  //哈希值 其实就是锚点     ==> #xxx
- location.host  //服务器 服务器名+端口号  => www.xmg.com:8080
- location.hostname //服务器名            =>  www.xmg.com
- location.pathname //路径名             => index.html
- location.port //端口                   => 8080
- location.protocol //协议               => http 
- location.search //参数                 => ?id=666&psd=123

## 其它对象

history对象表示页面的历史

// 随便打开一个网页 可以演示
//后退：
history.back();
history.go(-1);
//前进：
history.forward();
history.go(1);

screen对象
console.log(screen.width);//屏幕的宽度 
console.log(screen.height);//屏幕的高度
console.log(screen.availWidth);//浏览器可占用的宽度
console.log(screen.availHeight);//浏览器可占用的高度
