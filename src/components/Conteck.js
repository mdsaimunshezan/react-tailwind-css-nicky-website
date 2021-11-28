import React from 'react'

const Conteck = () => {
    return (
        <div className="container mx-auto mb-28">
            <div className="w-3/4 mx-auto">
                <h1 className="text-center sm:text-4xl mb-4 text-yellow-400 mt-44">Conteck Us</h1>
                <div className="shadow-2xl p-8">
                    <form>
                        <input type="text" placeholder="Enter Your name" className="w-full p-2 border-2 border-gray-400 mb-4" />
                        <input type="text" placeholder="Enter Your Email" className="w-full p-2 border-2 border-gray-400 mb-4"  />
                        <textarea name="" id="" cols="30" rows="5" className="w-full p-2 border-2 border-gray-400"></textarea>
                        <button type="submit" className="bg-yellow-400 px-10 py-3 mt-4 text-white rounded transition duration-500 hover:bg-yellow-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Conteck
