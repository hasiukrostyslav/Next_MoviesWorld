'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLazyGetSearchedItemsQuery, util } from '../store';
import { useMatchTheme } from '../_hooks/useMatchTheme';
import Icon from '../_components/Icon';
import MiniSpinner from './MiniSpinner';
import SearchedItem from './SearchedItem';
type Input = {
  query: string;
};

function SearchForm() {
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatchTheme();

  const { register, handleSubmit, reset, setFocus } = useForm<Input>();
  const [trigger, result] = useLazyGetSearchedItemsQuery();
  const dispatch = useDispatch();

  const resetQuery = useCallback(() => {
    setIsFocus(false);
    reset();
    dispatch(util.resetApiState());
  }, [dispatch, reset]);

  useEffect(() => {
    resetQuery();
  }, [location, resetQuery]);

  const { data, isError, isFetching } = result;
  const items = data?.data.data.slice(0, 12);

  const leftPosition =
    items && items?.length > 6 && !isError && !isFetching
      ? '-left-80 grid-cols-2'
      : '-left-24';

  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`search?query=${data.query}`);
    reset();
    setIsFocus(false);
  };

  return (
    <>
      <form
        autoComplete="off"
        className="relative z-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          onClick={() => setIsFocus(true)}
          placeholder="Search here"
          type="text"
          className={`outline-round border-2 border-slate-300 py-2 pl-7 pr-10 text-sm focus:border-transparent dark:border-transparent  ${
            match
              ? 'border-transparent bg-slate-600 text-slate-200'
              : 'dark:bg-slate-600'
          }`}
          {...register('query', {
            required: true,
            minLength: 3,
            onChange(e) {
              if (e.target.value.length >= 3)
                trigger({
                  query: e.target.value,
                  searchId: undefined,
                  type: undefined,
                  remain: undefined,
                });
              else dispatch(util.resetApiState());
            },
          })}
        />
        <Icon
          name="search"
          className={`absolute left-2 top-3 ${
            match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'
          }`}
        />
        <button
          onClick={() => {
            setFocus('query');
            reset();
            dispatch(util.resetApiState());
          }}
          type="button"
          className={`outline-round absolute right-1 top-1 p-2 ${
            match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'
          }`}
        >
          <Icon name="close" />
        </button>
        {isFocus &&
          createPortal(
            <div
              onClick={() => resetQuery()}
              className="fixed left-0 top-0 z-20 h-screen w-screen bg-slate-400 opacity-80 dark:bg-slate-900"
            ></div>,
            document.body
          )}
      </form>

      {isFocus && result.status !== 'uninitialized' && (
        <div
          className={`absolute ${leftPosition} top-11 z-30 ${
            !isError && !isFetching
              ? 'grid auto-rows-max gap-x-10 gap-y-4'
              : 'flex min-h-40 min-w-96  items-center justify-center p-2 text-lg dark:text-slate-400'
          } rounded-md bg-slate-200 p-6 dark:bg-slate-800`}
        >
          {items &&
            !isFetching &&
            !isError &&
            items.map((el) => (
              <SearchedItem
                key={el.id}
                item={el}
              />
            ))}
          {isError && (
            <div className="flex w-96 flex-col items-center gap-1">
              <p>No data was found</p>
              <span className="text-base text-slate-500">
                Please try again!
              </span>
            </div>
          )}
          {isFetching && <MiniSpinner />}
        </div>
      )}
    </>
  );
}

export default SearchForm;
