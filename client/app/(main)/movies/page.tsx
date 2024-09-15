import type { Metadata } from 'next';
import { getMoviesPageData } from '@/app/_lib/data-service';
import FilmListShort from '@/app/_components/FilmsListShort';

export const metadata: Metadata = {
  title: 'Movies',
};

async function MoviesPage() {
  const categories = await getMoviesPageData();

  return (
    <section>
      {categories.map((list, i, arr) => {
        const { category, data } = list;
        const pathKey = category.replaceAll(' ', '-').toLowerCase();

        return (
          <FilmListShort
            path={`movies/category/${pathKey}`}
            key={category}
            movies={data}
            heading={`${category} Movies`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        );
      })}
    </section>
  );
}

export default MoviesPage;
