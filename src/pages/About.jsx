import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PropTypes from "prop-types"



const About = ({carts}) => {
  return (
    <div>
        <NavBar badge={carts.length} />
        <div className="flex flex-row">
        <img src="https://img.freepik.com/free-photo/pop-art-portrait-collage-concept_23-2149411957.jpg?size=626&ext=jpg&ga=GA1.1.350614786.1706552707&semt=ais" alt="" />
        <img src="https://img.freepik.com/free-photo/pop-art-portrait-collage-concept_23-2149411957.jpg?size=626&ext=jpg&ga=GA1.1.350614786.1706552707&semt=ais" alt="" />
          
        </div>
        <Footer />
    </div>
  )
}


About.propTypes = {
  carts: PropTypes.array
};


export default About