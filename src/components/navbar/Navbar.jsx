import React from 'react'
import './navbar.css'
function Navbar() {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
    return (
        <>
            <div className="container border">
                <div className="navbar">
                    <div className="logo">
                        Style.
                    </div>
                    <div id="mySidepanel" className="sidepanel">
                        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="toggle ml-auto">
                        <button className="openbtn " onClick={openNav}>☰</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
