import {
  getMoviesCategoryPageData,
  getMoviesPageData,
} from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

export async function generateStaticParams() {
  const categories = await getMoviesPageData();

  return categories.map((category) => ({
    key: category.category.replaceAll(' ', '-').toLowerCase(),
  }));
}

async function MoviesByCategoryPage({
  params,
  searchParams,
}: {
  params: { key: string };
  searchParams: { page: string | undefined };
}) {
  const { key } = params;
  const { page } = searchParams;

  const data = await getMoviesCategoryPageData(key, page);

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
