'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMatchTheme } from '../_hooks/useMatchTheme';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  'duration-500 rounded-md outline-0 transition-all ring-blue-500 outline-0 focus-visible:ring-4 px-2 py-1 z-10';

function NavigationLink({ href, children, className }: NavigationLinkProps) {
  const match = useMatchTheme();
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === href
          ? `${baseStyles} ${className} ${
              match
                ? 'text-blue-500 hover:text-blue-400'
                : 'text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400'
            }`
          : `${baseStyles} ${className} ${
              match
                ? 'text-slate-200 hover:text-slate-50'
                : 'hover:text-slate-500 dark:hover:text-slate-50'
            }`
      } `}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavigationLink;

