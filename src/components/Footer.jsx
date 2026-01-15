import React from 'react';
import { MessageCircle, Users, Play, Calendar } from 'lucide-react';
import { SectionTitle, Container } from './SharedUI';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-20 lg:py-32">
      <Container className="flex flex-col items-center text-center">
        <SectionTitle subtitle="LIÊN HỆ VỚI TÔI">BẮT ĐẦU NGAY HÔM NAY</SectionTitle>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl mb-16 lg:mb-20 text-white">
          <a href="#" className="p-6 lg:p-8 bg-slate-800 rounded-2xl lg:rounded-3xl border border-slate-700 hover:border-sky-500 transition-all group overflow-hidden relative">
             <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-5 transition-opacity" />
             <MessageCircle className="mx-auto mb-4 w-8 h-8 lg:w-10 lg:h-10 text-sky-500" />
             <h4 className="font-bold mb-2 text-sm lg:text-base">Zalo Tư vấn</h4>
             <p className="text-[10px] lg:text-xs text-slate-500">Giảm 4kg/ 3 tuần an toàn</p>
          </a>
          <a href="#" className="p-6 lg:p-8 bg-slate-800 rounded-2xl lg:rounded-3xl border border-slate-700 hover:border-sky-500 transition-all group overflow-hidden relative">
             <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-5 transition-opacity" />
             <Users className="mx-auto mb-4 w-8 h-8 lg:w-10 lg:h-10 text-blue-500" />
             <h4 className="font-bold mb-2 text-sm lg:text-base">Facebook</h4>
             <p className="text-[10px] lg:text-xs text-slate-500">Cồng đồng khỏe đẹp</p>
          </a>
          <a href="#" className="p-6 lg:p-8 bg-slate-800 rounded-2xl lg:rounded-3xl border border-slate-700 hover:border-sky-500 transition-all group overflow-hidden relative">
             <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-5 transition-opacity" />
             <Play className="mx-auto mb-4 w-8 h-8 lg:w-10 lg:h-10 text-red-500" />
             <h4 className="font-bold mb-2 text-sm lg:text-base">Youtube</h4>
             <p className="text-[10px] lg:text-xs text-slate-500">Bí mật dinh dưỡng</p>
          </a>
          <a href="#" className="p-6 lg:p-8 bg-sky-500 rounded-2xl lg:rounded-3xl transition-all hover:scale-105 shadow-2xl shadow-sky-500/20">
             <Calendar className="mx-auto mb-4 w-8 h-8 lg:w-10 lg:h-10 text-white" />
             <h4 className="font-bold mb-2 text-sm lg:text-base text-white">Đặt lịch 1:1</h4>
             <p className="text-[10px] lg:text-xs text-sky-100 italic">Online & Offline</p>
          </a>
        </div>

        <div className="text-slate-500 text-[10px] lg:text-sm font-medium tracking-widest uppercase px-4 leading-relaxed">
          SMILECOACH GLOBAL NETWORK: VIỆT NAM • MỸ • ÚC • CANADA • SINGAPORE • HÀN QUỐC • NHẬT BẢN
        </div>
        <p className="mt-8 text-slate-700 text-xs">© 2026 SMILECOACH BY HUYNH NGOC MAI. DESIGNED WITH PRECISION.</p>
      </Container>
    </footer>
  );
};

export default Footer;
