process.env.NODE_ENV = 'dev'
const queryString = require('querystring')
const handleRouter = require('./router/url')
const handleUserRouter = require('./router/user')
const {SuccessModel,ErrorModel} = require('./model/resModel')

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
        const key = arr[0];
        const val = arr[1];
        req.cookie[key]= val;
    })
    //console.log('cookie is',req.cookie)
    getPostData(req).then(postData =>{
        req.body = postData;//req.body里就是req.body
    })



    const handleRouterResult = handleRouter(req,res);//接受命中路由返回的结果
    if(handleRouterResult){
        res.end(
            JSON.stringify(handleRouterResult)
        )
        return 
    }

    const userResult = handleUserRouter(req, res);
 
       if (userResult) {
         userResult.then(userData => {
        //    console.log(userData);
        //    if (needSetCookie) {
        //      res.setHeader(
        //        "Set-Cookie",
        //        `userid=${userId};path='/';httpOnly;expires=${getCookieExpires()}`
        //      );
        //    }
           res.end(JSON.stringify(userData));
         });
         return;
       }
    //res.writeHead(404,{"Content-type":"text/plain"})
    //res.write("404 not found \n")
    res.end('启动成功')
}
module.exports = serverHandle