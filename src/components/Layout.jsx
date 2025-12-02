import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Specs from './Specs';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Specs />
      <Pricing />
      <Contact />
      <Footer />
      <MobileFooter />
    </>
  );
}

export default Layout;
