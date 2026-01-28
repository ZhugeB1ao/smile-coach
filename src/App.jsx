import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden font-sans antialiased bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <Navbar />
      <Hero />
      <PainPoints />
      <Benefits />
      <Timeline />
      <Offer />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
