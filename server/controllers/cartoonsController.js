const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { cartoonSearchParams } = require('../utils/constants');
const { getListOfItems } = require('../utils/helpers');
const { convertMovieData, convertShowData } = require('../utils/convertData');

const getCartoonListsByCategory = async (req, res, next) => {
  const request = cartoonSearchParams.map((category) =>
    axiosRequest.get(`/discover/${category.path}`, { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: cartoonSearchParams[index].key,
    type: cartoonSearchParams[index].path,
    data: resData
      .map((movie) =>
        cartoonSearchParams[index].path === 'movie'
          ? convertMovieData(movie)
          : convertShowData(movie)
      )
      .slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

const getCartoonList = async (req, res, next) => {
  const { type } = req.params;
  const { response, maxPage } = await getListOfItems(
    `/discover/${type}`,
    req,
    cartoonSearchParams
  );

  const data = response.data.results.map((movie) =>
    type === 'movie' ? convertMovieData(movie) : convertShowData(movie)
  );

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

module.exports = {
  getCartoonListsByCategory,
  getCartoonList,
};
