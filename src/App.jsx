import HomePage from "./Pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections";
import About from "./pages/About";

import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([])
  const [totalprice, setTotalPrice] = useState()
  const [quantity, setQuantity] = useState(1)

  
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductCart = carts.find((item) => item.id === product.id);

    if (existingProductCart) {
      alert("Item already in cart")
    } else {

    // If the product is not in the cart, add it
      setCarts([...carts, product])
    }
  }
  
 

  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/pages/productpage" element={<ProductPage />} />
      <Route exact path="/pages/product/:id" element={<Product addToCart={addToCart} />} />
      <Route exact path="/pages/collections" element={<Collections />} />
      <Route exact path="/pages/about" element={<About />} />
      <Route exact path="/pages/cart" element={<Cart carts={carts} />} />
    </Routes>
   </Router>
  )
}

export default App
