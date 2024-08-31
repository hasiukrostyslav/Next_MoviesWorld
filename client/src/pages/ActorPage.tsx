import { useParams } from 'react-router-dom';
import { useGetActorQuery } from '../store';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import ActorHero from '../components/ActorHero';

import CreditsList from '../components/CreditsList';

function ActorPage() {
  const params = useParams();
  const { id } = params;

  const { data, isFetching, isError } = useGetActorQuery(id);

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const actor = data.data;

    return (
      <section className="mb-8">
        <ActorHero actor={actor} />
        <CreditsList movies={actor.credits} />
      </section>
    );
  }
}

export default ActorPage;
