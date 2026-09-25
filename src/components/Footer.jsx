import { MessageCircle, Users, Play, Calendar } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';
import defaultContent from '../data/content.json';

const footerIconMap = {
  MessageCircle,
  Users,
  Play,
  Calendar
};

const Footer = ({ data = defaultContent.footer }) => {
  return (
    <footer className="bg-[#0d0c22] border-t border-white/10 py-20 lg:py-28 text-white">
      <Container className="flex flex-col items-center text-center">
        <SectionTitle subtitle={data.subtitle} dark>{data.title}</SectionTitle>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl mb-16 lg:mb-20">
          {data.contactCards.map((card, i) => {
            const Icon = footerIconMap[card.icon] || MessageCircle;
            const isHighlight = card.color === 'primary';
            
            if (isHighlight) {
              return (
                <a 
                  key={i}
                  href={card.href} 
                  aria-label={card.ariaLabel} 
                  className="p-6 lg:p-8 bg-[#ea4c89] rounded-[24px] transition-all duration-300 hover:bg-[#f082ac] hover:shadow-[0_12px_28px_rgba(234,76,137,0.4)] hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea4c89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c22] group"
                >
                  <Icon className="w-8 h-8 lg:w-9 lg:h-9 mx-auto mb-3.5 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <h4 className="font-bold mb-1.5 text-sm lg:text-base text-white">{card.title}</h4>
                  <p className="text-xs text-white/90 italic font-medium">{card.desc}</p>
                </a>
              );
            }

            return (
              <a 
                key={i}
                href={card.href} 
                aria-label={card.ariaLabel} 
                className="p-6 lg:p-8 bg-white/5 rounded-[24px] border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c22]"
              >
                <Icon className="w-8 h-8 lg:w-9 lg:h-9 mx-auto mb-3.5 text-[#ea4c89] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <h4 className="font-bold mb-1.5 text-sm lg:text-base text-white">{card.title}</h4>
                <p className="text-xs text-[#ecebf0]/70 italic">{card.desc}</p>
              </a>
            );
          })}
        </div>

        <div className="text-[#ecebf0]/70 text-xs lg:text-sm font-medium tracking-wide px-4 leading-relaxed max-w-2xl">
          {data.network}
        </div>
        <p className="mt-8 text-[#ecebf0]/40 text-xs font-medium">{data.copyright}</p>
      </Container>
    </footer>
  );
};

export default Footer;
