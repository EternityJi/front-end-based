# HTTP协议原理 +  实践

## 前端缓存

## 最简单的例子

* 输入URL打开网页
* Ajax获取数据
* img标签加载图片   src  也是通过http协议 去传输图片的

 ★★浏览器是如何和服务器进行交互的  中间又有什么因素可以影响到交互的效率

Cache-Control

## 缓存验证

* last-modified配合if -modified-since 
* etag 配合 if-none-match

缓存对性能有很大的作用

## 更多有意义的头

1.Content-Type   Content-Encoding  等用来约束数据类型
2.Cookie保持会话信息 (最常见的  就是通过cookie来实现的)
3.CORS实现跨域并保持安全性限制(怎么才能保证跨域是安全的)

## 深入TCP

## url从开始发送请求道服务器端 都经历了什么

startTime(开始时间) - redirectStart(开始跳转) - Redirect(跳转)-App cache(应用缓存) -DNS(dns查找)域名解析开始  -TCP(创建TCP连接)-Request(发送请求) -Response(接收响应) (返回数据)  

一开始浏览器先要判断要不要Redirect,然后看需要Redirect到哪里   此时 浏览器会选择去看缓存(看是否是已经有过的 )  

域名解析之后  会创建TCP连接  此时会经过3次握手之后 才能创建连接(https创建的连接不一样,中间加了安全的处理)  

## 网络协议

经典5层模型  

应用层 --HTTP,FTP          应用层
传输层 --TCP,UDP           传输层
网络层                     网络层
数据链路层                 数据链路层
物理层(客户端)              物理层


物理层:     主要作用定义物理设备如何传输数据
数据链路层:  在通信的实体间建立数据链路连接
网络层:     为数据在结点之间传输创建逻辑链路

## 传输层:

* TCP IP协议

* 向用户提供了可靠的端到端服务

* 传输层向高层屏蔽了下层数据通信的细节。

Ajax一次传输不完   会进行分片 是可靠的

## 应用层  

主要是HTTP协议  
为应用软件提供了很多服务     
构建于TCP协议之上  屏蔽了网络传输相关细节

## HTTP协议的发展历史

* (HTTP0.9)
  最初只有命令GET 没有HEADER等描述数据的信息   服务器发送完毕  就关闭TCP连接
 
* (HTTP/1.0)
 增加了很多命令  像GET  POST   HEADER  等   增加了 status code(状态码 用来描述服务端处理一个请求之后的某个状态的 ) 和 header(数据的描述和方法)

* HTTP/1.1

持久连接 建立连接之后 不关闭  下次再次使用的时候  直接去连接  提高了性能  
pipeline (串行和并行的差异)  
增加了host和其它一些命令 (通过判断 host  可以部署很多不同的web服务  提高了物理服务的效率)

* HTTP2(还没有普及)

1.和HTTP1不同的是  所有的数据以二进制传输  HTTP1是以字符串来进行传输的   同一个连接里面发送多个请求不再需要按照顺序来。   
2.可以并行传输
3.头信息压缩以及推送等提高效率的功能 (推送:可以使html css js变串行 为并行 提高了性能) 

## HTTP三次握手★★(三次网络传输)

http只有请求和响应的概念    
1.先建立一个连接(TCP connection) 
三次握手的原因:
 创建连接时   客户端发送一个请求   然后服务器端给出响应   然后客户端会再次返回一个请求  告知服务器数据是否传输成功  

目的: 第三次传输的目的是   当服务器返回数据的时候  开启端口   浏览器接到数据  把接收情况返回  告知服务器是否接收成功 如果没有成功的话   服务器会再次发送  如果已经成功  服务器会关闭端口连接,不需要一直等待。三次握手主要是为了回避网络延时造成的开销浪费的问题。   

## 网络抓包工具 可以抓到5层的各个包的数据

## URI URL URN

* URI(统一资源标志符 Uniform Resource Identifier)

用来位移标识互联网上的信息资源(包括URL和URN)
用来定义一个web网站的一个具体的某个页面  
用这种方式 标志好资源后  我们就可以以链接的方式去访问某个资源 
互联网中 http协议  FTP协议的目的 主要就是找到某一个资源 并且通过某一种方式去访问到这个资源。 
比如说,网页的本质就是html代码  当我们赋予给它一个url地址之后  我们就可以通过这个url访问到具体的资源所在的地方。

* URL(Uniform Resource Locator/统一资源定位器)

主要包括:
http://user:pass@host.com:80/path?query = string #hash
http://协议  规定了发送方如何发送数据 和接收方 如何接收数据。
user:pass@:不常用  用来认证的  需要输入用户名和密码 (不安全)  
host.com : 可以是IP 或者域名(如果是域名  需要有DNS去解析成IP 然后才能定位到相应的服务器上)主要是为了找到这台服务器上 互联网所在的位置。   
:80 :端口  用来定位web服务器。相应的计算机(不带端口  默认是80端口)  
/path ： 路由。找到对应的资源.    
?query=string#hash : 一般是用来传参 (#hash 在前端中  一般用来制作某个锚点)

* URN(永久统一资源定位符) 

一般的话,如果链接移动的话 就会访问不到(404),但是URN解决了这个问题 (在资源移动之后 还能被找到 目前没有找到合适的应用场景)   

## HTTP报文

* 请求报文

1.首行(包含 method(get post  put header delete))

* http方法

用来定义对于资源的操作。(定义了方法  服务器和浏览器交互时  更加规范)

get:获取这个数据  
post：创建这个数据  
put:更新这个数据  
delete:删除这个数据
all:
use:

* 状态码

定义服务器对请求的处理结果。
100-199:代表操作继续进行  接下来做一些别的事情
200-299:代表操作成功
300-399:代表重定向  用别的请求去处理数据
400-499：发送的请求有问题。401:没有认证  就没有权限去访问内容
500-599: 代表服务器出了什么错误。  

常用的：
如果客户端发送了一个带条件的GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个304状态码。简单的表达就是：客户端已经执行了GET，但文件未变化。

## HTTP客户端

最简单的浏览器客户端是 浏览器
在cmd 中  输入  curl baidu.com 可以得到网页的 url 信息
在cmd 中  输入  curl  -v www.baidu.com  可以得到网页的所有信息  包括请求头(get HTTP版本号 域名 User-Agent  Accept )  响应头( HTTP版本号 status code  Content-type )   以及网页的所有html代码
为什么没有返回页面?
因为client没有渲染页面的功能   页面渲染是 通过构建dom树  css渲染引擎  将dom树和css样式 共同合并渲染的

* 在node中设置响应头

res.setHeader('content-type',mime.getType(req.url));

## 跨域

res.writeHeader(statusCode, statusMessage, options)
res.setHeader(name,value) 设置响应头   比如content-type;

"Access Control ALLOW Origin" 头 允许跨域的头

* 当跨域的时候

1.CORS
在服务器端:
设置:
res.weiteHeader(200,'Access Control ALLOW Origin':'*')★★
不安全   可以设置一个特定的域名
res.weiteHeader(200,'Access Control ALLOW Origin':'http://127.0.0.1:8888')

这是浏览器的跨域的限制   服务器是已经发送了  但是浏览器端 有同源限制  拦截掉了  这个是浏览器的功能。  (需要在服务器端设置一个同意跨域的请求头)。

2.jsonp
link img  script 标签里写url路径  发送请求

3.
4.

## CORS预请求

服务器端要进行CORS预请求验证

* 允许的方法:

GET 
HEAD
POST

* Content-type的限制:

允许的:  text/plain  multipart/form-data  application/x-www-form-urlencoded

* 请求头

* 突破跨域限制的几种方法

res.writeHeader(200,{
  'Access -Control - ALLOW - Origin':'*';
  'Access - Control - ALLOW -Header':'X-Test-Cors';
  'Access - Control - ALLOW -Method':'POST,PUT,Delete';
  'Access - Control - Max - Age':'1000';//最长时间 允许跨域请求的最长时间
})

## HTTP中的缓存   Cache-Control

Cache-Control是一个客户端缓存  
作用:浏览器读取资源的时候  直接去缓存里面读取
1.可缓存性(哪些地方可以执行缓存)
public:所有地方
private 私有的地方
no-cache 任何地方都不 ★★
2.具体的设置(到期的配置)
max-age=<seconds>
s-maxage=<seconds>
max-stale=<seconds>
3.重新验证
must-revalidate
proxy-revalidate
4.其它
no-store(会忽略任何与缓存有关的东西)  ★★
no-transform  

```javascript

if(res.url === '/script.js'){
    res.writeHead(200,{
        'Content-Type':'text/javascript',
        'Cache-Control':'max-age=20'
    })
}

```

问题:

哈希码解决方案   为了更新缓存 更新浏览器的内容 

## 资源验证  

如果给Cache-Control:no-cache后  每一次浏览器发送资源请求后 会先去读看是否可以读取缓存

* 验证头

Last-Modified-Since  (上次修改时间)  配合If-Modified-Since 或者If - Unmodified -Since使用
原理:(对比上次修改时间以验证资源是否需要更新)

Etag ---主要通过数字签名(只要有任何修改 签名就会改变)  
最常见的  就是对内容进行哈希计算    
配合IF-Match或者  IF-None-Match使用   
对比资源的签名 判断是否使用缓存

```javascript

if(res.url === '/script.js'){
    // res.writeHead(200,{
    //     'Content-Type':'text/javascript',
    //     'Cache-Control':'max-age=20,no-cache',
    //     'Last-Modified':"123",
    //     'Etag':'777'
    // })
const etag = res.headers['if-none-match'];

if(etag === '777'){
    response.writeHeader(304,{
        'Content-Type':'text/javascript',
        'Cache-Control':'max-age=200000,no-cache',
        'Cache-Modified':'123',
        'Etag':'777'

    })
    res.end('123');
    //http code 304  304的作用是  资源没有修改  可以直接读缓存  这里读的是缓存的数据
}else{
  res.writeHead(200,{
        'Content-Type':'text/javascript',
        'Cache-Control':'max-age=20000,no-cache',
        'Last-Modified':"123",
        'Etag':'777'
    })
res.end("console.log(1111)")
}

}

//把no-cache去掉   no-cache  和  no-store  的区别

```

## cookie 和 session 


* cookie

是在服务端返回数据的时候  通过Set-Cookie设置到浏览器中  保存在浏览器中的内容 
浏览器在下次请求的时候 同域的情况下  会带上cookie   
下次请求会自动带上   
cookie是以键值对的形式出现的 

* cookie的属性 

cookie是有过期时间的  如果没有设置过期时间  在浏览器关闭的时候  就没有了
1.max-age 和 expire设置过期时间
2.Secure只在https的时候发送
3.HttpOnly无法通过document.cookie访问 (csr攻击)(安全性问题)
禁止javascript去访问cookie  也就是说 在控制台端打印不出来。
4.cookie在相同的二级域名下  可以访问到cookie  就加个判断

```javascript

   if(host === 'test.com'){
            res.writeHead(200,{
              'Content-Type':'text/html',
              'Set-Cookie':['id=123;max-age=2','abc=456;HttpOnly,domain="test.com"']
            })
           }

```

```javascript

 if(req.url == '/'){
      fs.readFile(path.join(__dirname,'test.html'),(err,data)=>{
           if(err){
             console.log("请求有误");
           }
           res.writeHead(200,{
            'Content-Type':'text/html',
            'Set-Cookie':['id=123;max-age=2','abc=456']
          })
          res.end(data);

        });
 
    }

```

## HTTP长连接

Connection 

## COOKIE 和  SESSION

会话:浏览器与服务器之间的数据交流。

## HTTP协议特点

无状态的  多次请求之间没有相关性

(即同一用户请求同一网站的不同页面  服务器无法识别是否是同一用户 发起的请求 因此用户无法进行连续的业务逻辑)

无状态  无连接的含义 :

    发送完对服务器的HTTP请求之后  服务器会根据你的请求  会给你发送数据过来    送完之后  会立刻中断和你的连接   不会保持   而且 也不会记录任何信息 (每次都是一个新连接)


## cookie和 session 之分 

* cookie在浏览器端的存储数据的容器
* session在服务器端存储数据的容器

## cookie


1.在浏览器端的存储数据的容器 
2.可以使用js对cookie进行操作 
3.cookie允许服务器脚本在浏览器端存储数据
4.cookie特点:在cookie中数据设置后  浏览器 再次请求服务器指定页面时   会自动携带cookie中的数据到服务器   在服务器中可以获取cookie中的数据。

在APPlication中可以查看cookie信息

js操作cookie

document.cookie = 'name = zs';
document.cookie = 'pwd = 123';

获取cookie中的值
document.cookie

## 验证登录成功  会话保持的过程

利用cookie  和 session 实现了记住状态

1.先在登录界面 输入用户名 密码  向服务器发送请求  然后
服务器验证处理请求 给予响应 登录成功  

由于,http协议是无状态的,所以以后想要跳转别的页面时   也要重新登录 用户体验不好   所以 需要用cookie  seesion  技术 实现会话保持状态.


## jquery.cookie.js插件  操作cookie

//如果不设置事件
//cookie是会话级别的   关闭浏览器 则销毁cookie

$.cookie(键，值，{expires:过期天数})//设置
$.cookie('name')//获取
$.removeCookie('name');//删除


注意点：

* cookie中的数据 可以被同一个网站的页面所共共享  
* 不同浏览器的cookie不能共享****
* cookie的数据存储在浏览器中  每次请求服务器  在请求报文中 携带 cookie的数据  发送给服务器
* 服务器端无法直接操作cookie  是通过在服务器设置响应头的方式(***) 通知浏览器对cookie进行设置
* cookie的数据存储容量比较小   约4kb
* 存储的cookie值中不要出现空格  等号 分号

## session

1.在服务器端存储数据的容器
2.seesion容器是一个数组的形式  通过超全局变量 $_sSESSION进行取值 和设置 
3.session在设置前  必须先session_start开启session机制
4.seesion中的数据可以被当前网站所共享

## session 和cookie原理

1.session会再服务器中自动（必须开启session才行）对每个第一次访问的用户  随机生成一个sessionID (要开启session_start) 
2.再根据sessionID   自动创建一个session会话文件(文本文件)  我们可以在其中存储该用户的数据
3.响应时  自动在响应头中设置set-cookie   存放该用户的sessionID(键值对) (通过设置响应头的形式  通知浏览器设置并保存sessionID)
4.将来浏览器端根据响应头  将sessionID存放到cookie中  并在下一次请求时携带
5.下次访问时   服务器会根据sessionID找到该用户的会话文件   我们可以从session中读取用户信息   实现会话

## 登录的会话保持

  思路
  1.接收用户的登录信息 
  2.如果登录信息成功  就把用户的登录信息存储到session中 
  3.
  4.完成后  跳转到主页 







