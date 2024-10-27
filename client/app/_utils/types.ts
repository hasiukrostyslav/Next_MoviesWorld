export type SocialLinks = 'facebook' | 'instagram' | 'youtube' | 'x';

// Response types
export interface ResponseSkeleton {
  status: string;
  results?: number;
}

export interface MoviesPageResponse {
  category: string;
  data: MovieBaseData[];
}

export interface ShowsPageResponse {
  category: string;
  data: MovieBaseData[];
}

export interface MovieCategoryResponse extends ResponseSkeleton {
  page: number;
  totalPages: number;
  data: MovieBaseData[];
}

export interface ShowCategoryResponse extends ResponseSkeleton {
  page: number;
  totalPages: number;
  data: ShowBaseData[];
}

export interface CartoonsPageResponse {
  category: string;
  type: string;
  data: MovieBaseData[];
}

export interface ActorsPageResponse extends ResponseSkeleton {
  page: number;
  totalPages: number;
  data: ActorBaseData[];
}

export interface CartoonsCategoryResponse extends ResponseSkeleton {
  page: number;
  totalPages: number;
  data: MovieBaseData[];
}

export interface CollectionsPageResponse extends ResponseSkeleton {
  results: number;
  data: CollectionData[];
}

export type SearchBaseData = (MovieBaseData | ShowBaseData | ActorBaseData)[];

export interface SearchResponse {
  status: string;
  data: {
    page: number;
    totalPages: number;
    totalResults: number;
    results: number;
    resultPerPage: number;
    data: SearchBaseData;
  };
}

// List types
export type GeneralListTypes =
  | HeroBaseData[]
  | MovieBaseData[]
  | ShowBaseData[]
  | ActorBaseData[];

export type CinemaListTypes =
  | MovieBaseData[]
  | ShowBaseData[]
  | SeasonBaseData[];

export type CinemaTypes = MovieBaseData | ShowBaseData | SeasonBaseData;

// Data types
export type HomePageData = [{ category: string; data: GeneralListTypes }];

export interface HeroBaseData {
  id: number;
  type: 'movie' | 'tv';
  title: string;
  overview: string;
  backdropImg: string;
  posterImg: string;
  genres: string[];
}

export interface MovieBaseData {
  id: number;
  type?: 'movie';
  title: string;
  posterImg: string;
  year: number;
  rating: number;
}

export interface ShowBaseData {
  id: number;
  type?: 'tv';
  title: string;
  posterImg: string;
  year: number;
  rating: number;
}

export interface ActorBaseData {
  id: number;
  name: string;
  posterImg: string;
  character: string | null;
}

export interface SeasonBaseData extends ShowBaseData {
  seasonId: number;
  seasonNumber: number;
  season: true;
}

export interface Actor {
  id: number;
  name: string;
  birthday: string;
  age: number;
  deathday: string | null;
  birthplace: string;
  posterImg: string;
  biography: string;
  credits: (MovieBaseData | ShowBaseData)[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterImg: string;
  backdropImg: string;
  status: string;
  releaseDate: string;
  runtime: number;
  revenue: number;
  rating: number;
  budget: number;
  genres: string[];
  countries: string[];
  languages: string[];
  cast: ActorBaseData[];
  collection: MovieBaseData[];
  videoKey: string | null;
}

export interface Show {
  id: number;
  title: string;
  overview: string;
  posterImg: string;
  backdropImg: string;
  status: string;
  releaseDate: string;
  runtime: number;
  revenue: number;
  rating: number;
  budget: number;
  genres: string[];
  countries: string[];
  languages: string[];
  numberOfSeasons: number;
  numberOfEpisodes: number;
  cast: ActorBaseData[];
  seasons: SeasonBaseData[];
  videoKey: string | null;
}

export interface ShowSeason {
  showId: number;
  seasonId: number;
  seasonTitle: string;
  seasonNumber: number;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  title: string;
  releaseDate: string;
  posterImg: string;
  backdropImg: string;
  genres: string[];
  rating: number;
  overview: string;
  videoKey: string;
  backupPoster: string;
  episodes: EpisodeBaseData[];
  seasons: SeasonBaseData[];
  cast: ActorBaseData[];
}

export interface ShowEpisode {
  id: number;
  showTitle: string;
  title: string;
  releaseDate: string;
  posterImg: string;
  rating: number;
  overview: string;
  episodeNumber: number;
  seasonNumber: number;
  numberOfSeasons: number;
  runtime: number;
  videoKey: string;
  backupPoster: string;
  episodes: EpisodeData[];
  cast: ActorBaseData[];
}

export interface EpisodeBaseData {
  id: number;
  showId: number;
  seasonNumber: number;
  number: number;
  title: string;
  posterImg: string;
  rating: number;
}

export interface EpisodeData extends EpisodeBaseData {
  releaseDate: string;
  overview: string;
  runtime: number;
}

export interface CollectionData {
  id: number[];
  key: string;
  collection: string[];
  backdropImg: string;
  img: {
    posterImg: string;
    backdropImg: string;
  };
  movies: MovieBaseData[];
}

export interface CollectionPoster {
  key: string;
  img: {
    posterImg: string;
    backdropImg: string;
  };
}
