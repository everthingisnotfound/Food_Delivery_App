import React from 'react';
import './Delivery app/CSS files/index_page.css';

const Features = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="index.html">Khanaja</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>Order Tension free</h1>
                <p>Your trusted order-delivering service.</p>
                <a href="Driver_Login_Register.html" className="driver-btn" id="driver-btn">Driver Login</a>
                <div className="popup" id="driver-popup">
                    <img src="images/delivery-button-unscreen.gif" alt="Driver Avatar" />
                </div>
                <a href="Customer_Login_Register.html" className="customer-btn" id="customer-btn">Customer Login</a>
                <div className="popup" id="customer-popup">
                    <img src="images/customer-button-unscreen.gif" alt="Customer Avatar" />
                </div>
            </section>
            <section className="features">
                <div className="feature">
                    <img src="images/Delivery_image-removebg-preview.png" alt="Car Icon" />
                    <h2>Punctual deliveries</h2>
                    <p>Book an order anytime, anywhere.</p>
                </div>
                <div className="feature">
                    <img src="images/payement_icon-removebg-preview.png" alt="Payment Icon" />
                    <h2>Secure Payments</h2>
                    <p>Safe and hassle-free transactions.</p>
                </div>
                <div className="feature">
                    <img src="images/support_icon-removebg-preview.png" alt="Support Icon" />
                    <h2>24/7 Support</h2>
                    <p>Customer service always ready to help.</p>
                </div>
            </section>
        </div>
    );
};

export default Features;
