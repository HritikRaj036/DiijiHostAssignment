import React from 'react';
// import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../../Resources/logo.png';
//import LogoSvg from './LogoSvg';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container container">
                    <ul class="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Case Study</a></li>
                        <li><a href="#">Clientele</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Our Story</a></li>
                        <button id="contact_us"><span id="btn_text"> Contact us </span></button>
                    </ul>
                    {/* <LogoSvg/> */}
                    <span class="logo"><img src={logo} alt="logo" id="img_1" /></span> 
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


{/* <img src={logo} alt="logo" height={50} width={100} /> */ }