import React from 'react';
import './footer.css'; // Assuming the CSS file is in the same directory as your Footer component

const Footer = () => {
  return (
    <footer>
      <div className="footer0">
        <h1>Khanaja</h1>
      </div>
      <div className="footer1">
        Connect with us
        <ul className="social-media">
          <li><a href="#"><img src="images/No-facebook.png" alt="Facebook" /></a></li>
          <li><a href="#"><img src="images/NO-linkedIn.png" alt="LinkedIn" /></a></li>
          <li><a href="#"><img src="images/NO-instagram.png" alt="Instagram" /></a></li>
        </ul>
      </div>
      <div className="footer2">
        <div className="products">
          <h3>
            <div className="heading"> Products</div>
          </h3>
          <div className="div">Sell your products</div>
          <div className="div">Advertise</div>
          <div className="div">Pricing</div>
        </div>
        <div className="services">
          <div className="heading"> Services</div>
          <div className="div">Return</div>
          <div className="div">Cash Back</div>
          <div className="div">Affiliate Marketing</div>
        </div>
        <div className="company">
          <div className="heading"> Company</div>
          <div className="div">Complaints</div>
          <div className="div">Career</div>
          <div className="div">Support</div>
        </div>
        <div className="get-help">
          <div className="heading"> Get Help</div>
          <div className="div">Help Center</div>
          <div className="div">Privacy Policy</div>
          <div className="div">Terms</div>
        </div>
      </div>
      <div className="footer3">Copyright © <h4>Khanaja</h4> 2021-2028</div>
    </footer>
  );
};

export default Footer;
