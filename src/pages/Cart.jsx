import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div>
      <NavBar />

      <div className=" border border-gray-400 mx-auto w-fit p-2">
        <label htmlFor="Quantity" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="h-5 w-5 leading-5 text-black text-lg transition hover:opacity-75"
          >
            <MinusIcon className="" />
          </button>

          <input
            type="number"
            id="Quantity"
            value="1"
            className="h-5 w-16 rounded text-center text-md lg:text-xl "
          />

          <button
            type="button"
            className="h-5 w-5 leading-8 text-black text-lg transition hover:opacity-75"
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
