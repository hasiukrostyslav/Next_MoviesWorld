import { Suspense } from 'react';
import Spinner from '../_components/Spinner';
import Skeleton from '../_components/Skeleton';
import HomeHeroList from '../_components/HomeHeroList';
import HomeMoviesList from '../_components/HomeMoviesList';
import HomeActorsList from '../_components/HomeActorsList';

function HomePage() {
  return (
    <section>
      <Suspense fallback={<Spinner fixed />}>
        <HomeHeroList />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            type="movie"
            rows={2}
          />
        }
      >
        <HomeMoviesList />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            type="actor"
            rows={2}
          />
        }
      >
        <HomeActorsList />
      </Suspense>
    </section>
  );
}

export default HomePage;
