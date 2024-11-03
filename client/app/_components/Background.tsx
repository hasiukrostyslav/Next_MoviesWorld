'use client';

import { createPortal } from 'react-dom';

interface BackgroundProps {
  onClick: () => void;
}

function Background({ onClick }: BackgroundProps) {
  return createPortal(
    <div
      onClick={onClick}
      className="fixed left-0 top-0 z-20 h-screen w-screen bg-slate-400 opacity-50 dark:bg-slate-900"
    ></div>,
    document.body
  );
}

export default Background;
