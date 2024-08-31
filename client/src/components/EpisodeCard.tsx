import { Link } from 'react-router-dom';
import { imgSize, imgURL } from '../utils/constants';
import type { EpisodeBaseData } from '../utils/types';

interface EpisodeCardProps {
  episode: EpisodeBaseData;
}

function EpisodeCard({ episode }: EpisodeCardProps) {
  const { seasonNumber, title, posterPath, number: episodeNum } = episode;

  return (
    <li className="flex flex-col">
      <img
        className="rounded-md"
        src={`${imgURL}${imgSize.large}${posterPath}`}
        alt="Episode Image"
      />
      <span className="font-lights my-1 ml-1 text-sm">
        {seasonNumber}x{episodeNum < 10 ? `0${episodeNum}` : episodeNum}
      </span>
      <Link
        to={`episode/${episodeNum}`}
        className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-800 focus-visible:ring-4 hover:dark:text-slate-400"
      >
        {title}
      </Link>
    </li>
  );
}

export default EpisodeCard;
