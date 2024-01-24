import React from 'react';
import PropTypes from 'prop-types';
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Quantity = ({ value, onDecrease, onIncrease }) => {
  return (
    <div>
      <div className="border border-gray-400 mx-auto w-fit p-2">
        <label htmlFor="Quantity" className="sr-only">
          Quantity
        </label>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="h-5 w-5 leading-5 text-black text-lg transition hover:opacity-75"
            onClick={onDecrease}
          >
            <MinusIcon />
          </button>

          <input
            type="number"
            id="Quantity"
            value={value}
            className="h-5 w-16 rounded text-center text-md lg:text-xl"
            readOnly
          />

          <button
            type="button"
            className="h-5 w-5 leading-8 text-black text-lg transition hover:opacity-75"
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
