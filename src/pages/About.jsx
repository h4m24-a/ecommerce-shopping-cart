import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PropTypes from "prop-types"



const About = ({carts}) => {
  return (
    <div>
        <NavBar badge={carts.length} />
        <p>About</p>
        <Footer />
    </div>
  )
}


About.propTypes = {
  carts: PropTypes.array
};


export default About