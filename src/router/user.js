const {login} = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req,res) =>{
    //GET 请求 是 query 获取
    //POST 请求是 req.body 获取
    const method = req.method;
    if(method ==='GET' && req.path =='/api/user/login'){
        const {username,password}= req.query;
        const result = login(username,password);
        return result.then((data)=>{
            if(data.username){
                res.setHeader('Set-Cookie',`username=${data.username};path=/;httpOnly;`)
                //只可以后端修改 隐藏document.cookie
                return new SuccessModel({
                    username: req.cookie.username
                });
                
            }
            return new ErrorModel('登陆失败');
            
        })
    }
    // if(method ==='GET' && req.path =='/api/user/login-test'){
    //     if(req.cookie.username){
    //         return Promise.resolve(new SuccessModel());
    //     }
    //     return Promise.resolve(new ErrorModel('没有登陆'));
    // }
}
module.exports =handleUserRouter
//cookie 5kb session redis