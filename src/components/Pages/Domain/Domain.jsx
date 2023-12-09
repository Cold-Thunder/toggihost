import React from 'react'

import DomainSearch from "./domainSearch/DomainSearch"
import DomainOffers from "./offers/DomainOffers"
import DomainPricing from "./domainPricing/DomainPricing"
import AddOns from "./addOns/AddOns"

import "./domain.css"

const Domain =()=>{
    return(
        <div className="domain-section">
            <div className="domain-search-section">
                <DomainSearch />
            </div>
            <div className="domain-offers-section">
                <DomainOffers />
            </div>
            <div className="domain-pricing-section">
                <DomainPricing />
            </div>
            <div className="domain-addOns-section">
                <AddOns />
            </div>
        </div>
    )
}

export default Domain;