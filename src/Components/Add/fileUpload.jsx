import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import React, { Component } from 'react';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class Uploads extends Component {
  render(){
      return(
        <Dragger {...props} style={{width:'80%',paddingLeft:'3.8vw'}}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或者拖动文件来上传</p>
        <p className="ant-upload-hint">
            
        </p>
      </Dragger>
      )
    
   }
}


export default Uploads