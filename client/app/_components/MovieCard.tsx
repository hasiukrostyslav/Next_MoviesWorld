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
      className={`relative box-content min-w-44 ${
        frame ? 'text-slate-100' : ''
      } ${hidden || ''}`}
    >
      <div className={`w-full ${className}`}>
        <Link
          href={`/view/${item.type}/${item.id}${
            'season' in item ? `/season/${item.seasonNumber}` : ''
          }`}
          className="outline-round flex w-full flex-col p-2 font-semibold hover:text-slate-400"
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
              <span
                className={`absolute top-0 rounded-br-md px-4 text-slate-100 ${
                  item.rating >= 8
                    ? 'bg-green-500'
                    : item.rating < 8 && item.rating >= 7
                    ? 'bg-yellow-500'
                    : 'bg-red-600'
                }`}
              >
                {item.rating.toFixed(1)}
              </span>
            )}
          </div>
          <span>{formatTextLength(item.title, 17, 20)}</span>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-light">{item.year}</span>
          <button className="outline-round p-1 font-semibold">
            <Icon name="favorite" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
