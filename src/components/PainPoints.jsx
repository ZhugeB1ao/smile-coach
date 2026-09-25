import { SectionTitle, Container } from './SharedUI';
import defaultContent from '../data/content.json';

const PainPoints = ({ data = defaultContent.painPoints }) => {
  return (
    <section id="pain-points" className="py-20 lg:py-28 bg-[#f8f7fa] border-y border-[#e7e7ec]">
      <Container>
        <SectionTitle subtitle={data.subtitle}>{data.title}</SectionTitle>
        
        {/* 3 Pain point cards */}
        <div className="grid grid-cols-1 gap-6 mb-14 md:grid-cols-3">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className="p-7 lg:p-8 rounded-[24px] bg-white border border-[#e7e7ec] shadow-[0_2px_8px_rgba(6,3,24,0.03)] hover:shadow-[0_16px_36px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <h3 className="mb-1 text-lg font-bold leading-snug lg:text-xl text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="mb-4 text-xs font-black tracking-widest uppercase text-[#ea4c89]">
                  Vấn đề 0{i + 1}
                </p>
                <p className="text-sm leading-relaxed text-[#524b63]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Personal Story Section */}
        <div 
          className="p-8 lg:p-12 bg-white rounded-[28px] border border-[#e7e7ec] shadow-[0_4px_16px_rgba(6,3,24,0.04)] hover:shadow-[0_12px_28px_rgba(6,3,24,0.06)] hover:border-[#0d0c22] transition-all duration-300 max-w-4xl mx-auto relative overflow-hidden mb-12"
        >
          <div className="relative z-10">
            <h3 className="mb-1 text-xl sm:text-2xl font-black text-[#0d0c22] tracking-tight">
              Chia sẻ chân thành
            </h3>
            <p className="mb-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
              Hành trình từ trải nghiệm thực tế
            </p>
            <p className="mb-6 text-xl italic font-semibold leading-relaxed lg:text-2xl text-[#0d0c22]">
              &ldquo;{data.story.quote}&rdquo;
            </p>
            <p className="mb-4 text-base leading-relaxed text-[#524b63] lg:text-lg">
              {data.story.paragraph1.split('ĂN ĐÚNG')[0]}
              <span className="font-extrabold text-[#0d0c22]">ĂN ĐÚNG</span>
              {data.story.paragraph1.split('ĂN ĐÚNG')[1]}
            </p>
            <p className="text-base leading-relaxed text-[#524b63] lg:text-lg">
              {data.story.paragraph2}
            </p>
            <div className="pt-6 mt-6 border-t border-[#e7e7ec] flex items-center justify-between">
              <span className="text-xs font-black tracking-wider uppercase text-[#0d0c22]">{data.story.author}</span>
              <span className="text-xs text-[#524b63]">Founder SmileCoach</span>
            </div>
          </div>
        </div>

        {/* Results Highlight with pure typography */}
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mb-12 sm:grid-cols-2">
          {data.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-8 text-center bg-white border border-[#e7e7ec] rounded-[24px] shadow-[0_2px_8px_rgba(6,3,24,0.04)] hover:shadow-[0_12px_28px_rgba(6,3,24,0.08)] hover:border-[#0d0c22] hover:-translate-y-1 transition-all duration-300 group"
            >
              <p className="mb-1 text-4xl sm:text-5xl font-black text-[#0d0c22] tracking-tight group-hover:text-[#ea4c89] transition-colors duration-200">{stat.value}</p>
              <p className="text-xs font-bold tracking-wider uppercase text-[#524b63]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Empathy Message */}
        <div 
          className="max-w-4xl p-8 mx-auto text-center bg-white border border-[#e7e7ec] rounded-[28px] shadow-[0_4px_16px_rgba(6,3,24,0.04)] hover:shadow-[0_12px_28px_rgba(6,3,24,0.06)] hover:border-[#0d0c22] transition-all duration-300 lg:p-10"
        >
          <h3 className="mb-2 text-2xl sm:text-3xl font-black text-[#0d0c22] tracking-tight">
            ĐỒNG CẢM & THẤU HIỂU
          </h3>
          <p className="mb-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#ea4c89]">
            Lắng nghe và chia sẻ cùng người mẹ
          </p>
          <p className="mb-3 text-base leading-relaxed lg:text-lg text-[#0d0c22]">
            Tôi biết rằng, ngoài kia có rất nhiều <span className="font-extrabold">Phụ Nữ</span> sau khi được thiên chức làm mẹ, đã phải chịu rất nhiều nỗi đau, trong đó là <span className="font-extrabold text-[#ea4c89]">RỔ MỠ BỤNG</span> và <span className="font-extrabold text-[#ea4c89]">RẠN DA GHÊ GỚM</span>.
          </p>
          <p className="text-sm font-medium text-[#524b63] lg:text-base">
            {data.empathy.paragraph2}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;
