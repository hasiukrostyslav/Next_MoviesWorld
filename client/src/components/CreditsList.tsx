import { useStaticPagination } from '../hooks/useStaticPagination';
import type { MovieBaseData, ShowBaseData } from '../utils/types';
import MoviesCard from './MoviesCard';
import Pagination from './Pagination';

interface FilmListLongProps {
  movies: (MovieBaseData | ShowBaseData)[];
}

function CreditsList({ movies }: FilmListLongProps) {
  const { currentPage, totalPages, itemsPerPage } = useStaticPagination(movies);

  return (
    <div className={`flex flex-col`}>
      <h2 className="text-3xl font-semibold">Credits</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 ">
        {movies.map((movie, i) => (
          <MoviesCard
            item={movie}
            key={movie.id}
            hidden={
              i < itemsPerPage * currentPage &&
              i >= itemsPerPage * (currentPage - 1)
                ? ''
                : 'hidden'
            }
          />
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}

export default CreditsList;
