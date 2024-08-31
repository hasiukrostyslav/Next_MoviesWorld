import { useParams } from 'react-router-dom';
import { imgSize, imgURL } from '../utils/constants';
import { formatDate } from '../utils/helper';
import { EpisodeData } from '../utils/types';
import NavigationLink from './NavigationLink';

interface EpisodeItemProps {
  episode: EpisodeData;
}

function EpisodeItem({ episode }: EpisodeItemProps) {
  const params = useParams();
  const isCurrentEpisode = Number(params.episodeId) === episode.number;

  return (
    <>
      <li className="flex h-44">
        <div className="relative w-max">
          <img
            className="h-full w-96 rounded-md"
            src={`${imgURL}${imgSize.large}${episode.posterPath}`}
            alt="Episode Image"
          />
        </div>
        <div
          className={`ml-3 flex w-full flex-col rounded-md p-2 ${isCurrentEpisode ? '' : 'bg-slate-200 dark:bg-slate-900'}`}
        >
          <p className="flex items-center gap-2 text-xl font-semibold">
            <span className=" text-red-500">
              {episode.seasonNumber}x
              {episode.number < 10 ? '0' + episode.number : episode.number}
            </span>

            <NavigationLink
              path={`/view/tv/${episode.showId}/season/${episode.seasonNumber}/episode/${episode.number}`}
            >
              {episode.title}
            </NavigationLink>
            {episode.number === 1 && (
              <span className="ml-auto rounded-md bg-green-500 px-2 py-1 text-xs font-light text-slate-50">
                Season Premiere
              </span>
            )}
          </p>
          <span className="mb-1 text-sm italic text-slate-500 dark:text-slate-400">
            {formatDate(episode.releaseDate)}
          </span>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {episode.overview}
          </p>
        </div>
      </li>
    </>
  );
}

export default EpisodeItem;
