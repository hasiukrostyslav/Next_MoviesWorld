const { StatusCodes } = require('http-status-codes');
const { NotFoundError, AppError } = require('../errors');
const axiosRequest = require('../utils/axiosInstance');
const {
  convertData,
  getUniqueItems,
  filterRedundantData,
  filterLanguageData,
} = require('../utils/convertData');

const getSearchedItems = async (req, res, next) => {
  const { query, type, searchId, remain } = req.query;

  if (!query || query.length < 3) {
    throw new AppError('Query string should contain at least 3 character', 500);
  }

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

  const filteredResponseData = filterLanguageData(responseData.results);

  const convertedData = filterRedundantData(
    convertData(filteredResponseData, requestType),
    query
  );

  let data = getUniqueItems(convertedData).slice(remain ? -remain : 0);

  if (!data.length && !searchId) {
    throw new NotFoundError(`No data found for '${query}'`);
  }

  const initialParams = {
    page: responseData.page,
    totalPages: responseData.total_pages,
    totalResults: responseData.total_results,
    resultPerPage: responseData.results.length,
    results: data.length,
    data,
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

    const filteredNewResponseData = filterLanguageData(
      newResponse.data.results
    );

    const extraData = filterRedundantData(
      convertData(filteredNewResponseData, requestType),
      query
    );

    data = getUniqueItems([
      ...data,
      ...getUniqueItems(extraData).slice(remain ? -remain : 0),
    ]);

    initialParams.results = data.length;
    if (data.length > initialParams.resultPerPage) {
      initialParams.data = data.slice(0, 20);
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
