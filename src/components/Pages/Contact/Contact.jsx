import React from 'react';

// import phone from './icons/contactIcons/phone.png'
// import mail from './icons/contactIcons/mail.png'
import './contact.css'
const Contact = () => {
    return (
        <div className="contactSection">
            <div className="contactHeading">
                <h1>Contact Us</h1>
            </div>
            <div className="contacts">
                <div className="left-section">
                    <div className="left">
                        <p>Sales Inquiries</p>
                    </div>
                </div>
                <div className="right-section">
                    <h2 className="heading2">For any sales related inquiries. Please contact with us.</h2>

                    <div className="contact email">
                        <div className="image-sec">
                            <img className="contact-img" src='./public/icons/contactIcons/phone.png' alt="phone"></img>
                        </div>
                        <div className="cont">
                            <p>+880 1319 415 501</p>
                        </div>
                    </div>
                    <div className="contact phone">
                        <div className="image-sec">
                            <img className="contact-img" src='./public/icons/contactIcons/mail.png' alt="mail"></img>
                        </div>
                        <div className="cont">
                            <p>support@toggihost.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;