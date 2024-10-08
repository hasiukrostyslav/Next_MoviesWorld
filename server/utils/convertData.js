const convertMovieData = (movie) => ({
  id: movie.id,
  type: 'movie',
  title: movie.title,
  posterPath: movie.poster_path,
  year: new Date(movie.release_date).getFullYear(),
  rating: +movie.vote_average.toFixed(1),
});

const convertShowData = (show) => ({
  id: show.id,
  type: 'tv',
  title: show.name,
  posterPath: show.poster_path,
  year: new Date(show.first_air_date).getFullYear(),
  rating: +show.vote_average.toFixed(1),
});

const convertSeasonData = (data, seasonId) => {
  const seasons = data.seasons
    .filter((item) => item.season_number !== 0)
    .filter((s) => (!seasonId ? s : s.id !== seasonId));

  return seasons.map((season) => ({
    id: data.id,
    seasonId: season.id,
    seasonNumber: season.season_number,
    type: 'tv',
    season: true,
    title: season.name,
    posterPath: season.poster_path,
    year: new Date(season.air_date).getFullYear(),
    rating: season.vote_average,
  }));
};

const convertEpisodeData = (data, seasonNum) =>
  data.map((episode) => ({
    id: episode.id,
    showId: episode.show_id,
    seasonNumber: +seasonNum,
    number: episode.episode_number,
    title: episode.name,
    releaseDate: episode.air_date,
    overview: episode.overview,
    runtime: episode.runtime,
    posterPath: episode.still_path,
    rating: +episode.vote_average.toFixed(1),
  }));

const convertActorData = (actor, character) => ({
  id: actor.id,
  name: actor.name,
  imgPath: actor.profile_path,
  character: character || null,
});

module.exports = {
  convertMovieData,
  convertShowData,
  convertSeasonData,
  convertEpisodeData,
  convertActorData,
};
