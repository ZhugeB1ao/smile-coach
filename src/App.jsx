import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import content from './data/content.json';

function App({ data = content }) {
  return (
    <div className="overflow-x-hidden font-sans antialiased bg-white text-[#0d0c22] selection:bg-[#0d0c22] selection:text-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#0d0c22] focus:text-white focus:rounded-full focus:font-bold"
      >
        Bỏ qua đến nội dung chính
      </a>
      <Navbar data={data.navbar} />
      <main id="main-content">
        <Hero data={data.hero} />
        <PainPoints data={data.painPoints} />
        <Benefits data={data.benefits} />
        <Timeline data={data.timeline} />
        <Offer data={data.offer} />
        <Testimonials data={data.testimonials} />
        <About data={data.about} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
