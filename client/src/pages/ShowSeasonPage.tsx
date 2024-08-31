import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useGetShowSeasonQuery } from '../store';
import { useVideoFrame } from '../hooks/useVideoFrame';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import FrameOverlay from '../components/FrameOverlay';
import MovieHero from '../components/MovieHero';
import InfoSidebar from '../components/InfoSidebar';
import FilmListLong from '../components/FilmListLong';
import EpisodeListShort from '../components/EpisodeListShort';
import CastList from '../components/CastList';

function ShowSeasonPage() {
  const params = useParams();
  const { id, seasonId } = params;
  const { data, isFetching, isError } = useGetShowSeasonQuery({ id, seasonId });
  const { isOpenFrame, openVideoFrame, closeVideoFrame } = useVideoFrame();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const season = data.data;

    return (
      <section className="mb-10">
        {isOpenFrame &&
          createPortal(
            <FrameOverlay onClick={closeVideoFrame} />,
            document.body,
          )}

        <MovieHero
          movie={season}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />

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
}

export default ShowSeasonPage;
