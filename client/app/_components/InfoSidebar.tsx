import type { Movie, Show, ShowEpisode, ShowSeason } from '../_utils/types';
import { createMoviesInfoList } from '../_utils/helper';
import InfoItem from './InfoItem';

function InfoSidebar({
  movie,
}: {
  movie: Movie | Show | ShowSeason | ShowEpisode;
}) {
  const data = createMoviesInfoList(movie);

  return (
    <aside className="mt-12 basis-2/12">
      {data.map((info) => (
        <InfoItem
          key={info.key}
          data={info}
        />
      ))}
    </aside>
  );
}

export default InfoSidebar;

