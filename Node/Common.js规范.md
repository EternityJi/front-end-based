# Common.jsG规范

## 概述

    Node应用由模块组成  采用CommonJS模块规范
    每个文件就是一个模块   有自己的作用域  在一个文件里面定义的变量,函数,类,都是私有的   对其它文件不可见

    如果想要多个文件分享变量  必须定义为global对象的属性

    global.warning = true;
    上面的warning变量  可以被所有的 文件读取  但是 上面的写法不推荐 
    CommonJS规范规定  每个模块内部   module变量代表当前模块  这个变量是一个对象 它的exports属性  即modual.exports属性是对外的接口   加载某个模块  其实是加载,module.exports属性

```javascript
var x =5;
var addx = function(value){
    return value+x;
};
module.exports.x = x;
module.exports.addx = addx;
上面代码通过module.exports输出变量x和函数addx
```

require用来加载模块

* CommonJS模块的特点:

1.所有代码都运行在模块作用域  不会污染全局作用域
2.模块可以 多次加载  但是只会在第一次加载时运行一次 然后运行结果就会被缓存 下次加载 就直接读取缓存结果。要想让模块再次运行  就必须清除缓存
3.模块加载的顺序  按照其在代码中出现的顺序

## module对象

Node内部提供一个module构建函数   所有模块都是Module的实例
每个模块内部 都有一个 module对象  代表当前模块  它有以下属性

* module.id   模块的标识符  通常是带有绝对路径的模块文件名
  module.filename 模块的文件名   带有绝对路径
  module.loaded  返回一个布尔值  表示模块是否已经完成加载 
  module.parent 返回一个对象  表示调用该模块的模块
  module.children  返回一个数组  表示该模块要用到的其它模块
  module.exports 表示模块对外输出的值

* module.exports属性

module.exports属性表示当前模块对外输出的接口  其它文件加载该模块 
实际上就是读取module.exports变量

* exports变量 

为了方便  Node为每个模块提供一个exports变量  指向 module.exports
这等同于在每个模块的头部添加这样一行命令 
var exports = module.exports
造成的结果是   在对外输出模块接口时  可以向exports对象添加方法

exports.area = function(r){
    return Math.PI*r*r;
}
exports.circunference = function(r){
    return 2*Math.PI*r;
}

不能直接将exports变量指向一个值  因为这样切断了exports与module.exports的联系.

exports = function(x){console.log(x)};(无效  因为exports不再指向  module..exports)

下面的写法 也是无效的
exports.hello = function(){  return 'hello'};
module.exports = 'Hello world';
这意味着  如果哦一个模块的额对外接口  就是一个单一的值  不能使用exports输出  只能用module.exports输出
最好使用   module.exports

## AMD规范和CommonJS规范的兼容性

CommonJS规范加载模块是同步的  也就是说  只有加载完成  才能执行后面的操作  AMD规范则是非同步加载模块  允许指定回调函数   由于Node.js主要用于服务器编程    模块文件 一般都已经存在本地硬盘   所以加载 比较快   不用考虑非同步加载的方式  所以CommonJS规范比较使用    但是如果是浏览器环境  要从服务器端加载模块   这时就必须采用非同步模式  因此 浏览器端一般采用  AMD规范 

AMD规范  使用define方法定义模块  下面就是一个例子

define(['package/lib],function(lib){
    function foo(){
        lib.log('hello world');
    }
    return {
       foo:foo
    };
});
AMD规范允许输出的模块兼容CommonJS规范  这时  define 方法则如下

```javascript

define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");

  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();

  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});

```

## require命令

Node使用 CommomJS模块规范   内置 require命令用于加载模块文件 

require命令 的基本功能是  读入并执行一个javascript文件  然后返回该模块的exports对象   如果没有发现指定模块   会报错 

## 模块的加载机制

* 目录的加载规则

1.require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，然后加载main字段指定的入口文件。如果package.json文件没有main字段，或者根本就没有package.json文件，则会加载该目录下的index.js文件或index.node文件。
2.

## 模块的缓存 

第一次加载某个模块时   Node会缓存该模块  以后再加载该模块 就直接从缓存取出该模块的module.exports属性

require('./example.js');
require('./example.js').message = "hello";
require('./example.js').message
// "hello"

上面代码中，连续三次使用require命令，加载同一个模块。第二次加载的时候，为输出的对象添加了一个message属性。但是第三次加载的时候，这个message属性依然存在，这就证明require命令并没有重新加载模块文件，而是输出了缓存。

* 删除模块

// 删除指定模块的缓存
delete require.cache[moduleName];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
})






## 参考链接
