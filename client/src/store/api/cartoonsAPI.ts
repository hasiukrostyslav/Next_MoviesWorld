import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CartoonsCategoryResponse,
  CartoonsPageResponse,
} from '../../utils/types';

interface CartoonsByCategory {
  key: string | undefined;
  type: string | undefined;
  page: number;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const cartoonsApi = createApi({
  reducerPath: 'cartoons',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getCartoonsLists: builder.query<CartoonsPageResponse, void>({
        query: () => {
          return {
            url: '/cartoons',
            method: 'GET',
          };
        },
      }),

      getCartoonsByCategory: builder.query<
        CartoonsCategoryResponse,
        CartoonsByCategory
      >({
        query: ({ key, type, page }) => {
          return {
            url: `/cartoons/category/${type}/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),
    };
  },
});

export const { useGetCartoonsListsQuery, useGetCartoonsByCategoryQuery } =
  cartoonsApi;
export { cartoonsApi };
