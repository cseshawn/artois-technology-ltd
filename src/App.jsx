import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TrustedBy from './sections/TrustedBy';
import About from './sections/About';
import Services from './sections/Services';
import Industries from './sections/Industries';
import Technologies from './sections/Technologies';
import Portfolio from './sections/Portfolio';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/**
 * Artois Technology LTD — Premium Enterprise Website
 * Frontend-only React application with modular section architecture.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Industries />
        <Technologies />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
