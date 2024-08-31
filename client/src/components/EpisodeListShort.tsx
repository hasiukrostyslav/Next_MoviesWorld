import type { EpisodeBaseData } from '../utils/types';
import EpisodeCard from './EpisodeCard';

interface EpisodeListShortProps {
  episodes: EpisodeBaseData[];
}

function EpisodeListShort({ episodes }: EpisodeListShortProps) {
  return (
    <div className="flex flex-col pt-20">
      <h2 className="text-3xl font-semibold">Episodes</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-x-4 gap-y-16 px-4">
        {episodes.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </ul>
    </div>
  );
}

export default EpisodeListShort;
