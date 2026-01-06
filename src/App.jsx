import React, { useEffect, useState } from 'react';
import Lenis from 'lenis'; // Correct import for Lenis (default export often works, or named)
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Story from './components/sections/Story';
import Services from './components/sections/Services';
import Menu from './components/sections/Menu';
import Gallery from './components/sections/Gallery';
import Reservation from './components/sections/Reservation';
import Contact from './components/sections/Contact';
import Preloader from './components/ui/Preloader';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import 'lenis/dist/lenis.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-cream selection:bg-coffee selection:text-white font-sans">
      <AnimatePresence mode='wait'>
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <BackToTop />
          <Navbar />
          <Hero />
          <About />
          <Story />
          <Services />
          <Menu />
          <Gallery />
          <Reservation />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
