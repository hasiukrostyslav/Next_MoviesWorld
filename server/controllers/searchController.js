const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { filterMoviesByLanguage } = require('../utils/helpers');
const {
  convertMovieData,
  convertShowData,
  convertActorData,
} = require('../utils/convertData');

const getSearchedItems = async (req, res, next) => {
  const { query } = req.query;

  const response = await axiosRequest.get('/search/multi', {
    params: { query },
  });

  const data = filterMoviesByLanguage(response.data.results);

  const movies = data
    .filter((item) => item.media_type === 'movie')
    .map((item) => convertMovieData(item));

  const tv = data
    .filter((item) => item.media_type === 'tv')
    .map((item) => convertShowData(item));

  const actors = data
    .filter((item) => item.media_type === 'person' && item.profile_path)
    .map((actor) => convertActorData(actor));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: movies.length + tv.length + actors.length,
    data: {
      movies: {
        results: movies.length,
        data: movies,
      },
      tv: {
        results: tv.length,
        data: tv,
      },
      actors: {
        results: actors.length,
        data: actors,
      },
    },
  });
};

module.exports = { getSearchedItems };
