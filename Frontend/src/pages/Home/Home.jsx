import React from 'react';
import './Home.css';
import { useHistory, useNavigate } from 'react-router-dom';
import Amenities from '../component/Componnent_Amenities';
import TestimonialSlider from '../component/Component_Testimonials';
import FeaturesSection from '../component/Component_Feature';

const Hero = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate(); // For route navigation
  const history = useHistory(); // For traditional routing

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/'); // Navigate to the home page or any other route you prefer
  };

  // Function to handle user login
  const handleLogin = () => {
    history.push('/login'); // Navigate to the login page using traditional routing
  };

  // Function to handle user registration
  const handleRegister = () => {
    history.push('/register'); // Navigate to the registration page using traditional routing
  };

  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>Order Tension free</h1>
        <p>Your trusted order-delivering service.</p>
        <div>
          {/* If a user is logged in, show the "Logout" button */}
          {user && (
            <button className="order-now-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
          {/* If no user is logged in, show the "Login" and "Register" buttons */}
          {!user && (
            <>
              <button className="order-now-btn" onClick={handleLogin}>
                Login now
              </button>
              <button className="order-now-btn" onClick={handleRegister}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://eathub.live/static/assets/images/deliverybike-914x596.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Home = () => (
  <div>
    <Hero />
    <FeaturesSection /> {/* Include your FeaturesSection component here */}
    <Amenities /> {/* Include your Amenities component here */}
    <TestimonialSlider /> {/* Include your TestimonialSlider component here */}
  </div>
);

export default Home;
