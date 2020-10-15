import { Rate } from 'antd';
import React from 'react';
class Rating extends React.Component {
    render() {
        return (
            <div>
                <Rate
                    character="A" allowHalf style={{ fontSize: 50,color:'#1890ff' }}
                />
                <br />
                
            </div>
        )
    }
}
export default Rating