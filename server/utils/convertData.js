const convertMovieData = (movie) => ({
  id: movie.id,
  type: 'movie',
  title: movie.title,
  posterImg: movie.poster_path,
  year: new Date(movie?.release_date).getFullYear() || null,
  rating: +movie.vote_average ? +movie.vote_average.toFixed(1) : 0,
});

const convertShowData = (show) => ({
  id: show.id,
  type: 'tv',
  title: show.name,
  posterImg: show.poster_path,
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
    posterImg: season.poster_path,
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
    posterImg: episode.still_path,
    rating: +episode.vote_average.toFixed(1),
  }));

const convertActorData = (actor, character) => ({
  id: actor.id,
  name: actor.name,
  posterImg: actor.profile_path,
  character: character || null,
});

const convertData = (data, type) =>
  data.map((item) => {
    if (
      item.media_type === 'movie' ||
      item.media_type === 'collection' ||
      type === 'movie'
    )
      return convertMovieData(item);
    if (item.media_type === 'tv' || type === 'tv') return convertShowData(item);
    return convertActorData(item);
  });

const filterRedundantData = (array, query) =>
  array
    .filter((el) => el.posterImg)
    .filter((el) => {
      if (el.type)
        return el.title.toLowerCase().includes(query.trim().toLowerCase());
      return el.name.toLowerCase().includes(query.trim().toLowerCase());
    });

const getUniqueItems = (array) =>
  [...new Set(array.map((obj) => obj.id))].map((id) =>
    array.find((obj) => obj.id === id)
  );

module.exports = {
  convertMovieData,
  convertShowData,
  convertSeasonData,
  convertEpisodeData,
  convertActorData,
  convertData,
  getUniqueItems,
  filterRedundantData,
};
