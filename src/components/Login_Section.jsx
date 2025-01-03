import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login_Section = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        remember: true,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginInfo((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const submitLoginRequest = (e) => {
        e.preventDefault();
        console.log("Login Request Submitted");
        console.log("Login Information:", loginInfo);
    };

    return (
        <>
            <div className="login_page">
                <h3>LOGIN</h3>
                <h1>
                    Hello, <br />
                    Welcome Back!
                </h1>

                <form onSubmit={submitLoginRequest}>
                    {/* Username Input */}
                    <div className="input_field">
                        <label htmlFor="username">Username/Email</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={loginInfo.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input_field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={loginInfo.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="remember_me">
                        <label htmlFor="remember">Remember Me</label>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={loginInfo.remember}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Login Button and Forgot Password Link */}
                    <div className="f-beside">
                        <button type="submit">LOGIN</button>
                        <Link to="">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login_Section;
