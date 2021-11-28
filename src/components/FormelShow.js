import React from 'react';
import f1 from "../images/Mask Group.png";
import f2 from "../images/Rectangle 38.png";
import f3 from "../images/Rectangle 39.png"

const FormelShow = () => {
    return (
        <div>
           
            <div className="container mx-auto">
            <h1 className="sm:text-3xl font-semibold text-yellow-500 mb-10 mt-52">OUR FORMAL SHOWS</h1>
            <div className="grid sm:grid-cols-3  md:grid-cols-3 gap-4">
                <div className="">
                    <img src={f1} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Nick Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-indigo-900">BAY NOW</button>
                    </div>
                </div>

                <div className="">
                    <img src={f2} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Skate Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-blue-900">BAY NOW</button>
                    </div>
                </div>

                <div className="">
                    <img src={f3} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Sporce Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-indigo-900">BAY NOW</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default FormelShow
