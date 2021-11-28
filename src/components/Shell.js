import React from 'react'
import icon1 from "../images/image 12.png"
import icon2 from "../images/image 13.png"
import icon3 from "../images/image 14.png"
import sidePage from "../images/XMLID 1.png"

const Shell = () => {
    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-44 ">
            <div className="h-5/6 my-auto flex justify-between flex-col">
                   <div className="flex mb-8">
                        <img src={icon1} alt="" className="w-16 mr-4"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">Find The Perfect Fit </h1>
                            <p className="text-base">Everybody in defferent,Which is why we offer styles of everybody</p>
                        </div>
                   </div>

                   <div className="flex mb-8">
                        <img src={icon2} alt="" className="w-16 mr-4"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">Find The Perfect Fit </h1>
                            <p className="text-base">Everybody in defferent,Which is why we offer styles of everybody</p>
                        </div>
                   </div>

                   <div className="flex mb-8">
                        <img src={icon3} alt="" className="w-16 mr-4"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">Find The Perfect Fit </h1>
                            <p className="text-base">Everybody in defferent,Which is why we offer styles of everybody</p>
                        </div>
                   </div>
            </div>
            <div className= " ">
                    <img src={sidePage} alt=""/>
            </div>
        </div>
    )
}

export default Shell
