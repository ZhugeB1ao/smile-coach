import { MessageCircle, Users, Play, Calendar } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';
import AnimatedSection from './AnimatedSection';
import defaultContent from '../data/content.json';

const footerIconMap = {
  MessageCircle,
  Users,
  Play,
  Calendar
};

const Footer = ({ data = defaultContent.footer }) => {
  return (
    <AnimatedSection as="footer" className="bg-[#0d0c22] border-t border-white/10 py-20 lg:py-28 text-white">
      <Container className="flex flex-col items-center text-center">
        <SectionTitle subtitle={data.subtitle} dark>{data.title}</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 w-full max-w-4xl mb-16 lg:mb-20">
          {data.contactCards.map((card, i) => {
            const Icon = footerIconMap[card.icon] || MessageCircle;
            const isHighlight = card.color === 'primary';
            
            const isExternal = card.href.startsWith('http');
            const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

            if (isHighlight) {
              return (
                <a 
                  key={i}
                  href={card.href} 
                  aria-label={card.ariaLabel} 
                  {...linkProps}
                  className="p-6 lg:p-8 bg-brand-gradient rounded-[24px] transition-all duration-300 ease-out hover:opacity-95 hover:shadow-[0_16px_36px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 active:scale-95 flex flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c22] group"
                >
                  <Icon className="w-8 h-8 lg:w-9 lg:h-9 mx-auto mb-3.5 text-white transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
                  <h3 className="font-bold mb-1.5 text-sm lg:text-base text-white">{card.title}</h3>
                  <p className="text-xs text-white/95 italic font-medium">{card.desc}</p>
                </a>
              );
            }

            return (
              <a 
                key={i}
                href={card.href} 
                aria-label={card.ariaLabel} 
                {...linkProps}
                className="p-6 lg:p-8 bg-white/5 rounded-[24px] border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c22]"
              >
                <Icon className="w-8 h-8 lg:w-9 lg:h-9 mx-auto mb-3.5 text-brand-accent transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
                <h3 className="font-bold mb-1.5 text-sm lg:text-base text-white">{card.title}</h3>
                <p className="text-xs text-[#ecebf0]/90 italic">{card.desc}</p>
              </a>
            );
          })}
        </div>

        <div className="text-[#ecebf0]/85 text-xs lg:text-sm font-medium tracking-wide px-4 leading-relaxed max-w-2xl">
          {data.network}
        </div>
        <p className="mt-8 text-[#ecebf0]/70 text-xs font-medium">{data.copyright}</p>
      </Container>
    </AnimatedSection>
  );
};

export default Footer;
