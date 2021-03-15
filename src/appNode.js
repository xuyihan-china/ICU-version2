process.env.NODE_ENV = 'dev'
const queryString = require('querystring')
const user = require('./controller/user')
const {get,set} = require('./db/redis')
const {access} = require('./utils/log.js')
const handleBlogRouter = require('./router/url')
const handleUserRouter = require('./router/user')
//const {SuccessModel,ErrorModel} = require('./model/resModel')

//const SESSION_DATA ={}

const getCookieExpires =()=>{
    const d = new Date();
    d.setTime(d.getTime()+(24*60*60*1000))
    console.log(d.toGMTString());
    return d.toGMTString()
}
//postData 是异步请求 所以要用异步回调 此函数用于接受post请求数据
const getPostData = (req) =>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method != 'POST'){
            resolve({})
            return
        }
        if(req.headers['Content-type'] !=='application/json'){
            resolve({})
            return 
        }
        let postData = ''
        res.on('data',chunk =>{
            postData += chunk.toString() //chunk 是二进制数据
        })
        res.on('end',()=>{
            if(!postData){
                resolve({})
                return
            }
            resolve(JSON.parse(postData)) //把postData 从字符串转化为对象
        })
    })
    return promise
}


const serverHandle =(req,res)=>{
    //记录access log
    access(
      `${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`
    )  


    res.setHeader('Content-type','application/json')//res 格式是 json格式
    const url = req.url;
    req.path = url.split('?')[0]
    req.query = queryString.parse(url.split('?')[1])  
    
    //serverhandle 中使用postdata


    //解析cookie
    req.cookie={}
    const cookieStr = req.headers.cookie || ''
    //k1=v1;k2=v2;k3=v3
    cookieStr.split(';').forEach(item =>{
        if(!item){
            return
        }
        const arr = item.split('=');
        const key = arr[0].trim();
        const val = arr[1].trim();
        req.cookie[key]= val;
    })
    //console.log('cookie is',req.cookie)
    let needSetCookie = false;
    let userId = req.cookie.userid
    if(!userId){
      needSetCookie=true
      userId =`${Date.now()}+${Math.random()}`
      //初始化set
      set(userId,{})
  }
  req.sessionId = userId;
  get(req.sessionId)
    .then(sessionData => {
      console.log("req.sessionId userId",req.sessionId,userId);
      console.log("sessionData",sessionData);
      if (!sessionData) {
        // 初始化redis 中session的初始值
        set(req.sessionId, {});
        // 设置session
        req.session = {};
      } else {
        req.session = sessionData;
      }
      // console.log("req.session:", req.session);
      return getPostData(req);
    })
    .then(postData => {
      req.body = postData;
      // 处理blog路由
      // const blogData = handleBlogRouter(req, res);
      // if (blogData) {
      //   res.end(JSON.stringify(blogData));
      //   return;
      // }
      const blogResult = handleBlogRouter(req, res);
      if (blogResult) {
        blogResult.then(blogData => {
          // console.log(blogData);
          if (needSetCookie) {
            res.setHeader(
              "Set-Cookie",
              `userid=${userId};path='/';httpOnly;expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(blogData));
        });
        return;
      }
      // 处理user路由
      // const userData = handleUserRouter(req, res);
      // if (userData) {
      //   res.end(JSON.stringify(userData));
      //   return;
      // }
      const userResult = handleUserRouter(req, res);

      if (userResult) {
        userResult.then(userData => {
          // console.log(userData);
          if (needSetCookie) {
            res.setHeader(
              "Set-Cookie",
              `userid=${userId};path='/';httpOnly;expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(userData));
        });
        return;
      }
      // 未命中路由： 返回404
      res.writeHead(404, {
        "Content-type": "text/plain"
      });
      res.write("404 Not Found\n");
      res.end();
    });
};
    //解析session
    // let needSetCookie = false;
    // let userId = req.cookie.userid
    // if(userId){
    //     if(!SESSION_DATA[userId]){
    //         SESSION_DATA[userId] ={}
    //     }
    //     req.session = SESSION_DATA[userId]       
    // }else{
    //     needSetCookie = true;
    //     userId = `${Date.now()}_${Math.random()+3}`
    //     SESSION_DATA[userId] ={}
    //     req.session = SESSION_DATA[userId]
    // }
    //console.log(req.session)
    //cookie有没有userID
   //如果没有的话需要setcookie 没有setcookie 那就要setcookie前面只是拿到随机的userID   然后得到一个随机数 拿到session data 复制给req.session
   //如果有的话 那就直接拿出来

    // getPostData(req).then(postData =>{
    //     req.body = postData;//req.body里就是req.body
    // })



    // const handleRouterResult = handleRouter(req,res);//接受命中路由返回的结果
    // if(handleRouterResult){
    //     res.end(
    //         JSON.stringify(handleRouterResult)
    //     )
    //     return 
    // }


    // const blogResult = handleBlogRouter(req, res);
    //    if (blogResult) {
    //      blogResult.then(blogData => {
    //        // console.log(blogData);
    //        if (needSetCookie) {
    //          res.setHeader(
    //            "Set-Cookie",
    //            `userid=${userId};path='/';httpOnly;expires=${getCookieExpires()}`
    //          );
    //        }
    //        res.end(JSON.stringify(blogData));
    //      });
    //      return;
    //    }


    // const userResult = handleUserRouter(req, res);
 
    //    if (userResult) {
    //      userResult.then(userData => {
    //        console.log(userData);
    //        if (needSetCookie) {
    //          res.setHeader(
    //            "Set-Cookie",
    //            `userid=${userId};path='/';httpOnly;expires=${getCookieExpires()}`
    //          );
    //        }
    //        res.end(JSON.stringify(userData));
    //      });
    //      return;
    //    }
   // res.writeHead(404,{"Content-type":"text/plain"})
   // res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    //res.write("404 not found \n")
    //res.end('启动成功')

module.exports = serverHandle