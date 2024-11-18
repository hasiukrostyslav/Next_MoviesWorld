import 'server-only';
import type { Actor, ActorsPageResponse } from '../_utils/types';
import { ServerError } from '../_error/error';
import { notFound } from 'next/navigation';

const baseURL = process.env.SERVER_URL;

interface Error {
  message: string;
  code: number;
}

export async function getActorsPageData(
  page: string | undefined
): Promise<ActorsPageResponse> {
  try {
    const res = await fetch(`${baseURL}/actors${page ? `?page=${page}` : ''}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}

export async function getActorById(id: string | undefined): Promise<Actor> {
  try {
    if (!id) notFound();

    const res = await fetch(`${baseURL}/view/actor/${id}`);
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new ServerError('Something went wrong. Please try again!');
  }
}
