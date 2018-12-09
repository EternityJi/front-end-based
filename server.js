const http= require("http");
const fs = require("fs");
const path = require("path");
var server = http.createServer();
server.on('request',(req,res)=>{
     console.log(req.url);

    //  res.end('111');//数据返回
   const host = res.headers.host;
    if(req.url == '/'){
      fs.readFile(path.join(__dirname,'test.html'),(err,data)=>{
           if(err){
             console.log("请求有误");
           }
           if(host === 'test.com'){
            res.writeHead(200,{
              'Content-Type':'text/html',
              'Set-Cookie':['id=123;max-age=2','abc=456;HttpOnly,domain="test.com"']
            })
           }
         
          res.end(data);

        });
      
    }
});
server.listen(9999,()=>{
  console.log("请访问:http://localhost:9999");
  
})



