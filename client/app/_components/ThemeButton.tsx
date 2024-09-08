'use client';

import { useTheme } from '../_hooks/useTheme';
import { useMatchTheme } from '../_hooks/useMatchTheme';
import Icon from '../_components/Icon';

interface ThemeButtonProps {
  absolute?: boolean;
}

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: ThemeButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const match = useMatchTheme();

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

