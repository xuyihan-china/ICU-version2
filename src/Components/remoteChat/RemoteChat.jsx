import React, { Component } from 'react';
import './RemoteChat.css'
import { Input } from 'antd';class RemoteChat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>RemoteChat模块说明</h1>
                <p className='para'>&nbsp;&nbsp;&nbsp;&nbsp;此模块可以实现登录医生之间的实时通讯同时对信息进行加密，保护患者隐私。同时对医学病历的见解也可以在这里发表，进行讨论。</p>
                <Input placeholder="发表第一条评论" className="inputB" />
            </div>
         );
    }
}
 
export default RemoteChat;