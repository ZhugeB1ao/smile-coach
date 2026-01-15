import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Smile, Briefcase, Zap, MessageCircle } from 'lucide-react';
import { Card, SectionTitle, Container } from './SharedUI';

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-20 lg:py-32 bg-slate-50/50">
      <Container>
        <SectionTitle subtitle="CÂU CHUYỆN CỦA CHÚNG TA">CÓ PHẢI BẠN ĐANG...</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 mb-16">
          <Card className="hover:border-sky-200 transition-colors">
            <Smile className="w-12 h-12 lg:w-14 lg:h-14 text-sky-500 mb-8" />
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-sky-950 leading-snug">Chiếc váy size S vẫn nằm yên trong tủ?</h3>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">Bạn rất muốn có body chuẩn để mặc những bộ đồ yêu thích nhưng hầu như là vô vọng sau bao nhiêu nỗ lực?</p>
          </Card>
          <Card className="hover:border-sky-200 transition-colors">
            <Briefcase className="w-14 h-14 text-blue-500 mb-8" />
            <h3 className="text-2xl font-bold mb-4 text-sky-950 leading-snug">Tự ti mỗi khi đứng trước gương?</h3>
            <p className="text-slate-600 leading-relaxed">Lo sợ bản thân sồ sề, nhìn "rổ mỡ" và luôn cảm thấy mình già hơn so với người bạn đời của mình?</p>
          </Card>
          <Card className="hover:border-sky-200 transition-colors">
            <Zap className="w-14 h-14 text-sky-600 mb-8" />
            <h3 className="text-2xl font-bold mb-4 text-sky-950 leading-snug">Thèm khát sự thay đổi ngoạn mục?</h3>
            <p className="text-slate-600 leading-relaxed">Muốn biến tủ đồ đen kịt tối thui thành những màu sắc năng động, chuyển từ XXL sang size S một cách an toàn?</p>
          </Card>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-12 bg-white rounded-[3rem] border border-sky-100 shadow-xl shadow-sky-50 text-center max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-500"><MessageCircle size={120}/></div>
          <p className="text-2xl text-sky-950 font-medium italic relative z-10 leading-relaxed">
            "Tôi cũng đã từng giống như bạn. Tôi từng bị sồ sề khi sinh bé thứ 3 ở tuổi 42, nhìn cái rổ mỡ, cảm giác tự ti và luôn sợ già. Tôi đã tìm ra phương pháp ĂN ĐÚNG để loại bỏ 8kg mỡ thừa chỉ sau 2 tháng mà không cần phẫu thuật."
          </p>
          <p className="mt-6 text-sky-600 font-bold uppercase tracking-widest">- Huỳnh Ngọc Mai</p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PainPoints;
