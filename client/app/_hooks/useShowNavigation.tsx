'use clients';

import { useParams, useRouter } from 'next/navigation';

export function useShowNavigation(
  numOfSeasons: number,
  numOfEpisodes?: number | null
) {
  const params = useParams();
  const router = useRouter();

  const maxPages = 27;

  const { id, seasonId, episodeId } = params;
  const seasons = Array.from({ length: numOfSeasons }, (_, i) => i + 1);
  const episodes = Array.from({ length: numOfEpisodes || 0 }, (_, i) => i + 1);

  const selectSeason = (season: number) =>
    router.push(`/view/tv/${id}/season/${season}`);

  const selectEpisode = (episode: number) =>
    router.push(`/view/tv/${id}/season/${seasonId}/episode/${episode}`);

  const currentSeason = seasonId && +seasonId;
  const currentEpisode = episodeId && +episodeId;

  return {
    seasons,
    episodes,
    selectSeason,
    selectEpisode,
    currentSeason,
    currentEpisode,
    maxPages,
  };
}

