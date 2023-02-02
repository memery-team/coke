import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"   
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin, ConfigProvider } from 'antd';
import "./Login.css"

const LOGIN_URL = `https://latte-staging-wceiv3ifnq-an.a.run.app/v1/auth`

const Login = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
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
        <ConfigProvider
            theme={{
                components: {
                    Spin: {
                        colorPrimary: '#e6f4ff',
                    },
                },
    }}
        >
            <div className="login-container">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues= {{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <h1>Memery</h1>
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
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            onClick={() => setLoading(preValue => !preValue)}
                        >
                            Log in
                            <Spin spinning={loading} className="spinner" size="small" />
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ConfigProvider>
    );
};

export default Login;


