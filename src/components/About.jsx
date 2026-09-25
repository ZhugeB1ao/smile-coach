import { FiCheck } from 'react-icons/fi';
import { Container } from './SharedUI';
import { getImage } from '../utils/images';
import defaultContent from '../data/content.json';

const About = ({ data = defaultContent.about }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-[#e7e7ec]">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d0c22] uppercase tracking-tight"
          >
            {data.title}
          </h2>
          {data.badge && (
            <p 
              className="mt-3 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]"
            >
              {data.badge}
            </p>
          )}
        </div>

        {/* Main Content: Bio & Coach Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left - Photo & Stats (Adjusted aspect to 3/2 to match hlv-mai-3.jpg 2000x1333 perfectly) */}
          <div className="lg:col-span-5">
            <div 
              className="relative aspect-3/2 sm:aspect-4/3 lg:aspect-3/2 bg-[#f8f7fa] rounded-[28px] overflow-hidden border border-[#e7e7ec] shadow-[0_12px_32px_rgba(6,3,24,0.06)] hover:shadow-[0_20px_48px_rgba(6,3,24,0.12)] transition-all duration-300 mb-6 group"
            >
              {getImage(data.photo) ? (
                <img
                  src={getImage(data.photo)}
                  alt={data.photoAlt || data.title}
                  className="object-cover object-center w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center h-full p-8 text-[#524b63] italic text-center">
                  {data.photoPlaceholder}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((st, i) => (
                <div 
                  key={i} 
                  className="p-5 text-center bg-[#f8f7fa] rounded-[20px] border border-[#e7e7ec] hover:border-[#0d0c22] hover:shadow-[0_8px_20px_rgba(6,3,24,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <p className="text-2xl lg:text-3xl font-black text-[#0d0c22] tracking-tight group-hover:text-[#ea4c89] transition-colors duration-200">{st.value}</p>
                  <p className="mt-1 text-xs font-bold tracking-wider uppercase text-[#524b63]">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-bold text-[#0d0c22] leading-snug">
                {data.greeting}
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.intro.prefix}
                <span className="font-bold text-[#0d0c22]">{data.intro.author}</span>
                {data.intro.details}
                <span className="font-semibold text-[#0d0c22]">{data.intro.location}</span>
                {data.intro.suffix}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.websiteIntro}
                <a 
                  href={data.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-[#ea4c89] underline decoration-[#ea4c89] decoration-2 underline-offset-4 hover:text-[#0d0c22] transition-colors"
                >
                  {data.websiteLabel}
                  <span className="inline-block ml-1" aria-hidden="true">↗</span>
                </a>
                {data.websiteGoals}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 pb-2">
                {data.goals.map((goal, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-4 bg-[#f8f7fa] rounded-[18px] border border-[#e7e7ec] hover:border-[#0d0c22] hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <FiCheck className="w-5 h-5 text-[#ea4c89] shrink-0" strokeWidth={2.5} aria-hidden="true" />
                    <span className="text-sm sm:text-base font-bold text-[#0d0c22]">{goal.title}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.currentStatus}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.pastStory.prefix}
                <span className="font-semibold text-[#0d0c22]">{data.pastStory.healthIssue}</span>
                {data.pastStory.suffix}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#524b63]">
                {data.turningPoint.content}
                <span className="font-semibold text-[#ea4c89]">{data.turningPoint.highlight}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div 
          className="bg-[#f8f7fa] rounded-[32px] p-6 sm:p-8 lg:p-12 border border-[#e7e7ec] mb-16"
        >
          <h3 className="mb-8 text-2xl sm:text-3xl font-black text-center text-[#0d0c22] tracking-tight">
            {data.mindsetHeading.prefix}
            <span className="text-[#ea4c89]">{data.mindsetHeading.highlight}</span>
          </h3>

          <div className="space-y-6 leading-relaxed text-[#524b63] max-w-4xl mx-auto">
            <p className="text-base sm:text-lg">
              {data.mindsetIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.mindsetQuotes.map((q, i) => (
                <div key={i} className="p-6 bg-white rounded-[20px] border border-[#e7e7ec] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300">
                  <p className="italic text-[#524b63] text-sm sm:text-base leading-relaxed">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>

            <p className="py-2 text-base sm:text-lg font-bold text-center text-[#0d0c22]">
              {data.mindsetTransition}
            </p>

            <div className="p-6 bg-white rounded-[20px] border border-rose-100">
              <ul className="space-y-3">
                {data.mindsetConsequences.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#524b63]">
                    <span className="mt-0.5 text-rose-500 font-bold" aria-hidden="true">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div 
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl sm:text-3xl font-black text-center text-[#0d0c22] tracking-tight">
            {data.solutionHeading.prefix}
            <span className="text-[#ea4c89]">{data.solutionHeading.highlight}</span>
          </h3>

          <p className="max-w-3xl mx-auto mb-10 leading-relaxed text-center text-sm sm:text-base text-[#524b63]">
            {data.solutionDesc.prefix}
            <span className="font-bold text-[#0d0c22]">{data.solutionDesc.highlight1}</span>
            {data.solutionDesc.mid}
            <span className="font-bold text-[#0d0c22]">{data.solutionDesc.highlight2}</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {data.solutionPillars.map((item, i) => (
              <div 
                key={i} 
                className="p-5 text-center bg-[#f8f7fa] rounded-[20px] border border-[#e7e7ec] hover:border-[#0d0c22] hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
              >
                <FiCheck className="w-5 h-5 text-[#ea4c89] mx-auto mb-2" strokeWidth={2.5} aria-hidden="true" />
                <p className="text-xs sm:text-sm font-bold text-[#0d0c22]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mb-8 text-center text-sm sm:text-base font-medium text-[#524b63]">{data.habitRequirementsIntro}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.habitRequirements.map((item, i) => (
              <div 
                key={i} 
                className="p-5 text-center bg-white rounded-[20px] border border-[#e7e7ec] shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:border-[#0d0c22] hover:shadow-[0_12px_24px_rgba(6,3,24,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <FiCheck className="w-5 h-5 text-[#ea4c89] mx-auto mb-2" strokeWidth={2.5} aria-hidden="true" />
                <p className="text-sm font-bold text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote: Dark High-Contrast Accent Banner */}
        <div 
          className="bg-[#0d0c22] text-white rounded-[32px] p-8 lg:p-14 text-center mb-16 shadow-[0_16px_40px_rgba(13,12,34,0.15)] hover:shadow-[0_24px_50px_rgba(13,12,34,0.25)] transition-shadow duration-300"
        >
          <p className="mb-6 text-2xl sm:text-3xl font-black leading-snug tracking-tight text-white max-w-3xl mx-auto">
            {data.philosophyQuote.prefix}
            <span className="text-[#ea4c89]">{data.philosophyQuote.highlight1}</span>
            {data.philosophyQuote.mid}
            <span className="text-[#ea4c89]">{data.philosophyQuote.highlight2}</span>
            {data.philosophyQuote.suffix}
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#ecebf0]/90">
            {data.philosophyQuote.descPrefix}
            <span className="font-bold text-white">{data.philosophyQuote.descHighlight}</span>
            {data.philosophyQuote.descSuffix}
          </p>
        </div>

        {/* Responsibility Section */}
        <div 
          className="bg-[#f8f7fa] rounded-[32px] p-6 sm:p-8 lg:p-12 border border-[#e7e7ec] mb-16"
        >
          <h3 className="mb-6 text-2xl sm:text-3xl font-black text-center text-[#0d0c22] tracking-tight">
            Tinh thần <span className="text-[#ea4c89]">{data.responsibility.title}</span>
          </h3>

          <div className="max-w-3xl mx-auto space-y-6 leading-relaxed text-sm sm:text-base text-[#524b63]">
            <p className="text-center">
              {data.responsibility.paragraph1}
            </p>

            <div className="p-6 text-center bg-white rounded-[20px] border border-[#e7e7ec] shadow-sm hover:border-[#0d0c22] transition-colors">
              <p className="text-base sm:text-lg font-bold text-[#0d0c22] italic">
                &ldquo;{data.responsibility.quote}&rdquo;
              </p>
            </div>

            <p className="text-center">
              {data.responsibility.paragraph2}
            </p>
          </div>
        </div>

        {/* Value & Gallery */}
        <div 
          className="mb-12 text-center"
        >
          <h3 className="mb-4 text-2xl sm:text-3xl font-black text-[#0d0c22] tracking-tight">
            {data.lifeValues.heading}
          </h3>
          <p className="max-w-3xl mx-auto mb-4 leading-relaxed text-sm sm:text-base text-[#524b63]">
            {data.lifeValues.paragraph1}
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed text-sm sm:text-base text-[#524b63]">
            {data.lifeValues.paragraph2}{' '}
            <span className="font-bold text-[#ea4c89]">{data.lifeValues.mission}</span>
          </p>
        </div>

        {/* Photo Gallery - Tailored aspect ratio and focal framing so all photos display fully without excessive cropping */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {(data.gallery || []).map((imgItem, i) => {
            const focalPositions = [
              'object-[center_15%]', // Photo 1: green top, thumbs up, smile
              'object-top',          // Photo 2: full body green dress, handbag
              'object-[center_72%]', // Photo 3: bikini, shorts, raised arm in sea
              'object-[center_12%]', // Photo 4: finish line marathon, scarf, bib
            ];

            return (
              <div 
                key={i} 
                className="overflow-hidden border border-[#e7e7ec] aspect-[2/3] sm:aspect-[3/5] bg-[#f8f7fa] rounded-[24px] group shadow-[0_4px_16px_rgba(6,3,24,0.04)] hover:shadow-[0_16px_36px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300 relative"
              >
                {getImage(imgItem.src) ? (
                  <img
                    src={getImage(imgItem.src)}
                    alt={imgItem.alt || `Huỳnh Ngọc Mai ${i + 1}`}
                    className={`object-cover ${focalPositions[i] || 'object-center'} w-full h-full transition-transform duration-500 ease-out group-hover:scale-105`}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-xs italic text-[#524b63]/60">
                    {data.galleryPlaceholders?.[i] || `[Ảnh ${i + 1}]`}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Quote */}
        <div 
          className="p-8 lg:p-12 bg-[#f8f7fa] rounded-[32px] border border-[#e7e7ec] text-center hover:shadow-[0_8px_24px_rgba(6,3,24,0.04)] transition-all duration-300"
        >
          <p className="text-2xl sm:text-3xl font-black leading-relaxed text-[#0d0c22] italic max-w-3xl mx-auto">
            &ldquo;{data.finalQuote.quote}&rdquo;
          </p>
          <p className="mt-4 font-bold tracking-widest uppercase text-xs sm:text-sm text-[#ea4c89]">
            {data.finalQuote.author}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
