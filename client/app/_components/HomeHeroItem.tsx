import { formatTextLength } from '../_utils/helper';
import type { HeroBaseData } from '../_utils/types';
import BackdropPoster from './BackdropPoster';
import ButtonLink from './ButtonLink';

interface HeroItemProps {
  children: React.ReactNode;
  movie: HeroBaseData;
  currentMovie: number;
  index: number;
}

function HomeHeroItem({ children, movie, currentMovie, index }: HeroItemProps) {
  return (
    <li
      className={`flex min-w-full text-slate-100 ${
        index === currentMovie ? '' : 'hidden'
      }`}
    >
      <div className="absolute left-0 top-0 h-screen w-full">
        <BackdropPoster
          src={movie.backdropPath}
          title={movie.title}
        />
      </div>

      <div className="z-20 flex items-center justify-between">
        <div className="flex basis-1/2 flex-col">
          <h1 className="mb-4 text-5xl font-bold">{movie.title}</h1>
          <span className="mb-5 ml-2 text-xs">
            {movie.genres.join('  /  ')}
          </span>
          <p className="mb-6 ml-1 text-sm leading-8">
            {formatTextLength(movie.overview, 200, 205)}
          </p>
          <ButtonLink
            href={`/view/${movie.type}/${movie.id}`}
            className="z-20 ml-1 self-start"
            color="primary"
            size="large"
          >
            View Movie
          </ButtonLink>
        </div>
        <div className="basis-1/4">{children}</div>
      </div>
    </li>
  );
}

export default HomeHeroItem;

