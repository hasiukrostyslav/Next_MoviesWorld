const collectionsIDs = [
  {
    marvel: [
      131292,
      131296,
      131295,
      86311,
      284433,
      422834,
      618529,
      531241,
      529892,
      623911,
      912503,
      448150,
      [1724, 497698, 524434],
    ],
  },
  {
    detective_Comics: [
      209131,
      468552,
      573693,
      724848,
      531242,
      987044,
      263,
      948485,
      [141052, 495764, 791373, 436270, 298618, 565770],
    ],
  },
  { star_Wars: [10, [330459, 348350]] },
  { jurassic_World: [328] },
  { harry_Potter: [1241, 435259] },
  { lord_Of_The_Rings: [119, 121938] },
  { james_Bond: [645] },
];

const uniquePoster = ['detective_Comics', 'marvel'];

const showSearchParams = [
  {
    key: 'New',
    params: {
      with_original_language: 'en',
      page: 1,
      'vote_count.gte': 50,
      first_air_date_year: new Date().getFullYear(),
    },
  },
  {
    key: 'Trending',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
    },
  },
];

const movieSearchParams = [
  {
    key: 'New',
    params: {
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
    },
  },
  {
    key: 'Trending',
    params: {
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular',
    params: {
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    params: {
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
    },
  },
  {
    key: 'Highest Grossing',
    params: {
      sort_by: 'revenue.desc',
    },
  },
];

const cartoonSearchParams = [
  {
    key: 'Trending',
    path: 'movie',
    params: {
      with_genres: 16,

      sort_by: 'popularity.desc',
      page: 1,
    },
  },
  {
    key: 'Popular',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'vote_count.desc',
      page: 1,
    },
  },
  {
    key: 'Top Rated',
    path: 'movie',
    params: {
      with_genres: 16,
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
      page: 1,
    },
  },
  {
    key: 'Highest Grossing',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'revenue.desc',
      page: 1,
    },
  },
  {
    key: 'Trending',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
    },
  },
];

module.exports = {
  collectionsIDs,
  uniquePoster,
  showSearchParams,
  movieSearchParams,
  cartoonSearchParams,
};
