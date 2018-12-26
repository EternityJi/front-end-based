# vue的响应式数据

Vue.set(obj, name, value) :作用  增加一个响应式数据

vm.$set(obj, name, value)

## 响应式数据数组的说明

对象:增加或者删除一个属性
数组操作属性下标和长度检测  Vue.set  vm.$set

所以避免使用下标和长度  多用一些数组的方法

## vue异步DOM更新问题

如果vue中的数据发生了改变  让DOM跟着改变

改完数据  想获取元素 就放在nextTick()方法中执行  
(在第一时间获取dom元素)

1.数据改变  页面DOM会跟着发生  这个更新过程是异步 
2.修改完之后 立马获取元素  就用nextTick方法中 执行

##　组件　

方便维护

组件是一个复用的特殊的vue实例 带有一个名字
组件的配置参数和vue的配置参数是一样的  除了el  组件加上template属性

1.定义一个组件  就是定义一个vue实例

## 组件注意点

//组件template必须有一个根元素  
// '' 模板字符串(es6)
在es6中  允许使用''来定义字符串
//不会是el  data必须是个函数 而且必须有返回值(返回一个对象)

特点: 1.允许换行
      2.可以使用插值 ${}   <div>${{ age }}</div>
      3.

定义的组件的名字不能和原有的标签名一样

为什么data必须是一个函数  是为了保证每个组件的数据时独立的

定义组件和定义vue实例差不多

## 组件是一个独立的个体

组件是一个独立额个体  数据只有自己能用  组件是封闭的
组件使用到的数据只有自己提供  

组件通讯
