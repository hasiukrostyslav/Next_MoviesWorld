import { getShowsPageData } from '@/app/_lib/data-service';
import FilmListShort from '@/app/_components/FilmsListShort';

async function ShowsPage() {
  const categories = await getShowsPageData();

  return (
    <section>
      {categories.map((list, i, arr) => {
        const { category, data } = list;
        const pathKey = category.replaceAll(' ', '-').toLowerCase();

        return (
          <FilmListShort
            path={`tv/category/${pathKey}`}
            key={category}
            movies={data}
            heading={`${category} Shows`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        );
      })}
    </section>
  );
}

export default ShowsPage;
