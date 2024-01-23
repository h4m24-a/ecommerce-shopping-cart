import HomePage from "./Pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections";
import About from "./pages/About";

function App() {
 

  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/pages/productpage" element={<ProductPage />} />
      <Route exact path="/pages/product/:id" element={<Product />} />
      <Route exact path="/pages/collections" element={<Collections />} />
      <Route exact path="/pages/about" element={<About />} />
      <Route exact path="/pages/cart" element={<Cart />} />
    </Routes>
   </Router>
  )
}

export default App
