
export const Card = ({ children, className = "" }) => (
  <div 
    className={`p-6 sm:p-8 rounded-[24px] bg-white border border-[#e7e7ec] shadow-[0_2px_4px_rgba(6,3,24,0.04)] hover:shadow-[0_12px_24px_rgba(6,3,24,0.08)] hover:border-[#0d0c22]/20 transition-all duration-200 ${className}`}
  >
    {children}
  </div>
);

export const SectionTitle = ({ children, subtitle, dark = false }) => (
  <div className="px-4 mb-14 text-center">
    <h2 
      className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-balance ${dark ? 'text-white' : 'text-[#0d0c22]'}`}
    >
      {children}
    </h2>
    {subtitle && (
      <p 
        className={`mt-3 text-xs sm:text-sm font-black uppercase tracking-widest ${dark ? 'text-[#ecebf0]/75' : 'text-[#ea4c89]'}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export const Container = ({ children, className = "" }) => (
  <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

