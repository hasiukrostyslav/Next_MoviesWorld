'use server';

import { SearchResponse } from '../_utils/types';
import { ServerError } from '../_error/error';

const baseURL = process.env.SERVER_URL;

export async function getMoreSearchedItems(
  query: string | null,
  type: string | null,
  extraLoadSetting: { curPage: number; offSet: number }
): Promise<SearchResponse> {
  try {
    const { curPage, offSet } = extraLoadSetting;

    const typeParam = type ? `&type=${type}` : '';
    const remainParam = offSet > 0 ? `&remain=${offSet}` : '';
    const searchId = remainParam ? curPage : curPage + 1;

    const searchParams = `?query=${query}${typeParam}&searchId=${searchId}${remainParam}`;

    const res = await fetch(`${baseURL}/search${searchParams}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}
