import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "NGUYỄN THỊ TUYẾT THANH", 
      job: "Nội trợ", 
      highlight: "Giảm cân & cải thiện xương khớp",
      content: "Nhờ tham gia lớp học ăn mà tôi đã giảm cân và cải thiện được vấn đề xương khớp nặng của mình, sau bao năm tưởng chừng như vô vọng chạy chữa khắp nơi. Cảm ơn cô Mai rất nhiều." 
    },
    { 
      name: "ĐOÀN THỊ KIM CƯƠNG", 
      job: "Dược sĩ", 
      highlight: "Giảm 12kg & hết táo bón",
      content: "Mặc dù là Dược sĩ, nhưng tôi vẫn không tự kiểm soát được cân nặng của mình. Thừa cân và táo bón. May mắn được người bạn chia sẻ tôi đến với lớp học ăn của SMILECOACH, tôi đã giảm được 12kg và cải thiện tình trạng táo bón một cách tự nhiên. Vô cùng biết ơn chương trình, đặc biệt là biết ơn A/c HLV Mai - Châu đã đồng hành cùng em trong suốt thời gian qua." 
    },
    { 
      name: "ĐINH THỊ NGỪNG", 
      job: "Buôn bán tự do", 
      highlight: "Giảm 8kg & đẹp da",
      content: "Nghề chính là bán bánh bò, nên thức khuya dậy sớm, không hiểu cách ăn uống dẫn đến thừa cân và bệnh tật, nặng nhất là đau nhức xương sống. May mắn được người chị dâu là công an chia sẻ nên tin tưởng và trải nghiệm thử, tôi đã giảm 8kg và cải thiện hoàn toàn vấn đề sức khỏe của mình. Đặc biệt, cải thiện luôn làn da. Thật vui sướng lắm!" 
    },
    { 
      name: "NGUYỄN VĂN CHÍ", 
      job: "Y sĩ", 
      highlight: "Tăng 5kg & hồi phục 90%",
      content: "Là một y sĩ, tôi nghĩ là mình biết tất cả, nhưng mọi chuyện đổ vỡ khi tôi rơi vào hoàn cảnh suy nhược cơ thể trầm trọng, chỉ khoảng 6 tháng suy nhược, mất ngủ, ăn không được… tôi đã tụt hơn 9kg. Vào một ngày đẹp trời, may mắn biết được chương trình học ăn tại SMILECOACH. Chưa tròn 1 tuần trải nghiệm, tôi đã dần khỏe lên rất nhiều. Hiện tại, tôi đã tăng được 5kg và cải thiện hơn 90% vấn đề sức khỏe của mình." 
    },
    { 
      name: "NGUYỄN BÙI GIA HIẾU", 
      job: "Lao động tự do", 
      highlight: "Tăng 8kg & bỏ game, thuốc lá",
      content: "Do không ý thức được sức khỏe nên mê game, hút thuốc, thức khuya… dẫn đến cơ thể suy nhược và thiếu cân trầm trọng. May mắn được mẹ dẫn đến môi trường lành mạnh, tôi đã tham gia lớp học ăn và tăng được 8kg và bỏ được thói quen xấu là game và thuốc lá, ngủ sớm hơn, sống lành mạnh hơn." 
    },
    { 
      name: "ĐẶNG THỊ GIÀO", 
      job: "Thợ nấu, Kinh doanh", 
      highlight: "Tái sinh năng lượng & hết nám",
      content: "Mặc dù U40, nhưng vô cùng mệt mỏi uể oải, không biết rồi có thể bám trụ công việc kinh doanh bếp đến khi nào. May mắn được biết đến chương trình học ăn tại SM, dần lột xác và tái sinh năng lượng, đặc biệt là cải thiện làn da xạm nám của mình tưởng chừng không lối thoát. Vô cùng biết ơn chương trình và các HLV. Yêu lắm!" 
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 lg:py-32">
      <Container>
        <SectionTitle subtitle="THÀNH CÔNG TỪ HỌC VIÊN">HỌ ĐÃ LÀM ĐƯỢC - BẠN CŨNG VẬY!</SectionTitle>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {testimonials.map((feed, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-6 bg-white border shadow-xl rounded-4xl lg:p-8 shadow-sky-50 border-sky-100"
            >
              {/* Header with avatar and info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center text-xl font-bold shrink-0 w-14 h-14 bg-sky-100 rounded-2xl text-sky-600">
                  {feed.name[0]}
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 text-sm font-black tracking-tight uppercase text-sky-950">{feed.name}</h4>
                  <p className="text-xs font-bold tracking-widest uppercase text-sky-600">{feed.job}</p>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>

              {/* Highlight badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-bold rounded-full bg-sky-100 text-sky-700">
                  ✨ {feed.highlight}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex-1 mb-6">
                <Quote className="absolute w-8 h-8 -top-2 -left-2 text-sky-100" />
                <p className="pl-6 leading-relaxed text-slate-600">{feed.content}</p>
              </div>

              {/* Before/After Image Placeholder */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center border bg-slate-100 rounded-xl aspect-4/3 border-slate-200">
                  <p className="mb-1 text-xs font-bold uppercase text-slate-400">Trước</p>
                  <p className="text-xs italic text-slate-300">[Hình ảnh]</p>
                </div>
                <div className="flex flex-col items-center justify-center border bg-sky-50 rounded-xl aspect-4/3 border-sky-200">
                  <p className="mb-1 text-xs font-bold uppercase text-sky-500">Sau</p>
                  <p className="text-xs italic text-sky-300">[Hình ảnh]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-xl font-medium lg:text-2xl text-sky-950">
            Bạn cũng có thể trở thành <span className="font-bold text-sky-600">câu chuyện thành công</span> tiếp theo!
          </p>
          <button className="px-10 py-5 text-lg font-bold tracking-tight text-white uppercase transition-all rounded-full shadow-xl bg-sky-500 hover:bg-sky-600 shadow-sky-200">
            Tôi muốn thay đổi ngay
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
