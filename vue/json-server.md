# json-server详解

json-server 是一个Node模块  运行Express服务器  你可以指定一个json文件作为api的数据源
动态生成模拟数据
(会自动生成一套增删改查的接口)

## 安装json-server

安装在全局变量中  
npm i -g json-server

## 启动 json-server

执行 json-server data.json

## 使用方法

要想使用json-server生成一个json数据文件 
先要预先定义一个  data.json  文件

```javascript

{
  "todo": [
    {"id": 1,"name": "吃饭", "complated": true},
    {"id": 2,"name": "睡觉", "complated": true},
    {"id": 3,"name": "打豆豆", "complated": false},
  ]
}

```

## 成功

\{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:53000/course

Home
http://localhost:53000

Type s + enter at any time to create a snapshot of the database
Watching...

## json-server的相关启动参数

## 路由

默认路由
json-server为提供了GET,POST,PUT,PATCH,DELETE等请求的API  分别对应数据中的所有类型的实体

* get 查询操作   http://localhost:3000/todos
* get 查询具体的 http://localhost:3000/todos/1
* post  http://localhost:3000/todos
        添加操作 用postman(测试)test 在body中添加 不写id  会自动生成Id
* delete 删除操作 (需要id)  http://localhost:3000/todos/1
* put 修改 (需要id)         http://localhost:3000/todos/1
* patch  修改(需要id)       http://localhost:3000/todos/1

