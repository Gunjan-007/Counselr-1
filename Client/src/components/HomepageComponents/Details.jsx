import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import css from "./CSS/detail.css"

let details = [
  
    { heading: "Greater Clarity and Confidence", description: "By providing students with a range of resources and services, including career assessments, job search tools, and personalized guidance, our website can help students gain greater clarity and confidence in their career choices." ,img:"https://images.all-free-download.com/images/graphicwebp/computing_work_background_colorful_digital_elements_sketch_6853110.webp"},
    { heading: "Greater Clarity and Confidence", description: "By providing students with a range of resources and services, including career assessments, job search tools, and personalized guidance, our website can help students gain greater clarity and confidence in their career choices." ,img:"https://images.all-free-download.com/images/graphicwebp/computing_work_background_colorful_digital_elements_sketch_6853110.webp"},
    { heading: "Greater Clarity and Confidence", description: "By providing students with a range of resources and services, including career assessments, job search tools, and personalized guidance, our website can help students gain greater clarity and confidence in their career choices." ,img:"https://images.all-free-download.com/images/graphicwebp/computing_work_background_colorful_digital_elements_sketch_6853110.webp"},
    { heading: "Greater Clarity and Confidence", description: "By providing students with a range of resources and services, including career assessments, job search tools, and personalized guidance, our website can help students gain greater clarity and confidence in their career choices." ,img:"https://images.all-free-download.com/images/graphicwebp/computing_work_background_colorful_digital_elements_sketch_6853110.webp"},

];
function Details() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
         {details.map((detail,index)=>(
            <div key={index} className="details" data-aos="fade-right">
                <div><h1>{detail.heading}</h1>
                <p>{detail.description}</p></div>
                <img src={detail.img} alt="" />
            </div>
        ))} 
        
    </div>
  )
}

export default Details;
