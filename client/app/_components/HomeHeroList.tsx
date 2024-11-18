import { getHomePageData } from '../_lib/data-service';
import { isTypeOfHero } from '../_utils/helper';
import HomeHero from './HomeHero';

async function HomeHeroList() {
  const categories = await getHomePageData();

  return (
    <>
      {categories.map((category) => {
        if (isTypeOfHero(category.data)) {
          return (
            <HomeHero
              key={category.category}
              movies={category.data}
            />
          );
        }
      })}
    </>
  );
}

export default HomeHeroList;
