import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
