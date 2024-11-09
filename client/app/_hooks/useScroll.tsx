'use client';

import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    position > 0 ? setIsScroll(true) : setIsScroll(false);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return { scrollPosition, isScroll, scrollToTop };
}
