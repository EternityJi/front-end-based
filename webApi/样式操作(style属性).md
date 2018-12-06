# 样式操作

标签不仅可以通过class属性操作样式(嵌套样式),还可以通过style 属性操作样式(行内样式)

嵌套样式: div.className = 'red'
行内样式: div.style.color = 'red';

//1. style 属性是一个对象, 里面存储了所有行内样式的键值对
//2. style属性只能获取和设置 ` 行内样式 ` , 在类样式中,嵌套样式通过style获取不到的
//3. 如果样式的名字带来-, 比如background-color, 到了 style对象中,变成了驼峰命名法 => backgroundColor (因为-在js中不是一个合法的标识符)

style设置的样式是行内样式,,因为优先级要高于className设置的样式 ; 所以会出现一个覆盖,以行内样式为准   (行内样式 > 嵌套样式)

```javascript

<button>按钮</button>
<div style="color:red;background-color:blue;">小马哥</div>
//可以获取样式
console.log(div.style);
console.log(div.style.color);

// 也阔以通过这种方式设置
// 当时 css初始化 的属性
div.style.color ='red';
div.style.background = 'blue';
div.style.width = '200px';
div.style.height = '200px';
div.style.fontSize = '100px';

```

## 关于body的样式操作

1. document.body :body比较常用, 并且在页面中是唯一的, 因此可以使用document.body直接获取   
// 可以通过qs获取,也可直接获取
2. document.documentElement :  可以获取html元素
3. document.head : 可以直接获取head元素
4. document.title : 可以直接获取title的文本

## 关于cssText(了解)

使用cssText可以设置style的属性值

```javascript

<div style="width:100px;height:100px">哈哈哈</div>
//优点：可以一次性设置多个值
//缺点：会覆盖其他值
var div =  document.querySelector('div');
div.style.cssText = 'background:red;color:yellow';

```