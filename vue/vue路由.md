# 路由

## 前端路由和后端路由的区别

1. 后端路由: 对于普通的网站  所有的超链接都是URL地址  所有的URL地址都对应服务器上对应的资源
2. 前端路由: 对于单页面应用程序来说  主要通过URL中的hash(#号)来实现不同的页面之间的切换 
   同时,hash有一个特点: HTTP中不会包含hash相关的内容  所以  单页面程序中的页面跳转主要通过hash来实现

3. 在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由（区别于后端路由）；URL中的hash（井号） 

## 路由的几种跳转的方式

1. this.$router.push('/home')
2. <router-link to="/home"></router-link>(会自动生成a标签)
3. this.$router.replace('/home') 指定的跳转的地址
4. this.$router.repalce({name:'menuLink'})指定跳转路由的名字下
5. this.$router.push({name:'menuLink'})s通过push进行跳转路由的名字下
6. this.$router.go(-1) 跳转到上一次浏览的页面

## $router.push与$router.replace的区别

1. 使用push方法的跳转可以后退到上一次的页面
2. 使用replace后退查看不了



