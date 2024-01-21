import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import TwoImage from "../components/TwoImage"
import TabSection from "../components/TabSection"
import Bordered from "../components/ui/Bordered"
import LatestCollection from "../components/LatestCollection"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="max-w-8xl mx-auto">
        <Navbar />
        <Hero />
        <TwoImage />
        <TabSection />
        <Bordered />
        <LatestCollection />
        <Footer />
    </div>
  )
}

export default HomePage