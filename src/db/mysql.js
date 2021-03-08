const mysql = require('mysql')
const {MYSQL_CONF} = require('../config/db')
//创建连接对象 createConnection 是一个对象
const con = mysql.createConnection(MYSQL_CONF)
con.connect()

function exec(sql){
    //console.log("exec")
    const promise = new Promise((resolve,reject) =>{
        con.query(sql,(err,result)=>{
            if(err){
                reject(err);
                return
            }else{
                
                resolve(result)
            }
        })
    })
    return promise
}
module.exports={
    exec
}