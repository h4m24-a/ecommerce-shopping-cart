import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PropTypes from "prop-types";



const Collections = ({carts}) => {
  return (
    <div>
      <NavBar badge={carts.length} />
      <Footer />
    </div>
  )
}

Collections.propTypes = {
  carts: PropTypes.array
};


export default Collections