'use client';

import { submitSearchForm } from '../_actions/searchActions';
import { useMatchTheme } from '../_hooks/useMatchTheme';
import Icon from './Icon';
import { useSearchForm } from '../_hooks/useSearchForm';
import Background from './Background';

function SearchForm() {
  const match = useMatchTheme();
  const { formRef, inputRef, resetForm, isFocus, setIsFocus, clearInput } =
    useSearchForm();

  return (
    <>
      <form
        action={async (formData) => {
          await submitSearchForm(formData);
          resetForm();
        }}
        ref={formRef}
        autoComplete="off"
        className="relative z-50"
      >
        <input
          ref={inputRef}
          onClick={() => setIsFocus(true)}
          name="query"
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
          className={`absolute left-2 top-3 ${
            match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'
          }`}
        />
        <button
          type="button"
          onClick={() => clearInput()}
          className={`outline-round absolute right-1 top-1 p-2 ${
            match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'
          }`}
        >
          <Icon name="close" />
        </button>
      </form>
      {isFocus && <Background onClick={() => resetForm()} />}
    </>
  );
}

export default SearchForm;
