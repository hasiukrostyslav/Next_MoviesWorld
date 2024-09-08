import { getTrendingShows } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

async function MoviesByCategoryPage({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const { page } = searchParams;

  const data = await getTrendingShows(page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading="Trending Movies"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default MoviesByCategoryPage;
