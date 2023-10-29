import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // This is called on component mount
  useEffect(() => {
    // Turn it into JavaScript
    let localCart = localStorage.getItem("cart");

    if (localCart) localCart = JSON.parse(localCart);

    // Load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); // The empty array ensures useEffect only runs once

  const handleRemove = () => {
    localStorage.removeItem("cart");
    location.reload();
  };

  if (cart.length <= 0) {
    return (
      <div className="empty-cart">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
          width="250px"
          alt="Empty Cart"
        />
        <h1>Your Cart is Empty</h1>
        <NavLink to="/foods" className="return-shop">
          Return to Shop
        </NavLink>
      </div>
    );
  }

  const totalPrice = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  const totalAmount = totalPrice();

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Your Food List</h2>
        {cart.map((item) => {
          const { name, price, img, id, quantity } = item;
          return (
            <div key={id} className="cart-item">
              <img src={img} alt={name} />
              <div className="cart-details">
                <p className="cart-item-name">{name}</p>
                <p className="cart-price">
                  Rs. {price} x {quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="subtotal">
        <h2>Subtotal</h2>
        <div className="subtotal-details">
          <p>Total Price: Rs. {totalAmount}</p>
          <hr />
          <p>Final Price: Rs. {totalAmount}</p>
        </div>
        <button className="order-btn">Order Now</button>
        <button onClick={() => navigate("/foods")} className="return-btn">
          Return to Shop
        </button>
        <p onClick={() => handleRemove()} className="delete-icon">
          Empty Cart <DeleteForeverIcon />
        </p>
      </div>
    </div>
  );
};

export default Cart;
