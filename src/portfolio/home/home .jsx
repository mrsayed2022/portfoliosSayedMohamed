
import * as React from 'react';
import "./home.css"
import {BsFacebook} from "react-icons/bs"
import {BsCardList} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import{useState ,useEffect} from "react"
import { NavLink } from "react-router-dom";
function Foter() {

    const [toggle,settoggle]=useState(false)
    const [name ,setname]=useState("SAYED MOHAMED")
    const [slicename ,setslicename]=useState("")
    // useEffect(()=>{
        
    //         const interval=setTimeout(()=>{
    //             setslicename(name.slice( 0,slicename.length+1))
    //         },1000)
    //     if (slicename.length >=name.length) {
    //         const intervals=setTimeout(()=>{
    //             setslicename(name.slice( slicename.length+1 ,0))
    //         },3000)        }
    // },[slicename])



    return (
        <div className='home-portfolio'>
            <div className="img">
                <img src="./1.jpeg" alt="no data" />
            </div>
            <div className="home-header">
                <div className="box">
            <div className="head">
                {/* <h1>{slicename} </h1> */}
                <h1>S<span>A</span>YED MOH<span>A</span>MED</h1>
                <h5>Iam<span>front end devlover</span>from cairo</h5>
            </div>
            <div className="nav">

<i className='toggle-1' style={{display:toggle&&"none" }} onClick={()=>settoggle(true)} ><BsCardList/></i>
<i className='toggle-2' style={{display:toggle&&"block" }} onClick={()=>settoggle(false)}>x</i>

           <ul className={!toggle?"navlink":"togglep"}>
                           
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
            </div>
<div className="icon">
    <i><AiFillLinkedin/></i>
    <i><BsFacebook/></i>
    <i><AiFillTwitterSquare/></i>
</div>

  <button className="download-cv"><a href="./jss.pdf">Download Cv</a></button>
               
                </div>
            </div>
        </div>
    );
};

export default Foter;