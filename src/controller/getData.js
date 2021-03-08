const {exec} = require('../db/mysql')
const getData =(keyword1,keyword2) =>{ //query的值
    return [
        {
            id:1,
            title:'f'
        },
        {
            id:2,
            title:'b'
        }
    ]
}
const getData2 =(keyword1,keyword2) =>{ //query的值
    const sql = 'select * from user;'
    return exec(sql)
}
module.exports ={getData,getData2}