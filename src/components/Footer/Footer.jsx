import React from 'react';

import FooterRight from "./FooterRight"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from 'react-icons/fa6'

import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerSections">
                {/* footer left section start here  */}
                <div className="footerLeft">
                    <div className="footerLogoSection">
                        <Link to={"/"}>
                            <img src="./icons/logo/logo.gif" alt="logo"></img>
                        </Link>
                    </div>
                    <div className="blogLinkSection">
                        <Link to={"/"} className="blogLinkBtn">About <FaArrowRightLong className="arrow" /></Link>
                        <Link to={"/"} className="blogLinkBtn">Read our blog <FaArrowRightLong className="arrow" /></Link>
                    </div>
                    <div className="iconSection"> {/*icon section starts here */}
                        <div className="leftSection socialMedia">  {/*social meida starts here*/}
                            <h2>STAY CONNECTED WITH US!</h2>
                            <div className="icons">
                                <div className="social-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/socialMedia/facebook.png"></img>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/socialMedia/twitter.png"></img>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/socialMedia/linkedin.png"></img>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/socialMedia/pinterest.png"></img>
                                    </a>
                                </div>
                            </div>
                        </div> {/*social media ends here */}
                        <div className="leftSection payment">
                            <h3>PAY WITH CONFIDENCE</h3>
                            <div className="icons">
                                <div className="payment-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/payments/paypal.png"></img>
                                    </a>
                                </div>
                                <div className="payment-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/payments/amex.png"></img>
                                    </a>
                                </div>
                                <div className="payment-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/payments/mastercard.png"></img>
                                    </a>
                                </div>
                                <div className="payment-icon">
                                    <a href="#" target="blank">
                                        <img src="./icons/payments/visa.png"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* footer right section starts here  */}
                <div className="footerRight">
                    <FooterRight />
                </div>
            </div>
            <div className="footerBottom">
                <div className="bottomLeft">
                    <p>Copyright &copy; Toggihost.com. All rights reserved</p>
                </div>
                <div className="bottomRight">
                    <Link to={"/"} className="bottomBtn">Privacy Policy</Link>
                    <Link to={"/"} className="bottomBtn">Legal Argeement</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;