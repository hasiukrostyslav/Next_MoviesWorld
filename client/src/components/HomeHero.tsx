import { useSlider } from '../hooks/useSlider';
import type { HeroBaseData } from '../utils/types';
import HomeHeroItem from './HomeHeroItem';
import SliderButton from './SliderButton';

interface HeroProps {
  movies: HeroBaseData[];
}

function HomeHero({ movies }: HeroProps) {
  const { currentMovie, nextMovie, prevMovie } = useSlider(movies, 3000);

  return (
    <>
      <ul className="flex h-hero overflow-hidden">
        {movies &&
          movies.map((movie, i) => (
            <HomeHeroItem
              key={movie.id}
              movie={movie}
              index={i}
              currentMovie={currentMovie}
            />
          ))}
      </ul>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <SliderButton onClick={prevMovie} direction="prev" />
        <SliderButton onClick={nextMovie} direction="next" />
      </div>
    </>
  );
}

export default HomeHero;
