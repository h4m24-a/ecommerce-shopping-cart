import { Tab } from "@headlessui/react";
import Card from "./ui/Card";

function TabSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-center font-montserrat uppercase mx-auto font-semibold leading-loose max-w-6xl text-2xl md:text-5l lg:text-8xl ">
        Choose your best <span className="text-emerald-700">everyday</span>{" "}
        outfit.
      </h1>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="mt-4 flex justify-center items-center flex-col sm:gap-0 md:flex-row md:gap-10 lg:gap-28">
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
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-1.jpg" description="Black Tee with print." price="49.99"/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-2.jpg" description="White Tee with print." price="49.99"/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-3.jpg" description="White Tee with print." price="49.99"/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-4.jpg" description="White Tee with print." price="49.99"/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-5.jpeg" description="Purple Tee." price="49.99"/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-6.jpeg" description="White Tee." price="49.99"/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-7.jpeg" description="Black Tee." price="49.99"/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-8.jpeg" description="White Tee." price="49.99"/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-1.jpeg" description="Cream Hoodie." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-2.jpeg" description="Black Hoodie." price="49.99"/>
          <Card name={"Women's Fashion"} imageSrc="../assets/hoodies/hoodie-3.jpeg" description="Green Hoodie." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-4.jpeg" description="Cream Hoodie." price="49.99"/>
          </Tab.Panel>
          
          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-1.jpeg" description="Green Sweatshirt." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-2.jpeg" description="White Sweatshirt." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-3.jpeg" description="Cream Sweatshirt." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-4.jpeg" description="Red Sweatshirt." price="49.99"/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Women's Fashion"} imageSrc="../assets/jackets/jacket-1.jpeg" description="Yellow Jacket." price="49.99"/>
          <Card name={"Women's Fashion"} imageSrc="../assets/jackets/jacket-2.jpeg" description="Orange jacket." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/jackets/jacket-3.jpeg" description="Puffer Jacket." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/jackets/jacket-4.jpeg" description="checkered Jacket." price="49.99"/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Women's Fashion"} imageSrc="../assets/sneakers/sneaker-1.jpg" description="colored Sneakers." price="49.99"/>
          <Card name={"Women's Fashion"} imageSrc="../assets/sneakers/sneaker-2.jpg" description="colored Sneakers." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sneakers/sneaker-3.jpg" description="colored Sneakers." price="49.99"/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sneakers/sneaker-4.jpg" description="colored Sneakers." price="49.99"/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSection;
