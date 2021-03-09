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
                <section>
                <h1>电子病历模块说明:</h1>
                <p className="para">&nbsp;&nbsp;电子病历（EMR,Electronic Medical Record）也叫计算机化的病案系统或称基于计算机的病人记录（CPR,Computer-Based Patient Record）。</p>
                <p className="para">&nbsp;&nbsp;它是用电子设备（计算机、健康卡等）保存、管理、传输和重现的数字化的医疗记录，用以取代手写纸张病历。它的内容包括纸张病历的所有信息。美国国立医学研究所将定义为：EMR是基于一个特定系统的电子化病人记录， 该系统提供用户访问完整准确的数据、警示、提示和临床决策支持系统的能力。</p>
                </section>
                <p className="add">&nbsp;&nbsp;请选择入院时间</p>
                <div style={{marginLeft:'3.8vw'}}>
                <Form/>
                </div>
                
                <br />
                <br />
                <p className="add">&nbsp;&nbsp;患者年龄</p>
                <div style={{marginLeft:'3.8vw'}}>
                    <InputNumber min={1} max={150} defaultValue={60} className="inputB" onChange={this.ageChange} />
                </div>
                
                <br />
                <p className="add " >&nbsp;&nbsp;性别</p>
                <Input placeholder="性别" className="inputB" onChange={this.sex} style={{width:'15%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                <br/>
                <p className="add " style={{width:'25%'}} >&nbsp;&nbsp;职业</p>
                
                <Input placeholder="职业" className="inputB" onChange={this.sex} style={{width:'15%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                
                
                <p className="add">&nbsp;&nbsp;患者紧急联系人1</p>
                <Input placeholder="姓名" className="inputB" style={{width:'15%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                <Input placeholder="电话号码" className="inputB" style={{width:'80%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                <br />
                <p className="add">&nbsp;&nbsp;患者紧急联系人2</p>
                <Input placeholder="姓名" className="inputB" style={{width:'15%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                <Input placeholder="电话号码" className="inputB" style={{width:'80%',borderRadius:'5px',marginLeft:'3.8vw'}}/>
                <br /><br />
                <p className="add">&nbsp;&nbsp;主诉</p>
                <TextArea />
                <br />
                <p className="add">&nbsp;&nbsp;现病史</p>
                <TextArea />
                <br/>
                <p className="add">&nbsp;&nbsp;病历附件上传</p>
                <div style={{textAlign:'center',paddingLeft:'3.8vw'}}>
                <FileUpload />
                </div>
                <br/>
                <p className="add">&nbsp;&nbsp;护理等级</p>
                
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