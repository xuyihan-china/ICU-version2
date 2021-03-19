import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    componentDidMount(){
        fetch("/api/user/login")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="www.njmu.edu.cn">登录</a></p>
                    </form>
                    <form action="http://127.0.0.1:8080/api/user/login" className="login-form">
                        <input type="text" placeholder="username" name="username"/>
                        <input type="password" placeholder="password" name="password"/>
                        <button>login</button>
                        <p className="message">未注册？ <a href="www.njmu.edu.cn">新建账户</a></p>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login