import React from 'react'
import './Secondcomp.css'
export default function Secondcomp() {
    return (
        <div className="Secondcomp">
            <div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"/>
                <h2 className="mt-4">No Minimum Order</h2>
                <p>Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"/>
                <h2 className="mt-4">Live Order Tracking</h2>
                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/>
                <h2 className="mt-4">Lightening-Fast Delivery</h2>
                <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
        </div>
    )
}
