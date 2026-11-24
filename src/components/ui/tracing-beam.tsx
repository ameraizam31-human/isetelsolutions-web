// Aceternity UI: Tracing Beam (ui.aceternity.com/registry/tracing-beam.json).
// Diubah suai: warna ikut token laman, rasuk duduk dalam lajur kiri bekas
// (bukan di luar), dan ketinggian diukur semula bila saiz berubah.
import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

export const TracingBeam = ({
  children,
  className,
  colors = ['#2f6fb3', '#14204a', '#f08a24'],
}: {
  children: React.ReactNode;
  className?: string;
  colors?: [string, string, string];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 55%'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setSvgHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div ref={ref} className={cn('relative w-full pl-10 md:pl-16', className)}>
      <div className="absolute top-2 left-0" aria-hidden="true">
        <div className="ml-[3px] flex h-4 w-4 items-center justify-center rounded-full border border-line bg-white shadow-sm">
          <div className="h-2 w-2 rounded-full bg-signal" />
        </div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="block">
          <motion.path
            d={`M 11 0 V ${svgHeight}`}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1.5"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 11 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#beam)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient id="beam" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor={colors[0]} stopOpacity="0" />
              <stop stopColor={colors[0]} />
              <stop offset="0.325" stopColor={colors[1]} />
              <stop offset="1" stopColor={colors[2]} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default TracingBeam;
