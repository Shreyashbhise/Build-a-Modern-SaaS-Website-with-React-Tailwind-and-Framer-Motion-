import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWork from "./components/HowItWork"
import KeyFeature from "./components/KeyFeature"
import Navbar from "./components/Navbar"
import PricingPlans from "./components/PricingPlans"
import Testimonials from "./components/Testimonials"


const App = () => {
  return (
   <main className="text-sm text-neutral-300 antialiased">
    <Navbar />
    <HeroSection />
    <HowItWork />
    <KeyFeature />
    <PricingPlans />
    <Testimonials />
    <Footer />
   </main>
  )
}

export default App