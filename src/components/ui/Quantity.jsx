import PropTypes from 'prop-types';
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Quantity = ({ value, onDecrease, onIncrease }) => {
  return (
    <div>
      <div className="border flex flex-row justify-center border-gray-400 bg-gray-200 rounded-lg mx-auto w-36 p-2">
        <label htmlFor="Quantity" className="sr-only">
          Quantity
        </label>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-3 w-3 leading-3 text-black text-md transition hover:opacity-75"
            onClick={onDecrease}
          >
            <MinusIcon />
          </button>

          <input
            type="number"
            id="Quantity"
            value={value}
            className="h-3 font-montserrat bg-gray-200  w-16 rounded text-center text-sm lg:text-md"
            readOnly
          />

          <button
            type="button"
            className="h-3 w-3 leading-8 text-black text-md transition hover:opacity-75"
            onClick={onIncrease}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

Quantity.propTypes = {
  value: PropTypes.number.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default Quantity;
