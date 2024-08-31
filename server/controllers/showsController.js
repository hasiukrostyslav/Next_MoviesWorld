const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { showSearchParams } = require('../utils/constants');
const {
  getShowsData,
  getListOfItems,
  getCast,
  getTrailer,
  getSeasons,
  getEpisodes,
} = require('../utils/helpers');

const getShowListsByCategory = async (req, res, next) => {
  const request = showSearchParams.map((category) =>
    axiosRequest.get('/discover/tv', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: showSearchParams[index].key,
    data: resData.map((movie) => getShowsData(movie)).slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

const getShowList = async (req, res, next) => {
  const { response, maxPage } = await getListOfItems(
    '/discover/tv',
    req,
    showSearchParams
  );

  const data = response.data.results.map((movie) => getShowsData(movie));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

const getShow = async (req, res, next) => {
  const { id } = req.params;

  const response = await axiosRequest.get(`/tv/${id}`);
  const { data } = response;

  const cast = await getCast('tv', data.id);
  const video = await getTrailer('tv', id);
  const seasons = getSeasons(data);

  const show = {
    id: data.id,
    title: data.name,
    releaseDate: data.first_air_date,
    status: data.status,
    overview: data.overview,
    backdropPath: data.backdrop_path,
    posterPath: data.poster_path,
    genres: data.genres.map((genre) => genre.name),
    rating: +data.vote_average.toFixed(1),
    languages: data.spoken_languages.map((language) => language.english_name),
    countries: data.production_countries.map((country) => country.name),
    numberOfSeasons: data.number_of_seasons,
    numberOfEpisodes: data.number_of_episodes,
    seasons,
    cast,
    videoKey: video?.key || null,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: show,
  });
};

const getSeason = async (req, res, next) => {
  const { id, seasonId } = req.params;

  const showResponse = await axiosRequest.get(`/tv/${id}`);
  const video = await getTrailer('tv', id, seasonId);
  const seasonResponse = await axiosRequest.get(`/tv/${id}/season/${seasonId}`);

  const { data: showData } = showResponse;
  const { data: seasonData } = seasonResponse;

  const cast = await getCast('tv', showData.id, seasonId);
  const seasons = getSeasons(showData, seasonData.id);
  const episodes = getEpisodes(seasonData.episodes, seasonData.season_number);

  const season = {
    showId: showData.id,
    seasonId: seasonData.id,
    seasonTitle: seasonData.name,
    title: showData.name,
    releaseDate: seasonData.air_date,
    posterPath: seasonData.poster_path,
    backdropPath: showData.backdrop_path,
    genres: showData.genres.map((genre) => genre.name),
    rating: +seasonData.vote_average.toFixed(1),
    seasonNumber: seasonData.season_number,
    numberOfSeasons: showData.number_of_seasons,
    numberOfEpisodes: seasonData.episodes.length,
    overview: seasonData.overview,
    videoKey: video?.key || null,
    episodes,
    seasons,
    cast,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: season,
  });
};

const getEpisode = async (req, res, next) => {
  const { id, seasonId, episodeId } = req.params;

  const showResponse = await axiosRequest.get(`/tv/${id}`);
  const episodeResponse = await axiosRequest.get(
    `/tv/${id}/season/${seasonId}/episode/${episodeId}`
  );
  const { data: showData } = showResponse;
  const { data: episodeData } = episodeResponse;

  const cast = await getCast('tv', id, seasonId, episodeId);
  const video = await getTrailer('tv', id, seasonId, episodeId);

  const seasonResponse = await axiosRequest.get(`/tv/${id}/season/${seasonId}`);
  const episodes = getEpisodes(seasonResponse.data.episodes, seasonId);

  const episode = {
    id: episodeData.id,
    showTitle: showData.name,
    title: episodeData.name,
    releaseDate: episodeData.air_date,
    posterPath: episodeData.still_path,
    rating: +episodeData.vote_average.toFixed(1),
    overview: episodeData.overview,
    episodeNumber: episodeData.episode_number,
    seasonNumber: episodeData.season_number,
    numberOfSeasons: showData.number_of_seasons,
    runtime: episodeData.runtime,
    videoKey: video?.key || null,
    cast,
    episodes,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: episode,
  });
};

module.exports = {
  getShowListsByCategory,
  getShowList,
  getShow,
  getSeason,
  getEpisode,
};
