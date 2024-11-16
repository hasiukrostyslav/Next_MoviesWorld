import { Metadata } from 'next';
import { getShowsByCategory } from '@/app/_lib/data-service';
import { convertParamToString } from '@/app/_utils/helper';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

type Props = {
  params: Promise<{ key: string }>;
  searchParams: Promise<{ page: string | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = (await params).key;
  const title = convertParamToString(key) + ' Shows';

  return { title };
}

async function ShowsByCategoryPage({ params, searchParams }: Props) {
  const key = (await params).key;
  const page = (await searchParams).page;

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
