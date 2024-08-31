import { Link } from 'react-router-dom';
import { imgSize, imgURL } from '../utils/constants';
import type { MoviesTypes } from '../utils/types';
import Icon from './Icon';

interface MoviesCardProps {
  item: MoviesTypes;
  frame?: boolean;
  className?: string;
  hidden?: 'hidden' | '';
}

function MoviesCard({ item, frame, className, hidden }: MoviesCardProps) {
  return (
    <li
      className={`relative min-w-44 ${frame ? 'text-slate-100' : ''} ${hidden || ''}`}
    >
      <div className={`rounded-md ${className}`}>
        <div className="relative">
          <img
            className="mb-3 w-full rounded-md"
            src={
              item.posterPath
                ? `${imgURL}${imgSize.small}${item.posterPath}`
                : `/imgMovieAlt.jpg`
            }
            alt={`${item.title} poster`}
          />
          {item.rating > 0 && (
            <span className="absolute top-0 bg-red-600 px-4 text-slate-100">
              {item.rating.toFixed(1)}
            </span>
          )}
        </div>
        <Link
          to={`/view/${item.type}/${item.id}${'season' in item ? `/season/${item.seasonNumber}` : ''}`}
          className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-800 focus-visible:ring-4 hover:dark:text-slate-400"
        >
          {item.title.length < 18
            ? item.title
            : item.title.slice(0, 18).padEnd(21, '...')}
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-light">{item.year}</span>
          <button className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 focus-visible:ring-4">
            <Icon name="favorite" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
