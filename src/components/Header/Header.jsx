import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
import ManuBar from './ManuBar/ManuBar'
import HeaderTop from './HeaderTop/HeaderTop'
import "./header.css"
import Logo from '../logo/logo.gif';


const Header = () => {
    const formik = useFormik({
        initialValues: {
            whois: ''
        },
        validationSchema: yup.object({
            whois: yup.string().email('Please include @ in this email. @ is missing.')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ whois: '' });
        }
    })

    const [navBtn, setNavBtn] = useState(true);
    const [showError, setShowError] = useState(false);
    const [isSticky, setSticky] = useState(false)

    const mobileNav = () => {
        const navBar = document.querySelector('.navButtons');
        setNavBtn((nav) => !nav);
        if (navBtn == true) {
            navBar.classList.add('navButtonsShow');
            accSec.classList.add('.')
        } else {
            navBar.classList.remove('navButtonsShow')
        }
    }

    const errorSection = () => {
        return (
            formik.touched.whois
            && formik.errors.whois
            && <div className="errorSection" >{formik.errors.whois}</div>
        )
    }


    useEffect(()=>{
        const headerTop = document.querySelector('.headerTop');
        const whoisSection =document.querySelector('.whoisSection');
        const manuBar = document.querySelector(".manu-bar");

        const handleScroll = () =>{
            setSticky(window.scrollY > 0)
            
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`headerSection ${isSticky ? 'sticky' : ''}`}>
            <div className="header">
                <div className={`headerTop ${isSticky ? 'stickyTop': ''}`}>
                    <HeaderTop />
                </div>
                <div className="headerMiddleSection"> {/*logo, navbar, log-in, sign-up are starts here */}
                    <div className="logoSection">
                        <Link to={"/"}><img src={Logo} className="logo" alt="logo"></img></Link>
                    </div>
                    <div className="whoisSection"> {/*whois section searching here */}
                        <form className="whoisFormSection" onSubmit={formik.handleSubmit}>
                            <div className="whoisInputSection">
                                <input type="text" name="whois" className="inputSec" onChange={formik.handleChange} value={formik.values.whois} placeholder="Enter your Domain or IP"></input>
                                {errorSection()}
                            </div>
                            <button type="submit" className="whoisBtn submit-btn">WHO IS</button>
                        </form>
                    </div>
                </div>
                <div className="manu-bar">
                    <ManuBar/>
                </div>
            </div>
        </div>
    )
}

export default Header;