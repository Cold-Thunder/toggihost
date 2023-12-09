import React from 'react'

import { useFormik } from 'formik';

import datas from "./webPlanData";
import "./webPlan.css"

const WebPlan = () => {
    const formik = useFormik({
        initialValues: {
            basic: 0,
            professional: 0,
            premium: 0,
            enterprise: 0

        },
        onSubmit: (values, {resetForm})=>{
                console.log(values)
                resetForm({values: 0})
        }
    })
    // tables data rows starts here 
    const tableRows = () => {
        return (
            datas.map((data, index) => {
                return (
                    <tr className="table-data table-data-row" key={index}>
                        {
                            data.map((dat, ind) => {
                                return (
                                    <td className="data" key={ind}>{dat}</td>
                                )
                            })
                        }
                    </tr>
                )
            })
        )
    }

    return (
        <div className="web-plan-section">
            <div className="web-plan">
                <div className="web-plan-title">
                    <h6>Select a plan for your website</h6>
                </div>
                <div className="web-plan-table">
                    <table className="plan-table">
                        <thead className="table-heading">
                            <tr className="table-heading-row">
                                <th className="heading"></th>
                                <th className="heading">Basic <div className="heading-price">$0.93/mo</div></th>
                                <th className="heading">Professional <div className="heading-price">$2.61/mo</div></th>
                                <th className="heading">Premium <div className="heading-price">$4.71/mo</div></th>
                                <th className="heading">Enterprise <div className="heading-price">$8.91/mo</div></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {
                                tableRows()
                            }
                            <tr className="table-data table-data-row table-price-row">
                                <td className="data price-data">Duration</td>
                                <td className="price-data">
                                    <form onSubmit={formik.handleSubmit}>
                                        <select className="select-drop" name="basic" onChange={formik.handleChange} value={formik.values.basic}>
                                            <option value="24">2 Years at $0.93/mo</option>
                                            <option value="12">1 Year at $1.07/mo</option>
                                            <option value="6">6 Months at $1.10/mo</option>
                                        </select>
                                        <button className="table-buy-btn" type="submit">Buy</button>
                                    </form>
                                </td>
                                <td className="price-data">
                                    <form onSubmit={formik.handleSubmit}>
                                        <select className="select-drop" name="pressional" onChange={formik.handleChange} value={formik.values.professional}>
                                            <option value="24">2 Years at $2.61/mo</option>
                                            <option value="12">1 Year at $3.01/mo</option>
                                            <option value="6">6 Months at $3.08/mo</option>
                                        </select>
                                        <button className="table-buy-btn" type="submit">Buy</button>
                                    </form>
                                </td>
                                <td className="price-data">
                                    <form onSubmit={formik.handleSubmit}>
                                        <select className="select-drop" name="premium" onChange={formik.handleChange} value={formik.values.premium}>
                                            <option value="24">2 Years at $4.71/mo</option>
                                            <option value="12">1 Year at $5.43/mo</option>
                                            <option value="6">6 Months at $5.56/mo</option>
                                        </select>
                                        <button className="table-buy-btn" type="submit">Buy</button>
                                    </form>
                                </td>
                                <td className="price-data">
                                    <form onSubmit={formik.handleSubmit}>
                                        <select className="select-drop" name="enterprise" onChange={formik.handleChange} value={formik.values.enterprise}>
                                            <option value="24">2 Years at $8.91/mo</option>
                                            <option value="12">1 Year at $10.27/mo</option>
                                            <option value="6">6 Months at $10.52/mo</option>
                                        </select>
                                        <button className="table-buy-btn" type="submit">Buy</button>
                                    </form>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default WebPlan;