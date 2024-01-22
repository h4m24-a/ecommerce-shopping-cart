import Button from "./ui/Button"

const WideImage = () => {
  return (
    <div className='flex relative justify-center items-center flex-col'>
         <img
          className="h-full cursor-pointer  w-full"
          src="../public/assets/fashion-people2.jpg"
          alt="streetwear"
        />
        <div className="absolute flex justify-end items-center flex-col">
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-sora">Enchant 2024 Collection</p>
        <Button
            text="Discover Now"
            btnClass="mt-6 bg-transparent text-white rounded-2xl border border-gray-300 focus:outline-none hover:bg-white hover:text-black  focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-md px-14 py-3  me-2 mb-2"
        />
        </div>

    </div>
  )
}

export default WideImage


