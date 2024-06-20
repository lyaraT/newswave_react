import React from "react";
import '../assets/css/footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1>NEWAVE</h1>
                <p>Found in 1989</p>
                <p>Colombo 07</p>
            </div>
            <div className="footer-right">
                <p>Address: 123 Main Street, Colombo 07</p>
                <p>Telephone: +94 11 1234567</p>
            </div>
        </div>
    );
}
