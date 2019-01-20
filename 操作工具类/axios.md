# axios

Axios是一个基于promise的HTTP库  可以用在浏览器和node.js中

## 背景

vue1.x的时候  vue提供了一个包   vue-rresource专门用于发送ajax请求  
但是到2.x的时候   vue作者自己发送了一个文章  推荐大家都使用  axios来发送ajax请求

vue中自身没有提供发送给ajax请求的工具


Axios是一个基于promise的HTTP库  可以用在浏览器和node.js中

## 特点

1. 从浏览器中创建XMLHttpREquests(支持浏览器和node.js)
2. 从node.js创建http请求
3. 支持PromiseAPI
4. 能拦截请求和响应
5. 能转换请求数据和响应数据
6. 自动转换成JSON数据
7. 能取消请求
8. 客户端支持防御XSRF

## 用法

```js
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // 执行post请求
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  //执行多个并发请求
  执行多个并发请求

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));



//可以通过向 axios 传递相关配置来创建请求

axios(config)
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

## 其它设置

* `baseURL`

//  将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL

## httpAgent 

## proxy 代理服务器

## 拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // console.log('haha ,请求被我拦截到了把', config)
    // config.headers.aa = 'bb'
    // config.baseURL = 'http://localhost:8888/api/private/v1/'
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(res => {
  // console.log(res)
  return res.data
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

```

## ajax和axios的区别

* ajax

1. 是一种在无需刷新整个页面 就可以进行局部刷新页面的技术 
2. ajax是异步请求的 不容易发生阻塞
3. 传统的网页要想刷新局部页面 必须重载整个页面 

* axios

用于浏览器和node.js的基于Promise的HTTP客户端
提供了一些并发请求的接口（重要，方便了很多的操作）