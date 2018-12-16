 

 

# 面试试题（2018/07/11）

 

## 1、什么是盒子模型？

- css 盒模型就是网页设计中经常用到的 css 技术所使用的一种思维模型，网页设计中经常听到的属性名：content、padding、border、margin，都是盒模型具备的属性，每个属性都包括四个部分，上右下左，可以同时设置，也可以分别设置。

## 2、如果页面不写doctype页面还会解析页面吗？

- 什么是 doctype

  > doctype 是 html5 标准网页声明，意思为文档种类为超文本标记性语言或超文本链接标示语言，现在是简洁形式，支持 html5 标准的主流浏览器都认识这个声明。

- 作用：声明文档的解析类型，避免浏览器的怪异模式

  > document.compatMode：
  >
  > - BackCommpat：怪异模式，浏览器使用自己的怪异模式解析渲染页面
  > - CSS1Compat：标准模式，浏览器使用 W3C 的标准解析渲染页面
  >
  > 如果页面没有声明 DOCTYPE 的声明，那么 conmpatMode 默认就是怪异模式，浏览器就会按照自己的解析方式渲染页面，那么，在不同的浏览器中会显示不同的样式
  >
  > 如果页面添加了 DOCTYPE ，那么就等同于开启了标准模式，浏览器会按照 W3C 标准解析页面。

- 注意：一定要将 DOCTYPE 声明放在 xHTML 文档的顶部。

## 3、定位有几种方式？每种方式定位的基准是什么吗？那种方式会脱标？他们之间会有层级关系吗，谁的层级会高些？

- 定位有几种方式

  > - 静态定位: position:static;  
  >   - 所有的标准流都是静态定位，一般用于将某些已经定位的元素还原标准流
  >   - 偏移值对于静态定位不起作用，元素定位不包括静态定位
  > - 相对定位: position:relative;
  >   - 相对定位是相对于自己的标准流的位置进行定位
  >   - 相对定位的元素不会对其他元素产生影响，没有脱标，真正占据的位置还是标准流的位置
  >   - 可以盖在标准流的上方
  >   - 一般用于微调元素和配合绝对定位
  > - 绝对定位: position:absolute;
  >   - 绝对定位相对于定位的父级元素进行定位
  >   - 绝对定位会脱标，不占据标准流位置，不会继承父级的宽度，可以写宽高，margin：auto；不起作用
  > - 固定定位: position:fixed;
  >   - 固定定位相对于浏览器窗口进行定位
  >   - 固定定位会脱标，不占据标准流位置，不会继承父级的宽度，可以写宽高，margin：

- 层级问题（z-index）

  > 1. 未设置 z-index：层级关系依据在 HTML 文档中声明的顺序层叠，因为 z-index 在未设置的情况下默认为 0；
  > 2. 设置 z-index：z-index 为无单位的整数值，可为负值，按照数值的大小排列，数值大，则层级高
  > 3. 父子元素：对于父子元素，子元素的从属于父元素的层级，子元素在父元素的上面
  > 4. 定位元素：对于没有设置定位的元素，无论 z-index 设置多少都为 0，层级都低于定位元素

## 4、浮动会带来哪些影响？哪些方式可以清除浮动？

- 什么是浮动

  > 浮动会使当前标签脱离文档流，产生上浮的效果，同时还会影响周边元素(前后标签)及父级元素的位置和 width height 属性。

- 清除浮动的方式

  > 1. 父级元素定义 height
  >    - 原理：如果父级元素没有定义高度，父元素的高度完全由子元素撑开的，父级元素手动设置 height，就解决了 div 自动获取到高度的问题
  >    - 优点：简单，代码少，容易掌握
  >    - 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级元素不一样时，会产生影响。对于响应式布局会有很大的影响。
  > 2. 结尾处添加空 div 标签 clear:both;
  >    - 原理：添加一个空 div，利用 css 提高的 clear: both 清除浮动，让父级元素自动获取到高度，因为该属性的作用是清除浮动对该元素的影响，也就是同级 div 浮动之后导致浮动元素脱离文档流而使未浮动元素上移，在页面中显示的效果为浮动元素将未浮动元素遮住，清除之后该未浮动元素会放置于浮动元素的下方，也就是可以像文档流时的布局效果，但又因为此浮动元素没有宽高等属性，所以父元素的高度就会基于次元素的上边框计算，也就相当于文档流中的自适应高度。
  >    - 优点：简单，代码少，浏览器支持好，不容易出现怪问题
  >    - 缺点：会增加页面结构，造成代码冗余
  > 3. 父级元素定义伪类：after 和 zoom
  >    - 原理：元素生成伪类的作用和效果相当于方法2中的原理，但是 IE8以上和非 IE 浏览器才支持 after，zoom（IE专有属性）可解决 IE67 浮动问题
  >    - 优点：浏览器支持好，不容易出现怪问题
  >    - 缺点：代码多，要两句代码结合使用才能让主流浏览器都支持
  >    - 建议：推荐使用，建议定义公共类，减少 css 代码
  > 4. 父级元素定义 overflow: hidden
  >    - 原理：overflow：hidden 的意思是超出的部分要裁切隐藏掉，那么如果 float 的元素不占标准流位置，标准流的块要根据内容的高度裁切隐藏，如果高度是默认值 auto，那么不计算其内浮动元素高度就裁切可能会裁切掉 float，这是反布局常识的。所以如果没有明确设定父级元素 height 的情况下它要计算内部全部高度才能确定什么位置 hidden，浮动的高度就是被计算进去顺带达成清除浮动的目标。
  >    - 优点：简单，代码少，浏览器支持好
  >    - 缺点：不能和 positoin 配合使用，因为超出的尺寸会被隐藏
  >    - 建议：只推荐没有使用 position 或对 overflow：hidden 理解比较深的朋友使用
  > 5. 父级元素定义 overflow: auto
  >    - 原理：和方法4相同，但是注意有可能会出现滚动条
  >    - 优点：简单，代码少，浏览器支持好
  >    - 缺点：内部宽高超过父元素时，会出现滚动条
  >    - 建议：不推荐使用
  > 6. 父元素一起浮动
  >    - 原理：所有代码一起浮动，就变成一个整体，但是很大程度会影响后续元素的布局
  >    - 优点：没有优点
  >    - 缺点：会产生新的浮动问题
  > 7. 父级元素定义 display:table
  >    - 将父元素属性变成表格，而表格的特有特性决定本身不受浮动元素的影响
  >    - 优点：没有优点
  >    - 会产生新的未知问题

## 5、如何让一个不定宽高的div垂直水平居中？

- 利用弹性布局 flex

  ```css
  .box{
      display:flex;  // 弹性布局
      justify-content:space-around;  // 水平居中
      align-items:center;  // 垂直居中
  }
  ```

- 利用定位 position

  ```css
  .box {
      position:relative;
  }
  .son {
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
  }
  ```

- 利用定位 position2

  ```css
  .box {
      position: relative;
  }
  .son {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
  }
  ```

- 利用 css

  ```css
  .box {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
  }
  .son {
      display:inline-block;
      vertical-align: middle;
  }
  ```

- 注意：一定要在子盒子里面添加内容，因为子盒子的本身是没有宽高的，如果不加内容，根本无法实现效果。

## 6、H5/C3增加了哪些新属性，分别列举一下？

### H5

- H5 新增语义化标签

  > header 头部
  >
  > nav 导航
  >
  > section 局部
  >
  > aside 侧边栏
  >
  > article 文章
  >
  > footer 底部

- H5 新增表单类型

  > email，tel，url，number，search（搜索框），range（自由拖动滑块），color，time，date（日期，年月日），datatime（日期时间），month，week（年周）

- 表单元素

  > datalist  数据列表

- 表单属性

  > autofocus自动获取焦点
  >
  > placeholder提示文字
  >
  > required 必填的
  >
  > autocomplete=”on” 自动完成，默认为on开启，关闭则为off
  >
  > multiple 用于上传多个文件
  >
  > pattern=' '  自定义验证，直接写正则表达式
  >
  > form=”需要提交至那个表单的ID” 指定表单所属的表单域
  >
  > novalidate 关闭表单的验证功能 加给form标签

- 表单事件

  > oninput:当用户输入时触发
  >
  > oninvalid:当验证不通过时触发，通常用于设置验证不通过时的提示文字

- 多媒体标签

  > audio音频标签 
  > video视频标签
  >
  > controls控制条 
  > autoplay自动播放 
  > loop循环播放

- DOM 操作

  > document.querySelector获取符合条件的第一个元素,括号里边可以写任意合法的css选择器
  >
  > document.querySelectorAll获取所有符合条件的元素，返回的是一个伪数组。

- 类名操作

  >
  > box.classList.add()添加类名
  >
  > box.classList.remove()删除类名
  >
  > box.classList.contains()是否包含类名
  >
  > box.classList.toggle()切换类名

  ### CSS3

  > css3 被划分为模块，包括：选择器、框模型、背景和边框、文本效果、2D/3D转换、动画、多列布局、用户界面

  - 选择器

    > 关系选择器、属性选择器、伪类选择器、伪元素选择器、其他选择器

  - 框模型：弹性布局

  - 背景和边框

    > border-radius、box-shadow、border-image、 
    > background-size：规定背景图片的尺寸 
    > background-origin：规定背景图片的定位区域 
    > background-clip：规定背景的绘制区域

  - 文本效果

    > text-shadow：设置文字阴影 
    > word-wrap：强制换行 
    > word-break 
    > css3提出@font-face规则，规则中定义了font-family、font-weight、font-style、font-stretch、src、unicode-range

  - 2/3D转换

    > transform：向元素应用2/3D转换 
    > transition：过渡

  - 动画

    > @keyframes
    > animation

  - 用户界面

    > box-sizing、resize(对顶是否可由用户调整属性尺寸) 

## 7、H5/C3新属性如何做兼容处理？（重要）

- 加载兼容文件 js

  ```html
  条件注释
  <!-- [if lt IE 9]>
  	<script src="html5shiv.js"></script>
  <![endif]-->
  ```

- 添加 meta 标签

  ```html
  让 ie 浏览器以最新引擎解析页面
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  ```

8、Css如何画一个三角形？

```css
.box {
            border-style: solid;
            border-width: 0px 0px 100px 100px;
            border-color: transparent transparent blue transparent;
            width: 0px;
            height: 0px;
}
```



## 9、H5的本地存储和传统的存储区别是什么？

- cookie

  > 缺点：请求头带有 cookie 数据，大小在 4k 之内，主 domain 污染
  >
  > 应用：购物车、用户登录维持
  >
  > 对于 IE 浏览器有 UserData，大小是 64k，只有 ie 浏览器支持

- 本地存储 localstorage

  > 存储方式：以键值对（key：value）的方式存储，域内安全、永久保存。即客户端或浏览器中来自同一域名的所有页面都可访问localStorage数据且数据除了删除否则永久保存，但客户端或浏览器之间的数据相互独立。
  >
  > 大小：每个域名 5M
  >
  > 常用API：getItem ()  // 获取数据     setItem()  // 设置数据     removeItem()  // 移除记录    key()  取 key 对应的值   clear()   // 清除记录
  >
  > 存储内容：数据、图片、json、样式、脚本（只要能序列化成字符串的内容都可以存储）

- 本地存储 sessionstorage

  > html 5的本地存储 API 中的 localstorage 与 sessionstorage 在使用方法上相同，区别在于 sessionstorage 在页面关闭有被清空(一个会话周期)，localstorage 会一直保存
  >
  > 会话控制、短期保存。会话概念与服务器端的session概念相似，短期保存指窗口或浏览器或客户端关闭后自动消除数据。

- 离线缓存 application cache

  > 本地缓存应用所需的文件
  > 使用方法：
  >
  > - 配置 manifest 文件
  >
  > - manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。
  >
  >   manifest 文件可分为三个部分：
  >
  >   ①*CACHE MANIFEST* - 在此标题下列出的文件将在首次下载后进行缓存
  >
  >   ②*NETWORK* - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
  >
  >   ③*FALLBACK* - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
  >
  > - **服务器上：**manifest文件需要配置正确的MIME-type，即 "text/cache-manifest"。
  >
  > - **离线缓存与传统浏览器缓存区别：**
  >
  >   1. 离线缓存是针对整个应用，浏览器缓存是单个文件
  >
  >   2. 离线缓存断网了还是可以打开页面，浏览器缓存不行
  >
  >   3. 离线缓存可以主动通知浏览器更新资源

- web SQL

  > 关系数据库，通过SQL语句访问
  >
  > Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
  >
  >  
  >
  > **支持情况：**
  >
  >  Web SQL 数据库可以在最新版的 Safari, Chrome 和 Opera 浏览器中工作。
  >
  >  
  >
  > **核心方法：**
  >
  > **①openDatabase**：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
  >
  > ②**transaction**：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
  >
  > ③**executeSql**：这个方法用于执行实际的 SQL 查询。

- IndexedDB 

  >索引数据库 (IndexedDB) API（作为 HTML5 的一部分）对创建具有丰富本地存储数据的数据密集型的离线 HTML5 Web 应用程序很有用。同时它还有助于本地缓存数据，使传统在线 Web 应用程序（比如移动 Web 应用程序）能够更快地运行和响应。

- https://blog.csdn.net/a727911438/article/details/54290931

## 10、页面之间的参数传递有哪些方式？

- URL

  > 将参数附在 url 后面传递到其他页面
  >
  > 优点：
  >
  >  - url 地址法简洁易用，可同时传递多个字符型参数
  >  - url 地址法 可以很方便的在页面之间切换传递参数，无需额外的处理，基于正常情况比较不会性能损失
  >  - 可以跨域
  >
  > 缺点：
  >
  > - url 传递参数长度受限制，最大为 2k
  > - url 只能传递字符型参数，传递中文时，由于发送页面和接收页面的编码格式不同，导致参数解析会有乱码。
  > - url 地址在客户端是可见的，所以涉及隐私的参数需要加密后才能传递，不加密传递会造成信息泄露
  >
  > ​	

- H5 web storage

  > localstorage sessionstorage
  >
  > 优点：使用简单、方便
  >
  > 缺点：存在兼容性问题，IE8 一下不支持

- cookie

  > 使用浏览器 cookie 传递参数
  >
  > 优点：兼容性好，可以在同源内的任意页面访问，生命周期可以设置
  >
  > 缺点：值长度限制(存储容量小)，会带到请求头中
  >
  > 特点：
  >
  > - cookie 可以使用 js 在浏览器直接设置（用于记录不敏感信息），也可以在服务端通过使用 http 协议规定的 set-cookie 来让浏览器设置 cookie
  > - 每次网络请求，请求头都会带上 cookie，所以 cookie 数据会对数据传输产生影响
  > - 一般浏览器 cookie 大小为 4k

- form 表单

  > form 表单通过 url 传递参数

- https://www.jianshu.com/p/5b81672352cd

## 11、浏览器缓存和离线缓存的区别是什么吗？

前端的存储方式：localstorage sessionstorage cookie userDate webSQL indexeddb html5离线存储

### 本地存储

- cookie

  > cookie 会随着每次 http 请求头信息一起发送，无形中增加了网络流量，另外，cookie能存储的数据容量有限，根据浏览器不同而不同
  >
  > 优点：
  >
  > - 可控制过期时间，使其不会长期有效
  > - 可扩展，可用性较好
  > - 可加密减少 cookie 被破解的可能性
  >
  > 缺点：
  >
  > - 数量和长度有限制，最多20条，最大40k
  > - 在请求头上安全性差
  >
  > 应用场景：购物车、用户登录

- localstorage

  > localstorage(本地存储) 可以长期存储，没有时间限制，一般浏览器支持 5m 大小，不同浏览器大小不同
  >
  > 优点：
  >
  > - localstorage 扩展了 cookie 的 4k 限制
  > - localstorage 可以将第一次请求的 5m 大小数据直接存储到本地，相对于 cookie 节约宽带
  > - localstorage 的使用遵循同源策略，所以不同的网站是不能共用的
  >
  > 缺点：
  >
  > - 需要手动删除，否则长期存在
  > - 浏览器大小不一，版本支持不一
  > - localstorage 只支持 string 类型的存储，json 对象需要转换
  > - localstorage 本质是对字符串的读取，存储内容多的话会消耗内存，会导致页面卡顿
  >
  > 特点：同源策略限制 只在本地存储 永久保存 通浏览器共享
  >
  > 应用场景：
  >
  > - 数据较大的临时保存方案，如在线编辑文章
  > - 多页面访问共同的数据，sessionstorage 只适用于同一个标签页，localstorage可以多页面共享

- sessionstorage

  > sessionstorage (会话存储) 只有在浏览器被关闭之前使用，创建另一个页面时可以使用，关闭浏览器之后数据会消失
  >
  > 特点：
  >
  > - 同源策略限制，若想在不同页面之间使用同一个 sessionstorage 必须遵循同源策略
  > - 单标签页面限制 sessionstorage 操作限制在单个标签页中，在此标签页进行同原页面访问都可以共享 sessionstorage 数据
  > - 只在本地存储，sessionstorage 的数据不会跟 http 请求发送到服务器，只会在本地生效，并在关闭标签页后消除数据
  > - 存储方式 sessionstorage 的存储方式采用键值对的形式，值必须为字符串（传入费字符串存储时也会转为字符串）
  > - 存储上限限制 不同浏览器存储的上限也不一样，但大多浏览器限制在 5m 一下
  >
  > 应用场景：sessionstorage 适合单页面应用程序，可以方便在各业务模块进行传值

- web storage 和 cookie 的区别

  > web storage 有更大的容量 ，拥有setitem、getitem、removeitem、clear等方法
  >
  > cookie 大小受限制，跟随请求头传递到服务器，影响宽带，另外cookie需要制定作用域，不可以跨域调用，cookie需要自己封装 setCookie getCookie
  >
  > Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

### 离线存储

html5 引入了应用程序缓存，web离线也可以访问

> 离线缓存的优势：
>
> - 离线浏览：用户可以在应用离线时使用它们
> - 速度：已缓存资源加载速度快
> - 减少服务器负载：浏览器只从服务器下载更新过的资源

- ### Application Cache （Manifest）

  - 使用方法：在 html 标签添加 manifest 属性

    > 在页面的 html 标签中添加 manifest 属性，属性值为 manifest 文件的路径
    >
    > ```html
    >  <!DOCTYPE HTML> 
    >     <html manifest="../js/demo.manifest">
    >             ...
    >     </html>
    > ```

  - 编写 manifest 文件

    > manifest 文件是简单的文本文件，它会告知浏览器需要缓存的内容以及不需要缓存的内容
    >
    > manifest 文件的可分为三部分
    >
    > - CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
    > - NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
    > - FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
    >
    > ```
    > CACHE MANIFEST
    >     #version 1.1   /*版本号*/
    >     CACHE:
    >         html/index.html /*需要缓存的文件*/
    >     NETWORK:
    >         js/jquery.js /*不需要缓存的文件*/
    >     FALLBACK: 
    >         html/index.html /*当页面无法访问时的回退页面*/
    > 
    > 作者：xiaolizhenzhen
    > 链接：https://www.jianshu.com/p/fff9e5c46b9e
    > 來源：简书
    > 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
    > ```

  - 注意事项：

    > 1.浏览器对缓存数据的容量限制可能不太一样
    >  2.如果manifest文件，或者内部列举的某一个文件不能正常下载，整个更新过程将视为失败，浏览器会继续加载之前的缓存
    >  3.引用的manifest文件必须和html文件同源，同域
    >  4.浏览器的自动缓存会导致更改了的html文件必须更新版本才能更新页面
    >  5.更新版本后，必须刷新一次才会启动新版本
    >  6.当manifest文件发生改变时，资源请求本身也会触发更新

  - 离线缓存和传统浏览器缓存的区别

    > 浏览器缓存 是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近的请求过的文档进行存储，在访问时，浏览器就可以从本地磁盘显示文档，这样可以加速页面的阅览
    >
    > 区别：
    >
    > - 离线缓存是针对整个应用，浏览器缓存是单个文件
    > - 离线缓存断网了还可以打开页面，浏览器缓存不行
    > - 离线缓存可以主动通知浏览器更新资源

  - 本地存储和离线存储区别

    - 本地存储和离线存储都是为了方便页面的加载，提高用户体验
    - 本地存储一般存储的都是数据，而离线存储一般存储的是网页

## 12、为什么会有缓存？如果不想缓存如何避免掉？

- 为什么要使用 web 缓存

  > web 缓存存在于服务器端和客户端之间，web 混村密切注视着服务器-客户端之间的通信、监控请求，并且把请求输出的内容(例 html 页面、图片和文件等)另存一份，然后，如果下次请求的是相同的 url，则直接使用保存的副本，而不是再次请求服务器

- 使用 web 缓存的好处

  > - 减少网络延迟，加快页面打开速度：缓存比源服务器离客户端更近，因此，从缓存请求内容比从源服务器所用的时间更少，缓存的使用能够明显加快页面打开速度，达到更好的体验。
  > - 降低服务器的压力：给网络资源设定有效期之后，用户可以重复使用本地缓存，减少对源服务器的请求，间接降低服务器的压力。同时搜索引擎的爬虫机器人也能根据过期机制降低爬取的频率，也能有效减低服务器的压力
  > - 减少网络带宽的损耗：无论对于网站运营者或者用户，带宽都代表着金钱，当 web 缓存副本被使用时，只会产生极小的网络流量，可以有效的降低运营成本。

- web 缓存的缺点：

  > - 缓存没有清除机制：缓存的文件会永久保存在本地机器上，在特定的时间内，这些文件可能是帮助用户更好的浏览网页，但是当缓存称为无效文件时，则会占据硬盘空间，产生垃圾。
  > - 开发带来的困扰：明明修改了样使文件、图片、视频、脚本，刷新页面或部署到站点后看不到修改的效果。
  > - https://www.cnblogs.com/wangpenghui522/p/5498427.html

## 13、H5的 wbsocket 是什么？应用场景有哪些？和http以及https的区别是什么？

- websocket 是什么

  > websocket 是一种网络通讯协议，RFC6455 定义了它的通信标准
  > websocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议

- http 和 https

  > https://www.cnblogs.com/lyc-smile/p/5111606.html  浏览器与服务器的交互方式
  >
  > https://blog.csdn.net/zzzgd_666/article/details/80769234  浏览器与服务器的交互流程
  >
  > https://www.cnblogs.com/wqhwe/p/5407468.html   http 和 https 的区别
  >
  > https://www.cnblogs.com/jingmoxukong/p/7755643.html  websocket 详解
  >
  > http://www.ruanyifeng.com/blog/2017/05/websocket.html websocket 教程
  >
  > https://www.cnblogs.com/guoke-jsp/p/5782653.html  hhtp 和 websocket 的区别
  >
  > https://blog.csdn.net/tanga842428/article/details/79741401 http长短轮询和 websocket 的区别
  >
  > https://blog.csdn.net/QTperfect1/article/details/80323638 http、https 和 websocket 的区别
  >
  >

14、em和rem的区别？

- em 相对于父元素的 font-size 属性
- rem 相对于根元素的 font-size 属性

15、移动端页面如何来做适配？（重要）

- 设置视口 viewport

  > 设置理想视口，使用 DOM 宽度与屏幕宽度一样大，DOM 文档主宽度即为屏幕宽度

- rem 布局

  > rem 定义的是根元素的 font-size，以 rem 为单位，其数值与 px 的关系，需相对于根元素 <html> 的 font-size 计算

- flex 布局

  > https://blog.csdn.net/ws379374000/article/details/78686101