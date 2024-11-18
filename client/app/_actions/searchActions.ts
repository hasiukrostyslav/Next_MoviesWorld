'use server';

import { notFound, redirect } from 'next/navigation';
import { ServerError } from '../_error/error';
import type { SearchBaseData, SearchResponse } from '../_utils/types';

const baseURL = process.env.SERVER_URL;

export async function submitSearchForm(formData: FormData) {
  const query = formData.get('query') as string;

  if (!query || query.length < 3) return;

  redirect(`/search?query=${query}`);
}

export async function getFastSearch(query: string): Promise<SearchBaseData> {
  const res = await fetch(`${baseURL}/search?query=${query}`);
  const data = await res.json();

  // if (res.status === 404) notFound();

  return data?.data.data;
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
