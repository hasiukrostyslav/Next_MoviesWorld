import { useGetAllCollectionQuery } from '../store';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import CollectionList from '../components/CollectionList';
import CollectionsHero from '../components/CollectionsHero';

function CollectionsPage() {
  const { data, isFetching, isError } = useGetAllCollectionQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
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
}

export default CollectionsPage;
