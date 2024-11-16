import type { Metadata } from 'next';
import { getMoviesByCategory } from '@/app/_lib/data-service';
import { convertParamToString } from '@/app/_utils/helper';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

type Props = {
  params: Promise<{ key: string }>;
  searchParams: Promise<{ page: string | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = (await params).key;
  const title = convertParamToString(key) + ' Movies';

  return { title };
}

async function MoviesByCategoryPage({ params, searchParams }: Props) {
  const key = (await params).key;
  const page = (await searchParams).page;

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
