import React, { Component } from 'react'
import Card from './cardModel'
import { Row, Col } from 'antd'
class PathTwo extends Component {

    render() {
        return (
            <div>
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

