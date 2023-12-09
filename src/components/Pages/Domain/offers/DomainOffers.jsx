import React from 'react';

import Datas from "./DomainOffersData"

import "./domainOffers.css"

const DomainOffers = () => {
    return (
        <div className="domain-offers-section">
            <div className="domain-offers">
            {
                Datas.map((data, index) => {
                    return (
                        <div className="domain-offer" key={index}>
                            <div className="domain-ext-name">
                                <h2>{data.name}</h2>
                                <p className="offer-sub">{data.sub}</p>
                            </div>
                            <div className="domain-ext-price">
                                <p>{data.price}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="view-more-domains">
                <button></button>
            </div>
        </div>
    )
}

export default DomainOffers;