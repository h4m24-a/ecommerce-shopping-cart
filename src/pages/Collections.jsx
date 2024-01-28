import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Collections = ({ carts }) => {
  return (
    <div>
      <NavBar badge={carts.length} />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900">
              2024 Winter Collection
            </h2>

            <p className="mx-auto mt-4 font-montserrat max-w-md text-gray-500">
              Our designers have meticulously curated each piece, drawing
              inspiration from timeless classics while infusing a modern edge.
            </p>
          </header>

          <ul className="mt-8 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/man-stands-street-wearing-green-jacket-black-cap_943281-23344.jpg?size=626&ext=jpg&ga=GA1.2.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Jacket
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      99.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/angel-ai-generated_23-2150690347.jpg?size=626&ext=jpg&ga=GA1.1.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Pants
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      149.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/cyberpunk-warrior-urban-scenery_23-2150712356.jpg?size=626&ext=jpg&ga=GA1.1.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Glasses
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      449.00 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/fashion-model-wearing-jacket_519183-9880.jpg?size=626&ext=jpg&ga=GA1.2.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Coat
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      349.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/cyberpunk-man-warrior-with-dog_23-2150712452.jpg?size=626&ext=jpg&ga=GA1.1.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Jacket
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      449.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/close-up-man-portrait-new-york-city_23-2150868124.jpg?size=626&ext=jpg&ga=GA1.1.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Jacket
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      299.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/close-up-man-new-york-streets_23-2150868150.jpg?size=626&ext=jpg&ga=GA1.2.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Jacket
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      229.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>

            <li>
              <p href="#" className="group block overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/portrait-person-during-daily-life-new-york-city_23-2150820002.jpg?size=626&ext=jpg&ga=GA1.1.1850613524.1706461821&semt=ais_ai_generated"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Jacket
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      99.99 USD{" "}
                    </span>
                  </p>
                </div>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Collections.propTypes = {
  carts: PropTypes.array,
};

export default Collections;
