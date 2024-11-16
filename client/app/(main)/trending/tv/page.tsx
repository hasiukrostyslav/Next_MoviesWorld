import { Metadata } from 'next';
import { getTrendingShows } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

export const metadata: Metadata = {
  title: 'Trending Shows',
};

async function MoviesByCategoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const page = (await searchParams).page;

  const data = await getTrendingShows(page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading="Trending Shows"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default MoviesByCategoryPage;
