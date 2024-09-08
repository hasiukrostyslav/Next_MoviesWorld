import { ServerError } from '../_error/error';
import {
  HomePageData,
  MovieCategoryResponse,
  MoviesPageResponse,
  ShowCategoryResponse,
} from './../_utils/types';

const baseURL = process.env.SERVER_URL;

export async function getHomeData(): Promise<HomePageData> {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getMoviesPageData(): Promise<MoviesPageResponse[]> {
  try {
    const res = await fetch(`${baseURL}/movies`);
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getMoviesCategoryPageData(
  params: string,
  page: string | undefined
): Promise<MovieCategoryResponse> {
  try {
    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(
      `${baseURL}/movies/category/${params}${searchParams}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getTrendingMovies(
  page: string | undefined
): Promise<MovieCategoryResponse> {
  try {
    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(`${baseURL}/trending/movies${searchParams}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getTrendingShows(
  page: string | undefined
): Promise<ShowCategoryResponse> {
  try {
    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(`${baseURL}/trending/tv${searchParams}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}
