import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useGetShowEpisodeQuery } from '../store';
import { useVideoFrame } from '../hooks/useVideoFrame';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import FrameOverlay from '../components/FrameOverlay';
import InfoSidebar from '../components/InfoSidebar';
import CastList from '../components/CastList';
import EpisodeHero from '../components/EpisodeHero';
import EpisodeListLong from '../components/EpisodeListLong';

function ShowEpisodePage() {
  const params = useParams();
  const { id, seasonId, episodeId } = params;
  const { data, isFetching, isError } = useGetShowEpisodeQuery({
    id,
    seasonId,
    episodeId,
  });
  const { isOpenFrame, openVideoFrame, closeVideoFrame } = useVideoFrame();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const episode = data.data;

    return (
      <section className="mb-20">
        {isOpenFrame &&
          createPortal(
            <FrameOverlay onClick={closeVideoFrame} />,
            document.body,
          )}

        <EpisodeHero
          numOfEpisodes={episode.episodes.length}
          episode={episode}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />

        <section className="my-5 flex justify-between gap-10">
          <CastList cast={episode.cast} />
          <InfoSidebar movie={episode} />
        </section>

        <EpisodeListLong episodes={episode.episodes} />
      </section>
    );
  }
}

export default ShowEpisodePage;
