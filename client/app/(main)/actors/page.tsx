import { getActorsPageData } from '@/app/_lib/data-service';
import ActorCard from '@/app/_components/ActorCard';
import Pagination from '@/app/_components/Pagination';

async function ActorsPage({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const { page } = searchParams;

  const data = await getActorsPageData(page);

  const { data: actors, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col pt-20">
      <h2 className="text-3xl font-semibold">Popular Actors</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
        {actors.map((actor) => (
          <ActorCard
            actor={actor}
            key={actor.id}
          />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ActorsPage;