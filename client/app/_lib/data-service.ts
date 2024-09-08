import { ServerError } from '../_error/error';
import { HomePageData } from './../_utils/types';

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
