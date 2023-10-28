import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer0">
        <h1>Khanaja</h1>
      </div>
      <div className="footer-social">
        Connect with us
        <div className="footer-social-icons">
          <p className="facebook-icon">
            <FacebookIcon />
          </p>
          <p className="insta-icon">
            <InstagramIcon />
          </p>
          <p className="twitter-icon">
            <TwitterIcon />
          </p>
          <p className="linkdin-icon">
            <LinkedInIcon />
          </p>
        </div>
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
