# node

## 导出向

## 操作数据库

1.在shallpower  中  输入  mongod
  在cmd   中  输入   mongo

2.数据库的基本操作
   1.show dbs;
    db:当前选中的数据库
   2.use:选择或者创建一个数据库  use aaa
   3.db.dropDatabase()  删除当前数据库
 //先切换  再删除 
   4.switched  to  db   test  
   然后删除
   db.dropDababase();
 3. 插入语句  是对象的形式
 4. mongodb 是非关系型数据库  是以键值对的形式传入的
 5. 数据库的概念  集合
   [
     {name:zs,age:18},//文档  name->域
     {name:zs,age:18},
     {name:zs,age:18},
     {name:zs,age:18},
     {name:zs,age:18},
     {name:zs,age:18},
     {name:zs,age:18},
   ]
  6. 不支持表连接 

## mongdb数据库的增删改查

db.集合.inset();//插入一条数据(集合:表名)
  use test
  db.user.insert({})
  show dbs
  db.user.find();
  //查找年龄 大于20
  db.user.find({age:{$gt:20}});
db.集合.insertMany();//插入多条数据

db.集合.find()//

* 删除

db.user.delete()

* 更新
 db.集合.updateOne(条件,要更新的数据)  //更新一条数据
 db.集合.updateMany()  //删除多条数据

 db.user.udateOne({age:20},{$set:{name :'小孩子'}}) //只能更新第一条
 db.user.updateOne({age:{$gt:20}},{$set :{name:'zs'}});

## mongodb特点

mongodb 很容易实现分布式
一次插入两条 可以提高性能

分片的思想  一次可以同时加入多条数据

生成的id是随机生成的  不会重复    是无序的  

## 优化

res.json(data) => res.jsonp(data) 处理jsonp请求=> data = JSON.stringify(data)  