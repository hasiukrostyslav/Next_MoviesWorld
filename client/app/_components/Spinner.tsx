'use client';

import { useTheme } from '../_hooks/useTheme';

interface SpinnerProps {
  fixed?: boolean;
}

function Spinner({ fixed }: SpinnerProps) {
  const { theme } = useTheme();

  return (
    <div className="h-hero relative">
      <span
        className={`${
          fixed ? 'fixed' : 'absolute'
        } left-1/2 top-1/2 h-4 w-4 rounded-full text-sm ${
          theme === 'dark' ? 'blue-spin' : 'gray-spin'
        }`}
      ></span>
    </div>
  );
}

export default Spinner;

