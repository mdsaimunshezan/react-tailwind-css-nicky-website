import React from 'react'
import banner from "../images/banner.png"

const Banner = () => {
    return (
        <div className="container mx-auto grid sm:grid-cols-1  md:grid-cols-2">
           <img src={banner} className="h-4/6 mt-4" alt=""/>
           <div className="mt-24">
               <h1 className="sm:text-5xl font-semibold"> <span className="text-yellow-500">NICK REACT</span> <br/> INFINITY RUN 2</h1>
               <p className="text-xl mt-3">this is nick react website.You can bay any prodect if you want.</p>
               <button className="bg-blue-500 px-4 transition duration-500 py-2 text-white rounded-sm mt-4 hover:bg-blue-900">BAY NOW</button>
           </div>
        </div>
    )
}

export default Banner
