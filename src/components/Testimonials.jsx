import { Star } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';
import AnimatedSection from './AnimatedSection';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const Testimonials = ({ data = defaultContent.testimonials }) => {
  return (
    <AnimatedSection id="testimonials" className="py-20 lg:py-28 bg-[#f8f7fa] border-y border-[#e7e7ec]">
      <Container>
        <SectionTitle subtitle={data.subtitle}>{data.title}</SectionTitle>
        
        <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(data.items || []).filter(item => !item.hidden).map((feed, i) => (
            <div 
              key={i}
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#e7e7ec] rounded-[28px] shadow-[0_4px_16px_rgba(6,3,24,0.03)] hover:border-[#0d0c22] hover:shadow-[0_16px_36px_rgba(6,3,24,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out group"
            >
              <div>
                {/* Header with avatar, name, and rating */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex items-center justify-center text-base font-black shrink-0 w-11 h-11 bg-gradient-to-br from-[#0284c7] to-[#0068a8] text-white rounded-2xl shadow-sm transition-transform duration-300 ease-out group-hover:scale-105">
                      {feed.name[0]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0d0c22] leading-tight group-hover:text-[#0284c7] transition-colors duration-300 ease-out">{feed.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0068A8] mt-0.5">{feed.job}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-amber-400" role="img" aria-label="5 sao">
                    {Array(5).fill(0).map((_, starIndex) => (
                      <Star key={starIndex} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                {/* Highlight text without border/bg */}
                <p className="mb-3 text-xs font-black uppercase tracking-wider text-[#0068A8]">
                  {feed.highlight}
                </p>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-sm sm:text-base leading-relaxed text-[#524b63] italic">
                    &ldquo;{feed.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Before/After or Transformation Image - object-top to ensure full face/body visibility */}
              {getImage(feed.image) ? (
                <div className="overflow-hidden border border-[#e7e7ec] aspect-square rounded-[20px] bg-[#f8f7fa] group shadow-inner">
                  <img
                    src={getImage(feed.image)}
                    alt={`Hình ảnh chuyển đổi của học viên ${feed.name}`}
                    className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    width="500"
                    height="500"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex flex-col items-center justify-center border border-[#e7e7ec] bg-[#f3f3f6] rounded-[16px] aspect-4/3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#524b63]">Trước</p>
                    <p className="text-xs italic text-[#524b63]/60">[Hình ảnh]</p>
                  </div>
                  <div className="flex flex-col items-center justify-center border border-[#e7e7ec] bg-[#f8f7fa] rounded-[16px] aspect-4/3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#0068A8]">Sau</p>
                    <p className="text-xs italic text-[#524b63]/60">[Hình ảnh]</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div 
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="mb-6 text-lg sm:text-xl font-medium text-[#0d0c22]">
            {data.cta.descPrefix}
            <span className="font-extrabold text-[#0068A8]">{data.cta.highlight}</span>
            {data.cta.descSuffix}
          </p>
          <a 
            href={data.cta.href} 
            {...(data.cta.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="btn-brand-outline px-10 py-3.5 text-base font-bold rounded-full shadow-sm hover:shadow-[0_8px_24px_rgba(0,104,168,0.25)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0068A8] focus-visible:ring-offset-2"
          >
            {data.cta.text}
          </a>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Testimonials;
