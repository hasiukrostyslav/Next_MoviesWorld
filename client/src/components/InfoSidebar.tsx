import { createMoviesInfoList } from '../utils/helper';
import type { Movie, Show, ShowEpisode, ShowSeason } from '../utils/types';
import InfoItem from './InfoItem';

interface InfoSidebarProps {
  movie: Movie | Show | ShowSeason | ShowEpisode;
}

function InfoSidebar({ movie }: InfoSidebarProps) {
  const data = createMoviesInfoList(movie);

  return (
    <aside className="mt-12 basis-2/12">
      {data.map((info) => (
        <InfoItem key={info.key} data={info} />
      ))}
    </aside>
  );
}

export default InfoSidebar;
