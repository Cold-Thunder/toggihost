import React, { useState } from 'react';

// import SelectPlan from "./selectPlan/SelectPlan"
// import OfferSection  from './offerSection/OfferSection';
import HostingSection from './hostingSection/HostingSection';
import WebPlanSection from './websitePlan/WebPlan'
import Customer from './customer/Customer';
import Gsutie from './gsuites/GSuites'
// import StepSection from './stepSection/StepSection';
import HomeFooter from './homeFooter/HomeFooter';


import { useFormik } from "formik"
import {Link} from "react-router-dom"
import newItems from "../images/homePage/gapps-whatsnew-bg.png"

import './homePage.css'
const HomePage = () => {
    const formik = useFormik({
        initialValues: {
            domain: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: '' });
        }
    })
    const [showPop, setShowPop] = useState(true);

    const showPopup = () => {
        setShowPop(show => !show);
    }
    return (
        <div className="homePage">
            <div className="homePageSection">
                <div className="popup-container">
                    <div className={showPop ? "popupSection" : "hidePopup"}> {/*pop up section starts here */}
                        <p>DNS, Threat protection and $100 worth of services, GET Free email, DNS, threat protection.</p>
                        <button className="closePopup" onClick={showPopup}>X</button>
                    </div>
                </div>
                {/* popup section ended  */}
                {/* domain searching starts here  */}
                <div className="domainSearchSection">
                    <div className="domainSearch">
                        <div className="domainHeading">
                            <h1>Get a Domain Name</h1>
                            <p>With Privacy Protection and lots more</p>
                        </div>
                        <div className="domainInputSection">
                            <form className="domainForm" onSubmit={formik.handleSubmit}>
                                <input className="domainInput" name="domain" value={formik.values.domain} onChange={formik.handleChange} placeholder="Find your ideal domain name"></input>
                                <button className="domainSubmitBtn" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    {/* pricing in domain section starts here  */}
                    <div className="pricing-section">
                        <div className="all-pricing">
                            <div className="pricing">
                                <h2>.com</h2>
                                <p className="previous"></p>
                                <p>BDT 1300.43</p>
                            </div>
                            <div className="pricing">
                                <h2>.net</h2>
                                <p className="previous"></p>
                                <p>BDT 1599.88</p>
                            </div>
                            <div className="pricing">
                                <h2>.org</h2>
                                <p className="previous">BDT 1626.28</p>
                                <p>BDT 14640.44</p>
                            </div>
                            <div className="pricing">
                                <h2>.io</h2>
                                <p className="previous"></p>
                                <p>BDT 7574.05</p>
                            </div>
                        </div>
                        <Link className="pricing-btn" to={"/"}>View Pricing</Link>
                    </div>
                </div>
                {/* domain searching ends here  */}
                {/* what's new section  */}
                {/* <div className="whats-new-section">
                    <h3>What's New</h3>
                    <img className="newItems" src={newItems}></img>
                    <Link className="buyNowBtn" to={"/"}>Buy Now</Link>
                </div> */}
                 {/* whats new ends here  */}
                {/* select plan starts here  */}
                {/* <div className="selectPlan">
                    <SelectPlan />
                </div> */}
                {/* <div className="offerSection">
                    <OfferSection />
                </div> */}
                <div className="hostingSection">
                    <HostingSection />
                </div>
                {/* web plan section starts here  */}
                <div className="webPlanSection">
                    <WebPlanSection />
                </div>
                {/* web plan section ends here  */}
                {/* customer section starts here  */}
                <div className="customerSection">
                    <Customer />
                </div>
                {/* customer section ends here  */}
                {/* gsuite section starts here  */}
                <div className="gsutieSection">
                    <Gsutie />
                </div>
                {/* gsuite section ends here  */}
                {/* <div className="stepSection">
                    <StepSection />
                </div> */}
                {/* homefooter section starts here  */}
                <div className="homeFooterSection">
                    <HomeFooter />
                </div>
            </div>
        </div>
    )
}

export default HomePage;