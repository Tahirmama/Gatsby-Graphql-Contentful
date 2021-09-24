import React from "react";
import { Link } from "gatsby";
import * as NavbarStyles from "./navbar.module.css"

export default function Navbar(){
    return(
        <div className={NavbarStyles.navbar}>
            <Link to = "/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Contact">CONTACT</Link>
        </div>
    )
}