import React, { Component } from 'react'
import './layOut.css'
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
import { UserOutlined, IdcardOutlined,  FireOutlined, RadarChartOutlined, HeartOutlined,ReadOutlined,BookOutlined } from '@ant-design/icons';
//mport '../ComponentCss/layOut.css'
import FeedBack from './feedBack/FeedBack'
import RemoteChat from './remoteChat/RemoteChat'
import Photo  from './Photo/photo'
import Nursing from './Nursing/Nursing'
import login from '../Components/login/login'
import DocSay from './findDocSay/DocSay'
import Record from './Record/Record'
import HospitalRec from './HospitalRec/HospitalRec'
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
    login =() =>{
        
    }
    render() {
        return (
            <div className="rootComponent">
                <Layout >
                    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                        
                        
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item key="1">blank</Menu.Item>
                            <Menu.Item key="2">blank2</Menu.Item>
                            {/* link to = xxx url  route =>{ path =xxx} */}
                            <Menu.Item key="3">
                                <Link to="detail">
                                    ICU时间规划
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to='addOne'>
                                    电子病历
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="5">
                                <Link to='feedBack'>
                                    实时异常反馈
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to='remoteChat'>
                                    ICU病例统计
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to='icuOne'>
                                    返回首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to='/api/user/login' onClick={this.login}>
                                    登录
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to='icuOne' onClick={this.logOut}>
                                    退出登录
                                </Link>
                            </Menu.Item>
                            

                        </Menu>
                    </Header>
                    <Layout style={{height:'100%'}}>
                        <Sider width={200} className="site-layout-background" style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            zIndex: 1,
                            paddingTop: 64
                        }} >
                            <div className="logo" />
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

                               
                                
                                <Menu.Item icon={<IdcardOutlined />} key="8">
                                    <Link to="photo" >
                                        ICU患者画像
                                    </Link>
                                </Menu.Item>
                                {/* <Menu.Item icon={<FundProjectionScreenOutlined />} key="9">
                                    <Link to="">
                                        重症评分
                                    </Link>
                                </Menu.Item> */}
                                <Menu.Item icon={<RadarChartOutlined />} key="10">
                                    <Link to="trendAnalysis" >
                                        ICU在院情况
                                    </Link>
                                </Menu.Item>
                               <Menu.Item icon={<ReadOutlined />} key="11">
                                    <Link to="HospitalRec">
                                        疾病报告
                                    </Link>
                                </Menu.Item> 
                                {/* <Menu.Item icon={<BranchesOutlined />} key="12">
                                    <Link to="Record">
                                        病程记录
                                    </Link>
                                </Menu.Item> */}
                                <Menu.Item icon={<BookOutlined />} key="13">
                                    <Link to="DocSay">
                                        可视化异常检测
                                    </Link>
                                </Menu.Item> 
                                <Menu.Item icon={<FireOutlined />} key="14">
                                    <Link to="addOne">
                                        电子病历
                                    </Link>
                                </Menu.Item>
                                <Menu.Item icon={<HeartOutlined />} key="15">
                                    <Link to="Nursing">
                                        护理评级参照
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
                                style={{ margin: '24px 16px 24px 224px', overflow: 'initial', backgroundColor: '#e6f7ff' ,height:'100%'}}
                            >
                                <Route path='/user/icuOne' component={PathOne}></Route>
                                <Route path='/user/icuTwo' component={PathTwo}></Route>
                                <Route path='/user/icuThree' component={PathThree}></Route>
                                <Route path='/user/icuFour' component={PathFour}></Route>
                                <Route path='/user/addOne' component={AddOne}></Route>
                                <Route path='/user/detail' component={Detail}></Route>
                                <Route path='/user/alert' component={Alert}></Route>
                                <Route path='/user/feedBack' component={FeedBack}></Route>
                                <Route path='/user/remoteChat' component={RemoteChat}></Route>
                                <Route path='/user/trendAnalysis' component={TrendAnalysis}></Route>
                                <Route path='/user/photo' component={Photo}></Route>
                                <Route path='/user/Nursing' component={Nursing}></Route>
                                <Route path='/user/login' component={login}></Route>
                                <Route path='/user/DocSay' component={DocSay}></Route>
                                <Route path='/user/Record' component={Record}></Route>
                                <Route path='/user/HospitalRec' component={HospitalRec}></Route>
                                <Redirect to='/user/login'></Redirect>
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