'use client';

import { useTheme } from '../_hooks/useTheme';

function MiniSpinner() {
  const { theme } = useTheme();

  return (
    <div className="w-96">
      <span
        className={`absolute left-1/2 top-1/2 h-4 w-4 rounded-full text-sm ${
          theme === 'dark' ? 'blue-spin' : 'gray-spin'
        }`}
      ></span>
    </div>
  );
}
export default MiniSpinner;
