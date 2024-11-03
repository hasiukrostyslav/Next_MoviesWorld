import Link from 'next/link';
import Image from 'next/image';
import { formatTextLength } from '../_utils/helper';
import type {
  ActorBaseData,
  MovieBaseData,
  ShowBaseData,
} from '../_utils/types';

interface Item {
  item: MovieBaseData | ShowBaseData | ActorBaseData;
}

function SearchedItem({ item }: Item) {
  return (
    <Link
      href={`/view/${'type' in item ? item.type : 'actor'}/${item.id}`}
      className="flex w-96 gap-2 text-sm font-medium transition-all duration-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-600"
    >
      <Image
        width={40}
        height={60}
        src={`${process.env.NEXT_PUBLIC_IMG_URL_SMALL}${item.posterImg}`}
        alt="poster"
      />
      <div className="flex w-full flex-col items-start justify-center">
        <p>
          {'type' in item && formatTextLength(item.title, 80, 83)}{' '}
          {'name' in item && item.name}{' '}
          {'type' in item && (
            <span className="text-xs font-light text-slate-500">
              {item.year && item.year}
            </span>
          )}
        </p>
        {'type' in item && (
          <div className="flex gap-2 text-xs text-slate-500">
            <span>{item.type === 'movie' ? 'Movie' : 'Shows'}</span>
            <span
              className={
                item.rating >= 8
                  ? 'text-green-500'
                  : item.rating < 8 && item.rating >= 7
                  ? 'text-yellow-500'
                  : 'text-red-600'
              }
            >
              {item.rating > 0 ? item.rating : ''}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default SearchedItem;
