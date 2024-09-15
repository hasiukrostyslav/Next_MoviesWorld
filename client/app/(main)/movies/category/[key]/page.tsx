import { Metadata } from 'next';
import {
  getMoviesByCategory,
  // getMoviesPageData,
} from '@/app/_lib/data-service';
import { convertParamToString } from '@/app/_utils/helper';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

// export async function generateStaticParams() {
//   const categories = await getMoviesPageData();

//   return categories.map((category) => ({
//     key: category.category.replaceAll(' ', '-').toLowerCase(),
//   }));
// }

type Props = {
  params: { key: string };
  searchParams: { page: string | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { key } = params;
  const title = convertParamToString(key) + ' Movies';

  return { title };
}

async function MoviesByCategoryPage({ params, searchParams }: Props) {
  const { key } = params;
  const { page } = searchParams;

  const data = await getMoviesByCategory(key, page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading={`${convertParamToString(key)} Movies`}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default MoviesByCategoryPage;
