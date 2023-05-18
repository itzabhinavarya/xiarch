import React from 'react'

import './footer.css';

import img from '../assets/footer/logo.png.png';
import FaceBook from '../assets/footer/fb.png';
import LinkedIn from '../assets/footer/linkedin.png';
import Twitter from '../assets/footer/twitter.png';

const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-img d-flex justify-content-center align-items-center">
                    <img src={img} alt="" />
                </div>
                <div className="socials">
                    <p className="text-white">Let's Connect</p>
                    <div className="social-img">
                        <a href=""><img src={LinkedIn} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                        <a href=""><img src={FaceBook} alt="" /></a>
                        {/* <img src={Twitter} alt="" />
                        <img src={FaceBook} alt="" /> */}
                    </div>
                </div>
                <div className="address">
                    <p className="text-white">Xiarch Solutions</p>
                    <p className="text-white">352, 2nd Floor, Tarun, Outer Ring <br></br> Road, Pitampura, New Delhi, Delhi 110034</p>
                </div>
                <div className="contact">
                    <p className="text-white">Contact Us</p>
                    <p className="text-white">infoxiarch.com</p>
                    <p className="text-white">+91 9667918333</p>
                    <p className="text-white">Privacy Policy</p>
                </div>
            </div>
        </>
    )
}

export default footer
