import { getCartoonsByCategory } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';
import Pagination from '@/app/_components/Pagination';

async function CartoonsByCategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { page: string | undefined };
}) {
  const [type, key] = params.slug;
  const { page } = searchParams;

  console.log(type, key);

  const data = await getCartoonsByCategory(type, key, page);

  const { data: movies, page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={movies}
        heading={`${key
          .split('-')
          .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
          .join(' ')} Cartoon ${type === 'movie' ? 'Movies' : 'Serials'}`}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default CartoonsByCategoryPage;
