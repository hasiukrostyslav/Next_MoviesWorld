'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { SearchBaseData, SearchResponse } from '../_utils/types';
import ActorCard from './ActorCard';
import MovieCard from './MovieCard';
import Button from './Button';
import { getMoreSearchedItems } from '../_actions/searchActions';

function SearchedList({ initialData }: { initialData: SearchResponse }) {
  const {
    data: searchedData,
    page,
    totalPages,
    results,
    resultPerPage,
  } = initialData.data;

  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type');
  const [items, setItems] = useState<SearchBaseData>(searchedData);

  const [params, setParams] = useState({ query, type });
  const [extraLoadSetting, setExtraLoadSetting] = useState({
    curPage: page,
    offSet: results - resultPerPage,
  });

  useEffect(() => {
    if (type !== params.type || query !== params.query) {
      setParams({ query, type });
      setItems(searchedData);
      setExtraLoadSetting({
        curPage: page,
        offSet: results - resultPerPage,
      });
    }
  }, [params, type, searchedData, page, resultPerPage, results, query]);

  async function loadMoreData() {
    const extraData = await getMoreSearchedItems(query, type, extraLoadSetting);
    const extraItems = extraData.data.data;
    setItems([...items, ...extraItems]);
    setExtraLoadSetting({
      curPage: extraData.data.page,
      offSet: extraData.data.results - extraData.data.resultPerPage,
    });
  }

  return (
    <>
      <ul className="mb-32 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
        {items.map((item) => {
          if ('type' in item)
            return (
              <MovieCard
                item={item}
                key={item.id}
              />
            );
          if ('character' in item)
            return (
              <ActorCard
                actor={item}
                key={item.id}
                className="min-w-44"
              />
            );
        })}
      </ul>
      {(extraLoadSetting.curPage < totalPages ||
        extraLoadSetting.offSet > 0) && (
        <Button
          size="large"
          color="primary"
          className="self-center"
          onClick={() => loadMoreData()}
        >
          Get more results
        </Button>
      )}
    </>
  );
}
export default SearchedList;
