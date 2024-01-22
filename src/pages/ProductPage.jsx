import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/ui/Card";
import { Tab } from "@headlessui/react";
import productData from "../productData";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex justify-center p-4 space-x-4">
            {Object.keys(productData).map((category, index) => (
              <Tab
                key={index}
                className="bg-gray-200 uppercase font-montserrat text-gray-800 px-4 py-2 rounded-lg cursor-pointer"
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(productData).map((categoryProducts, index) => (
              <Tab.Panel key={index}>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryProducts.map((product) => (
                    <Card
                      key={product.id}
                      name={product.name}
                      imageSrc={product.imageSrc}
                      description={product.description}
                      price={product.price}
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
