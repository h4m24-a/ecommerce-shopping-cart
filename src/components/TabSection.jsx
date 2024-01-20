import { Tab } from "@headlessui/react";
import Card from "./ui/Card";

function TabSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h1 className="text-center font-montserrat uppercase mx-auto font-semibold leading-loose max-w-6xl text-2xl md:text-5l lg:text-7xl ">
        Choose your best <span className="text-emerald-700">everyday</span>{" "}
        outfit.
      </h1>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="mt-2 flex justify-center items-center flex-col sm:gap-0 md:flex-row md:gap-10 lg:gap-28">
          <Tab className="ui-selected:bg-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black mt-10 px-8 py-3  font-bold  font-sora uppercase text-md border-solid border border-black rounded-lg lg:text-xl">
            T Shirt
          </Tab>
          <Tab className="ui-selected:bg-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black mt-10 px-8 py-3  font-bold  font-sora uppercase text-md border-solid border border-black rounded-lg lg:text-xl">
            Hoodies
          </Tab>
          <Tab className="ui-selected:bg-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black mt-10 px-8 py-3  font-bold  font-sora uppercase text-md border-solid border border-black rounded-lg lg:text-xl">
            Sweatshirts
          </Tab>
          <Tab className="ui-selected:bg-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black mt-10 px-8 py-3  font-bold  font-sora uppercase text-md border-solid border border-black rounded-lg lg:text-xl">
            Jackets
          </Tab>
          <Tab className="ui-selected:bg-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black mt-10 px-8 py-3  font-bold  font-sora uppercase text-md border-solid border border-black rounded-lg lg:text-xl">
            Sneakers
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-1.jpg"
              description="Black Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-2.jpg"
              description="White Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-3.jpg"
              description="White Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-4.jpg"
              description="White Tee with print."
              price="49.99"
            />
             <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-4.jpg"
              description="Black Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-3.jpg"
              description="White Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-2.jpg"
              description="White Tee with print."
              price="49.99"
            />
            <Card
              name={"Men's Fashion"}
              imageSrc="../assets/tshirts/tshirt-1.jpg"
              description="White Tee with print."
              price="49.99"
            />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
          <Tab.Panel>Content 5</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSection;
