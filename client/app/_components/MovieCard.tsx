import Image from 'next/image';
import Link from 'next/link';
import type { CinemaTypes } from '../_utils/types';
import { formatTextLength, getImageSize } from '../_utils/helper';
import Icon from './Icon';

interface MoviesCardProps {
  item: CinemaTypes;
  frame?: boolean;
  className?: string;
  hidden?: 'hidden' | '';
}

function MovieCard({ item, frame, className, hidden }: MoviesCardProps) {
  const { width, height } = getImageSize('small');

  return (
    <li
      className={`relative min-w-44 ${frame ? 'text-slate-100' : ''} ${
        hidden || ''
      }`}
    >
      <div className={`rounded-md ${className}`}>
        <Link
          href={`/view/${item.type}/${item.id}${
            'season' in item ? `/season/${item.seasonNumber}` : ''
          }`}
          className="rounded-lg font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-400 focus-visible:ring-4"
        >
          <div className="relative">
            <Image
              className="mb-3 rounded-md transition-all duration-500 hover:opacity-70"
              src={
                item.posterPath
                  ? `${process.env.NEXT_PUBLIC_IMG_URL_SMALL}${item.posterPath}`
                  : `/imgMovieAlt.jpg`
              }
              width={width}
              height={height}
              priority
              quality={80}
              alt={`${item.title} poster`}
            />
            {item.rating > 0 && (
              <span className="absolute top-0 bg-red-600 px-4 text-slate-100">
                {item.rating.toFixed(1)}
              </span>
            )}
          </div>
          {formatTextLength(item.title, 17, 20)}
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

export default MovieCard;
