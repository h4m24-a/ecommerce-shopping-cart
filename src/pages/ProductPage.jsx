import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ui/ProductCard";
import { Tab } from "@headlessui/react";
import productData from "../productData";
import { useNavigate } from "react-router-dom";



const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mb-16">
        <Tab.Group defaultIndex={0}>
          <div className="flex flex-col">
          <Tab.List className="flex justify-center p-4 space-x-4">
            {Object.keys(productData).map((category, index) => (
              <Tab
                key={index}
                className="bg-gray-200 uppercase font-montserrat text-gray-900 px-4 py-2  cursor-pointer"
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          </div>
          <Tab.Panels>
            {Object.values(productData).map((categoryProducts, index) => (
              <Tab.Panel key={index}>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      description={product.description}
                      textStyle="text-center mt-2 mb-2 flex flex-row  item-center justify-between text-black"
                      imageSrc ={product.imageSrc}
                      price={product.price}
                      moreInfo={() =>  navigate("/product.id")}
                    />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
