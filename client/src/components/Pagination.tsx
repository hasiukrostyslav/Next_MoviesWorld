import { usePagination } from '../hooks/usePagination';
import PaginationButton from './PaginationButton';
import PaginationSpot from './PaginationSpot';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const { schema, curPage, selectPage, prevPage, nextPage } = usePagination(
    currentPage,
    totalPages,
  );

  return (
    <ul className="my-12 flex items-center gap-3 self-center">
      <PaginationButton prev disabled={curPage === 1} onClick={prevPage} />
      {schema.map((page, i) =>
        page ? (
          <PaginationButton
            onClick={() => selectPage(page)}
            page={page}
            active={page === curPage}
            key={page}
          />
        ) : (
          <PaginationSpot key={`${page}-${i}`} />
        ),
      )}

      <PaginationButton
        next
        disabled={curPage === totalPages}
        onClick={nextPage}
      />
    </ul>
  );
}

export default Pagination;
