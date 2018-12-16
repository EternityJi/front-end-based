# node03

## node模块的作用

node模块：是用js写的 做的事后台开发

## golbal 全局模块

- console  
- setInterval  
- setTimeout
- clearInterval();
- clearTimeout();
- __dirname 获取当前文件的绝对路径目录
- __filename 获取当前文件的绝对路径 完整的文件名

注意：这些全局变量都是node自身定义的 不是引用别人的

## 模块

- fs模块

    fs.readFile(路径,[编码],(err, data)=>{})
    fs.writeFile(路径,[编码],(err)=>{})//会发生覆盖 
    fs.appendFile(路径, 内容, [编码],(err)=>{})//不会覆盖  
    fs.rename(路经,新文件名,(err)=>{})  
    fs.unlink(路径,(err)=>{})  

- path模块
  如果是相对路径  是相对于node命令执行的目录  而不是js文件所在的位置
  推荐使用绝对路径
  __dirname+'/data.txt'

 不同的操作系统中  路径分隔符是不同的  为了解决系统兼容的问题 
用path模块  

path模块:
   path.join(__dirname,'data.txt');  

http模块:
   const http = require("http");
   const server = http.createServer();  

   //处理请求  
   
   server.on("request",(req,res)=>{
     req:  
        req.url
        req.method
        req.headers
     res:
       res.statusCode = 404;
       res.statusMessage = "bbb";
       res.setHeader(k,v)
       res.writeHead(404,'bbb',{k,v});
       res.write();//设置响应主体
       res.end('内容');响应结束
   })  
  

   //监听  
   server.listen(9999,( = > { console.log('服务器已开启')}));  


## 根据不同的请求响应不同的页面

## -npm

   npm 包管理工具

1.npm初始化  --> 得到一个package.json  是项目包描述

      npm init 
      npm init -y 快速初始化

2.-安装本地包  当前项目需要用到这个包

     npm install 包名
     npm i 包名
     npm 包名 @版本号

3-卸载包

     npm uninstall 包名

4-安装全局包  

  如果项目中 需要用到这个包  用本地安装 
     npm i 包名
  如果要 得到一个命令行工具  用全局安装方式
     npm i -g 包名
  卸载全局包
   npm uninstall -g 包名
5- art-template模板引擎的使用
  1-安装  npm i art-template
  2.-引入
  3-调用模板的方法
  let str = template(模板路径, 对象);
  
## 模块的导入与导出  

* 模块的导入

核心模块 ： 直接  require
  
第三方模块: 先用npm下载  然后导入

自定义模块:要先写文件    然后再导入 (需要加上相对路径 ./或者../) 可以省略  .js后缀  如果文件名字是index.js   也可以省略

模块可以被多次导入    但是只会在第一次加载 

 * 模块的导出  

在模块的内部,module变量代表的就是当前模块    它的 exports属性  就是对外的接口   加载某个模块   加载的就是module.exports属性 这个属性指向一个空的对象

//module.exports指向的是一个对象   我们给对象增加属性 即可
//modual.export.num = 123;
//module.export.age = 18;
也可以导出一个值  但是会覆盖

## modual.exports与 exports

*exports是  module.exports的引用

*注意  给modual.exports赋值  会切断与exports之间的联系

1.直接添加属性  两者都可以   
2.赋值操作 时  只能使用  module.exports

console.log(module.exports === exports )//true

//等价操作  
module.exports.num = 123
exports.num = 123;
//赋值操作    不要使用   exports = {}
module.exports = {}


## 第三方模块查找原则:(mime为例子)

1.先在当前目录中查找 node_modules目录 
2.如果找到 就去该目录中找mime目录  
3.如果找到 mime目录   则找该目录中的package.json文件  
4.如果 找到 package.json  就找该文件中的main属性    
5.如果找到 main属性   则拿到该属性对应的文件路径  
6.如果在mime目录中  
    (1)没有找到   package.json
    (2)找到  package.json  没有main属性 
    (3)或者有main属性  但是指向的路径  不存在 
    (4)则node会去看 mime目录中   有没有  index.js   index.node   index.json  文件
7.如果找不到 index或者找不到  mime   或者找不到 node_modules
8.则会去上一级目录中找  node_moudles  查找规则同上 
9. 如果上一级还找不到   继续向上   一直到当前文件所属磁盘根目录
10.如果到最后磁盘 根目录 还找不到   最后报错  

## express框架  

* 基于Node.js平台   快速  开放  极简的web开发框架 

起步:
   安装   npm i express
   导入  express
   const express = require('express')//创建express实例  也就是创建  express服务器 
   const app = express()

   //路由   
   app.get('/',(err,data)=>{
        res.send(‘Hello  World’)
   })

   //启动服务器 
   app.listen(3000,()=>{
      console.log("服务器已经启动");
   })

## express的API说明  

1.express():创建了一个Express应用   并返回  即  App
2.app.get():注册了一个get方式的路由  (只要注册了路由  所有的请求 都会被处理  未配置的请求路径  响应  404)
3.res.send():发送数据给客户端  并且自动设置Content-Type
    参数:可以是   字符串   数组  对象  Buffer 
    注意:只能使用一次 
4. req 和 res :与http 模块中的作用 相同  是扩展后的请求和响应对象

## 注册路由的三种方式  

* 1.app.METHOD : 比如  app.get/app.post/app.delete/app.patch
  2.app.all(path,callback)  可以处理任意的请求类型  
   path与请求地址  必须完全相同  
  3.app.use(path,callback)更重要的作用是  处理中间件  
    只要是以path开头的请求地址  都可以被use处理 
    可以处理任意的请求类型  
    path参数可以省略  默认值为:/

## request常用的属性 和方法

req.query//获取请求路径中的参数   是一个对象   GET请求 
req.body//获取POST请求参数   需要配置 'body-parser模块   

## response 常用的属性和方法

res.send()发送数据给客户端  并自动设置  Content-Type
res.sendFile()  发送文件给浏览器  并根据文件后缀  自动设置Content-Type
// 文件路径  必须是绝对路径  
res.sendFile(path.join(__dirname,'index.html'))
//设置HTTP响应码
res.status(200);
//设置响应头 
res.set("Content-Type",'text/plain');
res.set({
   'Content-Type':'text/plain',
   'cute':'fangfang'
})
//重定向  
res.redirect('/index')