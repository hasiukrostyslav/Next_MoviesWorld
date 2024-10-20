import { getSearchedItems } from '@/app/_lib/data-service';
import Pagination from '@/app/_components/Pagination';
import SearchedList from '@/app/_components/SearchedList';
import Tabs from '@/app/_components/Tabs';

type Props = {
  searchParams: {
    query: string;
    type: string | undefined;
    page: string | undefined;
  };
};

async function SearchPage({ searchParams }: Props) {
  const { query, type, page } = searchParams;

  const data = await getSearchedItems(query, type, page);

  const { data: searchedData, page: currentPage, totalPages } = data;
  return (
    <section className="flex flex-col pt-20">
      <h2 className="text-2xl font-semibold">
        Search results:{' '}
        <span className="text-xl font-medium text-slate-700 dark:text-slate-400">
          "{query}"
        </span>
      </h2>
      <Tabs />
      <SearchedList searchedItems={searchedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default SearchPage;
