import PropTypes from "prop-types";

const Card = ({ textStyle, imageStyle, imageSrc, name, description, price }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col bg-white">
        {/* Full-width image with object-cover fit */}
        <div className="flex">
          <img src={imageSrc} alt={name} className={imageStyle} />
        </div>

        {/* Text content */}
        <div className={textStyle}>
          {/* Name */}
          <p className="text-xl font-montserrat uppercase font-bold">{name}</p>

          {/* Description */}
          <p className="font-montserrat uppercase font-bold mt-2">{description}</p>

          {/* Price */}
          <p className="font-montserrat uppercase font-bold mt-1">{price}</p>

        </div>
        
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
