// LoginPage.js
import React, { useState, useEffect } from 'react';
import './Driver_Login_Register.css';
import Driver_Login from './Delivery app/JS files/Component_Driver_Login';
import User_Login from './Delivery app/JS files/Component_User_Login';
import Register from './Delivery app/JS files/Component_Register';

const LoginPage = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleForm = (showLogin) => {
    setLoginVisible(showLogin);
    setRegisterVisible(!showLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    console.log("Rendered");
  }, []);

  return (
    <div className="BOX">
      {isLoading ? (
        <div className="loading-screen">
          <img src="./Delivery app/Images/delivery-button-unscreen.gif" alt="Loading Animation" />
        </div>
      ) : (
        <div className="Form_box">
          <div className="Button_box">
            <div id="button"></div>
            <button
              type="button"
              className={`toggle-btn ${loginVisible ? 'active' : ''}`}
              onClick={() => toggleForm(true)}
            >
              Login
            </button>
            <button
              type="button"
              className={`toggle-btn ${registerVisible ? 'active' : ''}`}
              onClick={() => toggleForm(false)}
            >
              Register
            </button>
          </div>
          <div className="social-media">
            <img src="images/No-facebook.png" alt="Facebook" />
            <img src="images/NO-linkedIn.png" alt="LinkedIn" />
            <img src="images/NO-instagram.png" alt="Instagram" />
          </div>
          {loginVisible ? <Driver_Login handleLogin={handleLogin} /> : <User_Login handleLogin={handleLogin} />}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
