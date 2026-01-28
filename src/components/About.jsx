import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Target, Users, Clock, Sparkles } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-900 text-white rounded-t-[2.5rem] sm:rounded-t-[4rem]">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 text-sm font-bold tracking-widest uppercase text-sky-400"
          >
            Người sáng lập SmileCoach
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold text-white uppercase md:text-5xl"
          >
            HUỲNH NGỌC MAI, TÔI LÀ AI?
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-12 mb-16 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left - Photo & Stats */}
          <div className="w-full lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-3/4 bg-slate-800 rounded-4xl sm:rounded-[3rem] flex items-center justify-center text-slate-500 italic p-8 border border-slate-700 mb-8"
            >
              [Placeholder: Ảnh Chị Huỳnh Ngọc Mai - U50 Năng Lượng]
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 text-center border lg:p-6 bg-slate-800 rounded-2xl border-slate-700">
                <p className="text-2xl font-black text-sky-400 lg:text-3xl">1,000+</p>
                <p className="mt-1 text-xs font-bold tracking-widest uppercase text-slate-500">Học viên toàn cầu</p>
              </div>
              <div className="p-5 text-center border lg:p-6 bg-slate-800 rounded-2xl border-slate-700">
                <p className="text-2xl font-black text-sky-400 lg:text-3xl">15+</p>
                <p className="mt-1 text-xs font-bold tracking-widest uppercase text-slate-500">Năm kinh nghiệm</p>
              </div>
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className="w-full lg:w-3/5">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="mb-6 text-xl font-medium text-white lg:text-2xl">
                Xin chào các bạn,
              </p>
              
              <p className="mb-6 leading-relaxed text-slate-300">
                Tôi là <span className="font-bold text-sky-400">Huỳnh Ngọc Mai</span>, 48 tuổi (1978), tôi đã có gia đình và 3 con. Hiện tại đang sinh sống và làm việc tại <span className="font-semibold text-white">Tri Tôn, An Giang</span>.
              </p>

              <p className="mb-6 leading-relaxed text-slate-300">
                Lập ra website <span className="font-bold text-sky-400">"www.smilecoach.vn"</span>, tôi có 2 mục tiêu chính:
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-4 border bg-slate-800/50 rounded-xl border-slate-700">
                  <Target className="w-8 h-8 shrink-0 text-sky-400" />
                  <span className="font-bold text-white">1. TÁI CẤU TRÚC CƠ THỂ</span>
                </div>
                <div className="flex items-center gap-3 p-4 border bg-slate-800/50 rounded-xl border-slate-700">
                  <Sparkles className="w-8 h-8 shrink-0 text-sky-400" />
                  <span className="font-bold text-white">2. TRUYỀN CẢM HỨNG</span>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-slate-300">
                Hiện tại, tôi không thừa hay thiếu cân, sức khỏe và năng lượng tuyệt vời. Và cũng bởi vì là một HLV sức khỏe cá nhân, nên việc kiểm soát cân nặng và sức khỏe thì không vấn đề gì phải lo lắng.
              </p>

              <p className="mb-6 leading-relaxed text-slate-300">
                Cách nay hơn 15 năm, là một nhân viên văn phòng, với tính chất và thói quen ăn uống không lành mạnh, thời điểm 32 tuổi tôi cũng gặp khá nhiều vấn đề sức khỏe như <span className="font-semibold text-white">ĐẠI TRÀNG (táo bón)</span>, thiếu năng lượng trầm trọng, mệt mỏi uể oải hay ngáp vặt, khớp nhẹ, đặc biệt làn da cực kỳ xấu nên ảnh hưởng đến năng suất làm việc.
              </p>

              <p className="leading-relaxed text-slate-300">
                May mắn, biết đến cộng đồng sống khỏe sống lành mạnh, tôi đã học và điều chỉnh thói quen ăn uống, thay đổi lối sống sinh hoạt không tốt của mình theo hướng lành mạnh hơn. Sau một thời gian ngắn tôi đã cải thiện khá nhiều: năng lượng hơn, làn da tươi sáng hơn... từ đó tôi đã chung tay lan tỏa thông điệp, kiến thức, sự trải nghiệm để giúp nhiều người hơn nữa trong việc kiểm soát cân nặng và vóc dáng trong hơn 15 năm qua! <span className="font-medium text-sky-400">Tôi biết ơn và yêu công việc này.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 border border-slate-700 mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-center text-white lg:text-3xl">
            Những suy nghĩ <span className="text-sky-400">cần thay đổi...</span>
          </h3>

          <div className="space-y-6 leading-relaxed text-slate-300">
            <p>
              Là một người phụ nữ trung niên, có 3 con, tôi hiểu được sự lão hóa theo thời gian của cơ thể về sức khỏe, sắc đẹp, năng lượng... từ đó ảnh hưởng đến chất lượng cuộc sống bản thân, gia đình.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-6 border bg-slate-900/50 rounded-2xl border-slate-600">
                <p className="italic text-slate-400">
                  "Có rất nhiều trường hợp tự ti 'đã lớn tuổi', nên an phận quanh quẩn bên căn bếp gia đình, lam lũ bên ruộng đồng, tất bật bán buôn mà quên đi bản thân mình..."
                </p>
              </div>
              <div className="p-6 border bg-slate-900/50 rounded-2xl border-slate-600">
                <p className="italic text-slate-400">
                  "Họ thả trôi cho việc chăm lo bản thân, chỉ biết tập trung lo cho chồng, chăm cho con, vì họ nghĩ rằng như vậy là hạnh phúc!"
                </p>
              </div>
            </div>

            <p className="py-4 text-lg font-semibold text-center text-white">
              Và điều gì đến sẽ đến...
            </p>

            <div className="p-6 border bg-sky-500/10 rounded-2xl border-sky-500/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">✗</span>
                  <span>Không thể có 1 cơ thể khỏe mạnh trên 1 thân hình đầy mỡ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">✗</span>
                  <span>Không thể có 1 sự tự tin trên thân hình quá khổ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">✗</span>
                  <span>Không thể có 1 năng lượng đỉnh cao trên một thân thể nặng nề</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">✗</span>
                  <span>Không thể có hạnh phúc gia đình trọn vẹn trên một cơ thể béo phì đầy bệnh tật</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-center text-white lg:text-3xl">
            Giải pháp là <span className="text-sky-400">THÓI QUEN MỚI</span>
          </h3>

          <p className="max-w-4xl mx-auto mb-10 leading-relaxed text-center text-slate-300">
            Thật ra, nếu hiểu và có <span className="font-bold text-sky-400">KIẾN THỨC</span> về dinh dưỡng thì để kiểm soát cân nặng và chăm sóc sức khỏe chủ động cho bản thân là không hề khó, quan trọng là đúng phương pháp khoa học, đúng giáo án, phù hợp từng cá nhân hóa... và điều cốt lõi đó là <span className="font-bold text-white">THÓI QUEN!</span>
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {[
              "Ăn uống có KIẾN THỨC",
              "Ăn uống có CHỦ ĐỘNG",
              "Ăn uống có CHỦ ĐÍCH",
              "Ăn uống có MỤC TIÊU"
            ].map((item, i) => (
              <div key={i} className="p-4 text-center border lg:p-5 bg-slate-800 rounded-2xl border-slate-700">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-sky-400" />
                <p className="text-sm font-semibold text-white lg:text-base">{item}</p>
              </div>
            ))}
          </div>

          <p className="mb-8 text-center text-slate-300">Và để thay đổi thói quen, cần có:</p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Target, label: "1. Kiến thức" },
              { icon: Users, label: "2. Môi trường" },
              { icon: Heart, label: "3. Người đồng hành" },
              { icon: Clock, label: "4. Thời gian" }
            ].map((item, i) => (
              <div key={i} className="p-5 text-center border lg:p-6 bg-sky-500/10 rounded-2xl border-sky-500/20">
                <item.icon className="w-10 h-10 mx-auto mb-3 text-sky-400" />
                <p className="font-bold text-sky-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-sky-600 to-blue-700 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 text-center mb-16"
        >
          <p className="mb-6 text-2xl font-bold leading-relaxed text-white lg:text-3xl">
            "Tập luyện là <span className="text-sky-200">VUA</span>, dinh dưỡng là <span className="text-sky-200">HOÀNG HẬU</span>"
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-sky-100">
            Hiểu được triết lý này, thì tất cả mọi người, đặc biệt phụ nữ trung niên, những người mẹ vĩ đại đều có thể dễ dàng <span className="font-bold text-white">"tìm lại chính mình"</span>.
          </p>
        </motion.div>

        {/* Responsibility Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 rounded-4xl lg:rounded-[3rem] p-8 lg:p-12 border border-slate-700 mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-white lg:text-3xl">
            Tinh thần <span className="text-sky-400">TRÁCH NHIỆM</span>
          </h3>

          <div className="max-w-4xl mx-auto space-y-6 leading-relaxed text-slate-300">
            <p className="text-center">
              Hơn ai hết, là người phụ nữ, là người nội trợ, là bếp chính trong gia đình, là người nắm cán cân sức khỏe của gia đình thì thiết nghĩ hơn ai hết, bản thân chúng ta cần có tinh thần <span className="font-bold text-white">TRÁCH NHIỆM</span>.
            </p>

            <div className="p-6 text-center border bg-slate-900/50 rounded-2xl border-slate-600">
              <p className="text-lg font-semibold text-sky-400">
                "Những gì bạn ăn là con của bạn ăn, chồng của bạn ăn và ba mẹ của bạn ăn!"
              </p>
            </div>

            <p className="text-center">
              <span className="font-bold text-sky-400">Phụ nữ là tấm gương:</span> tấm gương trong ăn uống, tấm gương trong lối sống sinh hoạt, tấm gương trong lối suy nghĩ lối tư duy, tấm gương trong THÓI QUEN hàng ngày... cho các thành viên trong gia đình đặc biệt là con trẻ.
            </p>
          </div>
        </motion.div>

        {/* Value & Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-6 text-2xl font-bold text-white lg:text-3xl">
            GIÁ TRỊ SỐNG
          </h3>
          <p className="max-w-4xl mx-auto mb-8 leading-relaxed text-slate-300">
            Dù ở bất kỳ độ tuổi nào, dù giới tính nam hay nữ... đã là con người đều có giá trị riêng trên cuộc đời này. Cho nên, liên tục học hỏi và phấn đấu không ngừng để lan tỏa điều tích cực nhất giúp mình giúp người giúp cộng đồng, xã hội... không dừng lại!
          </p>
          <p className="max-w-4xl mx-auto leading-relaxed text-slate-300">
            Và hãy sống có giá trị, hãy trở thành phiên bản tốt hơn của chính mình để lan tỏa, cho đi, phụng sự và cống hiến những giá trị tuyệt vời của một người phụ nữ. Đời người ai cũng chỉ có 1 lần để sống, hãy sống xứng đáng, hãy sống cuộc đời tốt nhất có thể. <span className="text-sky-400">Đó cũng chính là mục tiêu theo đuổi trên hành trình cuộc đời mang tên Huỳnh Ngọc Mai.</span>
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center border aspect-square bg-slate-800 rounded-2xl border-slate-700">
              <p className="text-sm italic text-slate-500">[Ảnh {i}]</p>
            </div>
          ))}
        </div>

        {/* Final Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 lg:p-12 bg-sky-500/10 rounded-4xl lg:rounded-[3rem] border border-sky-500/30 text-center"
        >
          <p className="text-2xl italic font-black leading-relaxed text-sky-400 lg:text-4xl">
            "Tôi - phụ nữ 48 tuổi (U50), tôi làm được thì ai cũng sẽ làm được!"
          </p>
          <p className="mt-4 font-bold tracking-widest uppercase text-slate-400">- Huỳnh Ngọc Mai -</p>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
