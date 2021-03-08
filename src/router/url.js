//const { message } = require("antd");
const {SuccessModel,ErrorModel} = require('../model/resModel')
const {getData2} = require('../controller/getData')//controller 处理数据 然后返回给router router 命中路由返回数据
const handleRouter = (req,res) =>{
    const method = req.method;
    const url = req.url
    const path = url.split('?')[0]
    if(method ==='GET' && path ==='/api/list'){
        //把数据传入controler
        const author = req.query.author || ''
        const password = req.query.password || ''
        //listData 是一个异步请求 要用promise
        //这里直接传入的是一个exec(sql)
        //const list = getData(author,password)
        
        //return new SuccessModel(list)
        getData2(author,password).then((res,rej)=>{
            console.log(res)
            return new SuccessModel(res)
        })
        
    }
    if(method ==='POST' &&req.path ===''){
        return {
            msg: '返回post 数据' //post 数据要通过postman来返回
        }
    }
}
module.exports= handleRouter