import { useSearchParams } from 'react-router-dom';
import { useGetTrendingMoviesQuery } from '../store';
import FilmListLong from '../components/FilmListLong';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function TrendingMoviesPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const { data, isFetching, isError } = useGetTrendingMoviesQuery(+page);

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: movies, page: currentPage, totalPages } = data;

    return (
      <section className="flex flex-col py-20">
        <FilmListLong movies={movies} heading="Trending Movies" />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    );
  }
}

export default TrendingMoviesPage;
