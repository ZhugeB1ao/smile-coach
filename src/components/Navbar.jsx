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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
          scrolled || isOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e7e7ec] shadow-[0_2px_8px_rgba(6,3,24,0.04)]' 
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className={`transition-[padding] duration-300 ${scrolled ? 'py-3' : 'py-3.5 sm:py-4'}`}>
          <Container className="flex items-center justify-between">
            <a href={data.brand.href} className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight text-[#0d0c22] group transition-transform duration-300 ease-out hover:scale-[1.02]">
              <span>{data.brand.prefix}</span>
              <span className="text-[#0068A8]">{data.brand.suffix}</span>
            </a>

            {/* Desktop Links */}
            <div className="items-center hidden xl:flex gap-1.5">
              {data.navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    className={`text-[13px] font-bold px-3.5 py-2 rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0068A8] ${
                      isActive 
                        ? 'bg-[#f3f3f6] text-[#0d0c22]' 
                        : 'text-[#524b63] hover:text-[#0068A8] hover:bg-[#f3f3f6]/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pl-3 ml-2 border-l border-[#e7e7ec]">
                <a 
                  href={data.cta.href} 
                  {...(data.cta.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-brand-outline gap-2 px-5 py-2 text-[13px] font-bold rounded-full shadow-xs hover:shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0068A8] focus-visible:ring-offset-2"
                >
                  <span>{data.cta.text}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="p-2 transition-colors duration-300 ease-out rounded-full xl:hidden text-[#0d0c22] hover:bg-[#f3f3f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Đóng menu' : 'Mở menu'}</span>
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </Container>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`bg-white border-t border-[#e7e7ec] shadow-2xl xl:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-[calc(100dvh-4.5rem)] opacity-100 overflow-y-auto overscroll-contain' 
              : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 px-5 pt-3 pb-6">
            {data.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors duration-200 ease-out ${
                    isActive 
                      ? 'bg-sky-50 text-[#0068A8]' 
                      : 'text-[#524b63] hover:text-[#0d0c22] hover:bg-[#f3f3f6]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#0068A8]" />}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#e7e7ec]">
              <a 
                href={data.cta.href} 
                onClick={() => setIsOpen(false)}
                {...(data.cta.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="btn-brand-outline w-full gap-2 px-5 py-3.5 text-sm font-bold rounded-full shadow-xs active:scale-95"
              >
                <span>{data.cta.text}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-0 bg-black/25 backdrop-blur-[2px] xl:hidden z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
