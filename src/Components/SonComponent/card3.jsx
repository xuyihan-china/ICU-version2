import React, { Component } from 'react'
import Card from './cardModel'
import { Row, Col } from 'antd'
import './card.css'
class PathTwo extends Component {

    render() {
        return (
            <div>
                <h1>三号病区 在住人数：16</h1>
                

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
                    <Col span={12}><Card /></Col>
                    <Col span={12}><Card /></Col>
                </Row>
                
                <Row className="cardRow">
                    <Col span={12}><Card /></Col>
                    <Col span={12}><Card /></Col>
                    
                </Row>
            </div>
        )

    }
}
export default PathTwo

