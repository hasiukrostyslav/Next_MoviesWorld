import { getShowById } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import FilmListLong from '@/app/_components/FilmListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const show = await getShowById(id);
  const title = 'Show: ' + show.title;

  return { title };
}

async function ShowPage({ params }: Props) {
  const id = (await params).id;
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
