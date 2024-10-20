'use client';

import { useMatchTheme } from '../_hooks/useMatchTheme';
import Icon from '../_components/Icon';

function SearchForm() {
  const match = useMatchTheme();

  return (
    <form className="relative">
      <input
        placeholder="Search here"
        type="text"
        className={`outline-round border-2 border-slate-300 py-2 pl-7 pr-10 text-sm focus:border-transparent dark:border-transparent  ${
          match
            ? 'border-transparent bg-slate-600 text-slate-200'
            : 'dark:bg-slate-600'
        }`}
      />
      <Icon
        name="search"
        className="absolute left-2 top-3"
      />
      <button
        className={`outline-round absolute right-1 top-1 p-2 ${
          match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'
        }`}
      >
        <Icon name="close" />
      </button>
    </form>
  );
}

export default SearchForm;
