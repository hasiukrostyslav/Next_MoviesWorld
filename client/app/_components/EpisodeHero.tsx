import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { ShowEpisode } from '../_utils/types';
import Button from './Button';
import Icon from './Icon';
import ShowNavigation from './ShowNavigation';
import Video from './Video';
import BackdropPoster from './BackdropPoster';

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
  const pathname = usePathname();
  const newPathname = !pathname.includes('season')
    ? pathname
    : pathname.split('/season').at(0);

  const {
    posterImg,
    showTitle,
    title,
    rating,
    overview,
    videoKey,
    episodeNumber,
    numberOfSeasons,
    seasonNumber,
    backupPoster,
  } = episode;

  return (
    <div className="flex h-hero flex-col">
      {(posterImg || backupPoster) && (
        <BackdropPoster
          src={posterImg || backupPoster}
          title={title}
        />
      )}
      {isOpenFrame && videoKey && <Video videoKey={videoKey} />}

      <div className="relative flex h-full items-center gap-10 text-slate-100">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="mb-6 flex items-end gap-2 text-5xl font-bold">
              {title}
              <span className="text-xl font-normal text-slate-400">
                {`${seasonNumber}x${
                  episodeNumber < 10 ? '0' + episodeNumber : episodeNumber
                }`}
              </span>
            </h2>
            <Link
              href={newPathname || ''}
              className="outline-round mb-6 w-fit p-1 text-2xl font-bold"
            >
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
              <Button
                onClick={openVideoFrame}
                color="primary"
                size="large"
              >
                Watch Trailer <Icon name="play" />
              </Button>
            )}
            <Button
              size="large"
              color="outlineWhite"
            >
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
