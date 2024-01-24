import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quantity from "../components/ui/Quantity";
import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };




  return (
    <div>
      <NavBar />





      <Quantity value={quantity} onDecrease={decreaseQuantity} onIncrease={increaseQuantity} />

      <Footer />
    </div>
  );
};

export default Cart;
