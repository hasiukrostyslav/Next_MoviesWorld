import { getHomePageData } from '../_lib/data-service';
import { isTypeOfCinema } from '../_utils/helper';
import FilmListShort from './FilmsListShort';

async function HomeMoviesList() {
  const categories = await getHomePageData();

  return (
    <>
      {categories.map((category) => {
        if (isTypeOfCinema(category.data)) {
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
        }
      })}
    </>
  );
}

export default HomeMoviesList;
