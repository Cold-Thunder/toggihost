import React from 'react'

import { useFormik } from "formik";
import * as yup from "yup"

import "./domainSearch.css"
const DomainSearch = () => {

    const formik = useFormik({
        initialValues: {
            domainName: ''
            // extenstion: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' })
        }

    })

    return (
        <div className="domain">
            <div className="domain-search-section">
                <div className="domain-search-heading">
                    <h1>Domain Name Register</h1>
                </div>
                <div className="domain-form-section">
                    <form className="domain-form" onSubmit={formik.handleSubmit}>
                        <div className="domain-input-section">
                            <input className="domain-input" type="text" name="domainName" onChange={formik.handleChange} value={formik.values.domainName} placeholder="Find your new domain name"></input>
                        </div>
                        {/* <div className="extension-list">
                            <div className="extension">
                                <input type="checkbox" name="extension" onChange={formik.handleChange} value='.com'></input>
                                <label htmlFor="extension"> .com</label>
                            </div>
                            <div className="extension">
                                <input type="checkbox" name="extension" onChange={formik.handleChange} value='.co'></input>
                                <label htmlFor="extension"> .co</label>
                            </div>
                        </div> */}
                        <button className="domain-submit-btn" type="submit">Search Domain</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DomainSearch;