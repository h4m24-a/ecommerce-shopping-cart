import { Tab } from "@headlessui/react";
import Card from "../components/ui/Card";

function TabSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-center font-montserrat uppercase mx-auto font-semibold leading-loose max-w-6xl text-2xl md:text-5l lg:text-8xl ">
        Choose your best <span className="text-emerald-700">everyday</span>{" "}
        outfit.
      </h1>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="mt-4 flex justify-center items-center flex-col sm:gap-0 lg:flex-row  lg:gap-28">
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
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-1.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Black Tee with print."/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-2.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Tee with print."/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-3.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Tee with print."/>
            <Card name={"Men's Fashion"} imageSrc="../assets/tshirts/tshirt-4.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Tee with print."/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-5.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Purple Tee."/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-6.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Tee."/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-7.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Black Tee."/>
            <Card name={"Women's Fashion"} imageSrc="../assets/tshirts/tshirt-8.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Tee."/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-1.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Cream Hoodie."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-2.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Black Hoodie."/>
          <Card name={"Women's Fashion"} imageSrc="../assets/hoodies/hoodie-3.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Green Hoodie."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/hoodies/hoodie-4.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Cream Hoodie."/>
          </Tab.Panel>
          
          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-1.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Green Sweatshirt."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-2.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="White Sweatshirt."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-3.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Cream Sweatshirt."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sweatshirts/sweatshirt-4.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Red Sweatshirt."/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Women's Fashion"} imageSrc="../assets/jackets/jacket-1.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Yellow Jacket."/>
          <Card name={"Women's Fashion"} imageSrc="../assets/jackets/jacket-2.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Orange jacket."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/jackets/jacket-3.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="Puffer Jacket."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/jackets/jacket-4.jpeg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="checkered Jacket."/>
          </Tab.Panel>

          <Tab.Panel className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <Card name={"Women's Fashion"} imageSrc="../assets/sneakers/sneaker-1.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="colored Sneakers."/>
          <Card name={"Women's Fashion"} imageSrc="../assets/sneakers/sneaker-2.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="colored Sneakers."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sneakers/sneaker-3.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="colored Sneakers."/>
          <Card name={"Men's Fashion"} imageSrc="../assets/sneakers/sneaker-4.jpg" imageStyle="object-cover w-full h-full rounded-lg cursor-pointer" textStyle="mt-4" description="colored Sneakers."/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSection;
