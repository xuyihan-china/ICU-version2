import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link, Route, Redirect } from 'react-router-dom'
import PathOne from './SonComponent/card1'
import PathTwo from './SonComponent/card2'
import PathThree from './SonComponent/card3'
import PathFour from './SonComponent/card4'
import AddOne from './Add/addOne'
import Detail from './details/detail'
import store from '../store/index';
import Alert from './SonComponent/Alert';
import TrendAnalysis from './trendAnalysis/TrendAnalysis'
import { UserOutlined, LaptopOutlined, NotificationOutlined, RadarChartOutlined, BranchesOutlined, IdcardOutlined, ReadOutlined, BookOutlined, FireOutlined, FundProjectionScreenOutlined, HeartOutlined } from '@ant-design/icons';
import '../ComponentCss/layOut.css'
import FeedBack from './feedBack/FeedBack'
import RemoteChat from './remoteChat/RemoteChat'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class LayOut extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.getData)
    }
    logOut = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    render() {
        return (
            <div className="rootComponent">
                <Layout>
                    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                        <div className="logo" />
                        
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item key="1">blank</Menu.Item>
                            <Menu.Item key="2">blank2</Menu.Item>
                            {/* link to = xxx url  route =>{ path =xxx} */}
                            <Menu.Item key="3">
                                <Link to="detail">
                                    时间规划表
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to='addOne'>
                                    添加患者
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="5">
                                <Link to='feedBack'>
                                    实时异常反馈
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to='remoteChat'>
                                    在线远程会诊
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to='icuOne'>
                                    返回首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to='icuOne' onClick={this.logOut}>
                                    退出登录
                                </Link>
                            </Menu.Item>

                        </Menu>
                    </Header>
                    <Layout >
                        <Sider width={200} className="site-layout-background" style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            zIndex: 1,
                            paddingTop: 64
                        }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}

                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="监护数据">

                                    <Menu.Item key="1">
                                        <Link to='icuOne'>
                                            1号病房
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to='icuTwo' >
                                            2号病房
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="icuThree">
                                            3号病房
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="icuFour">
                                            4号病房
                                        </Link>
                                    </Menu.Item>

                                </SubMenu>

                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="生命体征">
                                    <Menu.Item key="5">危重病人1</Menu.Item>
                                    <Menu.Item key="6">危重病人2</Menu.Item>
                                    <Menu.Item key="7">危重病人3</Menu.Item>
                                    <Menu.Item key="8">危重病人4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="预警信息">
                                    <Menu.Item key="9">
                                        <Link to="alert">
                                            ICU大厅
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item icon={<IdcardOutlined />} key="10">
                                    <Link to="" >
                                        患者画像
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<FundProjectionScreenOutlined />} key="11">
                                    <Link to="">
                                        重症评分
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<RadarChartOutlined />} key="12">
                                    <Link to="trendAnalysis" >
                                        趋势分析
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<ReadOutlined />} key="13">
                                    <Link to="">
                                        患者足迹
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<BranchesOutlined />} key="14">
                                    <Link to="">
                                        患者管路
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<BookOutlined />} key="15">
                                    <Link to="">
                                        医嘱查询
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<FireOutlined />} key="16">
                                    <Link to="">
                                        电子病历
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<HeartOutlined />} key="17">
                                    <Link to="">
                                        护理评互
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{ margin: '24px 16px 24px 224px', overflow: 'initial', backgroundColor: '#e6f7ff' }}
                            >
                                <Route path='/icuOne' component={PathOne}></Route>
                                <Route path='/icuTwo' component={PathTwo}></Route>
                                <Route path='/icuThree' component={PathThree}></Route>
                                <Route path='/icuFour' component={PathFour}></Route>
                                <Route path='/addOne' component={AddOne}></Route>
                                <Route path='/detail' component={Detail}></Route>
                                <Route path='/alert' component={Alert}></Route>
                                <Route path='/feedBack' component={FeedBack}></Route>
                                <Route path='/remoteChat' component={RemoteChat}></Route>
                                <Route path='/trendAnalysis' component={TrendAnalysis}></Route>
                                <Redirect to='/icuOne'></Redirect>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
    getData = () => {
        this.setState(store.getState())
    }


}

export default LayOut;