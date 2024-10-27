import type {
  CinemaListTypes,
  GeneralListTypes,
  HeroBaseData,
  Movie,
  Show,
  ShowEpisode,
  ShowSeason,
} from './types';

type ArrayData = ReturnType<typeof createMoviesInfoList>;
type Data = ArrayData[0];

const isCharUpper = function (ch: number) {
  return ch >= 65 && ch <= 90;
};

const splitStringsWords = function (string: string) {
  const newString = string
    .split('')
    .map((ch) => {
      const code = ch.charCodeAt(0);
      return isCharUpper(code) ? ` ${ch}` : ch;
    })
    .join('')
    .replace('Of', 'of');

  return newString[0].toUpperCase() + newString.slice(1);
};

export const createMoviesInfoList = function (
  item: Movie | Show | ShowSeason | ShowEpisode
) {
  // prettier-ignore
  const exception = [
    'id', 'title', 'overview', 'backdropImg', 'posterImg', 'cast', 'videoKey', 'collection', 'seasons', 'episodes', 'seasonTitle', 'showId', 'seasonId', 'showTitle', 'backupPoster',
  ];

  const keys = Object.keys(item) as Array<keyof typeof item>;

  return keys
    .filter((key) => !exception.find((el) => el === key))
    .map((key) => ({ key: splitStringsWords(key), data: item[key] }))
    .filter((el) => el.data !== undefined);
};

export const createRenderedValue = function (data: Data) {
  const { data: value, key: title } = data;

  let renderedValue;

  if (value === null) return 'ND';
  else if (typeof value === 'number') {
    if (value === 0) renderedValue = 'ND';
    else if (title === 'Runtime') renderedValue = value + 'min';
    else if (title === 'Budget' || title === 'Revenue')
      renderedValue = new Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    else renderedValue = value;
  } else if (typeof value === 'string') {
    if (!value) renderedValue = 'ND';
    else renderedValue = value;
  } else {
    if (value.length === 0) renderedValue = 'ND';
    else renderedValue = value.join(', ');
  }

  return renderedValue;
};

export const formatDate = function (str: string | null | undefined) {
  if (!str) return null;

  const date = new Date(str);

  const dateFormatter = new Intl.DateTimeFormat('us-EN', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

  return dateFormatter.format(date);
};

// Types Checker

export const isTypeOfHero = (
  data: GeneralListTypes
): data is HeroBaseData[] => {
  if (data.every((el) => Object.hasOwn(el, 'backdropImg'))) return true;
  else return false;
};

export const isTypeOfCinema = (
  data: GeneralListTypes
): data is CinemaListTypes => {
  if (data.every((el) => Object.hasOwn(el, 'year'))) return true;
  else return false;
};

// Images

export const getImageSize = (size: 'small' | 'medium') => {
  const url =
    size === 'small'
      ? process.env.NEXT_PUBLIC_IMG_URL_SMALL
      : process.env.NEXT_PUBLIC_IMG_URL_MEDIUM;

  const width = Number(url.split('/w').at(-1)?.slice(0, 3));
  const height = Number(url.split('_h').at(-1)?.slice(0, 3));

  return { width, height };
};

// Formatters

export const formatTextLength = (
  text: string,
  maxLength: number,
  pad: number
) =>
  text.length < maxLength ? text : text.slice(0, pad).padEnd(pad + 2, '...');

export const convertParamToString = (str: string) =>
  str
    .split('-')
    .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
    .join(' ');
