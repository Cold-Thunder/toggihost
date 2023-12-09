import React, { useState, useEffect } from 'react';

import gsuiteData from "./gSuitesData.jsx"

import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import "./gsuite.css"

const Gsuite = () => {
    const [show, setShow] = useState(false);
    const [manuId, setManuId] = useState("Effectively-Communicate")

    const showGsuite = () => {
        setShow(sho => !sho);
    }

    const manuShow = (e) => {
        let manuItem = document.querySelectorAll('.suite-btn');
        manuItem.forEach(manu => {
            if (e.target.id == manu.id) {
                setShow(false);
                setManuId(e.target.id)
                manu.classList.add('suite-active')
            } else {
                manu.classList.remove('suite-active')
            }
        })
    }

    useEffect(() => {
        let suiteBtn = document.querySelectorAll('.suite-btn');
        let gsuiteManu = document.querySelector('.suites-manu');
        show ? gsuiteManu.classList.add('gsuite-manus-show'): gsuiteManu.classList.remove('gsuite-manus-show');
        if (manuId == suiteBtn[0].id) {
            suiteBtn[0].classList.add('suite-active');
        } else {
            suiteBtn[0].classList.remove('suite-active')
        }

    }, [show])
    
    return (
        <div className="gsuite-section">
            <div className="gsuite-heading">
                <h6 className="gsuite-title">Leverage the power of Google's machine intelligence to build a smarter team</h6>
            </div>
            <div className="gsuites">
                <div className="show-gsuite-manu">
                    <button className="gsuite-offers" onClick={showGsuite}><div className="gsuite-name">{manuId}</div><div className="drop">{show ? <FaAngleUp /> : <FaAngleDown />}</div></button>
                </div>
                <div className="suites-manu">
                    <button className="suite-btn" id="Effectively-Communicate" onClick={manuShow}>Effectively Communicate</button>
                    <button className="suite-btn" id="Seamlessly-Collaborate" onClick={manuShow}>Seamlessly Collaborat</button>
                    <button className="suite-btn" id="Easily-Manage" onClick={manuShow}>Easily Manage</button>
                </div>
                <div className="suites-view">
                    <div className="suites-des"> {/*importing images from public folder */}
                        {
                            gsuiteData.map(data => {
                                if (data.id == manuId) {
                                    return (
                                        data.itemImg.map((img, index) => {
                                            return (
                                                <div className="suite-item" key={index}>
                                                    <div className="suite-item-img-sec">
                                                        <img className="suite-item-img" src={img}></img>
                                                    </div>
                                                    <div className="suite-item-des">
                                                        <h6 className="suite-item-heading">{data.itemHeading[index]}</h6>
                                                        <p>{data.itemDes[index]}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                }

                            })
                        }
                    </div>
                    <div className="gsuite-feat-bg">
                        {
                            gsuiteData.map(data => {
                                if (data.id == manuId) {
                                    return (
                                        <img className="gsuite-feat-img" src={data.featBg} key={data.id}></img>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gsuite;