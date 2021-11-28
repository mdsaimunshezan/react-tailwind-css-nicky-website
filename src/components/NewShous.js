import React from 'react';
import show1 from "../images/show-1.png";
import show2 from "../images/show-2.png";
import show3 from "../images/show-3.png"

const NewShous = () => {
    return (
        <div className="container mx-auto">
            <h1 className="sm:text-3xl md:mt-12 font-semibold text-yellow-500 mb-10">OUR BRAND NEW SHOUS</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-200 p-5">
                    <img src={show1} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Nick Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-indigo-900">BAY NOW</button>
                    </div>
                </div>

                <div className="bg-gray-200 p-5">
                    <img src={show2} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Skate Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-blue-900">BAY NOW</button>
                    </div>
                </div>

                <div className="bg-gray-200 p-5">
                    <img src={show3} alt=""/>
                    <h1 className="text-3xl text-yellow-500">Sporce Shows</h1>
                    <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam numquam autem unde velit hic ad itaque consequatur omnis molestias.</p>
                    <div className="flex justify-between mt-3">
                        <h2 className="text-2xl text-blue-500">$234</h2>
                        <button className="px-3 py-2 bg-blue-500 transition duration-500 text-white rounded hover:bg-indigo-900">BAY NOW</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewShous
