import PropTypes from "prop-types";

const Card = ({ imageSrc, name, description, price }) => {
  return (
    <div className="flex flex-col md:flex-row">
        <div className="flex flex-col bg-white">
        {/* Full-width image with object-cover fit */}
        <div className="flex- ">
            <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full rounded-md"
            />
        </div>

        {/* Text content */}
        <div className="mt-4">
            {/* Name */}
            <h2 className="text-xl font-montserrat uppercase font-bold">{name}</h2>

            {/* Description */}
            <p className="text-black font-montserrat uppercase font-bold mt-2">{description}</p>

            {/* Price */}
            <p className="text-black font-montserrat uppercase font-bold mt-2">${price}</p>
        </div>
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