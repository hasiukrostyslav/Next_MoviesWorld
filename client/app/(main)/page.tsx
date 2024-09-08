import { getHomeData } from '@/app/_lib/data-service';
import { isTypeOfCinema, isTypeOfHero } from '../_utils/helper';
import ActorsList from '@/app/_components/ActorsList';
import FilmListShort from '@/app/_components/FilmsListShort';
import HomeHero from '@/app/_components/HomeHero';
import { ServerError } from '../_error/error';

async function HomePage() {
  const categories = await getHomeData();

  return (
    <section>
      {categories?.map((category) => {
        if (isTypeOfHero(category.data)) {
          return (
            <HomeHero
              key={category.category}
              movies={category.data}
            />
          );
        } else if (isTypeOfCinema(category.data)) {
          return (
            <FilmListShort
              key={category.category}
              movies={category.data}
              heading={category.category}
              path={`/trending/${
                category.category.includes('Movies') ? 'movies' : 'tv'
              }`}
            />
          );
        } else {
          return (
            <ActorsList
              key={category.category}
              actors={category.data}
              heading={category.category}
              className="pb-20"
            />
          );
        }
      })}
    </section>
  );
}

export default HomePage;

