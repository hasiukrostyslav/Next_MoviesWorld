const axiosRequest = require('./axiosInstance');
const genresTypes = require('../data/genresData.json');
const { NotFoundError } = require('../errors');
const { uniquePoster } = require('./constants');

const convertGenres = (ids) =>
  ids.map(
    (id) =>
      [...genresTypes.moviesGenres, ...genresTypes.showsGenres].find(
        (genre) => genre.id === id
      ).name
  );

const getMoviesData = (movie) => ({
  id: movie.id,
  type: 'movie',
  title: movie.title,
  posterPath: movie.poster_path,
  year: new Date(movie.release_date).getFullYear(),
  rating: +movie.vote_average.toFixed(1),
});

const getShowsData = (show) => ({
  id: show.id,
  type: 'tv',
  title: show.name,
  posterPath: show.poster_path,
  year: new Date(show.first_air_date).getFullYear(),
  rating: +show.vote_average.toFixed(1),
});

const randomSort = (arr) =>
  arr
    .filter((value) => value)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const convertCollectionResponse = (res, full) => {
  const collections = res.filter((el) => Object.hasOwn(el, 'collection'));
  const restMovies = res.filter((el) => !Object.hasOwn(el, 'collection'));

  const moviesRaw = randomSort(
    [...collections.flatMap((collect) => collect.movies), ...restMovies].filter(
      (movie) => movie.rating > 0
    )
  );

  const movies = full ? moviesRaw : moviesRaw.slice(0, 5);
  const wallpapers = collections.flatMap((collect) => collect.img.backdropImg);
  const poster = collections.map((collect) => collect.img.posterImg);

  return { collections, movies, wallpapers, poster };
};

const checkCollectionPoster = (key, poster) => {
  if (uniquePoster.find((title) => title === key)) {
    if (key === 'marvel') {
      return poster.at(3);
    }
    return poster.at(-2);
  }

  return poster.at(0);
};

const getMaxPage = async (path, params) => {
  const response = await axiosRequest.get(path, {
    params: { ...params, page: 100 },
  });

  const { data } = response;

  return data.results.length ? 100 : data.total_pages;
};

const getListOfItems = async (path, req, searchParams) => {
  const { key } = req.params;
  const { page } = req.query;

  const param = searchParams.find(
    (el) => el.key.toLowerCase() === key.toLowerCase().replaceAll('-', ' ')
  )?.params;

  if (!param)
    throw new NotFoundError(`Invalid category: Can't find category "${key}".`);

  const maxPage = await getMaxPage(path, {
    ...param,
    page: page || 1,
  });

  if (page > maxPage)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${maxPage}.`
    );

  const response = await axiosRequest.get(path, {
    params: { ...param, page: page || 1 },
  });

  return { response, maxPage };
};

const getTrendingListOfItem = async (path, req) => {
  const { page } = req.query;

  const maxPage = await getMaxPage(path, {
    page: page || 1,
  });

  if (page > maxPage)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${maxPage}.`
    );

  const response = await axiosRequest.get(path, {
    params: { page: page || 1 },
  });

  return { response, maxPage };
};

const getCollectionData = async function (isCollection) {
  if (!isCollection) return null;
  const { id } = isCollection;

  const response = await axiosRequest.get(`/collection/${id}`);

  return response.data.parts.map((movie) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
    rating: +movie.vote_average.toFixed(1),
    type: 'movie',
  }));
};

const getCast = async (type, id, season, episode) => {
  if (!id) return null;

  const seasonId = season ? `/season/${season}` : '';
  const episodeId = episode ? `/episode/${episode}` : '';

  const response = await axiosRequest.get(
    `/${type}/${id}${seasonId}${episodeId}/credits`
  );
  const cast = response.data.cast
    .filter((el) => el.profile_path && el.known_for_department === 'Acting')
    .map((actor) => ({
      id: actor.id,
      name: actor.name,
      character: actor.character,
      imgPath: actor.profile_path,
    }));
  return cast;
};

const getSeasons = (data, seasonId) => {
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

const getEpisodes = (data, seasonNum) =>
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

const getTrailer = async (type, id, season, episode) => {
  if (!id) return null;

  const seasonId = season ? `/season/${season}` : '';
  const episodeId = episode ? `/episode/${episode}` : '';

  const response = await axiosRequest.get(
    `/${type}/${id}${seasonId}${episodeId}/videos`
  );

  return response.data.results.find(
    (video) =>
      video.type.toLowerCase() === ('trailer' || 'clip') && video.official
  );
};

const getAge = (birthday, deathday) => {
  const dueDate = deathday ? new Date(deathday) : new Date();

  return Math.trunc((dueDate - new Date(birthday)) / (365 * 24 * 3600 * 1000));
};

const formatBiography = (text) => {
  const exception = 'Description above from the Wikipedia article';
  return text.match(exception) ? text.split(exception).at(0) : text;
};

module.exports = {
  convertGenres,
  getMoviesData,
  getShowsData,
  randomSort,
  checkCollectionPoster,
  convertCollectionResponse,
  getMaxPage,
  getListOfItems,
  getCast,
  getTrailer,
  getCollectionData,
  getTrendingListOfItem,
  getAge,
  formatBiography,
  getSeasons,
  getEpisodes,
};
