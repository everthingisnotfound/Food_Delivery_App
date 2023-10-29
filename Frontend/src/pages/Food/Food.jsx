import "./Food.css";

const Foods = ({ data }) => {
  const addItem = (item) => {
    // Create a copy of our cart state, avoid overwriting existing state
    let existingCart = [];
    if (localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))) {
      existingCart = JSON.parse(localStorage.getItem("cart"));
    }
    let cartCopy = [...existingCart];
    let itemCopy = { ...item };

    // Assuming we have an ID field in our item
    let { id } = itemCopy;

    // Look for the item in the cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    // If the item already exists
    if (existingItem) {
      existingItem.quantity += 1; // Update item quantity
    } else {
      // If the item doesn't exist, simply add it
      itemCopy.quantity = 1;
      cartCopy.push(itemCopy);
    }

    // Update app state
    // Make cart a string and store it in local storage
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleAddFood = (item) => {
    addItem(item);
  };

  return (
    <div className="food-list">
      {data.map((item) => {
        return (
          <div key={item.id} className="food">
            <img src={item.img} width="15%" alt={item.name} />
            <p className="food-name">{item.name}</p>
            <div className="food-footer">
              <span className="food-price">Rs. {item.price}</span>
              <span>Delivery free</span>
            </div>

            <button className="add-food" onClick={() => handleAddFood(item)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;
