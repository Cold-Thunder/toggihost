import React, { useState } from 'react';

import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { FaEye, FaEyeSlash } from "react-icons/fa"
import * as yup from 'yup'
import "../loginFormStyle.css"

const CustomerLogin = () => {
    const [visible, setVisibility] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email("Please enter a valid email!").required(),
            password: yup.string().min(6, "Password must have atleast 6 characters!").required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: "" })
        }
    });

    const emailError = () => {
        return (
            formik.touched.email
            && formik.errors.email
            && <div className="error-section">{formik.errors.email}</div>
        )
    }

    const passwordError = () => {
        return (
            formik.touched.password
            && formik.errors.password
            && <div className="error-section">{formik.errors.password}</div>
        )
    }

    const showPass = () => {
        setVisibility(visi => !visi);
    }

    return (
        <div className="login-main">
            <h1>Customer Login</h1>
            <div className="login-form">
                <form onSubmit={formik.handleSubmit}>
                    <div className="emailSection input-section">
                        <label className="label" htmlFor="email">Email:</label>
                        <input className="input" type="email" name="email" value={formik.values.email} onChange={formik.handleChange}></input>
                    </div>
                    {emailError()} {/*email error function */}
                    <div className="passwordSection input-section">
                        <label className="label" htmlFor="password">Password</label>
                        <div className="passwordInput">
                            <input className="input" type={visible ? "text" : "password"} name="password" value={formik.values.password} onChange={formik.handleChange}></input>
                            <button type="button" className="showPassIcon" onClick={showPass}>{visible ? <FaEye /> : <FaEyeSlash />}</button>
                        </div>
                    </div>
                    {passwordError()} {/*password error function */}
                    <div className="forget-section">
                        <Link to={"/login/foget-password"} className="forgetLink">Forget Password</Link>
                    </div>
                    <button className="login-btn" type="submit">Log In</button>
                </form>
                <div className="createBtn">
                    <p>New to Toggihost? <Link to={"/signup"} className="createLink">Create an Account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default CustomerLogin;