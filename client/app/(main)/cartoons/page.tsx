import { Metadata } from 'next';
import { getCartoonsPageData } from '../../_lib/data-service';
import FilmListShort from '@/app/_components/FilmsListShort';

export const metadata: Metadata = {
  title: 'Cartoons',
};

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
            heading={`${category} ${type === 'tv' ? 'Shows' : 'Movies'}`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        );
      })}
    </section>
  );
}

export default CartoonsPage;
