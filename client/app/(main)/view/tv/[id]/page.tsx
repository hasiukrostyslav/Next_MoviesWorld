import { getShowById } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import FilmListLong from '@/app/_components/FilmListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';

async function ShowPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const show = await getShowById(id);

  return (
    <section className="mb-10">
      <MovieHeroContainer movie={show} />

      <section className="my-5 flex justify-between gap-10">
        <CastList cast={show.cast} />
        <InfoSidebar movie={show} />
      </section>

      {show.seasons && (
        <FilmListLong
          heading="Seasons"
          movies={show.seasons}
          className="pb-20"
        />
      )}
    </section>
  );
}

export default ShowPage;
