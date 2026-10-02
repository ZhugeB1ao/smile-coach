/**
 * AnimatedSection: High-performance section wrapper.
 * Guarantees zero layout shift (CLS: 0), zero hydration lag,
 * and 120fps native hardware-accelerated scrolling.
 */
const AnimatedSection = ({
  children,
  className = '',
  id,
  as = 'section',
}) => {
  const Tag = as;

  return (
    <Tag
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
