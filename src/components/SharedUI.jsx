import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Card = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-6 rounded-2xl bg-white shadow-xl shadow-sky-100 border border-sky-50 ${className}`}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4 text-sky-950 uppercase"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sky-600 font-bold tracking-widest text-sm md:text-base underline underline-offset-8 decoration-sky-100"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);
