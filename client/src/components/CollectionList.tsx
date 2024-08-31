import type { CollectionData } from '../utils/types';
import { imgSize, imgURL } from '../utils/constants';
import MoviesCard from './MoviesCard';
import ButtonLink from './ButtonLink';

interface CollectionListProps {
  collection: CollectionData;
  index: number;
  length: number;
}

function CollectionList({ collection, index, length }: CollectionListProps) {
  const { movies, backdropImg, key } = collection;

  const title = `${key.replace(key[0], key[0].toUpperCase()).replaceAll('_', ' ')}`;

  return (
    <div className={`pt-20 ${index === length - 1 ? 'pb-20' : ''}`}>
      <div className="flex items-end justify-between">
        <img
          src={`${key}-logo.${key !== 'james_Bond' ? 'png' : 'webp'}`}
          alt={`${title} collection logo`}
          className="h-20"
        />

        <ButtonLink
          path={`${key.replaceAll('_', '-').toLowerCase()}`}
          color="primary"
          size="medium"
        >
          View All Movies
        </ButtonLink>
      </div>
      <div className="relative mt-4 flex flex-col overflow-hidden rounded-md px-2 pb-8 pt-52">
        <img
          src={`${imgURL}${imgSize.large}${backdropImg}`}
          alt={`${title} collection poster`}
          className="absolute left-0 top-0 z-0 h-full w-full brightness-75"
        />

        <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
          {movies.map((item) => (
            <MoviesCard
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
