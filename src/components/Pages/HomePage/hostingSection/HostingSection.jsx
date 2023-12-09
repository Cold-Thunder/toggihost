import React from 'react';

import './hostingSection.css'
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa6";

const datas = [
    "Unlimited Bandwidth, Space",
    "reliable & Secure",
    "Powered by cPanel/Plesk",
    "99% uptime for rock-solid performance",
    "Free Email included",
    "30-Day Money-Back Guarantee",
]

const HostingSection = () => {
    return (
        <div className="home-hosting-section">
            <div className="home-hosting">
                <div className="hosting-des-sec">
                    <h1 className="hosting-des-title">Buy Shared Web Hosting</h1>
                    <p className="hosting-des-subtitle">Web Hosting made Easy and Affordable</p>
                    <div className="hosting-des">
                        <ul className="hosting-offer-list">
                            {
                                datas.map((data, index) => {
                                    return (
                                        <li className="hosting-list-item" key={index}><FaCheck className="check-mark" />{data}</li>
                                    )
                                })
                            }
                            <li></li>
                        </ul>
                    </div>
                    <div className="view-plans">
                        <Link className="viewPlansBtn" to={"/hosting"}>View Plans</Link>
                    </div>
                </div>
                <div className="hosting-img-sec">
                    <img className="hosting-img" src="hosting/hosting-homepage-plans.png" alt="plan-img"></img> {/*loading imags from public folder */}
                </div>

            </div>
            <div className="hosting-supports">
                <img className="hosting-supports-img" src="hosting/web-hosting-supports.png"></img>
            </div>
        </div>
    )
}

export default HostingSection;