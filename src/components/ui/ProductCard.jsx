import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ textStyle, imageStyle, imageSrc, name, description, price, addtoCart }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col bg-white">
        {/* Full-width image with object-cover fit */}
        <div className="flex">
          <img src={imageSrc} alt={name} className={imageStyle} />
        </div>

        {/* Text content */}
        <div className={textStyle}>

          {/* Description */}
          <p className="font-montserrat text-lg uppercase font-bold">{description}</p>

          {/* Price */}
          <p className="font-montserrat text-lg uppercase font-bold">{price}</p>

          {/* Add to cart button */}
        </div>
          <Button  
          text="Add to Cart"
          btnClass="bg-gray-950   font-montserrat uppercase m-2 mb-6 text-white rounded-md px-4 py-2 w-full transition duration-300 ease-in-out focus:outline-none hover:bg-blue-700" 
          onClick={addtoCart}>
          </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string,
  textStyle: PropTypes.node,
  imageStyle: PropTypes.node,
  addtoCart: PropTypes.func
};

export default Card;
