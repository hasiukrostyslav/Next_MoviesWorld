import Image from 'next/image';
import type { CollectionData } from '../_utils/types';
import ButtonLink from './ButtonLink';
import MovieCard from './MovieCard';
import CollectionLogo from './CollectionLogo';

interface CollectionListProps {
  collection: CollectionData;
  index: number;
  length: number;
}

function CollectionList({ collection, index, length }: CollectionListProps) {
  const { movies, backdropImg, key } = collection;

  const title = `${key
    .replace(key[0], key[0].toUpperCase())
    .replaceAll('_', ' ')}`;

  return (
    <div className={`pt-20 ${index === length - 1 ? 'pb-20' : ''}`}>
      <div className="flex items-end justify-between">
        <div className="relative">
          <CollectionLogo
            title={title}
            logoKey={key}
          />
        </div>

        <ButtonLink
          href={`collections/${key.replaceAll('_', '-').toLowerCase()}`}
          color="primary"
          size="medium"
        >
          View All Movies
        </ButtonLink>
      </div>
      <div className="relative mt-4 flex flex-col overflow-hidden rounded-md px-2 pb-8 pt-52">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${backdropImg}`}
          alt={`${title} collection poster`}
          fill
          className="absolute left-0 top-0 z-0 h-full w-full brightness-75"
        />

        <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
          {movies.map((item) => (
            <MovieCard
              item={item}
              key={item.id}
              frame
              className="bg-opacity p-3"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionList;

