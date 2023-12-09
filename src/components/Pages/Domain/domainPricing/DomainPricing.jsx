import React, { useState, useEffect } from 'react'

import PricingData from "./DomainPricingData"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

import "./domainPricing.css"

const DomainPricing = () => {
    const [btnId, setBtnId] = useState("New-Registration");
    const [show, setShow] = useState(false)

    const showOffers = () => {
        setShow(sho => !sho);
    }


    const domainBtn = (e) => {
        let pricingBtn = document.querySelectorAll(".domain-pricing-btn");

        setBtnId(e.target.value);
        pricingBtn.forEach(btn => {
            if (btn.value == e.target.value) {
                btn.classList.add('pricing-btn-active')
                setShow(false)
            } else {
                btn.classList.remove('pricing-btn-active');
            }
        })
    }

    useEffect(() => {
        let pricingBtn = document.querySelectorAll(".domain-pricing-btn");
        let domainPricing = document.querySelector(".domain-pricing-manu");

        pricingBtn.forEach(btn => {
            if (btn.value == btnId) {
                btn.classList.add('pricing-btn-active')
            } else {
                btn.classList.remove('pricing-btn-active')
            }
        })

        show ? domainPricing.classList.add('show-manu') :domainPricing.classList.remove('show-manu')
        
    }, [ show])

    return (
        <div className="domain-pricing-section">
            <div className="domain-pricing-heading">
                <h3>Domain Pricing</h3>
            </div>
            <div className="domain-pricing">
                <div className="show-pricing-manu">  {/* this section is styled from selectPlan component */}
                    <button className="pricing-offers" onClick={showOffers}><div className="pricing-name">{btnId}</div><div className="drop-icon">{show ? <FaAngleUp /> : <FaAngleDown />}</div></button>
                </div>
                <div className="domain-pricing-manu">
                    <button className="domain-pricing-btn" onClick={domainBtn} value="New-Registration">New Registration</button>
                    <button className="domain-pricing-btn" onClick={domainBtn} value="Renewals">Renewals</button>
                    <button className="domain-pricing-btn" onClick={domainBtn} value="Transfers">Transfers</button>
                    <button className="domain-pricing-btn" onClick={domainBtn} value="Restorations">Restorations</button>
                </div>
                <div className="domain-pricing-view">
                    <div className="domain-pricing-table">
                        <table className="pricing-table">
                            <thead className="pricing-table-heading">
                                <tr>
                                    <th className="pricing-heading">TLD</th>
                                    <th className="pricing-heading">1 Year</th>
                                    <th className="pricing-heading">2 Years</th>
                                    <th className="pricing-heading">3 Years</th>
                                </tr>
                            </thead>
                            <tbody className="table-data-body">
                                {
                                    PricingData.map((data) => {
                                        if (data.id == btnId) {
                                            return (
                                                data.priceData.map((prices, index) => {
                                                    return (
                                                        <tr className="table-pricing-row" key={index}>
                                                            <td className="pricing-data pricing-name">{prices[0]}</td>
                                                            <td className="pricing-data">{prices[1]}</td>
                                                            <td className="pricing-data">{prices[2]}</td>
                                                            <td className="pricing-data">{prices[3]}</td>
                                                        </tr>
                                                    )
                                                })

                                            )
                                        }
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainPricing;