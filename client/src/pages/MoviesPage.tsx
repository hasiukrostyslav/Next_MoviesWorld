import { useGetMoviesListsQuery } from '../store';
import FilmListShort from '../components/FilmsListShort';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function MoviesPage() {
  const { data, isFetching, isError } = useGetMoviesListsQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const categories = data.data;

    return (
      <section>
        {categories.map((list, i, arr) => {
          const { category, data } = list;
          const pathKey = category.replaceAll(' ', '-').toLowerCase();

          return (
            <FilmListShort
              path={`category/${pathKey}`}
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
}

export default MoviesPage;
