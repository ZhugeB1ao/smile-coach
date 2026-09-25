import { SectionTitle, Container } from './SharedUI';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const Offer = ({ data = defaultContent.offer }) => {
  return (
    <section id="offer" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle subtitle={data.subtitle}>{data.title}</SectionTitle>
        
        {/* Bonus Section - PT Gym */}
        <div 
          className="bg-[#f8f7fa] rounded-[32px] p-6 sm:p-8 lg:p-12 border border-[#e7e7ec] shadow-[0_4px_20px_rgba(6,3,24,0.03)] mb-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-black leading-snug text-[#0d0c22] tracking-tight">
              {data.bonus.title}<br className="hidden lg:block" /> {data.bonus.titleBreak}
            </h3>
            
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-black tracking-widest uppercase text-[#ea4c89]">
              <span>{data.bonus.badge1}</span>
              <span className="text-[#524b63]/40">•</span>
              <span>{data.bonus.badge2}</span>
            </div>
            
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
              {/* Coach Info */}
              <div className="w-full lg:w-1/2">
                <div className="p-6 lg:p-8 bg-white border border-[#e7e7ec] rounded-[24px] shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:shadow-[0_12px_28px_rgba(6,3,24,0.06)] hover:border-[#0d0c22] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* Coach Image */}
                    <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-2xl border border-[#e7e7ec] shrink-0 bg-[#f3f3f6]">
                      {getImage(data.bonus.coach.avatar) ? (
                        <img
                          src={getImage(data.bonus.coach.avatar)}
                          alt={data.bonus.coach.name}
                          className="object-cover object-top w-full h-full"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-xs italic text-[#524b63]/60">[Avatar]</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0d0c22] mb-1">{data.bonus.coach.name}</h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#ea4c89] mb-3">{data.bonus.coach.title}</p>
                      <p className="text-sm leading-relaxed text-[#524b63]">
                        {data.bonus.coach.descPrefix}<span className="font-bold text-[#0d0c22]">{data.bonus.coach.highlight}</span>{data.bonus.coach.descSuffix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coach Images - Adjusted aspect ratio to 4/5 with object-top and object-contain container so coach is fully visible */}
              <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
                <div className="group relative flex items-center justify-center overflow-hidden bg-[#f3f3f6] border border-[#e7e7ec] rounded-[24px] aspect-4/5 shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:shadow-[0_12px_24px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300">
                  {getImage(data.bonus.coach.image1) ? (
                    <img
                      src={getImage(data.bonus.coach.image1)}
                      alt={`${data.bonus.coach.name} 1`}
                      className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <p className="px-4 text-xs italic text-center text-[#524b63]">{data.bonus.coach.imagePlaceholder1}</p>
                  )}
                </div>
                <div className="group relative flex items-center justify-center overflow-hidden bg-[#f3f3f6] border border-[#e7e7ec] rounded-[24px] aspect-4/5 shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:shadow-[0_12px_24px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300">
                  {getImage(data.bonus.coach.image2) ? (
                    <img
                      src={getImage(data.bonus.coach.image2)}
                      alt={`${data.bonus.coach.name} 2`}
                      className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <p className="px-4 text-xs italic text-center text-[#524b63]">{data.bonus.coach.imagePlaceholder2}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Extra Bonuses (Bonus 2 & Bonus 3) */}
            {data.bonus.extraBonuses && data.bonus.extraBonuses.length > 0 && (
              <div className="grid grid-cols-1 gap-6 pt-8 mt-10 border-t border-[#e7e7ec] md:grid-cols-2">
                {data.bonus.extraBonuses.map((item, i) => (
                  <div 
                    key={i}
                    className="p-6 lg:p-8 bg-white border border-[#e7e7ec] rounded-[24px] shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:border-[#0d0c22] hover:shadow-[0_12px_28px_rgba(6,3,24,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h4 className="mb-1 text-base sm:text-lg font-bold text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-3 text-xs font-black tracking-widest uppercase text-[#ea4c89]">
                      <span>{item.tag || `QUÀ TẶNG ${item.number}`}</span>
                      <span className="text-[#524b63]/40">•</span>
                      <span>FREE 100%</span>
                    </div>
                    {item.desc && (
                      <p className="text-sm leading-relaxed text-[#524b63]">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-[#f8f7fa] p-8 lg:p-10 rounded-[32px] border border-[#e7e7ec] text-center mb-10 hover:shadow-[0_8px_24px_rgba(6,3,24,0.04)] transition-all duration-300"
          >
            <p className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-black line-through text-[#524b63]/40 tracking-tight">{data.tuition.originalPrice}</p>
            <p className="mb-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">{data.tuition.intro}</p>
            <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#524b63]">
              {data.tuition.descPrefix}<span className="font-bold text-[#0d0c22]">{data.tuition.highlight}</span>{data.tuition.descSuffix}
            </p>
          </div>

          {/* Special Offer Box */}
          <div 
            className="bg-[#0d0c22] rounded-[36px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(13,12,34,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-10 text-center">
                <h3 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  {data.specialPromotion.heading}
                </h3>
                <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
                  {data.specialPromotion.badge}
                </p>
              </div>

              {/* Offer Items with clean typography, no circular wrappers */}
              <div className="grid grid-cols-1 gap-5 mb-10 md:grid-cols-3">
                {data.specialPromotion.options.map((opt, i) => (
                  <div 
                    key={i} 
                    className="p-6 text-center border bg-white/5 backdrop-blur-sm rounded-[24px] border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h4 className="mb-1 text-base font-bold text-white group-hover:text-[#ea4c89] transition-colors">{opt.title}</h4>
                    <p className="mb-3 text-xs font-black tracking-widest uppercase text-[#ea4c89]">
                      ƯU ĐÃI 0{i + 1}
                    </p>
                    <p className="text-xs sm:text-sm text-[#ecebf0]/80 leading-relaxed">
                      {opt.descPrefix}<span className="font-bold text-white">{opt.highlight}</span>{opt.descSuffix}
                    </p>
                  </div>
                ))}
              </div>

              {/* Free Announcement */}
              <div className="p-8 mb-8 text-center bg-white shadow-xl rounded-[28px] lg:p-10 text-[#0d0c22] hover:shadow-2xl transition-shadow duration-300">
                <h3 className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d0c22]">{data.specialPromotion.announcement.price}</h3>
                <p className="mb-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">{data.specialPromotion.announcement.subtitle}</p>
                <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-[#524b63]">
                  {data.specialPromotion.announcement.note}
                </p>
              </div>

              {/* Urgency */}
              <div className="p-4 mb-8 text-center border bg-white/5 border-white/10 rounded-2xl max-w-xl mx-auto flex items-center justify-center">
                <p className="text-xs sm:text-sm font-bold text-white">
                  <span className="uppercase text-[#ea4c89] mr-2">{data.specialPromotion.urgency.label}:</span>
                  {data.specialPromotion.urgency.prefix}
                  <span className="underline decoration-[#ea4c89] decoration-2 underline-offset-4 text-white font-extrabold mx-1">{data.specialPromotion.urgency.highlight}</span>
                  {data.specialPromotion.urgency.suffix}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="mb-6 text-sm sm:text-base text-[#ecebf0]/80">
                  {data.specialPromotion.cta.note}
                </p>
                <a 
                  href={data.specialPromotion.cta.href}
                  className="inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg font-bold text-white transition-all duration-200 rounded-full bg-[#ea4c89] hover:bg-[#f082ac] shadow-[0_8px_24px_rgba(234,76,137,0.35)] hover:shadow-[0_12px_32px_rgba(234,76,137,0.5)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea4c89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c22]"
                >
                  {data.specialPromotion.cta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Offer;
