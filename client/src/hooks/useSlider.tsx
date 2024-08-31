import { useEffect, useState } from 'react';
import { CollectionPoster, HeroBaseData } from '../utils/types';

type List = HeroBaseData[] | CollectionPoster[];
type TimeOut = 3000 | 5000;

export function useSlider(list: List, timeout: TimeOut) {
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovie(currentMovie === list.length - 1 ? 0 : currentMovie + 1);
    }, timeout);

    return () => clearInterval(intervalId);
  }, [list, timeout, currentMovie]);

  const nextMovie = () =>
    setCurrentMovie((c) => (c === list.length - 1 ? 0 : c + 1));
  const prevMovie = () =>
    setCurrentMovie((c) => (c === 0 ? list.length - 1 : c - 1));

  return { currentMovie, nextMovie, prevMovie };
}
