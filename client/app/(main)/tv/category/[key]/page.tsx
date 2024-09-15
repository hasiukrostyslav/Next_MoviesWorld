import { Metadata } from 'next';
import { getShowsByCategory } from '@/app/_lib/data-service';
import { convertParamToString } from '@/app/_utils/helper';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

type Props = {
  params: { key: string };
  searchParams: { page: string | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { key } = params;
  const title = convertParamToString(key) + ' Shows';

  return { title };
}

async function ShowsByCategoryPage({ params, searchParams }: Props) {
  const { key } = params;
  const { page } = searchParams;

  const data = await getShowsByCategory(key, page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading={`${convertParamToString(key)} Shows`}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ShowsByCategoryPage;
