import React, { useState } from "react";

import "./signup.css"
import { Link } from "react-router-dom"

const Signup = () => {

    return (
        <div className="loginPage">
            <div className="loginSection">
                <h1>Create an Account</h1>
                <div className="signupTypes">
                    <div className="signupTypeBtn">
                        <Link to={"/signup/customer_signup"} className="signupBtn">Signup as Customer</Link>
                    </div>
                    <p>OR</p>
                    <div className="signupTypeBtn">
                        <Link to={"/signup/reseller_signup"} className="signupBtn">Signup as Reseller</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;