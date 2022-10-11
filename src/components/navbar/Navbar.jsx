import React from 'react'
import NavbarStyle from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={NavbarStyle["container"]}>
            <ul>
                <li>ABOUT US</li>
                <li>FOR YOU</li>
                <li>SERVICES</li>
                <li>BLOG</li>
                <li>VLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navbar