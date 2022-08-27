import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../img/logo.svg"
import menu from "../../img/menu.svg"
import close from "../../img/close.svg"

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <div className="navbar section-padding">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            
            
            
            <div className='link-container'>
                <ul className='link-list'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Solution</a></li>
                </ul>
            </div>
            <div onClick={()=>setToggle(!toggle)}  className="menu-icon">
                <img src={toggle ? close : menu} alt="" />
            </div>
            {
                toggle && 
                (
                    <div className='menu-wrapper scale-up-center'>
                        <div className="menu">
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Features</a>
                            <a href="">Solution</a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Navbar
