import { notFound } from 'next/navigation';
import { ServerError } from '../_error/error';
import type {
  Actor,
  ActorsPageResponse,
  CartoonsCategoryResponse,
  CartoonsPageResponse,
  CollectionData,
  CollectionsPageResponse,
  HomePageData,
  Movie,
  MovieCategoryResponse,
  MoviesPageResponse,
  SearchResponse,
  Show,
  ShowCategoryResponse,
  ShowEpisode,
  ShowSeason,
  ShowsPageResponse,
} from './../_utils/types';

const baseURL = process.env.SERVER_URL;

// Home
export async function getHomePageData(): Promise<HomePageData> {
  try {
    const res = await fetch(baseURL, { next: { revalidate: 3600 } });
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getTrendingMovies(
  page: string | undefined
): Promise<MovieCategoryResponse> {
  try {
    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(`${baseURL}/trending/movies${searchParams}`, {
      next: { revalidate: 3600 },
    });
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

    const res = await fetch(`${baseURL}/trending/tv${searchParams}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Movies
export async function getMoviesPageData(): Promise<MoviesPageResponse[]> {
  try {
    const res = await fetch(`${baseURL}/movies`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getMoviesByCategory(
  params: string | undefined,
  page: string | undefined
): Promise<MovieCategoryResponse> {
  try {
    if (!params) notFound();

    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(
      `${baseURL}/movies/category/${params}${searchParams}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getMovieById(id: string | undefined): Promise<Movie> {
  try {
    if (!id) notFound();

    const res = await fetch(`${baseURL}/view/movie/${id}`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Cartoons
export async function getCartoonsPageData(): Promise<CartoonsPageResponse[]> {
  try {
    const res = await fetch(`${baseURL}/cartoons`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getCartoonsByCategory(
  type: string,
  key: string,
  page: string | undefined
): Promise<CartoonsCategoryResponse> {
  try {
    if (!type || !key) notFound();

    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(
      `${baseURL}/cartoons/category/${type}/${key}/${searchParams}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Shows
export async function getShowsPageData(): Promise<ShowsPageResponse[]> {
  try {
    const res = await fetch(`${baseURL}/tv`, { next: { revalidate: 3600 } });
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getShowsByCategory(
  params: string | undefined,
  page: string | undefined
): Promise<MovieCategoryResponse> {
  try {
    if (!params) notFound();

    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(`${baseURL}/tv/category/${params}${searchParams}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getShowById(id: string | undefined): Promise<Show> {
  try {
    if (!id) notFound();

    const res = await fetch(`${baseURL}/view/tv/${id}`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getShowSeason(
  id: string | undefined,
  seasonId: string | undefined
): Promise<ShowSeason> {
  try {
    if (!id || !seasonId) notFound();

    const res = await fetch(`${baseURL}/view/tv/${id}/season/${seasonId}`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getShowEpisode(
  id: string,
  seasonId: string,
  episodeId: string
): Promise<ShowEpisode> {
  try {
    if (!id || !seasonId || !episodeId) notFound();

    const res = await fetch(
      `${baseURL}/view/tv/${id}/season/${seasonId}/episode/${episodeId}`,
      { next: { revalidate: 3600 } }
    );

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Collections
export async function getCollectionsPageData(): Promise<CollectionsPageResponse> {
  try {
    const res = await fetch(`${baseURL}/collections`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getCollectionById(id: string): Promise<CollectionData> {
  try {
    if (!id) notFound();
    const res = await fetch(`${baseURL}/collections/${id}`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Actors
export async function getActorsPageData(
  page: string | undefined
): Promise<ActorsPageResponse> {
  try {
    const searchParams = page ? `?page=${page}` : '';

    const res = await fetch(`${baseURL}/actors${searchParams}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getActorById(id: string | undefined): Promise<Actor> {
  try {
    if (!id) notFound();

    const res = await fetch(`${baseURL}/view/actor/${id}`, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

// Search
export async function getSearchedItems(
  query: string,
  type: string | null
): Promise<SearchResponse> {
  try {
    if (!query) notFound();

    const typeParam = type ? `&type=${type}` : '';
    const searchParams = `?query=${query}${typeParam}`;

    const res = await fetch(`${baseURL}/search${searchParams}`, {
      cache: 'no-store',
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}
