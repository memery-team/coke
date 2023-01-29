



// const Login = () => {

    




//     return (
//         <div className="login-page">
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <Form className="login-form">
//                 <h2>Sign In</h2>
//                 <label htmlFor="email"> Email </label>
//                 <Input 
//                     value={email} 
//                     type="email" 
//                     className="emailInput" 
//                     id="email"
//                     ref={userRef}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="password"> Password </label>
//                 <Input 
//                     value={password} 
//                     type="password" 
//                     className="passwordInput" 
//                     id="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button 
//                     type="primary"
//                     className="login-button"
//                     onClick={handleSubmit}
//                 > 
//                     Sign In 
//                 </Button>
//             </Form>      
//         </div>
//     )
// }

// export default Login

import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"   
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./Login.css"

const LOGIN_URL = `http://localhost:4000/v1/auth`

const Login = () => {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        try {
            const admin = {
                email: values.email,
                password: values.password,
            }
            const response = await axios.post(LOGIN_URL, admin) 
            console.log(response)
            return navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues= {{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default Login;


