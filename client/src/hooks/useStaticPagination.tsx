import { useSearchParams } from 'react-router-dom';
import { ActorBaseData, MovieBaseData, ShowBaseData } from '../utils/types';

export function useStaticPagination(
  items: ActorBaseData[] | (MovieBaseData | ShowBaseData)[],
) {
  const [searchParams] = useSearchParams();
  const itemsPerPage = 10;
  const currentPage = Number(searchParams.get('page') || 1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const remainder = items.length % itemsPerPage;

  return { currentPage, totalPages, itemsPerPage, remainder };
}
