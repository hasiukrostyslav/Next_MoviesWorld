const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const axiosRequest = require('../utils/axiosInstance');
const {
  convertMovieData,
  convertShowData,
  convertActorData,
} = require('../utils/convertData');

const getSearchedItems = async (req, res, next) => {
  const { query, page, type } = req.query;

  let requestType;
  if (!type) requestType = 'multi';
  if (type === 'movies') requestType = 'movie';
  if (type === 'shows') requestType = 'tv';
  if (type === 'actors') requestType = 'person';

  const path = `/search/${requestType}`;

  const response = await axiosRequest.get(path, {
    params: { query, type, page },
  });

  if (page > response.data.total_pages)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${response.data.total_pages}.`
    );
  const data = response.data.results.map((item) => {
    if (item.media_type === 'movie' || requestType === 'movie')
      return convertMovieData(item);
    if (item.media_type === 'tv' || requestType === 'tv')
      return convertShowData(item);
    return convertActorData(item);
  });

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: response.data.total_pages,
    results: data.length,
    data,
  });
};

module.exports = { getSearchedItems };
