import About_Us from "./components/About_Us"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import Services from "./components/Services"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <About_Us />
      <Services />
      <Plans />
      <div className="flex-1"></div>
      <Footer />
    </div>
  )
}

export default App

