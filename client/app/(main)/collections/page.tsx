import { getCollectionsPageData } from '@/app/_lib/data-service';
import CollectionList from '@/app/_components/CollectionList';
import CollectionsHero from '@/app/_components/CollectionsHero';

async function CollectionsPage() {
  const data = await getCollectionsPageData();

  const { data: collections, results: length } = data;

  const posters = collections.map((el) => ({
    key: el.key,
    img: el.img,
  }));

  return (
    <section>
      <CollectionsHero posters={posters} />
      {collections.map((collection, i) => (
        <CollectionList
          key={collection.key}
          collection={collection}
          index={i}
          length={length}
        />
      ))}
    </section>
  );
}

export default CollectionsPage;
