import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import TwoImage from "../components/TwoImage"
import TabSection from "../components/TabSection"

const HomePage = () => {
  return (
    <div className="max-w-8xl mx-auto bg-slate-50">
        <Navbar />
        <Hero />
        <TwoImage />
        <TabSection />
    </div>
  )
}

export default HomePage