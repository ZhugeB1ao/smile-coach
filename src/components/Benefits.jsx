import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Briefcase, Heart, Users } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Benefits = () => {
  const benefits = [
    {
      title: "Tự tin hơn trong công việc",
      desc: "Giảm cân để tự tin hơn, tỏa sáng trong mọi cuộc họp và giao tiếp."
    },
    {
      title: "Cơ thể cân đối, tràn đầy năng lượng",
      desc: "Lúc nào cũng tràn đầy năng lượng để làm bất cứ việc gì bạn muốn."
    },
    {
      title: "Quyến rũ hơn, hạnh phúc hơn",
      desc: "Tự tin và quyến rũ hơn trong chuyện phòng the, giữ lửa hạnh phúc gia đình."
    },
    {
      title: "Thân hình rắn chắc, năng động",
      desc: "Giảm mỡ tăng cơ để có được thân hình rắn chắc, tự tin yêu đời trong cuộc sống."
    },
    {
      title: "Bà nội trợ thông thái",
      desc: "Nắm được bí mật của thức ăn - người nắm giữ cán cân sức khỏe cho bản thân và cả gia đình."
    }
  ];

  return (
    <section id="benefits" className="py-20 lg:py-32">
      <Container>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="mb-4 font-semibold tracking-widest uppercase text-sky-600">Chương trình đặc biệt</p>
          <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl text-sky-950">
            THAY ĐỔI TƯ DUY ĂN UỐNG,<br />
            <span className="text-sky-600">KIỂM SOÁT CÂN NẶNG TRỌN ĐỜI</span>
          </h2>
          <p className="text-xl italic font-medium lg:text-2xl text-slate-600">
            "Thay Thói Quen, Đổi Sức Khỏe."
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-12 mb-16 lg:flex-row lg:gap-20 xl:gap-32">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute w-40 h-40 rounded-full opacity-50 -top-10 -left-10 bg-sky-100 blur-3xl" />
            <div className="bg-slate-200 w-full aspect-square rounded-4xl sm:rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center text-slate-400 italic p-10 relative z-10 border-4 border-white">
              [Placeholder: Ảnh Chị Mai đang tư vấn hoặc rãnh bụng 11]
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionTitle subtitle="BẠN SẼ NHẬN ĐƯỢC GÌ?">GIÁ TRỊ CHƯƠNG TRÌNH</SectionTitle>
            <div className="space-y-5 lg:space-y-6">
              {benefits.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-2 mt-1 text-white transition-transform shrink-0 bg-sky-500 rounded-xl group-hover:scale-110">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-tight transition-colors lg:text-xl text-slate-800 group-hover:text-sky-600">{item.title}</p>
                    <p className="mt-1 text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-sky-50 to-blue-50 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 border border-sky-100"
        >
          <h3 className="mb-8 text-2xl font-bold text-center lg:text-3xl text-sky-950">
            Chương trình phù hợp với bạn nếu bạn là...
          </h3>
          <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
            <div className="p-6 text-center transition-shadow bg-white shadow-lg rounded-2xl shadow-sky-100/50 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-sky-950">Người Nội Trợ</h4>
              <p className="text-sm text-slate-600">Bận rộn với gia đình nhưng vẫn muốn chăm sóc bản thân</p>
            </div>
            <div className="p-6 text-center transition-shadow bg-white shadow-lg rounded-2xl shadow-sky-100/50 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-sky-950">Nhân Viên Văn Phòng</h4>
              <p className="text-sm text-slate-600">Ngồi nhiều, ít vận động và muốn cải thiện sức khỏe</p>
            </div>
            <div className="p-6 text-center transition-shadow bg-white shadow-lg rounded-2xl shadow-sky-100/50 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-sky-950">CEO / Doanh Nhân</h4>
              <p className="text-sm text-slate-600">Bận rộn không có thời gian chăm sóc bản thân</p>
            </div>
          </div>

          {/* Time Commitment */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-6 text-center text-white bg-linear-to-r from-sky-600 to-blue-600 rounded-2xl lg:p-8"
          >
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="mb-2 text-lg lg:text-xl">Bạn chỉ cần đầu tư</p>
            <p className="mb-2 text-4xl font-bold lg:text-5xl">30 phút mỗi sáng</p>
            <p className="text-lg text-sky-100">để chúng ta gặp nhau và bắt đầu hành trình thay đổi!</p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="px-10 py-5 text-lg font-bold tracking-tighter text-white uppercase transition-all rounded-full shadow-xl bg-sky-950 hover:bg-black">
            Bắt đầu hành trình của bạn
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
