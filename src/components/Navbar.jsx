import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from './SharedUI';
import defaultContent from '../data/content.json';

const Navbar = ({ data = defaultContent.navbar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = data.navLinks.map((link) => link.id);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [data.navLinks]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e7e7ec] shadow-[0_2px_8px_rgba(6,3,24,0.04)] py-3.5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href={data.brand.href} className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight text-[#0d0c22] group">
          <span>{data.brand.prefix}</span>
          <span className="text-[#ea4c89]">{data.brand.suffix}</span>
        </a>

        {/* Desktop Links */}
        <div className="items-center hidden xl:flex gap-1.5">
          {data.navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`text-[13px] font-bold px-3.5 py-2 rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22] ${
                  isActive 
                    ? 'bg-[#f3f3f6] text-[#0d0c22]' 
                    : 'text-[#524b63] hover:text-[#0d0c22] hover:bg-[#f3f3f6]/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pl-3 ml-2 border-l border-[#e7e7ec]">
            <a 
              href={data.cta.href} 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-150 rounded-full bg-[#0d0c22] hover:bg-[#3a3546] shadow-sm hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22] focus-visible:ring-offset-2"
            >
              <span>{data.cta.text}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="p-2 transition-colors rounded-full xl:hidden text-[#0d0c22] hover:bg-[#f3f3f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white border-b border-[#e7e7ec] shadow-lg xl:hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none border-transparent'
        }`}
      >
        <div className="flex flex-col gap-2 p-5">
          {data.navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                activeSection === link.id 
                  ? 'bg-[#f3f3f6] text-[#0d0c22]' 
                  : 'text-[#524b63] hover:text-[#0d0c22] hover:bg-[#f3f3f6]/60'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-[#e7e7ec]">
            <a 
              href={data.cta.href} 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full gap-2 px-5 py-3.5 text-sm font-bold text-white transition-all duration-150 rounded-full bg-[#0d0c22] hover:bg-[#3a3546] shadow-sm active:scale-95"
            >
              <span>{data.cta.text}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
