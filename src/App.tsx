import About_Us from "./components/About_Us"
import FAQSection from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Integrations from "./components/Integrations"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import Services from "./components/Services"
import TestimonialsSection from "./components/Testimonials"
import WhyChooseUs from "./components/Why_Choose_Us"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <About_Us />
      <Services />
      <Plans />
      <WhyChooseUs />
      <TestimonialsSection />
      <Integrations />
      <FAQSection />
      <div className="flex-1"></div>
      <Footer />
    </div>
  )
}

export default App

