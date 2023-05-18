import React from 'react'

import './mainpage.css';

import Hero from '../assets/mainpage/Hero.png';

const mainpage = () => {
    return (
        <>
            <div className="hero-section">
                <div className="left">
                    <h1>India's Top <br></br>
                        Vulnerability Assessment &
                        Penetration Testing Service
                        for <span>Various Devices.</span></h1>
                    <p className="text-muted">A penetration test is an authorized attempt to hack into
                        an organization's data assets to identify vulnerabilities
                        that could be exploited in a cyber attack. Its purpose is
                        to find and fix these weaknesses before they can be
                        used maliciously.</p>
                    <div className="hero-box">
                        <input type="text" placeholder="Enter email for free security consultancy." />
                        <span><button className="page-btn">Send</button></span>
                    </div>
                </div>
                <div className="right">
                    <img src={Hero} alt="" />
                </div>
            </div>
        </>
    )
}

export default mainpage
