import React, { Component } from 'react';
import { Input } from 'antd';
import Form from './form'
import TextArea from './textArea'
import InputNumber from './IntNumber'
import FileUpload from './fileUpload'
import Rate from './Rate'
import { Button } from 'antd'
import '../../ComponentCss/addOne.css'
import { Popconfirm, message } from 'antd';
import store from '../../store/index'
class AddOne extends Component {
    constructor(){
        super()
        store.subscribe(this.storeClick)
    }
    storeClick = ()=>{
        this.setState(store.getState())
    }
    confirm= (e) => {
        console.log(e);
        message.success('提交成功');
    }
    cancel= (e) => {
        console.log(e);
        message.error('提交失败');
      }
    ageChange =(e)=>{
        const action ={
            type:'age',
            value:e.target.value
        }
        store.dispatch(action)
    }
    sex =(e) =>{
        const action ={
            type:'sex',
            value:this.value
        }
        console.log(this.value)
        store.dispatch(action)
    }
    render() {
        return (
            <div id='Add'>
                <p className="add">请选择入院时间</p>
                <Form />
                <br />
                <br />
                <p className="add">患者年龄</p>
                <InputNumber min={1} max={120} defaultValue={60} className="inputB" onChange={this.ageChange}/>
                <br />
                <p className="add " >性别</p>
                <Input placeholder="性别" className="inputB" onChange={this.sex}/>
                <p className="add">患者紧急联系人1</p>
                <Input placeholder="姓名" className="inputB" />
                <Input placeholder="电话号码" className="inputB" />
                <br />
                <p className="add">患者紧急联系人2</p>
                <Input placeholder="姓名" className="inputB" />
                <Input placeholder="电话号码" className="inputB" />
                <br /><br />
                <p className="add">备注</p>
                <TextArea />
                <br />
                <p className="add">附件上传</p>
                <FileUpload />
                护理等级
                <Rate count={4} />
                <br />
                <Button type='primary' style={{ margin: '0 auto' }} onClick={this.alert}>
                    <Popconfirm
                        title="你确定要提交数据吗?"
                        onConfirm={this.confirm}
                        onCancel={this.cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="####">提交表单</a>
                    </Popconfirm>
                </Button>
                <br /><br /><br />
            </div>
        )
    }
}
export default AddOne