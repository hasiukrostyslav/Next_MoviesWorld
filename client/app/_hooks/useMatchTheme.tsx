'use client';

import { usePathname } from 'next/navigation';
import { useScroll } from './useScroll';

export function useMatchTheme() {
  const { isScroll } = useScroll();
  const pathname = usePathname();

  const match =
    (pathname === '/' ||
      pathname === '/collections' ||
      pathname.includes('/view/tv') ||
      pathname.includes('/view/movie')) &&
    !isScroll;

  return match;
}
