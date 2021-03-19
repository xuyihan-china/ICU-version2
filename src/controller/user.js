const { exec,escape } = require("../db/mysql")
//const {SuccessModel,ErrorModel} = require('../model/resModel')
const login = (username, password) =>{
    //username = escape(username)
    //password = escape(password)
    const sql =    `
        select username ,password from users where username = '${username}' and password = '${password}'
    `
        return exec(sql).then(rows => {
            if(rows[0] == void 0){ //要判断是否为0 void
                rows[0] = {}
            }
            return rows[0]
        })
    }
    
    module.exports = {
        login
    }