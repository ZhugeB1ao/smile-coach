import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from './SharedUI';

const Navbar = () => {
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
    const sections = ['hero', 'pain-points', 'benefits', 'timeline', 'offer', 'testimonials', 'about'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Khởi đầu', id: 'hero' },
    { name: 'Vấn đề', id: 'pain-points' },
    { name: 'Giá trị', id: 'benefits' },
    { name: 'Lộ trình', id: 'timeline' },
    { name: 'Ưu đãi', id: 'offer' },
    { name: 'Kết quả', id: 'testimonials' },
    { name: 'Về Chị Mai', id: 'about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-tighter text-sky-600">
          SMILE<span className="text-sky-950">COACH</span>
        </a>

        {/* Desktop Links */}
        <div className="items-center hidden xl:flex gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`text-sm font-bold transition-colors uppercase tracking-widest relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-sm ${
                activeSection === link.id ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-500 transition-[width] duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <a href="#offer" className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-colors rounded-full shadow-lg bg-sky-500 hover:bg-sky-600 shadow-sky-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
            Đăng ký ngay <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="p-1 rounded-lg xl:hidden text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white border-t lg:hidden border-slate-100 overscroll-contain"
          >
            <div className="flex flex-col gap-6 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm ${
                    activeSection === link.id ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#offer" className="flex items-center justify-center w-full gap-2 px-6 py-4 font-bold text-white transition-colors shadow-lg bg-sky-500 rounded-2xl hover:bg-sky-600 shadow-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
                Đăng ký ngay <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
