# es6

vue angular  主要用的是es6

## es6的好处

弥补了一些es3和es5的不足

比如说:
1. 常量  作用域  函数 默认参数  对象代理  的一些不足
es6直接对一些方法进行了封装  用起来 效率会高很多
2. 很多开源框架用的都是es6 所以要懂es6

## 了解的东西

git
Webpack(通过webpack构建) 因为es6是最新的语法  不是所有的浏览器都支持 所以需要W
js

## es6构建环境的安装

1. es6的模块导出的功能

```javascript
export default function(){
   window.console.log("a")
}
import  test from "./src/test"
test()
// a
```

## 常量

es3,es5没有常量的概念
es6中有常量的概念(后端语言都有常量的概念)

ES5中常量的写法

//设置成只读
Object.defineProperty(window,'PI2',{
  value: 3.1415926,
  writable: false
})
但是在es5中  
只用定义一个const 就可以做到只读  不写

## 作用域

es6中作用域:  块级作用域
es6中用{}就可以I形成一个作用域 
而es3,  es5要写自执行函数