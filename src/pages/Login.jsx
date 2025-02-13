import React, { useState } from 'react';
import "../css/registrationAndLogin.css";
import Login_Section from '../components/Forms/Login_Section';
import Registration_Section from '../components/Forms/Registration_Section';
import { banner } from '../assets/img';

const Login = () => {
    // switch banner position and visibility of login and registration page
    const [isUserRegistration, setIsUserRegistration] = useState(false);

    const toggleForm = () => {
        setIsUserRegistration((prev) => !prev); // Toggle the state
    };

    return (
        <section className={`f-center ${isUserRegistration ? 'userIsRegistering-mode' : ''}`}>
            <div className="reg-wrapper f-center glassmorphism shadow">
                <div className="banner">
                    <img src={banner} alt="Banner Image" />
                </div>

                <Login_Section/>

                <Registration_Section />
            </div>

            {/* <div className="switch_form shadow">
                <button onClick={toggleForm}>
                    {isUserRegistration ? "Already Have An Account? " : "Don't Have An Account? "}
                    <b>{isUserRegistration ? "LOGIN" : "SIGN UP"}</b>
                </button>
            </div> */}
        </section>
    );
};

export default Login;
