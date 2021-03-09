import React, { Component } from 'react';
import './login.css'
class Login extends Component {
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
                    <form className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p className="message">未注册？ <a href="www.njmu.edu.cn">新建账户</a></p>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login