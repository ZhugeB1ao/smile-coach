import React from 'react';
import { Star } from 'lucide-react';
import { Card, SectionTitle } from './SharedUI';

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="THÀNH CÔNG TỪ HỌC VIÊN">HỌ ĐÃ LÀM ĐƯỢC - BẠN CŨNG VẬY!</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "NGUYỄN THỊ TUYẾT THANH", job: "Nội trợ", content: "Giảm cân và cải thiện vấn đề xương khớp nặng sau bao năm vô vọng chạy chữa khắp nơi." },
            { name: "ĐOÀN THỊ KIM CƯƠNG", job: "Dược sĩ", content: "Là Dược sĩ nhưng không tự kiểm soát được cân nặng. Đã giảm 12kg và cải thiện táo bón tự nhiên." },
            { name: "ĐINH THỊ NGỪNG", job: "Buôn bán tự do", content: "Bán bánh bò thức khuya dậy sớm dẫn đến thừa cân, đau nhức xương sống. Giảm 8kg và cải thiện làn da tuyệt vời." },
            { name: "NGUYỄN VĂN CHÍ", job: "Y sĩ", content: "Từng suy nhược cơ thể trầm trọng, mất ngủ, sụt 9kg. Sau 1 tuần đã tăng 5kg và cải thiện 90% sức khỏe." },
            { name: "NGUYỄN BÙI GIA HIẾU", job: "Lao động tự do", content: "Mê game, hút thuốc gầy yếu. Tham gia lớp học ăn đã tăng 8kg và sống lành mạnh hơn." }
          ].map((feed, i) => (
            <Card key={i} className="flex flex-col h-full bg-slate-50 border-none shadow-none">
              <div className="flex-1">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 text-lg leading-relaxed">"{feed.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sky-200 rounded-2xl flex items-center justify-center text-sky-600 font-bold">
                  {feed.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-sky-950 uppercase text-sm tracking-tight">{feed.name}</h4>
                  <p className="text-xs text-sky-600 font-bold uppercase tracking-widest">{feed.job}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
