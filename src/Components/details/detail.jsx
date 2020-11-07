import React, { Component } from 'react';
import store from '../../store/index';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import './detail.css'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        /* 订阅store的改变,只要store改变,handleStoreChange方法就会执行 */
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (

            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
            <section>
                <h1>时间规划表模块说明</h1>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;在这个模块的帮助下，你可以快速地规划一天的时间安排。同时,也可以帮助你记录下工作中要做的重要的事情。你仅仅需要在输入框中输入你想做的事情，点击添加即可,添加的时候会自动添加添加的时间。如果事情已经办完,点击事件即可删除。</p>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;在今天和明天之间，有一段行长的时期；趁你还有精神的时候，学习迅速地办事。——歌德：《格言诗》</p>
            </section>
            <section className="center">
            <section className="inputStyle">
                <Input
                
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    style={{ width: 300, marginRight: "10px" }} />
                <Button type="primary" onClick={this.handleClick.bind(this)}>添加</Button>
                </section>
                <List
                    className="butt"
                    style={{ marginTop: "10px", width: "300px" }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
                />
                </section>
            </div>
           
        )
    }
    handleChange=(e)=>{
        let { value } = e.target;
        let action = {
            type: 'change_input_value',
            value,
        }
        store.dispatch(action);
    }
    handleStoreChange=()=> {
        this.setState(store.getState())
    }
    handleClick=()=>{
        let action={
            type:'add_todo_item',
        }
        
        store.dispatch(action);
    }
    handleDelete(index){
        let action={
            type:'delete_item',
            index
        }
        store.dispatch(action)
    }
}
export default Detail;

