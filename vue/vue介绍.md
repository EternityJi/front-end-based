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


## 计算属性(对应的结果是一个返回值)

注意:计算属性需要写成一个function    因为我们可以把复杂的逻辑放在function 
中   计算属性一定需要有返回值 

计算属性是一个属性  对应的结果是一个函数的返回值  
用的时候  不加括号调用(因为本身是一个返回值)

## 什么时候需要用计算属性 

一般情况下  我们需要根据某个属性   得到另外一个结果的时候 

如果没有计算属性   我们可以在插值表达式中写

```javascript

computed:　｛
　　reverseMsg(){
      //一定要有返回值
      return this.msg.split('').reverse().join('')
 }
}

```

## 计算属性的优点  

计算属性是依赖于缓存设计的 只会渲染一次 当所依赖的值不发生改变 不会重新计算

而且会把计算的结果给存起来  当依赖的属性再次发生改变时 会再次计算

## es6中的箭头函数

## 监听属性 

1.什么是监听属性
2.了解什么是监听属性
3.掌握监听属性的语法
4.什么时候需要监听属性

## todoMvc 

一刷新 就没有了  是因为这是存储在内存里的

把数据存储起来(什么时候存储  当属性改变的时候)

存到localStroage  

## 为什么监听属性

当我们需要知道某个数据是否发生了改变 就用监听属性 
监听属性  其实就是监听vue中某个数的改变 

语法:

watch: {
  mas(value,oldvalue){
    console.log(value,oldvalue);
    //value 改变后的值
    //oldvalue 之前的值
  }
}

## vue监听数据  监听复杂数据类型


复杂数据类型 是一个地址  监听不到  

默认情况下  watch只能监听简单类型    如果监听复杂类型  只能监听到对象地址的改变  对象内部值得改变  是监听不到的


如果监听复杂数据类型  必须用对象
watch: {
    car: {
        handler: function(value){
          console.log("监听到了变化",value)
        },
        是否深度监听 默认值是false
        deep: true, //默认是false  所以直接用方法的话 是监听不到复杂数据类型的
        //immediate：当第一次页面加载的时候  就进行监听  默认是false
        immediate: true
    }
}

总结: 如果监听简单数据类型  写成函数的形式
      如果监听复杂数据类型   就写成对象的形式  deep: 值必须为true

## v-cloak

是为了解决插值表达式  闪烁的问题

禁用网速不能用file协议  要用 http协议

[v-cloak] {
    display: none;
}
//属性选择器

将来  开发都是基于 webpack  插值表达式
闪烁 是因为  加载vue.js 需要时间 

以后不用script加载vue.js

### v-cloak使用步骤 

 1.给使用了插值表达式的元素添加一个v-cloak指令
 2.配合样式

## v-pre

表示 vue渲染的时候   直接跳过 

## v-once

只渲染一次

这两个指令用来提高性能的  

注意 :  不要过渡使用这些指令  如果真的网页比较慢  需要性能优化  才考虑使用 v-pre去跳过一些不需要编译的节点

## vue的生命周期

什么是vue的生命周期？

了解为什么要学习vue的生命周期

## vue的生命周期解释

 init injections &reactivity 
 vue会把data中所有数据通过 Object

 一般ajax发送在★★created★★中发(越早发越好)  很重要的钩子  
 如果需要操作DOM  就需要在★★mounted★★之后才操作
 如果想要拿更新完后的数据  就在updated中 写
 如果清除定时器  就在destroyed中执行  释放内存

## $0

 $0.outerHtml  不仅拿到内容 还拿到外部的标签

## 虚拟dom 和diff算法

## ajax与axios

在vue中  自身是没有对ajax进行封装的   所以需要第三方的
vue早期有个vue-resouce  推荐 axios

axios 跟vue没有关系 

## vue生命周期

//1.new vue=> 2.init Events和Lifecycle (初始化一些内部的事件)=>3.调用beforeCreated(“在数据初始化之前开始调用”)函数=>4.init injections & reactivity (初始化数据) 在这个过程中  vue中 利用object.defineProperty ()给vue实例,给data添加数据和方法 ,整个数据时响应式的=>beforeMount() 在数据渲染之前调用=>5.Has el option?(有的话  看是否有template模板 )(没有el范围的话 vm.$mount(el)这个方法调用)
//6.有模板的话  就直接用template里的模板 没有模板的话  vue会把el的outerHTML作为模板 渲染整个el标签 
//7.beforeMount() 渲染数据之前调用 
//8.create vm.$el  and replace "el" with it(结合vm的数据和需要渲染的模板  得到一个渲染完成的结构  把原来的el给替换掉  el不能设置成body 和 html)
//9.mounted()  渲染之后调用 
//10. when data changes 当数据更新时  调用  beforeUpdata()
//11. 当虚拟DOM 重新渲染  和修改时   就调用 updated
//12.销毁(vm.$destory())

## vue过滤器

对文本进行格式化

将来: 格式化时间  格式化数字

使用过滤器的步骤
1.定义一个过滤器:

  模板中:

 ```javascript

   <div id="app">
    <p>{{msg | myfilter }}</p>
  </div>

  Vue.filter('名字',function(data){
        return data.toUpperCase()
  })
  
   const vm = new Vue({
      el: '#app',
      data: {
        msg: 'hello vue',
        time: new Date()
      }

```

## 动态的设置数据 

将来页面中需要用到的数据  都应该在data中先声明  

如果增加一个响应式的数据 

Vue.set(obj, name , value) 作用:增加一个响应式的数据

别名: vm.$set(obj, name, value)
      vm.$mount  vm.$destory

//对象:增加或者删除一个属性
// 数组:操作属性下标和长度检测

//尽可能使用数组的方法  避  免使用下标和长度

// 如果  要修改数组的长度  使用数组的方法

## 操作数组

可以用vm.$set(vm.list,1,"张三")
第二个参数 是数组的下标

也可以用操作数组的方法操作 

## vue中异步更新问题

如果vue中的数据发生了改变   让DOM也跟着改变

修改完之后  无法立即获取DOM结构

用Vue.nextTick vm.$nextTick

Vue.nextTick(function(){
    console.log(document.querySelector('p').innerText)
})

## 组件的注意点

1. 组件是一个可复用额vue实例  组件带有名字 自定义的标签
2. 组件的template必须有一个根元素 
3. 组件的配置和vue实例的配置项是一样 除了el   data必须是函数

必须有返回值

在es6中,允许使用''定义字符串模板字符串
1.允许换行
2.可以使用插值${}

## 组件中的data为什么要是一个函数


是为了保证每个组件的数据是独立

