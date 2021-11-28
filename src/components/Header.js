import React from 'react'
import logo from "../images/Logo.png"

const Header = () => {
    return (
        <div className="container text-center mx-auto sm:flex  justify-between py-2">
            <img src={logo} alt="" className="w-34 h-10"/>
            <div>
                <ul className="sm:flex">
                    <li><a href="" className="px-4 py-2 block mx-4 text-lg font-semibold">Home</a></li>
                    <li><a href="" className="px-4 py-2 block mx-4 text-lg font-semibold">About</a></li>
                    <li><a href="" className="px-4 py-2 block mx-4 text-lg font-semibold">Serves</a></li>
                    <li><a href="" className="px-4 py-2 block mx-4 text-lg font-semibold">Conteck</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
