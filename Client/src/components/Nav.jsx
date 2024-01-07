import logo from './nav/Logo.png'
import { Link } from 'react-router-dom'
import style from "./nav/nav.css"
import { AppBar } from "@material-ui/core";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Nav(){
    useEffect(()=>{
        Aos.init();
      },[])
    return(
        <nav data-aos="flip-down">
        <div><img src={logo} alt="" /></div>
        <div>
            <ul>
                <Link to='/' style={{textDecoration: 'none'}} className='LinkBtn'>Home</Link>
                <Link to='/login' style={{textDecoration: 'none'}}>Login</Link>
                <Link to='/signup' style={{textDecoration: 'none'}}>Signup</Link>
            </ul>
      
      

        </div>
        </nav>
    )
}