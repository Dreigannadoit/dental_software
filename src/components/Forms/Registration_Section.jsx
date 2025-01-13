import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login_Section = () => {
    const [registrationInfo, setRegistrationInfo] = useState({
        uemail: '',
        uname: '',
        phone: '',
        psw: '',
        confirm_psw: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegistrationInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitRegistrationRequest = (e) => {
        e.preventDefault();
        console.log("Registration Information:", registrationInfo);
    };

    return (
        <>
            <div className="registration_page">
                <h3>REGISTER</h3>
                <h1>JOIN Hassle-Free Dental Management!</h1>

                <form onSubmit={submitRegistrationRequest}>
                    {/* Email Input */}
                    <div className="input_field">
                        <label htmlFor="uemail">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="uemail"
                            value={registrationInfo.uemail}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Name and Phone Number Inputs */}
                    <div className="input_field two">
                        <div className="name">
                            <label htmlFor="uname">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="uname"
                                value={registrationInfo.uname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="phoneNum">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={registrationInfo.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Password Input */}

                    <div className="input_field two">            
                        <div className="password">
                            <label htmlFor="psw">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="psw"
                                value={registrationInfo.psw}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="confirm_password">
                            <label htmlFor="phone">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Re-Enter Password"
                                name="confirm_psw"
                                value={registrationInfo.confirm_psw}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="">Register</button>
                </form>
            </div>
        </>
    );
};

export default Login_Section;
