import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { HomePageResponse } from '../../utils/types';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),

  endpoints: (builder) => {
    return {
      getTrendList: builder.query<HomePageResponse, void>({
        query: () => {
          return {
            url: '/',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetTrendListQuery } = homeApi;
export { homeApi };
