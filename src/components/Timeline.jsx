import { SectionTitle, Container } from './SharedUI';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const Timeline = ({ data = defaultContent.timeline }) => {
  return (
    <section id="timeline" className="py-20 lg:py-28 bg-[#f8f7fa] border-y border-[#e7e7ec]">
      <Container>
        <SectionTitle subtitle={data.subtitle}>{data.title}</SectionTitle>
        
        {/* Timeline cards */}
        <div className="mb-16 space-y-8 lg:space-y-10">
          {data.weeks.map((step, i) => {
            const isEven = i % 2 === 0;
            const imgSrc = getImage(step.image);
            
            return (
              <div 
                key={i}
                className="group bg-white rounded-[28px] border border-[#e7e7ec] p-6 lg:p-10 shadow-[0_4px_16px_rgba(6,3,24,0.03)] hover:shadow-[0_16px_36px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                  {/* Image Side - Full Display Layout without cropping */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full rounded-[22px] overflow-hidden p-2.5 sm:p-4 flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
                      {imgSrc ? (
                        <img 
                          src={imgSrc} 
                          alt={step.title}
                          className="w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain rounded-[16px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full aspect-4/3 flex items-center justify-center text-xs italic text-[#524b63]/60">
                          [Ảnh minh họa {step.week}]
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="mb-1 text-2xl font-bold text-[#0d0c22] leading-snug group-hover:text-[#ea4c89] transition-colors duration-200">
                      {step.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-black tracking-widest uppercase text-[#ea4c89]">
                        {step.week}
                      </span>
                      <span className="text-[#524b63]/40">•</span>
                      <span className="text-sm italic font-semibold text-[#524b63]">{step.subtitle}</span>
                    </div>
                    
                    <p className="text-sm sm:text-base leading-relaxed text-[#524b63]">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Result After 3 Weeks */}
        <div 
          className="group bg-white p-6 sm:p-8 lg:p-12 rounded-[32px] border-2 border-dribbble-border shadow-[0_8px_28px_rgba(6,3,24,0.06)] hover:shadow-[0_20px_48px_rgba(6,3,24,0.1)] hover:-translate-y-1 transition-all duration-300 mb-16"
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Result Image - Full Display */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full rounded-[22px] overflow-hidden p-2.5 sm:p-4 flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
                {getImage(data.result.image) ? (
                  <img 
                    src={getImage(data.result.image)} 
                    alt={data.result.title}
                    className="w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain rounded-[16px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-4/3 flex items-center justify-center text-xs italic text-[#524b63]/60">
                    [Ảnh kết quả sau 3 tuần]
                  </div>
                )}
              </div>
            </div>
            
            {/* Result Content */}
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <h3 className="mb-2 text-2xl sm:text-3xl font-black text-[#0d0c22] tracking-tight">
                {data.result.title}
              </h3>
              <p className="mb-5 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
                KẾT QUẢ VƯỢT TRỘI
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.result.descPrefix}
                <span className="font-bold text-[#0d0c22] underline decoration-[#ea4c89] decoration-2 underline-offset-4">{data.result.highlight1}</span>
                {data.result.descMid}
                <span className="font-bold text-[#0d0c22] underline decoration-[#ea4c89] decoration-2 underline-offset-4">{data.result.highlight2}</span>
                {data.result.descSuffix}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="bg-white p-8 sm:p-12 rounded-[32px] border border-[#e7e7ec] text-[#0d0c22] text-center shadow-[0_16px_40px_rgba(6,3,24,0.08)] hover:shadow-[0_24px_50px_rgba(6,3,24,0.12)] transition-all duration-300"
          >
            <h3 className="mb-1 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d0c22]">{data.pricingCard.specialPrice}</h3>
            <p className="mb-2 text-base sm:text-lg font-bold line-through text-[#524b63]/60">{data.pricingCard.originalPrice}</p>
            <p className="mb-3 text-xs sm:text-sm font-black tracking-widest uppercase text-[#ea4c89]">{data.pricingCard.trialDesc}</p>
            <p className="mb-8 text-xs sm:text-sm font-bold text-rose-600 tracking-wide">{data.pricingCard.urgency}</p>

            <div>
              <a 
                href={data.pricingCard.cta.href} 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 rounded-full bg-[#0d0c22] hover:bg-[#3a3546] hover:shadow-[0_10px_28px_rgba(13,12,34,0.25)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22] focus-visible:ring-offset-2"
              >
                {data.pricingCard.cta.text}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
