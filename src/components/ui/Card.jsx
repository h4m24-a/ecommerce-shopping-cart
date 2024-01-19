import PropTypes from "prop-types";

const Card = ({ imageSrc, name, description, price }) => {
  return (
    <div className="relative bg-gray-100 p-6 overflow-hidden">
      {/* Full-width image with object-cover fit */}
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text content */}
      <div className="mt-4">
        {/* Name */}
        <h2 className="text-xl font-semibold">{name}</h2>

        {/* Description */}
        <p className="text-black mt-2">{description}</p>

        {/* Price */}
        <p className="text-black font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};



Card.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Card;