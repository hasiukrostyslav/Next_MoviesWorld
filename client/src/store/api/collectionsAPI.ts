import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionsList, CollectionsPageResponse } from '../../utils/types';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const collectionsApi = createApi({
  reducerPath: 'collections',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getAllCollection: builder.query<CollectionsPageResponse, void>({
        query: () => {
          return {
            url: '/collections',
            method: 'GET',
          };
        },
      }),

      getCollection: builder.query<CollectionsList, string | undefined>({
        query: (id) => {
          return {
            url: `/collections/${id}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetAllCollectionQuery, useGetCollectionQuery } =
  collectionsApi;
export { collectionsApi };
