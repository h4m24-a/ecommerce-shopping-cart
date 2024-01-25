import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quantity from "../components/ui/Quantity";
import { useState } from "react";
import PropTypes from "prop-types";

const Cart = ({ carts }) => {
  
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const decreaseQuantity = (productId) => {
    updateQuantity(productId, Math.max(quantity[productId] - 1, 1));   // first -1 is to decrease by one, second 1 is make sure that its never less than one
  };

 

  const increaseQuantity = (productId) => {
    updateQuantity(productId, (quantity[productId] || 0) + 1);
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col">
        {carts.map((product) => (
          <div key={product.id}>
            <img
              className="h-32 w-32 rounded-md aspect-square object-cover"
              src={product.image}
              alt={product.name}
            />
            <p>{product.name}</p>

            <div className="flex flex-col">
              <Quantity
                value={quantity[product.id] || 0}
                onDecrease={() => decreaseQuantity(product.id)}
                onIncrease={() => increaseQuantity(product.id)}
              />
              <p>{product.price}</p>
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
