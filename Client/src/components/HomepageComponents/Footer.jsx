import React, { useEffect } from 'react'
import css from "./CSS/footer.css"
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import Aos from 'aos';


function Footer() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='footer data-aos="flip-down"'>
      <div className='contact'>
        <p><CiMail />  counselr@gmail.com</p>
        <p><IoCallOutline />  +91 XXXXXXXXXX</p>
      </div>
      <div className='copyright'><FaRegCopyright />  Counselr</div>
    </div>
  )
}

export default Footer
