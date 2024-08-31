import { useLocation, useMatch } from 'react-router-dom';

export function useMatchTheme() {
  const matchHome = useMatch('/');
  const matchCollection = useMatch('collections');
  const location = useLocation();
  const matchPath =
    location.pathname.includes('view/tv') ||
    location.pathname.includes('view/movie');

  const match = matchHome || matchCollection || matchPath;

  return match;
}
