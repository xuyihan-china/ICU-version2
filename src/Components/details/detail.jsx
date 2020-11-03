import React, { Component } from 'react';
import store from '../../store/index';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
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
                <Input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    style={{ width: 300, marginRight: "10px" }} />
                <Button type="primary" onClick={this.handleClick.bind(this)}>添加</Button>
                <List
                    style={{ marginTop: "10px", width: "300px" }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
                />
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

