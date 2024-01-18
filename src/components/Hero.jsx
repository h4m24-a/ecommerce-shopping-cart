import Button from "./ui/Button";

const Hero = () => {
  return (
    <header className="bg-ghostWhite max-w-full  flex items-center justify-center">
      <div className="container mx-auto mt-12 text-center">
        <h1 className="font-poppins uppercase text-4xl sm:text-3xl md:text-5xl lg:text-9xl font-extrabold leading-tight">
            <span className='font-extrabold text-emerald-500'>Enchant</span> your style, one outfit at a time - Where fashion meets expression.
        </h1>
        <div className="flex flex-wrap justify-center">
        <Button
            btnClass="font-roboto mt-10 focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 sm:text-xl md:text-2xl lg:text-3xl dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
            text="Shop Now"
            />
        </div>
      </div>
    </header>
  );
};

export default Hero;


