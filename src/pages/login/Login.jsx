import React, { useState, useRef, useEffect } from "react"
import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import axios from "axios"   

const LOGIN_URL = `http://localhost:4000/v1/auth`

const Login = () => {
    const navigate = useNavigate()
    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const admin = {
                email: email,
                password: password,
            }
            const response = await axios.post(LOGIN_URL, admin) 
            console.log(response)
            return navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login-page">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Form className="login-form">
                <h2>Sign In</h2>
                <label htmlFor="email"> Email </label>
                <Input 
                    value={email} 
                    type="email" 
                    className="emailInput" 
                    id="email"
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password"> Password </label>
                <Input 
                    value={password} 
                    type="password" 
                    className="passwordInput" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    type="primary"
                    className="login-button"
                    onClick={handleSubmit}
                > 
                    Sign In 
                </Button>
            </Form>      
        </div>
    )
}

export default Login