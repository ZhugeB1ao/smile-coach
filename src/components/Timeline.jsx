import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { SectionTitle } from './SharedUI';

const Timeline = () => {
  return (
    <section className="py-32 px-6 bg-sky-600 text-white rounded-[4rem] mx-4 my-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="LỘ TRÌNH 21 NGÀY">THAY ĐỔI VÓC DÁNG NGOẠN MỤC</SectionTitle>
        
        <div className="grid lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 pointer-events-none" />
          
          {[
            { week: "TUẦN 1", title: "BÍ MẬT CÔNG THỨC ĂN UỐNG", desc: "Công thức khoa học để ăn uống đủ chất mà không cần thời gian nấu nướng. Có ngay vòng eo 56 của ngôi sao hạng A." },
            { week: "TUẦN 2", title: "BÍ MẬT GIẢM 4KG AN TOÀN", desc: "Hiểu cách vận động hợp lý để lấy lại vòng eo mà không cần luyện tập quá nhiều hay khổ cực." },
            { week: "TUẦN 3", title: "KIẾN TẠO ĐƯỜNG CONG", desc: "Kiểm soát hoàn toàn cân nặng tại nhà, không cần tốn hàng trăm triệu cho hút mỡ hay thuốc giảm cân." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 relative z-10 text-center"
            >
              <div className="w-16 h-16 bg-white text-sky-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-2xl">
                {i+1}
              </div>
              <h4 className="text-sky-200 font-black mb-4 tracking-widest uppercase">{step.week}</h4>
              <h3 className="text-2xl font-bold mb-6 leading-tight">{step.title}</h3>
              <p className="text-white/80 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[4rem] text-sky-950 text-center shadow-3xl shadow-sky-900/50"
          >
            <p className="text-xl font-bold mb-4 line-through opacity-50">HỌC PHÍ GỐC: 10,500,000Đ</p>
            <h2 className="text-6xl font-black mb-6 text-sky-600 tracking-tighter">MIỄN PHÍ 0Đ</h2>
            <p className="text-xl font-bold mb-10 text-slate-600 leading-relaxed uppercase">Trải nghiệm khóa học 2 ngày đầu tiên để thấy sự thay đổi!</p>
            <p className="text-red-500 font-black mb-10 text-lg flex items-center justify-center gap-2 animate-bounce">
              <Clock className="w-6 h-6"/> CHỈ CÒN 20 SUẤT CUỐI CÙNG TRONG THÁNG 3
            </p>
            <button className="px-12 py-6 bg-sky-500 text-white rounded-full font-black text-2xl hover:bg-sky-600 transition-all hover:scale-105 shadow-2xl shadow-sky-200">
              ĐĂNG KÝ NGAY BÂY GIỜ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
