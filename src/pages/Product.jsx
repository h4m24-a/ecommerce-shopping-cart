import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import productData from "../productData";
import Button from "../components/ui/Button";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const { id } = useParams();

  const handleAddToCart = (productId) => {
    console.log(`added to cart: ${productId}`);
  };

  // Find the product with the given id in all categories
  const allProducts = Object.values(productData).flat();
  const product = allProducts.find((product) => product.id.toString() === id);
  const { image, name, description, price } = product;

  return (
    <>
      <NavBar />
      {product ? (
        <div className="flex flex-col max-w-full mt-5 mb-20">
          <div className="flex justify-evenly px-10 ">
            <img className="" src={image} alt={`Product ${id}`} />
            <div className="flex flex-col w-1/5 justify-center gap-8">
              <p className="text-4xl font-sora  font-bold">{name}</p>
              <p className="text-2xl font-sora">${price}</p>
              <p className="text-sm font-sora">{description}</p>
             
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>

                <div className="flex items-center p-2 border border-gray justify-center gap-1">
                  <button
                    type="button"
                    className="h-8 w-8 leading-8 text-black text-lg transition hover:opacity-75"
                  >
                    <MinusIcon className="" />
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-8 w-24 rounded text-center border-gray-200 text-md lg:text-xl "
                  />

                  <button
                    type="button"
                    className="h-8 w-8 leading-8 text-black text-lg transition hover:opacity-75"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>

              <Button
                text="Add to Cart"
                btnClass="bg-gray-950 font-montserrat uppercase m-2 mb-6 text-sm text-white rounded-md px-8 py-4 mx-auto transition duration-300 ease-in-out focus:outline-none hover:bg-gray-800"
                onClick={handleAddToCart}
              ></Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </>
  );
};

export default Products;
