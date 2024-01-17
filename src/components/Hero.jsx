const Hero = () => {
  return (
    <header className="bg-ghostWhite max-w-full  flex items-center justify-center">
      <div className="container mx-auto mt-12 text-center">
        <h1 className="font-poppins uppercase text-4xl sm:text-3xl md:text-5xl lg:text-9xl font-extrabold leading-tight">
            <span className='font-extrabold text-emerald-500'>Enchant</span> your style, one outfit at a time - Where fashion meets expression.
        </h1>
        <p className="px-4 sm:px-8 mt-4 sm:mt-8 mb-8 sm:mb-12 text-base sm:text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-6 sm:px-8 py-3 m-2 text-base sm:text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Get started
          </button>
          <button className="px-6 sm:px-8 py-3 m-2 text-base sm:text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            Learn more
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
