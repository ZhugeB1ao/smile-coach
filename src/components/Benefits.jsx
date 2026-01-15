import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32">
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-32">
        <div className="w-full lg:w-1/2 relative">
           <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-50" />
           <div className="bg-slate-200 w-full aspect-square rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center text-slate-400 italic p-10 relative z-10 border-4 border-white">
              [Placeholder: Ảnh Chị Mai đang tư vấn hoặc rãnh bụng 11]
           </div>
        </div>
        <div className="w-full lg:w-1/2">
          <SectionTitle subtitle="BẠN SẼ NHẬN ĐƯỢC GÌ?">GIÁ TRỊ CHƯƠNG TRÌNH</SectionTitle>
          <div className="space-y-6 lg:space-y-8">
            {[
              "Giảm cân để tự tin hơn trong công việc và cuộc sống.",
              "Cơ thể cân đối, tràn đầy năng lượng đỉnh cao.",
              "Quyến rũ hơn, hạnh phúc hơn trong chuyện phòng the.",
              "Thân hình rắn chắc, năng động, yêu đời.",
              "Trở thành bà nội trợ thông thái - nắm giữ cán cân sức khỏe gia đình."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="mt-1 bg-sky-500 p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-xl text-slate-700 font-semibold group-hover:text-sky-600 transition-colors leading-tight">{text}</p>
              </motion.div>
            ))}
          </div>
          <button className="mt-12 px-10 py-5 bg-sky-950 text-white rounded-full font-bold hover:bg-black transition-all shadow-xl text-lg w-full sm:w-auto uppercase tracking-tighter">
            Bắt đầu hành trình của bạn
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
