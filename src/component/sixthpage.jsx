import React from 'react'

import './sixthpage.css';

import img1 from '../assets/sixthpage/image 4.png';
import img2 from '../assets/sixthpage/image 5.png';
import img3 from '../assets/sixthpage/image 6.png';
import img4 from '../assets/sixthpage/image 7.png';
import img5 from '../assets/sixthpage/image 8.png';
import img6 from '../assets/sixthpage/image 9.png';

const sixthpage = () => {
    return (
        <>
            <div className="sixthpage">
                <div className="container first-content">
                    <h2>Our Trusted Clients</h2>
                    <p className="text-muted">Our customers enjoy hassle-free solutions. We value your privacy, and our specialists
                        work to find exceptional solutions to keep you secure.</p>
                </div>


                <div className="brands">
                    <img src={img2} alt="" />
                    <img src={img6} alt="" />
                    <img src={img5} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                    <img src={img3} alt="" />
                </div>


                <div className="container cyber">
                    <h2>All Your Cyber Security Requirements Under One Roof</h2>
                    <p className="text-muted">Let us help you in securing your organization through our proactive, active, and reactive cybersecurity solutions.</p>
                </div>


                <div className="container growth">
                    <div className="data">
                        <h4>5 +</h4>
                        <p>Experience</p>
                    </div>
                    <div className="data">
                        <h4>1500 +</h4>
                        <p>Total Projects</p>
                    </div>
                    <div className="data">
                        <h4>2000 +</h4>
                        <p>Man Years Exp</p>
                    </div>
                    <div className="data">
                        <h4>2000 +</h4>
                        <p>Satisfied Customers</p>
                    </div>
                    <div className="data">
                        <h4>98% +</h4>
                        <p>Client Retention</p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default sixthpage
