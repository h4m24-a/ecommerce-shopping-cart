import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections";
import ErrorPage from "./pages/ErrorPage";

import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  


  const addToCart = (newProduct) => {
    // Check if the product is already in the cart
    const checkProductInCart = carts.find(
      (product) => product.id === newProduct.id
    );
    if (checkProductInCart) {
      alert("Item already in cart");
    } else {
      // If the product is not in the cart, add it
      setCarts([...carts, newProduct]);
    }
  };



  const handleRemove = (productId) => {
    setCarts((prevCarts) => prevCarts.filter((product) => product.id !== productId));
  };



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  carts={carts}/>} />
        <Route path="/pages/productpage" element={<ProductPage carts={carts} />} />
        <Route path="/pages/product/:id" element={<Product addToCart={addToCart} carts={carts} />} />
        <Route path="/pages/collections" element={<Collections carts={carts} />} />
        <Route path="/pages/cart" element={<Cart carts={carts} handleRemove={handleRemove}/>} />
        <Route path="*" element={<ErrorPage carts={carts} />} />
      </Routes>
    </Router>
  );
}

export default App;
