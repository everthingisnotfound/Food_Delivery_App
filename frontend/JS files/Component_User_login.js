// Component_User_Login.js
import React from 'react';
import './Delivery app/CSS files/User_login.css';

const User_Login = ({ handleLogin }) => {
  return (
    <form className="input_group" onSubmit={handleLogin}>
      <input type="text" className="Input_field" placeholder="User Id" required />
      <input type="password" className="Input_field" placeholder="Password" minLength="8" required />
      <input type="checkbox" className="Remember_Me" /><span>Remember Password</span>
      <button type="submit" className="Submit_btn">
        <a href="Home.html">Log-In</a>
      </button>
    </form>
  );
};

export default User_Login;

