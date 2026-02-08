import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-fold sections — lazy loaded, only fetched when needed
const PainPoints = lazy(() => import('./components/PainPoints'));
const Benefits = lazy(() => import('./components/Benefits'));
const Timeline = lazy(() => import('./components/Timeline'));
const Offer = lazy(() => import('./components/Offer'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-x-hidden font-sans antialiased bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Suspense fallback={null}>
            <PainPoints />
            <Benefits />
            <Timeline />
            <Offer />
            <Testimonials />
            <About />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
