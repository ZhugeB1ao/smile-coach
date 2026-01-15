import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Container } from './SharedUI';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-50" />
      
      <Container className="grid md:grid-cols-2 gap-12 items-center relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-8 text-sky-950">
            DESIGN <span className="text-sky-500">BODY</span> <br />
            <span className="relative inline-block">
              THEO CÁCH 
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 5.5C108.833 2.16667 324.4 -3.1 356.5 6.5" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round"/></svg>
            </span> <br />
            BẠN MONG MUỐN
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
            Chào bạn, tôi là <span className="text-sky-600 font-extrabold uppercase tracking-tight underline decoration-sky-200 underline-offset-4">Huỳnh Ngọc Mai</span> - HLV dinh dưỡng chuyên nghiệp với hơn 15 năm kinh nghiệm kiến tạo BODY không dao kéo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-10 py-5 bg-sky-500 text-white rounded-full font-bold shadow-2xl shadow-sky-200 hover:bg-sky-600 transition-all flex items-center justify-center gap-3 group text-lg">
              Đăng ký trải nghiệm 2 ngày 0đ <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-4/5 bg-sky-50 rounded-[4rem] overflow-hidden shadow-2xl relative group border-8 border-white">
            <div className="w-full h-full bg-slate-100 flex items-center justify-center italic text-slate-400 text-center p-12">
              [Placeholder: Ảnh Chị Huỳnh Ngọc Mai - Vóc dáng chuẩn rãnh 11]
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-3xl shadow-2xl border border-sky-50 hidden sm:flex items-center gap-4"
          >
            <div className="bg-sky-500 p-3 rounded-2xl text-white shadow-lg shadow-sky-200"><Star fill="white" className="w-8 h-8"/></div>
            <div>
              <p className="font-black text-2xl text-sky-950">1,000+</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Học viên thay đổi vóc dáng</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
