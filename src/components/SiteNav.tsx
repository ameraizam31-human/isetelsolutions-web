// Nav terapung. Pil tengah diadaptasi daripada "Tubelight Navbar"
// (Ayushmaan Singh, Serenity UI, lesen MIT; disenaraikan di 21st.dev):
// lampu kecil di atas item aktif, bergerak dengan layoutId.
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type IconName = 'box' | 'gear' | 'spark' | 'help' | 'chat';
type Item = { id: string; name: string; icon: IconName };

type Props = {
  items: Item[];
  lang: 'en' | 'ms';
  whatsappHref: string;
  whatsappLabel: string;
  langLabel: string;
};

const icons: Record<IconName, React.ReactNode> = {
  box: (
    <path d="M21 8.5 12 3 3 8.5m18 0v7L12 21m9-12.5L12 14m0 7-9-5.5v-7M12 21v-7M3 8.5 12 14" />
  ),
  gear: (
    <path d="M4 6h10m4 0h2M4 12h3m4 0h9M4 18h12m4 0h0M16 4v4M9 10v4m9 2v4" />
  ),
  help: <path d="M9.5 9.2a2.6 2.6 0 1 1 3.9 2.3c-.9.5-1.4 1.1-1.4 2.2M12 17.2v.3M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0Z" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  chat: <path d="M4 5h16v11H9l-5 4V5Z" />,
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn('size-5', className)}
    >
      {icons[name]}
    </svg>
  );
}

const glass = 'border border-white/70 bg-white/65 shadow-[0_10px_30px_-18px_rgb(20_32_74/0.45)] backdrop-blur-lg';

export default function SiteNav({ items, lang, whatsappHref, whatsappLabel, langLabel }: Props) {
  const [active, setActive] = useState<string | null>(null);

  // Item aktif ikut bahagian yang sedang dilihat.
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const seen = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, r] of seen) if (r > bestRatio) [best, bestRatio] = [id, r];
        setActive(best);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.01, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  const home = lang === 'ms' ? '/ms/' : '/';

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="shell flex items-center justify-between gap-3 pt-4">
        <a
          href={home}
          className={cn(glass, 'pointer-events-auto flex h-12 items-center gap-2.5 rounded-full py-1 pr-4 pl-1.5')}
        >
          <span className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-white">
            <img src="/media/isetel-mark.png" alt="" width="149" height="240" className="h-8 w-auto" />
          </span>
          <span className="label text-navy">
            I Setel<span className="max-sm:hidden"> Solutions</span>
          </span>
        </a>

        <nav
          aria-label="Main"
          className={cn(
            glass,
            'pointer-events-auto flex items-center gap-1 rounded-full p-1',
            'max-md:fixed max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2',
          )}
        >
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'label relative rounded-full px-3 py-2 text-slate transition-colors hover:text-navy md:px-4.5 md:py-2.5',
                  isActive && 'text-navy',
                )}
              >
                <span className="max-md:hidden">{item.name}</span>
                <span className="flex flex-col items-center gap-0.5 md:hidden">
                  <Icon name={item.icon} />
                  <span className="text-[0.6875rem] leading-none">{item.name}</span>
                </span>
                {isActive && (
                  <motion.span
                    layoutId="lamp"
                    className="absolute inset-0 -z-10 rounded-full bg-steel/10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <span className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-steel">
                      <span className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-steel/25 blur-md" />
                      <span className="absolute -top-1 h-6 w-8 rounded-full bg-steel/20 blur-md" />
                    </span>
                  </motion.span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="pointer-events-auto flex items-center gap-2">
          <div role="group" aria-label={langLabel} className={cn(glass, 'label flex h-12 items-center rounded-full p-1')}>
            {(['en', 'ms'] as const).map((l) => (
              <a
                key={l}
                href={l === 'ms' ? '/ms/' : '/'}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 leading-none transition-colors',
                  l === lang ? 'bg-navy text-white' : 'text-slate hover:text-navy',
                )}
              >
                {l === 'en' ? 'EN' : 'BM'}
              </a>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ variant: 'accent', size: 'md' }), 'h-12 max-sm:hidden')}
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
