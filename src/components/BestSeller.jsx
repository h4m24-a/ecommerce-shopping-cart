import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Card from "../components/ui/Card";

const BestSeller = () => {
  return (
    <div className="max-w-full px-12 mt-26 mb-20">
      <div className="flex flex-col items-center py-6 justify-between border-b-2 border-black lg:flex-row">
        <h1 className="text-2xl font-sora text-center  uppercase  md:text-3xl lg:text-6xl">
          Best Seller
        </h1>
        <div className="flex flex-row items-center gap-3">
          <p className="text-xl font-sora text-center cursor-pointer ">
            See All
          </p>
          <ArrowUpRightIcon className="h-9 w-9" />
        </div>
      </div>
      <div className="flex mt-6 items-center justify-center gap-8   flex-col lg:flex-row">
        <Card
          image="../assets/images/bestseller-1.jpg"
          imageStyle="object-cover w-full h-full rounded-sm cursor-pointer transition duration-500 hover:opacity-90"
          textStyle=" py-2 "
          description="Trench Coat"
        />
        <Card
         image="../assets/images/bestseller-2.jpg"
          imageStyle="object-cover w-full h-full rounded-sm cursor-pointer transition duration-500 hover:opacity-90"
          textStyle=" py-2 "
          description="All Black"
        />
        <Card
          image="../assets/images/bestseller-3.jpg"
          imageStyle="object-cover w-full h-full rounded-sm cursor-pointer transition duration-500 hover:opacity-90"
          textStyle=" py-2 "
          description="Grey Jacket"
        />
      </div>
    </div>
  );
};

export default BestSeller;
