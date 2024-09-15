import { Metadata } from 'next';
import { getShowSeason } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import EpisodeListShort from '@/app/_components/EpisodeListShort';
import FilmListLong from '@/app/_components/FilmListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';

type Props = {
  params: { id: string; seasonId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, seasonId } = params;
  const season = await getShowSeason(id, seasonId);
  const title = `Show: ${season.title} - ${season.seasonTitle}`;

  return { title };
}

async function ShowSeasonPage({ params }: Props) {
  const { id, seasonId } = params;

  const season = await getShowSeason(id, seasonId);

  return (
    <section className="mb-10">
      <MovieHeroContainer movie={season} />

      <section className="my-5 flex justify-between gap-10">
        <CastList cast={season.cast} />
        <InfoSidebar movie={season} />
      </section>

      <EpisodeListShort episodes={season.episodes} />

      {season.seasons.filter((s) => s.seasonNumber !== season.seasonNumber)
        .length > 0 && (
        <FilmListLong
          heading="Other Seasons"
          movies={season.seasons}
          className="pb-20"
        />
      )}
    </section>
  );
}

export default ShowSeasonPage;
