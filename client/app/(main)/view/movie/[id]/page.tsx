import type { Metadata } from 'next';
import { getMovieById } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import FilmListLong from '@/app/_components/FilmListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const movie = await getMovieById(id);
  const title = 'Movie: ' + movie.title;

  return { title };
}

async function MoviePage({ params }: Props) {
  const id = (await params).id;
  const movie = await getMovieById(id);

  return (
    <section className="mb-10">
      <MovieHeroContainer movie={movie} />

      <section className="my-5 flex justify-between gap-10">
        <CastList cast={movie.cast} />
        <InfoSidebar movie={movie} />
      </section>

      {movie.collection && (
        <FilmListLong
          heading="Recommended movies"
          movies={movie.collection}
          className="pb-20"
        />
      )}
    </section>
  );
}

export default MoviePage;
