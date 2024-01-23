import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import productData from '../productData' // Adjust the path accordingly

const Products = () => {
  const { id,  } = useParams();

  // Find the product with the given id in all categories
  const allProducts = Object.values(productData).flat();
  const product = allProducts.find((product) => product.id.toString() === id);
  const {image, name, description, price} = product

  return (
    <div>
      <NavBar />
      {product ? (
        <div>
          <img src={image} alt={`Product ${id}`} />
          <p>Product Name: {name}</p>
          <p>Product Description: {description}</p>
          <p>Product Price: {price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </div>
  );
};

export default Products;
