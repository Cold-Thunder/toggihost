import React from 'react'

import "./footerRight.css";
import { Link } from "react-router-dom"

const FooterRight = () => {
    return (
        <div className="footerRightSection">

            <div className="section">
                <p className="sectionTitle">DOMAINS</p>
                <div className="sectionBtns">
                    <Link to={"/domains"} className="sectionBtn">Register Domain Name</Link>
                    <Link to={"/domains"} className="sectionBtn">View Domain Pricing</Link>
                    <Link to={"/"} className="sectionBtn">Bulk Domain Register</Link>
                    <Link to={"/"} className="sectionBtn">Bulk Domain Transfer</Link>
                    <Link to={"/"} className="sectionBtn">Whois Lookup</Link>
                    <Link to={"/"} className="sectionBtn">Name Suggestion Tool</Link>
                    <Link to={"/"} className="sectionBtn">Free with Every Domain</Link>
                    <Link to={"/"} className="sectionBtn">View Promos</Link>
                </div>
            </div>
            <div className="section">
                <p className="sectionTitle">HOSTING & PRODUCTS</p>
                <div className="sectionBtns">
                    <Link to={"/"} className="sectionBtn">Linux Hosting</Link>
                    <Link to={"/"} className="sectionBtn">WordPress Hosting</Link>
                    <Link to={"/"} className="sectionBtn">Linux Reseller Hosting</Link>
                    <Link to={"/"} className="sectionBtn">Dedicated Servers</Link>
                    <Link to={"/"} className="sectionBtn">Cloud Hosting</Link>
                    <Link to={"/"} className="sectionBtn">Business Email</Link>
                    <Link to={"/"} className="sectionBtn">Google Workspace</Link>
                    <Link to={"/"} className="sectionBtn">SSL Certificates</Link>
                    <Link to={"/"} className="sectionBtn">Sitelock</Link>
                    <Link to={"/"} className="sectionBtn">Codeguard</Link>
                    <Link to={"/"} className="sectionBtn">Combo Offers</Link>
                </div>
            </div>
            <div className="section">
                <p className="sectionTitle">INFRUSTRUCTURE</p>
                <div className="sectionBtns">
                    <Link to={"/"} className="sectionBtn">Datacenter Details</Link>
                    <Link to={"/"} className="sectionBtn">Hosting Security</Link>
                    <Link to={"/"} className="sectionBtn">24 x 7 Servers Monitoring</Link>
                    <Link to={"/"} className="sectionBtn">Backup and Recovery</Link>
                </div>
            </div>
            <div className="section">
                <p className="sectionTitle">SUPPORT</p>
                <div className="sectionBtns">
                    <Link to={"/"} className="sectionBtn">View Knowledge Base</Link>
                    <Link to={"/"} className="sectionBtn">Contact Support</Link>
                    <Link to={"/"} className="sectionBtn">Report Abuse</Link>
                </div>
            </div>
            <div className="section">
                <p className="sectionTitle">RESELLERS</p>
                <div className="sectionBtns">
                    <Link to={"/"} className="sectionBtn">Join Reseller Program</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterRight;