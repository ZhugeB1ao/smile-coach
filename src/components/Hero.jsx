import { ArrowRight } from 'lucide-react';
import { Container } from './SharedUI';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const Hero = ({ data = defaultContent.hero }) => {
  return (
    <section id="hero" className="relative min-h-[90dvh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#f8f7fa] rounded-full blur-3xl opacity-80 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-[#f3f3f6] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      
      <Container className="grid items-center gap-10 lg:gap-14 md:grid-cols-12">
        <div className="text-center md:col-span-7 md:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-[#0d0c22] text-balance">
            {data.title.line1} <span className="text-[#ea4c89]">{data.title.highlight}</span> <br />
            {data.title.line2} <br className="hidden sm:inline" />
            {data.title.line3}
          </h1>

          <p className="mb-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
            SmileCoach 1:1 Experience
          </p>

          <p className="max-w-xl mx-auto mb-8 text-base leading-relaxed sm:text-lg lg:text-xl text-[#524b63] md:mx-0">
            {data.subtitle.prefix} <span className="font-extrabold text-[#0d0c22]">{data.subtitle.author}</span> {data.subtitle.desc}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a 
              href={data.cta.href} 
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white transition-all duration-200 rounded-full bg-[#0d0c22] hover:bg-[#3a3546] shadow-[0_8px_20px_rgba(13,12,34,0.18)] hover:shadow-[0_12px_28px_rgba(13,12,34,0.25)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22] focus-visible:ring-offset-2 group"
            >
              <span>{data.cta.text}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          {/* Coach Photo with object-top ensuring head and face are fully visible */}
          <div className="aspect-4/5 rounded-[28px] overflow-hidden border border-[#e7e7ec] shadow-[0_16px_36px_-6px_rgba(13,12,34,0.1)] bg-[#f3f3f6] relative group hover:shadow-[0_24px_48px_-6px_rgba(13,12,34,0.15)] transition-shadow duration-300">
            {getImage(data.image?.src) ? (
              <img
                src={getImage(data.image.src)}
                alt={data.image.alt || 'HLV Huỳnh Ngọc Mai'}
                className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                width="600"
                height="750"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full p-12 italic text-center bg-[#f3f3f6] text-[#6e6d7a]">
                {data.image.placeholder}
              </div>
            )}
          </div>
          
          {/* Clean Floating Badge with subtle indicator */}
          <div className="absolute items-center hidden gap-3.5 px-5 py-3.5 bg-white/95 backdrop-blur-md border border-[#e7e7ec] shadow-[0_12px_24px_rgba(6,3,24,0.08)] -bottom-6 -left-6 rounded-2xl sm:flex hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="flex items-center justify-center w-10 h-10 text-white rounded-xl bg-[#0d0c22] font-black text-sm">
              <span className="text-[#ea4c89]">★</span>
            </div>
            <div>
              <p className="text-xl font-black tabular-nums text-[#0d0c22] leading-tight">{data.badge.stat}</p>
              <p className="text-[11px] font-bold tracking-wider uppercase text-[#524b63]">{data.badge.label}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
