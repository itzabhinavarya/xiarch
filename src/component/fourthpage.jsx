import React from 'react'
import './fourthpage.css';

import img1 from '../assets/fourthpage/1.png';
import img2 from '../assets/fourthpage/2.png';
import img3 from '../assets/fourthpage/3.png';

const fourthpage = () => {
    return (
        <>
            <div className="fourth-page">
                <div className="container first-content">
                    <h2>Here are some of the key benefits you can expect from our services.</h2>
                    <p className="text-muted">Penetration testing is a crucial practice that provides organizations with visibility into real-world security
                        threats. By exploiting vulnerabilities and providing remediation steps, penetration tests can help identify
                        security gaps before they are exploited by hackers. This makes them an essential part of routine security checks</p>
                </div>

                <div className="container second-content">
                    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 sec-cards">
                        <div className="col-md sec-card">
                            <div className="sec-card-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="sec-card-title">
                                <p>Assessment Report</p>
                            </div>
                            <div className="sec-card-desc">
                                <p>After conducting a thorough security assessment,
                                    our experts will provide a detailed report outlining
                                    any security weaknesses found and offering
                                    remediation steps. By identifying vulnerabilities
                                    within your applications, you can proactively
                                    address any issues and enhance your overall
                                    security posture.</p>
                            </div>
                            <div className="sec-card-btn">
                                <button className="page-btn">Get Sample Report</button>
                            </div>
                        </div>
                        <div className="col-md sec-card">
                            <div className="sec-card-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="sec-card-title">
                                <p>Security Certificate</p>
                            </div>
                            <div className="sec-card-desc">
                                <p>After conducting patch verification, you can
                                    demonstrate your commitment to security and
                                    protect your critical assets. Compliance with
                                    various regulatory bodies often requires regular
                                    application testing within your infrastructure. By
                                    adhering to these requirements, you can show
                                    customers and stakeholders that you take security
                                    seriously.</p>
                            </div>
                            <div className="sec-card-btn">
                                <button className="page-btn">Get Sample Report</button>
                            </div>
                        </div>
                        <div className="col-md sec-card">
                            <div className="sec-card-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="sec-card-title">
                                <p>Expert Consultants</p>
                            </div>
                            <div className="sec-card-desc">
                                <p>We take pride in ensuring that your assessments
                                    are carried out by qualified experts. Our team of
                                    security specialists hold various industry
                                    certifications, including CHECK Team Member
                                    and Team Leader, CEH, ECSA, OSCP, CISA, CISSP,
                                    and more.</p>
                            </div>
                            <div className="sec-card-btn">
                                <button className="page-btn">Get Sample Report</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default fourthpage
