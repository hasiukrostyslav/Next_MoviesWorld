import { useGetCartoonsListsQuery } from '../store';
import FilmListShort from '../components/FilmsListShort';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function CartoonsPage() {
  const { data, isFetching, isError } = useGetCartoonsListsQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  const categories = data?.data;

  return (
    <section>
      {categories?.map((list, i, arr) => {
        const { category, type, data } = list;
        const pathKey = category.replaceAll(' ', '-').toLowerCase();

        return (
          <FilmListShort
            path={`category/${type}/${pathKey}`}
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
