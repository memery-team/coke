import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label> Email </label>
                <input 
                    value={email} 
                    type="email" 
                    className="emailInput" 
                    placeholder="example@email.com" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label> Password </label>
                <input 
                    value={password} 
                    type="password" 
                    className="passwordInput" 
                    placeholder="********" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>      
        </div>
    )
}