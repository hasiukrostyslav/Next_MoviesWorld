import { getActorsPageData } from '../_lib/actors-utils';
import Pagination from './Pagination';

async function ActorsPagePagination({ page }: { page: string | undefined }) {
  const data = await getActorsPageData(page);

  if ('message' in data) return;

  const { page: currentPage, totalPages } = data;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

export default ActorsPagePagination;
