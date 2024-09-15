'use client';

import { createPortal } from 'react-dom';
import { useVideoFrame } from '../_hooks/useVideoFrame';
import type { Movie, Show, ShowEpisode, ShowSeason } from '../_utils/types';
import FrameOverlay from './FrameOverlay';
import MovieHero from './MovieHero';
import EpisodeHero from './EpisodeHero';

function MovieHeroContainer({
  movie,
}: {
  movie: Movie | Show | ShowSeason | ShowEpisode;
}) {
  const { isOpenFrame, openVideoFrame, closeVideoFrame } = useVideoFrame();

  return (
    <section>
      {isOpenFrame &&
        createPortal(<FrameOverlay onClick={closeVideoFrame} />, document.body)}

      {'episodeNumber' in movie ? (
        <EpisodeHero
          numOfEpisodes={movie.episodes.length}
          episode={movie}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />
      ) : (
        <MovieHero
          movie={movie}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />
      )}
    </section>
  );
}

export default MovieHeroContainer;
