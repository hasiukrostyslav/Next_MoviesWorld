import { getShowsByCategory } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

async function ShowsByCategoryPage({
  params,
  searchParams,
}: {
  params: { key: string };
  searchParams: { page: string | undefined };
}) {
  const { key } = params;
  const { page } = searchParams;

  const data = await getShowsByCategory(key, page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading={`${key
          .split('-')
          .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
          .join(' ')} Shows`}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ShowsByCategoryPage;
