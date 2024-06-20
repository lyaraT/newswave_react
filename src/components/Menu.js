import React from "react";
import '../assets/css/menu.css';
import image1 from "./../assets/images/Capture.PNG";

export default function Menu() {
    return (
        <>
            <div className="top-space"></div>

            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="http://localhost/newswave/upload.php">Articles</a></li>
                        <li className="dropdown">
                            <a href="#">Login</a>
                            <div className="dropdown-content">
                                <a target='blank' href="http://localhost/newswave/loginpageadmin.php">Admin</a>
                                <a target='blank' href="http://localhost/newswave/login.php">Employee</a>
                                <a target='blank' href="http://localhost/newswave/login.php">Contributor</a>
                            </div>
                        </li>
                    </ul>
                    <div className="navbar-logo">
                        <a href="/home"><img src={image1} alt="NewsWave Logo" /></a>
                    </div>
                </nav>
            </header>
        </>
    )
}
