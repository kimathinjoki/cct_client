import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HomeNavbar from "../navbar/HomeNavbar";


function Homepage() {

    return(
        <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-white">
            <HomeNavbar/>
        <div className="flex-1 flex flex-col">        
                    <Outlet/>
        </div>
        </div>
    )
}

export default Homepage;