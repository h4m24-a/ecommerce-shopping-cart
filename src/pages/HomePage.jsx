import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import TwoImage from "../components/TwoImage"
import TabSection from "../components/TabSection"
import Bordered from "../components/ui/Bordered"

const HomePage = () => {
  return (
    <div className="max-w-8xl mx-auto">
        <Navbar />
        <Hero />
        <TwoImage />
        <TabSection />
        <Bordered />
    </div>
  )
}

export default HomePage