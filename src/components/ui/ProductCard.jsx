import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({textStyle, imageStyle, image, name, description, price, moreInfo}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col bg-white">
        {/* Full-width image with object-cover fit */}
        <div className="flex">
          <img src={image} alt={name} className={imageStyle} />
        </div>

        {/* Text content */}
        <div className={textStyle}>
          {/* Description */}
          <p className="font-montserrat text-sm uppercase font-bold">
            {description}
          </p>

          {/* Price */}
          <p className="font-montserrat text-sm uppercase font-bold">{price}</p>

        </div>
          <Button  
          text="View"
          btnClass="bg-gray-950 font-montserrat uppercase m-2 mb-6 text-xs text-center text-white rounded-md px-4 py-2 w-1/4 mx-auto transition duration-300 ease-in-out focus:outline-none hover:bg-gray-950 hover:text-red-500" 
          onClick={moreInfo}>
          </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  textStyle: PropTypes.node,
  imageStyle: PropTypes.node,
  moreInfo: PropTypes.func,
};

export default Card;

// {addtoCart}

{
  /* <Button  
text="Add to Cart"
btnClass="bg-gray-950 font-montserrat uppercase m-2 mb-6 text-sm text-white rounded-md px-4 py-2 w-2/4 mx-auto transition duration-300 ease-in-out focus:outline-none hover:bg-blue-700" 
onClick={addtoCart}>
</Button> */
}

// const handleAddToCart = (productId => {
//     console.log(`added to cart: ${productId}`);
//   })
