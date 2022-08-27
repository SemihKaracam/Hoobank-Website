import React from 'react'
import "./footer.css"
import logo from "../../img/logo.svg"
import instagram from "../../img/instagram.svg"
import linkedin from "../../img/linkedin.svg"
import twitter from "../../img/twitter.svg"
import facebook from "../../img/facebook.svg"

const Footer = () => {
    return (
        <div className='footer section-padding'>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <img src={logo} alt="" />
                    <p className='opacity-low'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <ul className='footer-links'>
                    <li>Usefull Links</li>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>

                <ul className='footer-links'>
                    <li>Community</li>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>

                <ul className='footer-links'>
                    <li>Partner</li>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
                </ul>
            </div>
            <hr style={{margin:"30px 0"}}/>
            <div className='footer-bottom'>
                <div>
                    <p className='opacity-low'>Copyright ⓒ 2022 Hoobank.All Rights Reserved.</p>
                </div>
                <div className='footer-social'>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer