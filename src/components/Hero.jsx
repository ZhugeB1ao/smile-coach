// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Container } from './SharedUI';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <Container className="relative z-10 grid items-center gap-12 text-center md:grid-cols-2 md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 text-4xl font-black leading-tight md:text-5xl lg:text-7xl xl:text-8xl text-sky-950 text-balance">
            DESIGN <span className="text-sky-500">BODY</span> <br />
            <span className="relative inline-block">
              THEO CÁCH 
              <svg className="absolute left-0 w-full -bottom-2" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.5 5.5C108.833 2.16667 324.4 -3.1 356.5 6.5" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round"/></svg>
            </span> <br />
            BẠN MONG MUỐN
          </h1>
          <p className="max-w-lg mx-auto mb-10 text-lg font-medium leading-relaxed sm:text-xl lg:text-2xl text-slate-600 md:mx-0">
            Chào bạn, tôi là <span className="font-extrabold tracking-tight underline uppercase text-sky-600 decoration-sky-200 underline-offset-4">Huỳnh Ngọc Mai</span> - HLV dinh dưỡng chuyên nghiệp với hơn 15 năm kinh nghiệm kiến tạo BODY không dao kéo.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a href="#offer" className="flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-colors rounded-full shadow-2xl bg-sky-500 shadow-sky-200 hover:bg-sky-600 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
              Đăng ký trải nghiệm 2 ngày 0đ <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-4/5 bg-sky-50 rounded-[4rem] overflow-hidden shadow-2xl relative group border-8 border-white">
            <div className="flex items-center justify-center w-full h-full p-12 italic text-center bg-slate-100 text-slate-400">
              [Placeholder: Ảnh Chị Huỳnh Ngọc Mai - Vóc dáng chuẩn rãnh 11]
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute items-center hidden gap-4 p-6 bg-white border shadow-2xl -bottom-10 -right-6 md:right-10 rounded-3xl border-sky-50 sm:flex"
          >
            <div className="p-3 text-white shadow-lg bg-sky-500 rounded-2xl shadow-sky-200"><Star fill="white" className="w-8 h-8" aria-hidden="true" /></div>
            <div>
              <p className="text-2xl font-black tabular-nums text-sky-950">1,000+</p>
              <p className="text-xs font-bold tracking-wider uppercase text-slate-500">Học viên thay đổi vóc dáng</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
