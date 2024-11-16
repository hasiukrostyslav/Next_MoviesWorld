import { Metadata } from 'next';
import { getActorsPageData } from '@/app/_lib/data-service';
import ActorCard from '@/app/_components/ActorCard';
import Pagination from '@/app/_components/Pagination';

export const metadata: Metadata = {
  title: 'Actors',
};

async function ActorsPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const page = (await searchParams).page;

  const data = await getActorsPageData(page);

  const { data: actors, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col pt-20">
      <h2 className="text-3xl font-semibold">Popular Actors</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16">
        {actors.map((actor) => (
          <ActorCard
            actor={actor}
            key={actor.id}
            className="w-48"
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
