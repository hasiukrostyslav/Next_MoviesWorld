import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { themeReducer } from './slice/themeSlice';
import { homeApi } from './api/homeAPI';
import { moviesApi } from './api/moviesAPI';
import { cartoonsApi } from './api/cartoonsAPI';
import { showsApi } from './api/showsAPI';
import { collectionsApi } from './api/collectionsAPI';
import { actorsApi } from './api/actorsAPI';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cartoonsApi.reducerPath]: cartoonsApi.reducer,
    [showsApi.reducerPath]: showsApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [actorsApi.reducerPath]: actorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(homeApi.middleware)
      .concat(moviesApi.middleware)
      .concat(cartoonsApi.middleware)
      .concat(showsApi.middleware)
      .concat(collectionsApi.middleware)
      .concat(actorsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();

export * from './slice/themeSlice';
export * from './api/homeAPI';
export * from './api/moviesAPI';
export * from './api/cartoonsAPI';
export * from './api/showsAPI';
export * from './api/collectionsAPI';
export * from './api/actorsAPI';
