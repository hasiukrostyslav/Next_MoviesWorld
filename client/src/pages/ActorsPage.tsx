import { useSearchParams } from 'react-router-dom';
import { useGetActorsListQuery } from '../store';
import ActorsCard from '../components/ActorsCard';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function ActorsPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const { data, isFetching, isError } = useGetActorsListQuery(+page);

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: actors, page: currentPage, totalPages } = data;

    return (
      <section className="flex flex-col pt-20">
        <h2 className="text-3xl font-semibold">Popular Actors</h2>
        <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
          {actors.map((actor) => (
            <ActorsCard actor={actor} key={actor.id} />
          ))}
        </ul>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    );
  }
}

export default ActorsPage;
