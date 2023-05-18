import React from 'react'

import './fifthpage.css';

import line from '../assets/fifthpage/Line.png';

const fifthpage = () => {
    return (
        <>
            <div className="fifth-page">
                <div className="container first-content">
                    <h2>Our Assessment Methodology</h2>
                    <p className="text-muted">We take a holistic approach to performing penetration testing, which involves not only
                        discovering security vulnerabilities but also identifying business logic vulnerabilities.
                        Our security checklists are based on industry standards, including OWASP Top
                        Ten and PCI Compliance, to ensure comprehensive coverage.</p>
                </div>
                <div className="container page">
                    <div className="page-content">
                        <h5>1. Define Scope</h5>
                        <p>Before an application assessment can take
                            place, Xiarch defines a clear scope of the client.
                            Open communication between Xiarch and the
                            client organization is encouraged at this stage
                            to establish a comfortable foundation from which
                            to assess.</p>
                    </div>
                    <div className="page-content">
                        <h5>2. Information Gathering</h5>
                        <p>At Xiarch, our engineers use various OSINT (Open Source
                            Intelligence) tools and techniques to gather as much
                            information as possible on the target. This information
                            allows us to understand the operational state of the
                            organization, enabling us to accurately evaluate risk as
                            the engagement progresses.</p>
                    </div>
                    <div className="page-content">
                        <h5>3. Enumeration</h5>
                        <p>In this stage, we utilize digital scripts, tools, and
                            other advanced methods for information gathering.
                            Xiarch experts meticulously examine any possible
                            attack vectors. The information collected during
                            this stage will serve as the basis for exploitation
                            in the upcoming stage.</p>
                    </div>
                    <div className="page-content">
                        <h5>4. Attack and Penetration</h5>
                        <p>In this step, we initiate both manual and automated security
                            scans to identify all possible attack vectors and
                            vulnerabilities. Once vulnerabilities are identified, we run
                            exploits on the application to evaluate its security.
                            To ensure comprehensive coverage, we use various
                            methods, open-source scripts, andin-house tools to gain a
                            high degree of penetration. All these steps are carried out
                            carefully to ensure the security of your application and its
                            information.</p>
                    </div>
                    <div className="page-content">
                        <h5>5. Reporting</h5>
                        <p>This is the final stage of the whole assessment
                            process. In this stage, the Xiarch analysts
                            aggregate all obtained information and provide
                            the client with a thorough, comprehensive
                            detailing of our findings. The entire report will
                            contain a high-level analysis of all the risks along
                            with the final report will highlight all the
                            weaknesses and strengths present in the
                            application.</p>
                    </div>
                    <div className="page-content">
                        <h5>6. Discussion & Remediation</h5>
                        <p>After completing the assessment process, our team will
                            review the report and identify appropriate solutions to
                            address the identified vulnerabilities. We will then engage
                            in a comprehensive discussion with the client to fix these
                            vulnerabilities. Our team will ensure that the necessary
                            changes are properly implemented and that all identified
                            vulnerabilities have been resolved. Finally, we will provide
                            a detailed closure or remediation report that reflects the
                            improved security state of the application.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default fifthpage
