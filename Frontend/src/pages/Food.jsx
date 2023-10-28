import React, { useState } from "react";
import "./Food.css";

const Food = ({ data }) => {
  // State to manage the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  return (
    <div className="food-list">
      {data.map((item) => (
        <div key={item.id} className="food">
          <img src={item.img} width="15%" alt={item.name} />
          <p className="food-name">{item.name}</p>
          <div className="food-footer">
            <span className="food-price">Rs. {item.price}</span>
            <span>Delivery free</span>
          </div>
          <button className="add-food" onClick={() => addItemToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Food;
