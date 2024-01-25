import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quantity from "../components/ui/Quantity";
import { useState } from "react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";

const Cart = ({ carts }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const handleCheckout = () => {
    alert("Thank you for your order!");
  };

  const decreaseQuantity = (productId) => {
    updateQuantity(productId, Math.max(quantity[productId] - 1, 1)); // first -1 is to decrease by one, second 1 is make sure that its never less than one
  };

  const increaseQuantity = (productId) => {
    updateQuantity(productId, (quantity[productId] || 0) + 1);
  };

  return (
    <>
      <NavBar />

      <h1 className="text-3xl text-center font-poppins font-bold mb-4">
        Your Shopping Cart
      </h1>
      <div className="container min-h-screen flex-grow max-w-4xl mt-5 mx-auto flex-col flex justify-evenly p-4 lg:flex-row lg:gap-20">
        <div className="flex flex-col  gap-3 items-center flex-1">
          {carts.map((product) => (
            <div
              key={product.id}
              className="flex flex-row w-full items-center justify-center  p-4 border-2 border-gray-200 rounded-lg md:justify-center lg:gap-20"
            >
              <img
                className="h-32 w-32 rounded-md object-cover mb-4 flex-shrink-0"
                src={product.image}
                alt={product.name}
              />

              <div className="flex flex-col h-full items-end gap-2 flex-1">
                <XMarkIcon className="w-14 h-14 hover:outline-2 p-3 active:text-red-500 cursor-pointer" />
                <p className="text-xs flex-wrap ml-2 font-sora lg:text-md font-medium">{product.name}</p>
                <p className=" text-xs font-sora font-medium lg:text-md">
                  ${product.price}
                </p>
                <Quantity
                  value={quantity[product.id] || 0}
                  onDecrease={() => decreaseQuantity(product.id)}
                  onIncrease={() => increaseQuantity(product.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {carts.length > 0 && (
          <div className="flex flex-col mt-10 gap-3">
            <h2 className="font-poppins text-lg text">Your order summary</h2>
            <p className=" text-md font-montserrat">Total $xx</p>
            <Button
              btnClass="text-white w-full font-poppins bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              text="Checkout"
              onClick={handleCheckout}
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
};

export default Cart;
