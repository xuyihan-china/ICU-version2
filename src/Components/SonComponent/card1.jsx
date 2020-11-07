import React, { Component } from 'react'
import Card from './cardModel'
import { Row, Col } from 'antd'
import './card.css'
class PathOne extends Component {

    render() {
        return (
            <div>
                <h1>实时监护数据模块说明</h1>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;此系统可以区分采集连接各种具有输出功能的监护设备，例如： 监护仪、呼吸机、麻醉机、 静脉输液泵、麻醉气体监测仪、连续心排量仪等；而且能自动采集每个临床设备中近百种生命体征输出参数，同时显示在用户界面中。医生可自行调整关心的参数，修正体征数据，也方便医生全面了解病人各种生命体征的变化</p>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;由于缺少真实数据来源,我们更据病人常见的参数值范围建立数据库,通过获取后台假数据返回到前端界面上。同时每2s种刷新一次界面实现局部更新界面,动态展示实时病人的各项生命体征数据。</p>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;常见指标说明:SPO<sub>2</sub>:是指血氧饱和度，是一种医学参数，是指在血液当中氧和的血红蛋白的容量占总的血红蛋白容量的百分比。</p>
                <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;我们暂且模拟医院有4个ICU重症病区,1病区26人,2病区9人,3病区12人,4病区13人。</p>
                <Row className="cardRow">
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    
                </Row>

                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>

                <Row className="cardRow">
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                </Row>

                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>

                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>

                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>

                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>
            </div>
        )

    }
}
export default PathOne
