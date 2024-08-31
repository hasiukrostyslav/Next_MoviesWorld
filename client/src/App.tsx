import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store';
import Layout from './pages/Layout';
import OuterLayout from './pages/OuterLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/MoviesPage';
import CartoonsPage from './pages/CartoonsPage';
import ShowsPage from './pages/ShowsPage';
import CollectionsPage from './pages/CollectionsPage';
import ActorsPage from './pages/ActorsPage';
import UserPage from './pages/UserPage';
import TrendingMoviesPage from './pages/TrendingMoviesPage';
import TrendingShowsPage from './pages/TrendingShowsPage';
import MoviesByCategoryPage from './pages/MoviesByCategoryPage';
import ShowsByCategoryPage from './pages/ShowsByCategoryPage';
import CartoonsByCategoryPage from './pages/CartoonsByCategoryPage';
import CollectionPage from './pages/CollectionPage';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import ShowPage from './pages/ShowPage';
import ShowSeasonPage from './pages/ShowSeasonPage';
import ShowEpisodePage from './pages/ShowEpisodePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: '/trending/movies', element: <TrendingMoviesPage /> },
      { path: '/trending/tv', element: <TrendingShowsPage /> },
      {
        path: 'movies',
        children: [
          { index: true, element: <MoviesPage /> },
          { path: 'category/:key', element: <MoviesByCategoryPage /> },
        ],
      },

      {
        path: 'cartoons',
        children: [
          { index: true, element: <CartoonsPage /> },
          { path: 'category/:type/:key', element: <CartoonsByCategoryPage /> },
        ],
      },
      {
        path: 'tv',
        children: [
          { index: true, element: <ShowsPage /> },
          { path: 'category/:key', element: <ShowsByCategoryPage /> },
        ],
      },
      { path: 'actors', element: <ActorsPage /> },
      {
        path: 'collections',
        children: [
          { index: true, element: <CollectionsPage /> },
          { path: ':id', element: <CollectionPage /> },
        ],
      },
      {
        path: 'view',
        children: [
          {
            path: 'movie/:id',
            element: <MoviePage />,
          },
          {
            path: 'actor/:id',
            element: <ActorPage />,
          },
          {
            path: 'tv/:id',
            element: <ShowPage />,
          },
          {
            path: 'tv/:id/season/:seasonId',
            element: <ShowSeasonPage />,
          },
          {
            path: 'tv/:id/season/:seasonId/episode/:episodeId',
            element: <ShowEpisodePage />,
          },
        ],
      },
      { path: 'user', element: <UserPage /> },
    ],
  },
  {
    path: '/auth',
    element: <OuterLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
  {
    path: '*',
    element: <OuterLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
]);

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
