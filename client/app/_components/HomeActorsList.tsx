import { getHomePageData } from '../_lib/data-service';
import { isTypeOfActor, isTypeOfCinema, isTypeOfHero } from '../_utils/helper';

import ActorsList from './ActorsList';

async function HomeActorsList() {
  const categories = await getHomePageData();

  return (
    <>
      {categories.map((category) => {
        if (
          isTypeOfActor(category.data) &&
          !isTypeOfHero(category.data) &&
          !isTypeOfCinema(category.data)
        ) {
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
    </>
  );
}

export default HomeActorsList;
