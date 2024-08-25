import React from "react";
import { Outlet } from "react-router-dom";
import LandingNavbar from "../navbar/LandingNavbar";


function Landingpage() {

    return(
        <>
            <LandingNavbar/>
            <Outlet/>
        </>
    )
}

export default Landingpage;