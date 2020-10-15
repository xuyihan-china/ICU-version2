import React, {Component } from 'react';
import { InputNumber } from 'antd';
class InputNumbers extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <InputNumber min={1} max={120} defaultValue={30}/>
            </div>
         );
    }
}
 
export default InputNumbers;