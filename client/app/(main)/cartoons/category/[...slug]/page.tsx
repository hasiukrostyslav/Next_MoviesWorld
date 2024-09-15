import { Metadata } from 'next';
import { getCartoonsByCategory } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';
import { convertParamToString } from '@/app/_utils/helper';

type Props = {
  params: { slug: string[] };
  searchParams: { page: string | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = params.slug[1];
  const title = convertParamToString(key) + ' Cartoons';

  return { title };
}

async function CartoonsByCategoryPage({ params, searchParams }: Props) {
  const [type, key] = params.slug;
  const { page } = searchParams;

  const data = await getCartoonsByCategory(type, key, page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading={`${convertParamToString(key)} Cartoon ${
          type === 'movie' ? 'Movies' : 'Serials'
        }`}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default CartoonsByCategoryPage;
