import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Movie, Show, ShowSeason } from '../_utils/types';
import BackdropPoster from './BackdropPoster';
import Button from './Button';
import Icon from './Icon';
import Poster from './Poster';
import Video from './Video';
import ShowNavigation from './ShowNavigation';

interface MovieHeroProps {
  movie: Movie | Show | ShowSeason;
  isOpenFrame: boolean;
  openVideoFrame(): void;
}

function MovieHero({ movie, isOpenFrame, openVideoFrame }: MovieHeroProps) {
  const pathname = usePathname();
  const location = !pathname.includes('season')
    ? pathname
    : pathname.split('/season').at(0);

  const {
    backdropImg,
    posterImg,
    title,
    releaseDate,
    rating,
    genres,
    overview,
    videoKey,
  } = movie;

  return (
    <div className="flex h-hero flex-col">
      {backdropImg && (
        <BackdropPoster
          src={backdropImg}
          title={title}
        />
      )}
      {isOpenFrame && videoKey && <Video videoKey={videoKey} />}

      <div className="relative flex grow items-center gap-10">
        <div className="mb-10 basis-1/4">
          <Poster
            src={
              posterImg
                ? `${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${posterImg}`
                : '/imgMovieAlt.jpg'
            }
            title={title}
          />
        </div>

        <div className="mb-10 flex basis-2/3 flex-col text-slate-100">
          <div className="flex flex-col">
            <Link
              href={pathname || ''}
              className="outline-round mb-4 flex w-fit items-end gap-2 p-1 text-3xl font-bold"
            >
              {title}
              <span className="text-xl font-normal text-slate-400">
                {new Date(releaseDate).getFullYear() || ''}
              </span>
            </Link>

            <div className="mb-3 flex items-center gap-3">
              {'seasonTitle' in movie && (
                <h4 className="text-lg italic">{movie.seasonTitle}</h4>
              )}

              {rating > 0 && (
                <p className="flex items-center gap-1 text-sm">
                  <Icon name="star" />
                  <span className="italic text-slate-400">{rating}</span>
                </p>
              )}

              {genres.length > 0 && (
                <span className="text-sm italic text-slate-400">
                  {genres.join('  /  ')}
                </span>
              )}
            </div>

            <p className="mb-4 ml-1 text-sm leading-8">{overview}</p>
          </div>

          <div className="mt-2 flex gap-8">
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

      {'numberOfSeasons' in movie && (
        <ShowNavigation
          numOfSeasons={movie.numberOfSeasons}
          numOfEpisodes={
            pathname.includes('season') ? movie.numberOfEpisodes : null
          }
        />
      )}
    </div>
  );
}

export default MovieHero;
