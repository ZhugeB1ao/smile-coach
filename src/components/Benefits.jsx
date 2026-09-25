import { FiCheck } from 'react-icons/fi';
import { SectionTitle, Container } from './SharedUI';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const Benefits = ({ data = defaultContent.benefits }) => {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Header Section */}
        <div 
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0d0c22] leading-[1.15] mb-3">
            {data.heading}{' '}
            <span className="text-[#ea4c89]">{data.headingHighlight}</span>
          </h2>
          {data.badge && (
            <p className="mb-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
              {data.badge}
            </p>
          )}
          <p className="text-lg lg:text-xl font-normal text-[#524b63] leading-relaxed italic">
            &ldquo;{data.quote}&rdquo;
          </p>
        </div>

        {/* Main Content: Photo + 5 Core Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Coach / Transformation Photo - Full visibility with object-top */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="w-full aspect-4/5 rounded-[28px] overflow-hidden border border-[#e7e7ec] bg-[#f8f7fa] shadow-[0_12px_32px_rgba(6,3,24,0.08)] group hover:shadow-[0_20px_48px_rgba(6,3,24,0.12)] transition-shadow duration-300">
                {getImage(data.image?.src) ? (
                  <img
                    src={getImage(data.image.src)}
                    alt={data.image.alt || 'Chị Mai tư vấn dinh dưỡng'}
                    className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="750"
                  />
                ) : (
                  <div className="p-10 flex items-center justify-center h-full text-[#524b63] italic text-center">
                    {data.image?.placeholder}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Benefits checklist */}
          <div className="lg:col-span-7">
            <SectionTitle subtitle={data.subtitle}>{data.title}</SectionTitle>
            <div className="mt-8 space-y-4">
              {data.benefitsList.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3.5 p-4 rounded-[20px] border border-transparent hover:border-[#e7e7ec] hover:bg-[#f8f7fa] hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <FiCheck className="w-5 h-5 text-[#ea4c89] shrink-0 mt-1 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0d0c22] leading-snug group-hover:text-[#ea4c89] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#524b63] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience Section: Light Dribbble Surface */}
        <div 
          className="bg-[#f8f7fa] rounded-[32px] p-6 sm:p-8 lg:p-12 border border-[#e7e7ec]"
        >
          <h3 className="mb-8 text-2xl sm:text-3xl font-extrabold text-center text-[#0d0c22] tracking-tight">
            {data.targetAudienceTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {data.targetAudiences.map((aud, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-7 text-center bg-white rounded-[24px] border border-[#e7e7ec] shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:border-[#0d0c22] hover:shadow-[0_12px_28px_rgba(6,3,24,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="block text-2xl font-black text-[#ea4c89] mb-2 tracking-tight transition-transform duration-200 group-hover:scale-105">
                  0{i + 1}
                </span>
                <h4 className="mb-2 text-lg font-bold text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors duration-200">{aud.title}</h4>
                <p className="text-sm text-[#524b63] leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>

          {/* Time Commitment Card */}
          <div className="p-8 text-center text-white bg-[#0d0c22] rounded-[24px] shadow-[0_12px_32px_rgba(6,3,24,0.12)] hover:shadow-[0_18px_40px_rgba(6,3,24,0.18)] transition-shadow duration-300">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ecebf0]/80 font-bold mb-1">
              {data.timeCommitment.prefix}
            </p>
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight my-2">
              {data.timeCommitment.highlight}
            </p>
            <p className="text-sm sm:text-base text-[#ecebf0]/90">
              {data.timeCommitment.suffix}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href={data.cta.href} 
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 rounded-full bg-[#0d0c22] hover:bg-[#3a3546] hover:shadow-[0_10px_28px_rgba(13,12,34,0.25)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0c22] focus-visible:ring-offset-2"
          >
            {data.cta.text}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
