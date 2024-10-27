import { getSearchedItems } from '@/app/_lib/data-service';
import SearchedList from '@/app/_components/SearchedList';
import Tabs from '@/app/_components/Tabs';

type Props = {
  searchParams: {
    query: string;
    type: string | null;
  };
};

async function SearchPage({ searchParams }: Props) {
  const { query, type } = searchParams;

  const data = await getSearchedItems(query, type);

  return (
    <section className="flex flex-col py-20">
      <h2 className="text-2xl font-semibold">
        Search results:{' '}
        <span className="text-xl font-medium text-slate-700 dark:text-slate-400">
          &quot;{query}&quot;
        </span>
      </h2>
      <Tabs />
      <SearchedList initialData={data} />
    </section>
  );
}

export default SearchPage;
