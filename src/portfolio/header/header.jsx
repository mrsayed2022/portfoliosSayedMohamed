// @flow strict
import "./header.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import { NavLink } from "react-router-dom";

function Header() {


    const [toggle, settoggle] = useState(false)
    return (
        <div className="home-headers">

<i className='toggle-1' style={{display:toggle&&"none" }} onClick={()=>settoggle(true)} ><BsCardList/></i>
<i className='toggle-2' style={{display:toggle&&"block" }} onClick={()=>settoggle(false)}>x</i>

        <div className={toggle?"headerport togle" :"headerport"}>
            <div className="headname">
                <h2><span>S</span>AYED M<span>O</span>HAMED</h2>
            </div>
         <nav>
             <ul className="nav-link">
                 <NavLink to="/">
                 <li>HOME</li>
                 </NavLink>
                 <NavLink to="/about">
                 <li>ABOUT</li>
                 </NavLink>
                 <NavLink to="/skils"> 
                 <li>SERVICE</li>
                 </NavLink>
                 <NavLink to="/progect">
                 <li>PROGECT</li>
                 </NavLink>
                 <NavLink to="/contact">
                 <li>CONTACT</li>
                 </NavLink>
             </ul>
         </nav>
        </div>
        </div>
    );
};

export default Header;