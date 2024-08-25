import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HomeNavbar from "../navbar/HomeNavbar";


function Homepage() {

    return(
        <>
            <HomeNavbar/>
            <Outlet/>
        </>
    )
}

export default Homepage;