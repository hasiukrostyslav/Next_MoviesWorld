const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const axiosRequest = require('../utils/axiosInstance');
const {
  getMaxPage,
  getActorAge,
  formatActorBiography,
} = require('../utils/helpers');
const {
  convertMovieData,
  convertShowData,
  convertActorData,
} = require('../utils/convertData');

const getAllActors = async (req, res, next) => {
  const path = 'trending/person/week';
  const { page } = req.query;

  const maxPage = await getMaxPage(path);

  if (page > maxPage)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${maxPage}.`
    );

  const response = await axiosRequest.get(path, {
    params: { page },
  });

  const data = response.data.results.map((actor) => convertActorData(actor));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

const getActor = async (req, res, next) => {
  const { id } = req.params;

  const actorResponse = await axiosRequest.get(`/person/${id}`);
  const movieResponse = await axiosRequest.get(`/person/${id}/movie_credits`);
  const tvResponse = await axiosRequest.get(`/person/${id}/tv_credits`);

  const { data: actorData } = actorResponse;
  const moviesData = movieResponse.data.cast.map((movie) =>
    convertMovieData(movie)
  );

  const age = getActorAge(actorData.birthday, actorData.deathday);
  const biography = formatActorBiography(actorData.biography);
  const tvData = tvResponse.data.cast.map((movie) => convertShowData(movie));
  const credits = [...moviesData, ...tvData]
    .filter((item) => item.year)
    .sort((a, b) => b.year - a.year)
    .reduce((movies, el) => {
      if (!movies.length) movies.push(el);
      if (!movies.find((mv) => mv.id === el.id)) movies.push(el);

      return movies;
    }, []);

  const actor = {
    id: actorData.id,
    name: actorData.name,
    birthday: actorData.birthday,
    age,
    deathday: actorData.deathday,
    birthplace: actorData.place_of_birth,
    imgPath: actorData.profile_path,
    biography,
    credits,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: actor,
  });
};

module.exports = { getAllActors, getActor };
