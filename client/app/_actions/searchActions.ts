'use server';

import { SearchBaseData, SearchResponse } from '../_utils/types';
import { ServerError } from '../_error/error';
import { notFound, redirect } from 'next/navigation';

const baseURL = process.env.SERVER_URL;

export async function submitSearchForm(formData: FormData) {
  const query = formData.get('query') as string;

  if (!query || query.length < 3) return;

  redirect(`/search?query=${query}`);
}

export async function getFastSearch(query: string): Promise<SearchBaseData> {
  try {
    const res = await fetch(`${baseURL}/search?query=${query}`);
    const data = await res.json();

    // if (data.error.statusCode === 404) notFound();

    return data?.data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

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
