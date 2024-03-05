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
            <Link to='/'><div><img src={logo} alt="" className='img'/></div></Link>
        <div>
            <ul>
                <Link to='/' style={{textDecoration: 'none'}} className='LinkBtn'>Home</Link>
                <Link to='/About' style={{textDecoration: 'none'}} className='LinkBtn'>About</Link>
                <Link to='/Pricing' style={{textDecoration: 'none'}} className='LinkBtn'>Pricing</Link>
                <Link to='/login' style={{textDecoration: 'none'}}  className='LinkBtn'>Login</Link>
                <Link to='/signup' style={{textDecoration: 'none'}}  className='LinkBtn'>Signup</Link>
            </ul>
      
      

        </div>
        </nav>
    )
}