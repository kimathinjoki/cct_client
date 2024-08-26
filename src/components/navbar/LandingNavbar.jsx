import React from "react";
import { Link } from "react-router-dom";

function LandingNavbar() {

    return(
        <>

        <div className="bg-gray-100 font-sans w-full m-0">
            <div className="bg-gray-900 shadow">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                <div className="text-white">
                    CCT
                </div>
           
            <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                <Link to="/" class="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">Sign In</Link>
                <Link to="/signup" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">Sign Up</Link>
            </div>
            </div>
                
            </div>
            </div>
        </div>

        </>
    )
}

export default LandingNavbar;