import React, { Component } from 'react'
import Card from './cardModel2'
import { Row, Col } from 'antd'
import './feedback.css'
class FeedBack extends Component {
    render() {
        return (
            <div>
                <h1>实时异常反馈模块介绍</h1>
                <p className='para'>&nbsp;&nbsp;&nbsp;&nbsp;每一个生命指标都有一定的正常的范围，如果一直看着计算机的屏幕监视病人的生命的体征必然会导致视觉疲劳，并且长久以来也容易出错。所以我们将数据集成到这个平台集中化展示,通过计算机自动判断哪些患者生命体征不正常,方便医护人员快速定位生命体征不正常的患者。</p>
                <p className='para'>&nbsp;&nbsp;&nbsp;&nbsp;医生可以在权限中设置特别关注的生命体征不稳定的病人，显示在此处。</p>
                <h1>Demo 版本1：生命体征正常显示正常，不正常显示不正常的值</h1>
                <Row className="cardRow">
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                    <Col span={6}><Card /></Col>
                </Row>
                <br></br>
                <br></br>
                <h1>Demo 版本2：生命体征正常显示正常，不显示。生命体征不正常，显示</h1>
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
export default FeedBack