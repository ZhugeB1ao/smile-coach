import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 px-6 bg-slate-900 text-white rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="aspect-3/4 bg-slate-800 rounded-[3rem] flex items-center justify-center text-slate-500 italic p-12 border border-slate-700"
          >
            [Placeholder: Ảnh Chị Huỳnh Ngọc Mai - U50 Năng Lượng]
          </motion.div>
          
          <div className="mt-12 space-y-4">
             <h3 className="text-3xl font-bold text-sky-400 uppercase tracking-tighter">HUỲNH NGOC MAI LÀ AI?</h3>
             <p className="text-slate-400 text-lg leading-relaxed">
               Tôi là Huỳnh Ngọc Mai, 48 tuổi, mẹ của 3 con, sinh sống tại An Giang. Tôi là chủ sở hữu hệ thống đào tạo SmileCoach toàn cầu với hơn 15 năm kinh nghiệm.
             </p>
             <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  <p className="text-sky-400 font-black text-2xl">1,000+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Học viên toàn cầu</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  <p className="text-sky-400 font-black text-2xl">15+ Năm</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Kinh nghiệm chuyên môn</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
           <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              <h4 className="text-2xl font-bold text-white mb-8 border-l-4 border-sky-500 pl-6 uppercase tracking-tighter">Triết lý sống & Giá trị</h4>
              <p className="mb-6 leading-relaxed">
                Tôi lập ra SmileCoach với 2 mục tiêu: <span className="text-sky-400 font-bold">1. Tái cấu trúc cơ thể</span> và <span className="text-sky-400 font-bold">2. Truyền cảm hứng</span>.
              </p>
              <p className="mb-8 leading-relaxed italic text-xl text-white font-medium">
                "Tập luyện là VUA, dinh dưỡng là HOÀNG HẬU - hiểu được triết lý này, tất cả bà mẹ vĩ đại đều có thể dễ dàng tìm lại chính mình."
              </p>
              <p className="mb-6 leading-relaxed">
                Đừng thả trôi bản thân vì lý do "lớn tuổi" hay "bận chăm con". Phụ nữ là tấm gương trong ăn uống, lối sống và thói quen cho cả gia đình. Sức khỏe của con, của chồng, của ba mẹ nằm trong tay người nội trợ.
              </p>
              <p className="mb-8 leading-relaxed">
                Ai cũng chỉ có một lần để sống. Hãy sống xứng đáng, hãy trở thành phiên bản tốt nhất của chính mình để lan tỏa và cống hiến giá trị tuyệt vời của một người phụ nữ.
              </p>
              <div className="p-8 bg-sky-500/10 rounded-4xl border border-sky-500/30 text-sky-400 font-black text-3xl italic tracking-tighter text-center">
                "Tôi - phụ nữ 48 tuổi (U50), tôi làm được thì bạn cũng làm được!"
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
