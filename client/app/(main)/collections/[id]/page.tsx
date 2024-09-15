import { getCollectionById } from '@/app/_lib/data-service';
import FilmListLong from '@/app/_components/FilmListLong';

async function CollectionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const collection = await getCollectionById(id);

  const heading = collection.key
    .split('-')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');

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
