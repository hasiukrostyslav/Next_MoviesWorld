import type { MoviesListTypes } from '../utils/types';
import ButtonLink from './ButtonLink';
import MoviesCard from './MoviesCard';

interface FilmListShortProps {
  path: string;
  movies: MoviesListTypes;
  heading: string;
  className?: string;
}

function FilmListShort({
  movies,
  heading,
  className,
  path,
}: FilmListShortProps) {
  return (
    <div className={`flex flex-col pt-20 ${className}`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
        {movies.map((movie) => (
          <MoviesCard item={movie} key={movie.id} />
        ))}
      </ul>
      <ButtonLink
        path={path}
        color="primary"
        size="large"
        className="mt-10 self-center"
      >
        View All {heading}
      </ButtonLink>
    </div>
  );
}

export default FilmListShort;
