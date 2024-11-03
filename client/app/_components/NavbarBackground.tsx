'use client';

import { createPortal } from 'react-dom';
import { useScroll } from '../_hooks/useScroll';

function NavbarBackground() {
  const { isScroll } = useScroll();

  if (isScroll)
    return createPortal(
      <div className="fixed left-0 top-0 z-20 h-24 w-screen bg-slate-200 dark:bg-slate-800"></div>,
      document.body
    );

  if (!isScroll) return null;
}

export default NavbarBackground;
