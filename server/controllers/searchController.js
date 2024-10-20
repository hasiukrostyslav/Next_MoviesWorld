const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const axiosRequest = require('../utils/axiosInstance');
const { convertData } = require('../utils/convertData');

const getSearchedItems = async (req, res, next) => {
  const { query, type, searchId, remain } = req.query;

  let requestType;
  if (!type) requestType = 'multi';
  if (type === 'movies') requestType = 'movie';
  if (type === 'shows') requestType = 'tv';
  if (type === 'actors') requestType = 'person';

  const path = `/search/${requestType}`;

  const response = await axiosRequest.get(path, {
    params: { query, type, page: searchId || 1 },
  });

  if (searchId && searchId > response.data.total_pages)
    throw new NotFoundError(
      `Invalid searchId: searchId start at 1 and max at ${response.data.total_pages}.`
    );

  const responseData = response.data;

  let data = convertData(responseData.results, requestType)
    .filter((el) => el.imgPath || el.posterPath)
    .filter((el) => {
      if (el.type)
        return el.title.toLowerCase().includes(query.trim().toLowerCase());
      return el.name.toLowerCase().includes(query.trim().toLowerCase());
    })
    .slice(remain ? -remain : 0);
  const initialParams = {
    page: responseData.page,
    totalPages: responseData.total_pages,
    totalResults: responseData.total_results,
    resultPerPage: responseData.results.length,
    results: data.length,
    data,
    redundantData: [],
  };
  for (
    let i = initialParams.page + 1;
    initialParams.results < initialParams.resultPerPage &&
    initialParams.page < initialParams.totalPages;
    i += 1
  ) {
    initialParams.page = i;
    const newResponse = await axiosRequest.get(path, {
      params: { query, type, page: i },
    });
    const newData = convertData(newResponse.data.results, requestType)
      .filter((el) => el.imgPath || el.posterPath)
      .filter((el) => {
        if (el.type)
          return el.title.toLowerCase().includes(query.trim().toLowerCase());
        return el.name.toLowerCase().includes(query.trim().toLowerCase());
      })
      .slice(remain ? -remain : 0);
    data = [...data, ...newData];
    initialParams.results = data.length;
    if (data.length > initialParams.resultPerPage) {
      initialParams.data = data.slice(0, 20);
      initialParams.redundantData = data.slice(20);
    } else {
      initialParams.data = data;
    }
  }
  res.status(StatusCodes.OK).json({
    status: 'success',
    data: initialParams,
  });
};

module.exports = { getSearchedItems };
