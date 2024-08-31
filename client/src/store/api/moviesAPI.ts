import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  MovieCategoryResponse,
  MovieResponse,
  MoviesPageResponse,
} from '../../utils/types';

interface MoviesByCategory {
  key: string | undefined;
  page: number;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getMoviesLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/movies',
            method: 'GET',
          };
        },
      }),

      getTrendingMovies: builder.query<MovieCategoryResponse, number>({
        query: (page) => {
          return {
            url: '/trending/movies',
            method: 'GET',
            params: { page },
          };
        },
      }),

      getMoviesByCategory: builder.query<
        MovieCategoryResponse,
        MoviesByCategory
      >({
        query: ({ key, page }) => {
          return {
            url: `/movies/category/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),

      getMovieById: builder.query<MovieResponse, string | undefined>({
        query: (id) => {
          return {
            url: `/view/movie/${id}`,
            method: 'GET',
            params: { id },
          };
        },
      }),
    };
  },
});

export const {
  useGetMoviesListsQuery,
  useGetTrendingMoviesQuery,
  useGetMoviesByCategoryQuery,
  useGetMovieByIdQuery,
} = moviesApi;
export { moviesApi };
