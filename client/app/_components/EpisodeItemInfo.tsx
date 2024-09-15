'use client';

import { useParams } from 'next/navigation';
import type { EpisodeData } from '../_utils/types';
import { formatDate } from '../_utils/helper';
import NavigationLink from './NavigationLink';

function EpisodeItemInfo({ episode }: { episode: EpisodeData }) {
  const params = useParams();
  const isCurrentEpisode = Number(params.episodeId) === episode.number;
  return (
    <div
      className={`ml-3 flex w-full flex-col rounded-md p-2 ${
        isCurrentEpisode ? '' : 'bg-slate-200 dark:bg-slate-900'
      }`}
    >
      <p className="flex items-center gap-2 text-xl font-semibold">
        <span className=" text-red-500">
          {episode.seasonNumber}x
          {episode.number < 10 ? '0' + episode.number : episode.number}
        </span>

        <NavigationLink
          // className="text-slate-500"
          href={`/view/tv/${episode.showId}/season/${episode.seasonNumber}/episode/${episode.number}`}
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
  );
}

export default EpisodeItemInfo;
