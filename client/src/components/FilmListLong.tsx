import type { MoviesListTypes } from '../utils/types';
import MoviesCard from './MoviesCard';

interface FilmListLongProps {
  movies: MoviesListTypes;
  heading: string;
  className?: string;
}

function FilmListLong({ movies, heading, className }: FilmListLongProps) {
  return (
    <div className={`flex flex-col pt-20 ${className}`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
        {movies.map((movie) => (
          <MoviesCard
            item={movie}
            key={'seasonId' in movie ? movie.seasonId : movie.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default FilmListLong;
