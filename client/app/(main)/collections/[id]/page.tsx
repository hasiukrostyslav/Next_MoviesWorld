import { Metadata } from 'next';
import { getCollectionById } from '@/app/_lib/data-service';
import { convertParamToString } from '@/app/_utils/helper';
import FilmListLong from '@/app/_components/FilmListLong';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const title = convertParamToString(id) + ' Collection';

  return { title };
}

async function CollectionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const collection = await getCollectionById(id);

  const heading = convertParamToString(collection.key);

  return (
    <section className="flex flex-col py-20">
      <FilmListLong
        movies={collection.movies}
        heading={`${heading} Collection`}
      />
    </section>
  );
}

export default CollectionPage;
