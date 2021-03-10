const {login} = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
//设置cookie 过期时间
const {set,get} = require('../db/redis')
const handleUserRouter = (req,res) =>{
    //GET 请求 是 query 获取
    //POST 请求是 req.body 获取
    const method = req.method;
    if(method ==='GET' && req.path =='/api/user/login'){
        const {username,password}= req.query;
        const result = login(username,password);
        return result.then(data=>{
            //console.log(data)
            //console.log('req.session is ',req.session)
            if(data.username){
                //res.setHeader('Set-Cookie',`username=${data.username};path=/;httpOnly;expires=${getCookieExpires()}`)
                //只可以后端修改 隐藏document.cookie
                //设置session
                req.session.username=data.username;
                console.log('req.session is ',req.session)
                set(req.sessionId,req.session)
                return new SuccessModel({
                    username: req.cookie.username
                });
                
            }
            return new ErrorModel('登陆失败');
            
        })
    }
    if(method ==='GET' && req.path =='/api/user/login-test'){
        if(req.session.username){
            return Promise.resolve(new SuccessModel({
                username: req.session.username
            }
            ));
        }
        return Promise.resolve(new ErrorModel('没有登陆'));
    }
}
module.exports =handleUserRouter
//cookie 5kb session redis