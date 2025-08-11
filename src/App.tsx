import About_Us from "./components/About_Us";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Nav from "./components/Nav";
import Plans from "./components/Plans";
import Services from "./components/Services";
import TestimonialsSection from "./components/Testimonials";
import WhyChooseUs from "./components/Why_Choose_Us";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col scroll-smooth text-white"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #111827 40%, #0f172a 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <Nav />
      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About_Us />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="plans">
          <Plans />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="integrations">
          <Integrations />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
