import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePagination(currentPage: number, totalPages: number) {
  const navigate = useNavigate();
  const [schema, setSchema] = useState<(number | null)[] | []>([]);
  const [curPage, setCurPage] = useState<number>(1);

  const schemaParams = useMemo(
    () => ({
      length: 7,
      buttons: 6,
      firstButtons: 4,
      lastButtons: totalPages - 3,
      diff: 3,
    }),
    [totalPages],
  );

  useEffect(() => {
    setCurPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (totalPages <= schemaParams.buttons) {
      const array = Array.from({ length: totalPages }, (_, i) => i + 1);
      setSchema(array);
    } else {
      if (curPage <= schemaParams.firstButtons) {
        const array = Array.from({ length: schemaParams.length }, (_, i) => {
          if (i <= schemaParams.firstButtons) return i + 1;
          if (i > schemaParams.firstButtons && i < schemaParams.length - 1)
            return null;
          else return totalPages;
        });
        setSchema(array);
      }

      if (curPage >= schemaParams.lastButtons) {
        const array = Array.from({ length: schemaParams.length }, (_, i) => {
          if (i === 0) return 1;
          if (i <= schemaParams.length - schemaParams.buttons && i > 0)
            return null;
          else return schemaParams.lastButtons + i - schemaParams.diff;
        });

        setSchema(array);
      }

      if (
        curPage > schemaParams.firstButtons &&
        curPage < schemaParams.lastButtons
      ) {
        const array = Array.from({ length: schemaParams.length }, (_, i) => {
          if (i === 0) return 1;
          if (i > 1 && i < schemaParams.length - 2) {
            if (i === 2) return curPage - 1;
            if (i === 3) return curPage;
            if (i === 4) return curPage + 1;
          }
          if (i === schemaParams.length - 1) return totalPages;
          else return null;
        });
        setSchema(array);
      }
    }
  }, [totalPages, curPage, schemaParams]);

  const prevPage = () => {
    setCurPage((c) => c - 1);
    navigate(`?page=${curPage - 1}`);
  };

  const nextPage = () => {
    setCurPage((c) => c + 1);
    navigate(`?page=${curPage + 1}`);
  };

  const selectPage = (page: number) => {
    setCurPage(() => page);
    navigate(`?page=${page}`);
  };

  return { schema, curPage, setCurPage, prevPage, nextPage, selectPage };
}
