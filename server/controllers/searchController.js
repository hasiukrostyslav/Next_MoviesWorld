const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData, getShowsData } = require('../utils/helpers');

const searchMovie = async (req, res, next) => {
  const { query } = req.query;

  const movieResponse = await axiosRequest.get('/search/movie', {
    params: { query },
  });

  const tvResponse = await axiosRequest.get('/search/tv', {
    params: { query },
  });

  const movieData = movieResponse.data.results
    .filter((movie) => movie.vote_count > 1000)
    .map((movie) => getMoviesData(movie));

  const tvData = tvResponse.data.results
    .filter((tv) => tv.vote_count > 500)
    .map((tv) => getShowsData(tv));

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: [...movieData, ...tvData],
  });
};

module.exports = { searchMovie };
