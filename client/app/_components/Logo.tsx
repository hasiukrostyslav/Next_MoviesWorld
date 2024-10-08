'use client';

import Link from 'next/link';
import { Anta } from 'next/font/google';
import { useMatchTheme } from '../_hooks/useMatchTheme';

interface LogoProps {
  size: 'base' | 'lg';
  className?: string;
}

const anta = Anta({ subsets: ['latin'], weight: '400', display: 'swap' });

function Logo({ size, className }: LogoProps) {
  const match = useMatchTheme();

  return (
    <Link
      href="/"
      className={`${
        anta.className
      } rounded-md py-1 outline-0 ring-blue-500 focus-visible:ring-4 ${
        size === 'base' ? 'text-3xl' : 'text-5xl'
      } ${className} ${
        match ? 'text-slate-200' : 'text-slate-500 dark:text-slate-200'
      }`}
    >
      <span className="text-blue-600">M</span>
      oviesWorld
    </Link>
  );
}

export default Logo;

