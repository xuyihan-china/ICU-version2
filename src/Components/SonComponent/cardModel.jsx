import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
class card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            date: 0,
            heart: 94,
            breath:89,
            blood: 130,
            sp: 99,
            st: -0.8
        }
        this.changeData = this.changeData.bind(this)
    }
    componentWillMount(){
        this.changeData()
    }

    changeData() {
        setInterval(() => {
            const date = new Date().toLocaleTimeString()
            this.setState({ date })
            const heartArray = [70, 71, 92, 94, 95, 96, 97, 98, 100, 111, 100, 66, 65, 44, 144, 170, 70, 71, 92, 94,]
        const breathArray = [88, 89, 67, 68, 69, 78, 99, 100, 44, 78, 91, 92, 93, 94, 95, 77, 75, 111, 100, 66, 65, 44]
        const bloodArray = [130, 128, 88, 160, 90, 100, 120, 111, 113, 111, 100, 66, 65, 44, 144, 170, 111, 113, 114, 115]
        const spArray = [99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99, 99, 100, 98, 99]
        const stArray = [-0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, -0.4, -0.3, -0.2, -0.1, 0]
        const random = Math.floor(Math.random() * 20)
        let heart = heartArray[random]
        let breath = breathArray[random]
        let blood = bloodArray[random]
        let sp = spArray[random]
        let st = stArray[random]
        this.setState({
            // heart
            heart, blood, sp, st, breath
        })
        }, 3000);
    }
    render() {
        
        return (
            <div>
                {/* <Button onClick={this.changeData}>开始</Button> */}
                <Card style={{ width: 300 }}
                    hoverable={true}
                    extra={<Link to="/user/DocSay">查看详情</Link>}
                    title={
                        "ICU patient"
                    }
                >
                    <p style={{ fontWeight: 'bold', color: 'red' }}>心跳:{this.state.heart}次/min</p>
                    <p style={{ fontWeight: 'bold', color: 'skyblue' }}>血压:{this.state.blood}mmHg</p>
                    <p style={{ fontWeight: 'bold', color: 'grey' }}>呼吸:{this.state.breath}次/min</p>
                    <p style={{ fontWeight: 'bold', color: 'green' }}>SPO2:{this.state.sp}%</p>
                    <p style={{ fontWeight: 'bold', color: 'pink' }}>ST-AVF:{this.state.st}</p>
                    <p style={{ fontWeight: 'bold', color: 'black' }} >采集时间 {this.state.date}</p>
                </Card>
            </div>
        );

    }
}

export default card;