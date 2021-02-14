const queryString = require('querystring')
const handleRouter = require('./router/url')
const {SuccessModel,ErrorModel} = require('./model/resModel')
const serverHandle =(req,res)=>{
    res.setHeader('Content-type','application/json')//res 格式是 json格式
    const url = req.url;
    req.path = url.split('?')[0]
    req.query = queryString.parse(url.split('?')[1])    
    const handleRouterResult = handleRouter(req,res);//接受命中路由返回的结果
    if(handleRouterResult){
        res.end(
            JSON.stringify(handleRouterResult)
        )
        return 
    }
    //res.writeHead(404,{"Content-type":"text/plain"})
    //res.write("404 not found \n")
    res.end('启动成功')
}
module.exports = serverHandle