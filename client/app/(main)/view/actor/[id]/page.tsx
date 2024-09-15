import { getActorById } from '@/app/_lib/data-service';
import ActorHero from '@/app/_components/ActorHero';
import CreditsList from '@/app/_components/CreditsList';

async function ActorPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const actor = await getActorById(id);

  return (
    <section className="mb-8">
      <ActorHero actor={actor} />
      <CreditsList movies={actor.credits} />
    </section>
  );
}

export default ActorPage;
