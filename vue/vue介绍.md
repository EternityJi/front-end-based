# vue.js

## vue.js是什么

vue是一套用于构建用户界面的渐进式框架  与其它大型框架不同的是   Vue被设计为自底向上逐层应用
Vue的核心库只关注视图层

## mvm  mvvm

mvc:
    Model:
    View:
    Controller:

mvvm:
    Model:
    View:
    VM:ViewModel
以后使用mvvm 框架  vm框架已经帮我们实现了
核心原理:(双向数据绑定): MOdel发生了  改变  试图也发生了改变
                 View改变 Model也发生

vue中:
   单向数据绑定: {{}}  v-bind   Model===>view
  (双向)双向数据绑定: v-model     model==>view  view==>model
  用来收集表单元素。
    v-model  也可以用在其他元素表单上

input:输入事件(只有输入东西时  才触发)
keyup:按任何键 只要键盘弹起 就触发(一直都触发)
change:输入过程的时候 不触发  当失去焦点时  看内容是否改变  
改变了  会触发一次   不改变就不触发


脏数据检查   轮询(性能不好)  浏览器兼容  好
数据劫持     Object.defineProperty  用于给对象定义一个新的属性  或者修改一个新的属性 
Object.defineProperty(obj,'yanzhi',{

})


定时器节流:
   if(this.timeId)  return;

   事件中传参与不传参的区别  有没有默认的事件对象

   事件对象有什么用:
      阻止默认行为  阻止事件冒泡  打印鼠标位置 XY  获取键盘码keyCode

      passive：用在移动端  scroll  事件  会发生在滚动前 一点点  提高了性能

## vue 初体验

el:指定容器生效的范围
data:使用的数据

## vue  使用注意事项

1.Vue是构造函数  首字母大写
2.vue实例中  el  对象 不能指定body  和  html

## 插值表达式

作用：是为了显示data中的数据  还可以在{{}}中出现表达式

1.是用一对花括号包括的形式 花括号中可以是任意表达式  但是不能是js关键字  比如说  for  if  等等  
2.不能使用data中不存在的数据
3.不能出现js关键字  语句

## 各种指令

### v-bind(单向数据绑定)

作用:因为插值表达式 不能在html标签的属性中使用
所以 需要v-bind指令绑定

v-bind:title  缩写: :title
单向数据绑定

### v-model(双向数据绑定)

v-model主要是用在各种表单中 
实现双向绑定
views==>mode改变
model改变==》views

### v-on (绑定事件)

v-on:click="fn"
v-on:click="fn()"

v-on用于绑定事件  后面跟着一个函数  
函数不传参的话(没有括号) 默认是事件对象e 
如果传参的话 (或者写括号的话)  就没有事件对象了  要想有事件对象 就加一个$event

v-on 简写 为@

## 组件化应用构建

## Vue实例

除了数据属性  Vue实例该暴露了一些有用的实例属性和方法   它们都有前缀$ 以便与用户自定义的属性区分开

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

## 实例生命周期钩子

created  也有一些其它的钩子   在实例生命周期的不同阶段 被调用  如 mounted  updated   destroyed  生命周期钩子的this上下文指向调用它的Vue实例

## vue就地复用策略 

## v-text  

在绑定属性时  更新当前的innerText值
v-html  可以解析标签 

## v-show

v-show 用来操作元素的显示  隐藏  v-show=""  
引号里面是布尔值  false或者true(false隐藏  true  显示)
是通过  display:none  来控制的

v-if =""  是通过增加和删除元素来控制的

## v-else   和 v-else-if

    <p v-if="age >= 18">成年人</p>
    <p v-else-if="age >= 14">青少年</p>
    <p v-else>小屁孩</p>

    const vm = new Vue({
    el: '#app',
    data: {
    msg: 'hello vue',
    isLogin: true,
    age: 18
    }
})

## vue数据双向绑定的原理

怎么监听  对象属性 的改变

1.脏数据检查(改变数据的数据) 轮询  每隔一秒钟(做一次轮询) 就对比一下数据  把data中的数据 都检查一遍   (angular  原理  性能很差  但是浏览器兼容性好  )
把对象中的所有数据都对比一遍  

vue用的是数据的劫持
object.defineProperty()  //看一个数据是否被枚举  es5提出的
//vue 不兼容  ie6,7,8 
object.defineProperty:  作用  


## vue的生命周期函数



