import React from 'react'
import { FaFacebook,FaPinterest,FaInstagram,FaTwitter } from 'react-icons/fa'
import './Footer3.css'
export default function Footer3() {
    return (
        <div className="Footer3">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"/>
            <h4>2021 Swiggy</h4>
            <div className="icons">
               <FaFacebook style={{color:"white" , margin:"10px" , height:"30px",width:"30px"}}/>
               <FaPinterest style={{color:"white" ,margin:"10px" , height:"30px",width:"30px"}}/>
               <FaInstagram style={{color:"white",margin:"10px" , height:"30px",width:"30px"}}/>
               <FaTwitter style={{color:"white",margin:"10px" , height:"30px",width:"30px"}}/>
            </div>
        </div>
    )
}
