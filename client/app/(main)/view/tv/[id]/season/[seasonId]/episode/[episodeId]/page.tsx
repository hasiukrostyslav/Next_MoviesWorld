import { getShowEpisode } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import EpisodeListLong from '@/app/_components/EpisodeListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';

async function ShowEpisodePage({
  params,
}: {
  params: { id: string; seasonId: string; episodeId: string };
}) {
  const { id, seasonId, episodeId } = params;
  const episode = await getShowEpisode(id, seasonId, episodeId);

  return (
    <section className="mb-20">
      <MovieHeroContainer movie={episode} />

      <section className="my-5 flex justify-between gap-10">
        <CastList cast={episode.cast} />
        <InfoSidebar movie={episode} />
      </section>

      <EpisodeListLong episodes={episode.episodes} />
    </section>
  );
}

export default ShowEpisodePage;
