const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { convertGenres, getTrendingListOfItem } = require('../utils/helpers');
const { convertMovieData, convertShowData } = require('../utils/convertData');

const convertResponseData = (data, category) => {
  switch (category) {
    case 'all': {
      return data.map((movie) => ({
        id: movie.id,
        type: movie.title ? 'movie' : 'tv',
        title: movie.title || movie.name,
        overview: movie.overview,
        backdropPath: movie.backdrop_path,
        posterPath: movie.poster_path,
        genres: convertGenres(movie.genre_ids),
      }));
    }

    case 'person': {
      return data.slice(0, 10).map((person) => ({
        id: person.id,
        name: person.name,
        imgPath: person.profile_path,
      }));
    }

    default: {
      return data
        .slice(0, 10)
        .map((movie) =>
          movie.title ? convertMovieData(movie) : convertShowData(movie)
        );
    }
  }
};

const searchParams = [
  {
    pathId: 'all',
    key: 'Trending All',
  },
  {
    pathId: 'movie',
    key: 'Trending Movies',
  },
  {
    pathId: 'tv',
    key: 'Trending Shows',
  },
  {
    pathId: 'person',
    key: 'Trending Actors',
  },
];

const getHomePageData = async (req, res, next) => {
  const request = searchParams.map((param) =>
    axiosRequest.get(`/trending/${param.pathId}/week`)
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchParams[index].key,
    data: convertResponseData(resData, searchParams[index].pathId),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

const getTrendingMovies = async (req, res, next) => {
  const { response, maxPage } = await getTrendingListOfItem(
    '/trending/movie/week',
    req
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

const getTrendingShows = async (req, res, next) => {
  const { response, maxPage } = await getTrendingListOfItem(
    '/trending/tv/week',
    req
  );

  const data = response.data.results.map((show) => convertShowData(show));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

module.exports = { getHomePageData, getTrendingMovies, getTrendingShows };
