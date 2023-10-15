// Component_Register.js
import React from 'react';
import './Delivery app/CSS files/Driver_login.css';

const Register = ({ handleRegister }) => {
  return (
    <form className="input_group" onSubmit={handleRegister}>
      <input type="text" className="Input_field" placeholder="Full Name" required />
      <input type="number" className="Input_field" placeholder="Phone Number" minLength="10" required />
      <input type="email" className="Input_field" placeholder="Email-Id" required />
      <input type="password" className="Input_field" placeholder="Password" minLength="8" required />
      <input type="checkbox" className="Remember_Me" /><span>I agree to all the Terms & Conditions</span>
      <button type="submit" className="Submit_btn">
        <a href="Home.html">Register</a>
      </button>
    </form>
  );
};

export default Register;

