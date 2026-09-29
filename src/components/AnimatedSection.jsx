import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
}

/**
 * AnimatedSection: Provides smooth scroll-triggered entrance animations for sections.
 * 100% SSG/SSR-friendly with zero hydration mismatch or cascading render issues.
 */
const AnimatedSection = ({
  children,
  className = '',
  id,
  as = 'section',
  delay = 0,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isClient = useIsClient();
  const Tag = as;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback for environments without IntersectionObserver
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // During SSR (isClient is false), render fully visible to guarantee perfect SSG & SEO.
  // Once mounted on client:
  // - If isVisible: smooth opacity-100 translate-y-0
  // - Before entering view: starts at opacity-0 translate-y-7 and transitions in
  const stateClass = isClient
    ? isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-7'
    : 'opacity-100 translate-y-0';

  return (
    <Tag
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${stateClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
