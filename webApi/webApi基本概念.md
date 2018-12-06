# webApi的基本概念

## 学习Web API  我们应该学习什么

ECMAScript DOM  BOM

1.ECMAScript - JavaScript的核心 
ECMAScript是一套标准, 规范了语言的基本语法和数据类型;
与具体实现无关
2.DOM - 文档对象模型
一套操作页面元素的API
通过DOM提供的API可以获取/操作网页上的元素。
3.BOM 浏览器对象模型
一套操作浏览器功能的API
通过BOM可以操作浏览器窗口, 比如刷新、控制浏览器跳转等;

## DOM  文档对象模型

是一套操作网页元素的API
DOM又称为文档树模型  因为整个HTML文档是一个树型的结构

![](imgs/javascript.png)

## DOM中常见的概念

   1.文档  一个网页可以称为文档  操作页面 就是在操作document
   // DOM 会把整个网页当成一个对象,我们操作这个网页, 只要操作这个document对象即可
   // DOM 会把网页中的所有的东西都当作对象
   2.节点node：网页中的所有内容都是节点(标签,属性,文本)
   3.元素  element :网页中的标签节点

## DOM初体验

1.document.getElementById():通过ID获取元素
参数:字符串类型的id
返回值:一个元素  一个对象
var div = document.getElementById('div');
console.dir(div)

## 关于console.log和console.dir的区别

console.log 打印一个元素的时候 是以标签的形式进行展示的
console.dir  打印的时候  是以对象的形式进行展示的

在DOM  页面中标签的属性 和对象是一一对应的  我们通过 修改DOM对象的属性来修改标签的属性
比如:  img 对象  和 img 标签  是一一对应的  
以后想要操作img标签  只需要操作img对象即可
var img = document.getElementById('img');

## 使用getElementById的注意事项 

1.如果id不存在 返回值为null
2.在DOM中 此方法要写在html内容的后面 保证页面加载完成之后 才能获取到内容
3.Id 不能写成ID 这是一个驼峰命名的
document.getElementById

```javascript
错误1 : 如果获取的是null,然后获取其属性
Uncaught TypeError: Cannot read property 'title' of null
错误2 : 方法写错Id=> ID错了   `getElementByID`
Uncaught TypeError: document.getElementByID is not a function
```


