import React from 'react'
import './header.css'
import {BiCurrentLocation } from 'react-icons/bi'
export default function Header() {
    let i=1;
       setInterval(()=>{
       // var a =document.getElementById('time-interval').textContent;
             if(i==1)
             document.getElementById('time-interval').textContent='Unexpected guests?'
             if(i==2)
             document.getElementById('time-interval').textContent='Game night?'
             if(i==3)
             document.getElementById('time-interval').textContent='Movie marathon?'
             i++;
             if(i>3)
             i=1;
       },4000);
    
    return (
        <div className="header-flex">
          <div className="header"> 
          <header className="header1">
            <img src="data:image/jpeg;base64,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"/>
              <div>
              <button className="btn1 px-4 py-2">Login</button>
              <button className="btn2 px-4 py-2">Sign up</button>
              </div>
          </header>
          <div className="header2">
              <h2 style={{fontWeight:'600',fontSize:'40px'}} id="time-interval">Movie marathon?</h2>
              <p style={{color:'grey' , fontSize:'25px'}} className="mb-5">Order food from favorite restauant near you</p>
              <div className="inputLocation">
              <input placeholder="Enter your delivery Location" className="input1" maxLength="30"/>
              <BiCurrentLocation style={{marginBottom:"5px"}}/>
              <span>Locate me</span>
              </div> 
              <button className="btn3"><b>FIND FOOD</b></button>
          </div>
          <div>
              <h6 style={{color:'grey'}}>Popular cities in India</h6>
              <h6 style={{color:'grey',fontWeight:'600',maxWidth:'600px'}}>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</h6>
          </div>
          </div>
             <img  className="food_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
        </div>
    )
}
// background-image:url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq')