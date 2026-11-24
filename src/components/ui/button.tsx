// shadcn/ui Button, diwarnakan ikut token I Setel.
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'label inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-navy text-white hover:bg-steel-deep',
        accent: 'bg-steel text-white hover:bg-steel-deep',
        outline: 'border border-navy/25 bg-white/60 text-navy backdrop-blur hover:border-navy/60 hover:bg-white',
        quiet: 'text-steel-deep underline decoration-line decoration-2 underline-offset-4 hover:decoration-steel',
      },
      size: {
        md: 'h-11 px-5',
        lg: 'h-13 px-7 text-base',
        sm: 'h-9 px-4',
        bare: 'h-auto p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>;

// Semua butang dalam laman ini ialah pautan, jadi komponen ini memaparkan <a>.
export function ButtonLink({ className, variant, size, ...props }: Props) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
