import { Input } from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input;

class Demo extends Component {
//   state = {
//     value: '',
//   };

//   onChange = ({ target: { value } }) => {
//     this.setState({ value });
//   };

  render() {
    //const { value } = this.state;

    return (
      <>
        
        <TextArea placeholder="输入患者病历信息" autoSize />
        <div style={{ margin: '24px 0' }} />
      </>
    );
  }
}

export default Demo