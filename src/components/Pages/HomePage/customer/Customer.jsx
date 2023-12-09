import React, { useState, useEffect } from 'react'

import './customer.css'

const comments = [
    {
        comment: "We're backing up all of our clients on CodeGuard! Hopefully we'll never need it, but when the time comes, it should be easy to save the day.",
        author: "Toolbox No. 9 , @toolbox9"
    },
    {
        comment: "We have used CodeGuard at TeamBuildr for a few years now and it is easily one of our greatest assets. Always backed up and easy recovery.",
        author: "James Peters, TeamBuildr"

    },
    {
        comment: "I love CodeGuard! They make backing up, tracking changes, and rolling back to a previous backup SUPER simple. Easy to use and friendly.",
        author: "Danielle Hickinbotham , @DHPenguin"
    }
]
const Customer = () => {
    const [num, setNum] = useState(0)

    let i = 0;

    useEffect(()=>{
        // setInterval(()=>{
        //     setNum((n) => n + 1);
        //     console.log(num)
        // }, 1000)
    }, [num])


    return (
        <div className="customer-section">
            <div className="customer-heading">
                <div className="customer-title">
                    <h6>Customers love CodeGuard!</h6>
                </div>
                <div className="customer-subtitle">
                    <p>More than 200,000 websites and databases use CodeGuard!</p>
                </div>
            </div>
            <div className="customer-comment-section">
                <div className="customer-comment">
                    <p className="comment">"{comments[num].comment}"</p>
                    <p className="comment-author">{comments[num].author}</p>
                </div>
            </div>
            <div className="clients">
                <img className="clients-image" src="homePage/images/cog-client-logos.png"></img>
            </div>
        </div>
    )
}

export default Customer;