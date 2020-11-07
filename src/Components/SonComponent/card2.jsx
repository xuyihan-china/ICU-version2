import React, { Component } from 'react'
import Card from './cardModel'
import { Row, Col } from 'antd'
import './card.css'
class PathTwo extends Component {

    render() {
        return (
            <div>
                <h1>二号病区 在住人数：9</h1>
                <Row className="cardRow">
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                </Row>
                
                <Row className="cardRow">
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    
                </Row>

                <Row className="cardRow">
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                    <Col span={8}><Card /></Col>
                </Row>
            </div>
        )

    }
}
export default PathTwo

