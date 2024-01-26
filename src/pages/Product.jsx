import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import productData from "../productData";
import Button from "../components/ui/Button";
import PropTypes from 'prop-types';
import Newsletter from "../components/Newsletter"



const Product = ({addToCart}) => {
  const { id } = useParams();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Find the product with the given id in all categories
  const product = Object.values(productData).flat().find(product => product.id.toString() === id);


  const { image, name, description, price } = product;

  return (
    <>
      <NavBar />
      {product ? (
        <div className="  mx-auto mt-5 mb-20">
          <div className="flex flex-col ite px-5 justify-center mx-auto lg:flex-row lg:justify-evenly">
            <img
              className="w-full object-cover md:w-full lg:w-96"
              src={image}
              alt={`product ${id}`}
            />
            <div className="flex flex-col w-full justify-center gap-8 lg:w-1/5 ">
              <p className="text-4xl font-sora mt-4 lg:mt-0 font-bold">
                {name}
              </p>
              <p className="text-2xl font-sora">${price}</p>
              <p className="text-sm text-gray-500 font-sora">{description}</p>

              <Button
                text="Add to Cart"
                btnClass="bg-black font-montserrat uppercase m-2 mb-6 text-sm text-white rounded-md px-8 py-4  transition duration-300 ease-in-out active:bg-red-500 focus:outline-none hover:bg-gray-900"
                onClick={handleAddToCart}
              ></Button>
              <div className="flex flex-col justify-center items-center cursor-pointer gap-3 lg:items-stretch">
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Check In-Store Availability
                </p>
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Product Details
                </p>
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Delivery & Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func
}

export default Product;
