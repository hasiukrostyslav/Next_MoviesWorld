'use client';

import { use } from 'react';
import { useMatchTheme } from '../_hooks/useMatchTheme';
import { ThemeContext } from '../_context/ThemeContext';
import Icon from '../_components/Icon';

interface ThemeButtonProps {
  absolute?: boolean;
}

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: ThemeButtonProps) {
  const context = use(ThemeContext);
  const match = useMatchTheme();

  if (!context)
    throw new Error('ThemeContext has to be used within ThemeProvider');

  const { theme, toggleTheme } = context;

  return (
    <button
      className={`rounded-lg p-2 text-xl outline-0 ring-blue-500 focus-visible:ring-4 ${
        absolute ? absoluteStyles : ''
      } ${match ? 'text-slate-200' : ''}`}
      onClick={() => toggleTheme()}
    >
      {theme === 'light' ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  );
}

export default ThemeButton;

