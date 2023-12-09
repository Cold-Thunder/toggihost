import React, { useState } from "react";

import "./login.css"
import { Link } from "react-router-dom"

const LogIn = () => {

    return (
        <div className="loginPage">
            <div className="loginSection">
                <h1>Please Log in</h1>
                <div className="loginTypes">
                    <div className="loginTypeBtn">
                        <Link to={"/login/customer_login"} className="loginBtn">Login as Customer</Link>
                    </div>
                    <p>OR</p>
                    <div className="loginTypeBtn">
                        <Link to={"/login/reseller_login"} className="loginBtn">Login as Reseller</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;