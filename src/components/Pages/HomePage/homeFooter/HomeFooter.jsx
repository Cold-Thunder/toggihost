import React from 'react'

import { Link } from "react-router-dom"
import "./homeFooter.css"

const HomeFooter = () => {
    return (
        <div className="homePageFooter">
            <div className="home-footer-section">
                <div className="home-footer-heading">
                    <h6>Join Our <br></br> Reseller Program by signing up today</h6>
                </div>
                <div className="home-footer-link">
                    <Link className="reseller-log" to={"/signup/reseller_signup"}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;