import { useRef, useState } from 'react';
import { useMaxWidth } from '../hooks/useMaxWidth';
import { useShowNavigation } from '../hooks/useShowNavigation';
import PaginationButton from './PaginationButton';

interface ShowNavigationProps {
  numOfSeasons: number;
  numOfEpisodes?: number | null;
}

function ShowNavigation({ numOfSeasons, numOfEpisodes }: ShowNavigationProps) {
  const [pageS, setPageS] = useState(0);
  const [pageE, setPageE] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { maxWidth, containerWidth } = useMaxWidth(divRef, headingRef);
  const {
    seasons,
    episodes,
    selectSeason,
    selectEpisode,
    currentEpisode,
    currentSeason,
    maxPages,
  } = useShowNavigation(numOfSeasons, numOfEpisodes);
  const btnWidth = 40;
  const maxBtn = (maxWidth && Math.trunc(parseFloat(maxWidth) / btnWidth)) || 0;

  const prevSeasonPage = () => setPageS((p) => p - 1);
  const nextSeasonPage = () => setPageS((p) => p + 1);

  const prevEpisodePage = () => setPageE((p) => p - 1);
  const nextEpisodePage = () => setPageE((p) => p + 1);

  return (
    <div ref={divRef} className="relative mb-10 w-full">
      <div className="mb-4 flex w-full items-center">
        <h4 ref={headingRef} className="min-w-20 text-slate-400">
          Seasons:
        </h4>

        <div
          className={`flex max-w-[${containerWidth}] relative items-center overflow-hidden`}
        >
          {numOfSeasons >= maxPages && (
            <PaginationButton
              prev
              dark
              className="shrink-0"
              onClick={prevSeasonPage}
              disabled={pageS === 0}
            />
          )}

          <ul
            className={`${numOfSeasons >= maxPages && 'mx-2'} relative flex max-w-[${maxWidth}] gap-2 overflow-hidden`}
          >
            {seasons.map((season, i) => (
              <PaginationButton
                key={season}
                page={season}
                onClick={() => selectSeason(season)}
                outline
                disabled={season === currentSeason}
                className={`shrink-0 ${i >= pageS && i < maxBtn + pageS ? '' : 'hidden'}  ${
                  season === currentSeason
                    ? 'border-slate-700 text-slate-700'
                    : ''
                }`}
              />
            ))}
          </ul>

          {numOfSeasons >= maxPages && (
            <PaginationButton
              next
              dark
              className="shrink-0"
              onClick={nextSeasonPage}
              disabled={pageS + maxBtn >= numOfSeasons}
            />
          )}
        </div>
      </div>

      {numOfEpisodes && (
        <div className="flex items-center">
          <h4 className="min-w-20 text-slate-400">Episodes:</h4>

          <div
            className={`flex max-w-[${containerWidth}] items-center overflow-hidden`}
          >
            {numOfEpisodes >= maxPages && (
              <PaginationButton
                prev
                dark
                className="shrink-0"
                disabled={pageE === 0}
                onClick={prevEpisodePage}
              />
            )}

            <ul
              className={`${numOfEpisodes >= maxPages && 'mx-2'} relative flex max-w-[${maxWidth}] gap-2 overflow-hidden`}
            >
              {episodes.map((episode, i) => (
                <PaginationButton
                  key={episode}
                  page={episode}
                  onClick={() => selectEpisode(episode)}
                  outline
                  disabled={episode === currentEpisode}
                  className={`shrink-0 ${i >= pageE && i < maxBtn + pageE ? '' : 'hidden'} ${
                    episode === currentEpisode
                      ? 'border-slate-700 text-slate-700'
                      : ''
                  }`}
                />
              ))}
            </ul>

            {numOfEpisodes >= maxPages && (
              <PaginationButton
                next
                dark
                className="shrink-0"
                onClick={nextEpisodePage}
                disabled={pageE + maxBtn >= numOfEpisodes}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowNavigation;
