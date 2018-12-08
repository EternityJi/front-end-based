# css

## 盒子模型

* css选择器分类:

不同级别:排序: !important > 行内样式 > ID选择器 >类选择器 > 标签 > 通配符 > 继承 > 浏览器默认的。
同一级别:后写的会覆盖先写的。  

* 使元素消失的方法

  1.   opacity:0 该元素隐藏起来  但不会改变页面布局  如果该元素绑定了事件会触发。
  2.visibility:hidden 该元素隐藏起来 但不会改变页面布局  不会触发触发该元素已经绑定的事件。
  3.   display:none;  把元素隐藏起来  并且会改变页面布局  可以理解成在页面中把元素删掉。

* 如何画一个三角形

左右边框设置为透明  长度为底部边框的一半. 
(左右边框长度必须设置  不设置则只有底部一条边框)

.child{
    width: 0;
    height:0;
    border-bottom:100px solid cyan;
    border-left: 50px solid transparent;
    border-right:50px solid transparent;
}

* 浮动相关

1.为什么要清除浮动
主要是为了解决父元素高度塌陷问题
一个块级元素如果没有设置height,其height由子元素撑开，对子元素使用了浮动之后，子元素就会脱离文档流。那么父元素中没有内容撑开其高度，这样父元素的height就会被忽略。
如何清除浮动:  

* 父元素设置 overflow:hidden(少用)
* clearfix :使用内容生成的方式清除浮动  不会破坏文档流
   .clearfix::after{
      content:"";    //生成内容为空
      display: block;//块级元素显示
      clear:both;    //清除前面的元素
   }
* DIV居中问题
  1.使用flex
     .parent{
         height:600px;
         border:1px solid red;

         display:flex;
         justify-content:center;
         align-items:center;
     }
     .child{
        border: 1px solid  green;
     }  
  2.使用transform
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);  
  3.使用margin-top 一半的高度  
  4.使用绝对布局  absolute 和 margin:auto  

  * 三栏布局  

  要求两边两栏宽度固定  中间栏宽度自适应

  * 介绍BFC  

  BFC是css布局的一个概念  是一块独立的渲染区域  是一个环境  里面的元素不会影响到外面的元素。  

  ★★★ 如何生成BFC:(即脱离文档流) 

    *  1.根元素 即HTML元素 (最大的BFC)
       2.float的值不为none
       3.position的值为absolute 或 fixed
       4.overflow的值不为visible.
       5.display的值为inline-block,table-cell  table-caption

   *  BFC布局规则
       1.内部的Box会在垂直方向 一个接一个地放置  
       2.属于同一个BFC的两个相邻的Box的margin会发生重叠
       3.BFC就是页面上的一个隔离的独立容器, 容器里面的子元素不会影响到外面的元素  
       4.BFC的区域不会与float box重叠  
       5.计算BFC的高度  浮动元素也参与计算

  * BFC作用
    1.自适应两栏布局
    2.可以阻止元素被浮动元素覆盖
    3.可以包含浮动元素 -- 清除内部浮动 原理:触发父div的BFC属性  使下面的子div都处于在父div的同一个BFC区域之内
    4.分属于不同的BFC时  可以阻止margin重叠
     