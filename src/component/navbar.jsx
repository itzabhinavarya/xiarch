import React, { useState } from 'react';

import './navbar.css';

import Logo from '../assets/navbar/logo.png';

import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  // const toggleNav = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light header">
        <div className="logo">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
        </div>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div className={showMediaIcon ? "collapse navbar-collapse justify-content-end mobile-device" : "collapse navbar-collapse justify-content-end"} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact Us</a>
            </li>
            <div className="my-btn d-flex justify-content-center align-item-center">
              <button className="page-btn hero-page-btn">Get Started</button>
            </div>
          </ul>
        </div>

        <div className="hamburger">
          <a href="" className="text-black hamburger-icon" onClick={(e) => {e.preventDefault(); setShowMediaIcon(!showMediaIcon);}}><GiHamburgerMenu size="1.7rem" /></a>
        </div>

      </nav>

    </>
  )
}

export default Navbar
