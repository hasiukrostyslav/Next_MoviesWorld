import { Suspense } from 'react';
import { getActorsPageData } from '@/app/_lib/actors-utils';
import type { Metadata } from 'next';
import ActorsPageList from '@/app/_components/ActorsPageList';
import Skeleton from '@/app/_components/Skeleton';
import Pagination from '@/app/_components/Pagination';

export const metadata: Metadata = {
  title: 'Actors',
};

async function ActorsPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const page = (await searchParams).page;
  const data = await getActorsPageData(page);

  const { page: currentPage, totalPages } = data;

  return (
    <section className="flex flex-col pt-20">
      <h2 className="text-3xl font-semibold">Popular Actors</h2>
      <Suspense
        key={page}
        fallback={
          <Skeleton
            type="actor"
            rows={4}
          />
        }
      >
        <ActorsPageList page={page} />
      </Suspense>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ActorsPage;
