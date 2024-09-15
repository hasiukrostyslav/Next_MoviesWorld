import { getCartoonsPageData } from '../../_lib/data-service';
import FilmListShort from '@/app/_components/FilmsListShort';

async function CartoonsPage() {
  const categories = await getCartoonsPageData();

  return (
    <section>
      {categories?.map((list, i, arr) => {
        const { category, type, data } = list;
        const pathKey = category.replaceAll(' ', '-').toLowerCase();

        return (
          <FilmListShort
            path={`cartoons/category/${type}/${pathKey}`}
            key={`${type}-${category}`}
            movies={data}
            heading={`${category}`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        );
      })}
    </section>
  );
}

export default CartoonsPage;
