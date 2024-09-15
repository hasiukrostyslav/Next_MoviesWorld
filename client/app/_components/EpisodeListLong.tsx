import type { EpisodeData } from '../_utils/types';
import EpisodeItem from './EpisodeItem';

interface EpisodeListLongProps {
  episodes: EpisodeData[];
}

function EpisodeListLong({ episodes }: { episodes: EpisodeData[] }) {
  return (
    <section className="mt-24">
      <h2 className="mb-5 text-3xl">{episodes.length} Episodes</h2>
      <ul className="flex flex-col gap-6">
        {episodes.map((episode) => (
          <EpisodeItem
            key={episode.id}
            episode={episode}
          />
        ))}
      </ul>
    </section>
  );
}

export default EpisodeListLong;

