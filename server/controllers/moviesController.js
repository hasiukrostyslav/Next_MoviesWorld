const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { movieSearchParams } = require('../utils/constants');
const {
  getListOfItems,
  getCast,
  getCollectionData,
  getTrailer,
} = require('../utils/helpers');
const { convertMovieData } = require('../utils/convertData');

const getMovieListsByCategory = async (req, res, next) => {
  const request = movieSearchParams.map((category) =>
    axiosRequest.get('/discover/movie', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: movieSearchParams[index].key,
    data: resData.map((movie) => convertMovieData(movie)).slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data: data,
  });
};

const getMoviesList = async (req, res, next) => {
  const { response, maxPage } = await getListOfItems(
    '/discover/movie',
    req,
    movieSearchParams
  );

  const data = response.data.results.map((movie) => convertMovieData(movie));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

const getMovie = async (req, res, next) => {
  const { id } = req.params;

  const response = await axiosRequest.get(`/movie/${id}`);
  const { data } = response;

  const collection = await getCollectionData(data.belongs_to_collection);
  const cast = await getCast('movie', data.id);
  const video = await getTrailer('movie', id);

  const movie = {
    id: data.id,
    title: data.title,
    releaseDate: data.release_date,
    status: data.status,
    overview: data.overview,
    backdropImg: data.backdrop_path,
    posterImg: data.poster_path,
    genres: data.genres.map((genre) => genre.name),
    rating: +data.vote_average.toFixed(1),
    languages: data.spoken_languages.map((language) => language.english_name),
    countries: data.production_countries.map((country) => country.name),
    runtime: data.runtime,
    budget: data.budget,
    revenue: data.revenue,
    collection: collection?.filter((item) => item.year && item.id !== data.id),
    cast,
    videoKey: video?.key || null,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: movie,
  });
};

module.exports = { getMovieListsByCategory, getMoviesList, getMovie };
