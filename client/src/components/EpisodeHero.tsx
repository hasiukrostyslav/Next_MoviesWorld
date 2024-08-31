import { useLocation, Link } from 'react-router-dom';
import type { ShowEpisode } from '../utils/types';
import BackdropPoster from './BackdropPoster';
import Button from './Button';
import Icon from './Icon';
import ShowNavigation from './ShowNavigation';
import Video from './Video';

interface MovieHeroProps {
  episode: ShowEpisode;
  isOpenFrame: boolean;
  numOfEpisodes: number;
  openVideoFrame(): void;
}

function EpisodeHero({
  episode,
  isOpenFrame,
  openVideoFrame,
  numOfEpisodes,
}: MovieHeroProps) {
  const location = useLocation();
  const pathname = !location.pathname.includes('season')
    ? location.pathname
    : location.pathname.split('/season').at(0);

  const {
    posterPath,
    showTitle,
    title,
    rating,
    overview,
    videoKey,
    episodeNumber,
    numberOfSeasons,
    seasonNumber,
  } = episode;

  return (
    <div className="flex h-hero flex-col">
      {posterPath && <BackdropPoster src={posterPath} title={title} />}
      {isOpenFrame && videoKey && <Video videoKey={videoKey} />}

      <div className="relative flex h-full items-center gap-10 text-slate-100">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="mb-6 flex items-end gap-2 text-5xl font-bold">
              {title}
              <span className="text-xl font-normal text-slate-400">
                {`${seasonNumber}x${episodeNumber < 10 ? '0' + episodeNumber : episodeNumber}`}
              </span>
            </h2>
            <Link to={pathname || ''} className="mb-6 text-2xl font-bold">
              {showTitle}
            </Link>

            {rating > 0 && (
              <p className="flex items-center gap-1 text-sm">
                <Icon name="star" />
                <span className="italic text-slate-400">{rating}</span>
              </p>
            )}

            <p className="mb-6 ml-1 text-sm leading-8">{overview}</p>
          </div>

          <div className="mt-3 flex gap-8">
            {videoKey && (
              <Button onClick={openVideoFrame} color="primary" size="large">
                Watch Trailer <Icon name="play" />
              </Button>
            )}
            <Button size="large" color="outlineWhite">
              Favorite <Icon name="favorite" />
            </Button>
          </div>
        </div>
      </div>

      <ShowNavigation
        numOfSeasons={numberOfSeasons}
        numOfEpisodes={numOfEpisodes}
      />
    </div>
  );
}

export default EpisodeHero;
