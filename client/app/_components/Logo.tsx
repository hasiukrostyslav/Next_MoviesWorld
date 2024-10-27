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
      className={`${anta.className} outline-round p-1 ${
        size === 'base' ? 'z-20 text-3xl' : 'text-5xl'
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
