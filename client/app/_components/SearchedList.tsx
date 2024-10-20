import { ActorBaseData, MovieBaseData, ShowBaseData } from '../_utils/types';
import ActorCard from './ActorCard';
import MovieCard from './MovieCard';

interface SearchedListProps {
  searchedItems: (MovieBaseData | ShowBaseData | ActorBaseData)[];
}
function SearchedList({ searchedItems }: SearchedListProps) {
  return (
    <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
      {searchedItems.map((item) => {
        if ('type' in item)
          return (
            <MovieCard
              item={item}
              key={item.id}
            />
          );
        if ('character' in item)
          return (
            <ActorCard
              actor={item}
              key={item.id}
              className="min-w-44"
            />
          );
      })}
    </ul>
  );
}
export default SearchedList;
