// Aceternity UI: Text Generate Effect (ui.aceternity.com/registry/text-generate-effect.json).
// Diubah suai: kelas warna dibuang (ikut token laman), tag boleh dipilih,
// hormat prefers-reduced-motion, dan ada jaring keselamatan CSS (.tge-word).
import { useEffect } from 'react';
import { motion, stagger, useAnimate, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.6,
  as: Tag = 'h1',
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  as?: 'h1' | 'h2' | 'p';
}) => {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const wordsArray = words.split(' ');

  useEffect(() => {
    if (reduced) return;
    animate(
      'span',
      { opacity: 1, filter: filter ? 'blur(0px)' : 'none' },
      { duration, delay: stagger(0.16) },
    );
  }, [scope.current, reduced]);

  return (
    <Tag className={cn(className)} aria-label={words}>
      <motion.span ref={scope} aria-hidden="true">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="tge-word inline-block opacity-0"
            style={{ filter: filter ? 'blur(10px)' : 'none' }}
          >
            {word}
            {idx < wordsArray.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};
