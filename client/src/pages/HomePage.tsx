import { useGetTrendListQuery } from '../store';
import HomeHero from '../components/HomeHero';
import Spinner from '../components/Spinner';
import FilmListShort from '../components/FilmsListShort';
import ActorsList from '../components/ActorsList';
import ErrorPage from './ErrorPage';

import type {
  HeroBaseData,
  HomeGeneralTypes,
  MoviesListTypes,
} from '../utils/types';

function HomePage() {
  const { data, isFetching, isError } = useGetTrendListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  const categories = data?.data;

  const IsHeroData = (data: HomeGeneralTypes): data is HeroBaseData[] => {
    if (data.every((el) => Object.hasOwn(el, 'backdropPath'))) return true;
    else return false;
  };

  const IsMoviesData = (data: HomeGeneralTypes): data is MoviesListTypes => {
    if (data.every((el) => Object.hasOwn(el, 'year'))) return true;
    else return false;
  };

  return (
    <section>
      {categories?.map((category) => {
        if (IsHeroData(category.data)) {
          return <HomeHero key={category.category} movies={category.data} />;
        } else if (IsMoviesData(category.data)) {
          return (
            <FilmListShort
              key={category.category}
              movies={category.data}
              heading={category.category}
              path={`/trending/${category.category.includes('Movies') ? 'movies' : 'tv'}`}
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
