'use client';

import { useSlider } from '../_hooks/useSlider';
import type { HeroBaseData } from '../_utils/types';
import HomeHeroItem from './HomeHeroItem';
import Poster from './Poster';
import SliderButton from './SliderButton';

function HomeHero({ movies }: { movies: HeroBaseData[] }) {
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
            >
              <Poster
                src={`${process.env.NEXT_PUBLIC_IMG_URL_MEDIUM}${movie.posterPath}`}
                title={movie.title}
              />
            </HomeHeroItem>
          ))}
      </ul>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <SliderButton
          onClick={prevMovie}
          direction="prev"
        />
        <SliderButton
          onClick={nextMovie}
          direction="next"
        />
      </div>
    </>
  );
}

export default HomeHero;

