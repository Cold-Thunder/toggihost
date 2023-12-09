import React from 'react';

import { Link } from 'react-router-dom'
import "./headerTop.css"
const HeaderTop = () => {
    return (
        <div className='topHeaderMain'>
            <div className="topHeaderSection">
                <div className="topLeft">
                    <Link className="topLink" to={"/contact"}>CONCTACT US</Link>
                    <Link className="topLink" to={"/login"}>LOG IN</Link>
                    <Link className="topLink" to={"/signup"}>SIGN UP</Link>
                </div>
                <div className="topRight">

                </div>
            </div>
        </div>
    )
}

export default HeaderTop;