'use client';

import { useTheme } from '../_hooks/useTheme';
import { useMatchTheme } from '../_hooks/useMatchTheme';
import Icon from '../_components/Icon';

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: { absolute?: boolean }) {
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

