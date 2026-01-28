import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Gift, Trophy, Clock, Zap, Users, Calendar, Star } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Offer = () => {
  return (
    <section id="offer" className="py-20 lg:py-32 bg-slate-50/50">
      <Container>
        <SectionTitle subtitle="ƯU ĐÃI ĐẶC BIỆT">BONUS DÀNH CHO BẠN</SectionTitle>
        
        {/* Bonus Section - PT Gym */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-sky-50 to-blue-50 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 border border-sky-100 shadow-xl shadow-sky-50 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Gift size={150} className="text-sky-500" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 text-sm font-black tracking-wider text-white uppercase rounded-full bg-sky-500">
                <Star className="w-4 h-4" /> ĐẶC BIỆT
              </div>
              <div className="px-4 py-2 text-sm font-black tracking-wider text-white uppercase rounded-full bg-sky-600">
                BONUS FREE 100%
              </div>
            </div>
            
            <h2 className="mb-6 text-2xl font-bold leading-tight lg:text-4xl text-sky-950">
              PT Gym 1:1 đồng hành trong suốt<br className="hidden lg:block" /> hành trình chuyển đổi vóc dáng
            </h2>
            
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              {/* Coach Info */}
              <div className="w-full lg:w-1/2">
                <div className="p-6 bg-white border shadow-lg rounded-2xl lg:p-8 shadow-sky-100/50 border-sky-100">
                  <div className="flex items-start gap-6">
                    {/* Coach Image Placeholder */}
                    <div className="flex items-center justify-center w-24 h-24 border-2 shrink-0 lg:w-32 lg:h-32 bg-sky-100 rounded-2xl border-sky-200">
                      <Trophy className="w-12 h-12 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold lg:text-2xl text-sky-950">HLV Bùi Thái Châu</h3>
                      <p className="mb-3 font-medium text-sky-600">Học trò chính quy của nhà vô địch Lý Đức</p>
                      <p className="leading-relaxed text-slate-600">
                        Sẵn sàng hỗ trợ đồng hành anh chị em <span className="font-bold text-sky-600">đến trọn đời</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coach Images Placeholder */}
              <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
                <div className="flex items-center justify-center bg-white border shadow-lg rounded-2xl aspect-square border-sky-100 shadow-sky-50">
                  <p className="px-4 text-sm italic text-center text-sky-300">[Hình HLV 1]</p>
                </div>
                <div className="flex items-center justify-center bg-white border shadow-lg rounded-2xl aspect-square border-sky-100 shadow-sky-50">
                  <p className="px-4 text-sm italic text-center text-sky-300">[Hình HLV 2]</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 lg:p-12 rounded-4xl lg:rounded-[3rem] border border-sky-100 shadow-xl shadow-sky-50 text-center mb-12"
          >
            <p className="mb-4 text-lg text-slate-500">Ban đầu, chương trình này có mức học phí là</p>
            <p className="mb-6 text-4xl font-black line-through lg:text-5xl text-slate-300">12,000,000đ/tháng</p>
            <p className="max-w-3xl mx-auto leading-relaxed text-slate-600">
              Để giúp bạn sở hữu được những điều trên, thậm chí <span className="font-bold text-sky-600">ĐẸP HƠN THỜI CON GÁI</span>, 
              tiết kiệm thời gian đi đến phòng tập hay những giải pháp can thiệp dao kéo đau đớn và lo âu.
            </p>
          </motion.div>

          {/* Special Offer Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-sky-600 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10"><Zap size={80} /></div>
              <div className="absolute bottom-10 right-10"><Gift size={100} /></div>
            </div>

            <div className="relative z-10">
              <div className="mb-10 text-center">
                <p className="mb-4 font-semibold tracking-widest uppercase text-sky-200">
                  🎉 Nhân dịp kỷ niệm 15 năm hành trình HLV chăm sóc sức khỏe cá nhân
                </p>
                <h3 className="mb-4 text-2xl font-bold lg:text-4xl">
                  TUY NHIÊN, toàn bộ chương trình sẽ là...
                </h3>
              </div>

              {/* Offer Items */}
              <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
                <div className="p-6 text-center transition-colors border bg-white/10 backdrop-blur-sm rounded-3xl border-white/20 hover:bg-white/15">
                  <Calendar className="w-10 h-10 mx-auto mb-4 text-sky-200" />
                  <h4 className="mb-2 text-lg font-bold">Trải nghiệm thử</h4>
                  <p className="text-sky-100">Khóa học ONLINE <span className="font-bold text-white">2 ngày</span></p>
                </div>
                <div className="p-6 text-center transition-colors border bg-white/10 backdrop-blur-sm rounded-3xl border-white/20 hover:bg-white/15">
                  <Users className="w-10 h-10 mx-auto mb-4 text-sky-200" />
                  <h4 className="mb-2 text-lg font-bold">HOẶC Tư vấn</h4>
                  <p className="text-sky-100">OFFLINE <span className="font-bold text-white">hoàn toàn miễn phí!</span></p>
                </div>
                <div className="p-6 text-center transition-colors border bg-white/10 backdrop-blur-sm rounded-3xl border-white/20 hover:bg-white/15">
                  <Trophy className="w-10 h-10 mx-auto mb-4 text-sky-200" />
                  <h4 className="mb-2 text-lg font-bold">Học ĂN 30 NGÀY</h4>
                  <p className="text-sky-100"><span className="font-bold text-white">CAM KẾT ĐẦU RA</span> + quà tặng hấp dẫn!</p>
                </div>
              </div>

              {/* Free Announcement */}
              <div className="p-8 mb-8 text-center bg-white shadow-xl rounded-4xl lg:p-10">
                <p className="mb-2 text-lg font-bold text-sky-600">Bạn không nghe nhầm đâu!</p>
                <h2 className="mb-4 text-4xl font-black lg:text-6xl text-sky-600">HOÀN TOÀN MIỄN PHÍ!</h2>
                <p className="max-w-2xl mx-auto leading-relaxed text-slate-600">
                  Và đây là chương trình rất hiếm khi tôi tổ chức với số lượng học viên có hạn.
                </p>
              </div>

              {/* Urgency */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-6 mb-8 text-center border bg-sky-700/50 border-sky-400/30 rounded-3xl"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-sky-200 animate-pulse" />
                  <p className="text-lg font-bold uppercase text-sky-100">Số lượng có hạn!</p>
                </div>
                <p className="text-xl font-bold text-white lg:text-2xl">
                  Chương trình sẽ khép lại khi có <span className="underline text-sky-200 underline-offset-4">20 học viên</span> tham dự
                </p>
              </motion.div>

              {/* CTA */}
              <div className="text-center">
                <p className="mb-6 text-lg text-sky-100">
                  Hãy nhanh chóng bấm vào nút bên dưới để trở thành một trong những người nhanh nhất giành vé tham dự!
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 text-xl font-black text-white transition-all rounded-full shadow-2xl lg:py-6 bg-sky-950 lg:text-2xl hover:bg-black"
                >
                  ĐĂNG KÝ NGAY BÂY GIỜ
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Offer;
