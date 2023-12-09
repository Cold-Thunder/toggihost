import React, { useState } from 'react';

import { useFormik } from "formik";
import * as yup from "yup";
import './customerSignup.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Country } from 'country-state-city';
import { Link } from "react-router-dom"

const CustomerSignup = () => {
    const [visible, setVisibility] = useState(true)
    const [countries, setCountries] = useState(Country.getAllCountries())

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            email: '',
            password: '',
            address: '',
            country: '',
            accept: false
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must have atleast 2 characters!").required(),
            company: yup.string().min(2, "Company Name must have atleast 2 characters!").required(),
            email: yup.string().email("Please enter a valid email address!").required(),
            password: yup.string().min(6, "Password must have atleast 6 characters!").max(16, "Password must have less than 16 characters!").required(),
            address: yup.string().required(),
            country: yup.string().required(),
            accept: yup.boolean().required().oneOf([true], "You must accept the terms and conditions!")
        }),
        onSubmit: (values, { resetForm, setFieldValue }) => {
            console.log(values);
            resetForm({ values: ''});
            setFieldValue('accept', false)
        }
    })

    const showPass = () => {
        setVisibility(visi => !visi)
    }

    return (
        <div className="customerSignupSection">
            <div className="signupFormSection">
                <div className="customerForm">
                    <h1>Create an Account</h1>
                    <form className="custForm" onSubmit={formik.handleSubmit}>
                        <div className="inputSection"> {/*name section */}
                            <label className="custLabel" htmlFor="name">Name*</label>
                            <input className="custInput" type="text" name="name" onChange={formik.handleChange} value={formik.values.name} required></input>
                            {formik.touched.name && formik.errors.name && <div className="error-section">{formik.errors.name}</div>}
                        </div>
                        <div className="inputSection"> {/*company name section */}
                            <label className="custLabel" htmlFor="company">Company Name* <i className="itelic">(optional)</i></label>
                            <input className="custInput" type="text" name="company" onChange={formik.handleChange} value={formik.values.company} required></input>
                            {formik.touched.company && formik.errors.company && <div className="error-section">{formik.errors.company}</div>}
                        </div>
                        <div className="inputSection"> {/*email section */}
                            <label className="custLabel" htmlFor="email">Email*</label>
                            <input className="custInput" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} required></input>
                            {formik.touched.email && formik.errors.email && <div className="error-section">{formik.errors.email}</div>}
                        </div>
                        <div className="inputSection"> {/*password section */}
                            <label className="custLabel" htmlFor="password">Password*</label>
                            <div className="passInput">
                                <input className="custInput" type={visible ? "password" : "text"} name="password" onChange={formik.handleChange} value={formik.values.password} required></input>
                                <button type="button" className="showIcon" onClick={showPass}>{visible ? <FaEyeSlash /> : <FaEye />}</button>

                            </div>
                            {formik.touched.password && formik.errors.password && <div className="error-section">{formik.errors.password}</div>}
                        </div>
                        <div className="inputSection"> {/*address section */}
                            <label className="custLabel" htmlFor="address">Address*</label>
                            <input className="custInput" type="text" name="address" onChange={formik.handleChange} value={formik.values.address} required></input>
                        </div>
                        <div className="inputSection"> {/*countries input section */}
                            <label className="custLabel" htmlFor="country">Country*</label>
                            <select className="custInput" name="country" value={formik.values.country} onChange={formik.handleChange} required>
                                <option className="selectInput" value="">Select a Country</option>
                                {countries.map((country) => {
                                    return (
                                        <option className="selectInput" key={country.name} value={country.name}>{country.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="inputSection accept-section">
                            <input className="checkbox" type="checkbox" name="accept" checked={formik.values.accept} onChange={formik.handleChange} value={formik.values.accept}></input>
                            <div>
                                <p className="notice">By creating an account you agree to our <Link to={"/"}>Terms & Conditions</Link> and acknowledge receipt of the <Link to={"/"}>Privacy Policy</Link></p>
                                {formik.touched.accept && formik.errors.accept && <div className="error-section">{formik.errors.accept}</div>}
                            </div>
                        </div>
                        <button className="custSubBtn" type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignup;