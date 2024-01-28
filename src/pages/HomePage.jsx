/* eslint-disable react/prop-types */
import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import TwoImage from "../components/TwoImage"
// import TabSection from "../components/TabSection"
import Bordered from "../components/ui/Bordered"
import LatestCollection from "../components/LatestCollection"
import Footer from "../components/Footer"
import WideImage from "../components/WideImage"
import Newsletter from "../components/Newsletter"
import BestSeller from "../components/BestSeller"

const HomePage = ({carts}) => {
  return (
    <div className="max-w-8xl mx-auto">
        <Navbar  badge={carts.length}  />
        <Hero />
        <TwoImage />
        <BestSeller />
        <LatestCollection />
        <WideImage />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default HomePage