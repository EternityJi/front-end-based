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
  




