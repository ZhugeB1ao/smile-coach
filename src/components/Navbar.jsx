import React, { useState, useEffect } from 'react';
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
    const sections = ['hero', 'pain-points', 'benefits', 'timeline', 'testimonials', 'about'];
    
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
    { name: 'Kết quả', id: 'testimonials' },
    { name: 'Về Chị Mai', id: 'about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black text-sky-600 tracking-tighter">
          SMILE<span className="text-sky-950">COACH</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`text-sm font-bold transition-all uppercase tracking-widest relative group ${
                activeSection === link.id ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <button className="px-6 py-3 bg-sky-500 text-white rounded-full font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100 flex items-center gap-2 group">
            Đăng ký ngay <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors uppercase tracking-widest ${
                    activeSection === link.id ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full px-6 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100 flex items-center justify-center gap-2">
                Đăng ký ngay <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
