import React, { Component } from 'react';
import { DatePicker, Space } from 'antd';
class Form extends Component {
    render() {
        return (
            <Space direction="vertical">
                <DatePicker /* onChange={onChange} */  />
            </Space>
        )
    }
}
export default Form
