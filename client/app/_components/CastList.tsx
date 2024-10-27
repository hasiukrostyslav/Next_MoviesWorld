'use client';

import { useStaticPagination } from '../_hooks/useStaticPagination';
import type { ActorBaseData } from '../_utils/types';
import ActorCard from './ActorCard';
import Pagination from './Pagination';

function CastList({ cast }: { cast: ActorBaseData[] }) {
  const { currentPage, totalPages, itemsPerPage, remainder } =
    useStaticPagination(cast);

  return (
    <div className="flex basis-10/12 flex-col">
      <h2 className="mb-5 text-3xl">Cast</h2>
      <ul
        className={`flex flex-wrap gap-5 ${
          totalPages > 1 && remainder > itemsPerPage / 2 ? 'h-[43rem]' : ''
        }`}
      >
        {cast.map((actor, i) => (
          <ActorCard
            key={actor.id}
            actor={actor}
            cast
            className={
              i < itemsPerPage * currentPage &&
              i >= itemsPerPage * (currentPage - 1)
                ? ''
                : 'hidden'
            }
          />
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default CastList;
