'use client';

import { usePathname } from 'next/navigation';

export function useMatchTheme() {
  const pathname = usePathname();

  const match =
    pathname === '/home' ||
    pathname === '/collections' ||
    pathname.includes('/view/tv') ||
    pathname.includes('/view/movie');

  return match;
}

