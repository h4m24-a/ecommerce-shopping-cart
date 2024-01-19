const TwoImage = () => {
  return (
    <div className="mt-10 flex flex-col  justify-center gap-6 p-3 max-w-full md:flex-row">
      <div className="relative h-full">
        <img
          className="object-cover rounded-lg h-full cursor-pointer  w-full"
          src="assets\enchant-image-1.jpg"
          alt="streetwear"
        />
        <p className="absolute font-montserrat bottom-0 left-0 p-3 font-extrabold text-2xl uppercase text-white bg-black bg-opacity-5">
          Outfit of the day
        </p>
      </div>
      <div className="relative ">
        <img
          className="object-cover rounded-lg h-full cursor-pointer  w-full"
          src="assets\enchant-image-2.jpeg"
          alt="streetwear"
        />
        <p className="absolute font-montserrat bottom-0 left-0 p-3 font-extrabold text-2xl uppercase text-white bg-black bg-opacity-10">
          Outfit of the day
        </p>
      </div>
    </div>
  );
};

export default TwoImage;
