import React from 'react'

import './thirdpage.css';

import img1 from '../assets/thirdpage/1.png';
import img2 from '../assets/thirdpage/2.png';
import img3 from '../assets/thirdpage/3.png';
import img4 from '../assets/thirdpage/4.png';
import img5 from '../assets/thirdpage/5.png';
import img6 from '../assets/thirdpage/6.png';
import img7 from '../assets/thirdpage/7.png';
import img8 from '../assets/thirdpage/8.png';


const thirdpage = () => {
    return (
        <>
            <div className="third-page">
                <div className="third-page-content">
                    <h2>Our VAPT Services</h2>
                    <p className="text-white">We offer a wide range of Vulnerability
                        Assessment & Penetration Testing
                        services to our customers.</p>
                    <button className="page-btn p-2">Request a quote</button>
                </div>
                <div className="my-card">
                    <div className="c-card">
                        <div className="content">
                            <img src={img3} alt="" />
                            <p>Web Application VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img4} alt="" />
                            <p>Mobile Application VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img5} alt="" />
                            <p>Server & Endpoint VAPT</p>
                        </div>
                    </div><div className="c-card">
                        <div className="content">
                            <img src={img6} alt="" />
                            <p>Network & Infrastructure VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img2} alt="" />
                            <p>Scada & ICS VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img7} alt="" />
                            <p>Switches & Routers VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img8} alt="" />
                            <p>Firewall, IDS & IPS VAPT</p>
                        </div>
                    </div>
                    <div className="c-card">
                        <div className="content">
                            <img src={img1} alt="" />
                            <p>IoT Devices VAPT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default thirdpage
