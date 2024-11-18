import { getActorsPageData } from '../_lib/actors-utils';
import ActorCard from './ActorCard';
import Error from './Error';
import Pagination from './Pagination';

async function ActorsPageList({ page }: { page: string | undefined }) {
  const data = await getActorsPageData(page);

  const { data: actors, page: currentPage, totalPages } = data;

  return (
    <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16">
      {actors.map((actor) => (
        <ActorCard
          actor={actor}
          key={actor.id}
          className="w-48"
        />
      ))}
    </ul>
  );
}

export default ActorsPageList;
