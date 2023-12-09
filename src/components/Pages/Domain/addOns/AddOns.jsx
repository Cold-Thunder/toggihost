import React from 'react'

import AddOnData from "./AddOnsData"

import "./addOn.css"

const AddOns = () => {
    return (
        <div className="addOns-section">
            <div className="addOns">
                <div className="addOns-heading">
                    <h4 className="addOns-title"><span className="free-word">FREE</span> Add-ons with every Domain Name!</h4>
                    <p className="addOns-subtitle">Get over $100 worth of Free Services with every Domain you Register</p>
                </div>
                <div className="features-section">
                    {
                        AddOnData.map((data, index) => {
                            return (
                                <div className="feature" key={index}>
                                    <div className="feature-icon-sec">
                                        <img className="feature-icon" src={data.img}></img>
                                    </div>
                                    <div className="feature-info">
                                        <h5 className="feature-title">{data.title}</h5>
                                        <p className="feature-des">{data.des}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AddOns;