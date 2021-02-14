//const { default: Base } = require("antd/lib/typography/Base");

class BaseModel {
    constructor(data,message){
        if(typeof data === 'string'){
            this.message =data; //data 对象 message 字符串
            data = null; //但是可以兼容 data 为string
            message = null;
        }
        if(data){
            this.data =data;
        }
        if(message){
            this.message =message;
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errno=0;
    }
}
class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errno=-1;
    }
}
module.exports={
    SuccessModel,
    ErrorModel
}