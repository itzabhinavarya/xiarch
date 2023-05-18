import React from 'react'
import './secondpage.css';

import img1 from '../assets/secondpage/1.png';
import img2 from '../assets/secondpage/8.png';
import img3 from '../assets/secondpage/6.png';

const secondpage = () => {
    return (
        <>
            <div className="container sec-page">
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 cards">
                    <div className="col-md card">
                        <div className="card-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="card-title">
                            <h3>Certified Security Experts</h3>
                        </div>
                        <div className="card-desc">
                            <p className="text-muted">Our security experts are highly qualified and
                                certified by various organizations, including
                                CEH, ECSA, OSCP, CISA, CISSP, and more. </p>
                        </div>
                    </div>
                    <div className="col-md card">
                        <div className="card-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card-title">
                            <h3>Communication & Collaboration</h3>
                        </div>
                        <div className="card-desc">
                            <p className="text-muted">After reviewing the code, our specialists have
                                identified the best solutions to correct any issues.
                                Our experts will work with you to implement these
                                solutions and address any further concerns.</p>
                        </div>
                    </div>
                    <div className="col-md card">
                        <div className="card-img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="card-title">
                            <h3>Free Remediation Testing</h3>
                        </div>
                        <div className="card-desc">
                            <p className="text-muted">Our specialists provide effective solutions for
                                any mistakes and ensure your organization's
                                security. We offer comprehensive security
                                services to address any vulnerabilities found and
                                keep your organization safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default secondpage
