const { exec } = require("../db/mysql")
//const {SuccessModel,ErrorModel} = require('../model/resModel')
const login = (username, password) =>{
    const sql =    `
        select username ,password from users where username = '${username}' and password = '${password}'
    `
    return exec(sql).then(
        rows =>{
            return rows[0]
        }
    )
}
module.exports = {login}