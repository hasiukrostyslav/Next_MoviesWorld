import { getMovieById } from '@/app/_lib/data-service';
import CastList from '@/app/_components/CastList';
import FilmListLong from '@/app/_components/FilmListLong';
import InfoSidebar from '@/app/_components/InfoSidebar';
import MovieHeroContainer from '@/app/_components/MovieHeroContainer';

async function MoviePage({ params }: { params: { id: string } }) {
  const { id } = params;
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
