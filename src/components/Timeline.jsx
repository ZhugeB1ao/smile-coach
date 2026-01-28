import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Clock, Utensils, Dumbbell, Sparkles, Award } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Timeline = () => {
  const weeks = [
    { 
      week: "TUẦN 1", 
      icon: Utensils,
      title: "BÍ MẬT CÔNG THỨC ĂN UỐNG KHOA HỌC", 
      subtitle: "Để có vòng eo 56 của những ngôi sao hạng A",
      desc: "Tôi sẽ cung cấp cho bạn phương pháp khoa học để ăn uống ĐỦ CHẤT mà không có thời gian nấu nướng."
    },
    { 
      week: "TUẦN 2", 
      icon: Dumbbell,
      title: "BÍ MẬT GIẢM 4KG/3 TUẦN", 
      subtitle: "Một cách an toàn",
      desc: "Hiểu được cách vận động hợp lý để lấy lại vòng eo mà không cần luyện tập quá nhiều."
    },
    { 
      week: "TUẦN 3", 
      icon: Sparkles,
      title: "KIẾN TẠO ĐƯỜNG CONG CƠ THỂ", 
      subtitle: "Theo cách bạn mong muốn",
      desc: "Bạn sẽ có được kết quả tuyệt vời, một nền tảng kiến thức cơ bản để kiểm soát hoàn toàn cân nặng mà không cần mất hàng trăm triệu đồng để can thiệp hút mỡ đau đớn."
    }
  ];

  return (
    <section id="timeline" className="py-20 lg:py-32 bg-sky-600 text-white rounded-[2.5rem] sm:rounded-[4rem] mx-2 sm:mx-4 my-20">
      <Container>
        <SectionTitle subtitle="LỘ TRÌNH 21 NGÀY">THAY ĐỔI VÓC DÁNG NGOẠN MỤC</SectionTitle>
        
        {/* Timeline với layout xen kẽ */}
        <div className="mb-16 space-y-12 lg:space-y-16">
          {weeks.map((step, i) => {
            const IconComponent = step.icon;
            const isEven = i % 2 === 0;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center justify-center overflow-hidden border bg-white/10 backdrop-blur-sm rounded-4xl border-white/20 aspect-4/3">
                    <p className="text-lg italic text-white/40">[Hình ảnh minh họa Tuần {i + 1}]</p>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`${isEven ? 'lg:pl-6' : 'lg:pr-6'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center text-xl font-black bg-white rounded-full shadow-2xl shrink-0 w-14 h-14 text-sky-600">
                        {i + 1}
                      </div>
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-8 h-8 text-sky-200" />
                        <span className="text-sm font-black tracking-widest uppercase text-sky-200">{step.week}</span>
                      </div>
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold leading-tight lg:text-3xl">{step.title}</h3>
                    <p className="mb-4 text-lg italic font-medium text-sky-100">{step.subtitle}</p>
                    <p className="text-base leading-relaxed text-white/80 lg:text-lg">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Result After 3 Weeks */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-white/20 to-white/10 backdrop-blur-xl p-8 lg:p-12 rounded-4xl sm:rounded-[3rem] border border-white/30 mb-16"
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Result Image - Larger */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-center overflow-hidden border bg-white/10 backdrop-blur-sm rounded-4xl border-white/20 aspect-4/3">
                <p className="px-4 text-lg italic text-center text-white/40">[Hình ảnh kết quả sau 3 tuần]</p>
              </div>
            </div>
            
            {/* Result Content */}
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-2xl lg:mx-0">
                <Award className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="mb-6 text-3xl font-bold lg:text-4xl">
                SAU 3 TUẦN, bạn sẽ...
              </h3>
              <p className="text-lg leading-relaxed lg:text-xl text-white/90">
                Trở nên <span className="font-bold text-sky-200">SĂN CHẮC HƠN</span>, năng lượng hơn, và luôn luôn được bạn bè thu hút bởi sự thay đổi và trầm trồ với <span className="font-bold text-sky-200">vóc dáng mà bất kỳ người phụ nữ nào cũng mong muốn</span>.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] text-sky-950 text-center shadow-3xl shadow-sky-900/50"
          >
            <p className="mb-4 text-lg font-bold line-through opacity-50 sm:text-xl">HỌC PHÍ GỐC: 10,500,000Đ</p>
            <h2 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl text-sky-600">MIỄN PHÍ 0Đ</h2>
            <p className="mb-10 text-base font-bold leading-relaxed uppercase sm:text-xl text-slate-600">Trải nghiệm khóa học 2 ngày đầu tiên để thấy sự thay đổi!</p>
            <p className="flex items-center justify-center gap-2 mb-10 text-base font-black text-red-500 sm:text-lg animate-bounce">
              <Clock className="w-6 h-6"/> CHỈ CÒN 20 SUẤT CUỐI CÙNG TRONG THÁNG 3
            </p>
            <button className="w-full px-12 py-5 text-xl font-black text-white transition-all rounded-full shadow-2xl sm:w-auto sm:py-6 bg-sky-500 sm:text-2xl hover:bg-sky-600 hover:scale-105 shadow-sky-200">
              ĐĂNG KÝ NGAY BÂY GIỜ
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
