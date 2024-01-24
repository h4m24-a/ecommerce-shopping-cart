import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quantity from "../components/ui/Quantity";
import { useState } from "react";
import PropTypes from "prop-types";

const Cart = ({ carts }) => {
  // State to manage quantities for each item
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (itemId, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const decreaseQuantity = (itemId) => {
    updateQuantity(itemId, Math.max(quantity[itemId] - 1, 1));
  };

  const increaseQuantity = (itemId) => {
    updateQuantity(itemId, (quantity[itemId] || 0) + 1);
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col">
        {carts.map((item) => (
          <div key={item.id}>
            <img
              className="h-32 w-32 rounded-md aspect-square object-cover"
              src={item.image}
              alt={item.name}
            />
            <p>{item.name}</p>

            <div className="flex flex-col">
              <Quantity
                value={quantity[item.id] || 0}
                onDecrease={() => decreaseQuantity(item.id)}
                onIncrease={() => increaseQuantity(item.id)}
              />
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
};

export default Cart;
