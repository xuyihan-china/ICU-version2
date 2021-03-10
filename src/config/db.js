let env = process.env.NODE_ENV
env = 'dev' //scripts 中的稍后再改 对不同开发环境下面进行配置
let MYSQL_CONF,REDIS_CONF

if (env === 'dev') {
    MYSQL_CONF = {  
            host:'localhost',
            user:'root',
            password:'ilovemysql',
            port:'3306',
            database:'test'
        
    }
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}
if (env === ' production') {
    MYSQL_CONF = {
            host:'localhost',
            user:'root',
            password:'ilovemysql',
            port:'3306',
            database:'test'
    }
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}
module.exports = {
    MYSQL_CONF,REDIS_CONF
}