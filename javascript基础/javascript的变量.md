# 变量
概念：一块被命名的运行存储空间

运行存储空间：电脑应用程序在运行的时候开辟的内存空间

为什么要命名：方便程序员使用

简单理解：

存储空间：容器

命名：为了在众<!-- TOC -->autoauto- [变量](#变量)autoauto<!-- /TOC -->多容器中找到对应的容器

容器里面装了什么东西 这个变量就代表什么东西

```javascript

  // 声明并赋值
      // var a = 1;
      // console.log(a);

      // 先声明  后赋值
      //  var a;
      //  a = 1;
      // console.log(a);

      // 同时声明多个变量 并单独赋值
      //  var a, b, c, d, e;
      //  a = 1;
      //  b = 2;
      //  c = 3;
      //  d = 4;
      //  e = 5;
      //  console.log(a, b, c, d, e);

      // 不声明直接赋值  不要这么使用 会带来作用域问题
      // a = 1;
      // console.log(a);

      // 不声明不赋值 直接使用   直接报错
      // console.log(a);
      // console.log(name);
      // console.log(window);

  ```

规则 不遵守会报错:

- 由字母、数字、下划线、$符号组成，不能以数字开头
- 不能是关键字和保留字，例如：var for while
- 关键字：对于JS来说有特殊意义的字符 [查询保留字和关键字]https://developer.mozilla.org/e
- 保留字：现在没有意义 但是保留在那边 以后可能会有意义的字符
- 区分大小写
规范 尽量遵守

- 变量名必须有意义
- 遵守驼峰式命名法 首字母小写，后面单词首字母大写 例如：userName userPassword
