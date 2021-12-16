import React from 'react'
import './Thirdcomp.css'
export default function Thirdcomp() {
    return (
        <div className="Thirdcomp">
            <div className="Info"> 
                <h2 className="pt">Restaurants in your pocket</h2>
                <p >Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
            </div>
            <div className="images">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
             <img  className=" images2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
            </div>
        </div>
    )
}
