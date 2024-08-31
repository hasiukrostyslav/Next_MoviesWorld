import { useParams } from 'react-router-dom';
import { useGetCollectionQuery } from '../store';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import FilmListLong from '../components/FilmListLong';

function CollectionPage() {
  const params = useParams();
  const { id } = params;

  const { data, isFetching, isError } = useGetCollectionQuery(id);

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: collection } = data;
    const heading = collection.key
      .split('-')
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(' ');

    return (
      <section className="flex flex-col py-20">
        <FilmListLong
          movies={collection.movies}
          heading={`${heading} Collection`}
        />
      </section>
    );
  }
}

export default CollectionPage;
