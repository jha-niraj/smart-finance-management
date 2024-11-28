import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>SmartFinance</h3>
                    <p>Take control of your finances with our powerful tracking solution.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>FAQs</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: support@smartfinance.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SmartFinance. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;