// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Smile, Frown, Zap, MessageCircle, Heart, Target } from 'lucide-react';
import { Card, SectionTitle, Container } from './SharedUI';

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-20 lg:py-32 bg-slate-50/50">
      <Container>
        <SectionTitle subtitle="CÂU CHUYỆN CỦA CHÚNG TA">CÓ PHẢI BẠN ĐANG...</SectionTitle>
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3 lg:gap-8 xl:gap-12">
          <Card className="transition-colors hover:border-sky-200">
            <Smile className="w-12 h-12 mb-8 lg:w-14 lg:h-14 text-sky-500" aria-hidden="true" />
            <h3 className="mb-4 text-xl font-bold leading-snug lg:text-2xl text-sky-950">Chiếc váy size S vẫn nằm yên trong tủ?</h3>
            <p className="text-sm leading-relaxed text-slate-600 lg:text-base">Bạn rất muốn có body chuẩn để mặc chiếc váy size S đã nằm yên trong tủ quần áo bao lâu nay, nhưng hầu như là vô vọng?</p>
          </Card>
          <Card className="transition-colors hover:border-sky-200">
            <Frown className="w-12 h-12 mb-8 lg:w-14 lg:h-14 text-blue-500" aria-hidden="true" />
            <h3 className="mb-4 text-xl font-bold leading-snug lg:text-2xl text-sky-950">Tự ti mỗi khi đứng trước gương?</h3>
            <p className="text-sm leading-relaxed text-slate-600 lg:text-base">Mỗi lần đứng trước gương, bạn luôn tự ti về thân hình đồ sộ của mình và cảm thấy già hơn so với người bạn đời?</p>
          </Card>
          <Card className="transition-colors hover:border-sky-200">
            <Zap className="w-12 h-12 mb-8 lg:w-14 lg:h-14 text-sky-600" aria-hidden="true" />
            <h3 className="mb-4 text-xl font-bold leading-snug lg:text-2xl text-sky-950">Thèm khát sự thay đổi ngoạn mục?</h3>
            <p className="text-sm leading-relaxed text-slate-600 lg:text-base">Muốn biến tủ đồ nhàm chán đen kịt, tối thui thành màu sắc năng động trẻ trung, chuyển từ size XXL sang size S?</p>
          </Card>
        </div>
        
        {/* Personal Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 lg:p-12 bg-white rounded-[3rem] border border-sky-100 shadow-xl shadow-sky-50 max-w-5xl mx-auto relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-500"><MessageCircle size={120} aria-hidden="true" /></div>
          <div className="relative z-10">
            <p className="mb-6 text-xl italic font-medium leading-relaxed lg:text-2xl text-sky-950">
              "Tôi cũng đã từng giống như bạn. Tôi đã từng bị sồ sề khi sinh bé thứ 3 ở độ tuổi 42, nhìn cái rổ mỡ, cảm giác tự ti và luôn sợ già hơn so với người bạn đời của mình."
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Vì bận chăm bé nhỏ, tôi không có thời gian tập thể dục, nên chỉ tập trung vào việc <span className="font-bold text-sky-600">ĂN ĐÚNG</span> là chủ yếu. Sau khi về cân nặng chuẩn, tôi tranh thủ sắp xếp 45 phút mỗi ngày để tập thêm 5-6 bài vận động siết cơ bụng tạo rãnh 11.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Tôi đã tìm ra phương pháp ăn uống để giảm vòng eo mà <span className="font-semibold">không cần luyện tập quá nhiều</span>, cũng <span className="font-semibold">không sợ đau đớn vì phẫu thuật thẩm mỹ</span>.
            </p>
          </div>
          <p className="mt-6 font-bold tracking-widest text-center uppercase text-sky-600">- Huỳnh Ngọc Mai</p>
        </motion.div>

        {/* Results Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mb-12 md:grid-cols-2"
        >
          <div className="p-8 text-center text-white bg-linear-to-br from-sky-500 to-blue-600 rounded-3xl">
            <Target className="w-12 h-12 mx-auto mb-4 opacity-90" aria-hidden="true" />
            <p className="mb-2 text-4xl font-bold lg:text-5xl">8kg</p>
            <p className="text-lg text-sky-100">Mỡ thừa & độc tố đã loại bỏ</p>
          </div>
          <div className="p-8 text-center text-white bg-linear-to-br from-blue-500 to-sky-600 rounded-3xl">
            <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" aria-hidden="true" />
            <p className="mb-2 text-4xl font-bold lg:text-5xl">2 tháng</p>
            <p className="text-lg text-sky-100">Thời gian đạt kết quả</p>
          </div>
        </motion.div>

        {/* Empathy Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl p-8 mx-auto text-center border lg:p-10 bg-linear-to-r from-sky-50 to-blue-50 rounded-3xl border-sky-100"
        >
          <Heart className="w-10 h-10 mx-auto mb-4 text-rose-400" aria-hidden="true" />
          <p className="mb-4 text-lg leading-relaxed lg:text-xl text-sky-900">
            Tôi biết rằng, ngoài kia có rất nhiều <span className="font-bold">Phụ Nữ</span> sau khi được thiên chức làm mẹ, đã phải chịu rất nhiều nỗi đau, trong đó là <span className="font-bold text-sky-700">RỔ MỠ BỤNG</span> và <span className="font-bold text-sky-700">RẠN DA GHÊ GỚM</span>.
          </p>
          <p className="text-lg font-medium text-sky-800">
            Và tôi đã đóng gói toàn bộ quá trình ăn uống cũng như tập luyện để có kết quả vượt trội một cách ngoạn mục!
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PainPoints;
