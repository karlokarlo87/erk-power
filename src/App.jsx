import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Specs from './components/Specs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Specs />
      <Pricing />
      <Contact />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default App
