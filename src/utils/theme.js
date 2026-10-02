/**
 * Brand colors loaded from environment variables with logo-matched fallbacks
 */
export const themeColors = {
  primary: import.meta.env.VITE_COLOR_PRIMARY || '#0068A8',
  accent: import.meta.env.VITE_COLOR_ACCENT || '#0284C7',
  indigo: import.meta.env.VITE_COLOR_INDIGO || '#4C3B71',
  navy: import.meta.env.VITE_COLOR_NAVY || '#1E293B',
  white: import.meta.env.VITE_COLOR_WHITE || '#FFFFFF',
};

export const brandGradient = `linear-gradient(145deg, ${themeColors.accent} 0%, ${themeColors.primary} 55%, ${themeColors.indigo} 100%)`;
