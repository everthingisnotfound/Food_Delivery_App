// Header.js
import React, { useState } from 'react';
import Cart from './Cart'; // Import the Cart component

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header>
      <div className="logo">Your Food Delivery App Logo</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon" onClick={toggleCart}>
        <i className="fa fa-shopping-cart"></i> {/* Replace with your cart icon */}
      </div>
      {isCartVisible && <Cart />}
    </header>
  );
}

export default Header;
