import { SearchBaseData } from '../_utils/types';
import Button from './Button';
import ButtonLink from './ButtonLink';
import SearchedItem from './SearchedItem';

interface SearchBoardProps {
  items: SearchBaseData;
  query: string | undefined;
}

function SearchBoard({ items, query }: SearchBoardProps) {
  const leftPosition =
    items && items?.length > 6 ? '-left-72 grid-cols-2' : '-left-24';

  return (
    <div
      className={`absolute ${leftPosition} top-14 z-30 ${
        items
          ? // !isError && !isFetching
            'grid auto-rows-fr gap-x-10 gap-y-4'
          : 'flex min-h-40 min-w-96  items-center justify-center p-2 text-lg dark:text-slate-400'
      } rounded-md bg-slate-200 p-6 dark:bg-slate-800`}
    >
      {items &&
        // !isFetching &&
        // !isError &&
        items.slice(0, 12).map((el) => (
          <SearchedItem
            key={el.id}
            item={el}
          />
        ))}

      {/* {isError && (
        <div className="flex w-96 flex-col items-center gap-1">
          <p>No data was found</p>
          <span className="text-base text-slate-500">Please try again!</span>
        </div>
      )} */}
      {/* {isFetching && <MiniSpinner />} */}
      {items.length > 12 && (
        <ButtonLink
          href={`search?query=${query}`}
          className="col-start-2 mt-2 justify-self-end"
          color="primary"
          size="small"
        >
          Get all results
        </ButtonLink>
      )}
    </div>
  );
}

export default SearchBoard;
