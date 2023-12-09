import React, { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom"
import './manubar.css';
import { FaBars, FaXmark } from "react-icons/fa6"

const ContactBar = () => {
    const [show, setShow] = useState(false);
    const [isSticky, setSticky] = useState(false) 

    const showManuBar = () => {
        setShow(sho => !sho)
    }

    useEffect(()=>{
        let navbar = document.querySelector('.navBar');
        if (show == false) {
            navbar.classList.add('navbar-hide')
        } else {
            navbar.classList.remove('navbar-hide')
        }

        window.addEventListener('scroll', ()=>{
            setSticky(window.scrollY > 0);
        })
    }, [show])

    return (
        <div className="navBarSection">
            <div className="navbar-icon">
                <button className="navBar-btn" onClick={showManuBar}>{show ? <FaXmark className="close-btn" /> : <FaBars /> }</button>
            </div>
            {/* <div className="navBarView"> */}
                <div className={`navBar ${isSticky ? 'stickyManuBar' : 'navbar-hide'}`}>
                    <NavLink to={"/domains"} className="navBtn"><div className="navName">DOMAINS</div></NavLink>
                    <NavLink to={"/hosting"} className="navBtn"><div className="navName">HOSTING</div></NavLink>
                    <NavLink to={"/cloud"} className="navBtn"><div className="navName">CLOUD</div></NavLink>
                    <NavLink to={"/servers"} className="navBtn"><div className="navName">SEVERS</div></NavLink>
                    <NavLink to={"/website"} className="navBtn"><div className="navName">WEBSITE</div></NavLink>
                    <NavLink to={"/apps"} className="navBtn"><div className="navName">APPS</div></NavLink>
                    <NavLink to={"/email"} className="navBtn"><div className="navName">EMAIL</div></NavLink>
                    <NavLink to={"/security"} className="navBtn"><div className="navName">SECURITY</div></NavLink>
                    <NavLink to={"/combo_offers"} className="navBtn"><div className="navName">COMBO OFFERS</div></NavLink>
                    <NavLink to={"/reseller"} className="navBtn reseller">BECOME A RESELLER</NavLink>
                    <div className="mobile-access-sec">
                        <NavLink to={"/contact"} className="navBtn">CONTACT US</NavLink>
                        <NavLink to={"/login"} className="accessBtn">LOGIN</NavLink>
                        <NavLink to={"/signup"} className="accessBtn signup">SIGN UP</NavLink>
                    </div>
                </div>

            {/* </div> */}
        </div>
    )
}

export default ContactBar;
